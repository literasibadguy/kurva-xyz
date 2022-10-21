const path = require('path');


const invitationData = require('../_data/invitationData.json');


module.exports = () => {
    const invitations = {};

    const keys = Object.keys(invitationData);

    for (const key of keys) {
        const inviteData = invitationData[key];
        const href = path.join('/', 'wedding', key, '/');
        const title = `The Wedding of Beauty and Bad Guy`;
        const description = `Presented for: ${inviteData.guestName}`;

        const invitation = {
            ...inviteData,
            data: {
                guestName: inviteData.guestName,
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