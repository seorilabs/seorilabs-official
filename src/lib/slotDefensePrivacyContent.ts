import type { LegalDocContent } from '$lib/legal/types';

export const slotDefensePrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: 'Titanstride: Core Defense 개인정보 처리방침',
		description:
			'Titanstride: Core Defense의 기기 저장, 통계와 오류 보고, 원격 설정, 보상형 광고와 인앱 구매에 관한 개인정보 안내입니다.',
		kicker: 'Titanstride: Core Defense Privacy Policy',
		lastUpdated: '2026년 11월 16일',
		intro:
			'이 방침은 Seori Labs의 Titanstride: Core Defense(타이탄스트라이드: 코어 디펜스, 패키지와 번들 ID com.seorilabs.slotdefense) Android와 iOS 앱에 적용되며, 이 게임의 처리에는 공통 방침보다 우선합니다. 테스트 기간의 이전 이름은 Slot Defense입니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 기록',
				body: [
					'캠페인 진행, 영웅과 강화, 전투 복구 기록, 일일 도전과 무한 방어 기록, 설정, 그리고 중복 지급을 막기 위한 구매 처리 기록은 기기에 저장합니다. 게임 계정과 클라우드 진행 저장은 없습니다. 인터넷 없이 플레이할 수 있으며 앱 삭제나 데이터 초기화 시 진행이 사라질 수 있습니다. 영구 구매 상품은 스토어의 구매 복원으로 다시 받을 수 있습니다.'
				]
			},
			{
				title: '이용 통계, 오류 보고와 원격 설정',
				body: [
					'앱은 Google Firebase Analytics와 Crashlytics를 사용합니다. 설정의 이용 통계 항목은 기본으로 켜져 있습니다. 화면 이동, 튜토리얼, 전투, 보상, 강화, 광고 시청과 구매 결과 같은 게임 이벤트와 앱 버전, 언어, 실행 환경을 보냅니다. Firebase는 앱 인스턴스와 설치 식별자, 기기 모델과 운영체제, 세션 및 국가 수준 위치 정보를 처리할 수 있습니다. 게임은 사용자 ID를 보내지 않습니다.',
					'Crashlytics는 충돌 스택, 설치 식별자, 기기와 앱 상태, 진단 기록을 처리합니다. 오류 메시지 본문이나 게임 저장 파일은 보내지 않습니다.',
					'앱은 Firebase Remote Config에서 광고 표시 여부와 업데이트 안내 같은 설정 값을 받아 옵니다. 이 과정에서 설치 식별자와 앱, 기기 정보가 처리될 수 있습니다.',
					'설정에서 이용 통계를 끄면 새 게임 이벤트와 진단 기록 전송을 멈추고 보내지 않은 이벤트를 버립니다. Crashlytics 수집 중단은 다음 실행부터 적용됩니다. 이미 전송된 자료의 삭제는 cs@seorilabs.com으로 문의할 수 있습니다.'
				]
			},
			{
				title: '보상형 광고와 동의',
				body: [
					'광고는 플레이어가 직접 고를 때만 나옵니다. 결과 보상 2배, 이어하기, 일일 보급 버튼을 누르면 Google AdMob 보상형 광고를 보여 주고, 끝까지 시청하면 기기에서 보상을 지급합니다. 전면 광고와 배너 광고는 없습니다. 광고를 볼 수 없거나 광고 요청이 허용되지 않아도 게임은 그대로 이용할 수 있습니다.',
					'Google Mobile Ads SDK와 User Messaging Platform(UMP)은 광고 제공, 측정, 진단, 동의 관리와 부정 이용 방지를 위해 IP 주소, 광고와 앱 상호작용, 성능과 진단 정보, 앱 또는 기기 식별자를 처리하고 공유할 수 있습니다. Android에서는 동의 상태와 지역 규정이 허용하는 범위에서 맞춤 광고가 나올 수 있고, 광고 ID가 쓰일 수 있습니다. 광고 ID는 Android 설정에서 재설정하거나 삭제할 수 있습니다. iOS에서는 앱 추적 허용을 요청하지 않으며 개인 맞춤이 아닌 광고만 요청합니다. IP 주소로 대략적인 위치를 추정할 수 있습니다.',
					'앱은 실행할 때마다 동의 상태를 확인하고 SDK가 광고 요청을 허용한 경우에만 광고를 준비합니다. 유럽 경제 지역, 영국, 스위스와 미국 일부 주에서는 동의나 선택 양식이 나올 수 있으며, 설정의 광고 개인정보 설정에서 언제든 다시 바꿀 수 있습니다.'
				]
			},
			{
				title: '인앱 구매',
				body: [
					'합금 팩, 스타터 팩, 광고 없이 보상 받기, 영웅 같은 상품은 Google Play 결제 또는 Apple App Store로 판매합니다. 결제와 카드 정보는 각 스토어가 처리하며 당사는 받지 않습니다. 앱은 상품 ID, 구매 상태와 스토어가 발급한 주문 또는 거래 식별자를 받아 기기에서 보상을 한 번만 지급하는 데 사용합니다. 유료 무작위 상품은 판매하지 않습니다.',
					'환불과 구독이 아닌 구매 내역은 각 스토어의 절차를 따릅니다. 구매 문제는 주문 번호와 함께 cs@seorilabs.com으로 문의하세요.',
					'게임은 위치, 연락처, 사진, 카메라와 마이크 권한을 요청하지 않습니다.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Google(Firebase, Google Analytics, AdMob, UMP, Google Play)과 Apple(App Store)이 각 기능을 처리합니다. 앱과 서비스 사이 통신은 HTTPS/TLS로 암호화합니다. 각 사업자의 글로벌 인프라에서 대한민국 밖의 처리가 이뤄질 수 있습니다. 자세한 내용은 https://policies.google.com/privacy , https://firebase.google.com/support/privacy , https://developers.google.com/admob/android/privacy/play-data-disclosure , https://www.apple.com/legal/privacy/ 를 참고하세요.'
				]
			},
			{
				title: '보관, 삭제와 문의',
				body: [
					'로컬 진행과 구매 처리 기록은 기기의 앱 저장공간이 삭제될 때까지 남습니다. 당사는 서버에 진행 사본을 보관하지 않아 문의로 진행을 복원할 수 없습니다. Firebase와 광고 자료는 각 서비스의 보관 설정과 삭제 절차를 따르며, 진행 초기화나 앱 삭제가 Google에서 처리한 모든 기록을 즉시 지운다는 뜻은 아닙니다.',
					'이메일로 문의하면 발신 이메일, 문의 내용과 직접 첨부한 자료를 요청 해결에 필요한 동안 처리한 뒤 삭제합니다. 개인정보의 열람, 정정, 삭제, 처리 제한은 cs@seorilabs.com으로 문의하세요. 비밀번호와 인증 토큰은 보내지 마세요.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 지역별 스토어 등급을 함께 적용합니다. 처리 방식이 바뀌면 이 페이지의 내용과 시행일, 스토어의 개인정보 신고를 함께 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Titanstride: Core Defense Privacy Policy',
		description:
			'Local storage, analytics and crash reports, remote configuration, rewarded ads and in-app purchases in Titanstride: Core Defense.',
		kicker: 'Titanstride: Core Defense Privacy Policy',
		lastUpdated: 'November 16, 2026',
		intro:
			'This policy applies to the Titanstride: Core Defense apps for Android and iOS (package and bundle ID com.seorilabs.slotdefense) by Seori Labs and takes precedence over our general policy for this game. The game was called Slot Defense during testing.',
		sections: [
			{
				title: 'Game records on your device',
				body: [
					'Campaign progress, heroes and upgrades, battle recovery data, daily and endless records, settings, and purchase records used to prevent duplicate grants stay on your device. There are no game accounts or cloud saves. You can play offline. Uninstalling the app or clearing app data may remove progress. Permanent purchases can be recovered with the store’s restore purchases.'
				]
			},
			{
				title: 'Analytics, crash reports and remote configuration',
				body: [
					'The app uses Google Firebase Analytics and Crashlytics. The analytics setting is on by default. We send game events such as screen changes, tutorial steps, battles, rewards, upgrades, ad views and purchase results, with app version, language and runtime. Firebase may process app-instance and installation identifiers, device model and operating system, sessions and country-level location. The game does not set a user ID.',
					'Crashlytics processes crash stacks, installation identifiers, device and app state, and diagnostic records. It does not send error-message bodies or game save files.',
					'The app fetches settings such as whether ads are shown and update notices from Firebase Remote Config, which may process installation identifiers and app and device information.',
					'Turning off analytics in Settings stops new game events and diagnostic logging and discards queued events. Crashlytics changes take effect on the next launch. Contact cs@seorilabs.com about deleting data already sent.'
				]
			},
			{
				title: 'Rewarded ads and consent',
				body: [
					'Ads appear only when you choose them. Tapping double rewards, continue or daily supply shows a Google AdMob rewarded ad, and the reward is granted on your device after you finish watching. There are no interstitial or banner ads. The game remains playable when ads are unavailable or requests are not permitted.',
					'Google Mobile Ads SDK and User Messaging Platform (UMP) may process and share IP addresses, ad and app interactions, performance and diagnostic information, and app- or device-scoped identifiers for advertising, measurement, diagnostics, consent management and fraud prevention. On Android, personalized ads may be shown where your consent choices and local rules allow, and the advertising ID may be used; you can reset or delete it in Android settings. On iOS the app does not ask for tracking permission and requests only non-personalized ads. IP addresses can infer approximate location.',
					'The app checks consent each session and prepares ads only when the SDK permits requests. In the EEA, the UK, Switzerland and some US states a consent or choice form may appear, and you can change your choice any time in Settings under ad privacy choices.'
				]
			},
			{
				title: 'In-app purchases',
				body: [
					'Products such as alloy packs, the starter pack, ad-free rewards and heroes are sold through Google Play Billing or the Apple App Store. The store processes payment and card details; we do not receive them. The app receives the product ID, purchase state and the store’s order or transaction identifier and uses them on the device to grant each purchase once. We do not sell paid random items.',
					'Refunds and purchase history follow each store’s procedures. For purchase problems, email cs@seorilabs.com with your order number.',
					'The game does not request location, contacts, photo library, camera or microphone permission.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Google (Firebase, Google Analytics, AdMob, UMP, Google Play) and Apple (App Store) process their respective features. App-service communication uses HTTPS/TLS encryption. Their global infrastructure may process data outside the Republic of Korea. See https://policies.google.com/privacy , https://firebase.google.com/support/privacy , https://developers.google.com/admob/android/privacy/play-data-disclosure and https://www.apple.com/legal/privacy/ .'
				]
			},
			{
				title: 'Retention, deletion and support',
				body: [
					'Local progress and purchase records stay until the device’s app storage is removed. We keep no server copy of progress and cannot restore it through support. Firebase and advertising data follow each service’s retention settings and deletion procedures; resetting progress or uninstalling does not immediately erase every record processed by Google.',
					'If you email us, we process your sender address, message and attachments you choose to send as needed to resolve your request, then delete them. Contact cs@seorilabs.com for access, correction, deletion or restriction requests. Do not send passwords or authentication tokens.'
				]
			},
			{
				title: 'Age and changes',
				body: [
					'The game is intended for ages 13 and older, subject to regional store ratings. When processing changes, we update this page, its effective date and the store privacy disclosures.'
				]
			}
		],
		footerNote: 'Privacy and game support: cs@seorilabs.com'
	}
};
