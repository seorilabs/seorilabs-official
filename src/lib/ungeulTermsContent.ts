import { site, type Locale } from '$lib/content';
import type { LegalPageContent } from '$lib/legalContent';

export const ungeulTermsContent: Record<Locale, LegalPageContent> = {
	ko: {
		title: '운글 이용약관',
		description:
			'운글 앱의 서비스 내용, 계정 연결, 열람권 인앱결제와 청약철회·환불, 이용 제한에 관한 앱별 이용약관입니다.',
		kicker: 'Ungeul Terms of Service',
		lastUpdated: '2026년 8월 28일',
		intro:
			'이 약관은 Seori Labs가 제공하는 「운글: 사주 몰라도 읽히는 풀이」(Android 패키지 및 iOS 번들 ID com.seorilabs.ungeul, 이하 “앱”) 이용에 적용됩니다. 앱은 Google Play, Apple App Store, AppsInToss를 통해 제공됩니다.',
		sections: [
			{
				title: '적용 범위',
				body: [
					'이 약관은 앱과 앱이 제공하는 유료 상품 이용에 적용되며, 서리랩스 공통 이용약관보다 우선합니다. 이 약관이 정하지 않은 사항은 공통 이용약관과 관련 법령을 따릅니다.',
					'개인정보 처리에 관한 사항은 운글 개인정보 처리방침을 따릅니다.',
					'앱을 내려받은 마켓의 이용약관과 결제·환불 정책도 함께 적용됩니다.'
				]
			},
			{
				title: '서비스 내용',
				body: [
					'앱은 이용자가 입력한 생년월일과 태어난 시각을 기기에서 계산해 명식을 만들고, 그 결과에 대응하는 풀이 콘텐츠를 제공합니다.',
					'명식·기본 정보·여섯 갈래 풀이는 무료로 제공되며, 올해의 흐름과 이달의 흐름 풀이는 심화 콘텐츠로 구분됩니다.',
					'앱의 풀이는 전통 명리 체계를 이해하기 쉽게 정리한 참고 콘텐츠입니다. 의료·법률·투자·고용 등 전문적인 판단이나 진단을 대신하지 않으며, 특정 결과를 보장하지 않습니다. 중요한 결정을 이 콘텐츠에만 근거해 내리지 마세요.'
				]
			},
			{
				title: '계정 연결',
				body: [
					'무료 기능은 계정 연결 없이 이용할 수 있습니다. 열람권 구매와 복원에는 계정 연결이 필요합니다.',
					'계정 연결은 Android에서 카카오, iOS에서 카카오 또는 Apple, AppsInToss 버전에서 토스 로그인을 사용합니다. 연결 제공자의 계정을 이용자가 직접 관리해야 하며, 제공자 계정을 잃으면 해당 계정에 적립된 권한을 확인하지 못할 수 있습니다.',
					'이용자가 제공자 앱에서 연결을 해제하거나 제공자 회원을 탈퇴하면 앱에서도 로그아웃 처리되며, 그 계정에 적립된 잔여 열람권을 더 이상 이용하지 못할 수 있습니다.'
				]
			},
			{
				title: '열람권과 광고',
				body: [
					'심화 콘텐츠는 열람권 1장을 사용하거나, Android·iOS에서 보상형 광고를 끝까지 시청해 열 수 있습니다. AppsInToss 버전에는 광고가 없습니다.',
					'열람권은 사용하면 소멸하는 소모성 상품입니다. 구매 시 적립되는 수량과 가격, 통화, 표시 세금은 각 마켓의 상품 표시를 따릅니다.',
					'열람권은 구매한 마켓 계정과 연결 계정에 귀속되며, 이용자 사이에 양도·교환·판매하거나 현금으로 환산할 수 없습니다.',
					'권한 확인은 서버 원장을 기준으로 합니다. 통신 상태나 마켓 처리 지연으로 확인이 늦어질 수 있으며, 이 경우 다시 시도하면 반영됩니다.'
				]
			},
			{
				title: '청약철회와 환불',
				body: [
					'구매 취소와 환불은 결제가 이루어진 마켓의 정책과 절차를 따릅니다. Google Play, Apple App Store, AppsInToss의 각 고객센터로 요청해 주세요.',
					'디지털 콘텐츠 특성상 열람권을 사용해 심화 콘텐츠를 연 뒤에는 해당 사용분에 대한 청약철회가 제한될 수 있습니다(전자상거래 등에서의 소비자보호에 관한 법률 제17조).',
					'사용하지 않은 열람권은 관련 법령과 마켓 정책이 정하는 범위에서 청약철회할 수 있습니다.',
					'환불이나 소유권 이전이 마켓에서 확정되면 서버 원장에 반영되며, 해당 구매로 적립된 권한은 회수됩니다.',
					`앱이 정상적으로 동작하지 않아 구매한 열람권을 이용하지 못한 경우 ${site.email}로 문의해 주세요. 확인 후 마켓 절차 안내와 필요한 조치를 안내합니다.`
				]
			},
			{
				title: '미성년자 결제',
				body: [
					'미성년자가 법정대리인의 동의 없이 결제한 경우, 법정대리인 또는 미성년자 본인이 관련 법령에 따라 그 결제를 취소할 수 있습니다.',
					'미성년자의 결제에는 법정대리인의 동의가 필요하며, 기기와 마켓 계정의 결제 승인 설정을 함께 확인해 주세요.'
				]
			},
			{
				title: '이용자의 의무와 이용 제한',
				body: [
					'이용자는 관련 법령과 이 약관을 지켜 앱을 이용해야 합니다.',
					'앱이나 서버에 대한 무단 접근, 권한 우회, 결제·보상 검증 무력화, 자동화 도구를 이용한 비정상 요청, 콘텐츠의 무단 복제·배포는 금지됩니다.',
					'위 행위가 확인되면 Seori Labs는 해당 계정의 서비스 이용을 제한하거나 부정하게 취득한 권한을 회수할 수 있습니다. 이용 제한에 이의가 있으면 문의처로 알려 주세요.'
				]
			},
			{
				title: '서비스 변경과 중단',
				body: [
					'Seori Labs는 콘텐츠 보완, 기능 개선, 운영상 필요에 따라 서비스 내용과 제공 방식을 변경할 수 있습니다.',
					'서비스 전부를 종료하는 경우 앱과 이 페이지를 통해 사전에 고지하고, 이미 결제되었으나 사용하지 않은 열람권에 대해 관련 법령에 따라 처리합니다.'
				]
			},
			{
				title: '지식재산권',
				body: [
					'앱의 콘텐츠, 디자인, 코드, 상표에 관한 권리는 Seori Labs 또는 정당한 권리자에게 있습니다.',
					'이용자는 개인적 이용 범위에서 앱을 이용할 수 있으며, 별도 허가 없이 콘텐츠를 복제·배포·수정하거나 상업적으로 이용할 수 없습니다.'
				]
			},
			{
				title: '면책',
				body: [
					'Seori Labs는 앱을 안정적으로 제공하기 위해 노력하지만, 서비스가 중단 없이 제공되거나 오류가 없음을 보장하지 않습니다.',
					'천재지변, 통신 장애, 마켓·플랫폼 사업자의 정책 변경이나 장애 등 Seori Labs가 통제할 수 없는 사유로 발생한 손해에 대해서는 법령이 허용하는 범위에서 책임을 지지 않습니다.',
					'이 약관의 어떤 내용도 법령이 소비자에게 보장하는 권리를 제한하지 않습니다.'
				]
			},
			{
				title: '약관 변경과 분쟁 해결',
				body: [
					'약관이 변경되면 이 페이지의 최종 수정일을 갱신하고, 이용자에게 불리한 중요한 변경은 시행 전에 앱 또는 이 페이지로 고지합니다.',
					'이 약관은 대한민국 법령에 따라 해석됩니다. 분쟁이 발생하면 우선 문의처를 통해 원만한 해결을 협의하며, 소송은 민사소송법이 정하는 관할 법원에 제기합니다.',
					`서비스와 결제 문의: ${site.email}`
				]
			}
		],
		footerNote:
			'이 앱별 약관은 서리랩스 공통 이용약관보다 우선하며, 개인정보 처리는 운글 개인정보 처리방침을 따릅니다.',
		otherLocaleHref: '/en/apps/ungeul/terms/',
		otherLocaleLabel: 'View in English'
	},
	en: {
		title: 'Ungeul Terms of Service',
		description:
			'App-specific terms for Ungeul covering the service, linked accounts, reading-ticket in-app purchases, withdrawal and refunds, and use restrictions.',
		kicker: 'Ungeul Terms of Service',
		lastUpdated: 'August 28, 2026',
		intro:
			'These terms apply to “Ungeul: Saju Read in Plain Words” (Android package and iOS bundle ID com.seorilabs.ungeul, the “App”), provided by Seori Labs. The App is distributed through Google Play, the Apple App Store, and AppsInToss.',
		sections: [
			{
				title: 'Scope',
				body: [
					'These terms apply to the App and its paid items, and they prevail over the general Seori Labs Terms of Use. Matters not covered here follow the general terms and applicable law.',
					'Personal data handling is governed by the Ungeul Privacy Policy.',
					'The terms, payment rules, and refund policies of the market you downloaded the App from also apply.'
				]
			},
			{
				title: 'The service',
				body: [
					'The App calculates a chart on your device from the birth date and time you enter, and provides reading content that corresponds to the result.',
					'The chart, basic information, and the six-strand reading are free. The annual flow and monthly flow readings are in-depth content.',
					'Readings are reference content that explains traditional East Asian fortune-reading concepts in plain language. They do not replace professional medical, legal, financial, or employment advice or diagnosis, and no particular outcome is guaranteed. Do not base important decisions on this content alone.'
				]
			},
			{
				title: 'Linked accounts',
				body: [
					'Free features work without a linked account. Buying and restoring reading tickets requires one.',
					'Account linking uses Kakao on Android, Kakao or Apple on iOS, and Toss Login in the AppsInToss version. You are responsible for your provider account; if you lose access to it, entitlements recorded against that account may no longer be verifiable.',
					'If you unlink in the provider’s app or leave the provider service, the App signs you out and remaining tickets on that account may no longer be usable.'
				]
			},
			{
				title: 'Reading tickets and ads',
				body: [
					'In-depth content can be unlocked with one reading ticket, or on Android and iOS by watching a rewarded ad to the end. The AppsInToss version serves no ads.',
					'Reading tickets are consumable items that are spent on use. The quantity granted per purchase, the price, currency, and displayed taxes follow each market’s store listing.',
					'Tickets are tied to the purchasing market account and the linked account. They cannot be transferred, exchanged, sold between users, or converted to cash.',
					'Entitlements are determined by the server ledger. Network conditions or market processing delays can postpone confirmation; retrying resolves it.'
				]
			},
			{
				title: 'Withdrawal and refunds',
				body: [
					'Cancellations and refunds follow the policy and process of the market where payment was made. Please contact Google Play, the Apple App Store, or AppsInToss support.',
					'Because these are digital goods, the right of withdrawal may be limited for tickets already spent to unlock in-depth content (Korean Act on Consumer Protection in Electronic Commerce, Article 17).',
					'Unused tickets may be withdrawn to the extent allowed by applicable law and market policy.',
					'When a refund or ownership transfer is confirmed by the market, it is reflected in the server ledger and the entitlements granted by that purchase are revoked.',
					`If a malfunction prevented you from using a ticket you paid for, contact ${site.email}. We will review it and guide you through the market process and any action needed.`
				]
			},
			{
				title: 'Purchases by minors',
				body: [
					'Where a minor made a purchase without the consent of a legal guardian, the guardian or the minor may cancel that purchase as provided by applicable law.',
					'Purchases by minors require guardian consent. Please also review the purchase-approval settings on the device and the market account.'
				]
			},
			{
				title: 'Your obligations and use restrictions',
				body: [
					'Use the App in compliance with applicable law and these terms.',
					'Unauthorised access to the App or its servers, bypassing entitlements, defeating payment or reward verification, abnormal automated requests, and unauthorised copying or redistribution of content are prohibited.',
					'If such activity is identified, Seori Labs may restrict service for the account and revoke improperly obtained entitlements. If you disagree with a restriction, contact us.'
				]
			},
			{
				title: 'Changes and discontinuation',
				body: [
					'Seori Labs may change the service and how it is delivered as content is revised, features improve, or operations require it.',
					'If the service is discontinued entirely, we will give notice in the App and on this page in advance, and handle purchased but unused tickets as required by applicable law.'
				]
			},
			{
				title: 'Intellectual property',
				body: [
					'Rights in the App’s content, design, code, and trademarks belong to Seori Labs or the respective rights holders.',
					'You may use the App for personal purposes. Copying, distributing, modifying, or commercially exploiting the content without permission is not allowed.'
				]
			},
			{
				title: 'Disclaimer',
				body: [
					'Seori Labs works to provide the App reliably but does not warrant uninterrupted or error-free service.',
					'To the extent permitted by law, Seori Labs is not liable for damage caused by events outside its control, such as force majeure, network failures, or policy changes and outages at market and platform operators.',
					'Nothing in these terms limits consumer rights guaranteed by applicable law.'
				]
			},
			{
				title: 'Changes to these terms and disputes',
				body: [
					'When these terms change, the last-updated date on this page is revised. Material changes that are unfavourable to users are announced in the App or on this page before they take effect.',
					'These terms are governed by the laws of the Republic of Korea. In case of a dispute, we will first seek an amicable resolution through the contact below; litigation is brought before the court having jurisdiction under the Korean Civil Procedure Act.',
					`Service and billing enquiries: ${site.email}`
				]
			}
		],
		footerNote:
			'These app-specific terms prevail over the general Seori Labs Terms of Use. Personal data handling follows the Ungeul Privacy Policy.',
		otherLocaleHref: '/apps/ungeul/terms/',
		otherLocaleLabel: '한국어로 보기'
	}
};
