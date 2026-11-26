import type { LegalDocContent } from '$lib/legal/types';

export const titanstridePrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: 'Titanstride 개인정보 처리방침',
		description: 'Titanstride의 기기 저장, Android 보상형 광고와 선택형 사용 통계를 안내합니다.',
		kicker: 'Titanstride Privacy Policy',
		lastUpdated: '2026년 11월 26일',
		intro:
			'이 방침은 Seori Labs의 Titanstride Android 광고 전용판(com.seorilabs.titanstride.android)과 기존 무료 테스트판(com.seorilabs.titanstride)에 적용됩니다. 두 버전 모두 계정 없이 오프라인으로 플레이할 수 있습니다. Titanstride의 개인정보 처리에는 이 방침이 적용됩니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 기록',
				body: [
					'캠페인 진행과 보상, 영웅·장비 강화, 해금한 무기, 무한 방어 진행, 진행 중인 전투와 설정을 기기에 저장합니다. 손상된 저장을 복구하기 위한 로컬 백업도 기기에 보관합니다. 게임 계정을 만들거나 진행 기록을 당사 서버에 올리지 않으며 기기 간 이전을 제공하지 않습니다.'
				]
			},
			{
				title: 'Android 광고 전용판의 보상형 광고',
				body: [
					'Android 광고 전용판은 무한 방어에서 분대를 부활시키는 선택형 보상 광고를 제공합니다. 광고 없이도 전투를 종료하고 기록과 보상을 저장할 수 있습니다. 인앱 결제와 계정 연결은 제공하지 않습니다.',
					'광고에는 Google AdMob과 Google 사용자 메시지 플랫폼(UMP)을 사용합니다. 이 과정에서 Google은 IP 주소(대략적인 위치 추정에 사용), 앱·광고 이용 정보, 성능·진단 정보, Android 광고 ID와 앱 범위 식별자 등 기기 식별자를 광고 게재·측정과 부정 사용 방지에 처리할 수 있습니다. Google SDK의 전송에는 TLS 암호화가 적용됩니다.',
					'적용되는 지역에서는 Google 광고 동의 화면에서 선택할 수 있습니다. 변경이 필요한 지역에서는 게임 설정의 광고 개인정보 옵션에서 다시 선택할 수 있으며, Android 설정에서 광고 ID를 초기화하거나 삭제할 수도 있습니다. Google의 광고 데이터 처리 안내는 https://policies.google.com/technologies/partner-sites 에서 확인할 수 있습니다.'
				]
			},
			{
				title: 'Android 사용 통계',
				body: [
					'Android 버전에서 설정에 사용 통계 항목이 있는 경우, 해당 항목을 켜면 게임 개선을 위해 Firebase용 Google 애널리틱스로 세션과 전투 시작·결과를 보냅니다. Google은 집계를 위해 앱 인스턴스 식별자, 앱 버전과 기기 정보, IP 주소로 추정한 대략적인 위치를 처리할 수 있습니다.',
					'사용 통계는 기본으로 꺼져 있습니다. 게임 설정에서 언제든 끌 수 있으며, 사용 통계와 광고 개인정보는 각각 선택할 수 있습니다.'
				]
			},
			{
				title: '기존 무료 테스트판의 SDK',
				body: [
					'기존 무료 테스트판에는 광고가 없으며 Google Firebase Core, Analytics, Crashlytics와 마켓 결제·로그인 연결용 라이브러리가 포함됩니다. Firebase의 자동 분석·오류 보고 수집과 광고 관련 동의 신호는 빌드 설정에서 꺼져 있고 게임은 이를 다시 켜지 않습니다. 테스트 버전은 사용 통계나 오류 보고 전송 기능을 제공하지 않습니다.',
					'마켓 결제·계정 연결 라이브러리가 포함됐다는 이유로 무료 플레이 중 계정이나 구매 기록을 만드는 것은 아닙니다. 이 테스트의 서버 주소와 상품 연결은 비어 있습니다. 향후 수집이나 결제·로그인을 제공하면 방침과 스토어 신고를 먼저 갱신합니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'게임 기록은 앱의 저장공간을 지울 때까지 기기에 남습니다. 앱 삭제나 운영체제의 앱 데이터 삭제 시 진행을 잃을 수 있습니다. 당사는 서버에 진행 사본을 보관하지 않아 문의로 복구할 수 없습니다. Android에서는 앱 데이터의 운영체제 백업을 끕니다. iOS 백업은 사용자의 운영체제 설정에 따라 처리될 수 있으며 당사가 제공하는 기기 간 이전 기능이 아닙니다.'
				]
			},
			{
				title: '스토어와 서비스 제공자',
				body: [
					'앱 설치, 업데이트와 테스트 참여 과정은 해당 스토어가 자체 정책에 따라 처리합니다. 당사는 스토어에서 제공하는 개발자용 처리 상태와 테스트 피드백을 볼 수 있습니다. Google과 Apple의 개인정보 처리는 https://policies.google.com/privacy 및 https://www.apple.com/legal/privacy/ 를 참고하세요.'
				]
			},
			{
				title: '문의 정보와 이용자 권리',
				body: [
					'이메일로 문의하면 발신 이메일과 문의 내용, 자발적으로 첨부한 자료를 답변과 요청 처리에 사용합니다. 해결에 필요한 기간만 보관한 뒤 삭제합니다. 비밀번호, 인증 토큰이나 불필요한 개인정보는 보내지 마세요.',
					'문의 자료의 열람·정정·삭제·처리 제한은 cs@seorilabs.com으로 요청할 수 있습니다. 지원팀은 대한민국에서 요청을 처리하며 이메일 서비스는 제공자의 처리 장소와 보관 정책을 따릅니다.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 지역별 스토어 등급도 적용됩니다. 처리 방식이 바뀌면 이 방침의 시행일과 내용을 갱신합니다.'
				]
			},
			{
				title: '연락처',
				body: [
					'개인정보와 게임 지원 문의: Seori Labs, cs@seorilabs.com. 한국어와 영어로 문의할 수 있습니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Titanstride Privacy Policy',
		description:
			'How Titanstride stores progress and handles rewarded ads and optional usage statistics on Android.',
		kicker: 'Titanstride Privacy Policy',
		lastUpdated: 'November 26, 2026',
		intro:
			'This policy applies to Titanstride by Seori Labs, including the ad-supported Android edition (com.seorilabs.titanstride.android) and the earlier free test (com.seorilabs.titanstride). Both editions can be played offline without an account.',
		sections: [
			{
				title: 'Game data on your device',
				body: [
					'Campaign progress and rewards, hero and equipment upgrades, unlocked weapons, endless defense progress, unfinished battles and settings are stored on your device. A recovery backup also stays on the device. The game does not create accounts, upload progress to our servers or transfer progress between devices.'
				]
			},
			{
				title: 'Rewarded ads in the Android edition',
				body: [
					'The ad-supported Android edition offers an optional ad to revive your squad in endless defense. You can end the run and save your record and rewards without watching an ad. The Android edition offers no in-app purchases or account linking.',
					'We use Google AdMob and the Google User Messaging Platform (UMP). Google may process your IP address to estimate general location, app and ad interactions, performance and diagnostic data, and identifiers such as the Android advertising ID and app set ID. Google uses this data to serve and measure ads and prevent fraud. The SDK encrypts data in transit with TLS.',
					'Where applicable, you can make choices in the Google consent prompt and revisit them through Ad privacy options in the game settings. You can also reset or delete your advertising ID in Android settings. See https://policies.google.com/technologies/partner-sites for more about how Google handles ad data.'
				]
			},
			{
				title: 'Usage statistics on Android',
				body: [
					'In Android versions with a Usage statistics option in Settings, you can turn it on to help us improve the game. We use Google Analytics for Firebase to measure sessions, battle starts and battle results. Google may process an app instance identifier, app version and device information, and approximate location derived from your IP address for these reports.',
					'Usage statistics is off by default. You can turn it off at any time in Settings. Usage statistics and ad privacy are separate choices.'
				]
			},
			{
				title: 'SDKs in the earlier free test',
				body: [
					'The earlier free test has no ads. It includes Google Firebase Core, Analytics and Crashlytics, plus libraries for market purchases and sign-in. Automatic Analytics and crash-report collection, and advertising consent signals, are disabled in the build settings. The game does not enable them. This test has no feature for sending usage statistics or crash reports.',
					'Bundled purchase and sign-in libraries do not create a game account or purchase record during free play. This test has no configured server address or registered product mapping. We will update this policy and store disclosures before enabling collection, purchases or account linking.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Game data remains on your device until its app storage is removed. Uninstalling the app or clearing app data can remove progress. We keep no server copy and cannot restore progress through support. Android OS app-data backup is disabled. iOS backups may operate under your OS settings; they are not a progress-transfer service provided by us.'
				]
			},
			{
				title: 'Stores and providers',
				body: [
					'The relevant store processes installation, updates and test participation under its own policy. We can view developer-facing processing status and test feedback provided by the store. See https://policies.google.com/privacy and https://www.apple.com/legal/privacy/ for Google and Apple privacy practices.'
				]
			},
			{
				title: 'Support information and your rights',
				body: [
					'If you email us, we use your sender address, message and voluntarily attached information to answer and handle your request. We retain it only as needed to resolve the request and then delete it. Do not send passwords, authentication tokens or unnecessary personal information.',
					'You can request access, correction, deletion or restriction of your support information at cs@seorilabs.com. Support is handled from the Republic of Korea; email services process information under their own location and retention policies.'
				]
			},
			{
				title: 'Age and changes',
				body: [
					'The game is intended for ages 13 and older, subject to regional store ratings. We update this policy and its effective date when processing changes.'
				]
			},
			{
				title: 'Contact',
				body: [
					'Privacy and game support: Seori Labs, cs@seorilabs.com. We accept messages in English and Korean.'
				]
			}
		],
		footerNote: 'Privacy and game support: cs@seorilabs.com'
	}
};
