const state = {
  activeId: null,
  query: "",
  openGroups: new Set(),
  closedGroups: new Set(),
};

const WELCOME_PAGE = {
  id: "home",
  title: "Home",
  path: "/home",
  sourcePath: "/home",
  breadcrumbs: [],
  summary: "Bem-vindo à Central de Ajuda IGUITECH. Aqui você encontra orientações para configurar, operar e evoluir o uso da plataforma com mais segurança.",
  headings: ["Boas-vindas", "Introdução ao sistema", "O que é esta FAQ", "Como encontrar respostas"],
  topics: [
    "Atendimento, canais, automações, gestão comercial e recursos administrativos em um único ambiente.",
    "Artigos organizados por área do sistema para orientar administradores, supervisores e usuários.",
    "Busca ampla por títulos, menus, caminhos, textos, links, arquivos e imagens."
  ],
  images: [{ src: "https://i.ibb.co/8LvGR2dd/lg-site.png", alt: "Logo da plataforma IGUITECH" }],
  links: [],
  content: [{ type: "welcome" }]
};

const pages = [WELCOME_PAGE, ...HELP_PAGES];
const byId = new Map(pages.map((page) => [page.id, page]));
const byPath = new Map(pages.map((page) => [page.path, page]));

const MENU_ROOTS = [
  "Configuração Administrador",
  "Ferramentas do atendimento",
  "Ferramentas Adicionais e Integrações",
];

const SECTION_ICONS = {
  "Configuração Administrador": "▣",
  "Ferramentas do atendimento": "✦",
  "Ferramentas Adicionais e Integrações": "⌘",
};

const ICONS = [
  ["dashboard", "▦"],
  ["home", "⌂"],
  ["atendimento", "◌"],
  ["canais", "◫"],
  ["comunicação", "✉"],
  ["marketing", "☷"],
  ["automação", "⚙"],
  ["gestão", "▤"],
  ["comercial", "◇"],
  ["configuração", "⚙"],
  ["conta", "◉"],
  ["perfil", "◉"],
  ["ligações", "☎"],
  ["notificações", "◍"],
  ["integrações", "⌘"],
];

const orderedPages = pages.slice();

function renderNav() {
  const nav = document.getElementById("navTree");
  nav.innerHTML = "";

  if (state.query) {
    renderSearchResults(nav);
    return;
  }

  nav.appendChild(renderHomeShortcut());

  MENU_ROOTS.forEach((root) => {
    const section = document.createElement("section");
    section.className = "nav-section";
    section.innerHTML = `<div class="nav-section-title"><span>${SECTION_ICONS[root]}</span>${escapeHtml(root)}</div>`;

    rootPages(root)
      .filter((page) => page.breadcrumbs.length === 0 || page.breadcrumbs.length === 1)
      .filter((page) => page.breadcrumbs[0] === root || page.title === root)
      .forEach((page) => section.appendChild(renderMenuItem(page, 0)));

    nav.appendChild(section);
  });
}

function renderHomeShortcut() {
  const section = document.createElement("section");
  section.className = "nav-section home-section";
  section.appendChild(renderPageButton(WELCOME_PAGE, 0));
  return section;
}

function rootPages(root) {
  return orderedPages.filter((page) => page.breadcrumbs[0] === root || page.title === root);
}

