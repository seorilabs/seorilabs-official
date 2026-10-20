import type { PrivacyContent } from '$lib/privacyContent';

export const keeumPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '내 새끼 대학 보내기 개인정보처리방침',
		description:
			'기기에 저장하는 게임 진행, 선택형 보상 광고, 전면 광고와 개인정보 선택 안내입니다.',
		kicker: 'Keeum Privacy Policy',
		lastUpdated: '2026년 10월 21일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seolee Apps가 배포하는 Android 육성 게임 내 새끼 대학 보내기(패키지 com.seorilabs.keeum)에 적용됩니다. 이 제품의 데이터 처리에는 본 제품별 방침이 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '기기에 보관하는 게임 정보',
				body: [
					'게임은 사용자가 지은 가상 자녀의 이름과 외형, 진행 상황, 선택 기록, 엔딩 도감, 젬, 꾸미기 아이템, 광고 보상 횟수와 설정을 기기에 저장합니다. 자녀 이름에 실제 개인정보를 입력할 필요가 없습니다. 로그인, 앱 운영자의 서버, 클라우드 저장, Firebase, 별도 이용 지표 수집과 결제를 사용하지 않습니다. 게임 저장을 운영자에게 전송하지 않습니다.'
				]
			},
			{
				title: '광고와 동의 선택',
				body: [
					'Google AdMob 보상형 광고는 활동 보너스 칸 또는 홈의 일일 젬 보상을 사용자가 선택했을 때 표시할 수 있습니다. 제한된 전면 광고는 학기 정산과 후속 화면을 마친 뒤 홈으로 돌아갈 때 표시할 수 있습니다. 가족 대화와 엔딩 화면에는 광고를 표시하지 않습니다. 광고가 허용되지 않거나 제공되지 않아도 기본 활동으로 게임을 끝까지 진행할 수 있습니다.',
					'앱을 시작할 때 Google User Messaging Platform으로 동의 상태를 갱신하고, 필요한 동의 화면을 제공합니다. 동의 상태가 광고 요청을 허용할 때만 광고 SDK를 초기화합니다. 개인정보 선택 변경이 필요한 지역에서는 설정에 광고 개인정보 선택 버튼이 표시됩니다. Android 설정에서 광고 식별자를 재설정하거나 삭제할 수 있습니다.'
				]
			},
			{
				title: '광고 제공자가 처리하는 정보',
				body: [
					'Google Mobile Ads와 User Messaging Platform은 광고 제공과 측정, 오류 진단, 부정 이용 방지를 위해 IP 주소, 광고 상호작용, 진단 정보와 기기 식별자 등을 처리할 수 있습니다. IP 주소는 대략적인 위치를 추정하는 데 사용될 수 있습니다. 광고 SDK가 수집하는 사용자 데이터는 전송 중 암호화됩니다. 처리 범위는 지역과 동의 상태에 따라 달라질 수 있습니다.',
					'Google과 광고 파트너는 이용자의 국가 밖에서 정보를 처리할 수 있습니다. 처리 장소, 보관 기간과 삭제, 국외 이전 보호조치는 해당 제공자의 공개 정책을 따릅니다. https://policies.google.com/privacy 와 https://policies.google.com/technologies/ads 에서 확인할 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'게임 내 설정의 데이터 초기화는 현재 진행과 도감, 재화와 꾸미기 아이템을 초기 상태로 바꿉니다. 손상 복구용 이전 백업과 저장한 결과 카드는 앱 내부에 남아 있을 수 있습니다. 소리와 글자 크기 등 접근성 설정은 초기화 후에도 유지됩니다. Android 설정에서 앱 데이터를 지우거나 앱을 삭제하면 앱 내부에 보관한 데이터가 삭제됩니다. Android 자동 백업은 비활성화되어 있습니다.',
					'결과 카드 저장을 선택하면 이미지가 앱 내부에 만들어집니다. 다른 위치에 복사하거나 별도 앱으로 전달한 파일은 해당 위치에서 직접 삭제해야 합니다. 앱은 카메라와 마이크, 사진 보관함 접근 권한을 요청하지 않습니다.'
				]
			},
			{
				title: '문의와 방침 변경',
				body: [
					'개인정보 열람, 정정, 삭제와 처리 제한, 지원 문의는 cs@seorilabs.com으로 보내 주세요. 문의 응답을 위해 발신 이메일 주소와 문의 내용을 처리하며 해결과 법적 보관 의무에 필요한 동안 보관한 뒤 삭제합니다. 비밀번호나 전체 게임 저장 파일 같은 불필요한 자료는 보내지 마세요.',
					'게임은 성인 학부모 관점의 허구 육성 게임이며 아동을 대상으로 설계하지 않았습니다. 기능이나 데이터 처리 방식이 바뀌면 이 페이지의 방침과 시행일을 갱신합니다.'
				]
			}
		],
		footerNote: '내 새끼 대학 보내기 Android 앱의 개인정보와 지원 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Keeum Privacy Policy',
		description: 'Local game saves, optional rewarded ads, interstitial ads and privacy choices.',
		kicker: 'Keeum Privacy Policy',
		lastUpdated: 'October 21, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to the Android parenting game 내 새끼 대학 보내기 (Keeum), distributed by Seolee Apps, package com.seorilabs.keeum. This product policy takes precedence over the general policy for the game’s data handling.',
		sections: [
			{
				title: 'Game information on your device',
				body: [
					'The game stores your fictional child’s name and appearance, progress, choices, ending collection, gems, cosmetic items, ad reward counts and preferences on your device. You do not need to enter a real child’s information. It has no sign-in, operator server, cloud saves, Firebase, separate product analytics or payments. Game saves are not sent to the operator.'
				]
			},
			{
				title: 'Advertising and consent',
				body: [
					'You can choose a Google AdMob rewarded ad for an activity bonus slot or a daily gem reward on Home. Limited interstitial ads may appear on returning Home after a term summary and subsequent screens. Ads do not appear during family conversations or endings. You can complete the game using the basic activities when advertising is not allowed or unavailable.',
					'The app updates consent information through Google User Messaging Platform on launch and presents a consent form when required. The advertising SDK initializes only when the consent status permits ad requests. Settings shows an Ad privacy choices button when required in your region. You can reset or delete the advertising ID in Android settings.'
				]
			},
			{
				title: 'Information handled by advertising providers',
				body: [
					'Google Mobile Ads and User Messaging Platform may process IP addresses, advertising interactions, diagnostics and device identifiers to provide and measure ads, diagnose problems and prevent abuse. An IP address may be used to estimate a general location. User data collected by the advertising SDK is encrypted in transit. Processing can vary by region and consent status.',
					'Google and advertising partners may process information outside your country. Their published policies govern processing locations, retention, deletion and international transfer safeguards. See https://policies.google.com/privacy and https://policies.google.com/technologies/ads.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Reset data in the game’s Settings resets the current game progress, ending collection, currencies and cosmetic items. An earlier recovery backup and saved result cards may remain inside the app. Accessibility preferences such as sound and text size remain after this reset. Clearing app data in Android settings or uninstalling removes internal app data. Android automatic backup is disabled.',
					'Saving a result card creates an image inside the app. Delete any file you copy to another location or send to another app at that location. The game does not request access to the camera, microphone or photo library.'
				]
			},
			{
				title: 'Contact and updates',
				body: [
					'For access, correction, deletion, processing restrictions or support, contact cs@seorilabs.com. We use the sender address and message to answer the request and retain them only as needed for resolution or legal obligations, then delete them. Do not send passwords or unnecessary materials such as a full game save.',
					'The game presents a fictional parenting story from an adult parent’s perspective and is not designed for children. We will update this page and its effective date when features or data practices change.'
				]
			}
		],
		footerNote: 'Privacy and support for Keeum on Android: cs@seorilabs.com'
	}
};
