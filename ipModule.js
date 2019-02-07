const fs = require('fs');
//This module depends on geoip-lite v 1.3.6 module
const geoIp = require('geoip-lite');
const ipModule = {};

ipModule.ipFetching = (req)=>{
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;
    var geo = geoIp.lookup(ip);
    console.log(geo);
}


module.exports = ipModule;