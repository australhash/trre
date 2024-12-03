const newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
const losAngeles = newYork.clone().tz("America/Los_Angeles");

const finalNY = newYork.format();
const finalLA = losAngeles.format();

console.log(finalNY, finalLA)
