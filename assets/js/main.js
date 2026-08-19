const scholarUrl = "https://scholar.google.com/citations?user=zDgjX3IAAAAJ&hl=en";

const publications = [
  {
    title: "M4-SAR: A multi-resolution, multi-polarization, multi-scene, multi-source dataset and benchmark for optical-SAR object detection",
    authors: "<strong>Chao Wang</strong>, Wei Lu, Xingdong Li, Jian Yang, Lei Luo",
    venue: "arXiv preprint arXiv:2505.10931",
    year: "2026",
    badge: "ECCV 2026",
    image: "assets/images/M4-SAR.png",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2505.10931" },
      { label: "Code", href: "https://github.com/wchao0601/M4-SAR" }
    ]
  },
  {
    title: "Localized background-aware generative distillation for enhanced remote sensing object detection",
    authors: "<strong>Chao Wang</strong>, Yuxuan Sun, Jian Yang, Lei Luo",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    year: "2026",
    badge: "IEEE TCSVT",
    image: "assets/images/LBGD.png",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/abstract/document/11373188" },
      { label: "Code", href: "https://github.com/wchao0601/LBGD" }
    ]
  },
  {
    title: "MSOD: A large-scale multi-scene dataset and a novel diagonal-geometry loss for SAR object detection",
    authors: "<strong>Chao Wang</strong>, Wenxuan Fang, Xingdong Li, Jian Yang, Lei Luo",
    venue: "IEEE Transactions on Geoscience and Remote Sensing",
    year: "2025",
    badge: "IEEE TGRS",
    image: "assets/images/MSOD.png",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11150448" },
      { label: "Code", href: "https://github.com/wchao0601/MSOD-DGIoU" }
    ]
  },
  {
    title: "Cross-modal gaussian localization distillation for optical information guided SAR object detection",
    authors: "<strong>Chao Wang</strong>, Lei Luo, Wenxuan Fang, Jian Yang",
    venue: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    year: "2025",
    badge: "ICASSP 2025",
    image: "assets/images/GaLD.png",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/10889285" },
      { label: "Code", href: "https://github.com/wchao0601/GaLD" }
    ]
  },
  {
    title: "PSEKD: Phase-shift encoded knowledge distillation for oriented object detection in remote sensing images",
    authors: "<strong>Chao Wang</strong>, Yuxin Yue, Bin Luo, Yuxuan Chen, Jing Xue",
    venue: "ICASSP 2024 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    year: "2024",
    badge: "ICASSP 2024",
    image: "assets/images/PseKD.png",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/10447000" }
    ]
  },
  {
    title: "Category-oriented localization distillation for SAR object detection and a unified benchmark",
    authors: "<strong>Chao Wang</strong>, Rui Ruan, Zhe Zhao, Chun Li, Jin Tang",
    venue: "IEEE Transactions on Geoscience and Remote Sensing 61, 1-14",
    year: "2023",
    badge: "IEEE TGRS",
    image: "assets/images/CoLD.png",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/10168956" },
      { label: "Code", href: "https://github.com/mmic-lcl/Datasets-and-benchmark-code" }
    ]
  }
];

const news = [
  {
    date: "2026.06.18",
    en: "Congratulations! M4-SAR: A Multi-Resolution, Multi-Polarization, Multi-Scene, Multi-Source Dataset and Benchmark for Optical-SAR Object Detection has been accepted by ECCV 2026 (Poster).",
    zh: "M4-SAR: A Multi-Resolution, Multi-Polarization, Multi-Scene, Multi-Source Dataset and Benchmark for Optical-SAR Object Detection 已被ECCV 2026接受（海报）。"
  },
];

const translations = {
  en: {
    "nav.about": "About",
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
    "about.body2": "SAR Object Detection: Detection methods and benchmarks for synthetic aperture radar imagery under complex scenes.",
    "about.body3": "Optical-SAR Fusion: Cross-modal localization and multimodal representation learning for Earth observation.",
    "about.body4": "Knowledge Distillation: Compact, accurate detectors through localization-aware and generative distillation.",
    "about.body5": "Foundation Model Adaptation: Efficient adaptation of large visual models for remote sensing detection and segmentation.",
    "news.title": "News",
    "pubs.title": "Publications",
    "pubs.note": "Selected first-author and equal-contribution papers. * denotes equal contribution.",
    "pubs.all": "View all",
    "education.title": "Education",
    "education.njust.school": "Nanjing University of Science and Technology",
    "education.njust.degree": "Ph.D. Candidate",
    "education.ahu.school": "Anhui University",
    "education.ahu.degree": "M.S. Student",
    "education.wxc.school": "West Anhui University",
    "education.wxc.degree": "B.S. Student",
    "service.title": "Academic Service",
    "service.journal": "Journal Reviewer",
    "service.conference": "Conference Reviewer",
    "footer.rights": "All rights reserved.",
    "footer.source": "Built for GitHub Pages. Update content in assets/js/main.js."
  },
  zh: {
    "nav.about": "简介",
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
    "about.body2": "SAR目标检测：复杂场景下合成孔径雷达图像的检测方法与基准数据。",
    "about.body3": "光学-SAR融合：面向地球观测的跨模态定位与多模态表征学习。",
    "about.body4": "知识蒸馏：通过定位感知和生成式蒸馏实现紧凑且准确的检测器。",
    "about.body5": "基础模型适配：高效适配大视觉模型用于遥感检测与分割。",
    "news.title": "最新动态",
    "pubs.title": "代表论文",
    "pubs.note": "入选第一作者及共同贡献论文。* 表示共同贡献。",
    "pubs.all": "查看全部",
    "education.title": "教育经历",
    "education.njust.school": "南京理工大学",
    "education.njust.degree": "博士研究生",
    "education.ahu.school": "安徽大学",
    "education.ahu.degree": "硕士研究生",
    "education.wxc.school": "皖西学院",
    "education.wxc.degree": "本科生",
    "service.title": "学术服务",
    "service.journal": "期刊审稿人",
    "service.conference": "会议审稿人",
    "footer.rights": "版权所有",
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
