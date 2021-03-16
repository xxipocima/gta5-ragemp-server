mp.events.addCommand({
  "spawnPed": (player, name) => {
    if(player.myPed)player.myPed.destroy();//если уже есть удаляем и пересоздаем
    player.myPed = mp.peds.newLegacy(mp.joaat(name), new mp.Vector3(player.position.x+1, player.position.y, player.position.z), {
      dynamic: true,
      invincible: false,//true - npс бесмертный false - npс смертный
    });
    player.myPed.controller = player;//указываем, кто будет выступать в роли контроллера.
    if(player.myVeh)player.myPed.data.veh = player.myVeh; //привязали к NPC машину чтобы в дальнейшем могли обратится именно к ней уже на клиенте
  },
  "spawnVeh": (player, name) => {
    if(player.myVeh)player.myVeh.destroy();//если уже есть удаляем и пересоздаем
    player.myVeh = mp.vehicles.new(mp.joaat(name), new mp.Vector3(player.position.x+3, player.position.y, player.position.z), {
      numberPlate: 'RAGEMP',
      color:[[0,0,0],[0,0,0]],
      alpha: 255,
      locked: false,
      dimension: player.dimension,
    });
    if(player.myPed)player.myPed.data.veh = player.myVeh; //привязали к NPC машину чтобы в дальнейшем могли обратится именно к ней уже на клиенте
  },
  "ped": (player, command) => {
    player.myPed.data.command = command; //Даем команду NPС
  }
});
console.log('NPC creator ar loaded fully');