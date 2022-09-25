import express from "express";
import cors from "cors";
require("dotenv").config();
import { graphqlHTTP } from "express-graphql";

import schema from "./schema";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Server running on port ${port}`));
