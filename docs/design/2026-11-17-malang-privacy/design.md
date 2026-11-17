# 말랑 개인정보 처리방침 페이지

말랑(Malang: Squishy ASMR Toys, `com.seorilabs.malang`)의 Google Play와 App Store 첫 공개 출시에 연결할 제품별 개인정보 처리방침을 한국어와 영어로 추가한다. 기존 `LegalDocPage` 템플릿과 제품 원장을 재사용하며, 새 화면이나 개인정보 수집 기능은 만들지 않는다.

승인 근거는 `seorilabs/malang`의 출시 승인 기록 `docs/design/2026-11-16-malang-launch/approval.md`다. 사용자는 2026-11-16 출시 설계와 테스트 계획(Google Play와 App Store 공개까지)을 승인했고, 그 설계의 출시 범위에 개인정보 처리방침과 seorilabs.com의 처리방침 URL이 들어 있다. 2026-11-17 사용자는 대상 연령을 13세 이상 일반으로 바꾸고 앱의 나이 확인과 어른 확인 화면은 유지하기로 했다(seorilabs/malang#15). 이 문서는 그 승인을 넓히지 않는다. 앱 코드, 플랫폼 설정과 스토어 신고의 정본은 각 저장소다.

문안에는 `seorilabs/malang` main `a293c20cb83f143ccd46686f06faf2fafcbadfba`의 코드와 `seorilabs/platform` main의 수집 서버 코드로 확인한 사실만 적는다. 기기에 저장하는 범위, 처음 실행 때 태어난 해를 묻고 나이대만 남기는 동작, 일반 나이대에서 "데이터 분석 허용"이 켜져 있을 때만 보내는 익명 이벤트와 그 문맥, 반짝 컬렉션의 기기 구매 확인과 설치별 무작위 UUID, 광고와 추적과 로그인이 없다는 점을 다룬다. 플랫폼 레지스트리 `apps/malang`에 GA4 측정 ID가 없어 Google Analytics 중계가 일어나지 않는다는 점과 이벤트 테이블의 일 단위 파티션 만료가 400일이라는 점은 플랫폼 코드에서 확인했다. 운영 테이블의 메타데이터는 이번 작업의 인증 범위로 읽지 못해 코드 값과 기존 공개 방침의 400일 고지를 근거로 삼는다.

제품 원장에는 `upcoming`으로 넣는다. 스토어 짧은 설명이 아직 없으므로 소개 문구는 게임 타이틀 화면의 문구를 쓰고, 이름은 Play Console과 App Store Connect에 등록한 이름을 쓴다. 공개 출시를 확인하면 상태, 채널과 문구를 스토어 원문으로 바꾼다. 아이콘은 게임의 1024px 앱 아이콘을 256px WebP로 줄인다.

검수는 L1, 개발 환경이며 기준은 원격 main `24fe5b986a4e4e658c9a54dfe82d7dd3d0326cbd`다. Prettier 검사, `npm run check`, `npm run build`(고정 URL, 원장, 빌드 산출물 검사 포함)를 통과해야 한다. 빌드한 두 언어 문서를 모바일 390×844와 데스크톱 1440×1000에서 열어 본문, canonical, hreflang, 언어 전환, 연락처 링크와 가로 넘침을 보고, `/apps/`의 출시 준비 카드, `/legal/` 목록과 sitemap 항목을 확인한다. 정적 문서와 원장 항목 추가이므로 구현을 복제하는 단위 테스트는 새로 쓰지 않는다. 기기 사용은 없다.

출시 끝 지점은 웹 공개다. 이 작업은 Ready PR까지 진행하고 병합과 배포는 별도로 한다. 공개 뒤 두 URL의 HTTP 200과 본문을 다시 읽고, 말랑 저장소의 Google Play 설정 `privacyPolicyUrl`과 스토어 콘솔의 처리방침 URL을 새 주소로 바꾼다. 복구는 이번 원장 항목과 문서를 되돌리는 PR이며 저장 데이터에 영향이 없다.
