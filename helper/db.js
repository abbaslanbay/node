const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://coderfour:db12345@ds163822.mlab.com:63822/heroku_rgh19srr')
    mongoose.connection.on('open',() => {
        console.log('Bağlantı sağlandı')
      });
      mongoose.connection.on('error',(err) => {
        console.log('Bağlantı koptu',err)
      });

      mongoose.Promise = global.Promise;
}