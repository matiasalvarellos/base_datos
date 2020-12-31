module.exports = (sequelize, DataTypes) => {

  const alias = 'Product';
  
  const columns = {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }

  const Product = sequelize.define(
    alias,
    columns,
  );

  Product.associate = (models) => {
    Product.belongsToMany(models.Color, {
      as: "colors",
      through: "product_color",
      foreignKey: "product_id",
      otherKey: "color_id",
    });
  }

  return Product;
}