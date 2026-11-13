(function () {
  const app = document.getElementById("app");
  document.getElementById("year").textContent = new Date().getFullYear();

  const fmt = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function renderList() {
    document.title = "Sổ tay Web – Blog của tôi";
    app.innerHTML = `
      <h1>Bài viết mới nhất</h1>
      <p class="intro">Ghi chép ngắn về lập trình web, Git và những thứ tôi học được.</p>
      <ul class="post-list">
        ${POSTS.map((p) => `
          <li>
            <p class="meta">${fmt(p.date)}<span class="tag">${esc(p.tag)}</span></p>
            <h2><a href="#/post/${esc(p.slug)}">${esc(p.title)}</a></h2>
            <p>${esc(p.summary)}</p>
          </li>`).join("")}
      </ul>`;
  }

  function renderPost(slug) {
    const p = POSTS.find((x) => x.slug === slug);
    if (!p) return renderNotFound();
    document.title = p.title + " – Sổ tay Web";
    app.innerHTML = `
      <article class="article">
        <p class="meta">${fmt(p.date)}<span class="tag">${esc(p.tag)}</span></p>
        <h1>${esc(p.title)}</h1>
        <div class="article-body">${p.content}</div>
      </article>
      <a class="back" href="#/">← Tất cả bài viết</a>`;
  }

  function renderAbout() {
    document.title = "Giới thiệu – Sổ tay Web";
    app.innerHTML = `
      <h1>Giới thiệu</h1>
      <p>Đây là blog nhỏ của tôi. Hãy sửa nội dung trang này trong <code>js/app.js</code> để viết về chính bạn.</p>`;
  }

  function renderNotFound() {
    document.title = "Không tìm thấy – Sổ tay Web";
    app.innerHTML = `<h1>Không tìm thấy trang</h1><p>Bài viết này không tồn tại. <a href="#/">Quay về danh sách bài viết</a>.</p>`;
  }

  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [page, arg] = hash.split("/");
    if (!page) renderList();
    else if (page === "post") renderPost(arg);
    else if (page === "about") renderAbout();
    else renderNotFound();

    document.querySelectorAll(".site-header nav a").forEach((a) => {
      const on = a.getAttribute("href") === (page === "about" ? "#/about" : "#/");
      on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  window.addEventListener("hashchange", route);
  route();
})();
