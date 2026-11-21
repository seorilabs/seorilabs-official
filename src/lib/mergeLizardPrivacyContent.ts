import { site } from '$lib/content';
import type { LegalDocContent } from '$lib/legal/types';
import { mergeLizardAccountDeletionPaths } from '$lib/mergeLizardAccountDeletionContent';
import { mergeLizardOddsPaths } from '$lib/mergeLizardOddsContent';

/**
 * 앰버 리자드(merge-lizard) 앱 전용 개인정보 처리방침.
 * 근거: merge-lizard 승인 설계 docs/design/2026-11-20-launch-prep/design.md(결정 DEC-035~DEC-037)와
 * platform main e317e81의 registry/apps/merge-lizard.json(GA4 중계 없음), 이벤트 테이블 파티션 만료 400일,
 * 광고 보상 claim의 ttlAt 90일, 계정 삭제 작업자(4일 뒤 마무리, 해시 접수 기록 30일)와 IAP 원장 보존 규칙.
 * 앱, 스토어 신고, 플랫폼 정책이 바뀌면 이 문서를 먼저 고친다.
 *
 * 확률 정보와 같이 출시 전 제품이라 제품 원장(registry.ts)에 넣지 않고 경로를 직접 지정한다.
 */
export const mergeLizardPrivacyPaths = [
	{ key: 'ko' as const, path: '/apps/merge-lizard/privacy/' },
	{ key: 'en' as const, path: '/en/apps/merge-lizard/privacy/' }
];

type LocalePath = { key: 'ko' | 'en'; path: string };

/** 본문에 적는 절대 주소. 경로 상수에서 만들어 페이지 이동 때 함께 바뀐다. */
const pathFor = (paths: LocalePath[], key: LocalePath['key']): string => {
	const entry = paths.find((candidate) => candidate.key === key);
	// 경로가 빠지면 빌드에서 바로 실패시킨다. 사이트 루트 같은 엉뚱한 주소를 본문에 남기지 않는다.
	if (!entry) throw new Error(`merge-lizard 문서 경로가 없습니다: ${key}`);
	return `${site.url}${entry.path}`;
};

