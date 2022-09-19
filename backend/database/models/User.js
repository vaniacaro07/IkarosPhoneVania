module.exports = function(sequelize, dataTypes){
    let alias = 'Users'
    let cols = {
        id : { 
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fullName : { 
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        email : { 
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        password : { 
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        avatar : { 
            type: dataTypes.STRING(100),
        },
        admin : { 
            type: dataTypes.BOOLEAN
        }
    }
    let config = {
        tableName : "users",
        timestamps: false
    }

    let Users = sequelize.define(alias, cols, config);

    return Users;
}