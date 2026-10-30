import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const matgoPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '달빛 맞고 개인정보 처리방침',
		description:
			'달빛 맞고의 기기 내 저장, 1.1.0부터의 선택형 사용 분석, Android 광고 데이터와 삭제 안내입니다.',
		kicker: 'Moonlight Matgo Privacy Policy',
		lastUpdated: '2026년 10월 30일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 달빛 맞고(Moonlight Matgo, com.seorilabs.matgo)의 Android 및 iOS 앱에 적용됩니다. 게임 진행은 계정 없이 기기에서 처리됩니다. Android 버전에는 광고가 있으며 iOS 버전에는 현재 광고가 없습니다. 이 앱의 데이터 처리에는 공통 방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '기기에 저장하는 정보',
				body: [
					'진행 중인 대국, 결과·복기 기록, 게임 내 냥·매듭, 라이벌 진행 상태, 언어·화면·소리 설정, 18세 이상 확인 여부를 기기에 저장합니다. 이어하기와 설정 유지에 사용합니다. 전체 저장 파일, 손패와 복기 명령은 서버로 전송하지 않습니다. 아래 사용 분석을 켠 경우 대국의 시작과 완료 같은 이벤트는 별도로 전송됩니다.',
					'냥과 매듭은 현금화, 실물 교환 또는 다른 이용자에게 이전할 수 없는 게임 내 값입니다. 금융 계좌나 결제 정보와 연결되지 않습니다.',
					'생년월일·신분증을 받지 않습니다. 앱에 회원가입, 온라인 대전, 게임 데이터 서버 동기화 또는 인앱 결제 기능은 없습니다.'
				]
			},
			{
				title: 'Android 광고와 Google Mobile Ads',
				body: [
					'Android 버전은 Google Mobile Ads(AdMob)와 동의 관리 도구(UMP)를 사용해 전면 광고와 이용자가 선택하는 보상 광고를 제공합니다. Google SDK는 광고 제공·성과 측정·사기 방지를 위해 IP 주소(대략적인 위치 추정에 사용될 수 있음), 앱 실행·탭·광고 영상 시청 등의 상호작용, 앱·SDK 성능 진단 정보, 기기 또는 앱 관련 식별자를 수집하고 Google에 전송할 수 있습니다.',
					'앱은 Android 광고 ID(AD_ID) 권한을 제거하고 비개인 맞춤 광고를 요청합니다. 광고 ID를 사용하지 않아도 Google SDK가 다른 기기·앱 식별자를 처리할 수 있습니다. 해당 지역에서 필요한 광고 동의·선택 화면을 제공하며, 광고 개인정보 설정이 필요한 지역에서는 앱 설정에서 다시 열 수 있습니다.',
					'광고 관련 데이터의 처리·보관에는 Google의 정책도 적용됩니다. Google의 광고 데이터 처리 정보는 Google의 개인정보처리방침과 광고 설정에서 확인할 수 있습니다. 이 데이터는 게임 진행 기록과 별개이며 서리랩스가 개인별 게임 기록과 연결하지 않습니다.'
				]
			},
			{
				title: '선택형 사용 분석과 iOS 버전',
				body: [
					'1.1.0부터 Android와 iOS에서 Google의 Firebase Analytics를 사용합니다. 분석을 켜면 설치와 세션, 안내 시작과 완료, 대국 시작과 종료, 재대국 선택, 오늘의 판 완료와 광고 결과를 수집합니다. 마켓, 앱 버전, AI 정책 버전, 신규 또는 기존 설치 구분도 전송합니다. 첫 판 완료율과 재방문율을 집계해 게임을 개선하는 데 사용합니다. 이름, 이메일, 계정, 실제 손패와 전체 저장 파일은 분석에 보내지 않습니다.',
					'SDK는 재설정 가능한 앱 인스턴스 식별자, 앱 상호작용, 기기와 운영체제 정보, IP 주소에서 유추한 대략적인 지역을 처리할 수 있습니다. 앱 인스턴스 식별자는 같은 설치의 이벤트와 재방문을 연결합니다. 이 앱은 분석의 광고 식별자와 광고 개인화 신호를 끕니다. iOS는 IDFA 기능이 없는 FirebaseAnalyticsCore를 사용하고 IDFV 수집도 끕니다. 다른 회사의 앱이나 웹 데이터와 합쳐 광고 추적에 사용하지 않습니다.',
					'처음 실행할 때 꺼져 있는 분석 선택 항목에서 허용 여부를 고릅니다. 허용하지 않고 계속해도 대국과 저장을 사용할 수 있습니다. 허용 전에는 분석을 전송하지 않으며, 설정의 “사용 분석 보내기”에서 이후 선택을 바꿀 수 있습니다. 선택은 재실행과 업데이트 후에도 유지됩니다. 끄면 이후 분석 전송을 중단하고 기기에 있는 SDK 분석 데이터를 초기화합니다. 이미 서버로 전송한 정보가 이 동작으로 즉시 모두 삭제되는 것은 아닙니다. 분석을 끄거나 인터넷이 없어도 대국과 저장은 사용할 수 있습니다.',
					'1.0.10 이하의 iOS 버전에는 분석 SDK가 없으며 iOS의 광고와 인앱 결제는 계속 제공하지 않습니다. Android 광고의 데이터 처리는 위 항목에서 별도로 설명합니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기 내 게임 데이터는 이용자가 초기화하거나 앱 데이터를 삭제할 때까지 남습니다. 앱 설정의 “전체 데이터 초기화” 또는 운영체제의 앱 삭제 기능으로 제거할 수 있습니다. 서리랩스는 게임 기록의 서버 사본이 없어 삭제된 대국을 복구할 수 없습니다.',
					'운영체제 백업을 켠 경우 백업 사본은 해당 서비스의 정책에 따라 관리됩니다. Android 광고 데이터의 접근·삭제 선택은 Google 계정 및 기기 광고 설정과 Google의 개인정보 도구에서 확인해 주세요. 사용 분석 데이터는 Google Analytics와 접근이 제한된 Google BigQuery에서 처리하며 서비스 개선 통계에 필요한 기간 동안 보관합니다. 수집과 삭제에 관한 문의는 아래 연락처로 보낼 수 있습니다.'
				]
			},
			{
				title: '고객 지원과 웹페이지',
				body: [
					`이용자가 ${site.email}로 문의하면 답변을 위해 발신 이메일 주소와 직접 보낸 내용·첨부 자료를 처리합니다. 앱이 이 정보를 자동 전송하지는 않습니다. 열람·정정·삭제 요청도 같은 주소로 보낼 수 있습니다.`,
					'문의 정보는 답변과 후속 처리에 필요한 동안 보관한 뒤 삭제하며, 법령상 보관 의무가 있으면 그 범위에서 보관합니다. 이 웹페이지의 호스팅 서비스는 접속 IP 등 기술 정보를 처리할 수 있으며, 웹사이트의 일반 사항은 서리랩스 공통 개인정보 처리방침에 따릅니다.',
					'Google Play, Apple App Store와 운영체제가 앱 배포·백업을 위해 독립적으로 처리하는 정보에는 각각의 정책이 적용됩니다.'
				]
			},
			{
				title: '이용 연령과 판매 지역',
				body: [
					'달빛 맞고는 18세 이상을 대상으로 하며 아동을 대상으로 하지 않습니다. 현재 한국에서는 판매하지 않습니다. 지역별 스토어 연령 등급과 현지 요건이 적용됩니다.'
				]
			},
			{
				title: '변경 및 연락처',
				body: [
					'앱의 데이터 처리 방식이 변경되면 이 페이지와 스토어 개인정보 표시를 갱신합니다. 필요한 고지와 동의 절차를 따릅니다.',
					`개인정보 처리 및 앱 지원 담당: Seorilabs Support / ${site.email}`
				]
			}
		],
		footerNote:
			'게임 진행 기록은 기기에 저장됩니다. 1.1.0의 선택형 사용 분석과 Android 광고 데이터는 위 설명에 따라 별도로 처리합니다.'
	},
	en: {
		title: 'Moonlight Matgo Privacy Policy',
		description:
			'Privacy Policy for local game data, optional analytics from version 1.1.0, Android advertising, and deletion.',
		kicker: 'Moonlight Matgo Privacy Policy',
		lastUpdated: 'October 30, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Moonlight Matgo (달빛 맞고, com.seorilabs.matgo), provided by Seori Labs on Android and iOS. Gameplay runs on your device without an account. The Android version has ads; the current iOS version does not. This policy takes precedence over our general policy for this app.',
		sections: [
			{
				title: 'Data Stored on Your Device',
				body: [
					'We store ongoing matches, results and reviews, in-game Nyang and Knots, rival progress, language, display and sound settings, and your confirmation that you are at least 18 on your device. This supports resuming play and retaining settings. We do not transmit complete save files, card hands, or replay commands. If you enable the analytics described below, events such as starting and finishing a match are sent separately.',
					'Nyang and Knots have no cash value and cannot be exchanged for goods or transferred to another player. They are not linked to financial accounts or payment details.',
					'We do not ask for a date of birth or identity document. The app has no account, online multiplayer, game-data server sync, or in-app purchase feature.'
				]
			},
			{
				title: 'Android Ads and Google Mobile Ads',
				body: [
					'The Android version uses Google Mobile Ads (AdMob) and its User Messaging Platform (UMP) for interstitial and optional rewarded ads. For ad delivery, measurement, and fraud prevention, the Google SDK may collect and send to Google your IP address (which can indicate approximate location), product interactions such as app launches, taps, and ad video views, app and SDK diagnostics, and device or app identifiers.',
					'The app removes the Android advertising ID (AD_ID) permission and requests non-personalized ads. Even without the advertising ID, the Google SDK may process other device or app identifiers. Where required, the app presents ad consent choices; an ad privacy settings option is available in the app settings where Google requires it.',
					'Google also governs the processing and retention of ad data. See Google’s Privacy Policy and ad controls for details. This ad data is separate from gameplay records, and Seori Labs does not link it to individual game progress.'
				]
			},
			{
				title: 'Optional Usage Analytics and the iOS Version',
				body: [
					'From version 1.1.0, Android and iOS use Google Firebase Analytics. When enabled, analytics records installation and session events, tutorial starts and completions, match starts and results, rematch choices, daily-match completions, and ad outcomes. Events include the market, app and AI policy versions, and whether the installation is new or existing. We use these to measure first-match completion and return rates and improve the game. We do not send names, email addresses, accounts, actual card hands, or complete save files to analytics.',
					'The SDK may process a resettable app-instance identifier, product interactions, device and operating-system information, and an approximate region inferred from the IP address. The app-instance identifier connects events and return visits from the same installation. Advertising identifiers and ad personalization signals are disabled for analytics. On iOS, we use FirebaseAnalyticsCore without IDFA capability and disable IDFV collection. We do not combine this data with other companies’ app or website data for advertising tracking.',
					'On first launch, the analytics switch starts off and you choose whether to enable it. You can continue without enabling it and still play and save. No analytics is sent before you allow it. Change your choice later using “Send usage analytics” in Settings. Your choice remains after restarts and updates. Turning it off stops further analytics collection and resets local SDK analytics data. This does not immediately delete all information already sent to servers. Matches and saving remain available when analytics is off or the device is offline.',
					'iOS versions 1.0.10 and earlier contain no analytics SDK. The iOS app continues to have no ads or in-app purchases. Android ad processing is described separately above.'
				]
			},
			{
				title: 'Retention and Deletion',
				body: [
					'Local game data stays on your device until you reset it or delete the app’s data. Use “Reset all data” in app settings or your operating system’s app deletion controls. Seori Labs has no server copy of game records and cannot restore deleted matches.',
					'If operating-system backup is enabled, that service governs backup copies. For Android ad data access and deletion choices, use your Google account and device ad settings or Google’s privacy tools. Usage analytics is processed in Google Analytics and access-restricted Google BigQuery and retained for as long as needed to produce service-improvement statistics. Contact us below about collection or deletion.'
				]
			},
			{
				title: 'Support and This Webpage',
				body: [
					`If you email ${site.email}, we process your sender address and the message or attachments you choose to send so we can reply. The app does not send this information automatically. You may request access, correction, or deletion through the same address.`,
					'We retain support information as needed for the response and follow-up, then delete it unless law requires longer retention. This webpage’s hosting provider may process technical information such as your IP address; our general website policy covers that processing.',
					'Google Play, the Apple App Store, and your operating system have their own policies for information they independently process for distribution and backups.'
				]
			},
			{
				title: 'Age and Availability',
				body: [
					'Moonlight Matgo is intended for players aged 18 or older and is not directed to children. It is not currently offered for sale in South Korea. Regional store age ratings and local requirements apply.'
				]
			},
			{
				title: 'Changes and Contact',
				body: [
					'If our data practices change, we will update this page and the store privacy disclosures and follow any required notice and consent process.',
					`Privacy and app support contact: Seorilabs Support / ${site.email}`
				]
			}
		],
		footerNote:
			'Gameplay records stay on your device. Optional analytics in version 1.1.0 and Android ad data are processed separately as described above.'
	}
};
