const { makeExecutableSchema } = require('graphql-tools')

const MOCK_DATA = {
  tasks: [
    {
      name: 'Make GraphQL backend',
      completed: false
    },
    {
      name: 'Integrate with Cognito user pool',
      completed: false
    }
  ]
}

const typeDefs = `
type Query {
  tasks: [Task]
}

type Task {
  name: String,
  completed: Boolean
}
`

const resolvers = {
  Query: {
    tasks() { return MOCK_DATA.tasks }
  }
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })