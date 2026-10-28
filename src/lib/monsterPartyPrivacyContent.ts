import type { PrivacyContent } from '$lib/privacyContent';

export const monsterPartyPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '몬스터 파티 개인정보처리방침',
		description: '기기 내 게임 저장, 보상형과 전면 광고, 광고 동의 선택에 관한 안내입니다.',
		kicker: 'Monster Party Privacy Policy',
		lastUpdated: '2026년 10월 28일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seolee Apps가 배포하는 만 13세 이상 대상 Android 게임 몬스터 파티(Monster Party, 패키지 com.seoleeapps.monsterparty)에 적용됩니다. 이 게임의 데이터 처리에는 이 제품별 방침이 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '기기에 보관하는 정보',
				body: [
					'보유 몬스터와 편성, 작전, 장비와 강화 단계, 골드와 경험치, 현재 층과 체크포인트, 최고 도달 층, 진행 중인 전투와 사건, 방치 골드 계산에 쓰는 마지막 접속 시각, 안내 진행, 언어와 소리, 진동, 큰 글자, 동작 줄이기, 전투 배속 설정, 광고 노출 횟수와 시각을 기기에 저장합니다. 저장 손상에 대비한 직전 사본도 기기에 보관합니다. 게임 저장을 운영자 서버에 전송하지 않습니다.',
					'게임에는 계정, 로그인, 클라우드 저장과 인앱 결제가 없습니다. Firebase, Google 애널리틱스와 별도 제품 이용 분석을 사용하지 않습니다. 이름, 생년월일, 연락처, 사진, 마이크와 정확한 위치를 입력받거나 접근하지 않습니다.'
				]
			},
			{
				title: '보상형 광고와 전면 광고',
				body: [
					'게임은 Google AdMob 광고를 사용합니다. 보상형 광고는 사용자가 직접 고를 때만 표시됩니다. 앱을 닫아 둔 동안 쌓인 골드를 2배로 받을 때와 층에서 패배한 뒤 회복해 바로 다시 도전할 때 쓸 수 있으며, 광고 시청 완료가 확인된 경우에만 보상을 지급합니다.',
					'전면 광고는 보스를 물리친 결과 화면에서 야영지로 돌아갈 때 표시될 수 있습니다. 첫 실행 세션과 세션 시작 후 5분 동안, 보상형 광고를 본 뒤 5분 동안에는 표시하지 않으며 한 세션에 최대 2회, 하루 최대 6회로 제한합니다. 배너 광고는 없습니다. 광고가 준비되지 않았거나 요청이 허용되지 않아도 게임을 계속할 수 있습니다.'
				]
			},
			{
				title: '광고 동의와 선택',
				body: [
					'앱을 시작할 때마다 Google User Messaging Platform(UMP)으로 동의 상태를 갱신하고, 지역에 따라 필요한 동의 화면을 표시합니다. 동의 상태가 광고 요청을 허용할 때만 광고를 준비합니다. 광고의 개인화 여부는 지역과 동의 선택, Google의 정책에 따라 달라질 수 있습니다.',
					'개인정보 선택이 필요한 지역에서는 설정의 광고 개인정보 설정에서 동의 선택을 확인하거나 변경하고 철회할 수 있습니다. Android의 광고 개인정보 설정에서 광고 ID를 재설정하거나 삭제할 수도 있습니다. 메뉴 이름은 Android 버전에 따라 다를 수 있습니다.',
					'설정의 부적절한 광고 신고는 cs@seorilabs.com으로 보내는 메일 작성 화면을 엽니다. 보낼지와 보낼 내용은 사용자가 정합니다.'
				]
			},
			{
				title: '광고 제공자가 처리하는 정보',
				body: [
					'광고는 Poing AdMob 플러그인을 통해 Google Mobile Ads Next-Gen SDK 1.4.0과 UMP에 연결됩니다. Google 광고 SDK는 광고 제공과 측정, 진단, 부정 이용 방지를 위해 IP 주소와 그로부터 추정할 수 있는 대략적 위치, 앱 실행과 탭, 동영상 재생 등 상호작용, 진단과 성능 정보, 광고 ID와 앱 세트 ID, 해당하는 경우 기기에 로그인한 계정 관련 식별자를 처리할 수 있습니다. 앱 계정이 없더라도 광고 제공자가 처리하는 기기 식별자가 있을 수 있습니다. 처리 범위는 지역과 동의 상태에 따라 달라집니다.',
					'Google은 광고 SDK가 수집하는 사용자 데이터를 전송 중 TLS로 암호화한다고 안내합니다. Google과 광고 파트너는 이용자의 국가 밖에서 정보를 처리할 수 있습니다. 처리 장소, 보관 기간과 삭제, 국외 이전 보호조치는 해당 제공자의 공개 정책에 따릅니다. 운영자는 기기에만 있는 게임 진행을 Google 광고 데이터와 연결해 전송하지 않습니다.',
					'Google 개인정보처리방침: https://policies.google.com/privacy , 광고 기술 안내: https://policies.google.com/technologies/ads , 광고 SDK 데이터 공개 안내: https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'게임 저장과 설정은 사용자가 Android 설정에서 앱 데이터를 지우거나 앱을 삭제할 때까지 기기에 남을 수 있습니다. 게임 안에는 진행 초기화 기능이 없으므로 모든 앱 데이터를 지우려면 Android의 앱 데이터 삭제나 앱 삭제를 사용하세요. Android 자동 백업은 꺼져 있어 진행이 다른 기기로 옮겨지지 않습니다. 서버 계정이 없어 계정 삭제 신청은 필요하지 않습니다.',
					'Google이 이미 처리한 광고 데이터의 보관과 삭제에는 Google의 정책과 개인정보 관리 기능이 적용됩니다. 앱 데이터를 지우는 것만으로 외부 제공자의 서버에 있는 데이터를 삭제할 수는 없습니다.'
				]
			},
			{
				title: '문의, 이용자의 요청과 방침 변경',
				body: [
					'개인정보 열람, 정정, 삭제, 처리 제한과 지원 문의는 cs@seorilabs.com으로 보내 주세요. 문의에 답하기 위해 발신 이메일 주소와 문의 내용을 처리하며 해결과 법적 보관 의무에 필요한 동안 보관한 뒤 삭제합니다. 비밀번호나 전체 저장 파일 같은 불필요한 자료는 보내지 마세요.',
					'운영자는 기기에만 있는 게임 저장에 원격으로 접근할 수 없습니다. 이 게임은 13세 미만 아동을 대상으로 하지 않습니다. 13세 미만 이용자의 정보 처리에 관한 우려가 있으면 같은 주소로 알려 주세요. 기능이나 데이터 처리 방식이 바뀌면 이 페이지의 방침과 시행일, Google Play 데이터 보안 표시를 갱신합니다.'
				]
			}
		],
		footerNote: '몬스터 파티 Android 앱의 개인정보와 지원 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Monster Party Privacy Policy',
		description: 'Local game saves, rewarded and interstitial advertising, and ad consent choices.',
		kicker: 'Monster Party Privacy Policy',
		lastUpdated: 'October 28, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Monster Party, an Android game for ages 13 and over, distributed by Seolee Apps under package com.seoleeapps.monsterparty. This product policy takes precedence over the general policy for the game’s data handling.',
		sections: [
			{
				title: 'Information stored on your device',
				body: [
					'Your monsters, party, tactics, gear and upgrade levels, gold and experience, current floor and checkpoint, deepest floor reached, any battle or event in progress, the last time you played (used to calculate idle gold), guide progress, language, sound, vibration, large text, reduced motion and battle speed settings, and ad counts and timestamps are stored on your device, along with a previous copy for recovery from save damage. Game saves are not sent to an operator server.',
					'The game has no accounts, sign-in, cloud saves or in-app purchases. It does not use Firebase, Google Analytics or separate product analytics. The game does not ask for or access your name, date of birth, contacts, photos, microphone or precise location.'
				]
			},
			{
				title: 'Rewarded and interstitial ads',
				body: [
					'The game uses Google AdMob ads. Rewarded ads appear only when you choose them: to double the gold collected while the app was closed, or to heal and retry a floor right after a defeat. The reward is granted only when the ad reports that viewing completed.',
					'An interstitial ad may appear when you return to camp from the result screen after defeating a boss. Interstitials do not appear during your first session, in the first 5 minutes of a session, or within 5 minutes after a rewarded ad, and are limited to 2 per session and 6 per day. There are no banner ads. You can keep playing when ads are unavailable or not permitted.'
				]
			},
			{
				title: 'Ad consent and choices',
				body: [
					'Each time the app starts, it updates consent information through Google User Messaging Platform (UMP) and presents a consent form where your region requires one. Ads are prepared only when the consent status permits requests. Whether ads are personalized can depend on region, consent choices and Google’s policies.',
					'Where privacy choices are required, use Ad privacy settings in Settings to review, change or withdraw your consent choices. You can also reset or delete your advertising ID through Android’s advertising privacy settings. Menu names vary by Android version.',
					'Report an inappropriate ad in Settings opens an email draft to cs@seorilabs.com. You decide whether to send it and what it contains.'
				]
			},
			{
				title: 'Information handled by advertising providers',
				body: [
					'The Poing AdMob plugin connects advertising to Google Mobile Ads Next-Gen SDK 1.4.0 and UMP. Google’s advertising SDK may handle IP addresses and inferred approximate location, interactions such as app launches, taps and video views, diagnostics and performance data, advertising IDs, app set IDs and, where applicable, identifiers related to accounts signed in on the device, for ad delivery, measurement, diagnostics and fraud prevention. Device identifiers may be processed even though the game has no account. Processing depends on region and consent.',
					'Google states that user data collected by its advertising SDK is encrypted in transit using TLS. Google and advertising partners may process data outside your country. Their published policies govern processing locations, retention, deletion and international transfer safeguards. The operator does not send local game progress linked to Google advertising data.',
					'Google Privacy Policy: https://policies.google.com/privacy , advertising technologies: https://policies.google.com/technologies/ads , advertising SDK data disclosure: https://developers.google.com/admob/android/next-gen/privacy/play-data-disclosure'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Game saves and settings may remain on your device until you clear app data in Android settings or uninstall the app. The game has no in-game progress reset, so use Android’s clear app data or uninstall to remove all app data. Android automatic backup is disabled, so progress does not move to another device. There is no server account, so no account deletion request is needed.',
					'Google’s policies and privacy controls govern retention and deletion of advertising data it has already processed. Clearing app data alone cannot delete data held on an external provider’s servers.'
				]
			},
			{
				title: 'Contact, your requests and policy changes',
				body: [
					'For access, correction, deletion, processing restrictions or support, email cs@seorilabs.com. We process your sender email address and message to respond, retaining them only as needed to resolve your inquiry and meet legal retention duties before deletion. Do not send unnecessary information such as passwords or a complete save file.',
					'The operator cannot remotely access game saves stored only on your device. This game is not directed to children under 13. Contact the same address if you have concerns about information processed for someone under 13. If features or data handling change, we will update this page, its effective date and the Google Play Data safety section.'
				]
			}
		],
		footerNote: 'Privacy and support for the Monster Party Android app: cs@seorilabs.com'
	}
};
