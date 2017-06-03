'use strict';

// load dependencies

const Glue = require('glue');
const Path = require('path');

// declare internals

const internals = {
    manifest: require('config'),
};

// Hapi + Joi + Node Config don't like each other
// https://github.com/lorenwest/node-config/issues/223
internals.cleanConfig = (config) => {

    return JSON.parse(JSON.stringify(config));
};

internals.generateHapiManifest = (manifest) => {

    return Object.assign({}, {
        connections: internals.cleanConfig(manifest.get('connections')),
        registrations: internals.cleanConfig(manifest.get('registrations')),
    });
};

Glue.compose(internals.generateHapiManifest(internals.manifest), { relativeTo: Path.join(__dirname, '/lib') }, (err, server) => {

    if (err) {
        console.error(err);
        process.exit(1);
    }
    else {
        server.start((err) => {

            if (err) {
                server.log(['error'], { err: err.message });
                process.exit(2);
            }
        });
    }
});
