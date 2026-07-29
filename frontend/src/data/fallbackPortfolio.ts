import type { PortfolioData } from "../types";

export const fallbackPortfolio: PortfolioData = {
  profile: {
    name: "이창렬",
    brand: "이창렬",
    role: "웹앱 풀스택 개발자",
    navigation: ["소개", "경험", "스킬", "프로젝트", "연락"],
  },
  hero: {
    title: "서비스를 끝까지 구현하는 풀스택 개발자",
    description: "Spring Boot, React, MySQL, AWS를 활용해 서비스 개발과 운영 경험을 쌓고 있습니다.",
    primaryAction: "프로젝트 보기",
    secondaryAction: "연락하기",
  },
  about: {
    title: "소개",
    description: "Java와 React를 중심으로 서비스의 화면, API, 데이터 흐름을 연결하는 개발자입니다.",
    summary: [
      "Java/Spring Boot와 React/TypeScript를 중심으로 웹앱을 구현합니다. 기능을 화면 단위와 API 단위로 나누고, 실제 사용자가 지나가는 흐름이 끊기지 않도록 연결하는 데 집중합니다.",
      "GIS 데이터 허브, 호서대학교 커뮤니티, AI 회의 요약, 감정 인식 스피치 코칭, 루틴 관리 앱처럼 데이터와 사용 시나리오가 분명한 프로젝트를 만들었습니다.",
      "빠르게 보이는 화면을 만드는 것보다 끝까지 동작하는 결과물을 남기는 쪽에 무게를 둡니다. 구현 후에는 반응형 레이아웃, 상태 변화, 링크와 배포 가능성을 함께 확인합니다.",
    ],
    metrics: [
      { value: "8+", label: "정리한 공개 프로젝트" },
      { value: "2회", label: "AI 해커톤 수상 경험" },
      { value: "Full", label: "Frontend · Backend 연결 구현" },
    ],
    capabilities: [
      {
        title: "사용자 흐름 설계",
        description: "문제를 시나리오와 화면 단위로 쪼개 기능 범위와 우선순위를 명확히 잡습니다.",
        icon: "flow",
      },
      {
        title: "화면/상태 구조화",
        description: "반복되는 UI와 상태 변화를 재사용 가능한 컴포넌트 구조로 정리합니다.",
        icon: "component",
      },
      {
        title: "API와 데이터 연결",
        description: "Spring Boot, REST API, MySQL 기반으로 화면에서 필요한 데이터를 안정적으로 연결합니다.",
        icon: "speed",
      },
      {
        title: "배포 전 검증",
        description: "빌드, 반응형 화면, 링크 동작, 빈 상태를 확인하며 결과물을 마무리합니다.",
        icon: "verify",
      },
    ],
  },
  projects: [
    {
      name: "GisDataHub",
      description: "중앙정보처리기술원 2차 프로젝트. CCTV 위치와 밀도 데이터를 지도 기반으로 탐색하는 GIS 데이터 허브입니다.",
      tags: ["JavaScript", "Java", "GIS"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/GISDataHub_FE",
      links: [
        { label: "FE", href: "https://github.com/fufckddl/GISDataHub_FE" },
        { label: "BE", href: "https://github.com/fufckddl/GISDataHub_BE" },
      ],
      imageSrc: "/assets/projects/gisdatahub-map-preview.png",
      imageAlt: "서울 지도 위 CCTV 밀도 히트맵과 위치 마커를 표시한 GISDataHub 화면",
    },
    {
      name: "GitCard",
      description: "[2025:Project] 쉽게 만드는 GitHub README",
      tags: ["Python", "README", "Live"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/GitCard",
    },
    {
      name: "HoseoLife",
      description: "[2025:Project] 호서대학교 커뮤니티",
      tags: ["TypeScript", "Community", "GitHub"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/HoseoLife",
    },
    {
      name: "SummarIQ",
      description: "AI 기반 사용자 회의 요약 및 분석 플랫폼",
      tags: ["Python", "AI", "Frontend"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/SummarIQ.ai-FE",
    },
    {
      name: "OneLineMind",
      description: "GitHub 공개 저장소",
      tags: ["Dart", "App", "GitHub"],
      visualType: "checkout",
      href: "https://github.com/fufckddl/OneLineMind",
      imageSrc: "/assets/projects/onelinemind-activity.png",
      imageAlt: "OneLineMind 앱의 활동 선택 화면",
    },
    {
      name: "Pitches",
      description: "[2024 AI 해커톤] 감정인식 기반 AI 스피치 코칭, Pitches.ai (FE)",
      tags: ["AI", "Speech", "Frontend"],
      visualType: "note",
      href: "https://github.com/fufckddl/hackathon-pitches",
      imageSrc: "/assets/projects/pitches-feature.png",
      imageAlt: "Pitches.ai 앱의 감정 분석 결과 화면 3개",
    },
    {
      name: "Routy",
      description: "[2025:AI 해커톤] AI 챗봇 기반 소아 ADHD 아동 일상·수면 관리 및 부모 지원 플랫폼",
      tags: ["Dart", "AI", "Hackathon"],
      visualType: "checkout",
      href: "https://github.com/fufckddl/2025_AI_HACKATHON_FE",
      links: [
        { label: "BE", href: "https://github.com/fufckddl/2025_AI_HACKATHON_BE" },
        { label: "FE", href: "https://github.com/fufckddl/2025_AI_HACKATHON_FE" },
      ],
      imageSrc: "/assets/projects/ai-hackathon-routy.png",
      imageAlt: "2025 AI 해커톤 앱의 Routy 소개 화면",
    },
    {
      name: "Korean NLP Models",
      description: "한국어 텍스트 기반 공감 모델과 감정 인식 모델을 묶은 AI 모델 프로젝트입니다.",
      tags: ["AI Model", "Korean NLP", "GitHub"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/KoreanEmpathyModel",
      links: [
        { label: "Empathy", href: "https://github.com/fufckddl/KoreanEmpathyModel" },
        { label: "Emotion", href: "https://github.com/fufckddl/KoreanEmotionModel" },
      ],
    },
  ],
  experiences: [
    {
      title: "캡스톤디자인 및 AI해커톤 경진대회",
      description: "감정 인식 기반 발표 도우미 AI Pitches로 대상을 수상했습니다.",
      period: "2024.10.25 ~ 27",
    },
    {
      title: "호서대학교 커뮤니티 HoseoLife",
      description: "사용자들간 소통을 위한 커뮤니티 앱을 개발했습니다.",
      period: "2025.07 - 2025.10",
    },
    {
      title: "캡스톤디자인 및 AI해커톤 경진대회",
      description: "소아 ADHD 아동을 위한 AI 기반 루틴 관리 플랫폼 Routy로 우수상을 수상했습니다.",
      period: "2025.10.24 ~ 26",
    },
  ],
  experienceDetails: [
    {
      title: "교육봉사",
      items: [
        {
          title: "호서SW교육봉사단",
          description: "호서대학교 SW 교육봉사단 활동입니다.",
        },
      ],
    },
    {
      title: "자격증",
      items: [
        {
          title: "정보처리기사",
          description: "Notion 포트폴리오에 등록된 자격증입니다.",
          period: "2025.12.24",
        },
      ],
    },
    {
      title: "학력",
      items: [
        {
          title: "호서대학교 컴퓨터공학부",
          description: "졸업, 학점 3.8/4.5",
          period: "2020.02 - 2026.02",
        },
        {
          title: "안성고등학교",
          description: "졸업",
          period: "2017.02 - 2020.02",
        },
      ],
    },
    {
      title: "교육내역",
      items: [
        {
          title: "중앙정보기술인재개발원",
          description: "클라우드 데브옵스 프론트엔드&백엔드 자바(JAVA) 풀스택 개발자 취업캠프",
          period: "2025.12 - 2026.06",
        },
        {
          title: "SBS아카데미",
          description: "웹 프로젝트 및 Java, Python, C++ 교육",
          period: "2025.01 - 2025.11",
        },
      ],
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Vite", "Dart"],
    },
    {
      title: "Backend",
      items: ["Java", "Spring Boot", "REST API", "MySQL"],
    },
    {
      title: "Cloud & Tools",
      items: ["AWS", "GitHub", "Git", "API Integration"],
    },
    {
      title: "AI & Data",
      items: ["Python", "Korean NLP", "AI Model", "GIS Data"],
    },
  ],
  contact: {
    title: "함께 만들 제품이 있다면 이야기해 주세요.",
    actions: [
      {
        label: "메일 보내기",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=dlckdfuf141@gmail.com",
        type: "primary",
      },
      { label: "GitHub", href: "https://github.com/fufckddl", type: "secondary" },
    ],
  },
};
