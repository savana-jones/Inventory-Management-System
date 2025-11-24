const express = require('express');
const router = express.Router();
const products = require('../Models/Products');
const auth = require("../Middleware/auth");

//Inserting Data:
router.post("/insertproduct", async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode } = req.body;

    try {
        const pre = await products.findOne({ ProductBarcode: ProductBarcode })
        if (pre) {
            res.status(422).json("Product is already added.")
        } else {
            const addProduct = new products({ ProductName, ProductPrice, ProductBarcode })
            await addProduct.save();
            res.status(201).json(addProduct)
        }
    } catch (err) {
        console.log(err)
    }
})

//Getting Data:
router.get('/products', auth, async (req, res) => {
    try {
        const getProducts = await products.find({})
        res.status(201).json(getProducts);
    } catch (err) {
        console.log(err);
    }
})

//Getting individual Data:
router.get('/products/:id', auth, async (req, res) => {
    try {
        const getProduct = await products.findById(req.params.id);
        res.status(201).json(getProduct);
    } catch (err) {
        console.log(err);
    }
})

//Editing Data:
router.put('/updateproduct/:id', auth, async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode } = req.body;
    try {
        const updateProducts = await products.findByIdAndUpdate(
            req.params.id,
            { ProductName, ProductPrice, ProductBarcode },
            { new: true }
        );
        res.status(201).json(updateProducts);
    } catch (err) {
        console.log(err);
    }
})

//Deleting Data:
router.delete('/deleteproduct/:id', auth, async (req, res) => {
    try {
        const deleteProduct = await products.findByIdAndDelete(req.params.id);
        res.status(201).json(deleteProduct);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
