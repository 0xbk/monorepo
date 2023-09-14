import express from "express";
import { FancyLogger } from "@monorepo/core";

const app = express();

app.listen(3000, () => {
  FancyLogger.log("Hello, world!");
  console.log("App listening on port 3000");
});
