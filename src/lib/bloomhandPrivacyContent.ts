import type { PrivacyContent } from '$lib/privacyContent';

export const bloomhandPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '블룸핸드 개인정보 처리방침',
		description:
			'블룸핸드의 가명 계정, 끝없는 도전 순위(토종·개량 리그), Google Play 게임즈·Game Center, 이용 통계, 보상형 광고, 친구 상자를 포함한 인앱 결제와 선택형 계정 연결, 계정·데이터 삭제 안내입니다.',
		kicker: 'Bloomhand Privacy Policy',
		lastUpdated: '2026년 10월 31일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「블룸핸드」(Bloomhand, 앱 식별자 com.seorilabs.bloomhand)에 적용됩니다. 이 게임의 데이터 처리에는 공통 개인정보 처리방침보다 이 문서가 우선합니다. 이름·이메일 입력이나 로그인 없이 게임을 즐길 수 있고, 온라인 기능에는 자동 생성한 가명 계정이 사용됩니다. 앱인토스 버전에는 아래 ‘앱인토스’ 항목을 우선 적용하며, 그 밖의 마켓별 설명은 해당 마켓에만 적용됩니다.',
		sections: [
			{
				title: '앱인토스',
				body: [
					'진행 중인 판과 씨앗, 도감, 업적, 설정은 토스 안의 Web 저장소에 둡니다. 토스의 앱 데이터나 Web 저장소가 지워지면 이 기록도 사라질 수 있습니다.',
					'친구 상자 구매와 복원을 위해 토스 로그인을 사용합니다. 토스가 검증한 앱 범위 사용자 키를 서버에서 SHA-256 해시로 바꿔 같은 Firebase 가명 계정과 Platform 상자 원장에 연결합니다. 원본 사용자 키는 저장하거나 앱에 반환하지 않습니다. 토스 로그인 동의 화면에는 이름이 필수 항목으로 표시되지만, 서버는 이름을 해독하거나 사용, 저장하지 않습니다. 이메일, 성별, 생년월일, 내외국인 정보, 전화번호와 CI는 요청하지 않습니다.',
					'결제는 토스가 처리하며 Seori Labs는 카드번호와 계좌 정보를 받지 않습니다. 상품 ID와 주문 ID를 서버로 보내 토스 서버에서 결제를 검증한 뒤 상자를 지급합니다. 미완료 주문은 다시 확인하고 검증한 지급에만 완료를 알립니다. 상자 확률과 보장 규칙, 개량 리그 사용 제한, 구매와 상자 원장의 보관 기준은 아래 인앱 결제 설명과 같습니다. 앱인토스에서는 상자 구매 전에 토스 로그인이 필요합니다.',
					'사용 통계 보내기를 선택한 경우 게임 내 행동과 버전, 언어, 실행 환경을 토스 분석 SDK로 보냅니다. 이 버전의 게임 행동 통계에는 Google Analytics SDK를 사용하지 않으며, 토스의 분석 데이터 처리는 토스 개인정보 처리방침을 따릅니다. 설정에서 끄면 이후 전송을 멈춥니다.',
					'사용자가 선택한 보상형 광고 두 자리만 토스 통합 광고 SDK로 제공합니다. 토스와 Google AdMob은 광고 제공, 측정과 부정 방지를 위해 광고 식별자, 기기와 네트워크 정보, 광고 노출과 클릭을 각 정책 및 기기 동의 설정에 따라 처리할 수 있습니다. Seori Labs는 광고 식별자를 구매 계정에 연결하지 않습니다. 전면 광고는 제공하지 않습니다.',
					'토스에서 연결을 끊는 것과 게임의 계정 삭제는 다릅니다. 서버 기록 삭제를 원하면 게임 설정의 계정 삭제 또는 이 페이지의 문의 절차를 이용해 주세요. 상자 구매 원장은 중복 지급 방지와 환불, 분쟁 대응을 위해 인앱 결제 항목에 적은 기준으로 보관합니다.'
				]
			},
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
					'게임 개선을 위해 튜토리얼 단계, 패·가지치기·시장 행동, 하루와 런의 결과, 화면 이동 같은 게임 내 행동 기록과 앱 버전·언어·실행 환경·시각을 기기에서 만든 무작위 식별자와 함께 Google Analytics로 보냅니다. 게임 내 행동 기록은 Seori Platform으로 보내지 않습니다. 통계에는 광고 식별자를 넣지 않고 개인화 광고에 사용하지 않습니다.',
					'iPhone·iPad에서는 사용 통계 보내기가 처음부터 켜져 있고, Android에서는 처음 실행할 때 보낼지 고릅니다. 어느 기기에서든 설정의 “사용 통계 보내기”를 끄면 이후 전송을 멈춥니다.'
				]
			},
			{
				title: '보상형 광고',
				body: [
					'광고는 사용자가 직접 고른 경우에만 보는 보상형 광고(정산 씨앗 2배, 두 번째 바람)뿐이며 전면 광고는 없습니다. 광고를 제공하는 Google AdMob은 광고 표시·측정·부정 방지를 위해 광고 식별자, 기기 정보, IP 주소 등을 처리할 수 있습니다. 필요한 지역에서는 광고 전에 동의를 묻고, 설정의 광고 개인정보 옵션에서 바꿀 수 있습니다.',
					'AdMob은 보상형 광고가 켜져 있고 광고 없는 정원을 구매하지 않은 경우에만, 타이틀에서 게임을 시작한 뒤 초기화합니다. 보상형 광고는 운영 중 원격 설정으로 끌 수 있습니다. iPhone·iPad에서는 앱 추적 허락을 요청하지 않고 비개인화 광고만 요청합니다. Android에서는 Google 광고 설정과 동의 상태에 따라 맞춤 광고가 표시될 수 있습니다. 광고를 보지 않아도 게임을 할 수 있고, 순위 점수에는 광고가 영향을 주지 않습니다.'
				]
			},
			{
				title: '인앱 결제',
				body: [
					'결제는 Google Play와 App Store가 처리하며 Seori Labs는 카드 정보를 받지 않습니다. 외형·광고 없는 정원·후원 상품은 구매 확인 정보를 기기에서 처리해 적용·복원하고 Seori Platform으로 보내지 않습니다. 이 상품들은 점수와 순위에 영향을 주지 않습니다.',
					'친구 상자는 확률형 아이템이며 상자 친구와 강화는 끝없는 도전 개량 리그의 점수에만 영향을 줍니다. 확률은 게임 안 상자 화면과 블룸핸드 확률 정보 페이지(https://www.seorilabs.com/apps/bloomhand/odds/)에 공개합니다. 상자를 사면 앱이 상품 ID와 스토어가 발급한 구매 토큰(Google Play) 또는 거래 ID(App Store)를 Seori Platform으로 보내고, Seori Platform은 Google Play·App Store 서버에서 구매를 확인한 뒤 상자를 지급합니다. 개봉 결과는 서버가 정합니다.',
					'상자 지급·개봉·복원, 중복 지급과 환불 악용 방지, 확률 검증과 문의 대응을 위해 다음 기록을 가명 계정에 연결해 Google Cloud(Cloud Firestore)에 저장합니다: 상품 ID, 스토어 주문 번호(Google Play 주문 ID·App Store 거래 ID), 구매·확인 시각, 구매 상태(유효·환불), 테스트 구매 여부, 연 상자 수, 상자 친구별 장수와 희귀 보장 횟수, 개봉마다 나온 친구·희귀도·레벨과 확률표 버전·시각. 구매 토큰은 해시값으로 기록하며, 스토어 완료 처리를 다시 시도하거나 Google Play 환불 검토 요청을 처리하는 동안에만 끝날 때까지 원문(환불 검토는 암호화)을 둡니다. 구매 확인·지급·개봉 처리 결과는 가명 계정과 함께 운영 감사 기록에도 남습니다. 기기에는 마지막으로 받은 상자 상태의 사본만 둡니다.',
					'계정 연결은 선택입니다. Google(Android) 또는 Apple(iPhone·iPad) 계정을 연결하면 새 기기나 재설치 후 상자와 상자 친구를 되찾을 수 있습니다. 연결한 계정 식별자의 해시값만 가명 계정에 연결해 저장하고 이름·이메일은 저장하지 않습니다.',
					'사용 통계 보내기가 켜져 있으면 구매한 상품 ID와 처리 결과, 상자 개봉 기록(친구·레벨)을 Google Analytics로 보내며, Google Analytics SDK가 인앱 구매 이벤트(상품 ID·가격 등)를 자동으로 기록할 수 있습니다. 구매 정보를 광고에 쓰거나 Google AdMob에 보내지 않습니다.',
					'구매 기록과 상자 원장·개봉 기록은 환불·분쟁 대응, 중복 지급 방지와 확률 검증에 필요해 삭제하지 않고 보관하며, 계정을 삭제해도 지우지 않습니다. 계정 삭제 뒤에는 Firebase 계정과 계정 연결 정보가 지워진 가명 기록으로 남습니다.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Seori Labs는 가명 계정, 순위, 친구 상자 구매 확인과 상자 기록, 통계 처리를 위해 Google Firebase·Google Cloud·Google Analytics를, 광고를 위해 Google AdMob을, 플랫폼 리더보드를 위해 Google Play 게임즈 서비스와 Apple Game Center를 사용하고, 구매 확인을 위해 Google Play·App Store 서버에 구매 정보를 조회합니다. 저장 데이터는 서울 지역에 둡니다. 통신에는 HTTPS/TLS를 사용합니다. Google 서비스는 대한민국 외의 국가에서 자료를 처리할 수 있습니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '데이터 삭제 요청',
				body: [
					'앱에서 설정 → 계정 삭제를 선택하면 이 기기의 게임 기록과 설정, 이 기기에서 제출한 끝없는 도전 순위 기록(토종·개량 리그)과 이전 버전의 오늘의 정원 기록을 지우고, Seori Platform의 가명 계정(Firebase 계정)과 Google·Apple 계정 연결 정보, 가명 계정에 연결된 운영 기록(구매·상자 처리 기록 제외)을 삭제합니다. Apple로 연결한 계정은 한 번 더 확인한 뒤 Apple 로그인 승인도 철회합니다. 인터넷 연결이 필요하고, 서버 삭제는 접수 후 순서대로 진행되어 끝나기까지 며칠이 걸릴 수 있습니다. 삭제는 되돌릴 수 없으며 산 친구 상자와 상자 친구도 다시 찾을 수 없습니다. 구매 기록과 상자 원장은 ‘인앱 결제’에 적은 대로 보관합니다. Google Play 게임즈·Game Center에 기록된 점수는 각 서비스의 계정 설정에서 지울 수 있습니다.',
					'앱을 사용할 수 없거나 이미 전송한 Google Analytics 통계 기록까지 지우려면 이 페이지 아래의 cs@seorilabs.com 으로 “블룸핸드 데이터 삭제 요청”을 보내 주세요. 사용한 기기와 요청 내용 등 필요한 최소 정보만 알려 주시고, 비밀번호나 인증 토큰은 보내지 마세요. 이메일과 연결되지 않은 가명 계정이므로 대상 확인을 위한 추가 절차가 필요할 수 있습니다.'
				]
			},
			{
				title: '보관과 문의',
				body: [
					'순위 기록은 삭제할 때까지 보관합니다. 친구 상자 구매 기록과 상자 원장·개봉 기록은 ‘인앱 결제’에 적은 대로 삭제하지 않고 보관합니다. Platform의 원시 통계 기록과 운영 감사 기록은 최대 400일, Google Analytics 기록은 최대 14개월 보관하며, 구매·상자 처리 감사 기록은 계정을 삭제해도 400일 동안 남습니다.',
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
			'Pseudonymous accounts, Endless challenge rankings (Heirloom and Hybrid leagues), Google Play Games and Game Center, usage analytics, rewarded ads, in-app purchases including Friend Boxes, optional account linking, and account and data deletion in Bloomhand.',
		kicker: 'Bloomhand Privacy Policy',
		lastUpdated: 'October 31, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Bloomhand (블룸핸드, app identifier com.seorilabs.bloomhand), provided by Seori Labs. It takes precedence over our general policy for this game. No sign-in, name or email is required to play; online features use an automatically created pseudonymous account. For AppsInToss, the AppsInToss section below takes precedence. Other market-specific descriptions apply only to those markets.',
		sections: [
			{
				title: 'AppsInToss',
				body: [
					'Your current run, seeds, collection, achievements and settings are kept in web storage inside Toss. Clearing Toss app data or web storage may remove these records.',
					'Friend Box purchases and recovery use Toss login. The server immediately hashes the verified app-scoped Toss user key with SHA-256 and connects it to the same Firebase pseudonymous account and Platform box ledger. The original key is not stored or returned to the app. The Toss consent screen lists your name as required, but our server does not decrypt, use or store it. We do not request email, gender, date of birth, nationality, phone number or CI.',
					'Toss processes payments; Seori Labs does not receive card or bank account numbers. Product and order IDs are sent to our server, which verifies the payment with Toss before granting boxes. Pending orders are checked again, and fulfillment is confirmed only after verified granting. The odds, guarantee rules, Hybrid League restriction and purchase and box ledger retention follow the in-app purchase section below. Toss login is required before buying boxes in AppsInToss.',
					'If you opt into usage analytics, in-game events, version, language and runtime are sent through the Toss analytics SDK. This version does not use the Google Analytics SDK for gameplay events. Toss processes its analytics data under its own privacy policy. Turning usage analytics off in settings stops future sending.',
					'Only the two user-selected rewarded ad placements use the Toss integrated ad SDK. Toss and Google AdMob may process advertising identifiers, device and network information, impressions and clicks for ad delivery, measurement and fraud prevention under their policies and device consent settings. Seori Labs does not link advertising identifiers to purchase accounts. We do not show interstitial ads.',
					'Disconnecting the service in Toss and deleting the game account are separate actions. To delete server records, use Delete account in game settings or the contact procedure on this page. Purchase and box ledgers are retained for duplicate-grant prevention, refunds and disputes as described under in-app purchases.'
				]
			},
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
					'To improve the game, in-game events such as tutorial steps, hands, pruning and market actions, day and run results and screen changes, together with app version, language, runtime and timestamps, are sent to Google Analytics with a random identifier created on your device. In-game events are not sent to Seori Platform. Analytics does not include advertising identifiers and is not used for personalized advertising.',
					'On iPhone and iPad, “Send usage stats” is on by default; on Android, you choose on first launch. On any device, turning off “Send usage stats” in Settings stops further transmission.'
				]
			},
			{
				title: 'Rewarded ads',
				body: [
					'The only ads are rewarded ads you choose to watch (double seeds at the end of a run, Second Wind); there are no interstitial ads. Google AdMob, which serves the ads, may process advertising identifiers, device information and IP address for ad delivery, measurement and fraud prevention. Where required, you are asked for consent before ads, and you can change it in Settings → Ad privacy options.',
					'AdMob is initialized only after you start the game from the title screen, and only when rewarded ads are turned on and you have not bought the Ad-free Garden. Rewarded ads can be turned off remotely during operation. On iPhone and iPad, we do not ask for tracking permission and request only non-personalized ads. On Android, personalized ads may be shown depending on your Google ad settings and consent. You can play without watching ads, and ads never affect ranking scores.'
				]
			},
			{
				title: 'In-app purchases',
				body: [
					'Payments are processed by Google Play and the App Store; Seori Labs does not receive card details. For cosmetics, the Ad-free Garden and supporter items, purchase confirmation is processed on your device to apply and restore them and is not sent to Seori Platform. These products never affect scores or rankings.',
					'Friend Boxes contain random items; box friends and their levels affect scores only in the Endless Hybrid League. Odds are shown on the in-game box screen and on the Bloomhand odds page (https://www.seorilabs.com/en/apps/bloomhand/odds/). When you buy boxes, the app sends the product ID and the purchase token (Google Play) or transaction ID (App Store) issued by the store to Seori Platform, which confirms the purchase with Google Play or App Store servers before granting the boxes. Box results are decided by the server.',
					'To grant, open and restore boxes, prevent duplicate grants and refund abuse, verify odds and handle support requests, the following are stored in Google Cloud (Cloud Firestore), linked to your pseudonymous account: product ID, store order number (Google Play order ID or App Store transaction ID), purchase and confirmation time, purchase status (valid or refunded), whether it was a test purchase, the number of boxes opened, copies of each box friend and the rare-guarantee count, and for each opening the friend, rarity, level, odds table version and time. Purchase tokens are recorded as a hash; the original is kept only while a store completion step is being retried or a Google Play refund review request is being handled (encrypted for refund reviews), until that finishes. Results of purchase confirmation, granting and opening are also kept in operational audit records with your pseudonymous account. Your device keeps only a copy of the latest box state.',
					'Account linking is optional. If you link a Google (Android) or Apple (iPhone and iPad) account, you can recover boxes and box friends on a new device or after reinstalling. Only a hash of the linked account identifier is stored with your pseudonymous account; we do not store your name or email.',
					'When “Send usage stats” is on, purchased product IDs and results and box opening records (friend and level) are sent to Google Analytics, and the Google Analytics SDK may automatically record in-app purchase events (such as product ID and price). Purchase information is not used for advertising or sent to Google AdMob.',
					'Purchase records and the box ledger and opening records are needed for refunds, disputes, duplicate-grant prevention and odds verification, so they are kept and not deleted, even if you delete your account. After account deletion they remain as pseudonymous records without your Firebase account or account link.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Seori Labs uses Google Firebase, Google Cloud and Google Analytics for pseudonymous accounts, rankings, Friend Box purchase confirmation and box records, and analytics; Google AdMob for ads; and Google Play Games Services and Apple Game Center for platform leaderboards. To confirm purchases, we check them with Google Play and App Store servers. Stored data is kept in the Seoul region. Communication uses HTTPS/TLS. Google services may process information outside your country.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Request data deletion',
				body: [
					"In the app, choose Settings → Delete account to remove the game records and settings on this device and the Endless challenge records (Heirloom and Hybrid leagues) and earlier Today's Garden records submitted from it, and to delete your Seori Platform pseudonymous account (Firebase account), your Google or Apple account link, and operational records linked to your pseudonymous account (except purchase and box processing records). If you linked Apple, you confirm once more and we also revoke the Sign in with Apple authorization. This requires an internet connection, and server-side deletion runs in steps and may take a few days to complete. Deletion cannot be undone, and Friend Boxes and box friends you bought cannot be recovered. Purchase records and the box ledger are kept as described under In-app purchases. Scores recorded on Google Play Games or Game Center can be deleted in that service's account settings.",
					'If you cannot use the app, or to also delete Google Analytics records already sent, email cs@seorilabs.com using the link at the bottom of this page with the subject “Bloomhand data deletion request.” Provide only necessary details such as the device used and your request, and do not send passwords or authentication tokens. Pseudonymous accounts are not linked to email, so additional verification may be needed.'
				]
			},
			{
				title: 'Retention and support',
				body: [
					'Ranking records are kept until deleted. Friend Box purchase records and the box ledger and opening records are kept and not deleted, as described under In-app purchases. Raw Platform analytics and operational audit records are retained for up to 400 days, and Google Analytics records for up to 14 months; purchase and box processing audit records remain for up to 400 days even after account deletion.',
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
