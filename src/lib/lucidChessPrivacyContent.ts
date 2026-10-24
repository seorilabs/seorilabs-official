import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

// 공개 버전과 운영 설정의 근거 및 삭제 처리 절차: docs/privacy/lucid-chess.md.
export const lucidChessPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '루시드 체스 개인정보 처리방침',
		description:
			'루시드 체스의 저장, 분석, 광고와 데이터 보관 및 삭제에 관한 개인정보 처리방침입니다.',
		kicker: 'Lucid Chess Privacy Policy',
		lastUpdated: '2026년 10월 24일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 루시드 체스에 적용됩니다. Android 패키지는 com.seorilabs.lucidchess, iOS 번들 ID는 com.etlegame.chess이며 앱인토스 버전의 처리도 구분해 설명합니다. 이 제품별 안내는 회사 공통 개인정보 처리방침과 함께 적용됩니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 정보',
				body: [
					'진행 중인 대국과 기보, 완료 기록, 난이도와 테마 등 설정, 출석과 퍼즐 진행 및 누적 점수는 기기에 저장합니다. 이 저장 기능은 기보 전체를 서버에 동기화하는 기능이 아닙니다. 대국 결과와 기능 사용에 관한 분석 정보는 아래와 같이 별도로 전송합니다.',
					'앱 데이터 삭제나 앱 제거로 기기 내 자료를 잃을 수 있습니다. 운영체제나 호스트의 백업과 복원 여부는 해당 서비스 설정에 따릅니다. 앱 제거만으로 서버 식별자나 이미 전송한 분석 정보가 함께 삭제되지는 않습니다.'
				]
			},
			{
				title: '서비스 식별자와 분석',
				body: [
					'앱에는 이름, 이메일이나 비밀번호를 입력하는 회원가입 화면이 없습니다. 서비스 서버는 앱 이용을 구분하는 식별자를 발급하며 Firebase 인증을 사용합니다. 기기에는 식별자와 인증 갱신 정보가 저장됩니다. 따라서 처리 정보가 모두 익명 통계인 것은 아닙니다.',
					'게임 시작과 종료, 중단, 퍼즐, 힌트, 출석, 광고 등 기능 사용을 분석합니다. 이벤트에는 대국 식별자, 난이도, 언어, 게임 모드, 결과 및 설정 등 해당 행동의 정보가 포함될 수 있습니다. 네이티브 앱은 정해진 주요 이벤트를 서비스 서버에도 전송하고, 앱인토스 버전은 서버의 이벤트 중계 경로를 사용합니다.',
					'Android와 iOS는 Firebase Analytics와 Crashlytics를 사용해 이용 흐름, 오류와 충돌을 확인합니다. SDK는 앱 설치 식별자, 기기와 운영체제 정보, 이용 이벤트 및 충돌 진단 정보를 처리할 수 있습니다. Android는 Firebase Remote Config를 사용해 기능 설정을 받으며, iOS 버전에는 해당 SDK가 연결되어 있지 않습니다.'
				]
			},
			{
				title: '광고와 이용자 선택',
				body: [
					'네이티브 앱은 Google AdMob 전면광고를 대국 사이에 표시합니다. 현재 공개 버전에는 배너, 보상형 광고나 인앱 구매가 연결되어 있지 않습니다. 광고 제공, 측정과 부정 이용 방지를 위해 Google과 광고 파트너는 허용된 기기 또는 광고 식별자, IP 주소와 그로부터 추정한 대략적 위치, 광고 노출과 클릭 및 진단 정보를 처리할 수 있습니다.',
					'Android는 Google UMP로 동의 상태를 확인하고 광고 요청이 허용된 뒤 광고를 요청합니다. 모든 요청을 비개인화로 고정하지 않으므로 광고 개인화 여부는 동의, 지역 및 제공자 설정에 따라 달라질 수 있습니다. iOS는 비개인화 광고를 요청하며 ATT 추적 권한을 요청하지 않도록 구성되어 있습니다. 비개인화 광고도 광고 횟수 제한, 측정과 부정 이용 방지를 위한 식별자 처리를 수반할 수 있습니다.',
					'UMP가 개인정보 선택 화면을 요구하는 경우 앱 설정의 광고 개인정보 선택에서 선택을 다시 확인할 수 있습니다. 기기의 광고 개인정보 설정도 이용할 수 있습니다. 앱인토스 광고는 토스 호스트의 광고 기능과 고지에 따르며, 네이티브 AdMob 설정과 구분됩니다.'
				]
			},
			{
				title: '앱인토스의 선택 기능과 공유',
				body: [
					'앱인토스 버전은 누적 점수를 토스 게임센터에 전송해 순위 기능을 제공합니다. 다시 방문 알림은 토스 호스트의 동의 요청 기능을 사용합니다. 해당 호스트가 처리하는 정보와 동의 설정에는 토스의 안내가 함께 적용됩니다.',
					'이용자가 공유를 선택하면 대국 결과 메시지나 이미지를 운영체제 또는 토스의 공유 기능에 전달하거나 클립보드에 복사합니다. 실제 수신자와 공유 대상은 이용자가 선택하며, 대상 서비스의 개인정보 처리방침이 적용됩니다.'
				]
			},
			{
				title: '목적과 제공자',
				body: [
					'게임 정보와 서비스 식별자는 대국 진행과 기능 상태 유지, 서비스 요청 인증에 사용합니다. 분석과 충돌 정보는 이용 흐름과 안정성을 확인하고 기능을 개선하는 데 사용하며, 광고 정보는 광고 제공, 측정과 부정 이용 방지에 사용합니다.',
					'분석, 인증, 오류 보고와 광고에는 Google의 Firebase, Google Analytics와 AdMob이 관여합니다. 앱인토스의 광고, 게임센터, 알림 및 공유에는 토스가 관여합니다. 서비스 제공자의 서버 위치에 따라 정보가 이용자의 국가 밖에서 처리될 수 있습니다. 앱 서버와 서버 이벤트 저장소는 대한민국 서울 리전을 사용합니다. Firebase 인증은 미국에서 처리되며, 다른 Google 서비스는 전 세계 Google 시설에서 처리될 수 있습니다. 앱 이용 중 SDK와 서버 API를 통해 전송되며 각 서비스의 데이터 처리 조건과 국외 이전 보호조치가 적용됩니다.'
				]
			},
			{
				title: '보관 기간',
				body: [
					'Google Analytics의 사용자와 이벤트 데이터 보관 설정은 각각 14개월입니다. 새 사용자 활동이 있으면 사용자 식별자의 보관 기간이 갱신됩니다. 집계된 표준 보고서는 이 보관 설정의 대상이 아닙니다.',
					'BigQuery의 앱 분석 내보내기 테이블은 생성 후 60일에 만료됩니다. 서비스 서버의 원본 이벤트와 감사 기록은 날짜별 파티션을 400일 보관합니다. 일반 서비스 로그는 30일, 필수 보안 및 관리 감사 로그는 400일 보관합니다.',
					'앱별 서버 식별자와 Firebase 인증 자료에는 자동 만료가 설정되어 있지 않습니다. 확인된 삭제 요청을 처리할 때 대상 자료를 삭제합니다. Firebase는 인증 자료의 삭제를 접수한 후 운영 및 백업 사본을 180일 이내에 제거한다고 안내합니다.',
					'Crashlytics는 충돌 자료와 관련 식별자를 90일 보관한 뒤 제거 절차를 시작합니다. Remote Config의 설치 식별자는 삭제 요청 전까지 유지되며 Google의 사본 제거 기간은 요청 후 최대 180일입니다. 광고와 토스 호스트가 별도로 처리하는 정보에는 해당 제공자의 보관 정책이 적용됩니다.'
				]
			},
			{
				title: '열람, 정정과 삭제 요청',
				body: [
					`요청은 ${site.email}로 보내주세요. 앱 이름과 이용한 마켓을 알려주시면 대상 설치본이나 기록을 확인하는 데 필요한 최소 정보를 안내합니다. 비밀번호나 인증 토큰은 보내지 마세요.`,
					'앱 안에서 자동 삭제 요청을 접수하는 기능은 현재 제공하지 않습니다. 운영자가 요청 대상을 확인하고 연결된 서비스 식별자, 인증 자료와 분석 사본의 삭제를 처리합니다. 다른 설치본과 연결되지 않은 SDK 자료처럼 대상을 특정할 수 없는 자료, 법령상 보관해야 하는 자료는 처리 가능한 범위와 사유 및 보관 기간을 안내합니다.',
					'삭제는 운영 자료와 제공자 사본에 차례로 반영됩니다. BigQuery는 삭제 후에도 복구를 위한 시간 여행과 장애 복구 사본을 별도로 보관하므로, 운영 자료 삭제가 모든 복구 사본의 즉시 소거를 뜻하지는 않습니다. Firebase 인증과 Remote Config 사본에는 위의 제공자 제거 기간이 적용됩니다.'
				]
			},
			{
				title: '아동과 방침 변경',
				body: [
					`루시드 체스는 아동을 주된 대상으로 하는 서비스로 기획하지 않았습니다. 아동의 정보 처리에 관한 우려가 있으면 ${site.email}로 알려주세요. 계정 입력 화면이 없어도 SDK와 서비스 식별자 처리가 있으므로 이를 정보 수집이 없다는 뜻으로 해석하지 않습니다.`,
					'이 방침이 바뀌면 이 페이지에 시행일과 변경 내용을 표시합니다.'
				]
			}
		],
		footerNote: '개인정보 문의와 열람, 정정 또는 삭제 요청은 아래 연락처로 보내주세요.'
	},
	en: {
		title: 'Lucid Chess Privacy Policy',
		description:
			'Privacy policy describing storage, analytics, advertising, retention and deletion in Lucid Chess.',
		kicker: 'Lucid Chess Privacy Policy',
		lastUpdated: 'October 24, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Lucid Chess, provided by Seori Labs. The Android package is com.seorilabs.lucidchess and the iOS bundle ID is com.etlegame.chess. Data handling in the AppsInToss version is described separately. This product notice applies alongside our general privacy policy.',
		sections: [
			{
				title: 'Game information stored on your device',
				body: [
					'Your current game and move history, completed games, settings such as difficulty and theme, attendance, puzzle progress and cumulative score are stored on your device. This storage feature does not synchronise full game records to a server. Results and feature-use analytics are sent separately as described below.',
					'Clearing app data or removing the app can cause you to lose local information. Backups and restoration depend on your operating system or host settings. Removing the app does not by itself delete server identifiers or analytics already sent.'
				]
			},
			{
				title: 'Service identifiers and analytics',
				body: [
					'The app has no registration screen asking for your name, email or password. The service server issues an identifier for app use and uses Firebase authentication. The device stores the identifier and authentication refresh information. The information processed is therefore not limited to anonymous statistics.',
					'We analyse feature use, including game starts, finishes and abandonment, puzzles, hints, attendance and ads. Events can include a game record identifier, difficulty, language, game mode, result and settings relevant to that action. Native apps also send a defined set of key events to our service server; the AppsInToss version uses the server event relay.',
					'Android and iOS use Firebase Analytics and Crashlytics to understand usage, errors and crashes. These SDKs may process installation identifiers, device and operating system details, usage events and crash diagnostics. Android uses Firebase Remote Config to receive feature settings; the iOS version does not link that SDK.'
				]
			},
			{
				title: 'Advertising and your choices',
				body: [
					'The native apps show Google AdMob interstitial ads between games. The current public versions do not connect banner ads, rewarded ads or in-app purchases. To deliver and measure ads and prevent fraud, Google and advertising partners may process permitted device or advertising identifiers, IP addresses and approximate location inferred from them, ad impressions and clicks, and diagnostics.',
					'Android checks consent using Google UMP and requests ads once ad requests are permitted. It does not force all requests to be non-personalised, so personalisation may depend on consent, region and provider settings. The iOS version requests non-personalised ads and is configured not to request ATT tracking permission. Non-personalised ads can still involve identifiers for frequency capping, measurement and fraud prevention.',
					'When UMP requires a privacy choices form, you can revisit it through the advertising privacy choice in app settings. You can also use your device advertising privacy settings. AppsInToss ads use the Toss host advertising features and notices, separately from the native AdMob settings.'
				]
			},
			{
				title: 'Optional AppsInToss features and sharing',
				body: [
					'The AppsInToss version sends cumulative scores to Toss Game Center for rankings. Return reminders use the Toss host consent request feature. Toss notices also apply to information processed by the host and its consent settings.',
					'When you choose to share, a game result message or image is passed to the operating system or Toss sharing feature, or copied to the clipboard. You choose the recipient and destination, whose privacy policy applies.'
				]
			},
			{
				title: 'Purposes and providers',
				body: [
					'Game information and service identifiers support game progress, feature state and authentication of service requests. Analytics and crash information help us understand usage and stability and improve features. Advertising information supports ad delivery, measurement and fraud prevention.',
					'Google Firebase, Google Analytics and AdMob are involved in analytics, authentication, error reporting and advertising. Toss is involved in AppsInToss ads, Game Center, reminders and sharing. Depending on provider server locations, information may be processed outside your country. Our app server and server-event storage use the Seoul, South Korea region. Firebase authentication is processed in the United States; other Google services may process information at Google facilities worldwide. Transfers occur through SDKs and server APIs during app use, under the relevant service data-processing terms and international-transfer safeguards.'
				]
			},
			{
				title: 'Retention periods',
				body: [
					'Google Analytics user and event retention are each set to 14 months. New activity resets the retention period of the user identifier. Standard aggregated reports are not subject to that setting.',
					'BigQuery app-analytics export tables expire 60 days after creation. Our server retains raw events and audit records in daily partitions for 400 days. General service logs are kept for 30 days; required security and administrative audit logs are kept for 400 days.',
					'App-specific server identifiers and Firebase authentication records have no automatic expiry. We delete relevant records when processing a verified deletion request. Firebase states that authentication records are removed from live and backup systems within 180 days after deletion is requested.',
					'Crashlytics starts removal after retaining crash data and associated identifiers for 90 days. Remote Config installation identifiers remain until deletion is requested; Google states removal from its copies takes up to 180 days after that request. Information independently processed by advertising providers and the Toss host follows their retention policies.'
				]
			},
			{
				title: 'Access, correction and deletion requests',
				body: [
					`Contact ${site.email}. Tell us the app name and market you used, and we will explain the minimum information needed to identify the relevant installation or records. Do not send passwords or authentication tokens.`,
					'The app does not currently provide an automated deletion-request feature. An operator verifies the target and processes deletion of linked service identifiers, authentication records and analytics copies. For records we cannot identify, such as SDK data not linked to that installation, or records we must retain by law, we explain the available scope, reasons and retention period.',
					'Deletion is applied to operational records and provider copies in stages. BigQuery separately retains time-travel and fail-safe recovery copies after deletion, so deleting operational records does not immediately erase all recovery copies. The provider removal periods above apply to Firebase authentication and Remote Config copies.'
				]
			},
			{
				title: 'Children and policy changes',
				body: [
					`Lucid Chess is not designed primarily for children. If you have concerns about a child’s information, contact ${site.email}. The absence of a registration form does not mean no information is collected: SDKs and service identifiers are still involved.`,
					'When this policy changes, this page will show the effective date and changes.'
				]
			}
		],
		footerNote:
			'Use the contact below for privacy questions and access, correction or deletion requests.'
	}
};
