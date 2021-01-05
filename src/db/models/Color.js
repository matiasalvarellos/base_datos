module.exports = (sequelize, DataTypes) => {

  // Start configs
  
  const alias = "Color";

  const columns = {
    name: DataTypes.STRING,
    hexadecimal: DataTypes.STRING
  }

  const config = {
    tablename: "colors",
    timestamps: true
  }

  // End configuraciones

  // Define
  
  const Color = sequelize.define(
    alias,
    columns,
    config
  );

  // Associate

  Color.associate = (models) => {

    // Products
    Color.belongsToMany(models.Product, {
      as: "products",
      through: "product_color",
      foreignKey: "color_id",
      otherKey: "product_id"
    });

  }

  // Return Model

  return Color;
}