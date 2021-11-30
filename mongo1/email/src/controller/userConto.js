const express = require('express');
const sendMail = require('../utils/mail')
const User = require('../models/userModel');
const Admin = require('../models/adminsModel');

const router = express.Router();
router.post('', async (req, res) => {
    try {
        const user = await User.create(req.body);

        sendMail(
            "vaibhavInfo@gmail.com",
            `${user.email}`,
            `Welcome to vaibhav Info.Tech ${user.first_name} ${user.last_name}`,
            `Hi ${user.first_name}, Please confirm your email address`,
            `<h1>Hi ${user.first_name}, Please confirm your email address</h1>`
        );

        const admin = await Admin.find().lean().exec();
        var count = 0;
        var i = 0;
        let intervalTimerId = setInterval(chkfun, 3000);

        function chkfun() {
            count++;
            if (count == 5) {
                clearInterval(intervalTimerId);
            }
            sendMail(
                "vaibhavInfo@gmail.com",
                `${admin[i].email}`,
                `${user.first_name} ${user.last_name},has registered with us`,
                `Please welcome ${user.first_name} ${user.last_name}`,
                `<h1>Please welcome ${user.first_name} ${user.last_name}</h1>`
            );
            i++;
        }

        res.status(201).send(user);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get('', async (req, res) => {
    try {
        const topic = await User.find().lean().exec();
        res.status(201).send(topic);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

module.exports = router;