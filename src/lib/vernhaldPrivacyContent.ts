import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const vernhaldPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '베른할드 연대기 개인정보 처리방침',
		description:
			'베른할드 연대기의 기기 내 저장, 선택형 이용 통계, 보상형 광고, 인앱 구매에 관한 개인정보 처리방침입니다.',
		kicker: 'Vernhald Chronicles Privacy Policy',
		lastUpdated: '2026년 10월 7일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「베른할드 연대기」(패키지명 com.seorilabs.vernhald, 이하 “앱”)에 적용됩니다. 도전과 무한모드는 오프라인으로 플레이할 수 있으며, 선택형 정기 리그에는 인터넷 연결이 필요합니다. 앱의 실제 데이터 처리와 스토어 표시가 공통 방침과 다른 경우 이 제품별 방침이 우선합니다.',
		sections: [
			{
				title: '계정과 식별자',
				body: [
					'회원가입, Apple 로그인, Google 로그인 화면은 없습니다. 상점의 보유 내역 확인·구매·복원 또는 리그 연결에 Firebase 익명 인증으로 발급한 무작위 이용자 식별자를 사용합니다. 서버는 이 식별자로 구매 권한, 덱과 경기 기록을 구분합니다. 스토어 자체의 결제 인증은 필요할 수 있으며 채팅 기능은 없습니다.',
					'앱은 이름, 이메일, 전화번호, 생년월일을 묻지 않습니다. 리그 식별자는 분석 도구의 사용자 ID로 설정하지 않습니다.',
					'앱은 위치, 연락처, 사진, 카메라, 마이크, 건강 정보에 접근하지 않습니다.'
				]
			},
			{
				title: '기기에만 저장되는 데이터',
				body: [
					'일반 도전과 무한모드의 진행 저장 및 다음 설정은 기기에 저장됩니다. 리그 준비판의 명령 기록과 완성 덱은 아래 설명과 같이 서버에 제출됩니다.',
					'판과 판 사이의 진행 상황(해금한 도전 단계, 최고 라운드, 최근 판 기록), 진행 중인 판, 설정(언어, 소리, 진동, 이용 통계 공유 선택, 받침대 색), 보유한 상품 목록과 심사용 코드 사용 여부, 그리고 광고 노출 빈도 제한을 적용하기 위한 날짜별 보상형 광고 노출 횟수입니다.',
					'Android 시스템 백업을 사용하지 않습니다. 일반 진행과 설정을 위한 클라우드 저장은 제공하지 않으며 삭제된 진행을 구매 복원으로 되돌리지는 않습니다. 비소모성 상품 권한은 아래의 스토어 구매 내역으로 복원할 수 있습니다.'
				]
			},
			{
				title: '정기 리그와 서버 데이터',
				body: [
					'리그를 선택하면 익명 이용자 식별자, 준비판의 설정·시드·성공한 명령 기록, 제출한 덱과 배치, 구매 확장 권한, 참가 기간, 평점, 시즌·경기 기록과 재생 자료를 서버에서 처리합니다. 덱 검증, 경기 편성, 부정 이용 방지, 순위와 결과 제공에 사용합니다.',
					'등록 덱, 평점과 경기 결과는 상대 이용자 또는 리그 순위에 표시될 수 있습니다. 구매 토큰과 준비판의 전체 명령 기록은 다른 이용자에게 공개하지 않습니다.',
					'Firebase App Check는 Android의 Play Integrity와 iOS의 App Attest로 앱과 요청의 진위를 확인합니다. 서버는 요청을 처리할 때 IP 주소와 요청·오류 정보를 운영 로그로 처리할 수 있습니다.',
					'참가 해제 또는 7일 참가 기간 만료는 새 경기 편성만 중단합니다. 덱, 평점과 지난 기록은 삭제되지 않으며 다음 시즌에도 보관됩니다. 앱 삭제 역시 서버 데이터를 지우지 않습니다. 서버 데이터 삭제는 아래 연락처로 요청할 수 있으며, 다른 이용자의 데이터를 보호하기 위해 본인 확인 후 처리합니다.'
				]
			},
			{
				title: '이용 통계(선택)',
				body: [
					'앱을 처음 실행하면 이용 통계를 공유할지 한 번 묻습니다. 이용자가 답하기 전이나 공유하지 않기로 선택하면 이용 통계와 오류 보고서를 수집하지 않습니다. 이 선택은 리그 운영에 필요한 데이터 처리와 별개입니다. 이 선택은 설정에서 언제든 바꿀 수 있습니다.',
					'공유를 켜면 Google Firebase 애널리틱스로 게임 이벤트가 전송됩니다. 판 시작과 종료(도전 단계, 라운드, 남은 체력), 강화 카드 선택, 보상형 광고의 요청·노출·실패·보상 획득, 상품 구매 결과(상품 ID와 완료·대기·취소·실패)가 해당하며, 앱 마켓·플랫폼·앱 버전이 함께 담깁니다. 여기에 Firebase 앱 인스턴스 ID와 Firebase가 자동으로 수집하는 기기·앱 정보가 더해집니다.',
					'Android 앱이 비정상 종료되면 Firebase Crashlytics로 오류 보고서(기기 모델, OS 버전, 오류 발생 지점의 스택 트레이스)가 전송됩니다. 오류 보고서도 이용 통계와 같은 선택을 따릅니다.',
					'애널리틱스의 광고 저장(ad storage), 광고 사용자 데이터(ad user data), 광고 개인 맞춤(ad personalization) 동의는 항상 거부로 설정되어 있습니다. 사용자 ID는 설정하지 않습니다.'
				]
			},
			{
				title: '광고',
				body: [
					'앱에는 이용자가 원할 때만 보는 보상형 광고만 있습니다. 전면 광고, 배너 광고, 앱 시작 광고는 없습니다. 광고는 Google AdMob이 제공합니다.',
					'광고를 불러오기 전에, 법령이 요구하는 지역(예: 유럽경제지역, 영국)에서는 Google 사용자 메시지 플랫폼(UMP)이 동의 양식을 보여 줍니다. 해당 지역에서는 설정에 “광고 개인정보 설정” 항목이 나타나 선택을 다시 바꿀 수 있습니다.',
					'광고를 이용하면 Google과 광고 파트너가 자체 정책에 따라 IP 주소와 그로부터 추정한 대략적 위치, 광고 ID, 광고 상호작용, 진단 정보를 처리할 수 있습니다.',
					'앱이 요청하는 광고 콘텐츠 등급의 상한은 청소년(Teen)입니다.'
				]
			},
			{
				title: '인앱 구매',
				body: [
					'앱에는 선택형 비소모성 일회성 상품 두 개(“확장 팩 1: 해적과 태엽”, “광고 없는 보상”)가 있습니다. 각 기기의 Google Play 또는 App Store 결제로 판매합니다.',
					'카드번호 같은 결제 정보는 마켓이 처리하며 Seori Labs는 받지 않습니다.',
					'구매·복원 때 상품 ID와 Google Play 구매 토큰 또는 App Store 서명 거래와 거래 ID를 서버에 보내 해당 마켓의 구매·환불 상태를 검증합니다. 서버는 마켓, 검증 환경, 거래와 상품, 구매 증명, 익명 이용자별 권한 연결, 거래 완료 여부를 보관하여 구매 제공·복원·부정 이용 방지에 사용합니다. 확인된 환불이나 철회는 상품 권한에 반영하되 게임 진행과 덱 기록을 삭제하지 않습니다. 테스트 구매와 테스트 리그는 실제 구매·공식 리그 원장과 분리합니다.',
					'같은 마켓 계정의 보유 기록으로 새 설치나 새 익명 이용자에게 비소모성 상품을 복원할 수 있습니다. Android와 iOS 사이 구매 공유, 기존 익명 이용자의 진행·덱·점수 이전이나 병합은 제공하지 않습니다. 스토어 심사 코드는 기기의 체험만 열며 서버의 구매 증명으로 인정하지 않습니다.'
				]
			},
			{
				title: '처리 목적',
				body: [
					'기기에 저장하는 데이터는 게임을 실행하고 진행 상황을 이어 가기 위해 처리합니다.',
					'이용 통계와 오류 보고서는 이용자가 동의한 경우에만 앱 안정성 개선과 게임 균형 조정을 위해 처리합니다.',
					'광고와 구매 관련 처리는 보상형 광고와 일회성 상품을 제공하기 위해 이루어집니다.'
				]
			},
			{
				title: '처리 위탁과 국외 이전',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다.',
					'Google이 Firebase Auth, App Check와 Play Integrity, Firestore, Cloud Run, Cloud Storage, Firebase 애널리틱스, Firebase Crashlytics, AdMob, Google Play 결제를 위해 데이터를 처리합니다. 리그 서버와 데이터 저장소의 기본 리전은 대한민국 서울입니다. Google의 처리는 Google 개인정보처리방침과 AdMob 정책을 따릅니다.',
					'Apple은 App Store 결제·구매 검증·환불 알림과 App Attest를 처리합니다. 결제 수단 정보는 해당 스토어가 처리합니다. Google과 Apple은 데이터를 대한민국 밖에서 처리할 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기에 저장된 데이터는 앱을 삭제할 때까지 보관되며, 앱을 삭제하면 함께 지워집니다.',
					'분석 데이터는 Google 애널리틱스에 설정된 보관 기간 동안 보관된 뒤 삭제되거나 집계됩니다.',
					`분석 데이터나 서버에 보관된 구매 권한 연결·리그 데이터의 삭제를 요청하거나 문의하려면 ${site.email}로 연락해 주세요.`
				]
			},
			{
				title: '이용자의 선택',
				body: [
					'이용 통계와 오류 보고서 공유는 설정에서 언제든 켜거나 끌 수 있습니다.',
					'광고 동의가 필요한 지역에서는 설정의 “광고 개인정보 설정”에서 광고 관련 선택을 바꿀 수 있습니다.',
					'Android에서는 설정 > 개인정보 보호 > 광고에서 광고 ID를 재설정하거나 삭제할 수 있습니다.'
				]
			},
			{
				title: '아동의 개인정보',
				body: [
					'앱은 만 13세 미만(대한민국은 만 14세 미만) 아동을 대상으로 하지 않으며, 아동의 개인정보를 의도적으로 수집하지 않습니다.',
					`아동의 정보가 수집되었다고 생각되면 ${site.email}로 알려 주세요. 확인 후 지체 없이 삭제합니다.`
				]
			},
			{
				title: '방침 변경',
				body: [
					'이 방침이 바뀌면 이 페이지의 시행일을 갱신합니다. 변경된 처리 내용은 이 페이지와 앱의 개인정보 처리방침 링크에서 확인할 수 있습니다.'
				]
			},
			{
				title: '문의',
				body: [`개인정보 처리에 관한 문의는 ${site.email}로 보내주세요.`]
			}
		],
		footerNote:
			'이 방침은 베른할드 연대기에만 적용됩니다. 다른 Seori Labs 앱은 각 앱의 방침 또는 공통 방침을 따릅니다.'
	},
	en: {
		title: 'Vernhald Chronicles Privacy Policy',
		description:
			'How Vernhald Chronicles handles on-device saves, optional usage statistics, rewarded ads, and in-app purchases.',
		kicker: 'Vernhald Chronicles Privacy Policy',
		lastUpdated: '7 October 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Vernhald Chronicles (package com.seorilabs.vernhald, the “app”), provided by Seori Labs. Challenge and Endless modes can be played offline; the optional scheduled league requires an internet connection. Where the app’s actual processing or store disclosure differs from our general policy, this product policy prevails.',
		sections: [
			{
				title: 'Accounts and identifiers',
				body: [
					'There is no app sign-up, Sign in with Apple, or Google login screen. We use a random Firebase Anonymous Authentication identifier when connecting store ownership queries, purchases, restoration or the league. It associates purchase entitlements, decks and match records on our server. The store may require its own payment authentication. There is no chat.',
					'The app does not ask for your name, email address, phone number, or date of birth. The league identifier is not set as an analytics user ID.',
					'The app does not access location, contacts, photos, camera, microphone, or health data.'
				]
			},
			{
				title: 'Data stored only on your device',
				body: [
					'Normal Challenge and Endless saves and the settings below are stored on your device. League preparation commands and completed decks are submitted to the server as described below.',
					'Progress between runs (unlocked challenge levels, best rounds, recent run records), the run in progress, your settings (language, sound, vibration, usage statistics choice, base colour), the products you own and whether a review code was entered, and a per-day count of rewarded ads shown, used to apply ad frequency limits.',
					'Android system backup is disabled. We do not provide cloud saves for ordinary progress or settings; restoring purchases does not restore deleted progress. Non-consumable entitlements can be restored from store purchase history as described below.'
				]
			},
			{
				title: 'Scheduled league and server data',
				body: [
					'If you use the league, our server processes your anonymous identifier, preparation settings, seed and successful command history, submitted decks and placements, purchased expansion entitlements, participation period, rating, season and match records, and replays. These support deck validation, matchmaking, fraud prevention, rankings and results.',
					'Registered decks, ratings and match results may be shown to opponents or in league rankings. Purchase tokens and complete preparation command histories are not disclosed to other players.',
					'Firebase App Check verifies the app and its requests using Play Integrity on Android and App Attest on iOS. The server may process IP addresses and request and error information in operational logs.',
					'Leaving the league or expiry of the seven-day participation period only stops new matchmaking. Decks, ratings and past records remain stored across seasons. Uninstalling the app does not delete server data. You can request deletion using the contact below; we verify ownership to protect other players before processing a request.'
				]
			},
			{
				title: 'Usage statistics (optional)',
				body: [
					'The first time you open the app, it asks once whether you want to share usage statistics. Usage statistics and crash reports are not collected before you answer or if you choose not to share. This choice is separate from processing needed to operate the league. You can change this choice at any time in Settings.',
					'When sharing is on, game events are sent to Google Firebase Analytics: run start and end (with challenge level, round, and remaining HP), augment card picks, rewarded ads requested, shown, failed, and earned, and the result of a product purchase, together with the app market, platform, and app version. Firebase also receives the Firebase app instance ID and the device and app information it collects automatically.',
					'If the Android app crashes, Firebase Crashlytics receives a crash report (device model, OS version, and the stack trace of the crash). Crash reports follow the same choice as usage statistics.',
					'Analytics consent for ad storage, ad user data, and ad personalization is always set to denied. No user ID is set.'
				]
			},
			{
				title: 'Advertising',
				body: [
					'The app shows only optional rewarded ads that you choose to watch. There are no interstitial, banner, or app-open ads. Ads are provided by Google AdMob.',
					'Before ads load, Google’s User Messaging Platform shows a consent form where the law requires it (for example, in the EEA or the UK). In those regions an “Ad privacy choices” entry appears in Settings so you can change your choice later.',
					'When ads are used, Google and its advertising partners may process your IP address and approximate location derived from it, the advertising ID, ad interactions, and diagnostic information under their own policies.',
					'The maximum ad content rating the app requests is Teen.'
				]
			},
			{
				title: 'In-app purchase',
				body: [
					'The app offers two optional, non-consumable one-time purchases, “Expansion 1: Corsairs & Clockwork” and “Ad-free Rewards”, through Google Play or the App Store on the respective device.',
					'Payment details such as card numbers are handled by the store; Seori Labs never receives them.',
					'For purchases and restoration, the app sends product IDs and Google Play purchase tokens or signed App Store transactions and transaction IDs to our server to verify purchase and refund status with the respective store. We retain market, verified environment, transaction and product, purchase proof, anonymous-user entitlement links and completion status for purchase delivery, restoration and fraud prevention. Confirmed refunds or revocations update entitlements without deleting game progress or deck records. Test purchases and test leagues use separate ledgers from real purchases and official leagues.',
					'Non-consumable purchases can be restored to a new installation or anonymous identifier using the same store account. We do not share purchases between Android and iOS or transfer or merge an earlier anonymous player’s progress, decks or scores. A review code enables an on-device preview only and is not accepted as server purchase proof.'
				]
			},
			{
				title: 'Purposes',
				body: [
					'Data stored on your device is processed to run the game and keep your progress.',
					'Usage statistics and crash reports are processed, only with your consent, to improve stability and tune game balance.',
					'Advertising and purchase processing takes place to provide rewarded ads and the one-time purchases.'
				]
			},
			{
				title: 'Processors and international transfers',
				body: [
					'Seori Labs does not sell personal information.',
					'Google processes data for Firebase Auth, App Check and Play Integrity, Firestore, Cloud Run, Cloud Storage, Firebase Analytics, Firebase Crashlytics, AdMob, and Google Play Billing. The league server and data stores use Seoul, Republic of Korea as their primary region. Google’s handling is governed by the Google Privacy Policy and AdMob policies.',
					'Apple processes App Store payments, purchase verification, refund notifications and App Attest. Payment details are handled by the respective store. Google and Apple may process data outside the Republic of Korea.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Data stored on your device is kept until you uninstall the app, at which point it is deleted.',
					'Analytics data is retained for the period configured in Google Analytics, after which it is deleted or aggregated.',
					`To request deletion of analytics, server-stored entitlement links or league data, or to ask a question, write to ${site.email}.`
				]
			},
			{
				title: 'Your choices',
				body: [
					'You can turn sharing of usage statistics and crash reports on or off at any time in Settings.',
					'In regions where ad consent is required, you can change your ad choices under “Ad privacy choices” in Settings.',
					'On Android you can reset or delete your advertising ID under Settings > Privacy > Ads.'
				]
			},
			{
				title: 'Children’s privacy',
				body: [
					'The app is not directed to children under 13 (under 14 in the Republic of Korea), and we do not knowingly collect children’s personal information.',
					`If you believe a child’s information has been collected, write to ${site.email} and we will delete it without undue delay.`
				]
			},
			{
				title: 'Changes to this policy',
				body: [
					'If this policy changes, we update the effective date on this page. You can review processing changes on this page through the privacy policy link in the app.'
				]
			},
			{
				title: 'Contact',
				body: [`For questions about how we handle data, write to ${site.email}.`]
			}
		],
		footerNote:
			'This policy applies to Vernhald Chronicles only. Other Seori Labs apps follow their own product policy or our general policy.'
	}
};
