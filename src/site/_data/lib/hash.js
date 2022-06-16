
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

const hashLength = 8;
const isProd = process.env.ELEVENTY_ENV === 'prod';
const isStaging = process.env.ELEVENTY_ENV === 'staging';

function randomHash() {
    return Math.random().toString(16).substring(2);
}

function generateAndValidateHash(c)  {
    const hash = c.digest('hex').substr(0, hashLength);
    if (hash.length !== hashLength) {
        throw new TypeError('could not hash content');
    }
    return hash;
}

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function sha256base64(str) {
    const c = crypto.createHash('sha256');
    c.update(str);
    return c.digest('base64');
}

/**
 * Hashes the passed files. Requires at least one.
 * 
 * @param {string} file bash file to hash
 * @param  {...any} rest additional files to hash
 * @returns 
 */
function hashForFiles(file, ...rest) {
    const files = [file].concat(rest);

    const c = crypto.createHash('sha1');

    for (const file of files) {
        const b = fs.readFileSync(file);
        c.update(b);
    }

    return generateAndValidateHash(c);
}

const hashForProdCache = {};

function hashForProd(file) {
    if (!isProd && !isStaging) {
        return `${file}?v=${randomHash()}`;
    }

    let hash = hashForProdCache[file];
    if (hash === undefined) {
        const distPath = path.join(process.cwd(), 'dist', file);
        try {
            hash = hashForFiles(distPath);
        } catch (err)  {
            console.error('Could not find asset at', file);
        }

        hashForProdCache[file] = hash;
    }

    return `${file}?v=${hash}`;
}

module.exports = {
    hashForProd,
    randomHash,
    sha256base64,
}