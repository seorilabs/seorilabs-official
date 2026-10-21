import type { PrivacyContent } from '$lib/privacyContent';

export const starlitApprenticePrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '별빛 견습생 개인정보처리방침',
		description: '기기 내 게임 저장, 연령대와 언어 설정, 전면 광고와 개인정보 선택 안내입니다.',
		kicker: 'Starlit Apprentice Privacy Policy',
		lastUpdated: '2026년 10월 21일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seolee Apps가 배포하는 만 13세 이상 대상 Android 게임 별빛 견습생(Starlit Apprentice, 패키지 com.seorilabs.starlitapprentice)에 적용됩니다. 이 게임의 데이터 처리에는 이 제품별 방침이 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '기기에 보관하는 정보',
				body: [
					'현재 게임 진행과 선택 결과, 엔딩 기록, 완주 횟수, 소리와 언어 설정, 선택한 연령대, 광고 노출 횟수와 시간, 손상 복구용 저장 백업은 기기에 보관합니다. 저장 정보는 이어하기, 결과 기록, 언어와 소리 선택 유지, 광고 횟수와 간격 제한에 사용합니다. 게임 저장을 운영자 서버에 전송하지 않습니다.',
					'게임에는 계정, 로그인, 클라우드 저장과 인앱 결제가 없습니다. Firebase, Google 애널리틱스 4, 원격 설정과 별도 제품 이용 분석을 사용하지 않습니다. 이름, 생년월일과 연락처를 게임에 입력할 필요가 없습니다.'
				]
			},
			{
				title: '연령대와 청소년 광고 제한',
				body: [
					'연령대는 13세 미만, 13~15세, 16~17세, 18세 이상 중에서 선택합니다. 선택한 연령대는 기기에 저장하며 정확한 생년월일은 받지 않습니다. 연령대를 선택하지 않았거나 13세 미만을 선택한 경우 광고를 요청하지 않습니다.',
					'13~17세에는 광고 요청과 Google 동의 확인 양쪽에 동의 연령 미만 처리 제한을 적용하고 비개인화 광고를 요청합니다. 선택한 연령대에서 정한 제한 신호가 Google에 전달됩니다. 지역별 광고 동의 요건을 확인하지 못하면 광고를 생략합니다. 연령대는 타이틀 화면에서 변경할 수 있습니다.'
				]
			},
			{
				title: '전면 광고와 동의 선택',
				body: [
					'게임은 Google AdMob 전면 광고를 사용합니다. 월말 정산과 그 턴의 이벤트 결과를 확인한 뒤 다음 행동 화면으로 넘어갈 때 제한된 횟수로 표시할 수 있습니다. 튜토리얼과 세션 시작 후 첫 180초에는 표시하지 않습니다. 배너 광고, 보상형 광고와 광고 시청 보상은 없습니다. 광고가 허용되지 않거나 준비되지 않아도 게임을 계속할 수 있습니다.',
					'광고를 요청할 수 있는 연령대에서는 Google User Messaging Platform(UMP)으로 동의 상태를 갱신하고 필요한 동의 화면을 제공합니다. 동의 상태가 광고 요청을 허용할 때만 광고를 준비합니다. 성인 광고의 개인화 여부는 지역과 동의 선택, Google의 정책에 따라 달라질 수 있습니다.',
					'타이틀 화면의 광고 개인정보 설정에서 이용 가능한 동의 선택을 확인하거나 변경하고 철회할 수 있습니다. Google이 해당 설정 화면을 제공하지 않는 경우에는 변경할 설정이 없다는 안내가 표시됩니다. Android의 광고 개인정보 설정에서 광고 식별자를 재설정하거나 삭제할 수도 있습니다. 메뉴 이름은 Android 버전에 따라 다를 수 있습니다.'
				]
			},
			{
				title: '광고 제공자가 처리하는 정보',
				body: [
					'광고는 Poing AdMob 플러그인을 통해 Google Mobile Ads Next-Gen SDK와 UMP에 연결됩니다. Google 광고 SDK는 광고 제공과 측정, 진단, 부정 이용 방지를 위해 IP 주소와 그로부터 추정할 수 있는 대략적 위치, 앱 실행과 광고 상호작용, 진단과 성능 정보, 광고 ID와 앱 세트 ID 등 허용된 식별자를 처리할 수 있습니다. 앱 계정이 없더라도 광고 제공자가 처리하는 기기 식별자가 있을 수 있습니다. 처리 범위는 지역, 동의 상태와 연령 제한에 따라 달라집니다.',
					'Google은 광고 SDK가 수집하는 사용자 데이터를 전송 중 TLS로 암호화한다고 안내합니다. Google과 광고 파트너는 이용자의 국가 밖에서 정보를 처리할 수 있습니다. 처리 장소, 보관 기간과 삭제, 국외 이전 보호조치는 해당 제공자의 공개 정책에 따릅니다. 운영자는 기기에만 있는 게임 진행을 Google 광고 데이터와 연결해 전송하지 않습니다.',
					'Google 개인정보처리방침: https://policies.google.com/privacy , 광고 기술 안내: https://policies.google.com/technologies/ads , 광고 SDK 데이터 공개 안내: https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'게임 저장과 설정은 사용자가 Android 설정에서 앱 데이터를 지우거나 앱을 삭제할 때까지 기기에 남을 수 있습니다. 새로 시작은 새 게임을 만드는 기능이며 엔딩 기록, 설정과 모든 복구 백업을 지우는 기능이 아닙니다. 앱 내부 데이터 전체를 삭제하려면 Android의 앱 데이터 삭제 또는 앱 삭제를 사용하세요. Android 자동 백업은 비활성화되어 있습니다.',
					'Google이 이미 처리한 광고 데이터의 보관과 삭제에는 Google의 정책과 개인정보 관리 기능이 적용됩니다. 앱 데이터를 지우는 것만으로 외부 제공자의 서버에 있는 데이터를 삭제할 수는 없습니다.'
				]
			},
			{
				title: '문의, 이용자의 요청과 방침 변경',
				body: [
					'개인정보 열람, 정정, 삭제, 처리 제한과 지원 문의는 cs@seorilabs.com으로 보내 주세요. 문의에 답하기 위해 발신 이메일 주소와 문의 내용을 처리하며 해결과 법적 보관 의무에 필요한 동안 보관한 뒤 삭제합니다. 비밀번호, 정확한 생년월일이나 전체 저장 파일 같은 불필요한 자료는 보내지 마세요.',
					'운영자는 기기에만 있는 게임 저장에 원격으로 접근할 수 없습니다. 13세 미만 이용자의 정보 처리에 관한 우려가 있으면 같은 주소로 알려 주세요. 기능이나 데이터 처리 방식이 바뀌면 이 페이지의 방침과 시행일을 갱신합니다.'
				]
			}
		],
		footerNote: '별빛 견습생 Android 앱의 개인정보와 지원 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Starlit Apprentice Privacy Policy',
		description:
			'Local game saves, age and language settings, interstitial advertising and privacy choices.',
		kicker: 'Starlit Apprentice Privacy Policy',
		lastUpdated: 'October 21, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Starlit Apprentice, an Android game for ages 13 and over, distributed by Seolee Apps under package com.seorilabs.starlitapprentice. This product policy takes precedence over the general policy for the game’s data handling.',
		sections: [
			{
				title: 'Information stored on your device',
				body: [
					'Your current game progress and choice results, ending records, completed-run count, sound and language preferences, selected age group, ad counts and timestamps, and recovery backups are stored on your device. They support resuming your game, recording results, keeping preferences, and limiting ad frequency. Game saves are not sent to an operator server.',
					'The game has no accounts, sign-in, cloud saves or in-app purchases. It does not use Firebase, Google Analytics 4, remote configuration or separate product analytics. You do not need to enter your name, date of birth or contact details into the game.'
				]
			},
			{
				title: 'Age groups and advertising restrictions for minors',
				body: [
					'The age groups are under 13, ages 13–15, ages 16–17, and ages 18 and over. Your selection is stored on your device; an exact date of birth is not requested. No ads are requested if you have not selected an age group or select under 13.',
					'For ages 13–17, under-age-of-consent restrictions are applied to both ad requests and Google consent checks, and non-personalized ads are requested. Google receives restriction signals derived from your selected age group. Ads are skipped when applicable regional consent requirements cannot be confirmed. You can change your age group on the title screen.'
				]
			},
			{
				title: 'Interstitial ads and consent choices',
				body: [
					'The game uses Google AdMob interstitial ads. A limited number may appear after you finish a month-end summary and all event results for that turn, before the next action screen. They do not appear during the tutorial or the first 180 seconds of a session. There are no banner ads, rewarded ads or rewards for watching ads. You can continue playing when ads are unavailable or not permitted.',
					'For age groups eligible for ad requests, Google User Messaging Platform (UMP) updates consent information and presents required consent forms. Ads are prepared only when the consent status permits requests. Whether adult ads are personalized can depend on region, consent choices and Google’s policies.',
					'Use Ad Privacy Settings on the title screen to review, change or withdraw available consent choices. If Google does not provide that settings form, the game explains that no settings are available to change. You can also reset or delete your advertising ID through Android’s advertising privacy settings. Menu names vary by Android version.'
				]
			},
			{
				title: 'Information handled by advertising providers',
				body: [
					'The Poing AdMob plugin connects advertising to Google Mobile Ads Next-Gen SDK and UMP. Google’s advertising SDK may handle IP addresses and inferred approximate location, app launches and ad interactions, diagnostics and performance data, and permitted identifiers such as advertising IDs and app set IDs, for ad delivery, measurement, diagnostics and fraud prevention. Device identifiers may be processed even though the game has no account. Processing depends on region, consent and age restrictions.',
					'Google states that user data collected by its advertising SDK is encrypted in transit using TLS. Google and advertising partners may process data outside your country. Their published policies govern processing locations, retention, deletion and international transfer safeguards. The operator does not send local game progress linked to Google advertising data.',
					'Google Privacy Policy: https://policies.google.com/privacy , advertising technologies: https://policies.google.com/technologies/ads , advertising SDK data disclosure: https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Game saves and preferences may remain on your device until you clear app data in Android settings or uninstall the app. New Game starts a new run; it does not erase ending records, preferences and every recovery backup. To remove all internal app data, clear app data or uninstall through Android. Android automatic backup is disabled.',
					'Google’s policies and privacy controls govern retention and deletion of advertising data it has already processed. Clearing app data alone cannot delete data held on an external provider’s servers.'
				]
			},
			{
				title: 'Contact, your requests and policy changes',
				body: [
					'For access, correction, deletion, processing restrictions or support, email cs@seorilabs.com. We process your sender email address and message to respond, retaining them only as needed to resolve your inquiry and meet legal retention duties before deletion. Do not send unnecessary information such as passwords, an exact date of birth or a complete save file.',
					'The operator cannot remotely access game saves stored only on your device. Contact the same address if you have concerns about information processed for someone under 13. If features or data handling change, we will update this page and its effective date.'
				]
			}
		],
		footerNote: 'Privacy and support for the Starlit Apprentice Android app: cs@seorilabs.com'
	}
};
