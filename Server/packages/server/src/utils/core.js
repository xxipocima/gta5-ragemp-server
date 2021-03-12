module.exports = {
  loadSystems: function(){
    var systems = require('require-all') ({
      dirname : '/home/gta5-ragemp-server/Server/packages/server/src/systems',
      filter  : /^(index)\.js$/
    });
	console.log("Core is up!!!");
  }
}

