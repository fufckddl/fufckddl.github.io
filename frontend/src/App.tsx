import { useEffect, useMemo, useState } from "react";
import { Icon } from "./components/Icons";
import { ProjectVisual } from "./components/ProjectVisual";
import { fallbackPortfolio } from "./data/fallbackPortfolio";
import type { Experience, PortfolioData, Project } from "./types";
import "./styles.css";

const sectionIds = {
  소개: "about",
  프로젝트: "projects",
  경험: "experience",
  스킬: "skills",
  연락: "contact",
} as const;

function splitHeroTitle(title: string) {
  if (title === fallbackPortfolio.hero.title) {
    return ["서비스를", "끝까지 구현하는", "풀스택 개발자"];
  }

  return title.split(" ");
}

const projectTones = ["tone-teal", "tone-clay", "tone-cream"] as const;

const projectImages = {
  GisDataHub: {
    imageSrc: "/assets/projects/cover-gisdatahub.webp",
    imageAlt: "서울 CCTV 밀도 지도 화면과 GisDataHub 프로젝트명이 포함된 대표 이미지",
  },
  GitCard: {
    imageSrc: "/assets/projects/cover-gitcard.webp",
    imageAlt: "GitHub README 제작 서비스 로그인 화면과 GitCard 프로젝트명이 포함된 대표 이미지",
  },
  HoseoLife: {
    imageSrc: "/assets/projects/cover-hoseolife.webp",
    imageAlt: "호서대학교 커뮤니티 모바일 화면과 HoseoLife 프로젝트명이 포함된 대표 이미지",
  },
  SummarIQ: {
    imageSrc: "/assets/projects/cover-summariq.webp",
    imageAlt: "회의 음성 파형과 요약 작업 화면을 표현한 SummarIQ 대표 이미지",
  },
  OneLineMind: {
    imageSrc: "/assets/projects/cover-onelinemind.webp",
    imageAlt: "활동 선택, 감정 달력, 기록 화면과 OneLineMind 프로젝트명이 포함된 대표 이미지",
  },
  Pitches: {
    imageSrc: "/assets/projects/cover-pitches.webp",
    imageAlt: "발표 감정 분석 모바일 화면과 Pitches 프로젝트명이 포함된 대표 이미지",
  },
  Routy: {
    imageSrc: "/assets/projects/cover-routy.webp",
    imageAlt: "소아 ADHD 아동 일상 관리 서비스 화면과 Routy 프로젝트명이 포함된 대표 이미지",
  },
  "Korean NLP Models": {
    imageSrc: "/assets/projects/cover-korean-nlp-models.webp",
    imageAlt: "감정 분류와 공감 생성 모델 흐름을 표현한 Korean NLP Models 대표 이미지",
  },
} satisfies Record<string, Pick<Project, "imageSrc" | "imageAlt">>;

const projectPeriods = {
  GisDataHub: "2026.05 - 2026.07",
  GitCard: "2025.12 - 2026.03",
  HoseoLife: "2025.07 - 2025.10",
  SummarIQ: "2025.10 - 2026.03",
  OneLineMind: "2025.06 - 2026.02",
  Pitches: "2024.10.25 ~ 27",
  Routy: "2025.10.24 ~ 26",
  "Korean NLP Models": "2025.06",
} satisfies Record<string, string>;

const skillIconSources: Record<string, string> = {
  React: "/assets/skills/react.svg",
  TypeScript: "/assets/skills/typescript.svg",
  JavaScript: "/assets/skills/javascript.svg",
  Vite: "/assets/skills/vite.svg",
  Dart: "/assets/skills/dart.svg",
  Java: "/assets/skills/java.svg",
  "Spring Boot": "/assets/skills/spring.svg",
  "REST API": "/assets/skills/openapi.svg",
  MySQL: "/assets/skills/mysql.svg",
  AWS: "/assets/skills/aws.svg",
  GitHub: "/assets/skills/github.svg",
  Git: "/assets/skills/git.svg",
  "API Integration": "/assets/skills/postman.svg",
  Python: "/assets/skills/python.svg",
  "Korean NLP": "/assets/skills/huggingface.svg",
  "AI Model": "/assets/skills/tensorflow.svg",
  "GIS Data": "/assets/skills/leaflet.svg",
};

