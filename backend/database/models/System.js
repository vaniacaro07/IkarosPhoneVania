module.exports = function(sequelize, dataTypes){
    let alias = 'Systems'
    let cols = {
        id : { 
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true, 
        },
        system : { 
            type: dataTypes.STRING(45),
            allowNull: false,
        }
    }
    let config = {
        tableName : "systems",
        timestamps: false
    }

    let Systems = sequelize.define(alias, cols, config);

    Systems.associate = function(models){
        Systems.hasMany(models.Phones, {
            as: "phones",
            foreignKey : "idSystem"
        })
    }

    return Systems;
}