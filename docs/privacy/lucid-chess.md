# 루시드 체스 방침의 운영 근거

관련 이슈는 [lucid-chess #285](https://github.com/seorilabs/lucid-chess/issues/285), 공개 PR은 #91이다. 2026년 10월 24일 사용자가 보관과 삭제 절차 및 공개 앱 동작을 확인하고 이 PR을 공개까지 마무리하도록 지시했다. 기존 준비 단계의 공개 보류는 이번 지시로 해소됐다. 운영 설정과 사용자 자료를 바꾸거나 기기를 조작하지 않고 확인했다. 스토어 설정과 콘솔 주소 변경은 별도 후속 범위로 유지한다.

## 공개 버전과 실제 관측

| 채널        | 확인한 현재 공개 상태                                                  | 처리 내용의 근거와 한계                                                                                                                                                                                                                                  |
| ----------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Google Play | 3.0.26, versionCode 1003000026, production completed, 공개 리스팅 접속 | Publisher API에서 받은 동일 versionCode의 서명 APK를 검증했다. package와 versionName, Google Play 서명, 광고 식별자 권한 및 내장된 분석과 플랫폼 이벤트 스크립트를 확인했다. SHA256은 아래에 기록한다. 기기에 설치하거나 동작을 새로 실행한 것은 아니다. |
| App Store   | 3.0.26, build 12, READY_FOR_SALE, VALID, App Store eligible            | 앱 ID 1041884410과 bundle com.etlegame.chess를 대조했다. 실제 분석 내보내기에서 이 버전의 대국, 퍼즐과 광고 요청 및 표시 이벤트가 수신됨을 확인했다. 보존 기한이 지난 Xcode Cloud 실행 목록은 현재 비어 있어 IPA를 새로 감사했다고 표시하지 않는다.      |
| 앱인토스    | live version 20260919-57, 3.0.21 소스 fe0b7920b169, 2026-09-19 공개    | 콘솔의 live deployment와 source memo를 대조했다. 해당 공개 소스의 서버 이벤트 경로와 게임센터, 알림 및 공유 경계를 읽었다. 토스 기기에서 새로 검수하지 않았다.                                                                                           |

Play APK SHA256: `9e6b808b52ae6e639b34aad6a4cf32abbc9faf8089eada9f277e8ad694bdd5e4`. 서명 인증서 SHA256: `3edb45f5714e1e4cd67469fcb4c3c22b1ded675460b06404794677647f5fc5b0`.

네이티브 공개 소스 기준은 [v3.0.26의 4b681c8](https://github.com/seorilabs/lucid-chess/tree/4b681c8fb555099ee2b878ecd202c9844101f669)이다. 앱인토스는 위 live memo의 소스를 사용했다. 현재 개발 main의 새 적립 힌트를 공개 앱의 기능이라고 쓰지 않는다. SDK별 선언과 실제 수신 관측을 구분하고 이를 새 실기기 QA로 취급하지 않는다.

## 처리 내용 대조

- `scripts/main.gd`: 기보와 게임 설정 및 출석, 퍼즐의 로컬 저장과 별도 분석 이벤트. 전체 기보의 서버 저장 기능과 구분한다.
- `scripts/platform_events_service.gd`, `addons/seorilabs_platform/adapters/firebase_identity_adapter.gd`: 서버 발급 앱별 식별자와 Firebase 인증. 입력형 회원가입 부재가 식별자 수집 부재를 뜻하지 않는다.
- Android `LucidFirebasePlugin.java`와 `native/lucid-firebase-ios/lucid_firebase.mm`: Analytics와 Crashlytics, Android Remote Config 및 iOS 미연결.
- Android `LucidAdMobPlugin.java`, `scripts/ad_services.gd`와 `export_presets.cfg`: UMP, Android 일반 광고 요청, iOS 비개인화 요청과 tracking=false. 전 마켓 비개인화로 일반화하지 않는다.
- 앱인토스 `leaderboardRuntime.ts`, `returnReminderRuntime.ts`, `shareRuntime.ts`, `firebaseRuntime.ts`: 토스 호스트 기능과 서버 분석 중계. 선택 기능의 이용과 호스트의 별도 처리를 구분한다.

2026-10-16부터 2026-10-23까지의 앱 분석 내보내기를 집계해 iOS 3.0.26에서 `game_start`, `game_end`, `daily_puzzle_complete`, `ad_interstitial_show_request`와 `ad_interstitial_shown` 등 24개 이벤트 종류를 확인했다. 사용자 식별자 원문을 추출하지 않았다. 해당 기간에 Android 자료가 없다는 이유로 Android SDK가 데이터를 수집하지 않는다고 결론 내리지 않는다.

## 실제 보관 설정

| 자료                                      | 확인한 설정                                                        | 확인 방법                                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GA4 사용자와 이벤트                       | 각각 14개월, 새 활동 시 사용자 보관 기간 갱신 켜짐                 | 실제 루시드 체스 속성의 관리 화면을 읽었다. API로 조회했던 403을 통과로 바꾸지 않고 별도 운영 화면 근거를 남겼다. 집계 표준 보고서는 이 설정과 다르다. |
| 앱 분석 BigQuery 내보내기                 | 기본 테이블 및 파티션 만료 60일, 확인한 기존 테이블도 생성 후 60일 | dataset metadata 및 이전 읽기 전용 테이블 조회                                                                                                         |
| 서버 이벤트와 감사 원본                   | 날짜별 파티션 만료 400일, 서울 리전                                | 두 테이블의 실제 BigQuery 세부정보 화면. 테이블 전체의 만료가 꺼져 있어도 파티션 만료는 적용된다.                                                      |
| 일반 서비스 로그                          | 30일                                                               | 실제 Cloud Logging 기본 버킷 설정                                                                                                                      |
| 필수 보안 및 관리 감사 로그               | 400일                                                              | 실제 Cloud Logging 필수 감사 버킷 설정                                                                                                                 |
| 서버의 앱별 식별자와 인증 연결            | 자동 만료 없음, 확인한 요청의 대상 자료를 삭제                     | 배포된 플랫폼 소스와 Firestore TTL 목록을 대조했다. 활성 TTL은 광고 보상 자료의 ttlAt이며 사용자 자료의 자동 만료로 해석하지 않는다.                   |
| Firebase 인증과 Remote Config 제공자 사본 | 삭제 요청 전 보관, 요청 후 운영 및 백업에서 최대 180일 내 제거     | Firebase의 서비스별 공개 보관 안내                                                                                                                     |
| Crashlytics                               | 90일 후 운영 및 백업에서 제거 절차 시작                            | Firebase 공개 보관 안내                                                                                                                                |

실제 배포된 플랫폼 API의 컨테이너 digest에 붙은 소스 태그는 [b0e0534](https://github.com/seorilabs/platform/tree/b0e053423f74f107b5fb7d3c991c924fd9370b49)이며 해당 리비전이 트래픽 100%를 받았다. 그 소스의 `events/collector.go`와 실제 파티션 만료가 일치했다. 운영 API 조회 권한과 브라우저의 로그인 및 대상 프로젝트를 각각 확인했으며 역할, 보관 기간과 자격증명을 바꾸지 않았다.

Firestore의 서울 데이터베이스는 PITR 비활성, 버전 보존 3600초이며 예약 백업은 없었다. BigQuery에는 시간 여행 및 장애 복구 사본이 남을 수 있으므로 논리 삭제와 모든 사본의 물리 제거를 같은 시점이라고 고지하지 않는다. Firebase 제공자 사본의 180일과도 구분한다.

## 삭제 요청의 처리 절차

이 앱의 플랫폼 원장에는 `account_deletion` 기능이 활성화돼 있지 않다. 다른 앱에 사용하는 삭제 워커나 30일 접수증 정리 코드를 이 앱의 자동 삭제 기능이라고 설명하지 않는다. 현재 접수 창구는 `cs@seorilabs.com`이며 앱 안의 자동 접수 버튼이 있다고 쓰지 않는다.

1. 앱 이름과 마켓을 확인하고 해당 설치본 또는 기록을 식별하는 데 필요한 최소 정보를 안내한다. 비밀번호와 인증 토큰을 이메일로 받지 않는다.
2. 서버의 앱별 식별자 및 인증 연결을 대조해 다른 앱이나 설치본의 자료가 섞이지 않게 요청 대상을 확인한다. 연결 근거가 없는 SDK 자료를 추측해 같은 이용자의 자료로 처리하지 않는다.
3. 확인된 대상에 대해 운영자가 연결된 서비스 식별자와 인증 자료, 이벤트 및 분석 사본의 삭제를 처리한다. 기존 서버의 `identity/deletion_identity.go`, `events/deletion.go`는 대상 경계와 사본 연결 및 삭제 순서의 근거다. 이 작업에서 실제 사용자 삭제나 권한 변경을 시험하지 않았다.
4. SDK 식별자와 요청자를 연결할 수 없거나 법령상 보관이 필요한 자료는 처리 가능한 범위, 사유와 보관 기간을 설명한다. Google Analytics의 개별 삭제 요청, 제공자의 자동 만료와 사본 제거를 구분하고 처리 결과를 안내한다.
5. 운영 자료와 복구 사본의 제거 시점을 구분한다. 실제 요청 때 대상과 승인 범위를 다시 확인하며, 이 방침 공개는 사용자 자료를 임의로 삭제하는 승인이 아니다.

## 제공자와 국외 처리

앱 서버, 이벤트 저장소와 서버 신원 저장소의 선택 리전은 대한민국 서울이다. Firebase 인증은 미국에서 처리되고, Google의 다른 서비스는 전 세계 시설에서 처리될 수 있다. 앱 실행 중 SDK 및 API로 전송된다. Google Firebase, Analytics와 AdMob, 토스 호스트가 맡는 처리와 각 제공자의 데이터 처리 조건 및 보호조치를 구분해 안내한다. 특정 국가의 단일 시설에만 모든 자료가 남는다거나 개별 사업자 사본의 즉시 제거가 보장된다고 쓰지 않는다.

공식 근거:

- [Firebase의 개인정보, 위치와 서비스별 보관](https://firebase.google.com/support/privacy)
- [GA4 데이터 보관과 사용자 활동 갱신](https://support.google.com/analytics/answer/7667196)
- [Android AdMob 고지](https://developers.google.com/admob/android/privacy/play-data-disclosure), [iOS AdMob 고지](https://developers.google.com/admob/ios/privacy/data-disclosure)
- [비개인화 광고의 식별자 사용](https://support.google.com/admob/answer/7676680)
- [Google Cloud 데이터 처리 부속 약정](https://cloud.google.com/terms/data-processing-addendum), [Firebase 데이터 처리 조건](https://firebase.google.com/terms/data-processing-terms)
- [BigQuery의 시간 여행과 장애 복구 보관](https://docs.cloud.google.com/bigquery/docs/time-travel)
- [토스 개인정보처리방침](https://toss.im/privacy-policy)

## 공개 검증

같은 폴더의 새 공개 설계와 테스트 계획은 `docs/design/2026-10-24-lucid-chess-privacy-public/`에서 추적한다. 기존 법무 틀의 L1 웹 검사, 중앙 before-deploy 검증, PR 검사와 Pages 배포 후 실제 한영 주소 및 본문 확인을 수행한다. 원본 운영 조회와 APK 및 실행 자료는 별도로 보관하며 인증 값이나 내부 보관 경로를 공유 문서에 넣지 않는다.

사이트 공개는 스토어의 방침 URL이 교체됐다는 뜻이 아니다. 이후 앱 config와 콘솔 주소를 바꾸는 작업은 공개된 두 주소와 본문을 먼저 확인하고 별도 변경으로 처리한다.
