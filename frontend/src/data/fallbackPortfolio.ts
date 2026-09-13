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
    description: "Java·Spring Boot 기반 데이터 처리와 Flutter·React Native 앱 개발을 경험했습니다. 화면과 API를 연결하고 예외 상황을 테스트합니다.",
    primaryAction: "프로젝트 보기",
    secondaryAction: "연락하기",
  },
  about: {
    title: "소개",
    description: "화면과 서버, 데이터가 연결되는 과정을 이해하며 웹·앱 서비스를 개발합니다.",
    summary: [
      "화면과 서버, 데이터가 연결되는 과정을 이해하며 웹·앱 서비스를 개발합니다. GIS 데이터 허브에서는 수집·저장·조회와 테스트를, 모바일 프로젝트에서는 화면 구현과 API 연동을 경험했습니다. 문제가 생기면 외부 응답, 서버 처리, 저장값, 화면 상태를 나누어 확인합니다.",
    ],
    metrics: [
      { value: "2회", label: "AI 해커톤 수상 경험" },
    ],
    capabilities: [
      {
        title: "사용자 흐름 설계",
        description: "시연과 이용 과정에 필요한 기능을 정하고 우선순위를 조율합니다.",
        icon: "flow",
      },
      {
        title: "모바일·화면 구현",
        description: "Flutter·React Native 기반 화면과 상태 처리를 구현합니다.",
        icon: "component",
      },
      {
        title: "API·데이터 처리",
        description: "Spring Boot·MyBatis·PostgreSQL 기반 수집·저장·조회를 구현합니다.",
        icon: "speed",
      },
      {
        title: "검증·배포",
        description: "서버 로직 테스트, API 연동·예외 상태 점검과 AWS 배포를 경험했습니다.",
        icon: "verify",
      },
    ],
  },
  projects: [
    {
      name: "GIS Data Research Hub",
      description: "공공데이터 수집·저장·조회 API를 개발하고, 수집 실패와 중복 실행을 처리한 GIS 데이터 허브",
      category: "BACKEND · DATA",
      purpose: "공공데이터를 정기적으로 수집하고 지역별로 조회하는 데이터 허브",
      role: "수집·저장·조회 로직 및 테스트",
      implementation: [
        "Spring Boot·MyBatis·PostgreSQL/PostGIS로 데이터 처리 흐름 구성",
        "소스별 실패를 처리해 한 수집 작업이 실패해도 다음 작업이 이어지도록 구성",
        "동일 애플리케이션 프로세스 내 중복 실행 차단과 비동기 캐시 워밍업 적용",
      ],
      verification: [
        "JUnit 5·Mockito로 수집 순서, 실패 후 계속 실행, 중복 실행 차단 확인",
        "MyBatis Test로 데이터 접근 계층 점검",
      ],
      tags: ["Java", "Spring Boot", "PostgreSQL", "MyBatis", "Test"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/GISDataHub_FE",
      links: [
        { label: "FE", href: "https://github.com/fufckddl/GISDataHub_FE" },
        { label: "BE", href: "https://github.com/fufckddl/GISDataHub_BE" },
      ],
      imageSrc: "/assets/projects/cover-gisdatahub.webp",
      imageAlt: "서울 CCTV 밀도 지도 화면과 GIS Data Research Hub 프로젝트명이 포함된 대표 이미지",
    },
    {
      name: "HoseoLife",
      description: "React Native·FastAPI 기반 교내 커뮤니티와 실시간 채팅 서비스",
      category: "MOBILE · BACKEND",
      purpose: "교내 구성원이 게시글과 실시간 채팅으로 소통하는 모바일 커뮤니티",
      role: "개인 프로젝트로 모바일 화면, 서버 기능, 배포 구성",
      implementation: [
        "React Native(Expo)·FastAPI·MySQL로 모바일 화면과 서버 기능 연결",
        "WebSocket 채팅에 자동 재연결과 메시지 큐 적용",
        "AWS EC2 배포와 S3 파일 저장 구성",
      ],
      verification: ["연결이 끊기는 상황을 고려해 채팅 재연결과 대기 메시지 처리 흐름 점검"],
      tags: ["React Native", "FastAPI", "MySQL", "WebSocket", "AWS"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/HoseoLife",
      imageSrc: "/assets/projects/cover-hoseolife.webp",
      imageAlt: "호서대학교 커뮤니티 모바일 화면과 HoseoLife 프로젝트명이 포함된 대표 이미지",
    },
    {
      name: "ROUTY",
      description: "ADHD 아동의 루틴 수행을 돕는 앱. 팀장으로 구현 범위를 조율하고 Flutter 화면과 AI·음성 API를 연결",
      category: "MOBILE · AI",
      purpose: "루틴 관리와 음성 대화를 연결해 아동의 일상 루틴 수행을 돕는 서비스",
      role: "팀장·Flutter 프론트엔드·API 연동",
      implementation: [
        "2박 3일 내 시연할 핵심 사용자 흐름을 정하고 팀원 의견과 구현 우선순위 조율",
        "공통 HTTP 계층을 구성하고 루틴 목록·상세·등록·완료 화면을 Flask·MySQL 기반 API에 연결",
        "Flowise API와 STT/TTS를 연동해 음성 입력, AI 응답, 음성 출력 구현",
      ],
      verification: ["화면 전환, 기능 간 연결, 기록 저장 여부 확인"],
      result: "핵심 사용자 흐름을 완성해 시연하고 2025년 AI 해커톤 우수상 수상",
      tags: ["Flutter", "Dart", "API Integration", "STT·TTS", "Team Lead"],
      visualType: "checkout",
      href: "https://github.com/fufckddl/2025_AI_HACKATHON_FE",
      links: [
        { label: "BE", href: "https://github.com/fufckddl/2025_AI_HACKATHON_BE" },
        { label: "FE", href: "https://github.com/fufckddl/2025_AI_HACKATHON_FE" },
      ],
      imageSrc: "/assets/projects/cover-routy.webp",
      imageAlt: "소아 ADHD 아동 일상 관리 서비스 화면과 ROUTY 프로젝트명이 포함된 대표 이미지",
    },
    {
      name: "Pitches",
      description: "발표 분석 결과를 이해하기 쉬운 피드백으로 보여주는 Flutter 기반 AI 스피치 코칭 서비스",
      category: "MOBILE · UI/UX",
      purpose: "발표 분석 결과를 다음 연습에 활용할 수 있는 피드백으로 전달하는 서비스",
      role: "Flutter 프론트엔드·UI/UX",
      implementation: [
        "점수만으로는 개선할 부분을 파악하기 어렵다는 문제를 기준으로 결과 화면 재구성",
        "감정 변화와 스피치 상태를 이해하기 쉬운 항목으로 분리",
        "분석 결과 확인이 다음 연습으로 이어지도록 문구와 배치 조정",
      ],
      result: "2024년 AI 해커톤 대상 수상",
      tags: ["Flutter", "Dart", "UI·UX", "API Integration"],
      visualType: "note",
      href: "https://github.com/fufckddl/hackathon-pitches",
      imageSrc: "/assets/projects/cover-pitches.webp",
      imageAlt: "발표 감정 분석 모바일 화면과 Pitches 프로젝트명이 포함된 대표 이미지",
    },
    {
      name: "GitCard",
      description: "[2025:Project] 쉽게 만드는 GitHub README",
      category: "WEB · TOOL",
      tags: ["Python", "README", "Live"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/GitCard",
      imageSrc: "/assets/projects/cover-gitcard.webp",
      imageAlt: "GitHub README 제작 서비스 로그인 화면과 GitCard 프로젝트명이 포함된 대표 이미지",
    },
    {
      name: "SummarIQ",
      description: "[2025:Project] AI 기반 사용자 회의 요약 및 분석 플랫폼",
      category: "WEB · AI",
      tags: ["Python", "AI", "Frontend"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/SummarIQ.ai-FE",
      imageSrc: "/assets/projects/cover-summariq.webp",
      imageAlt: "회의 음성 파형과 요약 작업 화면을 표현한 SummarIQ 대표 이미지",
    },
    {
      name: "OneLineMind",
      description: "[2025:Project] 감정 기록과 활동 관리를 위한 모바일 다이어리",
      category: "MOBILE · APP",
      tags: ["Dart", "App", "GitHub"],
      visualType: "checkout",
      href: "https://github.com/fufckddl/OneLineMind",
      imageSrc: "/assets/projects/cover-onelinemind.webp",
      imageAlt: "활동 선택, 감정 달력, 기록 화면과 OneLineMind 프로젝트명이 포함된 대표 이미지",
    },
    {
      name: "Korean NLP Models",
      description: "[2025:AI Model] 한국어 텍스트 기반 공감·감정 인식 모델",
      category: "NLP · MODEL",
      tags: ["AI Model", "Korean NLP", "GitHub"],
      visualType: "dashboard",
      href: "https://github.com/fufckddl/KoreanEmpathyModel",
      links: [
        { label: "Empathy", href: "https://github.com/fufckddl/KoreanEmpathyModel" },
        { label: "Emotion", href: "https://github.com/fufckddl/KoreanEmotionModel" },
      ],
      imageSrc: "/assets/projects/cover-korean-nlp-models.webp",
      imageAlt: "감정 분류와 공감 생성 모델 흐름을 표현한 Korean NLP Models 대표 이미지",
    },
  ],
  experiences: [
    {
      title: "Pitches AI 해커톤 대상",
      description: "감정 인식 기반 발표 도우미 AI Pitches로 대상을 수상했습니다.",
      period: "2024.10.25 ~ 27",
      projectName: "Pitches",
    },
    {
      title: "HoseoLife 개인 프로젝트",
      description: "React Native·FastAPI 기반 교내 커뮤니티와 실시간 채팅 서비스를 개발했습니다.",
      period: "2025.07 - 2025.10",
      projectName: "HoseoLife",
    },
    {
      title: "ROUTY AI 해커톤 우수상",
      description: "소아 ADHD 아동을 위한 AI 기반 루틴 관리 플랫폼 ROUTY로 우수상을 수상했습니다.",
      period: "2025.10.24 ~ 26",
      projectName: "ROUTY",
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
          description: "",
          period: "2025.12.24",
        },
      ],
    },
    {
      title: "학력",
      items: [
        {
          title: "호서대학교 컴퓨터공학부",
          description: "졸업, 학점 3.85/4.5",
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
      title: "Backend & Database",
      items: ["Java", "Spring Boot", "MyBatis", "REST API", "FastAPI", "PostgreSQL/PostGIS", "MySQL"],
    },
    {
      title: "Web & Mobile",
      items: ["React", "TypeScript", "Flutter", "Dart", "React Native"],
    },
    {
      title: "Test & Cloud",
      items: ["JUnit 5", "Mockito", "MyBatis Test", "AWS EC2·S3·RDS"],
    },
    {
      title: "Collaboration",
      items: ["Git", "GitHub"],
    },
  ],
  contact: {
    title: "개발 직무와 프로젝트 경험에 관해 연락 주세요.",
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
