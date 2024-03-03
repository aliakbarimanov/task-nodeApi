const UsersModel = require("../models/users");

async function getUsers(req, res, next){
    let user;

    try{
        user = await UsersModel.findById(req.params.id);
        if(user == null){
            return res.status(404)
                      .json({message: "Category not found!"});
        }
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }

    res.user = user;
    next();
}

module.exports = getUsers;