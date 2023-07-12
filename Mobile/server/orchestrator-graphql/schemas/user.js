const axios = require("axios");
const Redis = require("ioredis");
require("dotenv").config();

const USER_SECOND_SERVER_URL =
  process.env.USER_SECOND_SERVER_URL || "http://localhost:4001";

const redis = new Redis(18675, process.env.REDISLAB_URL);

const typeDefs = `#graphql
   type userData {
      _id: ID!,
      username: String,
      email: String,
      password: String,
      phoneNumber: String,
      address: String
   }

   input inputData {
      username: String,
      email: String,
      password: String,
      phoneNumber: String,
      address: String
   }

   type responseCreateUser {
      id: String,
      email: String,
      username: String
   }

   type responseDeleteUser {
      message: String
   }

   # Query (get data)
   type Query {
      # pakai resolver users untuk get all
    users: [userData],
      # pakai resolver userDetailData untuk get User by Id, masukan Id secara manual di localhost apolo
    userDetailData(userId: ID!): userData 
  }

   # Mutation (post/put/patch)
  type Mutation {
    createUser(newUser: inputData) : responseCreateUser,
    deleteUser(userId: ID!) : responseDeleteUser
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      try {
        let userDataCached = await redis.get("users");

        if (userDataCached) {
          let usersData = JSON.parse(userDataCached);
          //  console.log(usersData, "xxxxx>>>>>>>>>");
          return usersData;
        }

        const { data } = await axios.get(`${USER_SECOND_SERVER_URL}/users`);

        redis.set("users", JSON.stringify(data));

        //   console.log(data, "adsfasd>>>>>>>>>");
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    userDetailData: async (_, { userId }) => {
      try {
        const { data } = await axios.get(
          `${USER_SECOND_SERVER_URL}/users/${userId}`
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    createUser: async (_, newUserData) => {
      try {
        const { newUser } = newUserData;

        const { data } = await axios.post(
          `${USER_SECOND_SERVER_URL}/users`,
          newUser
        );

        redis.del("users");

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    deleteUser: async (_, { userId }) => {
      try {
        const { data } = await axios.delete(
          `${USER_SECOND_SERVER_URL}/users/${userId}`
        );

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
