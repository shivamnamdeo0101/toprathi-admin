const redis = require('async-redis');

const client = redis.createClient({
  port: 10194,
  host: 'redis-10194.c270.us-east-1-3.ec2.cloud.redislabs.com',
  password:"LA3vOTDXlRUaGQ8BNTlU0TCI8I97WZmQ"
})

client.on('connect', () => {
  console.log('Client connected to redis...')
})

client.on('ready', () => {
  console.log('Client connected to redis and ready to use...')
})

client.on('error', (err) => {
  console.log(err.message)
})

client.on('end', () => {
  console.log('Client disconnected from redis')
})

process.on('SIGINT', () => {
  client.quit()
})

module.exports.client = client