import type { PrivacyContent } from '$lib/privacyContent';

export const lordLedgerPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '삼국지 풍운록 개인정보 처리방침',
		description:
			'삼국지 풍운록의 게스트 계정, 선택형 광고와 통계 수집, 게임 저장 및 계정 삭제 안내입니다.',
		kicker: 'Lord Ledger Privacy Policy',
		lastUpdated: '2026년 9월 9일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「삼국지 풍운록」(Lord Ledger, 앱 식별자 com.seorilabs.lordledger)에 적용됩니다. 이 게임의 데이터 처리에는 공통 개인정보 처리방침보다 이 문서가 우선합니다. 별도 로그인 입력 없이 게임을 즐길 수 있지만, 온라인 기능에는 자동 생성한 게스트 계정이 사용됩니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 기록',
				body: [
					'캠페인 진행, 자동 저장과 수동 저장 슬롯, 소리·언어 등의 설정은 기기에 저장합니다. 전체 게임 저장 파일은 서버에 동기화하지 않습니다. 광고 보상 요청과 지급 확인에 필요한 캠페인 식별자·보상 기록은 별도로 처리합니다.',
					'게임 저장을 삭제하거나 기기를 바꾸면 서버에서 캠페인을 복구할 수 없습니다. 운영체제 백업 사본은 해당 기기와 백업 서비스에서 관리합니다.'
				]
			},
			{
				title: '온라인 계정과 보상 광고',
				body: [
					'Firebase와 Seori Platform의 가명 계정 식별자, 인증 토큰, 광고 요청·시청 확인·지급 상태와 시각을 처리합니다. 서버 확인, 중복 지급 방지와 이용 한도 적용에 사용하며 이름이나 이메일로 회원가입을 요구하지 않습니다.',
					'보상 광고는 이용자가 선택해서 시청합니다. Google AdMob은 광고 제공·측정·부정 이용 방지를 위해 IP 주소와 그로부터 추정한 대략적 위치, 허용된 기기·광고 식별자, 광고 시청과 상호작용, 오류·성능 정보를 처리하고 광고 서비스 관련 사업자와 공유할 수 있습니다. 게임은 정밀 위치 권한을 요청하지 않습니다.',
					'광고 동의와 개인정보 선택은 설정에서 변경할 수 있습니다. iOS 추적 허용을 거부해도 기본 플레이가 가능하며, 추적 허용을 보상 자격으로 사용하지 않습니다. 허용된 방식의 광고를 제공할 수 없으면 광고 보상을 사용할 수 없습니다.'
				]
			},
			{
				title: '선택형 이용 통계',
				body: [
					'통계 수집을 허용한 경우 첫 내정, 튜토리얼, 턴, 전투, 저장 불러오기와 광고 흐름 등의 이벤트, 앱 버전·언어·실행 환경·시각을 Seori Platform과 Google Firebase Analytics로 전송합니다. 서버에서 확인한 가명 계정 식별자로 자료를 연결해 게임 흐름을 분석합니다.',
					'설정에서 통계를 끄면 이후 전송을 멈추고 기기의 미전송 이벤트를 지웁니다. 통계 동의 철회는 서버에 이미 수집한 기록의 삭제 요청과 별개입니다. 분석에 광고 식별자를 추가하거나 분석 자료를 개인화 광고에 사용하도록 설정하지 않습니다.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Seori Labs는 인증·보상 처리와 게임 품질 개선을 위해 Google Firebase, Google Cloud, Google Analytics와 Google AdMob을 사용합니다. 온라인 통신에는 HTTPS/TLS를 사용합니다. Google 서비스는 대한민국 외의 국가에서 자료를 처리할 수 있습니다.',
					'서리랩스가 관리하는 분석 저장소는 서울 지역을 사용합니다. Google의 인증·분석·광고 서비스 내부 처리 위치와 보관 정책은 해당 서비스의 정책을 따릅니다. 계정 삭제 과정에서 Google Analytics에도 해당 사용자의 삭제를 요청하지만 Google 내부 처리 완료를 대신 보장하지는 않습니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '계정 및 연결 데이터 삭제 요청',
				body: [
					'앱에서 설정 → 온라인 계정 삭제 → 삭제 범위 확인 → 계정 삭제 요청을 선택하세요. 게임 저장도 함께 삭제할지 선택할 수 있습니다. 삭제를 시작하면 이 기기의 광고와 통계 전송을 중단하고 미수령 광고 보상을 포기합니다. 삭제는 되돌릴 수 없습니다.',
					'서버는 Firebase 계정, 연결된 광고 원시 기록과 분석 기록, 인증 세션을 처리합니다. 앱을 닫거나 제거해도 접수한 처리는 계속됩니다. 지연 반영 자료를 다시 확인하므로 보통 4일 이상 걸리며, 처리 중 오류가 있으면 더 걸릴 수 있습니다. 앱의 같은 설정 화면에서 처리 중·완료 상태와 재시도 여부를 확인할 수 있습니다.',
					'삭제 완료 후 원래 신원을 처리 원장에서 제거합니다. 재인증 차단과 상태 조회를 위한 해시 접수 기록은 완료 후 30일 동안 보관한 뒤 제거합니다. Google 광고 서비스의 별도 보관 자료와 운영체제 백업 사본은 각 제공자의 삭제·개인정보 관리 경로를 이용해 주세요.',
					'앱을 사용할 수 없는 경우 이 페이지 아래의 cs@seorilabs.com 이메일 링크로 “삼국지 풍운록 계정 삭제 요청”을 보내 삭제를 요청할 수 있습니다. 사용한 기기와 문의 내용 등 필요한 최소 정보만 알려 주세요. 이메일과 연결되지 않은 게스트 계정이므로 본인 확인을 위한 추가 절차가 필요할 수 있습니다. 비밀번호, 인증 토큰, 삭제 접수증은 보내지 마세요. 다른 이용자의 자료를 지우지 않도록 대상 확인 후 처리합니다.'
				]
			},
			{
				title: '보관과 문의',
				body: [
					'계정·보상 기록은 온라인 기능 운영과 중복 지급 방지에 필요한 동안 보관하고, 계정 삭제 요청에 따라 처리합니다. Platform의 원시 이벤트와 운영 감사 기록은 최대 400일 보관되며 계정 삭제 시 해당 사용자 자료를 삭제합니다. Google 분석 자료에는 해당 서비스의 보관 설정과 정책이 적용됩니다.',
					'문의하면 답변과 요청 처리에 필요한 발신 이메일, 문의 내용과 첨부 자료를 처리합니다. 문의 해결과 후속 처리에 필요한 동안 보관한 뒤 삭제하며, 법령상 보관 의무가 있는 자료는 필요한 범위에서 보관합니다. 열람·정정·삭제·처리 제한 및 부적절한 광고 신고는 cs@seorilabs.com으로 요청할 수 있습니다.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 18세 이상 성인 이용자를 대상으로 하며, 각 마켓에 표시되는 실제 콘텐츠 등급과 지역 요건을 함께 적용합니다. 아동을 대상으로 광고를 제공하지 않습니다.',
					'데이터 처리에 중요한 변경이 있으면 이 페이지와 앱의 안내를 갱신합니다. 웹페이지 자체의 접속 기술 로그와 고객 지원에는 해당 웹사이트·이메일 서비스의 처리 정책도 적용됩니다.'
				]
			}
		],
		footerNote: '계정 삭제, 개인정보 요청 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Lord Ledger Privacy Policy',
		description:
			'Guest accounts, optional ads and analytics, local saves, and account deletion in Lord Ledger.',
		kicker: 'Lord Ledger Privacy Policy',
		lastUpdated: 'September 9, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Lord Ledger (삼국지 풍운록, app identifier com.seorilabs.lordledger), provided by Seori Labs. It takes precedence over our general policy for this game. No sign-in form is required to play, but online features use an automatically created guest account.',
		sections: [
			{
				title: 'Local game saves',
				body: [
					'Campaign progress, automatic and manual saves, sound, language and other settings are stored on your device. Complete save files are not synchronized to a server. Campaign identifiers and reward records needed to request and confirm ad rewards are processed separately.',
					'We cannot restore a campaign from our servers after you delete its saves or change devices. Manage operating-system backup copies through your device and backup provider.'
				]
			},
			{
				title: 'Online accounts and rewarded ads',
				body: [
					'Firebase and Seori Platform process pseudonymous account identifiers, authentication tokens, and the status and timing of ad requests, verification and rewards. These support verification, duplicate-reward prevention and usage limits. We do not require your name or email for registration.',
					'You choose whether to watch rewarded ads. Google AdMob may process and share IP addresses and approximate location inferred from them, permitted device and advertising identifiers, ad views and interactions, and diagnostic and performance information for advertising, measurement and fraud prevention. The game does not request precise-location permission.',
					'Change ad consent and privacy choices in Settings. Denying iOS tracking permission does not prevent basic gameplay and is not used as a reward eligibility condition. Ad rewards are unavailable when ads cannot be provided in a permitted manner.'
				]
			},
			{
				title: 'Optional usage analytics',
				body: [
					'If you allow analytics, events such as your first domestic command, tutorial steps, turns, battles, loading saves and ad flows, together with app version, language, runtime and timestamps, are sent to Seori Platform and Google Firebase Analytics. Records are associated with a server-verified pseudonymous account identifier to analyze game flows.',
					'Switching analytics off stops subsequent transmission and removes unsent events from the device. Withdrawing analytics consent is separate from requesting deletion of records already collected. We do not configure analytics to add advertising identifiers or use analytics data for personalized advertising.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Seori Labs uses Google Firebase, Google Cloud, Google Analytics and Google AdMob for authentication, reward processing and quality improvement. Online communication uses HTTPS/TLS. Google services may process information outside your country.',
					'The analytics stores managed by Seori Labs use the Seoul region. Google authentication, analytics and advertising services follow their own processing-location and retention policies. Account deletion includes a request to Google Analytics for the user; we do not represent acceptance of that request as completion inside Google.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Request account and linked-data deletion',
				body: [
					'In the app, open Settings → Delete online account, review the scope, then select Request account deletion. You can also choose to delete saved games. Starting deletion stops ads and analytics on this device and forfeits unclaimed ad rewards. Deletion cannot be undone.',
					'The server processes the Firebase account, linked raw ad and analytics records, and authentication sessions. Accepted requests continue after the app is closed or removed. Processing normally takes at least four days because delayed records are checked again, and can take longer if a service fails. Use the same settings screen to view processing or completion status and retry when needed.',
					'After completion, the original identity is removed from the processing record. Hashed receipt and authentication-blocking records are kept for 30 days after completion, then removed. Use the relevant provider’s privacy controls for separately retained advertising-service information and operating-system backups.',
					'If you cannot use the app, request deletion using the cs@seorilabs.com email link at the bottom of this page with the subject “Lord Ledger account deletion request.” Provide only necessary details such as the device used and your request. Guest accounts are not linked to email, so additional identity verification may be needed. Do not send passwords, authentication tokens or deletion receipts. We verify the target to avoid deleting another person’s information.'
				]
			},
			{
				title: 'Retention and support',
				body: [
					'Account and reward records are retained as needed to operate online features and prevent duplicate rewards, and are processed when you request account deletion. Raw Platform events and operational audit records are retained for up to 400 days; associated user records are deleted during account deletion. Google analytics data follows its service retention settings and policies.',
					'When you contact support, we process your sender address, message and attachments to respond and handle the request. We keep them as needed for resolution and follow-up, and retain legally required records only to the extent necessary. Contact cs@seorilabs.com for access, correction, deletion, restriction requests or inappropriate-ad reports.'
				]
			},
			{
				title: 'Audience and changes',
				body: [
					'The game targets adults aged 18 and over. The content rating displayed by each store and local requirements also apply. It is not directed to children.',
					'We update this page and in-app notices for material changes. The website and email providers also process technical website access and support information under their respective policies.'
				]
			}
		],
		footerNote: 'Account deletion, privacy requests and game support: cs@seorilabs.com'
	}
};
