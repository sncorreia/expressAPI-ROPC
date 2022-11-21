const express = require("express");
const router = express.Router();

const fetch = require('../helpers/fetchHelper');
const auth = require('../helpers/authHelper');

router.route("/").get(async (req, res, next) => {
    const apiEndpoint = "https://graph.microsoft.com/v1.0/me/presence";
    try {
        const authResponse = await auth.getToken(auth.tokenRequest);
        const presence = await fetch.callApi(apiEndpoint, authResponse.accessToken);
        res.status(200).json(presence);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;