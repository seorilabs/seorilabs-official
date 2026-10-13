# Match Symbols 1.1.7 개인정보 페이지 준비

승인 설계는 [MP-IOS-117 v1](https://github.com/seorilabs/match-picture-app/blob/c92196fab6a302832c4919f71ff745cb3d280db6/docs/design/2026-10-13-ios-1.1.7-ad-privacy/design.md)이며 사용자가 “v1 승인 — 수정·검수·재심사 진행”으로 승인했다. AC-5의 앱별 한국어·영어 고지 준비만 담당한다.

- 경로: `/apps/match-picture/privacy/`, `/en/apps/match-picture/privacy/`. 기존 LegalDocPage와 제품 원장 형식을 사용한다.
- 문구 원본: [앱 저장소 초안](https://github.com/seorilabs/match-picture-app/blob/feature/ios-1.1.7-privacy-consent/app-store/releases/1.1.7/privacy-policy-draft.md). 문구를 그대로 옮겨 두 언어를 비교한다.
- 근거: 앱 후보 `f12f032881619284bc45d0bbef380ea6fb173f26`의 UMP+ATT 광고 차단, `npa=1`, 공식 GMA 13.9.0/UMP 3.1.0 manifest와 자체 GA4 Measurement Protocol 소스. 실제 archive와 기기 동작 대조는 아직 없다.
- 버전 범위: iOS 1.1.7 이후의 예정 동작이다. 미공개 후보를 이미 출시된 동작처럼 설명하지 않도록 두 언어 서문·마지막 안내에서 범위를 밝힌다. 이전 버전과 다른 마켓의 동작을 약속하지 않는다.
- 상태: 게시하지 않은 Ready PR 준비. App Store 개인정보 답변·링크를 변경하지 않았다. 이 저장소는 main 병합 시 자동 배포되므로 실제 후보 대조 전에 병합하지 않는다.
- 문서 추가이며 레이아웃·입력·SDK 실행 로직은 변경하지 않는다. 별도 제품 UI 3회나 전체 게임 E2E를 수행했다는 주장을 하지 않는다.

최종 앱의 manifest·활성 계측·실기기 확인 후 문구를 확정하고 사이트 배포·두 URL read-back을 확인한다. 그 뒤 App Store Connect의 모든 활성 언어에 연결하고 저장 값을 다시 읽는다. 게임 수정 PR은 [match-picture-app #113](https://github.com/seorilabs/match-picture-app/pull/113)이다.

검증: `npm run check`에서 Svelte 오류·경고 0개, 제품 원장 오류 0개를 확인했다. 기존 다른 8개 제품의 고지 미등록 경고 1건은 남는다. 로컬 개발 서버의 최초 HTTP 조회는 타임아웃이었다. 이후 두 경로 모두 HTTP 200을 확인하고 언어별 원문 7개 문단, HTML 언어, canonical과 양방향 언어 링크를 대조했다. [조회 기록](local-document-readback.json)은 로컬 SSR 결과이며 공개 URL·최종 앱 검수의 증거가 아니다.
