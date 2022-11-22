
const { default: axios } = require('axios');

// module.exports = async () => {
//     try {
//         let url = `http://localhost:1337/api/dimsum-menus?populate=*`;
        
//         // GETTING STRAPI API DATA
//         let json = await axios.get(url, {
//             headers: {
//                 Authorization: 'bearer 06d1584c7ac2bd7efed5c233ebd3a3f889ed8d5dcf71b0a5ecb05a4b066611cc6ebf7362e497b2ff3156ad2a8ea39f335c6f1b1e2d11e15c63066a6837a4282f0a81a4809657d412c31ff1bf82ec0ee70149e4951e09d32784c9c29dddb13c5a266ad6a6cd05cd156ba826799beebc18f2ea5fa8d4d39a6e4025ca7a1d9bdd3b'
//             }
//         })

//         // let jsonFetch = await EleventyFetch(url, {
//         //     type: "json",
//         //     duration: ".cache/eleventy-fetch/",
//         //     headers: {
//         //         Authorization: 'bearer 06d1584c7ac2bd7efed5c233ebd3a3f889ed8d5dcf71b0a5ecb05a4b066611cc6ebf7362e497b2ff3156ad2a8ea39f335c6f1b1e2d11e15c63066a6837a4282f0a81a4809657d412c31ff1bf82ec0ee70149e4951e09d32784c9c29dddb13c5a266ad6a6cd05cd156ba826799beebc18f2ea5fa8d4d39a6e4025ca7a1d9bdd3b'
//         //     }
//         // });
//         // console.log(menus);

//         // console.log(json.data.data);

//         return {
//             dimsums: json.data.data
//         }
//     } catch (e) {

//         console.log("Failed, returning strapi data API.", e);

//         return {
//             dimsums: [],
//         }
//     }
// }