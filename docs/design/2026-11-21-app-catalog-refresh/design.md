# 설계: 공식 사이트 앱 목록 전체 최신화

- 버전: 1 / 기준: 원격 main `30e55eb59d1183ca569f2213d7d2f608d5e3c822`
- 상태: 승인. 사용자가 2026-11-21 대화에서 전수 순회 결과 중 선택지 B(원장 미등록·승격 대상 및 `Seori Apps` Play 단독 공개 6종 포함)와 끝 지점 2(검증 후 PR 병합 및 공식 사이트 공개 배포)를 승인했다.

## 목적과 변경 범위

Google Play 3개 개발자 계정(`Seori Labs` 2개, `Seori Apps` 1개)과 Apple App Store(`Seori Labs`, artistId `994468959`)의 실제 공개 목록과 공식 사이트 제품 원장(`src/lib/products/registry.ts`)을 일치시킨다.

| 구분          | 제품                                                                                                                                                                                                                                                                       | 이전 원장 상태              | 반영 내용                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| 신규 공개     | Spiritgate: Riftfall (`com.seorilabs.spiritgateriftfall`)                                                                                                                                                                                                                  | 미등록                      | `live`, Google Play + App Store(`6833014468`), 256px 아이콘 추가                                         |
| 상태 승격     | 말랑 (`com.seorilabs.malang`)                                                                                                                                                                                                                                              | `upcoming`                  | `live`, App Store(`6835785376`) 추가, 스토어 등록명·부제 반영                                            |
| 상태 승격     | Gather Puzzle (`com.seorilabs.gatherpuzzle`)                                                                                                                                                                                                                               | `upcoming`                  | `live`, Google Play 추가                                                                                 |
| 상태 승격     | My Little Parasite (`com.seorilabs.mylittleparasite`)                                                                                                                                                                                                                      | `upcoming`                  | `live`, Google Play 추가, 256px 아이콘 추가                                                              |
| 신규 등록     | 오늘도 도전자 / Today Challenger (`com.seorilabs.todaychallenger`)                                                                                                                                                                                                         | 미등록                      | `live`, Google Play + App Store(`6821745875`), 256px 아이콘 추가                                         |
| 채널 보완     | 루시드 리버시 (`com.etlegame.reversi`)                                                                                                                                                                                                                                     | `live` (App Store·앱인토스) | Google Play 채널 추가                                                                                    |
| 채널 보완     | 수유로그 (`com.github.magicsih.babycareapp`)                                                                                                                                                                                                                               | `live` (App Store)          | Google Play 채널 추가                                                                                    |
| 단독 공개 6종 | 한 수 장기(`com.seoleeapps.jangi`), 몬스터 파티(`com.seoleeapps.monsterparty`), 내 새끼 대학 보내기(`com.seorilabs.keeum`), Memorize All(`com.seorilabs.memorizeall`), Paper Craft Print(`com.seoleeapps.papercraftprint`), 왕립 아카데미(`com.seoleeapps.princesstycoon`) | 미등록                      | `live`, Google Play 채널, 256px 아이콘, 앞 5종 `/apps/*/privacy/` 연결(왕립 아카데미는 공통 `/privacy/`) |

표시 이름과 소개는 공개 스토어 등록 원문을 따른다. 기존 대표작 노출 순서(`order: 1..14`, `99..107`)와 기존 정책 경로는 유지한다. `sitemap.xml/+server.ts`에서 원장 편입 제품의 중복 하드코딩 개인정보 항목 5건을 정리한다. 새로운 화면, 레이아웃 변경, 앱 코드 수정, 스토어 콘솔 변경은 범위 밖이다.

## 구조와 실패 처리

`src/lib/products/registry.ts`와 `static/products/<slug>/icon-256.webp`를 갱신한다. 홈, `/apps/`, `/legal/`, `sitemap.xml`과 `itemList` 구조화 데이터는 기존 파생 구조를 그대로 사용한다. 실제 공개가 확인되지 않은 채널(`말랑` Google Play 등)은 추가하지 않는다.

## 인수조건과 검수

| 조건                                                                               | 검증                                                                                |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 신규·승격 제품 11종이 한영 서비스 목록과 홈에 표시되고 `준비 중`에서 빠진다        | `vite preview`에서 `/`, `/en/`, `/apps/`, `/en/apps/` 실제 브라우저 확인            |
| `루시드 리버시`와 `수유로그`에 Google Play 링크가 함께 노출된다                    | 실제 브라우저에서 링크 `href`와 스토어 대상 확인                                    |
| 추가한 9개 제품 아이콘(`icon-256.webp`)이 깨짐 없이 로드된다                       | 실제 브라우저 이미지 `naturalWidth > 0` 확인                                        |
| 편입한 5개 제품의 개인정보처리방침이 `/legal/`과 `sitemap.xml`에 빠짐없이 노출된다 | `/legal/`, `/en/legal/`, `sitemap.xml` 확인                                         |
| 정적 타입·URL·원장·빌드 검사와 중앙 웹 배포 전 검증을 통과한다                     | `npm run lint`, `npm run check`, `npm run build`, `verify-development-evidence.mjs` |

정적 목록 데이터 갱신이므로 구현 복제 단위 테스트 대신 기존 원장/빌드/URL 검증 스크립트와 실제 브라우저 검수를 사용한다. L1, `dev` 환경, `redesign: false`, 기기 사용 없음.

## 적용과 복구

검증과 로컬 모델 리뷰(`seori-pr-workflow`)를 거쳐 한국어 Ready PR을 생성하고 CI 통과 후 squash merge로 `main`에 반영한다. GitHub Pages 배포(`deploy.yaml`) 완료 뒤 공개 URL(`https://www.seorilabs.com/apps/`, `/en/apps/`)을 직접 확인한다. 문제 시 해당 원장·아이콘 변경 커밋을 되돌리는 PR로 복구한다.
