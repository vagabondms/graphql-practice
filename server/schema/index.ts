import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLEnumType,
  GraphQLBoolean,
} from "graphql";
import Project from "./project";
import { projects, clients } from "../sampleData";
import Client from "./client";

const RootQuery = new GraphQLObjectType({
  name: "Query",
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

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createProject: {
      type: Project,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "status",
            values: {
              progress: { value: "In Progress" },
              done: { value: "Done" },
            },
          }),
        },
        clientId: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(_, args) {
        const newProject = {
          id: projects.length + 1,
          ...args,
        };

        projects.push(newProject);

        return newProject;
      },
    },
    deleteProject: {
      type: GraphQLBoolean,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(_, args) {
        const targetId = projects.findIndex(
          (project) => project.id === args.id
        );
        if (targetId !== undefined) {
          projects.splice(targetId, 1);
          return true;
        }
        return false;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default schema;
