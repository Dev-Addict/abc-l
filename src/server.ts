import { Application } from "https://deno.land/x/abc@v1.0.3/mod.ts";

import DataTS from "./DataST.ts";
import { PORT } from "./config.ts";

const app = new Application();

const port = PORT || 3000;

app
  .get("/", (c) => {
    return {
      status: "success",
      data: DataTS.getInstance().getSimpleData(),
    };
  })
  .start({ port });