function renderSearchResults(nav) {
  const visible = pages
    .map((page) => ({ page, score: searchScore(page, state.query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.page);
  const wrap = document.createElement("div");
  wrap.className = "search-results";

  if (!visible.length) {
    wrap.innerHTML = '<div class="empty">Nenhum artigo encontrado.</div>';
    nav.appendChild(wrap);
    return;
  }

  visible.slice(0, 60).forEach((page) => wrap.appendChild(renderPageButton(page, 0)));
  nav.appendChild(wrap);
}

function renderMenuItem(page, depth) {
  const children = directChildren(page);
  const isOpen = (state.openGroups.has(page.id) || isInActiveBranch(page)) && !state.closedGroups.has(page.id);
  const wrap = document.createElement("div");
  wrap.className = `nav-group ${isOpen ?"open" : ""}`;

  const row = document.createElement("button");
  row.className = `nav-row page ${page.id === state.activeId ?"active" : ""}`;
  row.style.setProperty("--depth", depth);
  row.innerHTML = `
    <span class="menu-icon" aria-hidden="true">${iconFor(page.title)}</span>
    <span>${escapeHtml(page.title)}</span>
    ${children.length ?'<span class="twisty" aria-hidden="true">›</span>' : ""}
  `;
  row.addEventListener("click", (event) => {
    if (event.target.classList.contains("twisty")) {
      toggleGroup(page.id);
      return;
    }
    if (children.length && page.id !== state.activeId) state.openGroups.add(page.id);
    loadPage(page.id);
  });
  wrap.appendChild(row);

  if (children.length) {
    const childWrap = document.createElement("div");
    childWrap.className = "nav-children";
    children.forEach((child) => childWrap.appendChild(renderMenuItem(child, depth + 1)));
    wrap.appendChild(childWrap);
  }

  return wrap;
}

function toggleGroup(id) {
  const currentlyOpen = state.openGroups.has(id) || (byId.get(id) && isInActiveBranch(byId.get(id)));
  if (currentlyOpen && !state.closedGroups.has(id)) {
    state.openGroups.delete(id);
    state.closedGroups.add(id);
  } else {
    state.closedGroups.delete(id);
    state.openGroups.add(id);
  }
  renderNav();
}

function directChildren(parent) {
  if (parent.path === "/") return [];
  const parentDepth = pathDepth(parent.path);
  return pages
    .filter((page) => page.path.startsWith(`${parent.path}/`) && pathDepth(page.path) === parentDepth + 1)
    .sort((a, b) => orderedPages.indexOf(a) - orderedPages.indexOf(b));
}

function pathDepth(path) {
  return path.split("/").filter(Boolean).length;
}

function isInActiveBranch(page) {
  const active = byId.get(state.activeId);
  return active ?active.path === page.path || active.path.startsWith(`${page.path}/`) : false;
}

function renderPageButton(page, depth) {
  const btn = document.createElement("button");
  btn.className = `nav-row page ${page.id === state.activeId ?"active" : ""}`;
  btn.style.setProperty("--depth", depth);
  btn.innerHTML = `<span class="menu-icon" aria-hidden="true">${iconFor(page.title)}</span><span>${escapeHtml(page.title)}</span>`;
  btn.addEventListener("click", () => loadPage(page.id));
  return btn;
}

function matches(page, query) {
  return searchScore(page, query) > 0;
}

function searchScore(page, query) {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) return 1;
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const fields = [
    [page.title, 12],
    [page.breadcrumbs.join(" "), 9],
    [page.path, 8],
    [page.sourcePath, 8],
    [page.summary, 6],
    [page.headings.join(" "), 5],
    [page.topics.join(" "), 4],
    [(page.links || []).map((link) => `${link.title || ""} ${link.href || ""}`).join(" "), 3],
    [(page.images || []).map((image) => `${image.alt || ""} ${image.src || ""}`).join(" "), 3],
    [contentSearchText(page), 2],
  ];
  let score = 0;
  fields.forEach(([value, weight]) => {
    const text = normalizeSearch(value);
    if (!text) return;
    if (text.includes(normalizedQuery)) score += weight * 3;
    terms.forEach((term) => {
      if (text.includes(term)) score += weight;
    });
  });
  return score;
}

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function contentSearchText(page) {
  return (page.content || []).map((block) => {
    if (block.text) return block.text;
    if (Array.isArray(block.items)) return block.items.join(" ");
    if (Array.isArray(block.images)) return block.images.map((image) => `${image.alt || ""} ${image.src || ""}`).join(" ");
    return "";
  }).join(" ");
}

function loadPage(id, push = true) {
  const page = byId.get(id) || pages[0];
  state.activeId = page.id;
  page.breadcrumbs.forEach((_, index) => {
    const path = page.path.split("/").filter(Boolean).slice(0, index + 1).join("/");
    const parent = pages.find((item) => item.path === `/${path}`);
    if (parent && !state.closedGroups.has(parent.id)) state.openGroups.add(parent.id);
  });

  document.title = `${page.title} | Central de Ajuda IGUITECH`;
  document.getElementById("pageTitle").textContent = page.title;
  document.getElementById("pageSummary").innerHTML = formatInline(cleanSentence(page.summary));
  document.getElementById("pageSection").textContent = page.breadcrumbs[0] || "Base de conhecimento";
  document.getElementById("breadcrumbs").textContent = ["IGUITECH", ...page.breadcrumbs, page.title].join(" / ");

  renderDoc(page);
  renderOutline(page);
  renderPageNav(page);
  renderNav();
  closeMobileMenu();
  if (push) history.replaceState(null, "", `#${page.id}`);
}

function renderDoc(page) {
  const doc = document.getElementById("docContent");
  if (page.id === WELCOME_PAGE.id) {
    doc.innerHTML = renderWelcomeDoc();
    return;
  }

  const headings = normalizedHeadings(page);
  const blocks = [];

  blocks.push(`<p class="lead">${formatInline(cleanSentence(page.summary))}</p>`);

  const contentBlocks = renderContentBlocks(page);
  if (contentBlocks.length > 1) {
    blocks.push(...contentBlocks);
    blocks.push(renderBestPractices());
    doc.innerHTML = blocks.join("");
    return;
  }

  const images = page.images || [];
  if (headings.length) {
    headings.forEach((heading, index) => {
      const id = headingId(heading, index);
      blocks.push(`<h2 id="${id}">${escapeHtml(heading)}</h2>`);
      blocks.push(`<p>${topicText(page, heading, index)}</p>`);
      if (images[index]) blocks.push(`<div class="article-media">${renderImageFigure(images[index], index)}</div>`);
    });
    if (images.length > headings.length) {
      blocks.push(`<div class="article-media">${images.slice(headings.length).map(renderImageFigure).join("")}</div>`);
    }
  } else {
    blocks.push('<h2 id="orientacao">Orientação</h2>');
    blocks.push(`<p>Use este artigo como referência para revisar a configuração correspondente no painel da <strong>IGUITECH</strong>. Antes de alterar qualquer parâmetro, confirme o perfil de acesso do usuário e valide o impacto da mudança no atendimento.</p>`);
    if (images.length) blocks.push(`<div class="article-media">${images.map(renderImageFigure).join("")}</div>`);
  }

  blocks.push(renderBestPractices());
  doc.innerHTML = blocks.join("");
}

function renderContentBlocks(page) {
  const content = Array.isArray(page.content) ? page.content : [];
  if (!content.length) return [];
  const galleries = content.filter((block) => block.type === "gallery" && Array.isArray(block.images) && block.images.length);
  const extraParagraphs = content.filter((block) => block.type === "paragraph" && block.text && cleanSentence(block.text) !== cleanSentence(page.summary));
  if (galleries.length === 1 && extraParagraphs.length === 0) return [];

  const blocks = [];
  const seenImages = new Set();

  content.forEach((block, index) => {
    if (block.type === "paragraph" && block.text && cleanSentence(block.text) !== cleanSentence(page.summary)) {
      blocks.push(`<p>${formatInline(cleanSentence(block.text))}</p>`);
    }
    if (block.type === "heading" && block.text) {
      const heading = cleanSentence(block.text);
      blocks.push(`<h2 id="${headingId(heading, index)}">${escapeHtml(heading)}</h2>`);
    }
    if (block.type === "list" && Array.isArray(block.items) && block.items.length) {
      blocks.push(`<ul class="doc-checklist">${block.items.map((item) => `<li>${formatInline(cleanSentence(item))}</li>`).join("")}</ul>`);
    }
    if (block.type === "gallery" && Array.isArray(block.images) && block.images.length) {
      const figures = block.images
        .filter((image) => {
          const key = image.src || image.alt;
          if (seenImages.has(key)) return false;
          seenImages.add(key);
          return true;
        })
        .map(renderImageFigure)
        .join("");
      if (figures) blocks.push(`<div class="article-media">${figures}</div>`);
    }
  });

  return blocks;
}

function renderImageFigure(image, index = 0) {
  return `
    <figure class="${index === 0 ? "featured" : ""}">
      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "Imagem ilustrativa do artigo")}" loading="lazy">
    </figure>
  `;
}

function renderBestPractices() {
  return `<h2 id="boas-praticas">Boas práticas</h2>
  <ul class="doc-checklist">
    <li><strong>Revise permissões</strong> antes de salvar alterações administrativas.</li>
    <li><strong>Teste em um atendimento real</strong> sempre que a configuração afetar canais, automações ou mensagens.</li>
    <li>Registre parâmetros importantes em formato <code>chave: valor</code> para facilitar auditoria e suporte.</li>
  </ul>`;
}

function renderWelcomeDoc() {
  return `
    <div class="welcome-doc">
      <div class="welcome-logo-card">
        <img src="https://i.ibb.co/8LvGR2dd/lg-site.png" alt="IGUITECH">
      </div>
      <p class="lead">Bem-vindo à base oficial de conhecimento da <strong>IGUITECH</strong>. Esta página reúne o ponto de partida para entender a plataforma, localizar tutoriais e orientar a equipe no uso diário do sistema.</p>
      <h2 id="boas-vindas-0">Boas-vindas</h2>
      <p>A <strong>IGUITECH</strong> foi pensada para centralizar atendimento, canais, automações, gestão comercial, relatórios e configurações administrativas. Esta central ajuda cada pessoa a encontrar o caminho certo sem depender de tentativa e erro.</p>
      <h2 id="introducao-ao-sistema-1">Introdução ao sistema</h2>
      <p>Dentro da plataforma, você encontrará recursos para conectar canais como <strong>WhatsApp</strong>, organizar filas, acompanhar tickets, criar automações, consultar métricas e manter a operação documentada.</p>
      <h2 id="o-que-e-esta-faq-2">O que é esta FAQ</h2>
      <p>Esta FAQ é uma biblioteca prática de artigos. Ela serve para explicar telas, campos, permissões, fluxos e boas práticas, sempre com textos objetivos e imagens de apoio para facilitar o entendimento.</p>
      <h2 id="como-encontrar-respostas-3">Como encontrar respostas</h2>
      <p>Use a busca no canto superior direito para pesquisar por <code>título</code>, menu, caminho, palavra do artigo, arquivo, link ou imagem. Você também pode navegar pelo menu lateral e abrir os submenus conforme a área desejada.</p>
    </div>
  `;
}
function topicText(page, heading, index) {
  const lower = `${page.title} ${heading}`.toLowerCase();
  if (lower.includes("api") || lower.includes("waba")) {
    return `Nesta etapa, confira tokens, identificadores e permissões antes de publicar a configuração. Campos técnicos devem ser tratados como <code>credenciais</code> e nunca compartilhados em conversas públicas.`;
  }
  if (lower.includes("automação") || lower.includes("chatbot") || lower.includes("fluxo")) {
    return `Organize o fluxo por intenção do usuário, valide as condições de entrada e mantenha mensagens curtas. Quando possível, use respostas em <strong>negrito</strong> para destacar ações importantes e <em>texto em itálico</em> para observações.`;
  }
  if (lower.includes("atendimento") || lower.includes("ticket")) {
    return `Use esta área para padronizar a rotina da equipe. O objetivo é manter o atendimento rastreável, com filas bem definidas, histórico acessível e transferências claras entre responsáveis.`;
  }
  if (lower.includes("dashboard") || lower.includes("relatório")) {
    return `Acompanhe os indicadores principais antes de tomar decisões. Compare períodos, verifique volume de conversas e observe gargalos de atendimento para ajustar a operação com mais segurança.`;
  }
  const fallback = page.topics[index] || page.headings[index] || heading;
  return `Este tópico ajuda a entender <strong>${escapeHtml(fallback)}</strong> dentro da operação. Siga a ordem apresentada, confirme os dados preenchidos e teste o comportamento antes de liberar para a equipe.`;
}

function normalizedHeadings(page) {
  const items = [...(page.headings || []), ...(page.topics || [])]
    .map(cleanSentence)
    .filter(Boolean)
    .filter((item) => !/agent instructions|querying this documentation/i.test(item));
  return [...new Set(items)].slice(0, 6);
}

function renderOutline(page) {
  const outline = document.getElementById("pageOutline");
  const headings = normalizedHeadings(page);
  outline.innerHTML = "";
  if (!headings.length) {
    outline.innerHTML = '<a href="#orientacao">Orientação</a><a href="#boas-praticas">Boas práticas</a>';
    return;
  }
  headings.forEach((heading, index) => {
    const link = document.createElement("a");
    link.href = `#${headingId(heading, index)}`;
    link.textContent = heading;
    outline.appendChild(link);
  });
  const best = document.createElement("a");
  best.href = "#boas-praticas";
  best.textContent = "Boas práticas";
  outline.appendChild(best);
}

function renderPageNav(page) {
  const nav = document.getElementById("pageNav");
  const index = orderedPages.findIndex((item) => item.id === page.id);
  const previous = orderedPages[index - 1];
  const next = orderedPages[index + 1];
  nav.innerHTML = `
    ${previous ?navCard(previous, "Anterior", "‹") : "<span></span>"}
    ${next ?navCard(next, "Próximo", "›") : "<span></span>"}
  `;
  nav.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => loadPage(button.dataset.page));
  });
}

