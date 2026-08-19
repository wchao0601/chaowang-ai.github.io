const scholarUrl = "https://scholar.google.com/citations?user=zDgjX3IAAAAJ&hl=en";

const publications = [
  {
    title: "Localized background-aware generative distillation for enhanced remote sensing object detection",
    authors: "<strong>Chao Wang</strong>, Yuxuan Sun, Jian Yang, Lei Luo",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    year: "2026",
    citations: "3",
    badge: "IEEE TCSVT",
    image: "assets/images/thumb-generative-distillation.svg",
    links: [{ label: "Scholar", href: scholarUrl }]
  },
  {
    title: "M4-SAR: A multi-resolution, multi-polarization, multi-scene, multi-source dataset and benchmark for optical-SAR object detection",
    authors: "<strong>Chao Wang</strong>, Wei Lu, Xingdong Li, Jian Yang, Lei Luo",
    venue: "arXiv preprint arXiv:2505.10931",
    year: "2025",
    citations: "37",
    badge: "arXiv",
    image: "assets/images/m4-sar.png",
    links: [
      { label: "Scholar", href: scholarUrl },
      { label: "arXiv", href: "https://arxiv.org/abs/2505.10931" }
    ]
  },
  {
    title: "MSOD: A large-scale multi-scene dataset and a novel diagonal-geometry loss for SAR object detection",
    authors: "<strong>Chao Wang</strong>, Wenxuan Fang, Xingdong Li, Jian Yang, Lei Luo",
    venue: "IEEE Transactions on Geoscience and Remote Sensing",
    year: "2025",
    citations: "10",
    badge: "IEEE TGRS",
    image: "assets/images/m4-sar.pdf",
    links: [{ label: "Scholar", href: scholarUrl }]
  },
  {
    title: "Cross-modal gaussian localization distillation for optical information guided SAR object detection",
    authors: "<strong>Chao Wang</strong>, Lei Luo, Wenxuan Fang, Jian Yang",
    venue: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    year: "2025",
    citations: "8",
    badge: "ICASSP",
    image: "assets/images/thumb-cross-modal.svg",
    links: [{ label: "Scholar", href: scholarUrl }]
  },
  {
    title: "PSEKD: Phase-shift encoded knowledge distillation for oriented object detection in remote sensing images",
    authors: "<strong>Chao Wang</strong>, Yuxin Yue, Bin Luo, Yuxuan Chen, Jing Xue",
    venue: "ICASSP 2024 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    year: "2024",
    citations: "7",
    badge: "ICASSP",
    image: "assets/images/thumb-psekd.svg",
    links: [{ label: "Scholar", href: scholarUrl }]
  },
  {
    title: "Category-oriented localization distillation for SAR object detection and a unified benchmark",
    authors: "<strong>Chao Wang</strong>, Rui Ruan, Zhe Zhao, Chun Li, Jin Tang",
    venue: "IEEE Transactions on Geoscience and Remote Sensing 61, 1-14",
    year: "2023",
    citations: "80",
    badge: "IEEE TGRS",
    image: "assets/images/thumb-cold.svg",
    links: [{ label: "Scholar", href: scholarUrl }]
  }
];

const news = [
  {
    date: "2026.08",
    en: "Personal academic homepage project created for GitHub Pages.",
    zh: "个人学术主页项目已创建，可直接部署到 GitHub Pages。"
  },
  {
    date: "2026",
    en: "Localized background-aware generative distillation work appeared in IEEE TCSVT.",
    zh: "Localized background-aware generative distillation 工作发表于 IEEE TCSVT。"
  },
  {
    date: "2025",
    en: "M4-SAR dataset and benchmark released as an arXiv preprint.",
    zh: "M4-SAR 数据集与基准以 arXiv 预印本形式发布。"
  }
];

