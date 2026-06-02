---
title: "Fan Shop: Quản lý Authentication và Chat với Firebase & Google Cloud"
date: "2026-04-20"
excerpt: "Tối ưu hóa trải nghiệm hỗ trợ khách hàng e-commerce thông qua hệ thống Real-time Chat (Admin ↔ User)."
---

# Tối ưu hóa CSKH E-commerce bằng Real-time Chat

**Fan Shop** là một hệ thống thương mại điện tử tôi xây dựng với kiến trúc Backend **Spring Boot 3.x** kết hợp cùng các dịch vụ của Google (**Firebase** & **Google Cloud**). Một trong những tính năng tôi tâm đắc nhất trong dự án này chính là hệ thống quản lý xác thực và luồng Chat thời gian thực.

## 1. Authentication an toàn với Firebase

Thay vì tự xây dựng toàn bộ quy trình gửi Email xác nhận, Quản lý Password phức tạp, tôi quyết định ủy quyền (delegate) một phần cho **Firebase Authentication** kết hợp Google Sign-In.
- Backend Spring Boot lúc này chỉ đóng vai trò nhận **ID Token** từ Frontend, sau đó gọi lên Firebase Admin SDK để xác thực token này.
- Nếu hợp lệ, hệ thống cấp phát một JWT riêng (hoặc Session) cho các phiên làm việc nội bộ của Fan Shop.

Điều này giúp giảm thiểu rủi ro rò rỉ dữ liệu mật khẩu và mang lại trải nghiệm đăng nhập mượt mà (1-click) cho khách hàng.

## 2. Hệ thống Real-time Chat (Admin ↔ User)

Trong E-commerce, tốc độ phản hồi quyết định 80% sự hài lòng của khách hàng. 
Thay vì dùng WebSocket thuần túy nội bộ trên Spring Boot, Fan Shop tích hợp kiến trúc đồng bộ trạng thái cực nhanh.
- Phân quyền (Role-based access) rạch ròi: Admin, Seller, Customer.
- Khi người dùng nhắn tin, Admin lập tức nhận được thông báo (push notification) và có thể phản hồi trực tiếp. 
- Mọi dữ liệu đoạn chat đều được đồng bộ thời gian thực trên cả Web (React/TypeScript) và Mobile (Kotlin).

## 3. Quản lý trạng thái Đơn hàng (Order State Machine)

Hệ thống E-commerce luôn có một luồng trạng thái phức tạp: `PENDING` -> `CONFIRMED` -> `SHIPPING` -> `DELIVERED` / `CANCELLED`.
Tôi áp dụng pattern **State Machine** ở tầng Backend để đảm bảo một đơn hàng không thể "nhảy cóc" trạng thái trái luật, xử lý các giao dịch (Transactions) nghiêm ngặt để tránh tình trạng "race condition" (nhiều user cùng mua một món đồ sắp hết hàng).

Fan Shop là minh chứng rõ nhất cho việc sử dụng **Spring Boot** cùng các Cloud Services để đem lại một sản phẩm hoàn chỉnh, an toàn và hoạt động với cường độ cao.