function navCard(page, label, arrow) {
  return `<button class="page-nav-card" data-page="${page.id}">
    <span class="nav-arrow">${arrow}</span>
    <span><small>${label}</small><strong>${escapeHtml(page.title)}</strong></span>
  </button>`;
}

function iconFor(title) {
  const lower = title.toLowerCase();
  const match = ICONS.find(([key]) => lower.includes(key));
  return match ?match[1] : "□";
}

function cleanSentence(text) {
  return String(text || "")
    .replace(/\{%[^%]+%\}/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?;:])/g, "$1")
    .replace(/automação projetada/g, "automação projetado")
    .replace(/Api Oficial/g, "API Oficial")
    .replace(/abertar conversas/g, "abrir conversas")
    .replace(/relizada/g, "realizada")
    .replace(/multiplas/g, "múltiplas")
    .replace(/contrução/g, "construção")
    .replace(/possuiível/g, "possível")
    .replace(/vírgula/g, "vírgula")
    .trim();
}

function formatInline(text) {
  return escapeHtml(text)
    .replace(/\b(IGUITECH|WhatsApp|WABA|API Oficial|Painel Admin|Superadmin)\b/g, "<strong>$1</strong>")
    .replace(/\b(API|ID|token|webhook|SMTP|OAuth|JSON)\b/g, "<code>$1</code>");
}

function headingId(heading, index) {
  const slug = heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "topico"}-${index}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[char]));
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("iguitech-help-theme", theme);
}

document.getElementById("searchInput").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderNav();
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("searchInput").focus();
  }
});

document.getElementById("menuButton").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  document.body.classList.toggle("sidebar-open", sidebar.classList.contains("open"));
});

document.getElementById("sidebarBackdrop").addEventListener("click", () => closeMobileMenu());

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileMenu();
});

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.body.classList.remove("sidebar-open");
}

document.getElementById("lightTheme").addEventListener("click", () => setTheme("light"));
document.getElementById("darkTheme").addEventListener("click", () => setTheme("dark"));

setTheme(localStorage.getItem("iguitech-help-theme") || "dark");
renderNav();
loadPage(location.hash.replace("#", "") || pages[0].id, false);

