const path = require('path');


const invitationData = require('../_data/invitationData.json');


module.exports = () => {
    const invitations = {};

    const keys = Object.keys(invitationData);

    for (const key of keys) {
        const inviteData = invitationData[key];
        const href = path.join('/', 'invitations', key, '/');
        const title = `Undangan: ${inviteData.namaUndangan}`;
        const description = `Yang terhormat: ${inviteData.namaUndangan}`;

        console.log('href');

        const invitation = {
            ...inviteData,
            data: {
                namaUndangan: inviteData.namaUndangan,
            },
            description,
            href,
            title,
            elements: [],
            key,
            url: href,
        }

        invitations[key] = invitation;
    }

    return invitations;
};