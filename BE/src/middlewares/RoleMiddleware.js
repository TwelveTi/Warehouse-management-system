class RoleMiddleware {
  checkRole(requiredRole) {
    return (req, res, next) => {
      const userRole = req.user?.role;

      if (!userRole || userRole !== requiredRole) {
        return res.status(403).json({
          status: "error",
          message: "Bạn không có quyền truy cập tài nguyên này",
        });
      }

      next();
    };
  }
}

module.exports = new RoleMiddleware();
