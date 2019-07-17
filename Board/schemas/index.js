const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if(process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://localhost:27017/nodejs', {
            dbName: 'nodejs', // schema에 해당되며 윗줄에서 명시 해놓았으니 굳이 안써도 되는 code
        }, (error) => {
            if(error) {
                console.log('MongoDB connection Error', error);
            } else {
                console.log('MongoDB connection success');
            }
        });
    };

    connect();
    mongoose.connection.on('error', (error) => {
        console.error('MongoDB connection error');
    });
    mongoose.connection.on('disconnected', () => {
        console.error('MongoDB connection close. Restart');
        connect();
    });

    require('./user');
    require('./comment');
};