var mongoose = require('mongoose');

class usersRepository {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017/Itunes', { useNewUrlParser: true, useUnifiedTopology: true });
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function () {
            console.log.bind(console, 'DB connected')
        });
        this.UserSchema = new mongoose.Schema({
            userName: String,
        });
    }
}

module.exports = new usersRepository();





