import type { LegalDocContent } from '$lib/legal/types';

export const weMoorPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: 'We Moor Android 개인정보 처리방침',
		description: 'We Moor가 마을을 저장하고 Android 광고를 제공하는 방법을 안내합니다.',
		kicker: 'We Moor',
		lastUpdated: '2026년 11월 25일',
		intro: '이 방침은 Seori Labs의 We Moor Android 앱(com.seorilabs.wemoor)에 적용됩니다.',
		sections: [
			{
				title: '마을 저장',
				body: [
					'마을, 진행 기록과 설정은 기기에 저장합니다. 게임 계정 가입이 필요 없으며 서버에 마을을 보관하지 않습니다. 앱 데이터를 지우거나 앱을 삭제하면 기기에 남은 진행 기록이 사라질 수 있습니다.'
				]
			},
			{
				title: '광고',
				body: [
					'항구 사무소의 선택형 광고와 교역 정산 뒤 전면 광고에 Google AdMob을 사용합니다. 광고 사용 설정을 확인하기 위해 Seori Labs의 웹사이트에 연결합니다. 광고가 표시되지 않아도 게임을 계속할 수 있습니다.',
					'Google Mobile Ads SDK는 광고 제공, 측정과 부정 사용 방지를 위해 대략적인 위치를 추정하는 데 쓰이는 IP 주소, 앱과 광고 상호작용, 진단 정보, Android 광고 ID 등 기기 식별자를 수집하고 공유할 수 있습니다. SDK는 이 정보를 전송 중 암호화합니다. Google의 데이터 처리 방식은 https://policies.google.com/technologies/partner-sites 에서 확인할 수 있습니다.',
					'광고 개인정보 선택이 필요한 지역에서는 Google 사용자 메시지 플랫폼(UMP)이 선택 화면을 제공합니다. 해당 지역에서는 게임 설정의 광고 개인정보 옵션에서 선택을 확인하거나 바꿀 수 있습니다. Android 설정에서도 광고 ID를 초기화하거나 삭제할 수 있습니다.'
				]
			},
			{
				title: '지원과 이용자 권리',
				body: [
					'메일로 문의하면 발신자 주소와 문의 내용, 첨부 자료를 요청에 답하는 데 사용합니다. 요청을 처리하는 데 필요한 기간 동안 보관하고 이후 삭제합니다. 문의 자료의 열람·정정·삭제를 요청하려면 cs@seorilabs.com으로 연락해 주세요.',
					'We Moor는 13세 이상을 대상으로 하며 지역별 스토어 등급이 적용됩니다. 정보 처리 방식이 바뀌면 방침을 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원 문의는 cs@seorilabs.com으로 보내 주세요.'
	},
	en: {
		title: 'We Moor Android Privacy Policy',
		description: 'How We Moor saves your town and serves ads on Android.',
		kicker: 'We Moor',
		lastUpdated: 'November 25, 2026',
		intro: 'This policy applies to We Moor for Android (com.seorilabs.wemoor) by Seori Labs.',
		sections: [
			{
				title: 'Town saves',
				body: [
					'We Moor stores your town, progress and settings on your device. The game requires no account, and we keep no server copy of your town. Clearing app data or uninstalling the game can erase progress stored on the device.'
				]
			},
			{
				title: 'Advertising',
				body: [
					'We use Google AdMob for optional ads in the harbor office and full-screen ads after settling trade orders. We connect to the Seori Labs website to check whether advertising is enabled. You can keep playing when ads are unavailable.',
					'The Google Mobile Ads SDK may collect and share IP addresses used to estimate approximate location, interactions with the game and ads, diagnostics, and device identifiers such as the Android advertising ID. Google uses this data to deliver and measure ads and prevent fraud. The SDK encrypts the data in transit. See https://policies.google.com/technologies/partner-sites for details.',
					'Google’s User Messaging Platform (UMP) presents privacy choices where required. In those regions, you can revisit your selection under Ad privacy options in the game settings. Android settings also let you reset or delete your advertising ID.'
				]
			},
			{
				title: 'Support and your rights',
				body: [
					'If you email us, we use your email address, message and attachments to handle your request. We retain this information while needed to resolve the request and then delete it. To request access to, correction of or deletion of your support information, email cs@seorilabs.com.',
					'We Moor is intended for players aged 13 and older. Local store ratings apply. We update this policy when data practices change.'
				]
			}
		],
		footerNote: 'For privacy and game support, email cs@seorilabs.com.'
	}
};
