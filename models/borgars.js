var orm = require('../config/orm');

var borgar = {
    all: function(cb){
        orm.all('borgars',function(res){
            cb(res);
        })
    }
}

module.exports = borgar;