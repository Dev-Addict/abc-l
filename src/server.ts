import { Application } from "https://deno.land/x/abc@v1.0.3/mod.ts";

import DataTS, { SimpleDataDto } from "./DataST.ts";
import { PORT } from "./config.ts";

const app = new Application();

const port = PORT || 3000;

app
  .get("/", (c) => ({
    status: "success",
    data: DataTS.getInstance().getSimpleData(),
  }))
  .post("/", async (c) => ({
    status: "success",
    data: DataTS.getInstance().addSimpleData(JSON.parse(await c.body())),
  }))
  .get("/:id", async (c) => ({
    status: "success",
    data: DataTS.getInstance().getOneSimpleData(c.params.id),
  }))
  .patch("/:id", async (c) => ({
    status: "success",
    data: DataTS.getInstance().updateOneSimpleData(
      c.params.id,
      JSON.parse(await c.body())
    ),
  }))
  .delete("/:id", async (c) => ({
    status: "success",
    data: DataTS.getInstance().deleteOneSimpleData(c.params.id),
  }))
  .start({ port });
