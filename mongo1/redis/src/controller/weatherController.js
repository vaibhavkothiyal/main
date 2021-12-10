const express = require('express');
const Weather = require('../model/weatherModel');

const router = express.Router();
const client = require('../config/redis');

router.get("/", async (req, res) => {
    try {
        const page=+req.query.page || 1;
        const size=+req.query.size || 2;
 
        const skip=(page-1) *size;

        var forcast = await client.get("weather_forcasts");

        if (forcast) return res.status(200).send(JSON.parse(forcast));

        const weather_forcasts = await Weather.find().skip(skip).limit(size).lean().exec();
        
        await client.set("weather_forcasts", JSON.stringify(weather_forcasts));
        
        return res.status(200).send(weather_forcasts);

    } catch (e) {
        return res.status(500).json({ message: e.messge, status: "Failed" })
    }
});

router.post("/", async (req, res) => {
    try {
        const weather_forcast = await Weather.create(req.body);

        const weather_forcasts= await Weather.find().lean().exec();

        await client.set("weather_forcasts", JSON.stringify(weather_forcasts));

        return res.status(201).json(weather_forcast);

    } catch (e) {
        return res.status(500).json({ message: e.messge, status: "Failed" })
    }
});

router.get("/:id", async (req, res) => {
    try {
        var forcast = await client.get(`weather_forcasts.${req.params.id}`);

        if (forcast) return res.status(200).send(JSON.parse(forcast));

        const weather_forcast = await Weather.findById(req.params.id).lean().exec();

        await client.set(`weather_forcasts.${req.params.id}`,JSON.stringify(weather_forcast))

        return res.status(201).json(weather_forcast);

    } catch (e) {
        return res.status(500).json({ message: e.messge, status: "Failed" })
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const weather = await Weather.findByIdAndDelete(req.params.id).lean().exec();

        await client.del(`weather_forcasts.${req.params.id}`);

        const weather_forcasts= await Weather.find().lean().exec();

        await client.set("weather_forcasts", JSON.stringify(weather_forcasts));

        return res.status(201).json(weather);

    } catch (e) {
        return res.status(500).json({ message: e.messge, status: "Failed" })
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const weather = await Weather.findByIdAndUpdate(req.params.id, req.body, { new: true });

        await client.set(`weather_forcasts.${req.params.id}`,JSON.stringify(weather));

        const weather_forcasts= await Weather.find().lean().exec();

        await client.set("weather_forcasts", JSON.stringify(weather_forcasts));

        return res.status(201).json(weather);

    } catch (e) {
        return res.status(500).json({ message: e.messge, status: "Failed" })
    }
});


module.exports = router;
