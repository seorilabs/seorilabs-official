import { site, type Locale } from '$lib/content';
import type { LegalPageContent } from '$lib/legalContent';

export const lizardTycoonTermsContent: Record<Locale, LegalPageContent> = {
	ko: {
		title: '내 도마뱀 키우기 이용약관',
		description:
			'내 도마뱀 키우기: 픽셀 테라리움 육성의 서비스 내용, 인앱결제, 크리스털과 모프 상자, 계정 연결, 환불에 관한 앱별 이용약관입니다.',
		kicker: 'Lizard Terrarium Terms of Service',
		lastUpdated: '2026년 9월 30일',
		intro:
			'이 약관은 Seori Labs가 제공하는 「내 도마뱀 키우기: 픽셀 테라리움 육성」(Android 패키지 및 iOS 번들 ID com.seorilabs.lizardtycoon, 이하 “앱”) 이용에 적용됩니다. 앱은 Google Play, Apple App Store, AppsInToss를 통해 제공됩니다.',
		sections: [
			{
				title: '적용 범위',
				body: [
					'이 약관은 앱과 앱이 제공하는 유료 상품 이용에 적용되며, 서리랩스 공통 이용약관보다 우선합니다. 이 약관이 정하지 않은 사항은 공통 이용약관과 관련 법령을 따릅니다.',
					'개인정보 처리에 관한 사항은 내 도마뱀 키우기 개인정보 처리방침을 따릅니다.',
					'앱을 내려받은 마켓의 이용약관과 결제·환불 정책도 함께 적용됩니다.'
				]
			},
			{
				title: '서비스 내용',
				body: [
					'앱은 도마뱀을 돌보는 1인용 육성 게임입니다. 핵심 돌봄과 게임 진행은 무료이며 광고를 포함하지 않습니다.',
					'이용자는 원하는 프리미엄 품종, 사육 랙 확장, 테마, 액세서리를 1회 구매(비소모품)로 살 수 있습니다. 프리미엄 품종은 확정되지만 실제 입양 개체의 모프·성격·체형·시작 크기·선호 먹이는 무작위로 정해지며, 모든 결과의 확률 또는 범위·분포를 결제 전에 구매 버튼과 가까운 위치에 표시합니다.',
					'이용자는 유료 재화 “크리스털”을 충전하고, 크리스털로 “모프 상자”를 열어 무작위 모프(도마뱀 외형)를 얻을 수 있습니다.',
					'돌봄은 인터넷 연결 없이 이용할 수 있으나 신규 구매, 구매 재검증과 미결 지급 복구, 환불 상태 동기화, 크리스털 충전과 사용에는 인터넷 연결이 필요합니다.',
					'게임 진행 데이터는 이용자 기기에 저장됩니다. 구매 소유권, 주문 처리 상태, 크리스털 잔액과 모프 상자 결과는 Seori Labs 서버 원장에 저장됩니다.'
				]
			},
			{
				title: '크리스털과 모프 상자',
				body: [
					'크리스털은 앱 안에서만 사용하는 소모성 유료 재화입니다. 유상 크리스털은 Google Play 또는 Apple App Store의 인앱결제로 충전하고, 무상 크리스털은 게임 안 활동 보상으로 지급됩니다. 크리스털을 사용할 때는 무상 크리스털을 먼저 사용합니다. 크리스털은 다른 재화나 현금으로 환전하거나 타인에게 양도할 수 없습니다.',
					'모프 상자는 크리스털을 사용해 여는 확률형 아이템입니다. 상자에서 나오는 모프는 무작위로 정해지며, 등급별 확률(일반 75%, 희귀 22%, 최고 등급 3%), 최고 등급 보장 횟수(30회), 증표와 중복 시 연구 조각 지급 규칙을 상자를 열기 전 화면과 확인창에 표시합니다. 결과는 Seori Labs 서버가 정하며 확정된 결과를 사후에 바꾸지 않습니다. 확률이나 구성을 바꿀 때는 적용 7일 전에 앱과 이 페이지에 고지합니다.',
					'유상 크리스털의 충전과 사용에는 Google 또는 Apple 계정 연결이 필요합니다. 무상 크리스털의 사용과 모프 수집은 계정 연결 없이도 할 수 있습니다.',
					'크리스털과 모프 상자는 각 마켓에서 판매 가능한 국가·지역에서만 제공합니다. 관련 법령에 따라 일부 국가·지역(예: 벨기에)에서는 제공하지 않을 수 있습니다. AppsInToss 버전에서는 크리스털을 판매하지 않습니다.',
					'Seori Labs가 크리스털 판매를 종료하거나 앱 서비스를 종료하는 경우 종료일 30일 전에 고지하며, 사용하지 않은 유상 크리스털은 관련 법령에 따라 환불하거나 그 절차를 안내합니다.'
				]
			},
			{
				title: '계정 연결과 복원',
				body: [
					'Google 또는 Apple 계정을 연결한 이용자는 앱 삭제·재설치나 기기 변경 뒤 같은 계정을 다시 연결해 크리스털 지갑과 구매 기록을 복구할 수 있습니다.',
					'계정을 연결하지 않은 경우 앱 삭제·재설치 후 기존 익명 설치 ID가 유지된다고 보장하지 않으며, 새 설치 ID에는 기존 주문의 소유권을 자동으로 이전하지 않습니다. 이 경우 고객 지원이 필요합니다.',
					'같은 설치에서는 같은 주문을 다시 검증하고 미결 지급을 복구할 수 있습니다. 서로 다른 마켓(Google Play, Apple App Store, AppsInToss) 사이의 구매 소유권과 크리스털 자동 이전·통합은 지원하지 않습니다.'
				]
			},
			{
				title: '청약철회와 환불',
				body: [
					'결제 승인, 청약철회와 환불은 이용한 Google Play, Apple App Store 또는 AppsInToss의 약관과 관련 법령을 따릅니다.',
					'프리미엄 품종 등 비소모품의 환불 또는 결제 취소가 확인되면 해당 소유권이 회수될 수 있습니다.',
					'크리스털 충전의 환불이 확정되면 그 주문으로 지급된 크리스털 수량을 잔액에서 한 번 차감합니다. 이미 사용해 잔액이 부족하면 잔액이 음수로 표시되고, 해소되기 전까지 크리스털을 사용할 수 없습니다. 환불 전에 이미 받은 모프와 상자 결과는 회수하지 않습니다.'
				]
			},
			{
				title: '이용자의 의무와 지식재산권',
				body: [
					'이용자는 앱을 역공학·변조·무단 배포하거나, 관련 법령과 각 마켓 정책에 위반되는 방식으로 이용해서는 안 됩니다.',
					'앱과 그 구성요소(코드, 그래픽, 사운드 등)에 대한 지식재산권은 Seori Labs에 귀속됩니다. 이용자는 사전 동의 없이 이를 복제·배포하거나 2차적 저작물을 만들 수 없습니다.'
				]
			},
			{
				title: '면책',
				body: [
					'Seori Labs는 천재지변, 이용자 기기의 결함, 운영체제 업데이트 등 합리적 통제를 벗어난 사유로 발생한 손해에 대해 책임을 지지 않습니다.',
					'게임 진행 데이터는 기기에 저장되므로 기기 초기화·앱 삭제 등으로 손실될 수 있습니다. 구매 소유권과 크리스털 지갑의 복원은 “계정 연결과 복원” 항목을 따르며 기기 안 진행 데이터의 복원을 뜻하지 않습니다.'
				]
			},
			{
				title: '약관의 변경, 준거법, 문의',
				body: [
					'Seori Labs는 관련 법령을 위반하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경 내용과 시행일을 이 페이지와 앱에 고지합니다.',
					'이 약관은 대한민국 법령에 따라 해석되며, 앱 이용과 관련한 분쟁은 관계 법령에 따른 관할 법원을 따릅니다.',
					`약관과 앱 지원 문의: ${site.email}`
				]
			}
		],
		footerNote:
			'이 앱별 약관은 Google Play, Apple App Store 및 AppsInToss의 앱 정보와 앱 안 구매 안내에 연결됩니다.'
	},
	en: {
		title: 'Lizard Terrarium Terms of Service',
		description:
			'App-specific terms for Lizard Terrarium covering the service, in-app purchases, Crystals and Morph Boxes, account linking, and refunds.',
		kicker: 'Lizard Terrarium Terms of Service',
		lastUpdated: 'September 30, 2026',
		intro:
			'These terms apply to “Lizard Terrarium” (Android package and iOS bundle ID com.seorilabs.lizardtycoon, the “App”), provided by Seori Labs. The App is distributed through Google Play, the Apple App Store, and AppsInToss.',
		sections: [
			{
				title: 'Scope',
				body: [
					'These terms apply to the App and the paid products it offers, and take precedence over the general Seori Labs Terms of Service. Anything not covered here follows the general terms and applicable law.',
					'Personal data handling is governed by the Lizard Terrarium Privacy Policy.',
					'The terms and payment or refund policies of the store you downloaded the App from also apply.'
				]
			},
			{
				title: 'The Service',
				body: [
					'The App is a single-player game about caring for lizards. Core care and game progress are free, and the App contains no ads.',
					'You may buy premium species, rack expansions, themes, and accessories as one-time (non-consumable) purchases. A premium species is guaranteed, but the adopted individual’s morph, personality, body shape, starting size, and food preference are randomized. The odds or ranges and distributions of every outcome are shown before payment, next to the purchase button.',
					'You may top up a paid currency called “Crystals” and spend Crystals to open “Morph Boxes”, which grant a random morph (lizard appearance).',
					'Care works offline. New purchases, purchase re-verification and pending-grant recovery, refund-status sync, and Crystal top-ups and spending require an internet connection.',
					'Game progress is stored on your device. Purchase entitlements, order status, Crystal balances, and Morph Box results are stored in the Seori Labs server ledger.'
				]
			},
			{
				title: 'Crystals and Morph Boxes',
				body: [
					'Crystals are a consumable paid currency used only inside the App. Paid Crystals are topped up through Google Play or Apple App Store in-app purchases; free Crystals are granted as in-game rewards. Free Crystals are spent first. Crystals cannot be exchanged for other currency or cash, or transferred to another person.',
					'A Morph Box is a randomized item opened with Crystals. The morph you receive is random. The odds by tier (Common 75%, Rare 22%, Legendary 3%), the legendary guarantee (within 30 boxes), and the token and duplicate-shard rules are shown on the box screen and in the confirmation dialog before you open a box. Results are determined by the Seori Labs server and are never changed after the fact. If odds or contents change, we will announce it in the App and on this page 7 days before it takes effect.',
					'Topping up and spending paid Crystals requires linking a Google or Apple account. Spending free Crystals and collecting morphs do not require account linking.',
					'Crystals and Morph Boxes are offered only in countries and regions where each store allows their sale. Under applicable law they may not be offered in some countries or regions (for example, Belgium). The AppsInToss version does not sell Crystals.',
					'If Seori Labs ends Crystal sales or the App service, we will give at least 30 days’ notice and refund unused paid Crystals or explain the refund procedure in accordance with applicable law.'
				]
			},
			{
				title: 'Account Linking and Restoration',
				body: [
					'If you link a Google or Apple account, you can restore your Crystal wallet and purchase records after reinstalling the App or changing devices by linking the same account again.',
					'Without a linked account, we do not guarantee that your anonymous installation ID survives an uninstall and reinstall, and entitlements from earlier orders are not transferred automatically to a new installation ID. Customer support is required in that case.',
					'On the same installation, the same order can be re-verified and pending grants recovered. Automatic transfer or merging of entitlements and Crystals between different stores (Google Play, Apple App Store, AppsInToss) is not supported.'
				]
			},
			{
				title: 'Withdrawal and Refunds',
				body: [
					'Payment approval, withdrawal, and refunds follow the terms and applicable law of the store you used: Google Play, the Apple App Store, or AppsInToss.',
					'If a refund or cancellation of a non-consumable purchase such as a premium species is confirmed, the corresponding entitlement may be revoked.',
					'When a Crystal top-up refund is confirmed, the number of Crystals granted by that order is deducted from your balance once. If you have already spent them and the balance is insufficient, the balance shows as negative and Crystals cannot be spent until it is resolved. Morphs and box results already received before the refund are not revoked.'
				]
			},
			{
				title: 'Your Obligations and Intellectual Property',
				body: [
					'You must not reverse-engineer, modify, or redistribute the App, or use it in ways that violate applicable law or store policies.',
					'Intellectual property in the App and its components (code, graphics, sound, and so on) belongs to Seori Labs. You may not copy, distribute, or create derivative works from them without prior consent.'
				]
			},
			{
				title: 'Disclaimer',
				body: [
					'Seori Labs is not liable for damage caused by events beyond its reasonable control, such as natural disasters, device defects, or operating-system updates.',
					'Game progress is stored on your device and may be lost through device resets or App deletion. Restoration of entitlements and the Crystal wallet follows the “Account Linking and Restoration” section and does not mean restoration of on-device progress.'
				]
			},
			{
				title: 'Changes, Governing Law, and Contact',
				body: [
					'Seori Labs may change these terms within the limits of applicable law, and will announce changes and their effective date on this page and in the App.',
					'These terms are governed by the laws of the Republic of Korea, and disputes related to the App are subject to the courts with jurisdiction under applicable law.',
					`Terms and App support: ${site.email}`
				]
			}
		],
		footerNote:
			'These app-specific terms are linked from the App information on Google Play, the Apple App Store, and AppsInToss, and from purchase guidance inside the App.'
	}
};
