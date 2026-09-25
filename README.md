# 📇 MiCardApp - Electronic Business Card

**MiCardApp** là một ứng dụng di động & web modern được xây dựng bằng **React Native** và **Expo Router**, mô phỏng một danh thiếp / thẻ cá nhân điện tử (Electronic Business Card) với giao diện tinh tế, hiện đại.

---

## ✨ Tính Năng Nổi Bật

- 🎨 **Giao diện Gradient Hiện Đại**: Phối màu gradient mượt mà từ trắng sang xanh dương với hiệu ứng bóng đổ (`elevation` / `shadow`) sang trọng.
- 📱 **Đa Nền Tảng (Cross-Platform)**: Chạy mượt mà trên **Android**, **iOS** và **Web**.
- 👤 **Thông Tin Cá Nhân**:
  - **Họ & Tên**: MinhVu
  - **Chức danh**: Mobile Developer
  - **Số điện thoại**: 0777691924
  - **Email**: vupm.23it@vku.udn.vn
- ⚡ **Hiệu Năng Cao**: Xây dựng trên nền tảng **Expo SDK 54** và **React Native 0.81**, định tuyến nhanh chóng với **Expo Router**.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Framework**: [React Native](https://reactnative.dev/) (v0.81.5)
- **Platform & Tooling**: [Expo](https://expo.dev/) (v54.0.20)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (v6.0.13)
- **Styling & UI**:
  - `StyleSheet` & `LinearGradient` (`expo-linear-gradient`)
  - Cross-platform shadows & border radiuses
- **Language**: TypeScript / JavaScript

---

## 📁 Cấu Trúc Dự Án (Project Structure)

```text
MiCardApp/
├── app/
│   └── (tabs)/
│       └── index.tsx          # Màn hình chính hiển thị thẻ cá nhân
├── assets/                    # Hình ảnh, font chữ và tài nguyên tĩnh
├── components/                # Các component UI tái sử dụng
├── constants/                 # Màu sắc, cấu hình hằng số
├── scripts/                   # Script hỗ trợ dự án
├── app.json                   # Cấu hình Expo Project
├── package.json               # Khai báo dependencies & npm scripts
└── tsconfig.json              # Cấu hình TypeScript
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Yêu Cầu Tiền Đề
- Đã cài đặt **Node.js** (phiên bản 18 trở lên).
- Ứng dụng **Expo Go** trên thiết bị di động (nếu muốn xem trên điện thoại).

### 2. Cài Đặt Dependencies
Mở terminal tại thư mục dự án và chạy:
```bash
npm install
```

### 3. Khởi Chạy Ứng Dụng

#### 🌐 Khởi chạy trên Web:
```bash
npm run web
```

#### 📱 Khởi chạy Server Expo (Cho điện thoại / Emulator):
```bash
npx expo start
```
- **Trên Điện thoại**: Mở app **Expo Go** và quét mã QR hiển thị trên Terminal.
- **Trên Android Emulator**: Nhấn phím `a` trong Terminal.
- **Trên iOS Simulator**: Nhấn phím `i` trong Terminal.

---

## 🎯 Mục Tiêu Học Tập & Phát Triển

Dự án này giúp bạn nắm vững:
1. **Cấu trúc Expo Router**: Cách tổ chức file-based routing trong ứng dụng Expo hiện đại.
2. **UI & Styling trong React Native**: Sử dụng `StyleSheet`, `LinearGradient`, layout `Flexbox` chuẩn chỉnh.
3. **Responsive Design**: Tự điều chỉnh hiển thị hoàn hảo trên màn hình di động lẫn trình duyệt web.