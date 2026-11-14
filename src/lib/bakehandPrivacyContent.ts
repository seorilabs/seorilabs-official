import type { LegalDocContent } from '$lib/legal/types';

export const bakehandPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '베이크핸드 개인정보처리방침',
		description: '베이크핸드의 기기 저장, 사용 통계·오류 보고, 구매와 문의 정보 처리 안내입니다.',
		kicker: 'Bakehand Privacy Policy',
		lastUpdated: '2026년 11월 14일',
		intro:
			'이 방침은 Seori Labs가 Google Play와 App Store에 배포하는 베이크핸드 / Bakehand(com.seorilabs.bakehand)에 적용됩니다. 이 게임의 처리에 관해서는 공통 방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '기기에 저장하는 정보',
				body: [
					'게임은 네트워크 없이 진행됩니다. 진행 중인 런(덱, 손패, 진열대, 코인, 행동 기록), 해금한 주방 등급·레시피북·도감·업적, 오늘의 메뉴 최고 기록, 언어·소리·진동·연출 설정과 지원 코드를 앱 저장공간에 보관합니다. 저장 손상에 대비해 직전 저장의 백업 사본을 같은 저장공간에 둡니다.'
				]
			},
			{
				title: '사용 통계와 오류 보고',
				body: [
					'게임을 개선하기 위해 Google Firebase Analytics로 런 시작·종료, 영업일 결과, 업적 달성 같은 게임 이용 이벤트와 앱 버전, 기기·운영체제 종류, 앱 인스턴스 식별자를 수집합니다. Google은 IP 주소로 대략적인 국가·지역을 추정할 수 있습니다. 앱이 멈추면 Firebase Crashlytics로 충돌 기록, 기기 상태와 앱 버전을 보냅니다.',
					'이 정보는 이름이나 이메일 같은 신원과 연결하지 않고, 광고 식별자(IDFA·AAID)를 수집하지 않으며, 광고나 다른 회사 앱·웹사이트의 데이터와 결합한 추적에 쓰지 않습니다. 설정의 "사용 통계·오류 보고"를 끄면 이후의 수집이 멈춥니다.'
				]
			},
			{
				title: '계정, 광고와 구매',
				body: [
					'회원가입, 광고, 확률형 아이템과 재화 판매가 없습니다. 게임 구매와 이후 제공될 수 있는 선택 확장 팩 구매는 Google Play와 App Store가 처리하며 당사는 결제 수단 정보를 받지 않습니다. 개인정보처리방침이나 이메일 문의를 열면 외부 브라우저 또는 메일 앱이 실행되며, 해당 서비스의 처리는 그 서비스의 방침을 따릅니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'게임 정보는 앱 저장공간을 지우거나 설정의 "전체 기록 초기화"를 실행할 때까지 기기에 보관합니다. 앱을 삭제하면 기기의 기록이 사라지며 당사는 서버 사본을 보관하지 않습니다. 사용 통계는 Google Analytics 보관 기간(최대 14개월), 오류 보고는 Crashlytics 보관 기간(90일)이 지나면 삭제됩니다.'
				]
			},
			{
				title: '이메일 문의',
				body: [
					'이메일로 문의하면 발신 이메일 주소, 문의 내용과 자발적으로 첨부한 정보(설정의 지원 코드 포함)를 답변과 요청 처리에 사용하고 해결에 필요한 동안 보관한 뒤 삭제합니다. 비밀번호나 결제정보는 보내지 마세요. 개인정보 열람·정정·삭제·처리 제한 요청과 게임 지원 문의는 cs@seorilabs.com으로 보내 주세요.'
				]
			},
			{
				title: '이용 연령과 방침 변경',
				body: [
					'게임은 나이나 생년월일을 입력받지 않으며 13세 미만 아동을 주 대상으로 하지 않습니다. 지역별 스토어 콘텐츠 등급과 이용 요건이 적용됩니다. 데이터 처리 방식이 바뀌면 이 방침과 시행일을 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Bakehand Privacy Policy',
		description:
			'Local saves, usage statistics and crash reports, purchases, and support inquiries in Bakehand.',
		kicker: 'Bakehand Privacy Policy',
		lastUpdated: 'November 14, 2026',
		intro:
			'This policy applies to Bakehand / 베이크핸드 (com.seorilabs.bakehand), published on Google Play and the App Store by Seori Labs. For this game, it takes precedence over our general policy.',
		sections: [
			{
				title: 'Information stored on your device',
				body: [
					'The game plays without a network connection. Your current run (deck, tray, counter, coins, and action history), unlocked kitchen grades, recipe books, codex and achievements, Daily Menu best scores, language, sound, vibration and motion settings, and your support code are kept in app storage. A backup of the previous save is kept in the same storage to recover from corruption.'
				]
			},
			{
				title: 'Usage statistics and crash reports',
				body: [
					'To improve the game we use Google Firebase Analytics to collect gameplay events such as run start and end, business-day results, and achievements, together with the app version, device and operating-system type, and an app-instance identifier. Google may infer an approximate country or region from your IP address. If the app crashes, Firebase Crashlytics sends the crash log, device state, and app version.',
					'This information is not linked to your name, email, or other identity, we do not collect advertising identifiers (IDFA/AAID), and it is not used for advertising or combined with data from other companies’ apps or websites for tracking. Turning off “Usage stats & crash reports” in Settings stops further collection.'
				]
			},
			{
				title: 'Accounts, advertising, and purchases',
				body: [
					'There is no account registration, advertising, randomized paid items, or currency sales. The game purchase and any optional expansion packs offered later are processed by Google Play and the App Store; we do not receive your payment details. Opening the privacy policy or contacting support launches an external browser or email app, which handles information under its own policies.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Game information stays on your device until you clear app storage or use “Reset all records” in Settings. Uninstalling the app removes local records; we keep no server copy. Usage statistics are deleted after the Google Analytics retention period (up to 14 months) and crash reports after the Crashlytics retention period (90 days).'
				]
			},
			{
				title: 'Support inquiries',
				body: [
					'When you email us, we use your email address, message, and anything you choose to attach (including the support code from Settings) to answer and resolve your request, keep it only as long as needed, and then delete it. Do not send passwords or payment details. Contact cs@seorilabs.com for game support or requests to access, correct, delete, or restrict personal information.'
				]
			},
			{
				title: 'Age and policy changes',
				body: [
					'The app does not ask for your age or date of birth and is not primarily directed at children under 13. Regional store content ratings and requirements apply. We update this policy and its effective date when the game’s data practices change.'
				]
			}
		],
		footerNote: 'Privacy and game support: cs@seorilabs.com'
	}
};
