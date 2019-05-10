import express from "express";
const app = express();
const port = 5000;
import { getAlbum } from "./gphotos";

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * @Function
 * Defines a route handle for the default home page
 */
// Defines a route handler for the default home page
app.get("/:id", async (req, res) => {
  try {
    const results = await getAlbum(req.params.id);
    res.json(results);
  } catch (e) {
    res.status(500);
  }
});

/**
 * @Function
 * Starts the express Server
 */
app.listen( process.env.port || port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http:localhost:${port}`);
});
