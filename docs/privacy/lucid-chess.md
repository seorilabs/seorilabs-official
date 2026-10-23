# 루시드 체스 방침 준비 기록

연결 이슈: [lucid-chess #285](https://github.com/seorilabs/lucid-chess/issues/285). 검토일은 2026년 10월 24일 KST다. 이 PR은 한국어와 영어 초안을 검토하기 위한 것이며 공개 승인이 아니다. 이 저장소의 main 병합은 Pages 공개 배포를 시작하므로 아래 확인 전에는 병합하지 않는다.

## 범위와 확인 방법

기존 `LegalDocPage`를 그대로 사용한다. 제품별 내용, 두 언어 라우트와 제품 원장의 법무 경로만 추가한다. 공통 방침과 레이아웃, 앱의 광고 및 분석 구성, 스토어 URL과 콘솔은 바꾸지 않는다. 제품 원장에 등록하면 법무 인덱스와 sitemap은 기존 구조에서 파생된다.

콘텐츠 검증은 L1 개발 환경이다. 타입 검사와 정적 빌드, 원장 검사, 산출물의 두 경로와 canonical 및 hreflang, 법무 인덱스와 sitemap, 작은 화면의 본문과 언어 전환을 확인한다. 기능 로직이나 새 화면 설계가 없는 문서 추가이므로 별도 게임 회귀나 기기 검수는 하지 않는다. TDD 대신 출처 대조와 빌드 산출물을 확인한다. 실행 전후 결과는 PR에 기록하며 실행하지 않은 항목을 통과로 표시하지 않는다.

## 문구의 근거

앱 소스 기준은 [lucid-chess main f9eaac7](https://github.com/seorilabs/lucid-chess/tree/f9eaac72f6091908124be71a09f2d96c06579512)이다. 이 소스와 실제 공개 바이너리가 일치한다는 검증은 별도로 남아 있다.

| 내용             | 앱 저장소의 근거                                                                                                                                                                                | 초안의 처리                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 제품 식별        | `play-store/google-play.config.json`, `app-store/app-store.config.json`                                                                                                                         | Android와 iOS 식별자를 각각 기재                                            |
| 진행과 힌트 저장 | `scripts/main.gd`, `packages/product-core/src/domain/hint_rewards.gd`                                                                                                                           | 기보 전체 저장과 별도 분석 이벤트를 구분                                    |
| 서비스 신원      | `scripts/platform_events_service.gd`, `addons/seorilabs_platform/adapters/firebase_identity_adapter.gd`                                                                                         | 입력형 회원가입과 서버 발급 식별자를 구분, 익명 통계만 처리한다는 표현 배제 |
| 네이티브 분석    | `scripts/firebase_services.gd`, `native/lucid-admob-plugin/lucid-admob/src/main/java/com/seorilabs/lucidchess/firebase/LucidFirebasePlugin.java`, `native/lucid-firebase-ios/lucid_firebase.mm` | Analytics, Crashlytics, Android Remote Config와 iOS 미연결을 구분           |
| 광고 선택        | `native/lucid-admob-plugin/lucid-admob/src/main/java/com/seorilabs/lucidchess/admob/LucidAdMobPlugin.java`, `scripts/ad_services.gd`, `export_presets.cfg`                                      | Android 일반 요청과 iOS npa 설정을 구분, 전 마켓 비개인화 단정 배제         |
| 광고 설정 화면   | `scripts/main.gd`의 `gameplay_settings_ad_privacy`                                                                                                                                              | UMP가 요구하는 경우의 선택 화면만 안내                                      |
| 앱인토스 기능    | `ait/apps-in-toss-web/src/leaderboardRuntime.ts`, `returnReminderRuntime.ts`, `shareRuntime.ts`, `firebaseRuntime.ts`                                                                           | 호스트의 점수, 알림 동의와 공유, 서버 분석 중계 구분                        |
| 공유             | `scripts/share_services.gd`, 네이티브 공유 플러그인                                                                                                                                             | 이용자가 선택한 OS 또는 호스트 공유와 클립보드                              |

보관에 대한 2026년 10월 23일 UTC 읽기 전용 조회에서 분석 내보내기 테이블 52개의 만료가 생성 후 60일이며 기본 테이블과 파티션 만료도 60일임을 확인했다. 이것을 GA4 속성 보관 기간으로 사용하지 않는다. GA4 사용자 및 이벤트 보관 설정 조회는 API 비활성 및 권한 부족으로 403이었으며 API 활성화, 권한이나 자격증명 변경은 하지 않았다. 인증 정보와 운영 로그 원본은 공유 파일에 포함하지 않는다.

SDK 문구는 아래 공식 자료를 함께 대조했다. 제공자의 가능한 수집 항목을 모두 앱의 실제 수집 항목으로 복사하지 않는다.

- [Firebase의 개인정보와 서비스별 보관](https://firebase.google.com/support/privacy)
- [Google Analytics 데이터 보관](https://support.google.com/analytics/answer/7667196)
- [Android AdMob 데이터 고지](https://developers.google.com/admob/android/privacy/play-data-disclosure)
- [iOS AdMob 데이터 고지](https://developers.google.com/admob/ios/privacy/data-disclosure)
- [비개인화 광고의 식별자 사용](https://support.google.com/admob/answer/7676680)

## 공개 전 남은 조건

- [ ] 실제 GA4 사용자 및 이벤트 보관 기간을 읽어 본문에 반영한다.
- [ ] 서비스 서버의 이벤트 원본, 로그 및 인증 식별자의 보관과 삭제 절차를 확인한다.
- [ ] 제공자와 국외 처리 조건을 실제 계약 및 운영 설정과 대조한다.
- [ ] 현재 공개된 Android, iOS, 앱인토스 빌드의 분석과 광고 구성을 대조한다. 이 작업에서 기기를 사용하지 않았으며 기기가 필요한 항목은 별도 소명과 승인을 따른다.
- [ ] 한국어와 영어를 함께 검토해 초안 표시를 제거하고 시행일을 확정한다.
- [ ] 공개 승인을 받은 뒤 main에 병합한다.
- [ ] 배포된 두 URL의 200과 실제 본문을 확인한다.
- [ ] 그 다음 앱 저장소의 두 마켓 config와 콘솔 주소를 변경하고 저장된 값을 다시 읽는다.

이 조건이 남아 있는 동안 기존 회사 공통 `/privacy/`가 현행 링크다. 두 제품별 주소가 아직 공개되지 않은 상태에서 스토어 URL을 앞서 바꾸지 않는다. 원래 이슈의 공개 및 콘솔 인수조건은 미완료로 유지한다.
