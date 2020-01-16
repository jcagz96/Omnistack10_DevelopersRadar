const axios = require('axios');
const Dev = require('../models/Dev');


// normal controller methods: index, show, store, update, destroy 
module.exports = {

    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            let { name = login, avatar_url, bio } = apiResponse.data;   //if name doesn't exist , then name will be equals to login name

            const techsArray = techs.split(',').map(tech => tech.trim());  //split string to array by "," separator, then go throught array and trim possible spaces in each string 

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }



        res.json(dev);
    }





}