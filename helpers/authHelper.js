const msal = require("@azure/msal-node");
const config = require('../config.json');

const msalConfig = {
    auth: {
        clientId: config.azuread.clientID,
        authority: config.azuread.aadEndpoint + config.azuread.tenantId
        // clientSecret: config.azuread.clientSecret,
    }
};

const tokenRequest = {
    scopes: [config.azuread.graphEndpoint + '.default'], // e.g. 'https://graph.microsoft.com/.default'
    username: config.azuread.automationUsername,
    password: config.azuread.automationPassword
};

const apiConfig = {
    uri: config.azuread.graphEndpoint + 'v1.0/me/presence', // e.g. 'https://graph.microsoft.com/v1.0/me/presence'
};

const pca = new msal.PublicClientApplication(msalConfig);

/**
 * Acquires token ROPC.
 * @param {object} tokenRequest 
 */
async function getToken(tokenRequest) {
    return await pca.acquireTokenByUsernamePassword(tokenRequest)
}

module.exports = {
    apiConfig: apiConfig,
    tokenRequest: tokenRequest,
    getToken: getToken
};