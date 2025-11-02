
exports.isAuthenticatedUser = (req, res, next) => {
    req.user = { id: 'fakeUserId123', role: 'admin' };
    next();
};

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
