import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

// 공개 전 확인 항목과 근거: docs/privacy/lucid-chess.md. main 병합은 공개 배포다.
export const lucidChessPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '루시드 체스 개인정보 처리방침 초안',
		description: '루시드 체스의 저장, 분석, 광고 및 앱인토스 데이터 처리에 관한 검토용 초안입니다.',
		kicker: 'Lucid Chess Privacy Policy Draft',
		lastUpdated: '2026년 10월 24일 검토본, 시행일 미정',
		lastUpdatedLabel: '검토 상태',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 문서는 Seori Labs가 제공하는 루시드 체스의 개인정보 처리방침을 준비하기 위한 초안입니다. Android 패키지는 com.seorilabs.lucidchess, iOS 번들 ID는 com.etlegame.chess이며 앱인토스 버전도 구분해 설명합니다. 공개 버전과 보관 설정을 대조하고 시행일을 확정하기 전에는 현행 방침을 대체하지 않습니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 정보',
				body: [
					'진행 중인 대국과 기보, 완료 기록, 난이도와 테마 등 설정, 출석과 적립 힌트, 퍼즐 진행 및 누적 점수는 기기에 저장합니다. 이 저장 기능은 기보 전체를 서버에 동기화하는 기능이 아닙니다. 대국 결과와 기능 사용에 관한 분석 정보는 아래와 같이 별도로 전송합니다.',
					'앱 데이터 삭제나 앱 제거로 기기 내 자료를 잃을 수 있습니다. 운영체제나 호스트의 백업과 복원 여부는 해당 서비스 설정에 따릅니다. 앱 제거만으로 서버 식별자나 이미 전송한 분석 정보가 함께 삭제되지는 않습니다.'
				]
			},
			{
				title: '서비스 식별자와 분석',
				body: [
					'앱에는 이름, 이메일이나 비밀번호를 입력하는 회원가입 화면이 없습니다. 서비스 서버는 앱 이용을 구분하는 식별자를 발급하며 Firebase 인증을 사용합니다. 기기에는 식별자와 인증 갱신 정보가 저장됩니다. 따라서 처리 정보가 모두 익명 통계인 것은 아닙니다.',
					'게임 시작과 종료, 중단, 퍼즐, 힌트, 출석, 광고 등 기능 사용을 분석합니다. 이벤트에는 대국 식별자, 난이도, 언어, 게임 모드, 결과 및 설정 등 해당 행동의 정보가 포함될 수 있습니다. 네이티브 앱은 정해진 주요 이벤트를 서비스 서버에도 전송하고, 앱인토스 버전은 서버의 이벤트 중계 경로를 사용합니다.',
					'Android와 iOS는 Firebase Analytics와 Crashlytics를 사용해 이용 흐름, 오류와 충돌을 확인합니다. SDK는 앱 설치 식별자, 기기와 운영체제 정보, 이용 이벤트 및 충돌 진단 정보를 처리할 수 있습니다. Android는 Firebase Remote Config를 사용해 기능 설정을 받으며, 현재 iOS 구현에는 해당 SDK가 연결되어 있지 않습니다.'
				]
			},
			{
				title: '광고와 이용자 선택',
				body: [
					'네이티브 앱은 Google AdMob 전면광고를 대국 사이에 표시합니다. 현재 확인한 구현에는 배너, 보상형 광고나 인앱 구매가 연결되어 있지 않습니다. 광고 제공, 측정과 부정 이용 방지를 위해 Google과 광고 파트너는 허용된 기기 또는 광고 식별자, IP 주소와 그로부터 추정한 대략적 위치, 광고 노출과 클릭 및 진단 정보를 처리할 수 있습니다.',
					'Android는 Google UMP로 동의 상태를 확인하고 광고 요청이 허용된 뒤 광고를 요청합니다. 모든 요청을 비개인화로 고정하지 않으므로 광고 개인화 여부는 동의, 지역 및 제공자 설정에 따라 달라질 수 있습니다. iOS의 현재 구현은 비개인화 광고를 요청하며 ATT 추적 권한을 요청하지 않도록 구성되어 있습니다. 비개인화 광고도 광고 횟수 제한, 측정과 부정 이용 방지를 위한 식별자 처리를 수반할 수 있습니다.',
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
					'분석, 인증, 오류 보고와 광고에는 Google의 Firebase, Google Analytics와 AdMob이 관여합니다. 앱인토스의 광고, 게임센터, 알림 및 공유에는 토스가 관여합니다. 서비스 제공자의 서버 위치에 따라 정보가 이용자의 국가 밖에서 처리될 수 있습니다. 구체적인 이전 조건과 각 처리자의 보관 기간은 공개 전에 확인할 항목입니다.'
				]
			},
			{
				title: '보관과 삭제: 공개 전 확인할 항목',
				body: [
					'2026년 10월 24일 검토에 사용한 읽기 전용 조회에서 BigQuery 분석 내보내기 테이블의 만료 설정은 생성 후 60일이었습니다. 이는 Google Analytics 서비스 자체의 보관 기간이나 집계 보고서의 보관 기간을 뜻하지 않습니다.',
					'Google Analytics 속성의 실제 사용자 및 이벤트 보관 기간, 서비스 서버의 이벤트 원본과 로그 보관 기간, 인증 식별자의 삭제 절차는 아직 확인 중입니다. 이 값과 실제 공개 빌드를 대조하기 전에는 이 초안을 시행하지 않습니다.',
					'Firebase의 공개 설명에 따르면 Crashlytics는 충돌 자료와 관련 식별자를 90일간 보관한 뒤 제거 절차를 시작합니다. Firebase 인증 자료는 해당 사용자 삭제까지 유지됩니다. 이 설명은 이 앱 서버의 미확인 보관 기간을 대신하지 않습니다.',
					`열람, 정정 또는 삭제 요청과 개인정보 문의는 ${site.email}로 보내주세요. 요청에 해당하는 자료를 확인하기 위해 필요한 최소 정보를 안내합니다. 비밀번호나 인증 토큰을 보내지 마세요. 보관 의무와 처리 가능한 범위를 확인해 요청 결과를 안내합니다.`
				]
			},
			{
				title: '아동과 방침 변경',
				body: [
					`루시드 체스는 아동을 주된 대상으로 하는 서비스로 기획하지 않았습니다. 아동의 정보 처리에 관한 우려가 있으면 ${site.email}로 알려주세요. 계정 입력 화면이 없어도 SDK와 서비스 식별자 처리가 있으므로 이를 정보 수집이 없다는 뜻으로 해석하지 않습니다.`,
					'공개 전 검토를 마치면 시행일과 변경 내용을 이 페이지에 표시합니다.'
				]
			}
		],
		footerNote: '검토용 초안입니다. 보관과 삭제 절차, 공개 빌드 대조 및 공개 승인이 남아 있습니다.'
	},
	en: {
		title: 'Lucid Chess Privacy Policy Draft',
		description:
			'Review draft describing storage, analytics, advertising and AppsInToss data handling in Lucid Chess.',
		kicker: 'Lucid Chess Privacy Policy Draft',
		lastUpdated: 'Review copy dated October 24, 2026; effective date pending',
		lastUpdatedLabel: 'Review status',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This draft prepares a product privacy policy for Lucid Chess, provided by Seori Labs. The Android package is com.seorilabs.lucidchess and the iOS bundle ID is com.etlegame.chess. The AppsInToss version is described separately. This draft does not replace the current policy until the public builds and retention settings have been checked and an effective date has been set.',
		sections: [
			{
				title: 'Game information stored on your device',
				body: [
					'Your current game and move history, completed games, settings such as difficulty and theme, attendance and saved hints, puzzle progress and cumulative score are stored on your device. This storage feature does not synchronise full game records to a server. Results and feature-use analytics are sent separately as described below.',
					'Clearing app data or removing the app can cause you to lose local information. Backups and restoration depend on your operating system or host settings. Removing the app does not by itself delete server identifiers or analytics already sent.'
				]
			},
			{
				title: 'Service identifiers and analytics',
				body: [
					'The app has no registration screen asking for your name, email or password. The service server issues an identifier for app use and uses Firebase authentication. The device stores the identifier and authentication refresh information. The information processed is therefore not limited to anonymous statistics.',
					'We analyse feature use, including game starts, finishes and abandonment, puzzles, hints, attendance and ads. Events can include a game record identifier, difficulty, language, game mode, result and settings relevant to that action. Native apps also send a defined set of key events to our service server; the AppsInToss version uses the server event relay.',
					'Android and iOS use Firebase Analytics and Crashlytics to understand usage, errors and crashes. These SDKs may process installation identifiers, device and operating system details, usage events and crash diagnostics. Android uses Firebase Remote Config to receive feature settings; the current iOS implementation does not link that SDK.'
				]
			},
			{
				title: 'Advertising and your choices',
				body: [
					'The native apps show Google AdMob interstitial ads between games. The implementation reviewed does not connect banner ads, rewarded ads or in-app purchases. To deliver and measure ads and prevent fraud, Google and advertising partners may process permitted device or advertising identifiers, IP addresses and approximate location inferred from them, ad impressions and clicks, and diagnostics.',
					'Android checks consent using Google UMP and requests ads once ad requests are permitted. It does not force all requests to be non-personalised, so personalisation may depend on consent, region and provider settings. The current iOS implementation requests non-personalised ads and is configured not to request ATT tracking permission. Non-personalised ads can still involve identifiers for frequency capping, measurement and fraud prevention.',
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
					'Google Firebase, Google Analytics and AdMob are involved in analytics, authentication, error reporting and advertising. Toss is involved in AppsInToss ads, Game Center, reminders and sharing. Depending on provider server locations, information may be processed outside your country. Specific transfer terms and processor retention periods remain subject to verification before publication.'
				]
			},
			{
				title: 'Retention and deletion: verification pending',
				body: [
					'A read-only query used for this October 24, 2026 review found that BigQuery analytics export tables expire 60 days after creation. This does not establish retention within Google Analytics itself or its aggregate reports.',
					'The actual Google Analytics user and event retention setting, service-server raw event and log retention, and the deletion procedure for authentication identifiers are still being checked. This draft will not take effect until these details and the public builds have been verified.',
					'Firebase states that Crashlytics keeps crash data and associated identifiers for 90 days before starting removal. Firebase authentication data remains until the user is deleted. These provider statements do not replace verification of our server retention.',
					`For access, correction or deletion requests and privacy questions, contact ${site.email}. We will explain the minimum information needed to locate relevant records. Do not send passwords or authentication tokens. We will explain the outcome after checking applicable retention obligations and the scope of processing we can perform.`
				]
			},
			{
				title: 'Children and policy changes',
				body: [
					`Lucid Chess is not designed primarily for children. If you have concerns about a child’s information, contact ${site.email}. The absence of a registration form does not mean no information is collected: SDKs and service identifiers are still involved.`,
					'After the publication review, this page will show the effective date and changes.'
				]
			}
		],
		footerNote:
			'Review draft. Retention and deletion procedures, public-build comparison and publication approval remain pending.'
	}
};
