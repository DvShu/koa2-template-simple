const mongoose = require('mongoose');
const logger = require('self-log').getLogger('mongoose');
let mongoUrls = require('../config').mongoose;

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('runValidators', true);
mongoose.set('bufferCommands', false);

mongoUrls.dbs.forEach((dbName, i) => {
    let db;
    if (i === 0) {
        mongoose.connect(mongoUrls.url, { dbName });
        db = mongoose.connection;
        db.once('open', () => {
            logger.info('Connected to mongodb success!');
        })
    } else {
        db = mongoose.createConnection(mongoUrls.url, { dbName });
    }

    db.on('error', (err) => {
        logger.error(err);
    });
    db.on('disconnected', () => {
        logger.warn('mongodb disconnected!')
    });
});

// require('./schema');

/**
 * 获取 model 模块
 * @param modelName model 模块 name
 * @param connIndex 构建的 connection index, 配置的连接中对应的索引
 */
module.exports = (modelName, connIndex = 0) => {
    if (connIndex === 0) {
        return mongoose.model(modelName);
    } else {
        return mongoose.connections[connIndex].model(modelName);
    }
};