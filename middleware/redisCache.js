const {client } = require('../helpers/init_redis');

const expirationTime = 1800; //second

async function  set(key, data) {
    await client.setex(key,expirationTime, data);
}
async function  get  (key) {
    return await client.get(key);
}
async function  clear  (key){
    return await client.del(key);
}
async function  setCache  (data){
    return await set(key,JSON.stringify(data))
}
async function getCache (key){
    var data = await get(key);
    return JSON.parse(data);
}

async function  getNewsCache  (req,res,next){
    //setCache("news_cahce",{"name":"shiavm"})
    return next()
}

module.exports.getNewsCache = getNewsCache;

