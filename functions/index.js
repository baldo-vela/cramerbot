const functions = require('firebase-functions');

/// SDK Config ///
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ 
    organization: functions.config().openai.id,  //API ID key
    apiKey: functions.config().openai.key,       //API key key
});

// Initalize the OpenAI 
const openai = new OpenAIApi(configuration);

/// Exports ///
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});