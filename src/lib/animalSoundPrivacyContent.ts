import { site, type Locale } from '$lib/content';
import type { LegalDocContent } from '$lib/legal/types';

export const animalSoundPrivacyPaths: Array<{ key: Locale; path: string }> = [
	{ key: 'ko', path: '/apps/animal-sound-12/privacy/' },
	{ key: 'en', path: '/en/apps/animal-sound-12/privacy/' }
];

export const animalSoundPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: 'Animal Sound 12 개인정보처리방침',
		description:
			'Animal Sound 12의 기기 내 기능, 광고, 고객지원에 적용되는 개인정보처리방침입니다.',
		kicker: '12가지 동물의 소리',
		lastUpdated: '2026년 11월 22일',
		intro:
			'이 방침은 서리랩스(Seori Apps)가 제공하는 Animal Sound 12(12가지 동물의 소리, 앱 식별자 com.github.magicsih.animalsoundapp)에 적용됩니다.',
		sections: [
			{
				title: '기기에서 사용하는 정보',
				body: [
					'동물 도감, 검색, 녹음 재생, 퀴즈는 기기에서 실행됩니다. 앱에는 회원가입이나 로그인 기능이 없으며, 운영자는 검색어와 퀴즈 답안을 서버로 받지 않습니다.',
					'앱은 마이크나 사진에 접근하지 않습니다. 앱을 삭제하면 기기에 저장된 앱 데이터도 삭제됩니다.'
				]
			},
			{
				title: '광고 제공과 Google의 데이터 사용',
				body: [
					'기기가 인터넷에 연결되어 있고 광고 요청 조건을 충족하면 앱은 Google AdMob에 비개인화 배너 광고를 요청합니다.',
					'Google Mobile Ads SDK는 광고 제공과 효과 측정, 성능 분석, 부정 사용 방지를 위해 IP 주소, 앱과 광고의 상호작용, 진단 정보, 기기 또는 앱 관련 식별자를 처리하고 공유할 수 있습니다. Google은 IP 주소로 대략적인 지역을 추정할 수 있습니다.',
					'Google이 처리하는 정보의 보관 및 삭제에는 Google 개인정보처리방침이 적용됩니다. 관련 안내는 이 페이지 하단의 링크에서 확인할 수 있습니다.'
				]
			},
			{
				title: '광고 개인정보 선택',
				body: [
					'광고 동의가 필요한 지역에서는 앱의 동의 화면에서 선택할 수 있습니다. 앱 설정에 광고 개인정보 옵션이 표시되면 그곳에서 선택을 바꿀 수 있습니다.',
					'인터넷 연결 없이도 도감, 녹음, 퀴즈를 이용할 수 있습니다.'
				]
			},
			{
				title: '고객지원 정보와 이용자 권리',
				body: [
					'직접 지원을 요청하면 답변에 필요한 이메일 주소와 문의 내용을 받습니다. 문의에 답변하고 문의 기록을 관리하는 데 사용하며, 목적 달성 후 삭제합니다. 법령상 보관 의무가 있는 기록은 해당 기간 동안 보관합니다.',
					`문의 정보의 열람, 정정, 삭제나 아동의 개인정보 처리에 관한 문의는 ${site.email}로 보내 주세요.`
				]
			}
		],
		footerNote: '개인정보 관련 요청은 서리랩스 고객지원으로 보내 주세요.'
	},
	en: {
		title: 'Animal Sound 12 Privacy Policy',
		description:
			'Privacy policy for on-device features, advertising, and customer support in Animal Sound 12.',
		kicker: 'Animal Sound 12',
		lastUpdated: 'November 22, 2026',
		intro:
			'This policy applies to Animal Sound 12 (app identifier com.github.magicsih.animalsoundapp), provided by Seori Labs (Seori Apps).',
		sections: [
			{
				title: 'Information used on your device',
				body: [
					'The field guide, search, sound playback, and quiz run on your device. The app has no sign-up or login, and the developer does not receive your searches or quiz answers on its servers.',
					'The app does not access your microphone or photos. Uninstalling the app removes its data from the device.'
				]
			},
			{
				title: 'Advertising and data used by Google',
				body: [
					'When your device is online and the conditions for requesting ads are met, the app requests non-personalized banner ads from Google AdMob.',
					'The Google Mobile Ads SDK may process and share IP addresses, app and ad interactions, diagnostics, and device or app-related identifiers for ad delivery and measurement, performance analysis, and abuse prevention. Google may infer a coarse location from your IP address.',
					'The Google Privacy Policy describes how Google retains and deletes the information it processes. See the links below.'
				]
			},
			{
				title: 'Advertising privacy choices',
				body: [
					'Where ad consent is required, you can make your choice in the in-app consent form. If advertising privacy choices appear in the app settings, you can change your choice there.',
					'The field guide, sounds, and quiz are available offline.'
				]
			},
			{
				title: 'Customer support information and your rights',
				body: [
					'If you contact support, we receive your email address and the message you send. We use the information to respond and manage the support request. We delete it when it is no longer needed for these purposes or retain it for the period required by law.',
					`To access, correct, or delete support information, or if you have a question about the handling of a child’s personal information, email ${site.email}.`
				]
			}
		],
		footerNote: 'Send privacy requests to Seori Labs customer support.'
	}
};
