var users = {
    user1: {
        nombre: "Jorge",
        apellido: "Islas",
        sede: "Capital Federal",
        id: 1
    },
    user2: {
        nombre: "Ezequiel",
        apellido: "Bogado",
        sede: "Cabildo",
        id: 2
    },
    user3: {
        nombre: "Juan",
        apellido: "Perez",
        sede: "Recoleta",
        id: 3
    },
    user4: {
        nombre: "Ezequiel",
        apellido: "Garay",
        sede: "Primera Junta",
        id: 4
    }
}

var contador =5;

exports.create = function(req, res) {
    var newuser = req.body;
    //users["user" + newuser.id] = newuser;
    newuser.id = contador;
    users["user" + contador] = newuser;
    contador = contador + 1;
    console.log("---> users:\n" + JSON.stringify(users, null, 4));
    res.end("Usuario creado satisfactoriamente: \n" + JSON.stringify(newuser, null, 4));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(users, null, 4));
    res.end("Todos los usuarios: \n" + JSON.stringify(users, null, 4));
};

exports.findOne = function(req, res) {
    var user = users["user" + req.params.id];
    console.log("--->Buscar user: \n" + JSON.stringify(user, null, 4));
    res.end( "Buscar user:\n" + JSON.stringify(user, null, 4));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updateduser = req.body;
    if(users["user" + id] != null){
        // update data
        users["user" + id] = updateduser;

        console.log("--->Actualización completada, users: \n" + JSON.stringify(users, null, 4))

        // return
        res.end("Actualización Finalizada! \n" + JSON.stringify(updateduser, null, 4));
    }else{
        res.end("Usuario no encontrado:\n:" + JSON.stringify(updatedregla, null, 4));
    }
};

exports.delete = function(req, res) {
    var deleteuser = users["user" + req.params.id];
    delete users["user" + req.params.id];
    console.log("--->user eliminado:\n" + JSON.stringify(users, null, 4) );
    res.end( "Usuario Eliminado: \n" + JSON.stringify(deleteuser, null, 4));
};