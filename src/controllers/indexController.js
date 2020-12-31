const { Product, Color } = require('../db/models');

module.exports = {
  index: async (req, res) => {
    const products = await Product.findAll({
      include: ["colors"],
    });
    return res.render("index", { products });
  },
  create: async (req, res) => {
    const colors = await Color.findAll();
    return res.render("create-form", { colors });
  },
  store: async (req, res) => {
    const { name, price, colors } = req.body;

    const newProduct = await Product.create({
      name,
      price,
    });

    await newProduct.setColors(colors);

    return res.redirect(`/detail/${newProduct.id}`);
  },
  show: async (req, res) => {
    const product = await Product.findByPk(req.params.id, {
      include: ["colors"],
    });

    return res.render("detail", { product });
  },
  edit: async (req, res) => {
    const colors = await Color.findAll();
    const product = await Product.findByPk(req.params.id, {
      include: ["colors"],
    });

    product.colorsId = product.colors.map((color) => {
      return color.id;
    });
    return res.render('edit-form', { colors, product });
  },
  update: async (req, res) => {
    const { name, price, colors } = req.body;
    
    await Product.update(
      {
        name,
        price,
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    const product = await Product.findByPk(req.params.id);

    await product.setColors(colors);

    return res.redirect(`/detail/${product.id}`);
  },
  destroy: async (req, res) => {
    const product = await Product.findByPk(req.params.id); 
    
    await product.setColors([]);
    
    await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.redirect("/");
  }
};