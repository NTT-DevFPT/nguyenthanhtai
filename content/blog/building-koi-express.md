---
title: "Koi Express: Xây dựng Dynamic Pricing Engine và Real-time Tracking"
date: "2026-05-15"
excerpt: "Câu chuyện đằng sau hệ thống logistics của Koi Express: Định giá động (Dynamic Pricing) và kết nối WebSocket."
---

# Koi Express: Backend đằng sau một hệ thống Logistics

**Koi Express** là một nền tảng logistics mà tôi tham gia phát triển backend với vai trò chính là xây dựng **Dynamic Pricing Engine** và hệ thống theo dõi đơn hàng theo thời gian thực (Real-time tracking). Dự án sử dụng **Spring Boot 2.7**, **PostgreSQL** và chạy trong môi trường **Docker**.

## Dynamic Pricing Engine là gì?

Trong ngành logistics, giá cước vận chuyển không bao giờ cố định. Nó phụ thuộc vào nhiều yếu tố:
- Khoảng cách vận chuyển (Geolocation / Routing).
- Khối lượng và kích thước kiện hàng.
- Thời gian giao hàng (Giao gấp, giao qua đêm).

Tôi đã thiết kế một hệ thống **Dynamic Pricing Engine** linh hoạt, sử dụng thuật toán tính toán tối ưu dựa trên các tham số đầu vào này. Việc thiết kế Rule Engine trong Java giúp cho logic tính giá được tách biệt khỏi logic nghiệp vụ, dễ dàng cho Admin cập nhật các tham số giá cước mà không cần deploy lại toàn bộ hệ thống.

## Storage và Bảo mật (Security)

Hệ thống cần lưu trữ một lượng lớn biên lai, hình ảnh gói hàng. Tôi đã cấu hình và tích hợp **AWS S3** để lưu trữ các tệp phương tiện này một cách an toàn và có khả năng mở rộng tốt.

Bên cạnh đó, vì liên quan đến tài sản, bảo mật là yếu tố hàng đầu:
- **Spring Security + JWT:** Cho kiến trúc Stateless API.
- **Twilio OTP:** Tích hợp xác thực đa yếu tố (MFA) để đảm bảo an toàn tối đa cho tài khoản shipper và khách hàng.

## Real-time Tracking bằng WebSocket & STOMP

Để khách hàng biết được kiện hàng của mình đang ở đâu, và cho phép tài xế cập nhật trạng thái lập tức, tôi đã sử dụng **WebSocket** với giao thức **STOMP**. 
- Khi tài xế cập nhật vị trí, backend sẽ phát (broadcast) message tới kênh của đơn hàng.
- Khách hàng (Frontend/Mobile) subscribe vào kênh này và nhận được thông báo cập nhật UI theo thời gian thực (real-time) với độ trễ cực thấp.

## Tổng kết

Xây dựng hệ thống logistics mang lại những bài học quý giá về việc xử lý transaction, tối ưu hiệu năng tính toán và duy trì các kết nối real-time bền bỉ. Mã nguồn của dự án này nằm tại [Koi-Express (GitHub)](https://github.com/not-for-tomorrow/Koi-Express).
