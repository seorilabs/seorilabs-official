import type { PrivacyContent } from '$lib/privacyContent';

export const saltCompassPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '소금과 나침반 개인정보 처리방침',
		description:
			'소금과 나침반의 가명 계정, 클라우드 저장, 이용 통계, 오류 보고, 보상형 광고, 인앱 결제와 데이터 삭제 안내입니다.',
		kicker: 'Salt & Compass Privacy Policy',
		lastUpdated: '2026년 9월 25일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「소금과 나침반」(Salt & Compass, 앱 식별자 com.seorilabs.saltcompass)에 적용됩니다. 이 게임의 데이터 처리에는 공통 개인정보 처리방침보다 이 문서가 우선합니다. 이름·이메일 입력이나 로그인 없이 게임을 즐길 수 있고, 온라인 기능에는 자동 생성한 가명 계정이 사용됩니다.',
		sections: [
			{
				title: '가명 계정',
				body: [
					'앱을 처음 실행하면 Seori Platform이 Firebase 가명 계정 식별자와 인증 토큰을 발급합니다. 클라우드 저장, 이용 통계와 오류 보고 연결, 구매 확인, 서버 시각 확인(원정·건조 대기 시간 판정)에 사용하며 이름·이메일·전화번호를 받지 않습니다.'
				]
			},
			{
				title: '게임 기록과 클라우드 저장',
				body: [
					'항해 진행, 금화·배·발견 기록, 설정은 기기에 저장합니다. 기기를 바꾸거나 앱을 다시 설치해도 이어서 할 수 있도록 같은 저장 파일의 사본과 진행 요약(저장 시각, 명성, 발견 수, 앱 버전)을 가명 계정에 연결해 Google Firebase(Cloud Firestore)에 보관합니다. 사본은 해당 계정만 읽고 쓸 수 있습니다.',
					'인터넷에 연결되지 않아도 게임은 기기 기록만으로 동작합니다. 연결되면 사본을 갱신하고, 다른 기기의 기록이 더 최근이면 어느 쪽을 이어 할지 고르도록 안내합니다.'
				]
			},
			{
				title: '이용 통계',
				body: [
					'게임 개선을 위해 항해 시작·도착, 사건 카드 선택, 발견, 거래, 튜토리얼 단계, 화면 이동과 버튼 선택 같은 게임 내 행동 기록과 앱 버전·언어·실행 환경·시각을 가명 계정 식별자와 함께 Seori Platform으로 보내고, Platform은 이를 Google Analytics로 전달해 집계합니다. 이 통계에는 광고 식별자를 넣지 않고 개인화 광고에 사용하지 않습니다.',
					'설정의 “사용 통계 보내기”를 끄면 이후 이용 통계와 오류 보고 전송을 멈춥니다. 이미 수집한 기록의 삭제는 아래 삭제 요청으로 처리합니다.'
				]
			},
			{
				title: '오류 보고',
				body: [
					'게임이 멈추거나 잘못 동작하는 원인을 고치기 위해 엔진·스크립트 오류가 생기면 오류 종류, 게임 파일 안의 위치(파일 경로와 줄, 함수 이름), 오류 메시지 앞 120자, 앱 버전을 가명 계정 식별자와 함께 Seori Platform으로 보냅니다. 한 번 실행할 때 최대 20건만 보내며, 저장 내용이나 기기의 다른 파일은 보내지 않습니다. “사용 통계 보내기”를 끄면 보내지 않습니다.'
				]
			},
			{
				title: '보상형 광고와 Google AdMob',
				body: [
					'광고는 이용자가 “광고 보고 …” 버튼을 직접 눌렀을 때만 보는 보상형 광고이며 전면 광고는 없습니다. Google Play와 App Store 버전에서 광고 기능을 켜면 Google AdMob이 광고를 제공합니다. 광고 기능이 꺼진 버전에서는 AdMob을 초기화하지 않고 광고를 요청하지 않습니다.',
					'광고를 요청하고 표시할 때 Google AdMob은 광고 제공·측정·부정 이용 방지·분석을 위해 광고 식별자(Android 광고 ID, 앱 세트 ID, iOS IDFA 및 IDFV), 기기 정보와 광고 상호작용, 앱·SDK 성능과 진단 정보, IP 주소와 그로부터 추정한 대략적 위치를 수집하고 Google과 광고 파트너가 자체 목적으로도 처리할 수 있습니다. 게임 자체는 기기의 위치 정보를 읽지 않습니다.',
					'iOS에서는 광고 추적이 필요한 경우 앱 추적 투명성(ATT) 권한을 요청하며, 허용하지 않으면 IDFA를 광고에 사용하지 않습니다. 설정 → 개인정보 보호 및 보안 → 추적에서 언제든 바꿀 수 있습니다. Android에서는 설정 → 개인정보 보호(또는 Google) → 광고에서 광고 ID를 재설정하거나 삭제할 수 있습니다. 광고 ID를 삭제하거나 추적을 거부해도 게임과 보상형 광고는 이용할 수 있으며, 비개인화 광고가 표시될 수 있습니다.',
					'Google의 데이터 처리 방식은 https://policies.google.com/technologies/partner-sites 와 https://policies.google.com/privacy 에서 확인할 수 있습니다.'
				]
			},
			{
				title: '인앱 결제',
				body: [
					'결제는 Google Play, Apple App Store, 토스(AppsInToss)가 처리하며 Seori Labs는 결제 카드·은행 계좌 등 결제 수단 정보를 받지 않습니다. 결제 기능이 켜진 버전에서 이용자가 구매하면 스토어가 발급한 구매 토큰·거래 증빙과 상품 ID를 가명 계정과 함께 Seori Platform으로 보내 서버에서 검증하고, 지급·복원·환불 확인을 위해 마켓, 상품 ID, 거래 참조값, 지급 상태와 처리 시각을 구매 기록으로 보관합니다.',
					'결제로 금화나 무작위 보상을 팔지 않으며, 허가·전설·발견은 결제로 건너뛸 수 없습니다.'
				]
			},
			{
				title: 'AppsInToss 버전',
				body: [
					'토스 앱 안에서 실행하는 AppsInToss 버전은 AdMob 대신 토스가 제공하는 광고를, 스토어 결제 대신 토스 인앱 결제를 사용합니다. 토스 광고와 결제에서 토스가 처리하는 정보는 토스의 개인정보 처리방침을 따릅니다.',
					'AppsInToss에서 결제하려면 토스 로그인이 필요할 수 있습니다. 이 경우 토스 로그인으로 받은 앱 범위 사용자 키는 주문 확인에만 사용하고, 원본 사용자 키는 서버에 저장하지 않습니다. 토스가 로그인 동의 과정에서 이름 등 프로필 정보를 제공하더라도 Seori Labs는 게임 기능에 사용하거나 저장하지 않습니다.'
				]
			},
			{
				title: '알림',
				body: [
					'원정 함대 복귀와 배 건조 완료 알림은 기기에서 예약하는 로컬 알림이며 서버 푸시를 사용하지 않습니다. 설정에서 끌 수 있고, 운영체제의 알림 권한을 거부해도 게임은 동작합니다.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Seori Labs는 다음 사업자에게 처리를 맡기거나 해당 사업자의 서비스를 사용합니다. Google Firebase와 Google Cloud(가명 계정, 클라우드 저장, Seori Platform, 통계·오류 보고 처리, 저장 위치 서울 asia-northeast3), Google Analytics(통계 집계), Google AdMob(보상형 광고), Google Play와 Apple App Store(앱 배포와 결제), 토스(비바리퍼블리카, AppsInToss 배포·로그인·광고·결제).',
					'앱과 서버 사이의 모든 통신은 HTTPS/TLS로 암호화해 전송합니다. Google 등 해외 사업자의 서비스는 대한민국 외의 국가에서 자료를 처리할 수 있습니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '데이터 삭제 요청',
				body: [
					'앱에서 설정 → 모든 데이터 삭제를 선택하면 이 기기의 저장 기록과 미전송 통계, 클라우드에 보관한 저장 사본을 지웁니다. 삭제는 되돌릴 수 없습니다.',
					'가명 계정 연결 정보와 이미 전송한 통계·오류 보고 기록까지 지우려면 이 페이지 아래의 cs@seorilabs.com 으로 “소금과 나침반 데이터 삭제 요청”을 보내 주세요. 사용한 기기와 요청 내용 등 필요한 최소 정보만 알려 주시고, 비밀번호나 인증 토큰은 보내지 마세요. 이메일과 연결되지 않은 가명 계정이므로 대상 확인을 위한 추가 절차가 필요할 수 있습니다. 구매 기록 중 환불·회계·법령상 보관이 필요한 부분은 그 목적이 끝날 때까지 제한적으로 보관할 수 있습니다.'
				]
			},
			{
				title: '보관과 문의',
				body: [
					'클라우드 저장 사본은 삭제할 때까지 보관합니다. Platform의 원시 통계·오류 보고 기록과 운영 감사 기록은 최대 400일 보관합니다. 구매 기록은 지급·복원·환불·회계·부정 이용 방지와 법적 의무에 필요한 기간 동안 보관한 뒤 삭제하거나 비식별화합니다.',
					'문의하면 답변과 요청 처리에 필요한 발신 이메일, 문의 내용과 첨부 자료를 처리하고 해결에 필요한 동안 보관한 뒤 삭제합니다. 열람·정정·삭제·처리 제한 요청은 cs@seorilabs.com으로 할 수 있습니다.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 각 마켓에 표시되는 콘텐츠 등급과 지역 요건을 함께 적용합니다. 13세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 알고서 수집하지 않습니다.',
					'데이터 처리에 중요한 변경이 있으면 이 페이지와 앱의 안내를 갱신합니다.'
				]
			}
		],
		footerNote: '데이터 삭제, 개인정보 요청 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Salt & Compass Privacy Policy',
		description:
			'Pseudonymous accounts, cloud saves, usage analytics, error reports, rewarded ads, in-app purchases and data deletion in Salt & Compass.',
		kicker: 'Salt & Compass Privacy Policy',
		lastUpdated: 'September 25, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Salt & Compass (소금과 나침반, app identifier com.seorilabs.saltcompass), provided by Seori Labs. It takes precedence over our general policy for this game. No sign-in, name or email is required to play; online features use an automatically created pseudonymous account.',
		sections: [
			{
				title: 'Pseudonymous account',
				body: [
					'On first launch, Seori Platform issues a Firebase pseudonymous account identifier and authentication token. It is used for cloud saves, linking usage analytics and error reports, verifying purchases and checking server time for expedition and shipbuilding timers. We do not collect your name, email or phone number.'
				]
			},
			{
				title: 'Game records and cloud saves',
				body: [
					'Voyage progress, gold, ships, discoveries and settings are stored on your device. So you can continue after changing devices or reinstalling, a copy of the same save file and a progress summary (save time, fame, number of discoveries, app version) are kept in Google Firebase (Cloud Firestore), linked to your pseudonymous account. Only that account can read or write the copy.',
					'The game works offline from the device record. When online, the copy is updated; if another device has a newer record, you are asked which one to continue.'
				]
			},
			{
				title: 'Usage analytics',
				body: [
					'To improve the game, in-game events such as voyage starts and arrivals, event-card choices, discoveries, trades, tutorial steps, screen changes and button choices, together with app version, language, runtime and timestamps, are sent to Seori Platform with your pseudonymous account identifier, and Platform forwards them to Google Analytics for aggregation. These analytics do not include advertising identifiers and are not used for personalized advertising.',
					'Turning off “Send usage statistics” in Settings stops further usage analytics and error reports. Deletion of records already collected is handled by the deletion request below.'
				]
			},
			{
				title: 'Error reports',
				body: [
					'To fix crashes and malfunctions, when an engine or script error occurs we send the error type, its location in the game files (file path and line, function name), the first 120 characters of the error message and the app version to Seori Platform with your pseudonymous account identifier. At most 20 reports are sent per launch, and no save contents or other files on your device are sent. Nothing is sent while “Send usage statistics” is off.'
				]
			},
			{
				title: 'Rewarded ads and Google AdMob',
				body: [
					'The only ads are rewarded ads that play only when you tap a “Watch ad …” button yourself; there are no interstitial ads. In the Google Play and App Store versions, ads are served by Google AdMob once the ad feature is enabled. Versions with ads turned off do not initialize AdMob or request ads.',
					'When requesting and showing ads, Google AdMob collects advertising identifiers (Android advertising ID, app set ID, iOS IDFA and IDFV), device information and ad interactions, app and SDK performance and diagnostic information, and your IP address and the approximate location derived from it, for ad delivery, measurement, fraud prevention and analytics. Google and its advertising partners may also process this information for their own purposes. The game itself does not read your device location.',
					'On iOS, where ad tracking applies, we ask for permission through App Tracking Transparency (ATT); if you do not allow it, the IDFA is not used for ads. You can change this at any time in Settings → Privacy & Security → Tracking. On Android, you can reset or delete your advertising ID in Settings → Privacy (or Google) → Ads. Deleting the advertising ID or declining tracking does not stop you from playing or watching rewarded ads; you may see non-personalized ads.',
					'Learn how Google uses data at https://policies.google.com/technologies/partner-sites and https://policies.google.com/privacy.'
				]
			},
			{
				title: 'In-app purchases',
				body: [
					'Payments are processed by Google Play, the Apple App Store and Toss (AppsInToss); Seori Labs does not receive payment card, bank account or other payment method details. In versions with purchases enabled, when you buy something, the store-issued purchase token or transaction receipt and the product ID are sent to Seori Platform with your pseudonymous account and verified on our server. To grant, restore and handle refunds, we keep a purchase history of the store, product ID, transaction reference, grant status and processing time.',
					'Purchases never sell gold or random rewards, and licenses, legends and discoveries cannot be skipped by paying.'
				]
			},
			{
				title: 'AppsInToss version',
				body: [
					'The AppsInToss version, which runs inside the Toss app, uses ads provided by Toss instead of AdMob and Toss in-app payments instead of store billing. Information Toss processes for its ads and payments is governed by the Toss privacy policy.',
					'Purchases in AppsInToss may require Toss Login. In that case the app-scoped user key received through Toss Login is used only to confirm orders, and the original user key is not stored on our servers. If Toss provides profile information such as your name during the login consent flow, Seori Labs does not use or store it.'
				]
			},
			{
				title: 'Notifications',
				body: [
					'Expedition-return and shipbuilding notifications are local notifications scheduled on your device; no server push is used. You can turn them off in Settings, and the game works if you deny the operating-system notification permission.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Seori Labs uses the following providers or their services: Google Firebase and Google Cloud (pseudonymous accounts, cloud saves, Seori Platform, analytics and error-report processing; data stored in the Seoul region, asia-northeast3), Google Analytics (analytics aggregation), Google AdMob (rewarded ads), Google Play and the Apple App Store (distribution and payments), and Toss (Viva Republica; AppsInToss distribution, login, ads and payments).',
					'All communication between the app and our servers is encrypted in transit with HTTPS/TLS. Google and other providers outside Korea may process information outside your country.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Request data deletion',
				body: [
					'In the app, choose Settings → Delete all data to remove the save record and unsent analytics on this device and the save copy kept in the cloud. Deletion cannot be undone.',
					'To also delete the pseudonymous account link and analytics and error-report records already sent, email cs@seorilabs.com using the link at the bottom of this page with the subject “Salt & Compass data deletion request.” Provide only necessary details such as the device used and your request, and do not send passwords or authentication tokens. Pseudonymous accounts are not linked to email, so additional verification may be needed. Parts of the purchase history needed for refunds, accounting or legal obligations may be kept on a restricted basis until that purpose ends.'
				]
			},
			{
				title: 'Retention and support',
				body: [
					'Cloud save copies are kept until deleted. Raw Platform analytics and error-report records and operational audit records are retained for up to 400 days. Purchase history is kept as needed to grant and restore purchases, handle refunds, support accounting, prevent abuse and meet legal obligations, then deleted or de-identified.',
					'When you contact support, we process your sender address, message and attachments to respond and keep them as needed for resolution. Contact cs@seorilabs.com for access, correction, deletion or restriction requests.'
				]
			},
			{
				title: 'Audience and changes',
				body: [
					'The game is intended for ages 13 and over; the content rating shown by each store and local requirements also apply. It is not directed to children under 13, and we do not knowingly collect information from them.',
					'We update this page and in-app notices for material changes.'
				]
			}
		],
		footerNote: 'Data deletion, privacy requests and game support: cs@seorilabs.com'
	}
};