const skillIconClassNames: Record<string, string> = {
  AWS: "is-dark-restored",
  GitHub: "is-dark-monochrome",
  MySQL: "is-dark-restored",
  "Korean NLP": "is-dark-warm",
};

const heroProfileHighlights = [
  "Java/Spring Boot 기반 API와 React 화면을 함께 구현합니다.",
  "GIS, 커뮤니티, AI 해커톤 프로젝트를 서비스 형태로 완성했습니다.",
  "요구사항, 화면 상태, 데이터 흐름을 끝까지 연결해 검증합니다.",
] as const;

const heroStackItems = [
  { name: "Java Spring Boot", detail: "REST API · Security · JPA" },
  { name: "React TypeScript", detail: "컴포넌트 · 상태 관리 · 테스트" },
  { name: "MySQL AWS", detail: "데이터 모델 · 배포 흐름" },
] as const;

const featuredProjectNames = new Set(["GisDataHub", "Routy", "Pitches"]);
const experienceProjectDetails = {
  "2024.10.25 ~ 27": {
    projectName: "Pitches",
    imageSrc: "/assets/projects/notion-pitches.webp",
    imageAlt: "노션 포트폴리오에 사용된 Pitches 서비스 화면",
  },
  "2025.07 - 2025.10": {
    projectName: "HoseoLife",
    imageSrc: "/assets/projects/notion-hoseolife.webp",
    imageAlt: "노션 포트폴리오에 사용된 HoseoLife 모바일 서비스 화면",
  },
  "2025.10.24 ~ 26": {
    projectName: "Routy",
    imageSrc: "/assets/projects/notion-routy.webp",
    imageAlt: "노션 포트폴리오에 사용된 Routy 서비스 화면",
  },
} as const;
const themeStorageKey = "changryul-portfolio-theme";
const portfolioApiUrl = import.meta.env.VITE_PORTFOLIO_API_URL?.trim() || (import.meta.env.DEV ? "/api/portfolio" : null);

type ThemeMode = "light" | "dark";
type SelectedExperience = {
  experience: Experience;
  project: Project;
};

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  let storedTheme: string | null = null;

  try {
    storedTheme = window.localStorage.getItem(themeStorageKey);
  } catch {
    storedTheme = null;
  }

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function withProjectDetails(project: Project): Project {
  const image = projectImages[project.name as keyof typeof projectImages];
  const period = projectPeriods[project.name as keyof typeof projectPeriods] ?? "기간 정보 없음";

  return {
    ...project,
    ...(image ?? {}),
    period,
  };
}

function getProjectLinks(project: Project) {
  return project.links?.length ? project.links : [{ label: "GitHub", href: project.href }];
}

function getRepositoryName(href: string) {
  return href.replace("https://github.com/fufckddl/", "");
}

function getSkillIconSource(skill: string) {
  return skillIconSources[skill] ?? "/assets/skills/code.svg";
}

function getSkillIconClassName(skill: string) {
  return skillIconClassNames[skill];
}

