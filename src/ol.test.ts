import { GeoJSON } from "https://esm.sh/ol@8.2.0/format";
import { Point, Polygon } from "https://esm.sh/ol@8.2.0/geom";
import Feature from "https://esm.sh/ol@8.2.0/Feature";
import pkg from "https://esm.sh/ol@8.2.0/package.json" with { type: "json" };

const f = new Feature({
  geometry: new Point([0, 0]),
});

const f2 = new Feature({
  geometry: new Point([1, 1]),
});

console.log(pkg.version);
