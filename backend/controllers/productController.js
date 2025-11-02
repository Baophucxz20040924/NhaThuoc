const Product = require('../models/product');

// =============================
// 📦 Lấy tất cả sản phẩm (GET /products)
// =============================
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            products
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


exports.getAdminProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


exports.newProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Thêm sản phẩm thành công!',
            product
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


exports.getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy sản phẩm'
            });
        }

        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy sản phẩm'
            });
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            message: 'Cập nhật sản phẩm thành công!',
            product
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy sản phẩm'
            });
        }

        await product.deleteOne();

        res.status(200).json({
            success: true,
            message: 'Xoá sản phẩm thành công!'
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


exports.createProductReview = async (req, res) => {

    res.status(200).json({ success: true, message: 'Tính năng đánh giá chưa được triển khai' });
};


exports.getProductReviews = async (req, res) => {
    res.status(200).json({ success: true, message: 'Tính năng xem đánh giá chưa được triển khai' });
};


exports.deleteReview = async (req, res) => {
    res.status(200).json({ success: true, message: 'Tính năng xoá đánh giá chưa được triển khai' });
};
