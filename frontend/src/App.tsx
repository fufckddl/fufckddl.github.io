import { useEffect, useMemo, useRef, useState } from "react";
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
  "GIS Data Research Hub": {
    imageSrc: "/assets/projects/cover-gisdatahub.webp",
    imageAlt: "서울 CCTV 밀도 지도 화면과 GIS Data Research Hub 프로젝트명이 포함된 대표 이미지",
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
  ROUTY: {
    imageSrc: "/assets/projects/cover-routy.webp",
    imageAlt: "소아 ADHD 아동 일상 관리 서비스 화면과 ROUTY 프로젝트명이 포함된 대표 이미지",
  },
  "Korean NLP Models": {
    imageSrc: "/assets/projects/cover-korean-nlp-models.webp",
    imageAlt: "감정 분류와 공감 생성 모델 흐름을 표현한 Korean NLP Models 대표 이미지",
  },
} satisfies Record<string, Pick<Project, "imageSrc" | "imageAlt">>;

const projectPeriods = {
  "GIS Data Research Hub": "2026.05 - 2026.07",
  GitCard: "2025.12 - 2026.03",
  HoseoLife: "2025.07 - 2025.10",
  SummarIQ: "2025.10 - 2026.03",
  OneLineMind: "2025.06 - 2026.02",
  Pitches: "2024.10.25 ~ 27",
  ROUTY: "2025.10.24 ~ 26",
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
  MyBatis: "/assets/skills/code.svg",
  FastAPI: "/assets/skills/python.svg",
  "PostgreSQL/PostGIS": "/assets/skills/leaflet.svg",
  Flutter: "/assets/skills/dart.svg",
  "React Native": "/assets/skills/react.svg",
  "JUnit 5": "/assets/skills/java.svg",
  Mockito: "/assets/skills/code.svg",
  "MyBatis Test": "/assets/skills/code.svg",
  "AWS EC2·S3·RDS": "/assets/skills/aws.svg",
};

const skillIconClassNames: Record<string, string> = {
  AWS: "is-dark-restored",
  "AWS EC2·S3·RDS": "is-dark-restored",
  GitHub: "is-dark-monochrome",
  MySQL: "is-dark-restored",
  "Korean NLP": "is-dark-warm",
};

const heroProfileHighlights = [
  {
    title: "서버·데이터",
    description: "Spring Boot 기반 수집·저장·조회 로직을 구현하고 예외 상황을 테스트했습니다.",
  },
  {
    title: "모바일·API",
    description: "Flutter·React Native 화면과 서버 API를 연결해 서비스를 구현했습니다.",
  },
  {
    title: "협업·완성",
    description: "해커톤 팀장으로 구현 범위를 조율하고 핵심 기능의 시연을 완성했습니다.",
  },
] as const;

const experienceProjectDetails = {
  Pitches: {
    imageSrc: "/assets/projects/notion-pitches.webp",
    imageAlt: "노션 포트폴리오에 사용된 Pitches 서비스 화면",
  },
  HoseoLife: {
    imageSrc: "/assets/projects/notion-hoseolife.webp",
    imageAlt: "노션 포트폴리오에 사용된 HoseoLife 모바일 서비스 화면",
  },
  ROUTY: {
    imageSrc: "/assets/projects/notion-routy.webp",
    imageAlt: "노션 포트폴리오에 사용된 ROUTY 서비스 화면",
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

type ProjectDetailModalProps = {
  project: Project;
  experience?: Experience;
  onClose: () => void;
};

function ProjectDetailModal({ project, experience, onClose }: ProjectDetailModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = experience ? "experience-detail-title" : "project-detail-title";
  const descriptionId = experience ? "experience-detail-description" : "project-detail-description";
  const links = getProjectLinks(project);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add("is-project-detail-open");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("is-project-detail-open");
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="project-detail-backdrop" role="presentation" onClick={onClose}>
      <section
        className="project-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => event.stopPropagation()}
        ref={dialogRef}
      >
        <button
          className="detail-close"
          type="button"
          aria-label={`${project.name} 상세 닫기`}
          onClick={onClose}
          ref={closeButtonRef}
        >
          <Icon name="close" />
        </button>
        <div className="detail-media">
          <ProjectVisual imageAlt={project.imageAlt} imageSrc={project.imageSrc} type={project.visualType} />
        </div>
        <div className="detail-content">
          <div className="detail-eyebrow">
            <span>{experience ? "Experience" : project.category ?? "Project"}</span>
            <span>{experience?.period ?? project.period ?? "기간 정보 없음"}</span>
          </div>
          <h2 id={titleId}>{project.name}</h2>
          <p id={descriptionId}>{project.description}</p>

          {(project.purpose || project.role) && (
            <dl className="detail-overview">
              {project.purpose && (
                <>
                  <dt>목적</dt>
                  <dd>{project.purpose}</dd>
                </>
              )}
              {project.role && (
                <>
                  <dt>담당</dt>
                  <dd>{project.role}</dd>
                </>
              )}
            </dl>
          )}

          {project.implementation && project.implementation.length > 0 && (
            <div className="detail-section">
              <h3>구현 내용</h3>
              <ul>
                {project.implementation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.verification && project.verification.length > 0 && (
            <div className="detail-section">
              <h3>검증</h3>
              <ul>
                {project.verification.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.result && (
            <div className="detail-result">
              <strong>결과</strong>
              <span>{project.result}</span>
            </div>
          )}

          <dl className="detail-facts">
            <dt>기간</dt>
            <dd>{experience?.period ?? project.period ?? "기간 정보 없음"}</dd>
            {experience && (
              <>
                <dt>경험</dt>
                <dd>{experience.title}</dd>
              </>
            )}
            <dt>저장소</dt>
            <dd>{links.map((link) => getRepositoryName(link.href)).join(" / ")}</dd>
          </dl>
          <div className="tag-list detail-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="detail-actions">
            {links.map((link) => (
              <a
                className="github-square"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
                aria-label={`${project.name} ${link.label} GitHub 저장소 열기`}
              >
                <Icon name="github" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
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

  const heroLines = useMemo(() => splitHeroTitle(portfolio.hero.title), [portfolio.hero.title]);
  const projects = useMemo(() => portfolio.projects.map(withProjectDetails), [portfolio.projects]);
  const aboutSummary = portfolio.about.summary?.length
    ? portfolio.about.summary
    : [portfolio.about.description].filter(Boolean);
  const aboutMetrics = portfolio.about.metrics ?? [];

  const openExperienceDetail = (experience: Experience) => {
    const projectName = experience.projectName;
    const detail = projectName
      ? experienceProjectDetails[projectName as keyof typeof experienceProjectDetails]
      : undefined;
    const project = projectName ? projects.find((item) => item.name === projectName) : undefined;

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

            <ul className="hero-profile-highlights">
              {heroProfileHighlights.map((highlight) => (
                <li key={highlight.title}>
                  <strong>{highlight.title}</strong>
                  <span>{highlight.description}</span>
                </li>
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
          <div className="section-heading section-heading-solo">
            <h2 id="experience-title">경험</h2>
          </div>
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
                      {item.description && <p>{item.description}</p>}
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
                  <span>{project.category ?? project.tags[0]}</span>
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
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {selectedExperience && (
        <ProjectDetailModal
          experience={selectedExperience.experience}
          project={selectedExperience.project}
          onClose={() => setSelectedExperience(null)}
        />
      )}

      <footer className="site-footer">© 이창렬. All rights reserved.</footer>
    </>
  );
}
