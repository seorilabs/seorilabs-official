import type { PrivacyContent } from '$lib/privacyContent';

export const crosswordPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '가로세로 낱말 퍼즐 개인정보 처리방침',
		description: '퍼즐 기록, 자동 계정, 사용 통계, 광고와 데이터 삭제 요청을 안내합니다.',
		kicker: 'Crossword Puzzle Privacy Policy',
		lastUpdated: '2026년 10월 23일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs의 가로세로 낱말 퍼즐에 적용됩니다. 앱 식별자는 com.seorilabs.crosswordpuzzle, 앱인토스 식별자는 crossword-puzzle-game입니다. 이 제품의 데이터 처리에는 공통 방침보다 이 문서가 우선합니다. 사용 통계 설정과 iOS 광고 동의 보완은 1.2.0부터 적용하며, 이전 버전의 화면과 설정은 다를 수 있습니다.',
		sections: [
			{
				title: '퍼즐 기록과 자동 계정',
				body: [
					'퍼즐에 입력한 글자, 진행률, 완료 기록, 힌트 잔액과 설정을 기기에 저장합니다. 이 기록을 기기 사이에 동기화하는 기능은 제공하지 않습니다. 앱 삭제나 저장소 초기화로 기기 기록이 사라질 수 있습니다.',
					'온라인 서비스는 이름이나 이메일을 입력받는 회원가입 대신 Seori Platform과 Firebase가 발급한 가명 계정 식별자와 인증 토큰을 사용합니다. 로그인 상태를 복원하고, 서비스 이용 상태와 앱 버전, 실행 환경, 접속 시각 등을 처리해 인증, 운영 상태 확인과 업데이트 안내에 사용합니다. 이 운영 처리는 사용 통계 설정과 별개입니다. 가명 식별자를 완전히 익명인 정보로 취급하지 않습니다.'
				]
			},
			{
				title: '사용 통계와 끄기',
				body: [
					'앱 개선을 위해 화면 이동, 퍼즐 시작과 완료, 첫 세 단어 안내, 입력과 힌트 사용, 광고 처리 결과 같은 이용 기록과 앱 버전, 배포 마켓, 실행 환경, 시각을 Google Firebase와 Google Analytics로 보냅니다. 분석 도구의 앱 설치 식별자와 기술 정보가 함께 처리될 수 있습니다. 앱인토스에서는 토스의 앱 분석 기능에도 이용 이벤트를 보냅니다.',
					'1.2.0에서는 이전 선택이 없으면 사용 통계가 켜져 있습니다. 설정의 “사용 통계 보내기”를 끄면 이후 앱 이용 이벤트 전송을 멈추며, 이전에 끈 선택은 유지합니다. 광고 동의, 광고 보상, 알림 선택과는 별도입니다. iOS에서는 Firebase의 광고 저장, 광고 사용자 데이터와 광고 개인화 신호를 거부합니다.'
				]
			},
			{
				title: '광고와 순위',
				body: [
					'추가 힌트를 위해 사용자가 선택한 보상형 광고를 제공합니다. Android와 iOS는 Google AdMob에 비개인화 광고를 요청합니다. 광고 제공, 측정과 부정 이용 방지를 위해 IP 주소와 그로부터 추정한 대략적 위치, 기기와 앱 식별자, 광고 상호작용, 진단과 성능 정보가 처리될 수 있습니다. 비개인화 광고도 이러한 처리를 수반할 수 있습니다.',
					'iOS 1.2.0은 ATT 추적 허락과 Google UMP 화면을 요청하지 않으며, 광고 초기화 전에 이전 IABTCF_ 동의 값을 지웁니다. 유럽경제지역, 영국과 스위스에서는 제한 광고가 제공되거나 광고를 이용할 수 없을 수 있습니다. Android의 UMP와 설정의 광고 개인정보 선택은 유지합니다. 앱인토스 광고는 토스가 제공하는 광고 기능과 해당 정책을 따릅니다.',
					'순위 기능은 Android의 Google Play 게임즈, iOS의 Game Center와 앱인토스의 순위 서비스에 점수를 제출하거나 순위를 표시합니다. 프로필과 점수의 공개 범위, 해당 서비스에 저장한 기록의 삭제는 각 플랫폼의 계정 설정과 정책을 따릅니다.'
				]
			},
			{
				title: '처리 사업자와 보관',
				body: [
					'Seori Labs는 인증과 운영을 위해 Seori Platform, Google Firebase와 Google Cloud를, 이용 분석을 위해 Google Analytics와 앱인토스 분석 기능을, 광고와 순위를 위해 위에 적은 플랫폼을 사용합니다. 서비스 요청 과정에서 IP 주소, 요청 시각, 앱과 기기 정보 등 기술 로그가 처리될 수 있습니다. Google, Apple과 토스는 각 서비스의 정책에 따라 정보를 처리하며, Google 등의 서비스는 대한민국 밖에서 정보를 처리할 수 있습니다.',
					'기기 기록은 앱의 기록 초기화나 삭제 때까지 남을 수 있습니다. 서버의 계정과 운영 기록, 이용 통계는 인증, 서비스 안정성, 품질 개선과 문의 처리에 필요한 기간 동안 보관하고, 법령상 보관 의무가 있으면 해당 기간을 따릅니다. 각 플랫폼이 별도로 처리하는 광고와 순위 기록의 보관은 해당 제공자의 정책을 따릅니다. 개인정보를 판매하지 않습니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '계정과 데이터 삭제 요청',
				body: [
					'자동 계정, 서버 운영 기록 또는 이미 전송한 이용 통계의 열람, 정정, 삭제나 처리 제한은 cs@seorilabs.com으로 요청할 수 있습니다. 제목에 “가로세로 낱말 퍼즐 데이터 삭제 요청”을 적고 사용한 마켓과 요청 내용을 알려 주세요. 가명 계정은 이메일과 연결되어 있지 않아 대상 확인을 위한 최소한의 추가 정보가 필요할 수 있습니다. 비밀번호나 인증 토큰은 보내지 마세요.',
					'사용 통계를 끄는 것은 이후 전송을 멈추는 설정이며 이전 기록 삭제 요청과 다릅니다. 앱 삭제만으로 서버 기록이나 플랫폼 순위 기록이 모두 삭제되지는 않습니다. 문의할 때 제공한 이메일과 첨부 자료는 요청 확인과 처리에 필요한 동안 보관합니다.'
				]
			},
			{
				title: '변경과 문의',
				body: [
					'이 게임은 아동 전용 서비스가 아닙니다. 이용 시 각 마켓의 콘텐츠 등급과 지역 요건을 확인해 주세요. 데이터 처리에 중요한 변경이 있으면 이 문서와 필요한 안내를 갱신합니다.',
					'개인정보와 게임 지원 문의: cs@seorilabs.com'
				]
			}
		],
		footerNote: '개인정보, 계정과 데이터 삭제 요청: cs@seorilabs.com'
	},
	en: {
		title: 'Crossword Puzzle Privacy Policy',
		description:
			'Puzzle records, automatic accounts, usage analytics, ads and data deletion requests.',
		kicker: 'Crossword Puzzle Privacy Policy',
		lastUpdated: 'October 23, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to the Crossword Puzzle game provided by Seori Labs, with app identifier com.seorilabs.crosswordpuzzle and AppsInToss identifier crossword-puzzle-game. It takes precedence over our general policy for this product. The usage statistics setting and revised iOS ad consent behavior apply from version 1.2.0; earlier versions may have different screens and settings.',
		sections: [
			{
				title: 'Puzzle records and automatic accounts',
				body: [
					'Entered letters, progress, completion records, hint balance and settings are stored on your device. We do not provide synchronization of these puzzle records between devices. Removing the app or clearing its storage may erase them.',
					'Online services use a pseudonymous account identifier and authentication token issued through Seori Platform and Firebase instead of registration with a name or email. Login state, service activity, app version, runtime and connection times are processed for authentication, operations and update notices. This operational processing is separate from the usage statistics setting. We do not treat pseudonymous identifiers as fully anonymous information.'
				]
			},
			{
				title: 'Usage analytics and opting out',
				body: [
					'To improve the app, we send events such as screen changes, puzzle starts and completions, first-three-word guidance, input and hint use, and ad results, with app version, distribution market, runtime and timestamps, to Google Firebase and Google Analytics. The analytics service may also process app installation identifiers and technical information. The AppsInToss version also sends usage events to Toss analytics.',
					'From version 1.2.0, usage statistics are on when no previous choice exists. Turning off “사용 통계 보내기” (Send usage stats) in Settings stops subsequent app usage events, and a previous off choice is preserved. This setting is separate from ad consent, ad rewards and notifications. On iOS, Firebase ad storage, ad user data and ad personalization consent signals are denied.'
				]
			},
			{
				title: 'Ads and leaderboards',
				body: [
					'We offer optional rewarded ads for extra hints. Android and iOS request non-personalized ads from Google AdMob. Ad delivery, measurement and fraud prevention may involve IP addresses and derived approximate location, device and app identifiers, ad interactions, diagnostics and performance information. Non-personalized ads may still involve this processing.',
					'iOS 1.2.0 does not request ATT tracking permission or show Google UMP forms, and removes earlier IABTCF_ consent values before ad initialization. Limited ads or no ads may be available in the EEA, UK and Switzerland. Android retains UMP and the advertising privacy choices in Settings. AppsInToss ads use Toss advertising services and policies.',
					'Leaderboards submit scores or display rankings through Google Play Games on Android, Game Center on iOS and the AppsInToss ranking service. Profile and score visibility and deletion of records held by those services follow the platform account settings and policies.'
				]
			},
			{
				title: 'Providers and retention',
				body: [
					'Seori Labs uses Seori Platform, Google Firebase and Google Cloud for authentication and operations, Google Analytics and AppsInToss analytics for usage analysis, and the platforms listed above for ads and rankings. Service requests may process technical logs such as IP addresses, request times, app and device information. Google, Apple and Toss process information under their service policies; providers including Google may process information outside your country.',
					'On-device records may remain until app data is cleared or the app is removed. Server account and operational records and analytics are kept as needed for authentication, reliability, improvement and support, or for a legally required retention period. Ad and ranking records processed separately by platforms follow their retention policies. We do not sell personal information.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Account and data deletion requests',
				body: [
					'To request access, correction, deletion or restriction of your automatic account, server operational records or analytics already sent, email cs@seorilabs.com with the subject “Crossword Puzzle data deletion request.” Include the market used and your request. Pseudonymous accounts are not linked to email, so minimal additional information may be needed to identify the records. Do not send passwords or authentication tokens.',
					'Turning off usage statistics stops future events and is separate from deleting earlier records. Removing the app alone does not delete all server or platform leaderboard records. We retain your support email and attachments as needed to verify and handle your request.'
				]
			},
			{
				title: 'Changes and support',
				body: [
					'This game is not a child-directed service. Check each market’s content rating and local requirements. We update this policy and relevant notices when data handling materially changes.',
					'Privacy and game support: cs@seorilabs.com'
				]
			}
		],
		footerNote: 'Privacy, account and data deletion requests: cs@seorilabs.com'
	}
};
