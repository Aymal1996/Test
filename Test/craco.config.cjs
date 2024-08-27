const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: { '@primary-color': '#4CAF50', '@font-family': 'Poppins, sans-serif' },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};