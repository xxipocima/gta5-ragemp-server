mp.events.addCommand({
    "spawnPed": (player, name) => {
        if(player.myPed)player.myPed.destroy();//если уже есть удаляем и пересоздаем
        player.myPed = mp.peds.new(mp.joaat(name), new mp.Vector3(player.position.x+1, player.position.y, player.position.z), {
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

mp.events.add('guiReady', () => {// Ждем пока gui прогрузится...
    mp.events.addDataHandler({ // если простыми словами, при изменении entity.data.command на сервере, вызывается соответствующая функция на клиенте
        'command': (entity, value, oldValue) => {
            switch (value) {
                case 'enterVeh':
                    let veh = entity.getVariable("veh");
                    if (veh){
                        entity.taskEnterVehicle(veh.handle, 10000, -1, 1, 1, 0);//даем задачу сесть в машину
                        entity.vehicle = veh;
                    }
                    else mp.gui.chat.push("ped: У меня нет машины в которую я мог бы сесть :(");
                    break;
                case 'goMe':
                    if (entity.vehicle) {
                        entity.taskVehiclePark(entity.vehicle.handle, player.position.x, player.position.y, player.position.z, 0, 0, 50, false); //ехать к персонажу
                    } else {
                        entity.taskGoToCoordAnyMeans(player.position.x, player.position.y, player.position.z, 6, 0, false, 1, 0); //идти к персонажу
                    }
                    break;
                default:
                    mp.gui.chat.push("ped: Я не знаю команды " + value);
                    break;
            }
        }
    })
})