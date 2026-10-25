# Lab 06 — Navigation (Expo + React Native + TypeScript)

```bash
npm install
npx expo start          # quét QR bằng Expo Go, hoặc nhấn w mở bản web
npm run typecheck
```

Bài 2 dùng API thật (mockapi.io): tạo resource `phones` (xem `mockapi_phones.json`), rồi chạy:

```bash
# Windows PowerShell
$env:EXPO_PUBLIC_API_URL="https://xxxxxxxx.mockapi.io/api/v1"; npx expo start -c
# macOS / Linux
EXPO_PUBLIC_API_URL=https://xxxxxxxx.mockapi.io/api/v1 npx expo start -c
```
Không đặt biến → app dùng dữ liệu mẫu offline (vẫn có loading / lỗi / thử lại).