export const mergeLizardPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '앰버 리자드 개인정보 처리방침',
		description:
			'앰버 리자드(Amber Lizards)의 게스트 계정, 게임 행동 지표, 보상형 광고, 인앱 구매와 데이터 삭제에 관한 개인정보 처리방침입니다.',
		kicker: 'Amber Lizards Privacy Policy',
		lastUpdated: '2026년 11월 21일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 Google Play와 App Store에 배포하는 「앰버 리자드」(Amber Lizards, 패키지와 번들 ID com.seorilabs.mergelizard, 이하 “앱”)에 적용됩니다. 이 앱의 데이터 처리에는 서리랩스 공통 개인정보 처리방침보다 이 문서가 우선합니다. 앱은 이름, 이메일, 전화번호를 묻지 않으며, 서버 기능에는 처음 실행할 때 자동으로 만드는 게스트 계정을 사용합니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 데이터',
				body: [
					'게임 진행과 설정은 이용자의 기기에 저장합니다. 클라우드 저장 기능이 없어서 서버에서 진행을 복구할 수 없고, 앱을 삭제하거나 기기를 바꾸면 기기에 있던 진행도 함께 사라집니다.'
				]
			},
			{
				title: '게스트 계정과 서버에 저장하는 데이터',
				body: [
					'앱을 처음 실행하면 서리랩스 플랫폼 서버가 이름, 이메일, 전화번호 없이 가명 게스트 계정을 자동으로 만듭니다. 로그인은 Google Firebase Authentication의 사용자 지정 토큰으로 이루어지며, Google Firebase가 서리랩스를 위해 인증 정보를 처리합니다.',
					'서버에는 가명 사용자 ID와 Firebase 사용자 ID의 연결, 로그인 세션, 문의할 때 쓰는 지원 코드, 인앱 구매 원장과 구매로 얻은 권리, 30일 호박 수령 기록, 우편함, 광고 보상 지급 기록, 그리고 아래 조건에서 보내는 게임 행동 지표를 저장합니다.',
					'기기 ID나 광고 ID는 서버 계정에 보내지 않습니다. 앱은 원격 설정과 우편함을 받기 위해 서버와 통신하며, 서버와의 통신은 모두 HTTPS로 암호화합니다.'
				]
			},
			{
				title: '게임 행동 지표',
				body: [
					'게임 행동 지표를 켜 두면 튜토리얼 진행, 합치기와 땅 복원, 레벨 상승, 재화 획득과 사용, 상점 열기, 광고 요청과 결과 같은 게임 이벤트와 언어, 앱 버전, 기기 종류(Android 또는 iOS)를 서리랩스 플랫폼 서버로 보냅니다. 구매 이벤트에는 상품 ID, 금액과 통화, 거래 ID가 들어갑니다. 이벤트는 가명 사용자 ID와 연결해 게임 흐름과 경제 균형을 분석하는 데 씁니다.',
					'Android에서는 처음 실행할 때 나오는 “시작하기 전에” 화면에서 “게임 서버로 행동 지표 전송”을 고른 경우에만 보내며, 기본값은 꺼짐입니다. iOS에서는 기본으로 켜져 있습니다. 두 플랫폼 모두 설정의 “게임 행동 지표”에서 언제든 끄거나 다시 켤 수 있고, 끄면 새 이벤트를 보내지 않습니다.',
					'앱에는 Firebase Analytics와 Firebase Crashlytics가 들어 있지 않습니다. 서리랩스 플랫폼 서버는 이 앱의 이벤트를 Google Analytics로 전달하지 않고, 서리랩스가 관리하는 Google Cloud BigQuery에 저장합니다. 행동 지표를 광고 개인화나 다른 앱과의 추적에 쓰지 않습니다.'
				]
			},
			{
				title: '보상형 광고',
				body: [
					'광고는 이용자가 버튼을 눌러 고를 때만 나오는 Google AdMob 보상형 광고뿐이며, 광고를 보지 않아도 게임을 계속할 수 있습니다. 광고 콘텐츠 등급은 최대 T(청소년)로 제한합니다.',
					'Google Mobile Ads SDK는 광고 제공, 성과 측정, 부정 이용 방지를 위해 IP 주소와 그로부터 추정한 대략적 위치, 광고 요청과 노출, 클릭 같은 광고 상호작용, 앱과 SDK의 진단 정보를 처리합니다. Android에서는 광고 ID도 처리합니다. iOS에서는 광고 식별자(IDFA)를 받을 수 없으며, 광고 제공과 부정 이용 방지를 위해 이 앱 또는 같은 개발자의 앱 안에서만 쓰이는 기기 식별자를 처리할 수 있습니다. Google은 이 데이터를 자체 정책에 따라 처리합니다.',
					'Android에서는 유럽경제지역, 영국, 스위스처럼 동의가 필요한 지역의 이용자에게 첫 광고 전에 Google의 동의 양식(UMP)을 보여 주고, 광고 요청은 그 선택을 따릅니다. 이 지역의 이용자는 설정의 “광고 개인정보 선택”에서 선택을 바꾸거나 철회할 수 있습니다. 그 밖의 지역에서는 Google 정책에 따라 맞춤 광고가 표시될 수 있습니다.',
					'iOS 앱은 추적하지 않습니다. 앱 추적 투명성(ATT) 허락을 묻지 않고, 광고 식별자(IDFA)를 쓰지 않으며, 비맞춤 광고만 요청합니다. iOS에서는 UMP 동의 양식도 띄우지 않으며, 유럽경제지역, 영국, 스위스의 iOS 광고 요청에는 Google의 제한 광고가 제공될 수 있습니다.',
					'광고를 끝까지 보면 Google AdMob이 서리랩스 서버에 시청 결과를 알리는 서버 확인(SSV)을 거쳐 보상을 지급합니다. 이를 위해 광고 요청에 가명 플랫폼 사용자 ID와 보상 요청 ID를 담고, 서버에는 광고 위치, 보상 종류와 양, 처리 상태와 시각, 지원 코드를 저장합니다.'
				]
			},
			{
				title: '인앱 구매',
				body: [
					'구매는 Google Play 결제와 Apple App Store 인앱 구매로 이루어지며, 결제 수단과 카드 정보는 각 스토어가 처리합니다. 앱과 Seori Labs는 카드 번호나 계좌 정보를 받지 않습니다.',
					'서리랩스 플랫폼 서버는 구매 토큰이나 거래 ID로 Google Play와 Apple에 구매를 검증한 뒤 상품을 지급하고 복원합니다. 구매 원장에는 가명 사용자 ID, 상품 ID, 스토어 주문 번호, 처리 상태, 구매 시각, 스토어가 알려 준 구매 국가, 스토어 계정 참조값의 해시를 저장하며, 환불 알림을 받으면 원장과 권리에 반영합니다.'
				]
			},
			{
				title: '유료 확률형 아이템',
				body: [
					`수수께끼 알은 유료 확률형 아이템입니다. 등급별, 종별 확률과 천장은 확률 정보 페이지(${pathFor(mergeLizardOddsPaths, 'ko')})에 공개합니다.`,
					'수수께끼 알은 벨기에에서 판매하지 않으며, 판매 여부는 기기의 지역 설정으로 판단합니다.'
				]
			},
			{
				title: '기기 권한',
				body: [
					'Android 앱은 인터넷 연결(INTERNET), 네트워크 상태 확인(ACCESS_NETWORK_STATE), Google Play 결제(BILLING), 진동(VIBRATE), 광고 ID(AD_ID), 광고 SDK의 작업 유지(WAKE_LOCK) 등 동작에 필요한 일반 권한을 사용합니다.',
					'Android와 iOS 앱 모두 위치, 카메라, 마이크, 연락처, 사진처럼 이용자의 허락을 따로 받는 권한은 요청하지 않습니다.'
				]
			},
			{
				title: '처리 위탁과 국외 이전',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다. Google Firebase와 Google Cloud는 게스트 계정 인증, 서버 운영, 행동 지표 저장을 위해 서리랩스의 처리자로서 데이터를 처리합니다. Google AdMob은 보상형 광고를, Google Play와 Apple은 결제와 환불을 각자의 개인정보처리방침에 따라 처리합니다.',
					'데이터는 HTTPS로 암호화해 전송하며, 각 사업자의 서버 위치에 따라 대한민국 밖에서 처리될 수 있습니다. Google의 데이터 처리 방식은 Google 개인정보처리방침(policies.google.com/privacy)에서 확인할 수 있습니다.'
				]
			},
			{
				title: '보관 기간',
				body: [
					'게임 행동 지표 이벤트와 서버 운영 기록(감사 기록)은 서버가 받은 날로부터 최대 400일 보관한 뒤 자동으로 삭제합니다.',
					'광고 보상 확인 기록은 생성 90일 뒤 자동 삭제 대상이 됩니다. 하루 광고 이용 횟수와 지급 기록 같은 나머지 광고 보상 기록, 게스트 계정, 로그인 세션은 계정이 있는 동안 보관하고 계정을 삭제하면 함께 지웁니다.',
					'구매 원장과 구매로 얻은 권리, 30일 호박 수령 기록, 우편함 기록은 구매 확인, 환불 처리, 회계와 분쟁 대응, 관련 법령의 보관 의무를 위해 필요한 기간 동안 보관합니다.',
					'계정 삭제를 처리한 뒤에는 처리 상태 확인과 중복 처리 방지를 위한 해시 접수 기록만 완료 후 30일 동안 보관하고 지웁니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '계정과 데이터 삭제',
				body: [
					`앱 설정의 “계정과 서버 데이터 삭제”에서 직접 삭제하거나, 앱을 다시 설치하지 않고 ${site.email}으로 요청할 수 있습니다.`,
					`삭제 방법, 지워지는 데이터와 남는 기록, 처리 기간은 계정 삭제 안내(${pathFor(mergeLizardAccountDeletionPaths, 'ko')})에 적었습니다.`
				]
			},
			{
				title: '이용자의 권리',
				body: [
					`이용자는 자신의 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. ${site.email}으로 요청해 주세요. 앱 설정에서 지원 코드를 볼 수 있다면 함께 보내 주시면 계정을 찾는 데 도움이 됩니다.`,
					'게스트 계정은 이름이나 이메일과 연결되어 있지 않아, 다른 사람의 데이터를 처리하지 않도록 확인 절차를 안내할 수 있습니다. 비밀번호나 결제 정보는 보내지 마세요.'
				]
			},
			{
				title: '아동',
				body: [
					'이 앱은 13세 이상 이용자를 대상으로 하며 아동을 대상으로 하지 않습니다. 13세 미만 아동의 개인정보를 알면서 수집하지 않습니다.',
					'미성년자는 보호자의 동의와 기기, 스토어의 결제 보호 설정에 따라 인앱 구매를 이용해야 합니다.'
				]
			},
			{
				title: '변경과 문의',
				body: [
					'데이터 처리 방식이 바뀌면 이 페이지의 시행일과 스토어의 개인정보 표시를 함께 갱신합니다.',
					`운영: Seori Labs. 개인정보 문의와 게임 지원: ${site.email}`
				]
			}
		],
		footerNote: '이 제품별 방침은 Google Play와 App Store의 앱 개인정보 표시에 연결됩니다.'
	},
	en: {
		title: 'Amber Lizards Privacy Policy',
		description:
			'Privacy Policy for the guest account, gameplay analytics, rewarded ads, in-app purchases, and data deletion in Amber Lizards.',
		kicker: 'Amber Lizards Privacy Policy',
		lastUpdated: 'November 21, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Amber Lizards (앰버 리자드, package and bundle ID com.seorilabs.mergelizard, the “App”), published by Seori Labs on Google Play and the App Store. For this App, it takes precedence over our general privacy policy. The App does not ask for your name, email address, or phone number. Its server features use a guest account that is created automatically the first time you open the App.',
		sections: [
			{
				title: 'Game data stored on your device',
				body: [
					'Game progress and settings are stored on your device. There is no cloud save, so we cannot restore progress from our servers, and progress on the device is lost if you delete the App or change devices.'
				]
			},
			{
				title: 'Guest account and data stored on our servers',
				body: [
					'The first time you open the App, the Seori Labs platform server automatically creates a pseudonymous guest account without a name, email address, or phone number. Sign-in uses a Google Firebase Authentication custom token, and Google Firebase processes the authentication data on our behalf.',
					'Our servers store the link between your pseudonymous user ID and your Firebase user ID, sign-in sessions, the support code used for inquiries, the in-app purchase ledger and the entitlements you bought, 30-Day Amber claim records, your inbox, ad reward records, and the gameplay analytics described below when they are turned on.',
					'We do not send device IDs or advertising IDs to the server account. The App contacts our servers to receive remote settings and inbox messages, and all communication with our servers is encrypted with HTTPS.'
				]
			},
			{
				title: 'Gameplay analytics',
				body: [
					'When gameplay analytics are on, the App sends game events such as tutorial progress, merging and restoring land, level-ups, earning and spending currency, opening the shop, and ad requests and results, together with your language, app version, and device type (Android or iOS), to the Seori Labs platform server. Purchase events include the product ID, price and currency, and transaction ID. We link these events to your pseudonymous user ID and use them to analyze game flow and economy balance.',
					'On Android, events are sent only if you select “Send gameplay events to the game server” on the “Before you play” screen at first launch; it is off by default. On iOS, it is on by default. On both platforms you can turn it off or back on at any time under “Gameplay analytics” in Settings, and no new events are sent while it is off.',
					'The App does not include Firebase Analytics or Firebase Crashlytics. The Seori Labs platform server does not forward this App’s events to Google Analytics; it stores them in Google Cloud BigQuery managed by Seori Labs. We do not use gameplay analytics for ad personalization or cross-app tracking.'
				]
			},
			{
				title: 'Rewarded ads',
				body: [
					'The only ads are Google AdMob rewarded ads that appear when you choose them by tapping a button, and you can keep playing without watching ads. Ad content is limited to a maximum rating of T (Teen).',
					'To deliver and measure ads and to prevent fraud, the Google Mobile Ads SDK processes your IP address and the approximate location inferred from it, ad interactions such as requests, impressions, and clicks, and app and SDK diagnostic information. On Android it also processes the advertising ID. On iOS it cannot receive the advertising identifier (IDFA), and it may process device identifiers that are limited to this app or to apps from the same developer to deliver ads and prevent fraud. Google processes this data under its own policies.',
					'On Android, users in regions that require consent, such as the European Economic Area, the United Kingdom, and Switzerland, see Google’s consent form (UMP) before the first ad, and ad requests follow that choice. Users in those regions can change or withdraw their choice under “Ad privacy choices” in Settings. In other regions, personalized ads may be shown under Google’s policies.',
					'The iOS app does not track you. It does not ask for App Tracking Transparency (ATT) permission, does not use the advertising identifier (IDFA), and requests non-personalized ads only. The iOS app does not show the UMP consent form, and iOS ad requests from the European Economic Area, the United Kingdom, and Switzerland may be served as Google limited ads.',
					'When you watch an ad to the end, Google AdMob reports the result to our server through server-side verification (SSV), and the reward is granted after that check. For this, the ad request carries your pseudonymous platform user ID and a reward request ID, and our server stores the ad placement, reward type and amount, processing status and timestamps, and your support code.'
				]
			},
			{
				title: 'In-app purchases',
				body: [
					'Purchases are made through Google Play Billing and Apple App Store in-app purchase, and each store handles your payment method and card details. Neither the App nor Seori Labs receives card numbers or bank account details.',
					'The Seori Labs platform server verifies each purchase with Google Play or Apple using the purchase token or transaction ID before granting or restoring the item. The purchase ledger stores your pseudonymous user ID, product ID, store order number, processing status, purchase time, the purchase country reported by the store, and a hash of the store account reference, and it records refunds when the store notifies us.'
				]
			},
			{
				title: 'Paid random items',
				body: [
					`The Mystery Egg is a paid random item. Odds by rarity and by species, and the pity rule, are published on the odds page (${pathFor(mergeLizardOddsPaths, 'en')}).`,
					'The Mystery Egg is not sold in Belgium, and availability is decided from the device region setting.'
				]
			},
			{
				title: 'Device permissions',
				body: [
					'The Android app uses standard permissions it needs to work, such as internet access (INTERNET), network state (ACCESS_NETWORK_STATE), Google Play Billing (BILLING), vibration (VIBRATE), the advertising ID (AD_ID), and keeping ad SDK work running (WAKE_LOCK).',
					'Neither the Android nor the iOS app requests permissions that need your separate approval, such as location, camera, microphone, contacts, or photos.'
				]
			},
			{
				title: 'Service providers and international transfers',
				body: [
					'Seori Labs does not sell personal data. Google Firebase and Google Cloud process data on our behalf for guest-account authentication, server operations, and storing gameplay analytics. Google AdMob handles rewarded ads, and Google Play and Apple handle payments and refunds under their own privacy policies.',
					'Data is encrypted in transit with HTTPS and may be processed outside your country, including outside the Republic of Korea, depending on where each provider’s servers are located. For how Google handles data, see the Google Privacy Policy (policies.google.com/privacy).'
				]
			},
			{
				title: 'Retention',
				body: [
					'Gameplay analytics events and server operation (audit) records are kept for up to 400 days from the day the server receives them, then deleted automatically.',
					'Ad reward verification records are scheduled for automatic deletion 90 days after they are created. Other ad reward records, such as daily ad counts and grant records, as well as the guest account and sign-in sessions, are kept while the account exists and are deleted when you delete the account.',
					'The purchase ledger, the entitlements you bought, 30-Day Amber claim records, and inbox records are kept as long as needed to confirm purchases, handle refunds, support accounting and disputes, and meet legal retention obligations.',
					'After an account deletion is processed, only a hashed request record, used to check the deletion status and prevent duplicate processing, is kept for 30 days after completion and then deleted.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Account and data deletion',
				body: [
					`You can delete your account and server data directly from the App’s Settings, or request deletion by emailing ${site.email} without reinstalling the App.`,
					`The deletion page (${pathFor(mergeLizardAccountDeletionPaths, 'en')}) explains how to request deletion, which data is deleted, which records are kept, and how long it takes.`
				]
			},
			{
				title: 'Your rights',
				body: [
					`You can ask to access, correct, or delete your personal data, or to stop its processing, by emailing ${site.email}. If you can see a support code in the App’s Settings, please include it so we can find your account.`,
					'Guest accounts are not linked to a name or email address, so we may ask you to complete a verification step to avoid acting on someone else’s data. Do not send passwords or payment details.'
				]
			},
			{
				title: 'Children',
				body: [
					'The App is intended for users aged 13 and over and is not directed to children. We do not knowingly collect personal data from children under 13.',
					'Minors should make in-app purchases only with a guardian’s consent and the payment protections set on their device and store account.'
				]
			},
			{
				title: 'Changes and contact',
				body: [
					'If our data handling changes, we will update the effective date on this page and the App’s store privacy disclosures together.',
					`Operator: Seori Labs. Privacy questions and game support: ${site.email}`
				]
			}
		],
		footerNote:
			'This product-specific policy is linked from the App’s privacy disclosures on Google Play and the App Store.'
	}
};
