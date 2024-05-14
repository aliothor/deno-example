/// <reference lib="deno.worker" />

import { GeoJSON } from "https://esm.sh/ol@7.2.2/format";

import * as turf from "https://esm.sh/@turf/turf@6.5.0";

const geojsonFormat = new GeoJSON();

const textEncoder = new TextEncoder();

function add(a: number, b: number): number {
  return a + b;
}

interface AddParams {
  a: number;
  b: number;
}

self.onmessage = (e: MessageEvent<AddParams>) => {
  const { a, b } = e.data;

  console.log("main data", a, b);

  const fc = turf.randomPolygon(25, { bbox: [-180, -90, 180, 90] });

  const featureArrayStr = JSON.stringify(geojsonFormat.readFeatures(fc));

  self.postMessage(textEncoder.encode(JSON.stringify(fc)));

  self.close();
};
