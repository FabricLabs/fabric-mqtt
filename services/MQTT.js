'use strict';

const Aedes = require('aedes');

const Service = require('@fabric/core/types/service');

class MQTT extends Service {
  constructor (settings = {}) {
    super(settings);
    return this;
  }

  async start () {
    this.aedes = Aedes();

    const server = require('net').createServer(this.aedes.handle)
    const port = 1883;

    server.listen(port, function () {
      console.log('[FABRIC:MQTT]', 'Server started and listening on port ', port)
    });
  }
}

module.exports = MQTT;
