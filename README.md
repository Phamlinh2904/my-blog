# Sổ tay Web – Blog đơn giản
# đây là git pull của bố 
Blog tĩnh viết bằng HTML, CSS và JavaScript thuần. Không cần cài đặt hay build.

## Chạy thử
Mở file `index.html` bằng trình duyệt.

## Thêm bài viết
Mở `js/posts.js` và thêm một object mới vào đầu mảng `POSTS`
(`slug`, `title`, `date`, `tag`, `summary`, `content`).

## Cấu trúc
```
index.html
css/style.css
js/posts.js   # dữ liệu bài viết
js/app.js     # định tuyến và hiển thị
```

## Đưa lên GitHub bằng SourceTree
1. SourceTree → **Create** → chọn thư mục dự án này → đặt tên → **Create**.
2. Stage tất cả file, viết lời nhắn `Khởi tạo dự án blog`, bấm **Commit**.
3. Trên GitHub tạo repository mới (để trống, không thêm README).
4. SourceTree → **Repository → Repository Settings → Remotes → Add**, dán URL repository, đặt tên `origin`.
5. Bấm **Push**, chọn nhánh `main`.

## Đưa blog lên mạng
GitHub → **Settings → Pages** → chọn nhánh `main`, thư mục `/ (root)`.
