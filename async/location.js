var request = require('request');
var url = 'http://ipinfo.io';


module.exports = function() {
    return new Promise(function(resolve, rejects) {
        request({
            url: url,
            json: true
        }, function(error, response, body) {
            if (error) {
                reject();
            } else {
                resolve(body);
            }
        });

    });
};