export default function App() {
  const [portfolio, setPortfolio] = useState<PortfolioData>(fallbackPortfolio);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<SelectedExperience | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Ignore storage failures; the visible theme still updates for this session.
    }
  }, [theme]);

  useEffect(() => {
    if (!portfolioApiUrl) {
      return;
    }

    const controller = new AbortController();

    fetch(portfolioApiUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Portfolio API failed: ${response.status}`);
        }
        return response.json() as Promise<PortfolioData>;
      })
      .then((data) => {
        setPortfolio(data);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        setPortfolio(fallbackPortfolio);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [portfolio]);

  useEffect(() => {
    if (!selectedProject && !selectedExperience) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedExperience(null);
      }
    };

    document.body.classList.add("is-project-detail-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("is-project-detail-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperience, selectedProject]);

  const heroLines = useMemo(() => splitHeroTitle(portfolio.hero.title), [portfolio.hero.title]);
  const projects = useMemo(() => portfolio.projects.map(withProjectDetails), [portfolio.projects]);
  const heroProofProjects = useMemo(
    () => projects.filter((project) => featuredProjectNames.has(project.name)).slice(0, 3),
    [projects],
  );
  const selectedProjectLinks = selectedProject ? getProjectLinks(selectedProject) : [];
  const selectedExperienceLinks = selectedExperience ? getProjectLinks(selectedExperience.project) : [];
  const aboutSummary = portfolio.about.summary?.length
    ? portfolio.about.summary
    : [portfolio.about.description].filter(Boolean);
  const aboutMetrics = portfolio.about.metrics ?? [];

  const openExperienceDetail = (experience: Experience) => {
    const detail = experienceProjectDetails[experience.period as keyof typeof experienceProjectDetails];
    const project = detail ? projects.find((item) => item.name === detail.projectName) : undefined;

    if (!detail || !project) {
      return;
    }

    setSelectedExperience({
      experience,
      project: {
        ...project,
        imageSrc: detail.imageSrc,
        imageAlt: detail.imageAlt,
      },
    });
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="처음으로 이동">
          <span className="brand-mark">CL</span>
          <span className="brand-copy">
            <strong>{portfolio.profile.brand}</strong>
            <small>{portfolio.profile.role}</small>
          </span>
        </a>
        <nav className={`nav-links ${isNavOpen ? "is-open" : ""}`} aria-label="주요 섹션">
          {portfolio.profile.navigation.map((label) => (
            <a
              key={label}
              href={`#${sectionIds[label as keyof typeof sectionIds]}`}
              onClick={() => setIsNavOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <button
            className="nav-toggle"
            type="button"
            aria-label={isNavOpen ? "내비게이션 닫기" : "내비게이션 열기"}
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((current) => !current)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <main>
        <section className="hero reveal-on-scroll" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              {heroLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p>{portfolio.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <span>{portfolio.hero.primaryAction}</span>
                <Icon name="arrow" />
              </a>
              <a className="button button-secondary" href="#contact">
                <span>{portfolio.hero.secondaryAction}</span>
                <Icon name="mail" />
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="이창렬 소개와 대표 역량">
            <div className="hero-profile">
              <img
                alt="이창렬 프로필 사진"
                className="hero-profile-photo"
                height="300"
                src="/assets/profile/changryul-profile.jpg"
                width="250"
              />
              <div className="hero-profile-copy">
                <span>{portfolio.profile.role}</span>
                <strong>{portfolio.profile.name}</strong>
                <p>화면, API, 데이터 흐름을 실제 서비스 단위로 연결하는 풀스택 개발자입니다.</p>
              </div>
            </div>

            <div className="product-console" aria-label="대표 스택과 프로젝트">
              <div className="console-heading">
                <span>개발 요약</span>
                <strong>기술과 대표 프로젝트</strong>
              </div>
              <div className="console-stack">
                {heroStackItems.map((item) => (
                  <div className="console-stack-row" key={item.name}>
                    <span className="console-icon" aria-hidden="true">
                      <img alt="" src={getSkillIconSource(item.name.split(" ")[0])} />
                    </span>
                    <strong>{item.name}</strong>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
              <div className="console-projects">
                {heroProofProjects.map((project, index) => (
                  <a href="#projects" key={project.name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{project.name}</strong>
                    <small>{project.tags.slice(0, 2).join(" · ")}</small>
                  </a>
                ))}
              </div>
            </div>

            <ul className="hero-profile-highlights">
              {heroProfileHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>

        </section>

        <section className="about section-shell reveal-on-scroll" id="about" aria-labelledby="about-title">
          <div className="section-index" aria-hidden="true">
            01
          </div>
          <div className="section-heading section-heading-solo">
            <h2 id="about-title">{portfolio.about.title}</h2>
          </div>
          <div className="about-layout">
            <div className="about-content">
              <div className="about-copy">
                {aboutSummary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {aboutMetrics.length > 0 && (
                <dl className="about-metrics" aria-label="소개 요약">
                  {aboutMetrics.map((metric) => (
                    <div key={`${metric.value}-${metric.label}`}>
                      <dt>{metric.value}</dt>
                      <dd>{metric.label}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            <div className="capability-grid">
              {portfolio.about.capabilities.map((capability) => (
                <article className="capability reveal-on-scroll" key={capability.title}>
                  <Icon name={capability.icon} />
                  <div>
                    <h3>{capability.title}</h3>
                    {capability.description && <p>{capability.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="experience section-shell reveal-on-scroll"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-index" aria-hidden="true">
            02
          </div>
          <h2 id="experience-title">경험</h2>
          <div className="timeline">
            {portfolio.experiences.map((experience, index) => (
              <article className="reveal-on-scroll" key={`${experience.title}-${experience.period ?? index}`}>
                <span className="timeline-marker" />
                <small>{experience.period ?? String(index + 1).padStart(2, "0")}</small>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <button
                  className="timeline-detail-button"
                  type="button"
                  aria-label={`${experience.title} 상세 보기`}
                  onClick={() => openExperienceDetail(experience)}
                >
                  <Icon name="arrow" />
                </button>
              </article>
            ))}
          </div>
          <div className="profile-detail-grid" aria-label="추가 경험 정보">
            {portfolio.experienceDetails.map((section) => (
              <article className="profile-detail-card reveal-on-scroll" key={section.title}>
                <h3>{section.title}</h3>
                <div className="profile-detail-list">
                  {section.items.map((item) => (
                    <div className="profile-detail-item" key={`${section.title}-${item.title}`}>
                      {item.period && <small>{item.period}</small>}
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                      {item.meta && <span>{item.meta}</span>}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-shell reveal-on-scroll" id="skills" aria-labelledby="skills-title">
          <div className="section-index" aria-hidden="true">
            03
          </div>
          <div className="section-heading section-heading-solo">
            <h2 id="skills-title">스킬</h2>
          </div>
          <div className="skill-groups">
            {portfolio.skills.map((group) => (
              <article className="skill-group reveal-on-scroll" key={group.title}>
                <h3># {group.title.toUpperCase()}</h3>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li className="skill-card" key={skill}>
                      <span className="skill-icon-frame" aria-hidden="true">
                        <img
                          alt=""
                          className={getSkillIconClassName(skill)}
                          loading="lazy"
                          src={getSkillIconSource(skill)}
                        />
                      </span>
                      <span className="skill-name">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-shell" id="projects" aria-labelledby="projects-title">
          <div className="section-index" aria-hidden="true">
            04
          </div>
          <div className="section-heading section-heading-solo">
            <h2 id="projects-title">프로젝트</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-row ${projectTones[index % projectTones.length]} reveal-on-scroll`}
                key={project.name}
                role="button"
                tabIndex={0}
                aria-label={`${project.name} 프로젝트 상세 보기`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key !== "Enter" && event.key !== " ") {
                    return;
                  }
                  event.preventDefault();
                  setSelectedProject(project);
                }}
              >
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.tags[0]}</span>
                </div>
                <div className="project-media">
                  <ProjectVisual
                    imageAlt={project.imageAlt}
                    imageSrc={project.imageSrc}
                    type={project.visualType}
                  />
                </div>
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="project-link" aria-hidden="true">
                  <span>상세 보기</span>
                  <Icon name="arrow" />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell reveal-on-scroll" id="contact" aria-labelledby="contact-title">
          <div className="section-index" aria-hidden="true">
            05
          </div>
          <h2 id="contact-title">연락</h2>
          <div className="contact-panel">
            <p>{portfolio.contact.title}</p>
            <div className="contact-actions">
              {portfolio.contact.actions.map((action) => (
                <a
                  className={
                    action.type === "primary"
                      ? "button button-primary"
                      : action.type === "secondary"
                        ? "button button-secondary"
                        : "text-link"
                  }
                  href={action.href}
                  key={action.label}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Icon
                    name={
                      action.label === "GitHub"
                        ? "github"
                        : action.label === "LinkedIn"
                          ? "linkedin"
                          : "mail"
                    }
                  />
                  <span>{action.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="project-detail-backdrop"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-detail"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            aria-describedby="project-detail-description"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="detail-close"
              type="button"
              aria-label="프로젝트 상세 닫기"
              onClick={() => setSelectedProject(null)}
            >
              <Icon name="close" />
            </button>
            <div className="detail-media" aria-hidden="true">
              <ProjectVisual
                imageAlt={selectedProject.imageAlt}
                imageSrc={selectedProject.imageSrc}
                type={selectedProject.visualType}
              />
            </div>
            <div className="detail-content">
              <div className="detail-eyebrow">
                <span>Project</span>
                <span>{selectedProject.period ?? "기간 정보 없음"}</span>
              </div>
              <h2 id="project-detail-title">{selectedProject.name}</h2>
              <p id="project-detail-description">{selectedProject.description}</p>
              <dl className="detail-facts">
                <dt>기간</dt>
                <dd>{selectedProject.period ?? "기간 정보 없음"}</dd>
                <dt>저장소</dt>
                <dd>
                  {selectedProjectLinks.map((link) => getRepositoryName(link.href)).join(" / ")}
                </dd>
              </dl>
              <div className="tag-list detail-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="detail-actions">
                {selectedProjectLinks.map((link) => (
                  <a
                    className="github-square"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={`${selectedProject.name} ${link.label} GitHub 저장소 열기`}
                  >
                    <Icon name="github" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {selectedExperience && (
        <div
          className="project-detail-backdrop"
          role="presentation"
          onClick={() => setSelectedExperience(null)}
        >
          <section
            className="project-detail"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-detail-title"
            aria-describedby="experience-detail-description"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="detail-close"
              type="button"
              aria-label="경험 상세 닫기"
              onClick={() => setSelectedExperience(null)}
            >
              <Icon name="close" />
            </button>
            <div className="detail-media">
              <ProjectVisual
                imageAlt={selectedExperience.project.imageAlt}
                imageSrc={selectedExperience.project.imageSrc}
                type={selectedExperience.project.visualType}
              />
            </div>
            <div className="detail-content">
              <div className="detail-eyebrow">
                <span>Experience</span>
                <span>{selectedExperience.experience.period ?? "기간 정보 없음"}</span>
              </div>
              <h2 id="experience-detail-title">{selectedExperience.project.name}</h2>
              <p id="experience-detail-description">{selectedExperience.experience.description}</p>
              <dl className="detail-facts">
                <dt>기간</dt>
                <dd>{selectedExperience.experience.period ?? "기간 정보 없음"}</dd>
                <dt>경험</dt>
                <dd>{selectedExperience.experience.title}</dd>
              </dl>
              <div className="tag-list detail-tags">
                {selectedExperience.project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="detail-actions">
                {selectedExperienceLinks.map((link) => (
                  <a
                    className="github-square"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={`${selectedExperience.project.name} ${link.label} GitHub 저장소 열기`}
                  >
                    <Icon name="github" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      <footer className="site-footer">© Untitled. All rights reserved.</footer>
    </>
  );
}
