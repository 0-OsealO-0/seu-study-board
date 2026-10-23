(function () {
  "use strict";

  const sourceChapters = window.LINEAR_REVIEW_CHAPTERS || [];
  const sectionMeta = [
    {
      number: "1.1",
      title: "矩阵的基本概念",
      lead: "矩阵、同型与相等、特殊方阵和向量。",
      map: ["矩阵", "同型与相等", "特殊方阵", "行向量与列向量"]
    },
    {
      number: "1.2",
      title: "矩阵的基本运算",
      lead: "加法、数乘、乘法、幂、多项式、转置与矩阵应用。",
      map: ["线性运算", "矩阵乘法", "方阵幂", "转置", "关系矩阵"]
    },
    {
      number: "1.3",
      title: "分块矩阵",
      lead: "分块运算、按行列分块、分块转置与分块对角结构。",
      map: ["分块", "分块乘法", "按行列分块", "分块转置"]
    },
    {
      number: "1.4",
      title: "初等变换与初等矩阵",
      lead: "三类初等变换、阶梯形、矩阵等价和初等矩阵。",
      map: ["初等变换", "行阶梯形", "行最简形", "等价标准形", "初等矩阵"]
    },
    {
      number: "1.5",
      title: "方阵的逆矩阵",
      lead: "逆矩阵定义、性质、可逆判定和矩阵方程。",
      map: ["逆矩阵", "唯一性", "可逆判定", "行变换求逆", "矩阵方程"]
    },
    {
      number: "1.6",
      title: "方阵的行列式",
      lead: "行列式定义、性质、按行/列展开、初等变换计算与范德蒙行列式。",
      map: ["行列式性质", "代数余子式", "按行/列展开", "初等变换", "范德蒙行列式"]
    },
    {
      number: "1.7",
      title: "矩阵的秩",
      lead: "子式定义、秩的性质、初等变换不变量、等价标准形、含参讨论与矩阵秩的不等式。",
      map: ["k 阶子式", "秩的定义", "初等变换", "等价标准形", "含参讨论", "秩不等式"]
    }
  ];
  const allSourceEntries = sourceChapters.flatMap((chapter) => chapter.entries || []);
  const chapters = sectionMeta
    .map((section) => {
      const entries = allSourceEntries.filter((entry) => {
        const match = entry.label.match(/\d+\.\d+/);
        return match && match[0] === section.number;
      });
      return Object.assign({}, section, { entries });
    })
    .filter((chapter) => chapter.entries.length > 0);
  const typeNames = {
    definition: "定义",
    theorem: "定理",
    corollary: "推论",
    formula: "公式",
    property: "性质",
    method: "方法",
    proof: "证明",
    pitfall: "易错点"
  };

  const state = {
    query: "",
    type: "all"
  };
  let navigationLockUntil = 0;

  const elements = {
    nav: document.getElementById("chapter-nav"),
    content: document.getElementById("chapter-content"),
    search: document.getElementById("search-input"),
    searchStatus: document.getElementById("search-status"),
    searchResults: document.getElementById("search-results"),
    filterTabs: document.getElementById("filter-tabs"),
    resultCount: document.getElementById("result-count"),
    expandAll: document.getElementById("expand-all"),
    sidebarToggle: document.getElementById("sidebar-toggle"),
    sidebarBackdrop: document.getElementById("sidebar-backdrop"),
    sidebar: document.getElementById("sidebar")
  };

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (text !== undefined && text !== null) {
      element.textContent = text;
    }
    return element;
  }

  function appendMathText(parent, text, displayMode) {
    if (!text) {
      return;
    }

    if (displayMode || (text.startsWith("$$") && text.endsWith("$$"))) {
      const expression = displayMode
        ? text
        : text.slice(2, -2);
      const wrapper = createElement("span", "math-display");
      try {
        window.katex.render(expression, wrapper, {
          displayMode: true,
          throwOnError: false,
          strict: "ignore"
        });
      } catch (error) {
        wrapper.textContent = text;
      }
      parent.appendChild(wrapper);
      return;
    }

    const pattern = /\$([^$]+)\$/g;
    let cursor = 0;
    let match = pattern.exec(text);

    while (match) {
      if (match.index > cursor) {
        parent.appendChild(document.createTextNode(text.slice(cursor, match.index)));
      }

      const mathSpan = createElement("span", "math-inline");
      try {
        window.katex.render(match[1], mathSpan, {
          displayMode: false,
          throwOnError: false,
          strict: "ignore"
        });
      } catch (error) {
        mathSpan.textContent = match[0];
      }
      parent.appendChild(mathSpan);
      cursor = match.index + match[0].length;
      match = pattern.exec(text);
    }

    if (cursor < text.length) {
      parent.appendChild(document.createTextNode(text.slice(cursor)));
    }
  }

  function appendParagraphs(parent, values) {
    const list = Array.isArray(values) ? values : [values];
    list.forEach((value) => {
      const paragraph = createElement("span", "text-block");
      appendMathText(paragraph, String(value));
      parent.appendChild(paragraph);
    });
  }

  function flattenText(entry) {
    return [
      entry.label,
      entry.title,
      entry.numberNote,
      entry.statement,
      entry.conditions,
      entry.conclusion,
      entry.derivation,
      entry.pitfalls,
      entry.source
    ]
      .flat(Infinity)
      .filter(Boolean)
      .join(" ");
  }

  function createBadge(type) {
    const badge = createElement("span", `entry-badge entry-badge--${type}`, typeNames[type]);
    return badge;
  }

  function createField(title, values, className) {
    if (!values || !values.length) {
      return null;
    }

    const section = createElement("section", `detail-section${className ? ` ${className}` : ""}`);
    section.appendChild(createElement("h4", "detail-title", title));

    if (className === "detail-section--chips") {
      const chipList = createElement("div", "chip-list");
      values.forEach((value) => {
        const chip = createElement("span", "meta-chip");
        appendMathText(chip, String(value));
        chipList.appendChild(chip);
      });
      section.appendChild(chipList);
      return section;
    }

    const list = createElement("ul", "detail-list");
    values.forEach((value) => {
      const item = createElement("li");
      appendMathText(item, String(value));
      list.appendChild(item);
    });
    section.appendChild(list);
    return section;
  }

  function createProofDisclosure(steps) {
    if (!steps || !steps.length) {
      return null;
    }

    const disclosure = createElement("details", "proof-disclosure");
    const summary = createElement("summary", "proof-disclosure__summary");
    summary.appendChild(createElement("span", "proof-disclosure__title", "推导过程"));
    summary.appendChild(
      createElement("span", "proof-disclosure__count", `${steps.length} 步`)
    );
    disclosure.appendChild(summary);

    const list = createElement("ol", "proof-list");
    steps.forEach((step) => {
      const item = createElement("li");
      appendMathText(item, String(step));
      list.appendChild(item);
    });
    disclosure.appendChild(list);
    return disclosure;
  }

  function createSource(source) {
    const sourceLine = createElement("p", "source-line");
    sourceLine.appendChild(createElement("span", "source-label", "来源"));
    sourceLine.appendChild(document.createTextNode(source));
    return sourceLine;
  }

  function createEntryCard(entry, chapter, isDefinition) {
    const proofSteps = isDefinition ? [] : entry.derivation || [];
    const article = createElement(
      "article",
      `entry-card entry-card--${entry.type}${isDefinition ? " entry-card--definition" : ""}`
    );
    article.id = entry.id || `${chapter.number}-${entry.label}`.replace(/[\s.]+/g, "-");
    article.dataset.type = entry.type;
    article.dataset.chapter = chapter.number;
    article.dataset.label = entry.label;
    article.dataset.title = entry.title.replace(/\$/g, "");
    article.dataset.search = `${flattenText(entry)} ${proofSteps.join(" ")}`.toLowerCase();
    article.dataset.proof = proofSteps.join(" ").toLowerCase();

    const summary = createElement("button", "entry-summary");
    summary.type = "button";
    summary.setAttribute("aria-expanded", "false");

    const topLine = createElement("span", "entry-topline");
    topLine.appendChild(createBadge(entry.type));
    topLine.appendChild(createElement("span", "entry-label", entry.label));
    if (entry.numberNote) {
      topLine.appendChild(createElement("span", "entry-note", "原课件编号"));
    }
    summary.appendChild(topLine);

    const title = createElement("span", "entry-title");
    appendMathText(title, entry.title);
    summary.appendChild(title);

    if (!isDefinition) {
      const statementPreview = createElement("span", "entry-preview");
      appendParagraphs(statementPreview, entry.statement);
      summary.appendChild(statementPreview);
    }

    const indicator = createElement("span", "entry-indicator");
    indicator.setAttribute("aria-hidden", "true");
    summary.appendChild(indicator);

    const details = createElement("div", "entry-details");
    details.hidden = true;

    if (entry.numberNote) {
      const note = createElement("p", "number-note");
      appendMathText(note, entry.numberNote);
      details.appendChild(note);
    }

    if (isDefinition) {
      const statement = createElement("section", "detail-section");
      statement.appendChild(createElement("h4", "detail-title", "定义陈述"));
      appendParagraphs(statement, entry.statement);
      details.appendChild(statement);
    } else {
      [
        createField("适用条件", entry.conditions),
        createField("结论", entry.conclusion, "detail-section--conclusion"),
        createField("易错点", entry.pitfalls, "detail-section--warning"),
        createProofDisclosure(proofSteps)
      ].forEach((field) => {
        if (field) {
          details.appendChild(field);
        }
      });
    }

    details.appendChild(createSource(entry.source));
    article.appendChild(summary);
    article.appendChild(details);
    return article;
  }

  function createChapterSection(chapter) {
    const section = createElement("section", "chapter-section");
    section.id = `chapter-${chapter.number.replace(".", "-")}`;
    section.dataset.chapter = chapter.number;

    const header = createElement("header", "chapter-header");
    const eyebrow = createElement("p", "chapter-eyebrow", `第 1 章 / §${chapter.number}`);
    const title = createElement("h2", "chapter-title", chapter.title);
    const lead = createElement("p", "chapter-lead");
    appendMathText(lead, chapter.lead);
    header.appendChild(eyebrow);
    header.appendChild(title);
    header.appendChild(lead);

    const map = createElement("div", "chapter-map");
    chapter.map.forEach((item, index) => {
      if (index > 0) {
        const separator = createElement("span", "chapter-map__separator", "→");
        separator.setAttribute("aria-hidden", "true");
        map.appendChild(separator);
      }
      map.appendChild(createElement("span", "chapter-map__item", item));
    });
    header.appendChild(map);

    const body = createElement("div", "chapter-body");
    const entryList = createElement("div", "entry-list");
    chapter.entries
      .slice()
      .forEach((entry) => {
        entryList.appendChild(createEntryCard(entry, chapter, false));
      });
    body.appendChild(entryList);

    section.appendChild(header);
    section.appendChild(body);
    return section;
  }

  function buildNavigation() {
    chapters.forEach((chapter) => {
      const link = createElement("a", "chapter-nav-link");
      link.href = `#chapter-${chapter.number.replace(".", "-")}`;
      link.appendChild(createElement("span", "chapter-nav__number", chapter.number));
      link.appendChild(createElement("span", "chapter-nav__title", chapter.title));
      link.appendChild(
        createElement(
          "span",
          "chapter-nav__count",
          String(chapter.entries.length)
        )
      );
      elements.nav.appendChild(link);
    });
  }

  function buildContent() {
    chapters.forEach((chapter) => {
      elements.content.appendChild(createChapterSection(chapter));
    });
  }

  function toggleCard(card, forceState) {
    const button = card.querySelector(".entry-summary");
    const details = card.querySelector(".entry-details");
    const shouldOpen =
      forceState === undefined ? button.getAttribute("aria-expanded") !== "true" : forceState;
    button.setAttribute("aria-expanded", String(shouldOpen));
    details.hidden = !shouldOpen;
    card.classList.toggle("is-open", shouldOpen);
  }

  function updateExpandAllLabel() {
    const cards = Array.from(document.querySelectorAll(".entry-card"));
    const allOpen = cards.length > 0 && cards.every((card) => card.classList.contains("is-open"));
    elements.expandAll.textContent = allOpen ? "全部收起" : "全部展开";
    elements.expandAll.dataset.expanded = String(allOpen);
  }

  function setFilter(type) {
    state.type = type;
    Array.from(elements.filterTabs.querySelectorAll(".filter-tab")).forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === type);
      button.setAttribute("aria-pressed", String(button.dataset.filter === type));
    });

    if (type === "definition") {
      document.querySelectorAll(".definition-panel").forEach((panel) => {
        panel.open = true;
      });
    }

    applyFilters();
  }

  function setActiveNavigation(targetId) {
    document.querySelectorAll(".chapter-nav-link").forEach((link) => {
      const isActive = link.getAttribute("href") === `#${targetId}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function updateActiveNavigationFromScroll() {
    if (Date.now() < navigationLockUntil) {
      return;
    }

    const sections = Array.from(document.querySelectorAll(".chapter-section")).filter(
      (section) => !section.hidden
    );
    if (!sections.length) {
      return;
    }

    const threshold = window.innerWidth <= 900 ? 190 : 150;
    let activeSection = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= threshold) {
        activeSection = section;
      }
    });

    const nearPageBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 4;
    if (nearPageBottom) {
      activeSection = sections[sections.length - 1];
    }

    setActiveNavigation(activeSection.id);
  }

  function renderSearchResults(query, matchingCards) {
    elements.searchResults.textContent = "";
    if (!query) {
      elements.searchResults.hidden = true;
      return;
    }

    const list = createElement("div", "search-results__list");
    matchingCards.slice(0, 8).forEach((card) => {
      const button = createElement("button", "search-result");
      button.type = "button";
      button.dataset.target = card.id;

      const meta = createElement("span", "search-result__meta");
      meta.appendChild(
        createElement("span", "search-result__chapter", `§${card.dataset.chapter}`)
      );
      meta.appendChild(
        createElement("span", "search-result__label", card.dataset.label)
      );
      button.appendChild(meta);
      button.appendChild(
        createElement("span", "search-result__title", card.dataset.title)
      );
      list.appendChild(button);
    });

    if (matchingCards.length > 8) {
      list.appendChild(
        createElement(
          "p",
          "search-results__more",
          `另有 ${matchingCards.length - 8} 条匹配结果，请继续输入关键词缩小范围。`
        )
      );
    }

    elements.searchResults.appendChild(list);
    elements.searchResults.hidden = false;
  }

  function applyFilters() {
    const query = state.query.trim().toLowerCase();
    let visible = 0;
    const matchingCards = [];

    document.querySelectorAll(".entry-card").forEach((card) => {
      const matchesType = state.type === "all" || card.dataset.type === state.type;
      const matchesQuery = !query || card.dataset.search.includes(query);
      const show = matchesType && matchesQuery;
      card.hidden = !show;
      if (show) {
        visible += 1;
        matchingCards.push(card);
        if (query && card.dataset.type !== "definition") {
          toggleCard(card, true);
          const proofDisclosure = card.querySelector(".proof-disclosure");
          if (proofDisclosure && card.dataset.proof.includes(query)) {
            proofDisclosure.open = true;
          }
        }
      }
    });

    document.querySelectorAll(".chapter-section").forEach((section) => {
      const hasVisibleCards = Array.from(section.querySelectorAll(".entry-card")).some(
        (card) => !card.hidden
      );
      section.hidden = !hasVisibleCards;
    });

    if (query) {
      document.querySelectorAll(".definition-panel").forEach((panel) => {
        const hasMatch = Array.from(panel.querySelectorAll(".entry-card")).some(
          (card) => !card.hidden
        );
        panel.open = hasMatch;
      });
    }

    const countLabel = visible === 1 ? "1 条内容" : `${visible} 条内容`;
    elements.resultCount.textContent = countLabel;
    elements.searchStatus.textContent = query ? `${visible} 条匹配` : countLabel;
    renderSearchResults(query, matchingCards);
  }

  function openSidebar() {
    document.body.classList.add("sidebar-open");
    elements.sidebarToggle.setAttribute("aria-expanded", "true");
    elements.sidebarBackdrop.hidden = false;
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    elements.sidebarToggle.setAttribute("aria-expanded", "false");
    elements.sidebarBackdrop.hidden = true;
  }

  function wireEvents() {
    elements.content.addEventListener("click", (event) => {
      const summary = event.target.closest(".entry-summary");
      if (summary) {
        const card = summary.closest(".entry-card");
        toggleCard(card);
        updateExpandAllLabel();
      }
    });

    elements.search.addEventListener("input", () => {
      state.query = elements.search.value;
      applyFilters();
    });
    elements.search.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || !state.query.trim()) {
        return;
      }
      const firstMatch = Array.from(document.querySelectorAll(".entry-card")).find(
        (card) => !card.hidden
      );
      if (firstMatch) {
        event.preventDefault();
        toggleCard(firstMatch, true);
        firstMatch.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    elements.searchResults.addEventListener("click", (event) => {
      const result = event.target.closest(".search-result");
      if (!result) {
        return;
      }
      const card = document.getElementById(result.dataset.target);
      if (card) {
        toggleCard(card, true);
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    elements.filterTabs.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-tab");
      if (button) {
        setFilter(button.dataset.filter);
      }
    });

    elements.expandAll.addEventListener("click", () => {
      const shouldOpen = elements.expandAll.dataset.expanded !== "true";
      document.querySelectorAll(".entry-card").forEach((card) => {
        toggleCard(card, shouldOpen);
      });
      updateExpandAllLabel();
    });

    elements.sidebarToggle.addEventListener("click", () => {
      if (document.body.classList.contains("sidebar-open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    elements.sidebarBackdrop.addEventListener("click", closeSidebar);
    elements.sidebar.addEventListener("click", (event) => {
      const link = event.target.closest(".chapter-nav-link");
      if (link) {
        const targetId = link.getAttribute("href").slice(1);
        navigationLockUntil = Date.now() + 700;
        setActiveNavigation(targetId);
        closeSidebar();
        window.setTimeout(updateActiveNavigationFromScroll, 720);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    });
  }

  function wireNavigationTracking() {
    let framePending = false;
    const scheduleUpdate = () => {
      if (framePending) {
        return;
      }
      framePending = true;
      window.requestAnimationFrame(() => {
        framePending = false;
        updateActiveNavigationFromScroll();
      });
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    updateActiveNavigationFromScroll();
  }

  function updateStats() {
    const itemCount = chapters.reduce(
      (sum, chapter) => sum + chapter.entries.length,
      0
    );
    const formulaCount = chapters.reduce(
      (sum, chapter) =>
        sum +
        chapter.entries.filter((entry) =>
          ["formula", "method"].includes(entry.type)
        ).length,
      0
    );
    document.getElementById("stat-items").textContent = String(itemCount);
    document.getElementById("stat-formulas").textContent = String(formulaCount);
    document.getElementById("stat-chapters").textContent = String(chapters.length);
  }

  function initialize() {
    buildNavigation();
    buildContent();
    wireEvents();
    wireNavigationTracking();
    updateStats();
    updateExpandAllLabel();
    applyFilters();
  }

  initialize();
})();
