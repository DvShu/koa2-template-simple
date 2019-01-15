const MongoAdapt = require('mongo-adapt');
const mongoConfig = require('../../config').mongo;

const mongoAdapt = new MongoAdapt(mongoConfig);

module.exports = mongoAdapt;