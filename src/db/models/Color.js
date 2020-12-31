module.exports = (sequelize, DataTypes) => {

  const alias = 'Color';
  
  const columns = {
    name: DataTypes.STRING,
    hexadecimal: DataTypes.STRING
  }

  const Color = sequelize.define(
    alias,
    columns,
  );

  Color.associate = (models) => {
    Color.belongsToMany(
      models.Product,
      {
        as: 'products',
        through: 'product_color',
        foreignKey: 'color_id',
        otherKey: 'product_id'
      }
    );
  }

  return Color;
}