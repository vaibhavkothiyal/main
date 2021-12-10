// const redis= require('redis');
// const client=redis.createClient();


// client.on('error', function(err){
//     console.log("here cheaking")
//     console.log('Redis Client Error', err);
// });

// module.exports = client;

const {createClient} = require('redis');
const client = createClient();

(async () => {
    await client.connect();

    client.on('error', (err) => console.log('Redis Client Error', err));
    // await client.set('redis_chk', 'still searching');
    // const value = await client.get('redis_chk');
    // console.log(value);

})();

module.exports =  client;