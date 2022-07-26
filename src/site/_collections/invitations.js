const path = require('path');


const invitationData = require('../_data/invitationData.json');


module.exports = () => {
    const invitations = {};

    const keys = Object.keys(invitationData);

    for (const key of keys) {
        const inviteData = invitationData[key];
        const href = path.join('/', 'rimailmanwedding', key, '/');
        const title = `The Wedding of Rima and Ilman`;
        const description = `Kepada Yth: ${inviteData.namaUndangan}`;

        const invitation = {
            ...inviteData,
            data: {
                namaUndangan: inviteData.namaUndangan,
            },
            description,
            href,
            title,
            elements: [],
            image: '/images/feeds/padang.JPG',
            key,
            url: href,
        }

        invitations[key] = invitation;
    }

    return invitations;
};