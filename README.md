# Warehouse Management System (WMS)

## 📝 Mô tả đề tài:
Hệ thống Quản lý Kho hàng (Warehouse Management System - WMS) là một ứng dụng giúp các doanh nghiệp quản lý hàng hóa trong kho một cách hiệu quả. Hệ thống hỗ trợ các chức năng chính như:
- Quản lý sản phẩm (Product)
- Quản lý kho (Warehouse)
- Quản lý tồn kho (Inventory)
- Quản lý xuất/nhập kho (Transaction)
- Quản lý người dùng và phân quyền (User & Role)

Mục tiêu của hệ thống là số hóa quá trình kiểm kê, theo dõi biến động hàng hóa và hỗ trợ quản lý phân quyền cho các nhân viên trong kho.

---

## 🏗️ Kiến trúc hệ thống:
Hệ thống được xây dựng dựa trên kiến trúc **RESTful API** với mô hình **MVC**:
- **Backend**: Node.js (Express), Sequelize ORM, MySQL
- **Frontend**: (Đang phát triển) - Sẽ xây dựng bằng React.js
- **Authentication**: JWT (Access Token & Refresh Token)
- **Middleware**: Xác thực người dùng (verifyToken), Phân quyền theo role (admin, staff)

---

## 🔧 Công nghệ sử dụng:
| Công nghệ          | Vai trò                                   |
|------------------- |-------------------------------------------|
| Node.js + Express  | Xây dựng hệ thống Backend API             |
| Sequelize ORM      | Quản lý & thao tác với cơ sở dữ liệu MySQL|
| MySQL              | Hệ quản trị cơ sở dữ liệu                 |
| JWT (jsonwebtoken) | Xác thực & phân quyền người dùng          |
| bcryptjs           | Hash mật khẩu người dùng                  |
| dotenv             | Quản lý biến môi trường                   |
| Postman            | Công cụ test API                          |

---

## 🚀 Tiến độ thực hiện:
- ✅ **Backend API**: Đã hoàn thiện (Bao gồm User, Product, Warehouse, Inventory, Transaction)
- ✅ **Xác thực & Phân quyền**: Đã tích hợp JWT (Access Token, Refresh Token), Middleware kiểm tra quyền hạn.
- 🔄 **Frontend (ReactJS)**: Đang trong quá trình phát triển. Hiện tại hệ thống mới chỉ có phần API Backend.

---

