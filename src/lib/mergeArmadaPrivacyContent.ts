import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const mergeArmadaPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '수군 머지: 거북선 함대 개인정보 처리방침',
		description:
			'수군 머지의 게임 저장, 이용 분석 및 Android 보상형 광고에 관한 개인정보 처리방침입니다.',
		kicker: 'Merge Armada Privacy Policy',
		lastUpdated: '2026년 9월 24일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「수군 머지: 거북선 함대」(패키지명 및 번들 ID com.seorilabs.mergearmada, 이하 “앱”)에 적용됩니다. 앱의 데이터 처리가 회사 공통 방침과 다른 경우 이 제품별 방침이 우선합니다.',
		sections: [
			{
				title: '게임 데이터와 계정',
				body: [
					'출정 진행 상황, 획득한 공훈과 아이템, 함대와 장비, 설정은 기기에 저장됩니다. 앱을 삭제하면 기기에 저장된 정보도 삭제됩니다.',
					'앱에는 계정 생성이나 로그인 화면이 없습니다. 이름, 이메일, 전화번호, 주소, 생년월일을 게임 안에서 입력받지 않으며, 현재 앱 내 결제 기능도 제공하지 않습니다.'
				]
			},
			{
				title: '이용 분석',
				body: [
					'분석 설정이 포함된 출시 빌드에서는 Google 애널리틱스 4로 앱 실행, 튜토리얼, 배치, 합성, 전투 결과와 같은 게임 내 이벤트, 플랫폼 구분, 세션 정보, 설치본에 연결된 무작위 분석 식별자를 전송합니다. 이름이나 연락처를 이벤트에 포함하지 않습니다.',
					'이 정보는 게임의 이용 상태와 안정성을 파악하고 기능을 개선하는 데 사용합니다. 앱 설정에서 이용 정보 수집을 끌 수 있으며 분석 식별자를 재설정할 수 있습니다. 분석 전송에는 HTTPS를 사용합니다.'
				]
			},
			{
				title: 'Android 광고',
				body: [
					'Android 앱에서는 이용자가 보상을 받기 위해 선택하는 Google AdMob 광고를 제공할 수 있습니다. 광고 제공, 성과 측정 및 부정 이용 방지 과정에서 Google과 광고 파트너가 광고 ID, 기기 정보, 광고·앱 상호작용, 진단 정보, IP 주소와 그로부터 추정한 대략적 위치를 처리할 수 있습니다.',
					'동의가 필요한 지역에서는 Google User Messaging Platform으로 광고 개인정보 선택을 받습니다. 필요한 동의가 없으면 광고가 제한되거나 제공되지 않을 수 있습니다. 광고를 보지 않아도 기본 게임은 이용할 수 있습니다.',
					'현재 iOS 후보에서는 AdMob 광고와 광고 식별자 IDFA를 사용하지 않으며 앱 추적 권한을 요청하지 않습니다. 향후 iOS 광고를 활성화하면 이 방침과 스토어의 개인정보 표시를 먼저 수정합니다.'
				]
			},
			{
				title: '보관, 제공 및 이용자 선택',
				body: [
					'기기 내 게임 데이터는 앱 삭제 시 제거됩니다. Google에 전송된 분석·광고 데이터의 보관과 처리는 각 서비스의 설정 및 공개 정책을 따릅니다. 서비스 제공자의 서버가 있는 국가에서 정보가 처리될 수 있습니다.',
					'Seori Labs는 이용자 정보를 판매하지 않습니다. 이용자는 앱 설정에서 분석 수집을 끄거나 식별자를 재설정할 수 있고, Android 기기 설정에서 광고 ID를 재설정하거나 삭제할 수 있습니다.',
					`데이터 열람이나 삭제를 요청하려면 ${site.email}로 문의해 주세요. 앱에 계정이 없으므로 요청 대상 정보를 확인하는 데 필요한 최소한의 정보를 요청할 수 있습니다.`
				]
			},
			{
				title: '아동과 방침 변경',
				body: [
					'앱은 아동을 주된 대상으로 하지 않습니다. 아동의 개인정보가 처리된 것으로 판단되면 문의해 주세요. 확인 후 필요한 조치를 취합니다.',
					'처리 방식이 변경되면 이 페이지의 최종 수정일과 내용을 갱신합니다.'
				]
			}
		],
		footerNote: `개인정보 문의: ${site.email}`
	},
	en: {
		title: 'Merge Armada Privacy Policy',
		description:
			'Privacy policy for local game saves, usage analytics, and Android rewarded ads in Merge Armada.',
		kicker: 'Merge Armada Privacy Policy',
		lastUpdated: 'September 24, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Merge Armada (package name and bundle ID com.seorilabs.mergearmada, the “App”), provided by Seori Labs. This product policy takes precedence where its data handling differs from our general policy.',
		sections: [
			{
				title: 'Game data and accounts',
				body: [
					'Your run progress, earned merit and items, fleet, equipment, and settings are stored on your device. Deleting the App removes this locally stored data.',
					'The App has no account creation or sign-in screen. It does not ask for your name, email, phone number, address, or date of birth in the game, and it currently offers no in-app purchases.'
				]
			},
			{
				title: 'Usage analytics',
				body: [
					'In release builds configured for analytics, the App sends in-game events such as launches, tutorials, deployment, merging, and battle results to Google Analytics 4, along with platform and session information and a random identifier tied to the installation. Names and contact details are not included in these events.',
					'We use this information to understand usage and stability and improve the game. You can disable usage analytics and reset the analytics identifier in the App settings. Analytics data is transmitted over HTTPS.'
				]
			},
			{
				title: 'Android advertising',
				body: [
					'On Android, the App may offer optional Google AdMob rewarded ads. To deliver and measure ads and prevent fraud, Google and its advertising partners may process advertising identifiers, device information, app and ad interactions, diagnostics, IP addresses, and approximate location inferred from them.',
					'Where consent is required, the App uses Google User Messaging Platform for advertising privacy choices. Without the required consent, ads may be limited or unavailable. Core gameplay remains available without watching ads.',
					'The current iOS release candidate does not use AdMob ads or the IDFA and does not request App Tracking Transparency permission. We will update this policy and the store disclosures before enabling iOS ads.'
				]
			},
			{
				title: 'Retention, providers, and your choices',
				body: [
					'Local game data is removed when you delete the App. Retention and processing of analytics and advertising data sent to Google follow each service’s settings and published policies. Data may be processed in countries where the providers operate.',
					'Seori Labs does not sell user data. You can turn off analytics or reset its identifier in the App settings, and reset or delete the advertising ID in Android settings.',
					`For access or deletion requests, contact ${site.email}. Because the App has no account, we may ask for the minimum information needed to identify the data covered by your request.`
				]
			},
			{
				title: 'Children and policy changes',
				body: [
					'The App is not directed primarily at children. If you believe a child’s personal information has been processed, please contact us so we can investigate and take appropriate action.',
					'If our data practices change, we will update the content and last-updated date on this page.'
				]
			}
		],
		footerNote: `Privacy questions: ${site.email}`
	}
};
