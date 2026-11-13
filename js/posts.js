// Thêm bài viết mới bằng cách thêm một object vào ĐẦU mảng này.
// slug: đường dẫn ngắn (không dấu, nối bằng dấu gạch ngang)
const POSTS = [
  {
    slug: "bat-dau-voi-git",
    title: "Bắt đầu với Git và SourceTree trong 10 phút",
    date: "2026-11-10",
    tag: "Git",
    summary: "Cài đặt, tạo repository đầu tiên và đẩy mã nguồn lên GitHub bằng giao diện đồ họa.",
    content: `
      <p>Git giúp bạn lưu lại lịch sử thay đổi của dự án. SourceTree là giao diện đồ họa, nên bạn không cần nhớ lệnh.</p>
      <h2>Các bước cơ bản</h2>
      <p>Mở SourceTree, chọn <strong>Create</strong> hoặc <strong>Clone</strong>, rồi trỏ tới thư mục dự án. Sau đó stage các file, viết lời nhắn commit và bấm <strong>Commit</strong>.</p>
      <h2>Đẩy lên GitHub</h2>
      <p>Tạo một repository trống trên GitHub, sao chép đường dẫn, rồi thêm vào SourceTree ở mục <strong>Repository → Repository Settings → Remotes</strong>. Cuối cùng bấm <strong>Push</strong>.</p>
      <pre><code>git add .
git commit -m "Commit đầu tiên"
git push -u origin main</code></pre>
    `
  },
  {
    slug: "html-css-js-co-ban",
    title: "HTML, CSS và JavaScript: ai làm việc gì?",
    date: "2026-11-05",
    tag: "Web",
    summary: "Ba ngôn ngữ nền tảng của web và cách chúng phối hợp với nhau.",
    content: `
      <p>HTML mô tả cấu trúc nội dung. CSS quyết định giao diện. JavaScript thêm hành vi và tương tác.</p>
      <h2>Một ví dụ nhỏ</h2>
      <pre><code>&lt;button id="btn"&gt;Bấm thử&lt;/button&gt;
&lt;script&gt;
  document.getElementById("btn")
    .addEventListener("click", () =&gt; alert("Xin chào!"));
&lt;/script&gt;</code></pre>
      <p>Ba phần này tách riêng thành file để dự án dễ bảo trì khi lớn lên.</p>
    `
  },
  {
    slug: "dua-blog-len-github-pages",
    title: "Đưa blog lên mạng miễn phí với GitHub Pages",
    date: "2026-11-01",
    tag: "Triển khai",
    summary: "Biến repository thành một website công khai mà không cần thuê máy chủ.",
    content: `
      <p>Sau khi đẩy mã nguồn lên GitHub, vào <strong>Settings → Pages</strong>, chọn nhánh <code>main</code> và thư mục gốc.</p>
      <p>Vài phút sau, blog của bạn sẽ có địa chỉ dạng <code>tenban.github.io/ten-repo</code>.</p>
    `
  }
];
