'use strict';

exports.register = (server, options, next) => {

    server.select('private').route({ method: 'GET', path:'/objects', config: {
        handler: function (request, reply) {

            request.totalCount = 3;
            return reply([
                { name: 'one' },
                { name: 'two' },
                { name: 'three' },
            ]);
        },
        plugins: {
            pagination: {
                enabled: true,
            },
        },
    } });

    next();
};

exports.register.attributes = {
    name: 'example',
    version: '1.0.0',
};
