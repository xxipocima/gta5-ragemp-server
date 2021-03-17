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