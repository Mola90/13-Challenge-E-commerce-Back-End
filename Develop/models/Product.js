// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    Product_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isDecimal: true,
        min: 0,
        },
    },  
      stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defauldValue: 10,
        validate:{
          isNumeric: true
        },        
      },
      category_id:{
        type: DataTypes.INTEGER,
        references:{
          model: "category",
          key: "id",
          unique: true
        }
      }    
        // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;