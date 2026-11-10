import type { LegalDocContent } from '$lib/legal/types';

export const gatherPuzzlePrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: 'Gather Puzzle 개인정보 처리방침',
		description: 'Gather Puzzle의 기기 저장, 전면광고, 개인정보 선택과 삭제 안내입니다.',
		kicker: 'Gather Puzzle Privacy Policy',
		lastUpdated: '2026년 11월 11일',
		intro:
			'이 방침은 Seolee Apps가 배포하고 Seori Labs가 운영하는 Android 게임 Gather Puzzle(com.seorilabs.gatherpuzzle)에 적용됩니다. 이 게임의 처리에 관해서는 공통 방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '기기에 저장하는 정보',
				body: [
					'퍼즐 진행, 현재 판과 이동 기록, 별과 게임 재화, 친구 도감, 장식 배치, 설정과 광고 빈도 기록을 기기에 저장합니다. 게임 계정이나 별도의 클라우드 저장 서비스를 제공하지 않고, 이 게임 기록을 당사 서버로 업로드하지 않습니다. 플레이 통계는 실행 중 메모리에 최근 기록 최대 200개만 보관합니다. 앱을 종료하거나 설정에서 플레이 통계를 끄면 이 임시 이력이 사라지며 서버로 보내지 않습니다.'
				]
			},
			{
				title: '전면광고와 Google',
				body: [
					'일부 판을 완료하고 정산을 확인한 뒤 다음 화면으로 넘어갈 때 Google AdMob 전면광고가 표시될 수 있습니다. 광고 제공에는 Google Mobile Ads Next-Gen SDK와 Google User Messaging Platform(UMP)을 사용합니다.',
					'Google은 광고 제공·측정, 부정 이용 방지와 진단을 위해 IP 주소와 이를 바탕으로 한 대략적 위치, 앱·광고 상호작용, 성능·진단 정보, 허용된 기기·앱 식별자를 처리할 수 있습니다. 이는 기기의 퍼즐 기록과 별개이며 국가 밖에서 처리될 수 있습니다.',
					'앱은 나이나 생년월일을 입력받지 않습니다. 연령이 확인되지 않은 이용자를 보호하도록 광고 요청에 더 강한 연령 보호 처리, 개인화 제한과 G 등급 광고 필터를 적용합니다. 이 설정으로 IP 주소나 진단 정보를 포함한 모든 광고 데이터 처리가 없어지는 것은 아닙니다.'
				]
			},
			{
				title: '개인정보 선택',
				body: [
					'UMP가 현재 적용되는 광고 개인정보 상태를 확인합니다. 개인정보 옵션이 필요한 경우 앱 설정의 개인정보 옵션에서 선택을 확인하거나 변경할 수 있습니다. 광고를 요청할 수 없거나 광고가 준비되지 않아도 게임 진행은 계속됩니다.',
					'Google의 처리·보관·삭제 및 이용자 제어에 관한 안내는 https://policies.google.com/privacy 와 https://policies.google.com/technologies/ads 에서 확인할 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'로컬 게임 정보는 앱의 저장공간을 지울 때까지 기기에 보관합니다. Android 앱에서는 운영체제의 앱 데이터 백업을 사용하지 않도록 설정하며, 앱 제거·저장공간 삭제 시 진행이 사라질 수 있습니다. 당사는 서버에 게임 저장 사본을 보관하지 않아 문의로 진행을 복구할 수 없습니다.',
					'Google이 처리한 광고·개인정보 선택 데이터의 보관과 삭제는 Google의 정책과 제공되는 제어를 따릅니다. 로컬 게임 데이터를 지우는 것이 Google이 이미 처리한 데이터의 삭제를 뜻하지는 않습니다.'
				]
			},
			{
				title: '문의 정보와 보안',
				body: [
					'이메일로 문의하면 발신 이메일, 문의 내용과 자발적으로 첨부한 정보를 답변과 요청 처리에 사용합니다. 문의 해결에 필요한 동안 보관한 뒤 삭제하며, 비밀번호·인증 토큰·결제정보 등 불필요한 민감 정보는 보내지 마세요.',
					'Google 광고 SDK가 전송하는 데이터는 TLS로 암호화됩니다. 개인정보 열람·정정·삭제·처리 제한 요청과 게임 지원 문의는 cs@seorilabs.com으로 보내 주세요.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 지역별 스토어 콘텐츠 등급과 요건도 함께 적용됩니다. 처리 방식이 바뀌면 이 방침과 시행일을 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Gather Puzzle Privacy Policy',
		description:
			'Local saves, interstitial advertising, privacy choices, and deletion in Gather Puzzle.',
		kicker: 'Gather Puzzle Privacy Policy',
		lastUpdated: 'November 11, 2026',
		intro:
			'This policy applies to Gather Puzzle (com.seorilabs.gatherpuzzle), an Android game published by Seolee Apps and operated by Seori Labs. For this game, it takes precedence over our general policy.',
		sections: [
			{
				title: 'Information stored on your device',
				body: [
					'Puzzle progress, the current board and moves, stars and game currencies, your friend collection, decorations, settings, and ad-frequency records are stored on your device. We do not provide a game account or a separate cloud-save service and do not upload these game records to our servers. Play statistics keep at most 200 recent events in memory while the app is running. This temporary history is cleared when the app closes or you turn off Play stats in settings, and is not sent to a server.'
				]
			},
			{
				title: 'Interstitial advertising and Google',
				body: [
					'Google AdMob interstitial ads may appear after you complete a stage and acknowledge its settlement, as you move to the next screen. We use the Google Mobile Ads Next-Gen SDK and Google User Messaging Platform (UMP).',
					'Google may process IP addresses and approximate location derived from them, app and ad interactions, performance and diagnostic information, and permitted device or app identifiers for advertising, measurement, fraud prevention, and diagnostics. This is separate from local puzzle records and may involve processing outside your country.',
					'The app does not ask for your age or date of birth. Ad requests apply stronger age protections for users whose age is unknown, personalization restrictions, and a G-rated ad-content filter. These settings do not eliminate all advertising data processing, including IP addresses and diagnostics.'
				]
			},
			{
				title: 'Privacy choices',
				body: [
					'UMP checks the applicable advertising privacy status. When privacy options are required, you can review or change your choices through Privacy options in the app settings. Game progress continues when ads cannot be requested or are not ready.',
					'For Google data handling, retention, deletion, and user controls, see https://policies.google.com/privacy and https://policies.google.com/technologies/ads.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Local game information is kept on your device until you clear the app storage. The Android app is configured not to use operating-system app-data backup. Uninstalling the app or clearing storage may remove your progress. We do not keep a server copy of game saves and cannot restore progress through a support request.',
					'Google policies and available controls govern the retention and deletion of advertising and privacy-choice data it processes. Deleting local game data does not delete data already processed by Google.'
				]
			},
			{
				title: 'Support inquiries and security',
				body: [
					'If you contact us by email, we use your email address, message, and information you choose to attach to answer and resolve your request. We retain it for as long as needed to resolve the inquiry and then delete it. Do not send passwords, authentication tokens, payment details, or other unnecessary sensitive information.',
					'Data transmitted by Google advertising SDKs is encrypted using TLS. Contact cs@seorilabs.com for access, correction, deletion, restriction requests, and game support.'
				]
			},
			{
				title: 'Age and policy changes',
				body: [
					'This game is intended for ages 13 and above. Regional store content ratings and requirements also apply. We update this policy and its effective date when our data practices change.'
				]
			}
		],
		footerNote: 'Privacy and game support: cs@seorilabs.com'
	}
};
