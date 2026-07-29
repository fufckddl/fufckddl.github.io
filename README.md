# 이창렬 포트폴리오

Java Spring Boot API와 React 프론트엔드를 분리한 포트폴리오 프로젝트입니다.

배포 주소: [https://fufckddl.github.io/](https://fufckddl.github.io/)

## 구조

```text
backend/   Spring Boot API
frontend/  Vite + React UI
```

## 실행

백엔드:

```bash
cd backend
mvn spring-boot:run
```

프론트엔드:

```bash
cd frontend
npm install
npm run dev
```

프론트엔드는 개발 중 `/api` 요청을 `http://localhost:8080`으로 프록시합니다.
백엔드가 꺼져 있어도 기본 포트폴리오 데이터로 화면은 렌더링됩니다.
GitHub Pages에서는 정적 포트폴리오 데이터를 사용하며, `VITE_PORTFOLIO_API_URL`을
설정하면 별도 배포한 Java API를 연결할 수 있습니다.

## 검증

```bash
cd backend && mvn test
cd frontend && npm run build
```
