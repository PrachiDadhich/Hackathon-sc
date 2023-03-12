const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MkirTSDFCbdq8pybS05rsKsyenTRAfNMWpjuiYri6zMlp904zVdd2sVWJgv6J6cknOQNvsQArUN2FPratam1vOB00JQsRfFvn')

//App config
const app = express();
//Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//Api routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received BOOM!!! for this amount >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen command4

exports.api = functions.https.onRequest(app)