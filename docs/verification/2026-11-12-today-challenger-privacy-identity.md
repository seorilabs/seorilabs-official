# 오늘도 도전자 개인정보처리방침 식별 정보 수정

2026-11-12 Google Play Console에서 오늘도 도전자 업데이트가 잘못된 개인정보처리방침으로 거절된 상태를 확인했다. 사용자가 전달한 상세 사유는 `앱 또는 개발자 세부정보가 일치하지 않음`이다. 현재 공개 정책에는 Seori Labs와 서리랩스만 있고 해당 앱 이름과 Play 개발자명이 없어, 전달된 사유와 일치한다.

## 확인한 현재 상태

- 개발자 계정: Seolee Apps, 개인 계정, `5547060480954653351`.
- 앱: 오늘도 도전자, `com.seorilabs.todaychallenger`, Console 앱 ID `4976339413242478964`.
- Console 개인정보처리방침 URL: `https://www.seorilabs.com/privacy/`.
- 공개 URL은 HTTP 200이지만 `Seolee Apps`, `Today Challenger`, `오늘도 도전자`가 본문에 없다.
- 이 확인은 읽기 전용으로 수행했다. 공개 정책 배포와 Play 재제출은 아직 실행하지 않았다.

[Google 정책](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)은 스토어에 기재한 주체 또는 앱 이름을 정책에서 식별할 수 있어야 한다고 명시한다.

## 수정

`src/lib/privacyContent.ts`의 8개 언어 도입부에 `Seolee Apps`가 Google Play에 등록한 `오늘도 도전자` / `Today Challenger`와 패키지 `com.seorilabs.todaychallenger`가 이 정책의 적용 대상임을 명시했다. 최종 수정일은 2026-11-12로 갱신했다. 기존 정책 URL을 유지하므로 이미 등록된 링크도 같은 수정 문서를 가리킨다.

이는 정책 문구 수정이며 데이터 처리 조항, 앱 실행 코드, 네이티브 SDK, 스토어 등록정보의 변경은 포함하지 않는다. 가상의 앱 실행 결과나 중앙 릴리스 통과 기록을 만들지 않았다.

## 검증

- `git diff --check`: 통과.
- `npm run lint`: 통과.
- `npm run check`: Svelte 오류 및 경고 0개, 레지스트리 검사 통과.
- `npm run build`: 통과. 정적 페이지 91개, URL·레지스트리·검색엔진 검증 파일 검사 통과.
- 공통 Playwright 환경과 독립 Edge 세션에서 빌드 미리보기를 실제로 열어 8개 언어 × 모바일 390×844 및 데스크톱 1440×1000, 총 16개 조합을 확인했다. 모두 HTTP 200이며 네 식별자가 표시되고, 8개 언어 링크와 문의처를 유지하며 가로 넘침이 없다.
- 한국어 모바일 및 영어 데스크톱 캡처를 직접 확인했다.

사이트 레지스트리 검사는 별도 앱 정책이 없는 기존 제품 7개의 경고를 출력한다. 이번 문구 수정으로 발생한 오류는 아니다.

## 남은 단계

1. 공개 반영 승인 후 PR을 병합하고 GitHub Pages 배포 성공 및 실제 공개 문구를 확인한다. 이 저장소는 main 병합으로 배포되므로 승인 전에는 병합하지 않는다.
2. Play 재제출 승인 후 게시 개요의 변경 목록과 거절된 후보를 확인하고, 승인받은 변경만 제출한다. 접수, 심사 승인, 공개 상태를 각각 확인한다.
3. 별도 점검에서 현재 앱 소스의 설정에 개인정보처리방침 URL을 여는 링크가 없음을 확인했다. `광고 개인정보 선택`은 UMP 동의 관리이므로 정책 링크를 대신하지 않는다. 사용자가 전달한 거절 사유와 구분해 앱 내 링크 수정 범위를 확인 중이다. 앱 전체 정책 적합성을 이번 웹 문구 검사만으로 완료 처리하지 않는다.

증적 원본: `/Volumes/Data/Backup/agent-artifacts/today-challenger/2026-11-12/50b1e6e596405c63e8157de32d40e9cd341f080e/privacy-identity/`. 복사 후 파일별 SHA-256과 크기를 검증하고 로컬 원본을 정리한다.

연결 이슈: [#117](https://github.com/seorilabs/seorilabs-official/issues/117). Version Impact: none.
