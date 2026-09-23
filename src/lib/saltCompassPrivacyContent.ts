import type { PrivacyContent } from '$lib/privacyContent';

export const saltCompassPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '소금과 나침반 개인정보 처리방침',
		description:
			'소금과 나침반의 가명 계정, 클라우드 저장, 이용 통계, 알림과 데이터 삭제 안내입니다.',
		kicker: 'Salt & Compass Privacy Policy',
		lastUpdated: '2026년 9월 23일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「소금과 나침반」(Salt & Compass, 앱 식별자 com.seorilabs.saltcompass)에 적용됩니다. 이 게임의 데이터 처리에는 공통 개인정보 처리방침보다 이 문서가 우선합니다. 이름·이메일 입력이나 로그인 없이 게임을 즐길 수 있고, 온라인 기능에는 자동 생성한 가명 계정이 사용됩니다.',
		sections: [
			{
				title: '게임 기록과 클라우드 저장',
				body: [
					'항해 진행, 금화·배·발견 기록, 설정은 기기에 저장합니다. 기기를 바꾸거나 앱을 다시 설치해도 이어서 할 수 있도록 같은 저장 파일의 사본과 진행 요약(저장 시각, 명성, 발견 수, 앱 버전)을 가명 계정에 연결해 Google Firebase(Cloud Firestore)에 보관합니다. 사본은 해당 계정만 읽고 쓸 수 있습니다.',
					'인터넷에 연결되지 않아도 게임은 기기 기록만으로 동작합니다. 연결되면 사본을 갱신하고, 다른 기기의 기록이 더 최근이면 어느 쪽을 이어 할지 고르도록 안내합니다.'
				]
			},
			{
				title: '가명 계정',
				body: [
					'앱을 처음 실행하면 Seori Platform이 Firebase 가명 계정 식별자와 인증 토큰을 발급합니다. 클라우드 저장, 이용 통계 연결, 서버 시각 확인(원정·건조 대기 시간 판정)에 사용하며 이름·이메일·전화번호를 받지 않습니다.'
				]
			},
			{
				title: '이용 통계',
				body: [
					'게임 개선을 위해 항해 시작·도착, 사건 카드 선택, 발견, 거래, 튜토리얼 단계, 화면 이동 같은 게임 내 행동 기록과 앱 버전·언어·실행 환경·시각을 가명 계정 식별자와 함께 Seori Platform으로 전송합니다. 광고 식별자는 수집하지 않고, 통계를 개인화 광고에 사용하지 않습니다.',
					'설정의 이용 통계를 끄면 이후 전송을 멈춥니다. 이미 수집한 기록의 삭제는 아래 삭제 요청으로 처리합니다.'
				]
			},
			{
				title: '광고·결제·알림',
				body: [
					'현재 버전은 광고를 표시하지 않고 인앱 결제를 판매하지 않습니다. 광고나 결제를 도입하면 적용 전에 이 방침을 갱신합니다.',
					'원정 함대 복귀와 배 건조 완료 알림은 기기에서 예약하는 로컬 알림이며 서버 푸시를 사용하지 않습니다. 설정에서 끌 수 있고, 운영체제의 알림 권한을 거부해도 게임은 동작합니다.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Seori Labs는 가명 계정, 클라우드 저장, 통계 처리를 위해 Google Firebase와 Google Cloud를 사용하며 저장 데이터는 서울 지역에 둡니다. 통신에는 HTTPS/TLS를 사용합니다. Google 서비스는 대한민국 외의 국가에서 자료를 처리할 수 있습니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '데이터 삭제 요청',
				body: [
					'앱에서 설정 → 데이터 삭제를 선택하면 이 기기의 저장 기록과 미전송 통계, 클라우드에 보관한 저장 사본을 지웁니다. 삭제는 되돌릴 수 없습니다.',
					'가명 계정 연결 정보와 이미 전송한 통계 기록까지 지우려면 이 페이지 아래의 cs@seorilabs.com 으로 “소금과 나침반 데이터 삭제 요청”을 보내 주세요. 사용한 기기와 요청 내용 등 필요한 최소 정보만 알려 주시고, 비밀번호나 인증 토큰은 보내지 마세요. 이메일과 연결되지 않은 가명 계정이므로 대상 확인을 위한 추가 절차가 필요할 수 있습니다.'
				]
			},
			{
				title: '보관과 문의',
				body: [
					'클라우드 저장 사본은 삭제할 때까지 보관합니다. Platform의 원시 통계 기록과 운영 감사 기록은 최대 400일 보관합니다.',
					'문의하면 답변과 요청 처리에 필요한 발신 이메일, 문의 내용과 첨부 자료를 처리하고 해결에 필요한 동안 보관한 뒤 삭제합니다. 열람·정정·삭제·처리 제한 요청은 cs@seorilabs.com으로 할 수 있습니다.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 각 마켓에 표시되는 콘텐츠 등급과 지역 요건을 함께 적용합니다. 아동을 대상으로 하지 않습니다.',
					'데이터 처리에 중요한 변경이 있으면 이 페이지와 앱의 안내를 갱신합니다.'
				]
			}
		],
		footerNote: '데이터 삭제, 개인정보 요청 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Salt & Compass Privacy Policy',
		description:
			'Pseudonymous accounts, cloud saves, usage analytics, notifications and data deletion in Salt & Compass.',
		kicker: 'Salt & Compass Privacy Policy',
		lastUpdated: 'September 23, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Salt & Compass (소금과 나침반, app identifier com.seorilabs.saltcompass), provided by Seori Labs. It takes precedence over our general policy for this game. No sign-in, name or email is required to play; online features use an automatically created pseudonymous account.',
		sections: [
			{
				title: 'Game records and cloud saves',
				body: [
					'Voyage progress, gold, ships, discoveries and settings are stored on your device. So you can continue after changing devices or reinstalling, a copy of the same save file and a progress summary (save time, fame, number of discoveries, app version) are kept in Google Firebase (Cloud Firestore), linked to your pseudonymous account. Only that account can read or write the copy.',
					'The game works offline from the device record. When online, the copy is updated; if another device has a newer record, you are asked which one to continue.'
				]
			},
			{
				title: 'Pseudonymous account',
				body: [
					'On first launch, Seori Platform issues a Firebase pseudonymous account identifier and authentication token. It is used for cloud saves, linking usage analytics and checking server time for expedition and shipbuilding timers. We do not collect your name, email or phone number.'
				]
			},
			{
				title: 'Usage analytics',
				body: [
					'To improve the game, in-game events such as voyage starts and arrivals, event-card choices, discoveries, trades, tutorial steps and screen changes, together with app version, language, runtime and timestamps, are sent to Seori Platform with your pseudonymous account identifier. We do not collect advertising identifiers or use analytics for personalized advertising.',
					'Turning off usage analytics in Settings stops further transmission. Deletion of records already collected is handled by the deletion request below.'
				]
			},
			{
				title: 'Ads, purchases and notifications',
				body: [
					'The current version shows no ads and sells no in-app purchases. We will update this policy before introducing either.',
					'Expedition-return and shipbuilding notifications are local notifications scheduled on your device; no server push is used. You can turn them off in Settings, and the game works if you deny the operating-system notification permission.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Seori Labs uses Google Firebase and Google Cloud for pseudonymous accounts, cloud saves and analytics processing, with stored data in the Seoul region. Communication uses HTTPS/TLS. Google services may process information outside your country.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Request data deletion',
				body: [
					'In the app, choose Settings → Delete data to remove the save record and unsent analytics on this device and the save copy kept in the cloud. Deletion cannot be undone.',
					'To also delete the pseudonymous account link and analytics records already sent, email cs@seorilabs.com using the link at the bottom of this page with the subject “Salt & Compass data deletion request.” Provide only necessary details such as the device used and your request, and do not send passwords or authentication tokens. Pseudonymous accounts are not linked to email, so additional verification may be needed.'
				]
			},
			{
				title: 'Retention and support',
				body: [
					'Cloud save copies are kept until deleted. Raw Platform analytics and operational audit records are retained for up to 400 days.',
					'When you contact support, we process your sender address, message and attachments to respond and keep them as needed for resolution. Contact cs@seorilabs.com for access, correction, deletion or restriction requests.'
				]
			},
			{
				title: 'Audience and changes',
				body: [
					'The game is intended for ages 13 and over; the content rating shown by each store and local requirements also apply. It is not directed to children.',
					'We update this page and in-app notices for material changes.'
				]
			}
		],
		footerNote: 'Data deletion, privacy requests and game support: cs@seorilabs.com'
	}
};
