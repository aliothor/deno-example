import SPL from "npm:spl.js";
import Kenx from "npm:knex";

const knex = Kenx({
  client: "better-sqlite3",
  connection: {
    filename: ":memory:",
  },
  useNullAsDefault: false,
});

const sampleUrl = "C:\\Users\\15165\\Downloads\\London_Boroughs.gpkg";

const sampleBuffer = await Deno.readFile(sampleUrl);

const spl = await SPL({
  // autoGeoJSON: {
  //     precision: 0,
  //     options: 0,
  // },
});

const db = await spl.db(sampleBuffer.buffer);

await db.exec("select EnableGpkgAmphibiousMode()");
// await db.exec('SELECT InitSpatialMetaData(1)')

const srid = await db.exec("SELECT SRID(geom) FROM london_boroughs").get.first;

console.log(srid);

const queryInfoStr = knex.select("name", "gss_code").from(
  "london_boroughs",
).toQuery();

// const infos = await db.exec(queryInfoStr).get.objs;

// console.log(infos);

const testRes = await db.exec();

console.log(testRes);

close();
