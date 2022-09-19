
module.exports = function(sequelize, dataTypes){
    let alias = 'Phones';
    let cols = {
        id: { 
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idBrand:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        model: { 
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        category: { 
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        idSystem:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        description: { 
            type: dataTypes.TEXT,
            allowNull: false,
        },
        image: { 
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        video: { 
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        price: { 
            type: dataTypes.DECIMAL(8,2),
            allowNull: false,
        },
        discount: { 
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        idSpecification:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
        
    }
    
    let config = {
        timestamps: false,
    }

    let Phones = sequelize.define(alias, cols, config);

    Phones.associate = function(models){

        Phones.belongsTo(models.Brands, {
            as: "brand",
            foreignKey : "idBrand"
        })

        Phones.belongsTo(models.Systems, {
            as: "system",
            foreignKey : "idSystem"
        })

        Phones.belongsTo(models.Specifications,{
            as:"specification",
            foreignKey: "idSpecification"
        })
        
    }

    return Phones;
}