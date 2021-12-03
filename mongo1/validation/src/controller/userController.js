const express = require('express');
const { check, validationResult } = require('express-validator');

const User = require('../models/userModel');

const router = express.Router();


router.post('/',
check("first_name").notEmpty().withMessage("name is required"),
check("last_name").notEmpty().withMessage("name is required"),
check("email").isEmail().normalizeEmail().withMessage("enter valid email"),
check("pincode").isNumeric().withMessage("pincode can only be numeric").isLength({min:6,max:6}).withMessage("pincode should be of length 6"),
check("age").isInt({min:1,max:100}).withMessage("age should be betwwen 1 to 100"),

async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        let error=result.array().map(({msg,param,location})=>{
;           return {[param]:msg};
        })
        return res.status(400).json(error);
    }
    console.log(typeof req.body.gender,typeof "M")
    if(req.body.gender==="M" || req.body.gender==="F" || req.body.gender==="O");
    else{return res.status(400).json({gender:"invalid gender"})};

    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports = router;

// if (!result.isEmpty()) {
//     let error=result.errors[0].msg;
//     let at=result.errors[0].param;
//     return res.status(400).send({error,at});
// }