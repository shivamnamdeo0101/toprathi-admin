const {client } = require('../helpers/init_redis');

const expirationTime = process.env.REDIS_CACHE_EXPIRATIME_TIME; //second
async function  set(key, data) {
    await client.setex(key,expirationTime, data);
}
async function  get (key) {
    return await client.get(key);
}
async function  clearCache(key){
    return await client.del(key);
}
async function setCache(KeyFormat,id, data){
    let key = KeyFormat+id;
    return await set(key,JSON.stringify(data))
}
async function getCache (KeyFormat,id){
    let key = KeyFormat +id;
    let data = await get(key);
    return JSON.parse(data);
}

module.exports.getCache = getCache;
module.exports.setCache = setCache;
module.exports.clearCache = clearCache;

