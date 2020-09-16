const request = require('request');

module.exports.getOrderStatus = async event => {
  const orderID = event.currentIntent.slots["Pedido"];




  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    return {
      "sessionAttributes": {},
      "dialogAction": {
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {
          "contentType": "PlainText",
          "content": body.statusDescription
        }
      }
    }
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};



'use strict';
const axios = require("axios");

module.exports.getWeather = async (event) => {
  const orderID = event.currentIntent.slots["Pedido"];
  
  //This API information should be put somewhere safe
  //And probably hit the Auth API to get proper tokens
  const options = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-vtex-api-appkey': 'vtexappkey-hiringcoders15-RCHJLW',
      'x-vtex-api-apptoken': 'SOVMIRVBGNODAILKBAOGZBFXPUBFIKSCIEQZGVDBWEIIGVUITSKZHOGRJXWOQQSVVMVWRLEFXNKVSXRUZTMQZSUUYZQIZOLGLMNUAYRHOFBTDKYMGBOXDCVCRAYRVVGI',
      vtexidclientautcookie: 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjBEN0REN0UzMUMzRTI4MkEwNEI0M0VGNUY5MDQ5ODZCMUY3RUM3RjYiLCJ0eXAiOiJqd3QifQ'
    }
  };

  try {
    const response = await axios.get(url);
    const data = response.data;

    const answer = "The temperature is " + data.main.temp + "C and Humidity is " + data.main.humidity + "% and " + data.weather[0].description + " is expected.";

    return {
      "sessionAttributes": {},
      "dialogAction": {
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {
          "contentType": "PlainText",
          "content": answer
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};