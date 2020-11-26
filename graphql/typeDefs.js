const { gql } = require('apollo-server');

module.exports =  gql `
type Post{
    id: ID!
    username: String!
    body: String!
    NumberOfLikes: Int!
    NumberOfComments: Int!
    likes: [Like]!
    comments: [Comment]!
    creationTime: String !
}

type Like {
    id: ID!
    username: String !
    creationTime: String !
}

type Comment {
    id: ID !
    body: String !
    username: String !
    creationTime: String !
}

type User {
    id: ID !
    email: String !
    token: String!
    username: String!
    creationTime: String !
}

input RegisterInput  {
    username: String !
    password: String !
    confirmPassword: String !
    email: String !
}

type Query{
    getPosts: [Post]
    getPost (postId: ID! ): Post
}

type Mutation {
    login(username: String!, password: String!): User !
    register(registerInput:RegisterInput): User !
    createPost(body:String!): Post!
    deletePost(postId:ID!): String !
    createComment(postId: String!,body: String!): Post !
    deleteComment(postId:ID!, commentId:ID!): Post !
    likeAndUnlikePost(postId:ID!): Post !
}

type Subscription {
    newPost: Post !
}
`