const express = require("express");
const cors = require("cors");
const path = require("path");
const knex = require("knex");
const config = "development";
const setting = require("../knexfile")[config];
const db = knex(setting);

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/goodDay", async (_, res) => {
  const lists = await db.select().table("todo");
  res.send(lists);
});

app.post("/api/add", async (req, res) => {
  await db("todo").insert({ do: req.body.todo });
  res.send("Post page");
});

app.delete("/api/delete", async (req, res) => {
  await db("todo").del().where({ id: req.body.id });
  res.send("delete page");
});

try {
  db.migrate.latest();
  app.listen(PORT, () => console.log(`Listening PORT ${PORT}`));
} catch (err) {
  console.error(err);
}