const translations = {
  en: {
    "nav.about": "About",
    "nav.research": "Research",
    "nav.news": "News",
    "nav.publications": "Publications",
    "nav.education": "Education",
    "nav.service": "Service",
    "profile.role": "Researcher in Computer Vision & Remote Sensing",
    "profile.tagline": "Multimodal remote sensing, SAR object detection, and knowledge distillation for robust Earth observation intelligence.",
    "links.email": "Email",
    "links.cv": "CV",
    "hero.eyebrow": "Computer Vision · Remote Sensing · Multimodal Learning",
    "about.title": "About Me",
    "about.body1": "I am Chao Wang (王超) at Nanjing University of Science and Technology. My research focuses on remote sensing object detection, knowledge distillation, SAR image understanding, and optical-SAR multimodal learning.",
    "about.body2": "I am interested in building reliable perception systems for complex Earth observation scenes, including robust detectors, unified benchmarks, and efficient adaptation strategies for foundation models.",
    "metrics.citations": "Scholar citations",
    "metrics.articles": "Scholar articles",
    "metrics.updated": "Last updated",
    "research.title": "Research Interests",
    "research.i1.title": "SAR Object Detection",
    "research.i1.body": "Detection methods and benchmarks for synthetic aperture radar imagery under complex scenes.",
    "research.i2.title": "Optical-SAR Fusion",
    "research.i2.body": "Cross-modal localization and multimodal representation learning for Earth observation.",
    "research.i3.title": "Knowledge Distillation",
    "research.i3.body": "Compact, accurate detectors through localization-aware and generative distillation.",
    "research.i4.title": "Foundation Model Adaptation",
    "research.i4.body": "Efficient adaptation of large visual models for remote sensing detection and segmentation.",
    "news.title": "News",
    "pubs.title": "Selected Publications",
    "pubs.note": "Selected first-author publications from Google Scholar. Please verify final author order, links, and venues before public release.",
    "pubs.all": "View all",
    "education.title": "Education",
    "education.item1": "Degree / program, school, advisor, and dates to be added.",
    "service.title": "Academic Service",
    "service.reviewing": "Reviewing",
    "service.placeholder": "Journal/conference reviewer roles to be added.",
    "footer.rights": "All rights reserved.",
    "footer.source": "Built for GitHub Pages. Update content in assets/js/main.js."
  },
  zh: {
    "nav.about": "简介",
    "nav.research": "研究方向",
    "nav.news": "动态",
    "nav.publications": "论文",
    "nav.education": "教育经历",
    "nav.service": "学术服务",
    "profile.role": "计算机视觉与遥感方向研究者",
    "profile.tagline": "聚焦多模态遥感、SAR 目标检测与知识蒸馏，面向稳健的地球观测智能。",
    "links.email": "邮箱",
    "links.cv": "简历",
    "hero.eyebrow": "计算机视觉 · 遥感 · 多模态学习",
    "about.title": "个人简介",
    "about.body1": "我是 Chao Wang（王超），来自南京理工大学。我的研究方向包括遥感目标检测、知识蒸馏、SAR 图像理解以及光学-SAR 多模态学习。",
    "about.body2": "我关注复杂地球观测场景下的可靠感知系统，包括稳健检测器、统一基准数据集，以及面向视觉基础模型的高效适配方法。",
    "metrics.citations": "Scholar 引用",
    "metrics.articles": "Scholar 论文",
    "metrics.updated": "最近更新",
    "research.title": "研究方向",
    "research.i1.title": "SAR 目标检测",
    "research.i1.body": "面向复杂场景合成孔径雷达图像的检测方法与基准构建。",
    "research.i2.title": "光学-SAR 融合",
    "research.i2.body": "用于地球观测的跨模态定位与多模态表征学习。",
    "research.i3.title": "知识蒸馏",
    "research.i3.body": "通过定位感知和生成式蒸馏构建轻量且准确的目标检测器。",
    "research.i4.title": "基础模型适配",
    "research.i4.body": "面向遥感检测与分割任务的大规模视觉模型高效适配。",
    "news.title": "最新动态",
    "pubs.title": "代表论文",
    "pubs.note": "以下为根据 Google Scholar 整理的一作论文。公开发布前建议核对最终作者顺序、链接和期刊/会议名称。",
    "pubs.all": "查看全部",
    "education.title": "教育经历",
    "education.item1": "学位 / 专业、学院、导师与时间待补充。",
    "service.title": "学术服务",
    "service.reviewing": "审稿服务",
    "service.placeholder": "期刊 / 会议审稿信息待补充。",
    "footer.rights": "版权所有。",
    "footer.source": "为 GitHub Pages 构建。可在 assets/js/main.js 中更新内容。"
  }
};

const state = {
  lang: localStorage.getItem("lang") || "en",
  theme: localStorage.getItem("theme") || "light"
};

function renderPublications() {
  const container = document.querySelector("#publication-list");
  container.innerHTML = publications.map((paper) => `
    <article class="publication-card">
      <img src="${paper.image}" alt="">
      <div>
        <div class="publication-meta">
          <span class="badge">${paper.badge}</span>
          <span>${paper.year}</span>
          <span>${paper.citations || "0"} citations</span>
        </div>
        <h3>${paper.title}</h3>
        <p class="authors">${paper.authors}</p>
        <p class="venue"><em>${paper.venue}</em></p>
        <div class="paper-links">
          ${paper.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderNews() {
  const container = document.querySelector("#news-list");
  container.innerHTML = news.map((item) => `
    <div class="news-row">
      <time>${item.date}</time>
      <p>${item[state.lang]}</p>
    </div>
  `).join("");
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelector("#lang-toggle").textContent = state.lang === "zh" ? "EN" : "中文";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = translations[state.lang][key] || translations.en[key] || node.textContent;
  });
  renderNews();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
}

document.querySelector("#theme-toggle").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", state.theme);
  applyTheme();
});

document.querySelector("#lang-toggle").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("lang", state.lang);
  applyLanguage();
});

document.querySelector("#year").textContent = new Date().getFullYear();
applyTheme();
renderPublications();
applyLanguage();
