'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    console.log(`[INFO] Mongo DB Connection Try..`)
    
    const client = await fastify.mongo.client.connect();
    
    try {
      if (client !== null) {
        console.log(`[INFO] Mongo DB Connection Success!`)
        const test = this.mongo.client.db('test')
        const article = test.collection('article')
        await article.insertOne({ 'title' : '9팀 테스트' })
        const result = await article.find({}).toArray();
        reply.code(200).send(result)
      }
    } finally {
      client.close();
    }
  })
}