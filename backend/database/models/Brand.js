
module.exports = function(sequelize, dataTypes){
    let alias = 'Brands'
    let cols = {
        id : { 
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        brand : { 
            type: dataTypes.STRING(100),
            allowNull: false,
        },
    }
    let config = {
        tableName : "brands",
        timestamps: false
    }

    let Brands = sequelize.define(alias, cols, config);

    Brands.associate = function(models){

        Brands.hasMany(models.Phones, {
            as: "phones",
            foreignKey : "idBrand"
        })
        
    }

    return Brands;
}