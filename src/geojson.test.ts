// import * as turf from "https:/esm.sh/@turf/turf";
import { wktToGeoJSON } from "https://esm.sh/betterknown@1.0.3";

const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("data/all_data.json");

const res = decoder.decode(data);

const arr = JSON.parse(res);

const landArr = arr.land as any[];

landArr.forEach((i) => {
  const geosjon = wktToGeoJSON(i.wkt) as any;

  const l = geosjon.coordinates.length;

  if (l !== 1) {
    console.log(l, geosjon);
  }
});
