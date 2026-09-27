(function () {
  "use strict";

  var styles = window.UI_DIRECTIONS || [];
  var aesthetics = window.UI_AESTHETICS || [];
  var query = "";
  var TAGS = ["tools", "data-dense", "consumer", "reading", "forms", "marketing"];
  var grid = document.getElementById("grid");
  var empty = document.getElementById("empty");
  var filters = document.getElementById("filters");
  var dialog = document.getElementById("detail");
  var active = "all";
  var current = null;
  var lastTrigger = null;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  function base(style) { return "ui-direction/styles/" + style.id + "/"; }

  function shot(src, cls, alt) {
    var img = el("img", { src: src, class: cls, alt: alt, loading: "lazy" });
    img.addEventListener("error", function () {
      var box = el("div", { class: cls + " missing", role: "img", "aria-label": alt + " (screenshot missing)", text: "No screenshot yet" });
      img.replaceWith(box);
    });
    return img;
  }

  function renderFilters() {
    ["all"].concat(TAGS).forEach(function (tag) {
      var count = tag === "all" ? styles.length : styles.filter(function (s) { return s.useFor.indexOf(tag) >= 0; }).length;
      var b = el("button", { type: "button", "aria-pressed": String(tag === active), "data-tag": tag, text: (tag === "all" ? "All" : tag) + " (" + count + ")" });
      b.addEventListener("click", function () {
        active = tag;
        filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        renderGrid();
      });
      filters.appendChild(b);
    });
  }

  function renderGrid() {
    grid.textContent = "";
    var q = query.trim().toLowerCase();
    var hits = q ? aesthetics.filter(function (a) {
      return [a.name].concat(a.aliases).some(function (n) { return n.toLowerCase().indexOf(q) >= 0; });
    }) : [];
    var hitIds = hits.map(function (a) { return a.direction; });
    renderMatches(hits);
    var shown = styles.filter(function (s) {
      if (active !== "all" && s.useFor.indexOf(active) < 0) return false;
      if (!q) return true;
      var own = (s.name + " " + s.id + " " + s.feelsLike).toLowerCase().indexOf(q) >= 0;
      return own || hitIds.indexOf(s.id) >= 0;
    });
    shown.forEach(function (s) {
      var slide = el("div", { class: "slide" }, [
        shot(base(s) + "preview.png", "desk", s.name + " dashboard"),
        shot(base(s) + "app.png", "phone", s.name + " mobile app"),
      ]);
      var btn = el("button", { type: "button", class: "open", "aria-label": "Open " + s.name }, [
        slide,
        el("h2", { class: "entry-name", text: s.name }),
        el("p", { class: "entry-feels", text: s.feelsLike }),
        el("p", { class: "entry-tags", text: "Good for " + s.useFor.join(", ") }),
      ]);
      btn.addEventListener("click", function () { lastTrigger = btn; location.hash = s.id; });
      grid.appendChild(el("li", { class: "entry" }, [btn]));
    });
    empty.hidden = shown.length > 0;
  }

  function renderMatches(hits) {
    var list = document.getElementById("matches");
    list.textContent = "";
    list.hidden = hits.length === 0;
    hits.slice(0, 8).forEach(function (a) {
      var style = styles.filter(function (s) { return s.id === a.direction; })[0];
      if (!style) return;
      var go = el("button", { type: "button", text: style.name });
      go.addEventListener("click", function () { lastTrigger = go; location.hash = style.id; });
      var head = el("p", {}, [el("strong", { text: a.name }), document.createTextNode(" is carried by "), go, el("span", { class: "fit", text: a.fit === "partial" ? " (partial fit)" : " (variant)" })]);
      list.appendChild(el("li", {}, [head, el("p", { text: a.recipe })]));
    });
  }

  /* Minimal Markdown: headings, paragraphs, lists, fenced code, tables, inline code/bold/italic/links. */
  function inline(text) {
    var out = text
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var codes = [];
    out = out.replace(/`([^`]+)`/g, function (_, c) { codes.push(c); return "\u0000" + (codes.length - 1) + "\u0000"; });
    out = out
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, t, href) {
        return /^(https?:|#|[\w./-]+$)/.test(href) ? '<a href="' + href + '">' + t + "</a>" : t;
      });
    return out.replace(/\u0000(\d+)\u0000/g, function (_, i) { return "<code>" + codes[+i] + "</code>"; });
  }

  function markdown(src) {
    var lines = src.replace(/\r\n/g, "\n").split("\n");
    var html = [];
    var i = 0;
    function escape(t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    while (i < lines.length) {
      var line = lines[i];
      if (/^```/.test(line)) {
        var code = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) code.push(lines[i++]);
        i++;
        html.push("<pre><code>" + escape(code.join("\n")) + "</code></pre>");
        continue;
      }
      var h = /^(#{1,4})\s+(.*)$/.exec(line);
      if (h) { html.push("<h" + h[1].length + ">" + inline(h[2]) + "</h" + h[1].length + ">"); i++; continue; }
      if (/^\|/.test(line)) {
        var rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
        var cells = function (r) { return r.replace(/^\||\|\s*$/g, "").split("|").map(function (c) { return inline(c.trim()); }); };
        var body = rows.filter(function (r) { return !/^\|[\s:|-]+\|?\s*$/.test(r); });
        var head = cells(body.shift() || "");
        html.push("<table><thead><tr>" + head.map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>" +
          body.map(function (r) { return "<tr>" + cells(r).map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") +
          "</tbody></table>");
        continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
        var ordered = /^\s*\d+\./.test(line);
        var items = [];
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          var item = lines[i++].replace(/^\s*([-*]|\d+\.)\s+/, "");
          while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i])) item += " " + lines[i++].trim();
          items.push("<li>" + inline(item) + "</li>");
        }
        html.push((ordered ? "<ol>" : "<ul>") + items.join("") + (ordered ? "</ol>" : "</ul>"));
        continue;
      }
      if (!line.trim()) { i++; continue; }
      var para = [];
      while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|```|\||\s*([-*]|\d+\.)\s)/.test(lines[i])) para.push(lines[i++]);
      html.push("<p>" + inline(para.join(" ")) + "</p>");
    }
    return html.join("\n");
  }

  function fitFrames() {
    [["frame-dashboard", 1440], ["frame-app", 390], ["frame-collection", 1440]].forEach(function (pair) {
      var frame = document.getElementById(pair[0]);
      var box = frame.parentElement;
      frame.style.transform = "scale(" + (box.clientWidth / pair[1]) + ")";
    });
  }

  function open(style) {
    current = style;
    var b = base(style);
    document.getElementById("detail-name").textContent = style.name;
    document.getElementById("detail-feels").textContent = style.feelsLike;
    document.getElementById("open-dashboard").href = b + "dashboard.html";
    document.getElementById("open-app").href = b + "app.html";
    document.getElementById("open-collection").href = b + "collection.html";
    document.getElementById("frame-collection").src = b + "collection.html";
    document.getElementById("frame-dashboard").src = b + "dashboard.html";
    document.getElementById("frame-app").src = b + "app.html";
    document.getElementById("detail-use").textContent = style.useFor.join(", ");
    document.getElementById("copy-status").textContent = "";
    var fonts = document.getElementById("detail-fonts");
    fonts.textContent = "";
    style.fonts.forEach(function (f) { fonts.appendChild(el("li", { text: f })); });
    var colors = document.getElementById("detail-colors");
    colors.textContent = "";
    style.colors.forEach(function (c) {
      var chip = el("i", { "aria-hidden": "true" });
      chip.style.background = c;
      colors.appendChild(el("li", {}, [chip, el("span", { text: c })]));
    });
    document.getElementById("detail-brief").innerHTML = markdown(style.design);
    document.title = style.name + " · UI Directions";
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    requestAnimationFrame(fitFrames);
  }

  function close() {
    current = null;
    document.title = "UI Directions";
    if (dialog.open) dialog.close();
    ["frame-dashboard", "frame-app", "frame-collection"].forEach(function (id) { document.getElementById(id).removeAttribute("src"); });
    if (lastTrigger) lastTrigger.focus();
  }

  function route() {
    var id = decodeURIComponent(location.hash.slice(1));
    var style = styles.filter(function (s) { return s.id === id; })[0];
    if (style) open(style); else close();
  }

  function copyBrief() {
    if (!current) return;
    var text = current.design;
    var status = document.getElementById("copy-status");
    var done = "Copied the " + current.name + " brief. Paste it into your agent, or save it as DESIGN.md in your project.";
    function fallback() {
      var ta = document.getElementById("copy-fallback");
      ta.value = text;
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      status.textContent = ok
        ? done
        : "Copying is blocked here. Open " + base(current) + "DESIGN.md and copy it from there.";
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () {
        status.textContent = done;
      }, fallback);
    } else {
      fallback();
    }
  }

  document.getElementById("close").addEventListener("click", function () { history.pushState("", document.title, location.pathname + location.search); close(); });
  dialog.addEventListener("cancel", function (e) { e.preventDefault(); history.pushState("", document.title, location.pathname + location.search); close(); });
  document.getElementById("copy").addEventListener("click", copyBrief);
  window.addEventListener("hashchange", route);
  window.addEventListener("resize", function () { if (dialog.open) fitFrames(); });

  var WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty-one", "Twenty-two", "Twenty-three", "Twenty-four", "Twenty-five"];
  document.getElementById("count").textContent = WORDS[styles.length] || String(styles.length);

  document.getElementById("q").addEventListener("input", function (e) { query = e.target.value; renderGrid(); });

  renderFilters();
  renderGrid();
  route();
})();
