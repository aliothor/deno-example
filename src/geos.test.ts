import initGeosJs from "https://cdn.skypack.dev/geos-wasm";

const geos = await initGeosJs();

const reader = geos.GEOSWKTReader_create();
const wkt = "POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))";
const wkt2 = "POLYGON ((0 0, 1 0, 1 2, 0 1, 0 0))";

const geomPtr = geos.GEOSWKTReader_read(reader, wkt);
const geomPtr2 = geos.GEOSWKTReader_read(reader, wkt2);
const areaPtr = geos.Module._malloc(8);

geos.GEOSArea(geomPtr, areaPtr);

const isEqual: 1 | 0 = geos.GEOSEquals(geomPtr, geomPtr2);

const area: number = geos.Module.getValue(areaPtr, "double");

geos.GEOSWKTReader_destroy(reader);
geos.GEOSGeom_destroy(geomPtr);
geos.GEOSGeom_destroy(geomPtr2);
geos.GEOSFree(areaPtr);

console.log(area);
console.log(isEqual);
