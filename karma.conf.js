// prelevo la configurazione di webpack
var webpackConfig = require('./webpack.config.js');

// config è un oggetto che viene passato e che devo impostare con set:
module.exports = function (config){
  config.set({
    browsers: ['Chrome'],     // browser da utilizzare
    singleRun: false,         // a false rimane il browser aperto e lancia il test ogni volta che cambio i file di test
    frameworks: ['mocha'],    // mocha è il frameworks con cui scriverò i test. Posso usare ad es jasmine
    files: ['app/tests/**/*.test.jsx'],  // Prendo tutti i file che sono sotto app/tests e relative sub-folder con estensione .test.jsx
    preprocessors: {  // impostazioni che si eseguono prima dei test
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] // specifico il tipo di file e le azioni da effettuare prima del test
    },
    reporters: ['mocha'],     // i reporters che utilizzo per visualizzare i fails e i success
    client: {
      mocha: {
        timeout: '5000' // 5 sec. di timeout
      }
    },
    // Impostazioni per utilizzare Webpack
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
