"use strict";
var mongoose = require('mongoose');
var _a = process.env, MONGO_USERNAME = _a.MONGO_USERNAME, MONGO_PASSWORD = _a.MONGO_PASSWORD, MONGO_HOSTNAME = _a.MONGO_HOSTNAME, MONGO_PORT = _a.MONGO_PORT, MONGO_DB = _a.MONGO_DB;
var options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
};
var url = "mongodb://" + MONGO_USERNAME + ":" + MONGO_PASSWORD + "@" + MONGO_HOSTNAME + ":" + MONGO_PORT + "/" + MONGO_DB + "?authSource=admin";
mongoose.connect(url, options).then(function () {
    console.log('MongoDB is connected');
})
    .catch(function (err) {
    console.log(err);
});
