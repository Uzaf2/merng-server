const commentsResolvers = require("./comments")
const usersResolvers = require("./users")
const postsResolvers = require("./posts")
module.exports = {
    Query: {
        ...postsResolvers.Query
    },
        Mutation: {
            ...commentsResolvers.Mutation,
            ...usersResolvers.Mutation,
            ...postsResolvers.Mutation
        },
        Subscription: {
            ...postsResolvers.Subscription
        }
}
