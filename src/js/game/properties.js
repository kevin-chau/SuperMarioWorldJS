var npmProperties = require('../../../package.json');

module.exports =
  { title: 'SuperMarioWorldJS'
  , description: npmProperties.description
  , port: 8888
  , liveReloadPort: 8889
  , mute: false
  , showStats: true
  , analyticsId: 'UA-50892214-2'
  };
