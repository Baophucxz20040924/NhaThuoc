// Middleware giả lập — luôn cho phép truy cập
exports.isAuthenticatedUser = (req, res, next) => {
    // Giả lập người dùng (vd: admin)
    req.user = { id: 'fakeUserId123', role: 'admin' };
    next();
};

// Middleware kiểm tra quyền truy cập (admin, user, v.v.)
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        // Giả lập quyền admin (cho phép luôn)
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `(${req.user.role}) không có quyền truy cập tài nguyên này`
            });
        }
        next();
    };
};
