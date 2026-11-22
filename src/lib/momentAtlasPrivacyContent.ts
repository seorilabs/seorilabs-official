import type { PrivacyContent } from '$lib/privacyContent';

export const momentAtlasPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	en: {
		title: 'Moment Atlas Privacy Policy',
		description: 'How Moment Atlas stores game progress and handles advertising and support.',
		footerNote: 'Questions about privacy or the game: cs@seorilabs.com.',
		kicker: 'Moment Atlas',
		lastUpdated: 'November 22, 2026',
		lastUpdatedLabel: 'Effective date',
		backLabel: 'Seori Labs home',
		languageLabel: 'Language',
		intro:
			'This policy covers Moment Atlas: Timeline Puzzle (com.seoleeapps.momentatlas), operated by Seori Labs and distributed as Seolee Apps on Google Play.',
		sections: [
			{
				title: 'Game progress and settings',
				body: [
					'The game keeps your daily puzzle history, scores, stamp album, settings and limited game activity counts on your device. Seori Labs has no game account or server that receives these records. Removing the app or clearing its storage removes the local game records. You can play without an internet connection.'
				]
			},
			{
				title: 'Ads on Android',
				body: [
					'We use Google AdMob for optional rewarded ads and occasional full-screen ads after a run. AdMob may collect your IP address and infer your approximate location, collect in-app ad interactions, diagnostics and performance data, and process the Android advertising ID, app set ID and other device or account identifiers. Google uses these data for advertising, measurement, security and fraud prevention and may share data with its advertising partners.',
					'Where required, Google User Messaging Platform displays a privacy choice. When a privacy-options control is available, open Settings in the game to change your choices. Android also lets you reset or delete its advertising ID. Google’s Privacy Policy is at https://policies.google.com/privacy and information about advertising is at https://policies.google.com/technologies/ads.'
				]
			},
			{
				title: 'Sharing and external links',
				body: [
					'The share button copies a results postcard to your clipboard so you can decide where to send it. If you open a source link, your browser and the linked site handle that visit under their own policies.'
				]
			},
			{
				title: 'Support and your choices',
				body: [
					'If you contact cs@seorilabs.com, we use the email address and message you send to answer and handle your request. Use the same address for privacy questions or requests. Seori Labs does not ask for your name, phone number, precise location or payment information in the game. Google describes its data handling and controls at https://myaccount.google.com/data-and-privacy.'
				]
			}
		]
	},
	ko: {
		title: '모먼트 아틀라스 개인정보 처리방침',
		description: '모먼트 아틀라스의 기기 저장, 광고와 문의에 관한 개인정보 처리방침입니다.',
		footerNote: '개인정보와 게임 문의는 cs@seorilabs.com으로 보내 주세요.',
		kicker: 'Moment Atlas',
		lastUpdated: '2026년 11월 22일',
		lastUpdatedLabel: '시행일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 서리랩스(Seori Labs)가 운영하고 Google Play에서 Seolee Apps 이름으로 배포하는 모먼트 아틀라스: 시대의 우체국(com.seoleeapps.momentatlas)에 적용됩니다.',
		sections: [
			{
				title: '진행 기록과 설정',
				body: [
					'데일리 연표 기록, 점수, 우표 도감, 설정과 일부 플레이 횟수를 기기에 저장합니다. 서리랩스는 게임 계정이나 이 기록을 받는 서버를 운영하지 않습니다. 앱을 삭제하거나 앱 저장 공간을 지우면 기기의 기록이 삭제됩니다. 인터넷 없이도 게임을 플레이할 수 있습니다.'
				]
			},
			{
				title: 'Android 광고',
				body: [
					'선택형 보상 광고와 판이 끝난 뒤의 전면 광고를 Google AdMob으로 제공합니다. AdMob은 IP 주소에서 대략적인 위치를 추정하고, 앱 내 광고 상호작용, 진단·성능 데이터, Android 광고 ID, 앱 세트 ID나 기타 기기 또는 계정 식별자를 처리할 수 있습니다. Google은 광고 제공, 효과 측정, 보안 및 부정행위 방지에 이 데이터를 사용하며 광고 파트너와 공유할 수 있습니다.',
					'동의가 필요한 곳에서는 Google User Messaging Platform에서 개인정보 처리 선택을 안내합니다. 게임 설정에 개인정보 선택 항목이 있을 때 선택을 바꿀 수 있습니다. Android 설정에서도 광고 ID를 재설정하거나 삭제할 수 있습니다. Google 개인정보처리방침은 https://policies.google.com/privacy , 광고 안내는 https://policies.google.com/technologies/ads 에서 볼 수 있습니다.'
				]
			},
			{
				title: '공유와 외부 링크',
				body: [
					'결과 엽서는 기기의 클립보드에 복사되며 어디에 전송할지는 사용자가 정합니다. 자료 출처를 열면 해당 방문에 브라우저와 연결된 사이트의 정책이 적용됩니다.'
				]
			},
			{
				title: '문의와 이용자 선택',
				body: [
					'cs@seorilabs.com으로 문의하면, 보내 주신 이메일 주소와 메시지를 답변과 요청 처리에 사용합니다. 개인정보 관련 문의도 같은 주소로 보내 주세요. 게임에서는 이름, 연락처, 정밀 위치 또는 결제 정보를 입력받지 않습니다. Google의 데이터 관리 기능은 https://myaccount.google.com/data-and-privacy 에서 볼 수 있습니다.'
				]
			}
		]
	}
};
