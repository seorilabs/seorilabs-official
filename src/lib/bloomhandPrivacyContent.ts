import type { PrivacyContent } from '$lib/privacyContent';

export const bloomhandPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '블룸핸드 개인정보 처리방침',
		description:
			'블룸핸드의 가명 계정, 끝없는 도전 순위(토종·개량 리그), Google Play 게임즈·Game Center, 이용 통계, 보상형 광고, 친구 상자를 포함한 인앱 결제와 데이터 삭제 안내입니다.',
		kicker: 'Bloomhand Privacy Policy',
		lastUpdated: '2026년 10월 8일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「블룸핸드」(Bloomhand, 앱 식별자 com.seorilabs.bloomhand)에 적용됩니다. 이 게임의 데이터 처리에는 공통 개인정보 처리방침보다 이 문서가 우선합니다. 이름·이메일 입력이나 로그인 없이 게임을 즐길 수 있고, 온라인 기능에는 자동 생성한 가명 계정이 사용됩니다.',
		sections: [
			{
				title: '게임 기록',
				body: [
					'진행 중인 런, 씨앗·도감·업적, 설정은 기기에만 저장합니다. 클라우드 백업은 하지 않으므로 앱을 지우면 기록이 사라집니다.'
				]
			},
			{
				title: '가명 계정과 순위(끝없는 도전)',
				body: [
					'앱을 처음 실행하면 Seori Platform이 Firebase 가명 계정 식별자와 인증 토큰을 발급합니다. 이름·이메일·전화번호를 받지 않습니다.',
					'이번 주 끝없는 도전(토종 리그·개량 리그)에서 내 기록을 넘으면 리그와 주, 점수(한 판에서 얻은 누적 점수), 넘긴 날 수, 게임이 무작위로 만든 닉네임(예: “Sunny Rose 42”, 자유 입력 없음), 입력 기록의 해시값, 규칙·앱 버전, 제출 시각을 가명 계정에 연결해 Google Firebase(Cloud Firestore)에 저장합니다. 닉네임과 점수는 순위 기능에 쓰이며 다른 플레이어에게 표시될 수 있습니다.',
					'이전 버전에서 오늘의 정원을 끝냈을 때 제출한 같은 항목의 기록도 삭제할 때까지 보관합니다. 지금 버전의 오늘의 정원은 순위를 제출하지 않습니다.'
				]
			},
			{
				title: 'Google Play 게임즈와 Game Center',
				body: [
					'Android에서 Google Play 게임즈에, iPhone·iPad에서 Game Center에 로그인해 있으면 위와 같은 점수를 각 서비스의 리더보드에도 기록합니다. 순위 보기 화면은 해당 서비스가 제공합니다. 로그인은 선택이며 로그인하지 않아도 게임과 기기 기록은 그대로입니다.',
					'게이머 프로필(이름·아바타)과 순위의 공개 범위는 Google Play 게임즈·Game Center 설정과 각 회사의 개인정보 처리방침을 따릅니다. Seori Labs는 이 서비스의 프로필 정보를 받지 않습니다.'
				]
			},
			{
				title: '이용 통계',
				body: [
					'게임 개선을 위해 튜토리얼 단계, 패·가지치기·시장 행동, 하루와 런의 결과, 화면 이동 같은 게임 내 행동 기록과 앱 버전·언어·실행 환경·시각을 기기에서 만든 무작위 식별자와 함께 Google Analytics로 보냅니다. 런 시작·종료, 광고·결제 결과 같은 운영 기록은 가명 계정과 함께 Seori Platform으로 보냅니다. 통계에는 광고 식별자를 넣지 않고 개인화 광고에 사용하지 않습니다.',
					'iPhone·iPad에서는 사용 통계 보내기가 처음부터 켜져 있고, Android에서는 처음 실행할 때 보낼지 고릅니다. 어느 기기에서든 설정의 “사용 통계 보내기”를 끄면 이후 전송을 멈춥니다.'
				]
			},
			{
				title: '보상형 광고',
				body: [
					'광고는 사용자가 직접 고른 경우에만 보는 보상형 광고(정산 씨앗 2배, 두 번째 바람)뿐이며 전면 광고는 없습니다. 광고를 제공하는 Google AdMob은 광고 표시·측정·부정 방지를 위해 광고 식별자, 기기 정보, IP 주소 등을 처리할 수 있습니다. 필요한 지역에서는 광고 전에 동의를 묻고, 설정의 광고 개인정보 옵션에서 바꿀 수 있습니다.',
					'광고 기능이 꺼진 버전에서는 AdMob을 초기화하지 않습니다. 순위 점수에는 광고가 영향을 주지 않습니다.'
				]
			},
			{
				title: '인앱 결제',
				body: [
					'결제는 Google Play와 App Store가 처리하며 Seori Labs는 카드 정보를 받지 않습니다. 구매한 상품을 적용·복원하기 위해 상품 식별자와 구매 확인 정보를 기기에서 처리합니다. 친구 상자는 확률형 아이템이며 상자 친구와 강화는 끝없는 도전 개량 리그의 점수에만 영향을 줍니다. 확률은 게임 안 상자 화면과 블룸핸드 확률 정보 페이지(https://www.seorilabs.com/apps/bloomhand/odds/)에 공개합니다. 상자 개봉 결과와 상자 친구 레벨은 기기에 저장하고, 개봉 기록(친구·레벨)은 이용 통계와 함께 보냅니다. 그 밖의 상품(외형·광고 없는 정원·후원)은 점수와 순위에 영향을 주지 않습니다.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Seori Labs는 가명 계정, 순위, 통계 처리를 위해 Google Firebase·Google Cloud·Google Analytics를, 광고를 위해 Google AdMob을, 플랫폼 리더보드를 위해 Google Play 게임즈 서비스와 Apple Game Center를 사용합니다. 저장 데이터는 서울 지역에 둡니다. 통신에는 HTTPS/TLS를 사용합니다. Google 서비스는 대한민국 외의 국가에서 자료를 처리할 수 있습니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '데이터 삭제 요청',
				body: [
					'앱에서 설정 → 데이터 삭제를 선택하면 이 기기의 게임 기록과 설정, 이 기기에서 제출한 끝없는 도전 순위 기록(토종·개량 리그)과 이전 버전의 오늘의 정원 기록을 지웁니다. 삭제는 되돌릴 수 없습니다. Google Play 게임즈·Game Center에 기록된 점수는 각 서비스의 계정 설정에서 지울 수 있습니다.',
					'가명 계정 연결 정보와 이미 전송한 통계 기록까지 지우려면 이 페이지 아래의 cs@seorilabs.com 으로 “블룸핸드 데이터 삭제 요청”을 보내 주세요. 사용한 기기와 요청 내용 등 필요한 최소 정보만 알려 주시고, 비밀번호나 인증 토큰은 보내지 마세요. 이메일과 연결되지 않은 가명 계정이므로 대상 확인을 위한 추가 절차가 필요할 수 있습니다.'
				]
			},
			{
				title: '보관과 문의',
				body: [
					'순위 기록은 삭제할 때까지 보관합니다. Platform의 원시 통계 기록과 운영 감사 기록은 최대 400일, Google Analytics 기록은 최대 14개월 보관합니다.',
					'문의하면 답변과 요청 처리에 필요한 발신 이메일, 문의 내용과 첨부 자료를 처리하고 해결에 필요한 동안 보관한 뒤 삭제합니다. 열람·정정·삭제·처리 제한 요청은 cs@seorilabs.com으로 할 수 있습니다.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 포커 족보를 쓰는 카드 게임이며 실제 돈을 걸거나 얻을 수 없습니다. 각 마켓에 표시되는 콘텐츠 등급과 지역 요건을 함께 적용하며 아동을 대상으로 하지 않습니다.',
					'데이터 처리에 중요한 변경이 있으면 이 페이지와 앱의 안내를 갱신합니다.'
				]
			}
		],
		footerNote: '데이터 삭제, 개인정보 요청 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Bloomhand Privacy Policy',
		description:
			'Pseudonymous accounts, Endless challenge rankings (Heirloom and Hybrid leagues), Google Play Games and Game Center, usage analytics, rewarded ads, in-app purchases including Friend Boxes, and data deletion in Bloomhand.',
		kicker: 'Bloomhand Privacy Policy',
		lastUpdated: 'October 8, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Bloomhand (블룸핸드, app identifier com.seorilabs.bloomhand), provided by Seori Labs. It takes precedence over our general policy for this game. No sign-in, name or email is required to play; online features use an automatically created pseudonymous account.',
		sections: [
			{
				title: 'Game records',
				body: [
					'Your current run, seeds, garden book, achievements and settings are stored only on your device. There is no cloud backup, so deleting the app deletes these records.'
				]
			},
			{
				title: 'Pseudonymous account and rankings (Endless challenge)',
				body: [
					'On first launch, Seori Platform issues a Firebase pseudonymous account identifier and authentication token. We do not collect your name, email or phone number.',
					"When you beat your best in this week's Endless challenge (Heirloom League or Hybrid League), the league and week, score (total points earned in the run), days cleared, a nickname randomly generated by the game (for example “Sunny Rose 42”; there is no free text), a hash of your input log, rules and app version, and submission time are stored in Google Firebase (Cloud Firestore), linked to your pseudonymous account. Your nickname and score are used for rankings and may be shown to other players.",
					"Records of the same kind submitted when finishing Today's Garden in earlier versions are kept until deleted. Today's Garden no longer submits rankings in the current version."
				]
			},
			{
				title: 'Google Play Games and Game Center',
				body: [
					"If you are signed in to Google Play Games on Android or Game Center on iPhone and iPad, the same score is also recorded on that service's leaderboard, and the ranking screen is provided by that service. Signing in is optional; the game and your on-device records work the same without it.",
					"Your gamer profile (name, avatar) and ranking visibility follow your Google Play Games or Game Center settings and each company's privacy policy. Seori Labs does not receive profile information from these services."
				]
			},
			{
				title: 'Usage analytics',
				body: [
					'To improve the game, in-game events such as tutorial steps, hands, pruning and market actions, day and run results and screen changes, together with app version, language, runtime and timestamps, are sent to Google Analytics with a random identifier created on your device. Operational records such as run start and end and ad and purchase results are sent to Seori Platform with your pseudonymous account. Analytics does not include advertising identifiers and is not used for personalized advertising.',
					'On iPhone and iPad, “Send usage stats” is on by default; on Android, you choose on first launch. On any device, turning off “Send usage stats” in Settings stops further transmission.'
				]
			},
			{
				title: 'Rewarded ads',
				body: [
					'The only ads are rewarded ads you choose to watch (double seeds at the end of a run, Second Wind); there are no interstitial ads. Google AdMob, which serves the ads, may process advertising identifiers, device information and IP address for ad delivery, measurement and fraud prevention. Where required, you are asked for consent before ads, and you can change it in Settings → Ad privacy options.',
					'Versions with ads turned off do not initialize AdMob. Ads never affect ranking scores.'
				]
			},
			{
				title: 'In-app purchases',
				body: [
					'Payments are processed by Google Play and the App Store; Seori Labs does not receive card details. To apply and restore purchases, product identifiers and purchase confirmation are processed on your device. Friend Boxes contain random items; box friends and their levels affect scores only in the Endless Hybrid League. Odds are shown on the in-game box screen and on the Bloomhand odds page (https://www.seorilabs.com/en/apps/bloomhand/odds/). Box results and box friend levels are stored on your device, and opening records (friend and level) are sent with usage analytics. Other products (cosmetics, the Ad-free Garden and supporter items) never affect scores or rankings.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Seori Labs uses Google Firebase, Google Cloud and Google Analytics for pseudonymous accounts, rankings and analytics, Google AdMob for ads, and Google Play Games Services and Apple Game Center for platform leaderboards. Stored data is kept in the Seoul region. Communication uses HTTPS/TLS. Google services may process information outside your country.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Request data deletion',
				body: [
					"In the app, choose Settings → Delete data to remove the game records and settings on this device and the Endless challenge records (Heirloom and Hybrid leagues) and earlier Today's Garden records submitted from it. Deletion cannot be undone. Scores recorded on Google Play Games or Game Center can be deleted in that service's account settings.",
					'To also delete the pseudonymous account link and analytics records already sent, email cs@seorilabs.com using the link at the bottom of this page with the subject “Bloomhand data deletion request.” Provide only necessary details such as the device used and your request, and do not send passwords or authentication tokens. Pseudonymous accounts are not linked to email, so additional verification may be needed.'
				]
			},
			{
				title: 'Retention and support',
				body: [
					'Ranking records are kept until deleted. Raw Platform analytics and operational audit records are retained for up to 400 days, and Google Analytics records for up to 14 months.',
					'When you contact support, we process your sender address, message and attachments to respond and keep them as needed for resolution. Contact cs@seorilabs.com for access, correction, deletion or restriction requests.'
				]
			},
			{
				title: 'Audience and changes',
				body: [
					'This is a card game that uses poker hands; you cannot wager or win real money. The content rating shown by each store and local requirements also apply. It is not directed to children.',
					'We update this page and in-app notices for material changes.'
				]
			}
		],
		footerNote: 'Data deletion, privacy requests and game support: cs@seorilabs.com'
	}
};
