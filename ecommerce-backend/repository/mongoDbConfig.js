const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/prod');
class MongoDB {
    constructor() {
        if (!MongoDB.instance) {
            mongoose.connect(MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, (err) => {
                if (err) {
                    console.error("[MONGO-DB-CONFIG]::Error:: Not Connected!!!", err);
                } else {
                    console.log("[MONGO-DB-CONFIG]::Connected!!!");
                }
            });
        }
    }

}

const mongoDB = new MongoDB();
Object.freeze(mongoDB);

module.exports = { mongoDB }