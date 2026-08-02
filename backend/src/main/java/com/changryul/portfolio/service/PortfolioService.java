package com.changryul.portfolio.service;

import com.changryul.portfolio.model.PortfolioResponse;
import com.changryul.portfolio.model.PortfolioResponse.About;
import com.changryul.portfolio.model.PortfolioResponse.Capability;
import com.changryul.portfolio.model.PortfolioResponse.Contact;
import com.changryul.portfolio.model.PortfolioResponse.ContactAction;
import com.changryul.portfolio.model.PortfolioResponse.Experience;
import com.changryul.portfolio.model.PortfolioResponse.Hero;
import com.changryul.portfolio.model.PortfolioResponse.InfoItem;
import com.changryul.portfolio.model.PortfolioResponse.InfoSection;
import com.changryul.portfolio.model.PortfolioResponse.Profile;
import com.changryul.portfolio.model.PortfolioResponse.Project;
import com.changryul.portfolio.model.PortfolioResponse.ProjectLink;
import com.changryul.portfolio.model.PortfolioResponse.SkillGroup;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class PortfolioService {

  public PortfolioResponse getPortfolio() {
    return new PortfolioResponse(
        new Profile(
            "이창렬",
            "이창렬",
            "웹앱 풀스택 개발자",
            List.of("소개", "경험", "스킬", "프로젝트", "연락")),
        new Hero(
            "서비스를 끝까지 구현하는 풀스택 개발자",
            "Spring Boot, React, MySQL, AWS를 활용해 서비스 개발과 운영 경험을 쌓고 있습니다.",
            "프로젝트 보기",
            "연락하기"),
        new About(
            "소개",
            "Java와 React를 중심으로 서비스의 화면, API, 데이터 흐름을 연결하는 개발자입니다.",
            List.of(
                "Java/Spring Boot와 React/TypeScript를 중심으로 웹앱을 구현합니다. 기능을 화면 단위와 API 단위로 나누고, 실제 사용자가 지나가는 흐름이 끊기지 않도록 연결하는 데 집중합니다.",
                "GIS 데이터 허브, 호서대학교 커뮤니티, AI 회의 요약, 감정 인식 스피치 코칭, 루틴 관리 앱처럼 데이터와 사용 시나리오가 분명한 프로젝트를 만들었습니다.",
                "빠르게 보이는 화면을 만드는 것보다 끝까지 동작하는 결과물을 남기는 쪽에 무게를 둡니다. 구현 후에는 반응형 레이아웃, 상태 변화, 링크와 배포 가능성을 함께 확인합니다."),
            List.of(
                new PortfolioResponse.AboutMetric("8+", "정리한 공개 프로젝트"),
                new PortfolioResponse.AboutMetric("2회", "AI 해커톤 수상 경험"),
                new PortfolioResponse.AboutMetric("Full", "Frontend · Backend 연결 구현")),
            List.of(
                new Capability(
                    "사용자 흐름 설계",
                    "문제를 시나리오와 화면 단위로 쪼개 기능 범위와 우선순위를 명확히 잡습니다.",
                    "flow"),
                new Capability(
                    "화면/상태 구조화",
                    "반복되는 UI와 상태 변화를 재사용 가능한 컴포넌트 구조로 정리합니다.",
                    "component"),
                new Capability(
                    "API와 데이터 연결",
                    "Spring Boot, REST API, MySQL 기반으로 화면에서 필요한 데이터를 안정적으로 연결합니다.",
                    "speed"),
                new Capability(
                    "배포 전 검증",
                    "빌드, 반응형 화면, 링크 동작, 빈 상태를 확인하며 결과물을 마무리합니다.",
                    "verify"))),
        List.of(
            project(
                "GisDataHub",
                "[2026:Project] 공공데이터를 지도 기반으로 탐색하고 사용자에게 데이터셋을 제공하는 GIS 데이터 허브",
                List.of("JavaScript", "Java", "GIS"),
                "dashboard",
                "https://github.com/fufckddl/GISDataHub_FE",
                List.of(
                    link("FE", "https://github.com/fufckddl/GISDataHub_FE"),
                    link("BE", "https://github.com/fufckddl/GISDataHub_BE"))),
            project(
                "GitCard",
                "[2025:Project] 쉽게 만드는 GitHub README",
                List.of("Python", "README", "Live"),
                "dashboard",
                "https://github.com/fufckddl/GitCard"),
            project(
                "HoseoLife",
                "[2025:Project] 호서대학교 커뮤니티",
                List.of("TypeScript", "Community", "GitHub"),
                "dashboard",
                "https://github.com/fufckddl/HoseoLife"),
            project(
                "SummarIQ",
                "[2025:Project] AI 기반 사용자 회의 요약 및 분석 플랫폼",
                List.of("Python", "AI", "Frontend"),
                "dashboard",
                "https://github.com/fufckddl/SummarIQ.ai-FE"),
            project(
                "OneLineMind",
                "[2025:Project] 감정 기록과 활동 관리를 위한 모바일 다이어리",
                List.of("Dart", "App", "GitHub"),
                "checkout",
                "https://github.com/fufckddl/OneLineMind"),
            project(
                "Pitches",
                "[2024:AI 해커톤] 감정 인식 기반 AI 스피치 코칭 플랫폼",
                List.of("AI", "Speech", "Frontend"),
                "note",
                "https://github.com/fufckddl/hackathon-pitches"),
            project(
                "Routy",
                "[2025:AI 해커톤] AI 챗봇 기반 소아 ADHD 아동 일상·수면 관리 및 부모 지원 플랫폼",
                List.of("Dart", "AI", "Hackathon"),
                "checkout",
                "https://github.com/fufckddl/2025_AI_HACKATHON_FE",
                List.of(
                    link("BE", "https://github.com/fufckddl/2025_AI_HACKATHON_BE"),
                    link("FE", "https://github.com/fufckddl/2025_AI_HACKATHON_FE"))),
            project(
                "Korean NLP Models",
                "[2025:AI Model] 한국어 텍스트 기반 공감·감정 인식 모델",
                List.of("AI Model", "Korean NLP", "GitHub"),
                "dashboard",
                "https://github.com/fufckddl/KoreanEmpathyModel",
                List.of(
                    link("Empathy", "https://github.com/fufckddl/KoreanEmpathyModel"),
                    link("Emotion", "https://github.com/fufckddl/KoreanEmotionModel")))),
        List.of(
            new Experience(
                "캡스톤디자인 및 AI해커톤 경진대회",
                "감정 인식 기반 발표 도우미 AI Pitches로 대상을 수상했습니다.",
                "2024.10.25 ~ 27"),
            new Experience(
                "호서대학교 커뮤니티 HoseoLife",
                "사용자들간 소통을 위한 커뮤니티 앱을 개발했습니다.",
                "2025.07 - 2025.10"),
            new Experience(
                "캡스톤디자인 및 AI해커톤 경진대회",
                "소아 ADHD 아동을 위한 AI 기반 루틴 관리 플랫폼 Routy로 우수상을 수상했습니다.",
                "2025.10.24 ~ 26")),
        List.of(
            section(
                "교육봉사",
                List.of(
                    item(
                        "호서SW교육봉사단",
                        "호서대학교 SW 교육봉사단 활동입니다."))),
            section(
                "자격증",
                List.of(
                    item(
                        "정보처리기사",
                        "Notion 포트폴리오에 등록된 자격증입니다.",
                        "2025.12.24"))),
            section(
                "학력",
                List.of(
                    item("호서대학교 컴퓨터공학부", "졸업, 학점 3.8/4.5", "2020.02 - 2026.02"),
                    item("안성고등학교", "졸업", "2017.02 - 2020.02"))),
            section(
                "교육내역",
                List.of(
                    item(
                        "중앙정보기술인재개발원",
                        "클라우드 데브옵스 프론트엔드&백엔드 자바(JAVA) 풀스택 개발자 취업캠프",
                        "2025.12 - 2026.06"),
                    item("SBS아카데미", "웹 프로젝트 및 Java, Python, C++ 교육", "2025.01 - 2025.11")))),
        List.of(
            new SkillGroup("Frontend", List.of("React", "TypeScript", "JavaScript", "Vite", "Dart")),
            new SkillGroup("Backend", List.of("Java", "Spring Boot", "REST API", "MySQL")),
            new SkillGroup("Cloud & Tools", List.of("AWS", "GitHub", "Git", "API Integration")),
            new SkillGroup("AI & Data", List.of("Python", "Korean NLP", "AI Model", "GIS Data"))),
        new Contact(
            "함께 만들 제품이 있다면 이야기해 주세요.",
            List.of(
                new ContactAction(
                    "메일 보내기",
                    "https://mail.google.com/mail/?view=cm&fs=1&to=dlckdfuf141@gmail.com",
                    "primary"),
                new ContactAction("GitHub", "https://github.com/fufckddl", "secondary"))));
  }

  private static Project project(
      String name, String description, List<String> tags, String visualType, String href) {
    return project(name, description, tags, visualType, href, List.of(link("GitHub", href)));
  }

  private static Project project(
      String name,
      String description,
      List<String> tags,
      String visualType,
      String href,
      List<ProjectLink> links) {
    return new Project(name, description, tags, visualType, href, links);
  }

  private static ProjectLink link(String label, String href) {
    return new ProjectLink(label, href);
  }

  private static InfoSection section(String title, List<InfoItem> items) {
    return new InfoSection(title, items);
  }

  private static InfoItem item(String title, String description) {
    return item(title, description, null);
  }

  private static InfoItem item(String title, String description, String period) {
    return new InfoItem(title, description, period, null);
  }
}
