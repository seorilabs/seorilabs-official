import type { LegalDocContent } from '$lib/legal/types';

export const happyFarmPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '행복 농장 타이쿤 개인정보 처리방침',
		description:
			'행복 농장 타이쿤의 게임 기록, 분석, 광고 및 고객지원 관련 개인정보 처리 안내입니다.',
		kicker: 'Happy Farm Tycoon',
		intro:
			'서리랩스는 행복 농장 타이쿤을 운영하며 게임 제공, 서비스 품질 분석, 광고 제공과 보상 확인, 부정 이용 방지 및 고객지원에 필요한 정보를 처리합니다. 이용하는 배포 채널에 따라 아래의 처리 항목이 달라집니다.',
		lastUpdated: '2026-10-23',
		sections: [
			{
				id: 'game-data',
				title: '게임 기록과 설정',
				body: [
					'작물, 재화, 해금 내역 등 농장 진행 기록과 언어, 소리, 알림 등의 설정은 이용 중인 앱의 저장 공간에 보관합니다. 앱인토스에서는 해당 서비스의 저장 기능을 이용합니다.',
					'게임 이용 과정에서 선택한 작물과 구역, 수확 및 성장 단계, 재화의 변화, 안내 진행 상태, 광고 이용과 오류 등의 정보가 서비스 운영과 분석 목적으로 전송됩니다. 농장 기록 전체가 기기에만 남는다는 의미는 아닙니다.'
				]
			},
			{
				id: 'identity',
				title: '로그인 없이 이용하는 서비스 식별 정보',
				body: [
					'네이티브 앱은 Firebase Authentication의 익명 인증으로 이용자 식별 정보를 처리합니다. 발급된 인증 토큰으로 서비스 서버의 세션을 만들고, 해당 세션을 서버 접속과 광고 보상 확인에 사용합니다. 별도의 이메일이나 비밀번호 입력 없이 이용할 수 있습니다.',
					'앱인토스에서는 플랫폼이 제공하는 이용자 식별키로 서비스 이용을 구분합니다. 분석을 위한 별도의 임의 식별값을 앱인토스 저장 공간에 생성하고 보관합니다. 이러한 식별 정보는 이름을 직접 입력하지 않아도 이용 기록을 구분할 수 있습니다.'
				]
			},
			{
				id: 'analytics',
				title: '이용 현황 분석',
				body: [
					'게임 시작, 튜토리얼, 씨앗 선택, 심기와 수확, 기능 이용 및 광고 결과 등을 Google Analytics for Firebase 또는 서비스의 분석 서버로 전송해 오류와 이용 흐름을 파악합니다. 앱 버전, 운영체제, 언어, 세션 및 분석 식별 정보도 함께 처리될 수 있습니다.',
					'네이티브 앱의 Firebase 분석에는 Google의 SDK가 사용됩니다. 앱인토스의 게임 이용 정보는 분석 서버를 거쳐 Google Analytics로 전달됩니다.'
				]
			},
			{
				id: 'ads',
				title: '광고 제공과 보상 확인',
				body: [
					'네이티브 앱은 Google AdMob, 앱인토스는 해당 플랫폼의 광고 기능을 이용합니다. 보상형 광고와 전면 광고를 제공하며 이용 환경과 광고 준비 상태에 따라 노출 여부가 달라집니다.',
					'네이티브 앱은 개인 맞춤 광고를 요청하지 않도록 설정합니다. 비개인화 광고에도 노출 횟수 관리, 광고 실적 측정 및 부정 이용 방지를 위한 식별 정보가 사용될 수 있습니다. Google Mobile Ads SDK는 IP 주소, 기기 또는 광고 관련 식별 정보, 광고 노출과 상호작용, 진단 및 성능 정보를 처리할 수 있습니다.',
					'광고 보상의 확인과 중복 지급 방지를 위해 서비스 서버가 이용자 식별 정보, 광고 지면과 제공자, 보상 종류 및 값, 요청, 확인 및 수령 시각과 처리 결과를 기록합니다.'
				]
			},
			{
				id: 'notifications',
				title: '알림',
				body: [
					'네이티브 앱의 수확 및 복귀 알림은 로컬 알림 기능을 이용합니다. 앱 설정에서 알림을 끄면 해당 설정이 저장되고 예약된 알림이 취소됩니다. 운영체제의 알림 허용 권한은 기기의 설정에서 따로 변경할 수 있습니다.'
				]
			},
			{
				id: 'storage',
				title: '로컬 기록 관리',
				body: [
					'앱의 농장 초기화 기능은 해당 앱에 저장된 농장 진행 기록을 초기화합니다. 언어 등의 설정이나 서버의 인증, 분석 및 광고 보상 기록까지 함께 삭제하는 기능은 아닙니다.'
				]
			},
			{
				id: 'rights',
				title: '문의와 권리 행사',
				body: [
					'개인정보 열람, 정정, 삭제 또는 처리 정지에 관한 문의는 cs@seorilabs.com으로 보내 주세요. 이용하신 배포 채널과 앱 버전을 알려 주시면 관련 기록을 찾는 데 도움이 됩니다. 비밀번호나 인증 토큰은 보내지 마세요.'
				]
			},
			{
				id: 'contact',
				title: '운영자와 연락처',
				body: ['운영자: 서리랩스(SeoriLabs). 개인정보 및 고객지원 연락처: cs@seorilabs.com.']
			}
		],
		footerNote:
			'이 문서는 행복 농장 타이쿤에 적용됩니다. 이용하시는 플랫폼과 Google 서비스 자체의 개인정보 처리에는 각 제공자의 방침도 적용됩니다.'
	},
	en: {
		title: 'Happy Farm Tycoon Privacy Policy',
		description:
			'How Happy Farm Tycoon handles game records, analytics, advertising and support information.',
		kicker: 'Happy Farm Tycoon',
		intro:
			'SeoriLabs operates Happy Farm Tycoon and processes information to provide the game, understand service quality, deliver ads and verify rewards, prevent abuse and provide support. The information processed depends on the distribution channel you use.',
		lastUpdated: '2026-10-23',
		sections: [
			{
				id: 'game-data',
				title: 'Game records and settings',
				body: [
					'Farm progress, including crops, currencies and unlocked content, and settings such as language, sound and notifications are stored in the app’s storage. The Apps in Toss edition uses storage provided by that service.',
					'During play, information about crop and area choices, harvesting and progression, currency changes, guidance steps, ad activity and errors is transmitted for service operation and analytics. This does not mean that all game information stays only on your device.'
				]
			},
			{
				id: 'identity',
				title: 'Service identifiers without a separate login',
				body: [
					'The native app processes a user identifier through Firebase Authentication’s anonymous authentication. It exchanges the issued authentication token for a service session, which is used for server access and ad reward verification. You can play without entering an email address or password.',
					'The Apps in Toss edition uses an identifier provided by the platform to distinguish service use. It also creates a separate random analytics identifier in Apps in Toss storage. These identifiers can distinguish activity even when you do not enter your name.'
				]
			},
			{
				id: 'analytics',
				title: 'Usage analytics',
				body: [
					'Game starts, tutorial progress, seed selection, planting, harvesting, feature use and ad results are transmitted to Google Analytics for Firebase or the service’s analytics server to understand errors and gameplay flows. App version, operating system, language, session and analytics identifiers may also be processed.',
					'The native app uses Google’s Firebase analytics SDK. Gameplay analytics from the Apps in Toss edition are relayed through an analytics server to Google Analytics.'
				]
			},
			{
				id: 'ads',
				title: 'Advertising and reward verification',
				body: [
					'The native app uses Google AdMob. The Apps in Toss edition uses that platform’s advertising service. Rewarded and interstitial ads are available; their display depends on the environment and ad availability.',
					'The native app is configured to request non-personalized ads. These ads may still use identifiers for frequency capping, performance measurement and fraud prevention. The Google Mobile Ads SDK may process IP addresses, device or advertising identifiers, ad views and interactions, diagnostics and performance information.',
					'To verify ad rewards and prevent duplicate reward grants, our server records service user identifiers, ad placements and providers, reward types and values, request, confirmation and acknowledgement times, and processing results.'
				]
			},
			{
				id: 'notifications',
				title: 'Notifications',
				body: [
					'Harvest and return reminders in the native app use local notifications. Turning reminders off in the app saves that setting and cancels scheduled reminders. Notification permission itself can be changed separately in your device’s operating system settings.'
				]
			},
			{
				id: 'storage',
				title: 'Managing local records',
				body: [
					'Resetting the farm resets locally stored farm progress in that app. It does not also delete settings such as language or server-side authentication, analytics and ad reward records.'
				]
			},
			{
				id: 'rights',
				title: 'Questions and privacy requests',
				body: [
					'For questions about access, correction, deletion or restriction of processing, contact cs@seorilabs.com. Providing your distribution channel and app version can help us locate relevant records. Do not send passwords or authentication tokens.'
				]
			},
			{
				id: 'contact',
				title: 'Operator and contact',
				body: ['Operator: SeoriLabs. Privacy and customer support: cs@seorilabs.com.']
			}
		],
		footerNote:
			'This policy applies to Happy Farm Tycoon. The platform’s and Google’s own policies also apply to their services.'
	}
};
