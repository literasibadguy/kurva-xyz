const path = require('path');


const invitationData = require('../_data/invitationData.json');


module.exports = () => {
    const invitations = {};

    const keys = Object.keys(invitationData);

    for (const key of keys) {
        const inviteData = invitationData[key];
        const href = path.join('/', 'invitations', key, '/');
        const title = `The Weeding of Rima and Ilman - Mengundang ${inviteData.namaUndangan}`;
        const description = `Yang terhormat: ${inviteData.namaUndangan} - The Weeding of Rima and Ilman`;

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