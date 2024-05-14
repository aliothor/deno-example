import Kenx from "npm:knex";

const knex = Kenx({
  client: "better-sqlite3",
  connection: {
    filename: ":memory:",
  },
});

const str = knex.select("title", "author", "year")
  .from("books").toQuery();

console.log(str);
