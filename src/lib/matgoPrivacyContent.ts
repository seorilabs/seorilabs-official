import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const matgoPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '달빛 맞고 개인정보 처리방침',
		description: '달빛 맞고의 기기 내 저장, Android 광고 데이터, iOS 데이터 처리와 삭제 안내입니다.',
		kicker: 'Moonlight Matgo Privacy Policy',
		lastUpdated: '2026년 9월 24일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro: '이 방침은 Seori Labs가 제공하는 달빛 맞고(Moonlight Matgo, com.seorilabs.matgo)의 Android 및 iOS 앱에 적용됩니다. 게임 진행은 계정 없이 기기에서 처리됩니다. Android 버전에는 광고가 있으며 iOS 버전에는 현재 광고가 없습니다. 이 앱의 데이터 처리에는 공통 방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '기기에 저장하는 정보',
				body: [
					'진행 중인 대국, 결과·복기 기록, 게임 내 냥·매듭, 라이벌 진행 상태, 언어·화면·소리 설정, 18세 이상 확인 여부를 기기에 저장합니다. 이어하기와 설정 유지에 사용하며 서리랩스 서버로 전송하지 않습니다.',
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
				title: 'iOS 버전',
				body: [
					'현재 iOS 버전에는 광고 SDK, 이용 분석 SDK, 원격 오류 보고 또는 이용자 추적 기능이 없습니다. iOS 앱은 게임 진행과 설정을 기기에 보관하며 앱에서 개인정보나 게임 데이터를 서리랩스 또는 제3자 서버로 수집·전송하지 않습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기 내 게임 데이터는 이용자가 초기화하거나 앱 데이터를 삭제할 때까지 남습니다. 앱 설정의 “전체 데이터 초기화” 또는 운영체제의 앱 삭제 기능으로 제거할 수 있습니다. 서리랩스는 게임 기록의 서버 사본이 없어 삭제된 대국을 복구할 수 없습니다.',
					'운영체제 백업을 켠 경우 백업 사본은 해당 서비스의 정책에 따라 관리됩니다. Android 광고 데이터의 접근·삭제 선택은 Google 계정 및 기기 광고 설정과 Google의 개인정보 도구에서 확인해 주세요.'
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
				body: ['달빛 맞고는 18세 이상을 대상으로 하며 아동을 대상으로 하지 않습니다. 현재 한국에서는 판매하지 않습니다. 지역별 스토어 연령 등급과 현지 요건이 적용됩니다.']
			},
			{
				title: '변경 및 연락처',
				body: [
					'앱의 데이터 처리 방식이 변경되면 이 페이지와 스토어 개인정보 표시를 갱신합니다. 필요한 고지와 동의 절차를 따릅니다.',
					`개인정보 처리 및 앱 지원 담당: Seorilabs Support / ${site.email}`
				]
			}
		],
		footerNote: '게임 진행 기록은 기기에 저장됩니다. Android 광고는 Google Mobile Ads를 통해 별도 데이터를 처리할 수 있습니다.'
	},
	en: {
		title: 'Moonlight Matgo Privacy Policy',
		description: 'Privacy Policy for local game data, Android advertising, iOS data practices, and deletion.',
		kicker: 'Moonlight Matgo Privacy Policy',
		lastUpdated: 'September 24, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro: 'This policy applies to Moonlight Matgo (달빛 맞고, com.seorilabs.matgo), provided by Seori Labs on Android and iOS. Gameplay runs on your device without an account. The Android version has ads; the current iOS version does not. This policy takes precedence over our general policy for this app.',
		sections: [
			{
				title: 'Data Stored on Your Device',
				body: [
					'We store ongoing matches, results and reviews, in-game Nyang and Knots, rival progress, language, display and sound settings, and your confirmation that you are at least 18 on your device. This supports resuming play and retaining settings. We do not send this gameplay data to a Seori Labs server.',
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
				title: 'iOS Version',
				body: ['The current iOS version contains no ad SDK, usage analytics SDK, remote crash reporting, or user tracking. It stores gameplay and settings on your device and does not collect or send personal or gameplay data from the app to Seori Labs or third-party servers.']
			},
			{
				title: 'Retention and Deletion',
				body: [
					'Local game data stays on your device until you reset it or delete the app’s data. Use “Reset all data” in app settings or your operating system’s app deletion controls. Seori Labs has no server copy of game records and cannot restore deleted matches.',
					'If operating-system backup is enabled, that service governs backup copies. For Android ad data access and deletion choices, use your Google account and device ad settings or Google’s privacy tools.'
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
				body: ['Moonlight Matgo is intended for players aged 18 or older and is not directed to children. It is not currently offered for sale in South Korea. Regional store age ratings and local requirements apply.']
			},
			{
				title: 'Changes and Contact',
				body: [
					'If our data practices change, we will update this page and the store privacy disclosures and follow any required notice and consent process.',
					`Privacy and app support contact: Seorilabs Support / ${site.email}`
				]
			}
		],
		footerNote: 'Gameplay records stay on your device. Android ads may process separate data through Google Mobile Ads.'
	}
};
