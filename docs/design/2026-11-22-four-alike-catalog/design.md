# 설계: 끼리끼리(Four Alike) 공식 사이트 카탈로그 등록

- 버전: 1 / 기준: 원격 main `1fe2728c08b2c43ae64dea6f98eb5df6a39f2acf`
- 상태: 승인. 사용자가 2026-11-22 Google Play 공개 사실을 전달하며 공식 사이트 카탈로그 반영을 요청했고, 2026-11-21 승인한 `Seori Apps` Play 단독 공개 포함 및 배포 범위(선택지 B, 끝 지점 2)를 이어 적용한다.

## 목적과 변경 범위

Google Play(`Seori Apps`)에 새로 공개된 `끼리끼리: 연상 카드 퍼즐` / `Four Alike: Card Group Puzzle` (`com.seoleeapps.fouralike`, 저장소 `seoleeapps/cluster-solitaire`)을 공식 사이트 제품 원장(`src/lib/products/registry.ts`)에 `live`로 등록한다.

- 이름·짧은 설명은 Google Play 한국·미국 공개 원문을 사용한다.
- `cluster-solitaire/play-store/assets/icon-512.png`를 256px WebP(`static/products/four-alike/icon-256.webp`)로 추가한다.
- 기존 개인정보처리방침 경로(`/apps/four-alike/privacy/`, `/en/apps/four-alike/privacy/`, `updated: '2026-11-21'`)를 원장 `legal`에 연결하고 `src/routes/sitemap.xml/+server.ts`의 중복 하드코딩 항목을 제거한다.
- App Store는 미공개이므로 Google Play 채널만 추가한다.

## 구조와 실패 처리

`src/lib/products/registry.ts`와 `static/products/four-alike/icon-256.webp`를 추가해 홈, `/apps/`, `/legal/`, `sitemap.xml` 파생 구조로 노출한다. 새로운 화면, 레이아웃 변경, 앱 코드·콘솔 변경은 범위 밖이다.

## 인수조건과 검수

| 조건                                                                                                                   | 검증                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `끼리끼리: 연상 카드 퍼즐` / `Four Alike: Card Group Puzzle`이 한영 서비스 목록과 홈에 표시되고 Google Play로 연결된다 | `vite preview`에서 `/`, `/en/`, `/apps/`, `/en/apps/` 실제 브라우저 확인            |
| `/products/four-alike/icon-256.webp` 아이콘이 깨짐 없이 로드된다                                                       | 실제 브라우저 이미지 `naturalWidth > 0` 확인                                        |
| `/legal/`과 `sitemap.xml`에 `/apps/four-alike/privacy/`가 노출된다                                                     | `/legal/`, `/en/legal/`, `sitemap.xml` 확인                                         |
| 정적 타입·URL·원장·빌드 검사와 중앙 웹 배포 전 검증을 통과한다                                                         | `npm run lint`, `npm run check`, `npm run build`, `verify-development-evidence.mjs` |

정적 목록 데이터 갱신이므로 L1, `dev` 환경, `redesign: false`, 기기 사용 없음으로 검증한다.

## 적용과 복구

로컬 모델 리뷰(`local-review.sh`)와 CI 통과 뒤 한국어 Ready PR을 squash merge하고 GitHub Pages 배포 완료 후 라이브 URL을 확인한다. 문제 시 해당 커밋을 되돌리는 PR로 복구한다.
