---
title: "Quizmate AI: Tích hợp Đa mô hình LLM (GPT, LLaMA, Mistral) trong giáo dục"
date: "2026-06-02"
excerpt: "Hành trình xây dựng hệ thống tự động sinh câu hỏi trắc nghiệm từ nhiều nguồn tài liệu đa phương tiện (PDF, Hình ảnh, Âm thanh)."
---

# Quizmate AI: Tích hợp Đa mô hình LLM vào nền tảng giáo dục

Khi bắt đầu xây dựng **Quizmate AI**, bài toán lớn nhất tôi gặp phải là làm sao để tự động hóa quá trình tạo bài tập từ các nguồn tài liệu đầu vào rất đa dạng: File PDF, tài liệu Word, hình ảnh chụp sách, cho đến các file ghi âm bài giảng hay video trên YouTube.

Để giải quyết, tôi đã áp dụng một kiến trúc kết hợp nhiều công nghệ khác nhau trên nền tảng **Spring Boot**.

## 1. Xử lý dữ liệu đa phương tiện (Multi-modal Data)

Dữ liệu đầu vào không phải lúc nào cũng là văn bản thuần túy.
- **Với văn bản/PDF:** Tôi sử dụng các thư viện phân tích cú pháp để trích xuất text.
- **Với hình ảnh:** Tôi tích hợp hệ thống **OCR (Optical Character Recognition)** để nhận diện chữ viết.
- **Với âm thanh/Video:** Hệ thống **STOMP (Speech-to-Text)** được sử dụng để chuyển đổi lời nói thành văn bản trước khi đưa vào phân tích.

## 2. Multi-LLM Integration (GPT, LLaMA, Mistral)

Một điểm nhấn của hệ thống là không phụ thuộc vào một AI duy nhất. Bằng cách thiết kế các Interface chuẩn xác trong Spring Boot, hệ thống có thể linh hoạt định tuyến các yêu cầu xử lý ngôn ngữ tự nhiên (NLP) tới:
- **OpenAI GPT-4:** Dùng cho các bài toán suy luận phức tạp.
- **LLaMA / Mistral:** Dùng cho các tác vụ trích xuất thông tin cơ bản để tối ưu chi phí và tốc độ.

Việc tích hợp này đòi hỏi kiến trúc Backend phải chịu tải tốt và phản hồi nhanh chóng (Low Latency). Tôi đã sử dụng Webflux/Async processing trong Spring Boot để xử lý hàng đợi (queue) sinh câu hỏi mà không gây nghẽn luồng chính.

## 3. Trải nghiệm Tương tác Giọng nói (Voice Interaction)

Không chỉ tạo ra văn bản, tôi còn trang bị tính năng TTS/STT (Text-to-Speech / Speech-to-Text) giúp người dùng có thể làm bài tập và tương tác qua giọng nói. Điều này cực kỳ hữu ích khi học ngoại ngữ.

## Kết luận

Quizmate AI là một minh chứng rõ ràng cho việc sử dụng **AI Integration** để giải quyết một bài toán thực tế trong giáo dục. Backend Java / Spring Boot chứng minh được sự bền bỉ và mạnh mẽ của mình khi phải kết nối với hàng loạt các dịch vụ AI/Cloud phức tạp. 

Mã nguồn mở của dự án (Organization) có thể được tìm thấy tại: [QuizmateAI](https://github.com/QuizmateAI)
