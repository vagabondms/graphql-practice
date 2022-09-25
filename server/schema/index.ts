import { GraphQLObjectType, GraphQLList, GraphQLSchema } from "graphql";
import Project from "./project";
import { projects, clients } from "../sampleData";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(Project),
      resolve() {
        return projects;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
