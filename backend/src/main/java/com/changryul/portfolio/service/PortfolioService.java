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
            "Java·Spring Boot 기반 데이터 처리와 Flutter·React Native 앱 개발을 경험했습니다. 화면과 API를 연결하고 예외 상황을 테스트합니다.",
            "프로젝트 보기",
            "연락하기"),
        new About(
            "소개",
            "화면과 서버, 데이터가 연결되는 과정을 이해하며 웹·앱 서비스를 개발합니다.",
            List.of(
                "화면과 서버, 데이터가 연결되는 과정을 이해하며 웹·앱 서비스를 개발합니다. GIS 데이터 허브에서는 수집·저장·조회와 테스트를, 모바일 프로젝트에서는 화면 구현과 API 연동을 경험했습니다. 문제가 생기면 외부 응답, 서버 처리, 저장값, 화면 상태를 나누어 확인합니다."),
            List.of(
                new PortfolioResponse.AboutMetric("2회", "AI 해커톤 수상 경험")),
            List.of(
                new Capability(
                    "사용자 흐름 설계",
                    "시연과 이용 과정에 필요한 기능을 정하고 우선순위를 조율합니다.",
                    "flow"),
                new Capability(
                    "모바일·화면 구현",
                    "Flutter·React Native 기반 화면과 상태 처리를 구현합니다.",
                    "component"),
                new Capability(
                    "API·데이터 처리",
                    "Spring Boot·MyBatis·PostgreSQL 기반 수집·저장·조회를 구현합니다.",
                    "speed"),
                new Capability(
                    "검증·배포",
                    "서버 로직 테스트, API 연동·예외 상태 점검과 AWS 배포를 경험했습니다.",
                    "verify"))),
        List.of(
            detailedProject(
                "GIS Data Research Hub",
                "공공데이터 수집·저장·조회 API를 개발하고, 수집 실패와 중복 실행을 처리한 GIS 데이터 허브",
                "BACKEND · DATA",
                "공공데이터를 정기적으로 수집하고 지역별로 조회하는 데이터 허브",
                "수집·저장·조회 로직 및 테스트",
                List.of(
                    "Spring Boot·MyBatis·PostgreSQL/PostGIS로 데이터 처리 흐름 구성",
                    "소스별 실패를 처리해 한 수집 작업이 실패해도 다음 작업이 이어지도록 구성",
                    "동일 애플리케이션 프로세스 내 중복 실행 차단과 비동기 캐시 워밍업 적용"),
                List.of(
                    "JUnit 5·Mockito로 수집 순서, 실패 후 계속 실행, 중복 실행 차단 확인",
                    "MyBatis Test로 데이터 접근 계층 점검"),
                null,
                List.of("Java", "Spring Boot", "PostgreSQL", "MyBatis", "Test"),
                "dashboard",
                "https://github.com/fufckddl/GISDataHub_FE",
                List.of(
                    link("FE", "https://github.com/fufckddl/GISDataHub_FE"),
                    link("BE", "https://github.com/fufckddl/GISDataHub_BE"))),
            detailedProject(
                "HoseoLife",
                "React Native·FastAPI 기반 교내 커뮤니티와 실시간 채팅 서비스",
                "MOBILE · BACKEND",
                "교내 구성원이 게시글과 실시간 채팅으로 소통하는 모바일 커뮤니티",
                "개인 프로젝트로 모바일 화면, 서버 기능, 배포 구성",
                List.of(
                    "React Native(Expo)·FastAPI·MySQL로 모바일 화면과 서버 기능 연결",
                    "WebSocket 채팅에 자동 재연결과 메시지 큐 적용",
                    "AWS EC2 배포와 S3 파일 저장 구성"),
                List.of("연결이 끊기는 상황을 고려해 채팅 재연결과 대기 메시지 처리 흐름 점검"),
                null,
                List.of("React Native", "FastAPI", "MySQL", "WebSocket", "AWS"),
                "dashboard",
                "https://github.com/fufckddl/HoseoLife",
                List.of(link("GitHub", "https://github.com/fufckddl/HoseoLife"))),
            detailedProject(
                "ROUTY",
                "ADHD 아동의 루틴 수행을 돕는 앱. 팀장으로 구현 범위를 조율하고 Flutter 화면과 AI·음성 API를 연결",
                "MOBILE · AI",
                "루틴 관리와 음성 대화를 연결해 아동의 일상 루틴 수행을 돕는 서비스",
                "팀장·Flutter 프론트엔드·API 연동",
                List.of(
                    "2박 3일 내 시연할 핵심 사용자 흐름을 정하고 팀원 의견과 구현 우선순위 조율",
                    "공통 HTTP 계층을 구성하고 루틴 목록·상세·등록·완료 화면을 Flask·MySQL 기반 API에 연결",
                    "Flowise API와 STT/TTS를 연동해 음성 입력, AI 응답, 음성 출력 구현"),
                List.of("화면 전환, 기능 간 연결, 기록 저장 여부 확인"),
                "핵심 사용자 흐름을 완성해 시연하고 2025년 AI 해커톤 우수상 수상",
                List.of("Flutter", "Dart", "API Integration", "STT·TTS", "Team Lead"),
                "checkout",
                "https://github.com/fufckddl/2025_AI_HACKATHON_FE",
                List.of(
                    link("BE", "https://github.com/fufckddl/2025_AI_HACKATHON_BE"),
                    link("FE", "https://github.com/fufckddl/2025_AI_HACKATHON_FE"))),
            detailedProject(
                "Pitches",
                "발표 분석 결과를 이해하기 쉬운 피드백으로 보여주는 Flutter 기반 AI 스피치 코칭 서비스",
                "MOBILE · UI/UX",
                "발표 분석 결과를 다음 연습에 활용할 수 있는 피드백으로 전달하는 서비스",
                "Flutter 프론트엔드·UI/UX",
                List.of(
                    "점수만으로는 개선할 부분을 파악하기 어렵다는 문제를 기준으로 결과 화면 재구성",
                    "감정 변화와 스피치 상태를 이해하기 쉬운 항목으로 분리",
                    "분석 결과 확인이 다음 연습으로 이어지도록 문구와 배치 조정"),
                List.of(),
                "2024년 AI 해커톤 대상 수상",
                List.of("Flutter", "Dart", "UI·UX", "API Integration"),
                "note",
                "https://github.com/fufckddl/hackathon-pitches",
                List.of(link("GitHub", "https://github.com/fufckddl/hackathon-pitches"))),
            project(
                "GitCard",
                "[2025:Project] 쉽게 만드는 GitHub README",
                "WEB · TOOL",
                List.of("Python", "README", "Live"),
                "dashboard",
                "https://github.com/fufckddl/GitCard"),
            project(
                "SummarIQ",
                "[2025:Project] AI 기반 사용자 회의 요약 및 분석 플랫폼",
                "WEB · AI",
                List.of("Python", "AI", "Frontend"),
                "dashboard",
                "https://github.com/fufckddl/SummarIQ.ai-FE"),
            project(
                "OneLineMind",
                "[2025:Project] 감정 기록과 활동 관리를 위한 모바일 다이어리",
                "MOBILE · APP",
                List.of("Dart", "App", "GitHub"),
                "checkout",
                "https://github.com/fufckddl/OneLineMind"),
            project(
                "Korean NLP Models",
                "[2025:AI Model] 한국어 텍스트 기반 공감·감정 인식 모델",
                "NLP · MODEL",
                List.of("AI Model", "Korean NLP", "GitHub"),
                "dashboard",
                "https://github.com/fufckddl/KoreanEmpathyModel",
                List.of(
                    link("Empathy", "https://github.com/fufckddl/KoreanEmpathyModel"),
                    link("Emotion", "https://github.com/fufckddl/KoreanEmotionModel")))),
        List.of(
            new Experience(
                "Pitches AI 해커톤 대상",
                "감정 인식 기반 발표 도우미 AI Pitches로 대상을 수상했습니다.",
                "2024.10.25 ~ 27",
                "Pitches"),
            new Experience(
                "HoseoLife 개인 프로젝트",
                "React Native·FastAPI 기반 교내 커뮤니티와 실시간 채팅 서비스를 개발했습니다.",
                "2025.07 - 2025.10",
                "HoseoLife"),
            new Experience(
                "ROUTY AI 해커톤 우수상",
                "소아 ADHD 아동을 위한 AI 기반 루틴 관리 플랫폼 ROUTY로 우수상을 수상했습니다.",
                "2025.10.24 ~ 26",
                "ROUTY")),
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
                        "",
                        "2025.12.24"))),
            section(
                "학력",
                List.of(
                    item("호서대학교 컴퓨터공학부", "졸업, 학점 3.85/4.5", "2020.02 - 2026.02"),
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
            new SkillGroup(
                "Backend & Database",
                List.of("Java", "Spring Boot", "MyBatis", "REST API", "FastAPI", "PostgreSQL/PostGIS", "MySQL")),
            new SkillGroup(
                "Web & Mobile",
                List.of("React", "TypeScript", "Flutter", "Dart", "React Native")),
            new SkillGroup(
                "Test & Cloud",
                List.of("JUnit 5", "Mockito", "MyBatis Test", "AWS EC2·S3·RDS")),
            new SkillGroup("Collaboration", List.of("Git", "GitHub"))),
        new Contact(
            "개발 직무와 프로젝트 경험에 관해 연락 주세요.",
            List.of(
                new ContactAction(
                    "메일 보내기",
                    "https://mail.google.com/mail/?view=cm&fs=1&to=dlckdfuf141@gmail.com",
                    "primary"),
                new ContactAction("GitHub", "https://github.com/fufckddl", "secondary"))));
  }

  private static Project project(
      String name,
      String description,
      String category,
      List<String> tags,
      String visualType,
      String href) {
    return project(name, description, category, tags, visualType, href, List.of(link("GitHub", href)));
  }

  private static Project project(
      String name,
      String description,
      String category,
      List<String> tags,
      String visualType,
      String href,
      List<ProjectLink> links) {
    return new Project(
        name,
        description,
        category,
        null,
        null,
        List.of(),
        List.of(),
        null,
        tags,
        visualType,
        href,
        links);
  }

  private static Project detailedProject(
      String name,
      String description,
      String category,
      String purpose,
      String role,
      List<String> implementation,
      List<String> verification,
      String result,
      List<String> tags,
      String visualType,
      String href,
      List<ProjectLink> links) {
    return new Project(
        name,
        description,
        category,
        purpose,
        role,
        implementation,
        verification,
        result,
        tags,
        visualType,
        href,
        links);
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
