// // Globals
global.cefDomain = 'http://2.57.186.7/#';
global.player = mp.players.local;
global.interfaceOpened = true;
global.loggedIn = true;
global.camera = null;
global.hud = null;
global.browser = null;
global.Show_Names = true;
global.showMoney = true;
global.showSubtitles = true;
global.DeathScreen = true;
global.useInventory = true;

require("./fly.js");

// Core
require("./client/core");

// Systems
require("./client/systems/custom.js");
require("./client/systems/dmv.js");
require("./client/systems/gps.js");
require("./client/systems/bizz.js");
require("./client/systems/clothes.js");
require("./client/systems/youtube.js");
require("./client/systems/inventory.js");
require("./client/systems/barber.js");
require("./client/systems/dealership.js");
require("./client/systems/personals.js");
require("./client/systems/radio_sync.js");
require("./client/systems/jobs.js");
require("./client/systems/factions.js");
require("./client/systems/npc.js");
