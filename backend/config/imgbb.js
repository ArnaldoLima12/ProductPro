const fetch = require('node-fetch');
const env = require('dotenv').config();

async function uploadAndGetURL(img64)
{
    try
    {
        let response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_KEY}`, {
            method: 'POST',
            body: new URLSearchParams({image: img64})
        });

        const photo = await response.json();
        return photo.data.url;
    }
    catch(error)
    {
        console.log('Erro -> :', error);
    }
}


module.exports = uploadAndGetURL;