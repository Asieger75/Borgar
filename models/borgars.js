var orm = require('../config/orm');

var borgar = {
    all: function(cb){
        orm.all('borgars',function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update('borgars',id,cb);
    },

create: function(name,cb){
    orm.create('borgars', name, cb);
}

}

module.exports = borgar;