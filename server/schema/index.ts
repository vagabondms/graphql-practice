import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
} from "graphql";
import Project from "./project";
import { projects, clients } from "../sampleData";
import Client from "./client";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(Project),
      resolve() {
        return projects;
      },
    },
    clients: {
      type: new GraphQLList(Client),
      resolve() {
        return clients;
      },
    },
    client: {
      type: Client,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return clients.find((item) => item.id === args.id);
      },
    },
    project: {
      type: Project,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return projects.find((item) => item.id === args.id);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
