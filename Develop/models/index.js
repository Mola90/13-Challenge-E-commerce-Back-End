// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category,{
  foreignKey: "cateogry_name",  
});

// Categories have many Products
Category.hsaMany(Product,{
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsTo(Category,{
  foreignKey: "cateogry_id"
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags,{
  through:{
    model: ProductTag,
    unique: false
  },
  as: "product,_tags"
})

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Product,{
  through:{
    model:ProductTag,
    unique: false
  },
  as: "taged_products" 
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
