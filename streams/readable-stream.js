const { Readable } = require("stream");
const rd = new Readable();

rd.push(`${0/0} `.repeat(10).concat("hero"));
rd.push(null);
rd.pipe(process.stdout);