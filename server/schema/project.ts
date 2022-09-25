import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import Client from "./client";
import { clients } from "../sampleData";

const Project = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: Client,
      resolve(parent) {
        return clients.find((client) => client.id === parent.clientId);
      },
    },
  }),
});

export default Project;
