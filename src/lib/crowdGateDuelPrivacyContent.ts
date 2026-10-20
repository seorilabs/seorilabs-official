import type { PrivacyContent } from '$lib/privacyContent';

export const crowdGateDuelPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: 'Crowd Gate Duel 개인정보처리방침',
		description: '오프라인 봇 대전, 로컬 진행 저장, 결과 카드 공유와 광고의 개인정보 처리 안내',
		kicker: 'Crowd Gate Duel Privacy Policy',
		lastUpdated: '2026-10-21',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seolee Apps에서 배포하는 Android 게임 Crowd Gate Duel, 갈림길 군중 대전(패키지 com.seoleeapps.crowdgateduel)에 적용합니다. 대상 연령은 만 13세 이상이며 이 제품별 방침이 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '오프라인 게임과 기기 저장',
				body: [
					'게임은 기기의 봇과 대전하며 계정 가입, 로그인, Firebase, 서버 기록, 클라우드 동기화와 인앱결제를 사용하지 않습니다. 운영자가 별도 게임 이용 분석 SDK로 대국 기록을 수집하지 않습니다.',
					'전적, 난이도, 깃털, 꾸미기, 설정, 튜토리얼 진행과 진행 중인 대국을 기기에 저장합니다. 저장 손상에 대비한 직전 사본도 기기에 보관합니다. 이름, 이메일, 연락처, 사진, 마이크와 정확한 위치를 입력받거나 접근하지 않습니다.'
				]
			},
			{
				title: '전면광고와 동의',
				body: [
					'일반 대국의 결과를 보여 준 다음 준비된 Google AdMob 전면광고가 표시될 수 있습니다. 튜토리얼, 대국 도중, 앱 시작과 복귀에는 전면광고를 표시하지 않습니다. 광고가 없거나 광고 요청이 허용되지 않아도 게임과 보상을 이용할 수 있습니다.',
					'Google Mobile Ads SDK와 User Messaging Platform(UMP)은 광고 제공, 측정, 진단, 동의 관리와 부정 이용 방지를 위해 IP 주소, 광고 및 앱 상호작용, 성능과 진단 정보, Android 광고 ID와 앱 또는 기기 식별자를 처리하고 공유할 수 있습니다. IP 주소로 대략적인 위치를 추정할 수 있습니다. SDK 데이터는 전송 중 TLS로 암호화되며 지역, 설정과 동의에 따라 처리 범위가 달라질 수 있습니다.',
					'매 실행 시 동의 상태를 갱신하고 SDK가 광고 요청을 허용한 경우에만 광고를 준비합니다. 지역에 따라 동의 양식이 표시될 수 있으며, 설정에 개인정보 선택 항목이 제공되면 선택을 확인하거나 변경할 수 있습니다. Android 설정에서 광고 ID를 재설정하거나 삭제할 수 있습니다.'
				]
			},
			{
				title: '결과 카드 공유',
				body: [
					'공유를 선택하면 대국 장면과 점수로 만든 PNG를 기기에 저장하고 Android 공유창에 전달합니다. 앱이 대신 게시하거나 전송 대상을 선택하지 않습니다. 사용자가 선택한 외부 앱과 전달한 파일에는 해당 제공자의 정책이 적용됩니다. 공유용 임시 캐시는 24시간 뒤 다음 공유 때 정리되며 외부에 전달한 사본은 이 게임에서 삭제되지 않습니다.'
				]
			},
			{
				title: '보관, 삭제와 제공자',
				body: [
					'설정의 진행 초기화는 전적과 재화, 꾸미기 및 튜토리얼 진행을 지우고 사용자 설정은 남깁니다. 앱 데이터 삭제나 앱 제거는 기기에 보관한 앱 데이터를 삭제합니다. 서버 계정이 없어 계정 삭제 신청은 필요하지 않습니다.',
					'광고 데이터의 보관, 처리와 삭제에는 Google의 방침도 적용됩니다. 진행 초기화나 앱 제거가 Google에서 처리한 모든 광고 기록을 즉시 삭제한다는 뜻은 아닙니다. Google 서비스는 이용자의 국가 밖에서 데이터를 처리할 수 있습니다.',
					'Google 개인정보처리방침: https://policies.google.com/privacy. 광고 SDK 안내: https://developers.google.com/admob/android/privacy/play-data-disclosure.'
				]
			},
			{
				title: '문의와 변경',
				body: [
					'개인정보와 게임 지원 문의: Seori Labs, cs@seorilabs.com. 문의자가 제공한 이메일과 문의 내용은 답변과 요청 처리에 사용하며 필요한 기간 보관합니다. 비밀번호나 인증 토큰을 보내지 마세요.',
					'데이터 처리 방식이 바뀌면 이 페이지와 Google Play 데이터 안전 표시를 갱신합니다.'
				]
			}
		],
		footerNote: '문의: cs@seorilabs.com'
	},
	en: {
		title: 'Crowd Gate Duel Privacy Policy',
		description: 'Data practices for offline bot matches, local progress, result sharing and ads.',
		kicker: 'Crowd Gate Duel Privacy Policy',
		lastUpdated: '2026-10-21',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back home',
		languageLabel: 'Language',
		intro:
			'This notice covers Crowd Gate Duel (com.seoleeapps.crowdgateduel) on Android, published by Seolee Apps for ages 13 and above. This product-specific notice takes precedence over the general policy.',
		sections: [
			{
				title: 'Offline play and local data',
				body: [
					'The game plays against on-device bots. It has no registration, sign-in, Firebase, server records, cloud sync or in-app purchases. We do not use a separate gameplay analytics SDK to collect match records.',
					'Match statistics, difficulty, feathers, cosmetics, settings, tutorial progress and the current match are stored on the device, with a local backup for recovery. We do not request names, email addresses, contacts, photos, microphone access or precise location.'
				]
			},
			{
				title: 'Interstitial ads and consent',
				body: [
					'A prepared Google AdMob interstitial may appear after a normal match result is shown. Interstitials do not appear during the tutorial or a match, or when opening or returning to the app. Gameplay and rewards remain available when ads are unavailable or requests are not permitted.',
					'Google Mobile Ads SDK and User Messaging Platform (UMP) may process and share IP addresses, ad and app interactions, performance and diagnostic information, Android advertising IDs and app- or device-scoped identifiers for advertising, measurement, diagnostics, consent management and fraud prevention. IP addresses can infer approximate location. SDK data is encrypted in transit with TLS; processing varies with region, settings and consent.',
					'The app updates consent information each session and prepares ads only when the SDK permits requests. A consent form may appear depending on your region. When privacy choices are required, Settings provides an entry to review or change them. You can reset or delete your advertising ID in Android settings.'
				]
			},
			{
				title: 'Result card sharing',
				body: [
					'When you choose Share, a PNG of the match scene and scores is stored locally and passed to the Android share sheet. The game does not publish it or select a recipient for you. Your selected external app and any delivered copies are subject to that provider’s policies. Temporary share cache files older than 24 hours are removed on a later share; delivered copies are not deleted by this game.'
				]
			},
			{
				title: 'Retention, deletion and providers',
				body: [
					'Reset progress in Settings clears match statistics, currency, cosmetics and tutorial progress while retaining preferences. Clearing app data or uninstalling removes locally held app data. There is no server account requiring an account deletion request.',
					'Google’s policies also govern retention, processing and deletion of advertising data. Resetting progress or uninstalling does not immediately delete all advertising records processed by Google. Google may process data outside your country.',
					'Google Privacy Policy: https://policies.google.com/privacy. Ads SDK disclosure: https://developers.google.com/admob/android/privacy/play-data-disclosure.'
				]
			},
			{
				title: 'Contact and changes',
				body: [
					'Privacy and game support: Seori Labs, cs@seorilabs.com. Email addresses and messages you submit are used to respond and handle requests, and retained as necessary for that purpose. Do not send passwords or authentication tokens.',
					'We update this notice and the Google Play Data safety disclosure when data practices change.'
				]
			}
		],
		footerNote: 'Contact: cs@seorilabs.com'
	}
};
