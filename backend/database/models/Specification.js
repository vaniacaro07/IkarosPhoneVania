module.exports = function(sequelize, dataTypes){
    let alias = 'Specifications'
    let cols = {
        id : { 
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        internalMemory : { 
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        externalMemory : { 
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        ram : { 
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        camera: {
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        frontalCamera : { 
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        recorder: { 
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        resolution : { 
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        size : { 
            type: dataTypes.STRING(45),
            allowNull: true,
        }
    }
    let config = {
        timestamps: false
    }

    let Specifications = sequelize.define(alias, cols, config);

    Specifications.associate = function(models){

        Specifications.hasOne(models.Phones,{
            as:"phone",
            foreignKey: "idSpecification"
        })
        
    }

    return Specifications;
}