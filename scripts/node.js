'use strict';

const MQTT = require('../services/MQTT');

async function main () {
  const mqtt = new MQTT();
  await mqtt.start();
}

main().then((result) => {
  // console.log('Result:', result);
}).catch((exception) => {
  console.error('Exception:', exception);
});
