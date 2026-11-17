import type { LegalDocContent } from '$lib/legal/types';

export const malangPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '말랑 개인정보 처리방침',
		description:
			'말랑의 기기 저장, 나이 확인, 익명 플레이 통계, 반짝 컬렉션 구매와 삭제에 관한 안내입니다.',
		kicker: 'Malang Privacy Policy',
		lastUpdated: '2026년 11월 17일',
		intro:
			'이 방침은 Seori Labs가 Google Play와 App Store에 배포하는 말랑(Malang: Squishy ASMR Toys, 패키지와 번들 ID com.seorilabs.malang) Android와 iOS 앱에 적용되며, 이 게임의 처리에는 공통 방침보다 우선합니다. 말랑에는 광고, 추적, 회원가입과 로그인, 클라우드 저장이 없습니다.',
		sections: [
			{
				title: '기기에 저장하는 정보',
				body: [
					'모은 장난감과 고른 장난감, 꾸미기와 공방에서 만든 말랑이(직접 붙인 이름 포함), 코인, 발견 기록, 매일 선물과 우편함, 소리와 진동, 언어, 화면, 데이터 분석 허용 설정, 나이대, 반짝 컬렉션 구매 기록, 아직 보내지 않은 플레이 통계를 앱 저장공간에 보관합니다. 이 게임 기록을 당사 서버에 올리지 않으며 계정, 클라우드 저장과 기기 간 이전을 제공하지 않습니다.',
					'장난감 소리와 진동은 기기 안에서 만들고 재생합니다. 게임은 카메라, 마이크, 위치, 연락처와 사진 권한을 요청하지 않습니다. 광고 식별자(Android 광고 ID, iOS IDFA)를 수집하지 않고 앱 추적 허용도 요청하지 않습니다.'
				]
			},
			{
				title: '나이 확인',
				body: [
					'처음 실행하면 태어난 해를 묻습니다. 입력한 해로 나이대(어린이 또는 일반)만 정해 기기에 저장하고, 태어난 해는 저장하거나 보내지 않습니다. 태어난 해만으로는 생일이 지났는지 알 수 없으므로 올해 13세가 되는 경우까지 어린이 나이대로 봅니다.',
					'어린이 나이대에서는 플레이 통계를 보내지 않고, 구매 버튼을 누르면 어른이 푸는 곱셈 문제를 먼저 냅니다.'
				]
			},
			{
				title: '익명 플레이 통계',
				body: [
					'게임을 개선하기 위해 Android와 iOS 출시 버전은 일반 나이대이고 설정의 “데이터 분석 허용”이 켜져 있을 때만 플레이 통계를 보냅니다. 이 설정은 처음에 켜져 있습니다. 보내는 이벤트는 첫 시작, 첫 안내의 단계 완료와 완료 또는 건너뛰기, 선물 받기, 장난감 해금, 반짝 컬렉션 구매, 공방 저장입니다. 이벤트마다 무작위 이벤트 ID, 발생 시각과 첫 안내 버전이 들어가고, 앱 버전, 언어, SDK 버전, 실행 플랫폼(Android 또는 iOS)과 기기에서 만든 무작위 설치 식별자를 함께 보냅니다.',
					'이름, 이메일, 계정, 광고 식별자, 기기 위치, 태어난 해, 공방에서 붙인 이름, 주문 번호와 구매 토큰은 보내지 않습니다. 통계는 Seori Labs가 Google Cloud 서울 리전(asia-northeast3)에서 운영하는 Seori Platform 수집 서버가 받아 Seori Labs가 관리하는 Google BigQuery에 저장합니다. 이 통계를 Google Analytics로 보내지 않고, 다른 회사에 판매하거나 공유하지 않으며, 광고나 추적에 쓰지 않습니다. 통신 과정에서 IP 주소 같은 접속 정보가 처리될 수 있지만 수집 서버는 이를 통계 기록에 넣지 않습니다.',
					'설정에서 “데이터 분석 허용”을 끄면 아직 보내지 않은 이벤트를 지우고 이후 전송을 멈춥니다. 나이 질문에 답하기 전에도 보내지 않습니다.'
				]
			},
			{
				title: '반짝 컬렉션 구매',
				body: [
					'유료 상품은 한 번 사면 계속 쓰는 반짝 컬렉션 하나입니다. 구독, 확률형 상품과 광고 제거 상품은 없습니다. 결제는 Google Play 결제 또는 App Store가 처리하며 당사는 카드 번호와 결제 수단 정보를 받지 않습니다.',
					'앱은 스토어가 돌려준 구매를 기기에서 확인합니다. Google Play 구매는 앱의 라이선스 공개 키로 서명을 검증하고 상품, 패키지와 구매 상태를 확인하며, App Store 구매는 StoreKit 2가 확인한 거래만 받습니다. 확인한 구매는 마켓, 구매 토큰 또는 거래 ID의 해시 일부(원문이 아님), 상태와 시각만 기기에 기록해 중복 지급을 막고 환불된 구매를 거두는 데 씁니다. 구매 토큰과 거래 ID는 당사 서버로 보내지 않으며, 일반 나이대의 플레이 통계에는 구매가 있었다는 이벤트만 들어갑니다.',
					'앱은 설치마다 기기에서 무작위 UUID를 만들어 저장하고, 구매할 때 Google Play의 난독화된 계정 ID와 App Store의 appAccountToken으로 스토어에 함께 보내 이 설치의 구매를 구분합니다. 당사는 이 값을 이름, 이메일이나 플레이 통계의 설치 식별자와 연결하지 않습니다.',
					'설정의 “구매 내역 복원”으로 같은 스토어 계정의 구매를 다시 확인할 수 있습니다. 환불은 각 스토어의 절차를 따르며, 구매 문제는 주문 번호와 함께 cs@seorilabs.com으로 문의해 주세요.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Google은 Google Cloud(Seori Platform 수집 서버와 BigQuery 저장)와 Google Play(배포와 결제)를, Apple은 App Store(배포와 결제)를 처리합니다. 앱과 수집 서버 사이의 통신은 HTTPS/TLS로 암호화합니다. 수집 서버는 서울 리전에서 운영하지만 각 사업자는 대한민국 밖에서도 자료를 처리할 수 있습니다. 자세한 내용은 https://policies.google.com/privacy 와 https://www.apple.com/legal/privacy/ 를 참고하세요.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기의 정보는 앱을 지우거나 앱 데이터를 지울 때까지 남습니다. 앱을 지우면 게임 기록, 나이대, 설치 식별자와 구매용 UUID가 함께 지워지고, 다시 설치하면 새 값을 만들어 이전 통계와 연결되지 않습니다. 당사는 서버에 진행 사본을 두지 않아 문의로 진행을 복구할 수 없습니다. 반짝 컬렉션은 같은 스토어 계정에서 “구매 내역 복원”으로 다시 받을 수 있습니다.',
					'플레이 통계 기록은 수집 서버가 받은 날로부터 최대 400일 보관한 뒤 자동으로 삭제합니다. 이 기록은 이름, 이메일이나 계정과 연결되지 않고 설치 식별자도 앱 화면에 나타나지 않아, 당사가 문의한 분의 기록을 찾아 따로 보여 드리거나 지울 수 없습니다. 이후 전송은 설정에서 “데이터 분석 허용”을 끄거나 앱을 지워 멈출 수 있습니다. Google Play와 App Store의 구매 기록은 각 스토어의 정책에 따라 보관됩니다.'
				]
			},
			{
				title: '문의와 이용자 권리',
				body: [
					'이메일로 문의하면 발신 이메일, 문의 내용과 직접 첨부한 자료를 답변과 요청 처리에 사용하고, 해결에 필요한 기간만 보관한 뒤 삭제합니다. 비밀번호나 결제 카드 정보 같은 불필요한 민감 정보는 보내지 마세요.',
					'개인정보 열람, 정정, 삭제, 처리 제한 요청과 개인정보에 관한 질문은 cs@seorilabs.com으로 보내 주세요. 한국어와 영어로 문의할 수 있습니다.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 지역별 스토어 등급도 함께 적용됩니다. 어린이가 설치하는 경우에 대비해 위의 나이 확인을 둡니다. 처리 방식이 바뀌면 이 페이지의 내용과 시행일, 스토어의 개인정보 신고를 함께 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Malang Privacy Policy',
		description:
			'On-device storage, the age check, anonymous play statistics, the Sparkle Collection purchase and deletion in Malang.',
		kicker: 'Malang Privacy Policy',
		lastUpdated: 'November 17, 2026',
		intro:
			'This policy applies to the Malang: Squishy ASMR Toys apps for Android and iOS (package and bundle ID com.seorilabs.malang), published by Seori Labs on Google Play and the App Store, and takes precedence over our general policy for this game. Malang has no ads, no tracking, no sign-up or login and no cloud saves.',
		sections: [
			{
				title: 'Information stored on your device',
				body: [
					'Your collected and selected toys, customizations and the squishies you build in the Maker (including names you give them), coins, discoveries, daily gifts and inbox, sound, vibration, language, display and analytics settings, your age group, your Sparkle Collection purchase record and play statistics not yet sent are kept in the app’s storage. We do not upload these game records to our servers, and there are no accounts, cloud saves or transfers between devices.',
					'Toy sounds and vibration are generated and played on your device. The game does not request camera, microphone, location, contacts or photo permissions. It does not collect advertising identifiers (Android advertising ID or iOS IDFA) and does not ask for permission to track.'
				]
			},
			{
				title: 'Age check',
				body: [
					'On first launch the game asks for your birth year. It uses the year only to set an age group (child or general), stores the age group on your device, and does not store or send the year itself. Because a birth year alone cannot tell whether your birthday has passed, anyone who turns 13 or younger this year is placed in the child group.',
					'For the child group, no play statistics are sent, and tapping a purchase button first shows a multiplication question for a grown-up to answer.'
				]
			},
			{
				title: 'Anonymous play statistics',
				body: [
					'To improve the game, release versions for Android and iOS send play statistics only for the general age group and only while “Allow analytics” is on in Settings. This setting is on by default. The events are first start, tutorial step completion, completion or skip, gift claims, toy unlocks, the Sparkle Collection purchase and Maker saves. Each event carries a random event ID, its time and the tutorial version, and is sent with the app version, language, SDK version, platform (Android or iOS) and a random installation identifier created on your device.',
					'We do not send your name, email, any account, advertising identifiers, device location, birth year, names you give in the Maker, order numbers or purchase tokens. Statistics are received by the Seori Platform ingest server that Seori Labs runs on Google Cloud in the Seoul region (asia-northeast3) and stored in Google BigQuery managed by Seori Labs. We do not send these statistics to Google Analytics, do not sell or share them with other companies, and do not use them for advertising or tracking. Network information such as your IP address may be processed in transit, but the ingest server does not put it in the statistics records.',
					'Turning off “Allow analytics” in Settings deletes events not yet sent and stops further sending. Nothing is sent before you answer the age question.'
				]
			},
			{
				title: 'Sparkle Collection purchase',
				body: [
					'The only paid item is the Sparkle Collection, a one-time purchase you keep. There are no subscriptions, paid random items or ad-removal products. Google Play Billing or the App Store processes payment, and we do not receive card numbers or other payment method details.',
					'The app verifies purchases on your device. For Google Play, it checks the purchase signature with the app’s license public key and confirms the product, package and purchase state; for the App Store, it accepts only transactions verified by StoreKit 2. For a verified purchase, the device records only the store, part of a hash of the purchase token or transaction ID (not the original), the state and the time, to prevent duplicate grants and to remove refunded purchases. Purchase tokens and transaction IDs are not sent to our servers; for the general age group, play statistics only include an event that a purchase happened.',
					'The app creates a random UUID on your device for each installation and, when you buy, passes it to the store as the Google Play obfuscated account ID and the App Store appAccountToken to tell this installation’s purchases apart. We do not link this value to your name, email or the installation identifier used for play statistics.',
					'“Restore purchases” in Settings checks again for purchases made with the same store account. Refunds follow each store’s procedures. For purchase problems, email cs@seorilabs.com with your order number.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Google processes Google Cloud (the Seori Platform ingest server and BigQuery storage) and Google Play (distribution and payment), and Apple processes the App Store (distribution and payment). Communication between the app and the ingest server is encrypted with HTTPS/TLS. The ingest server runs in the Seoul region, but each provider may process data outside the Republic of Korea. See https://policies.google.com/privacy and https://www.apple.com/legal/privacy/ .'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Information on your device stays until you uninstall the app or clear its data. Uninstalling also removes your game records, age group, installation identifier and purchase UUID; a new installation creates new values that are not linked to earlier statistics. We keep no server copy of progress and cannot restore it through support. You can get the Sparkle Collection back with “Restore purchases” on the same store account.',
					'Play statistics records are kept for up to 400 days from the day the ingest server receives them and are then deleted automatically. These records are not linked to a name, email or account, and the app does not show the installation identifier, so we cannot find a particular person’s records to show or delete them individually. You can stop further sending by turning off “Allow analytics” in Settings or by uninstalling the app. Google Play and App Store purchase records are kept under each store’s policies.'
				]
			},
			{
				title: 'Support inquiries and your rights',
				body: [
					'If you email us, we use your email address, message and any attachments you choose to send to answer and handle your request, keep them only as long as needed to resolve it, and then delete them. Do not send passwords, payment card details or other unnecessary sensitive information.',
					'Send requests for access, correction, deletion or restriction of processing, and any privacy questions, to cs@seorilabs.com. You can write in Korean or English.'
				]
			},
			{
				title: 'Age and policy changes',
				body: [
					'This game is intended for ages 13 and older, and regional store ratings also apply. The age check above is in place in case a child installs it. When our processing changes, we update this page, its effective date and the store privacy disclosures.'
				]
			}
		],
		footerNote: 'Privacy and game support: cs@seorilabs.com'
	}
};
