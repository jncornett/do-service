const server = require('apollo-server-lambda')
const schema = require('./lib/schema')

exports.handler = server.graphqlLambda((event, context) => {
  return {
    schema,
    context: {
      event,
      context
    }
  }
})
