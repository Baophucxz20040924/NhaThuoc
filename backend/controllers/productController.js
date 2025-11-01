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

// =============================
// 🧾 Lấy tất cả sản phẩm cho admin (GET /admin/products)
// =============================
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

// =============================
// ➕ Thêm sản phẩm mới (POST /admin/product/new)
// =============================
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

// =============================
// 🔍 Lấy 1 sản phẩm theo ID (GET /product/:id)
// =============================
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

// =============================
// ✏️ Cập nhật sản phẩm (PUT /admin/product/:id)
// =============================
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

// =============================
// ❌ Xoá sản phẩm (DELETE /admin/product/:id)
// =============================
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

// =============================
// 💬 Tạo đánh giá sản phẩm (PUT /review)
// =============================
exports.createProductReview = async (req, res) => {
    // Chưa dùng đến → để chống lỗi router, ta trả về tạm thời
    res.status(200).json({ success: true, message: 'Tính năng đánh giá chưa được triển khai' });
};

// =============================
// 📃 Lấy danh sách đánh giá (GET /reviews)
// =============================
exports.getProductReviews = async (req, res) => {
    res.status(200).json({ success: true, message: 'Tính năng xem đánh giá chưa được triển khai' });
};

// =============================
// 🗑️ Xoá đánh giá (DELETE /reviews)
// =============================
exports.deleteReview = async (req, res) => {
    res.status(200).json({ success: true, message: 'Tính năng xoá đánh giá chưa được triển khai' });
};
