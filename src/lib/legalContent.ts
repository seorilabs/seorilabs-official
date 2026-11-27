import { site, type Locale } from '$lib/content';
import { sharedTermsUpdated } from '$lib/legal/docs';

// privacy는 다국어를 별도로 지원하므로 privacyContent.ts에서 관리한다.
export type LegalPageKey = 'terms' | 'support';

const termsUpdatedOn = new Date(sharedTermsUpdated);

type LegalSection = {
	title: string;
	body: string[];
};

export type LegalPageContent = {
	title: string;
	description: string;
	kicker: string;
	lastUpdated: string;
	intro: string;
	sections: LegalSection[];
	footerNote: string;
};

export const legalContent: Record<Locale, Record<LegalPageKey, LegalPageContent>> = {
	ko: {
		terms: {
			title: '서리랩스 공통 이용약관',
			description:
				'서리랩스 앱, 게임과 웹사이트의 공통 이용약관입니다. 적용 앱과 앱별 약관을 확인할 수 있습니다.',
			kicker: 'Terms of Service',
			lastUpdated: termsUpdatedOn.toLocaleDateString('ko-KR', {
				dateStyle: 'long',
				timeZone: 'UTC'
			}),
			intro:
				'이 약관은 서리랩스(Seori Labs)가 운영하는 아래 목록의 앱과 게임, 이 약관에 연결되는 서리랩스 웹사이트·앱·서비스에 적용됩니다. 앱별 약관, 별도 계약, 견적서 또는 주문서와 이 약관이 서로 다른 경우, 해당 서비스에는 그 별도 조건이 우선합니다.',
			sections: [
				{
					title: '서비스 이용',
					body: [
						'이용자는 관련 법령과 본 약관을 준수하여 서비스를 이용해야 합니다.',
						'서비스를 방해하거나, 무단 접근하거나, 보안 취약점을 악용하거나, 타인의 권리를 침해하는 방식으로 서비스를 이용할 수 없습니다.'
					]
				},
				{
					title: '구매와 구독',
					body: [
						'앱에서 유료 상품이나 구독을 제공하는 경우, 구매 전에 표시되는 가격과 결제 조건을 확인할 수 있습니다. 구독 변경과 해지, 구매 취소와 환불은 결제한 곳의 절차와 앱별 약관, 관련 법령을 따릅니다.'
					]
				},
				{
					title: '지식재산권',
					body: [
						'웹사이트, 앱, 문서, 디자인, 코드, 로고, 콘텐츠에 관한 권리는 서리랩스 또는 정당한 권리자에게 있습니다.',
						'별도 허가 없이 콘텐츠를 복제, 배포, 수정, 상업적으로 이용할 수 없습니다.'
					]
				},
				{
					title: '외부 서비스와 링크',
					body: [
						'서비스는 외부 웹사이트, API, 플랫폼, 오픈소스 소프트웨어와 연결될 수 있습니다.',
						'외부 서비스의 정책과 이용 조건은 해당 제공자의 약관을 따릅니다.'
					]
				},
				{
					title: '면책',
					body: [
						'서리랩스는 서비스를 안정적으로 제공하기 위해 노력하지만, 서비스가 항상 중단 없이 제공되거나 오류가 없음을 보장하지 않습니다.',
						'법령상 허용되는 범위에서 서비스 이용으로 발생하는 간접 손해, 특별 손해, 결과 손해에 대해 책임을 제한합니다.',
						'이 약관은 관련 법령이 소비자에게 보장하는 권리를 제한하지 않습니다.'
					]
				},
				{
					title: '변경 및 중단',
					body: [
						'서리랩스는 운영상 필요에 따라 서비스 내용, 기능, 제공 방식을 변경하거나 중단할 수 있습니다.',
						'약관이 변경되는 경우 이 페이지의 최종 수정일을 갱신합니다.'
					]
				},
				{
					title: '리어센드 이용 대상',
					body: [
						'리어센드(Reascend)는 전 세계 만 18세 이상 성인만 이용할 수 있는 서비스입니다. 만 18세 미만 이용자를 대상으로 제공하지 않습니다.',
						'이 연령 조건은 리어센드에만 적용됩니다. 다른 Seori Labs 앱과 서비스의 이용 조건은 각 제품의 안내를 따릅니다.'
					]
				},
				{
					title: '문의',
					body: [`약관 관련 문의: ${site.email}`]
				}
			],
			footerNote: '약관이나 구매에 관해 문의할 때 사용 중인 앱 또는 서비스 이름을 알려 주세요.'
		},
		support: {
			title: '고객지원',
			description: '서리랩스 웹사이트, 앱, 서비스 관련 문의와 지원 요청 안내입니다.',
			kicker: 'Support',
			lastUpdated: '2026년 5월 16일',
			intro:
				'서리랩스 웹사이트, 앱, 서비스에 대한 문의는 이메일로 받고 있습니다. 앱스토어 심사, 사용자 문의, 개인정보 요청에 사용할 수 있는 공식 지원 페이지입니다.',
			sections: [
				{
					title: '지원 연락처',
					body: [
						`이메일: ${site.email}`,
						'일반 문의, 프로젝트 상담, 앱 지원, 개인정보 요청을 이 주소로 보내주세요.'
					]
				},
				{
					title: '문의 시 포함하면 좋은 정보',
					body: [
						'사용 중인 앱 또는 서비스 이름',
						'문제가 발생한 날짜와 시간',
						'사용 중인 기기, 운영체제, 브라우저 또는 앱 버전',
						'문제를 재현하는 단계와 화면 캡처',
						'계정이나 결제 관련 문의인 경우 본인 확인에 필요한 최소한의 정보'
					]
				},
				{
					title: '응답',
					body: [
						'가능한 한 빠르게 확인하고 답변합니다.',
						'장애, 보안, 결제, 개인정보 요청은 일반 문의보다 우선순위를 높여 처리합니다.'
					]
				},
				{
					title: '개인정보 요청',
					body: [
						'개인정보 열람, 정정, 삭제 요청은 이메일 제목에 개인정보 요청이라고 적어 보내주세요.',
						'요청 처리 전 본인 확인을 위해 필요한 최소한의 정보를 요청할 수 있습니다.'
					]
				}
			],
			footerNote: '앱별 지원 URL이 필요한 경우 /apps/{app-name}/support/ 형태로 확장할 수 있습니다.'
		}
	},
	en: {
		terms: {
			title: 'Seori Labs Terms of Service',
			description:
				'Terms of Service for Seori Labs apps, games, and websites, including the list of covered apps and links to app-specific terms.',
			kicker: 'Terms of Service',
			lastUpdated: termsUpdatedOn.toLocaleDateString('en-US', {
				dateStyle: 'long',
				timeZone: 'UTC'
			}),
			intro:
				'These terms apply to the apps and games operated by Seori Labs and listed below, and to Seori Labs websites, apps, and services that link to these terms. If product-specific terms, a separate contract, a quote, or an order form conflicts with these terms, the separate terms take precedence for that service.',
			sections: [
				{
					title: 'Use of Services',
					body: [
						'You must use the services in compliance with applicable laws and these terms.',
						'You may not interfere with the services, attempt unauthorized access, exploit security issues, or infringe the rights of others.'
					]
				},
				{
					title: 'Purchases and subscriptions',
					body: [
						'When an app offers paid items or subscriptions, you can review the price and payment terms before purchasing. Subscription changes and cancellations, purchase cancellations, and refunds follow the procedures of the store or service where you paid, any applicable app-specific terms, and applicable law.'
					]
				},
				{
					title: 'Intellectual Property',
					body: [
						'Rights in the website, apps, documents, designs, code, logos, and content belong to Seori Labs or their respective owners.',
						'You may not copy, distribute, modify, or commercially use the content without permission.'
					]
				},
				{
					title: 'External Services and Links',
					body: [
						'The services may connect to third-party websites, APIs, platforms, or open-source software.',
						'Third-party services are governed by their own terms and policies.'
					]
				},
				{
					title: 'Disclaimers',
					body: [
						'We work to provide stable services, but we do not guarantee that services will always be uninterrupted or error-free.',
						'To the extent permitted by law, we limit liability for indirect, special, incidental, or consequential damages arising from service use.',
						'These terms do not limit any rights that applicable law guarantees to consumers.'
					]
				},
				{
					title: 'Changes and Suspension',
					body: [
						'We may change, suspend, or discontinue services when needed for operational reasons.',
						'When these terms change, we will update the last updated date on this page.'
					]
				},
				{
					title: 'Reascend age eligibility',
					body: [
						'Reascend is available exclusively to adults aged 18 and over worldwide. It is not offered to anyone under 18.',
						'This age condition applies only to Reascend. Other Seori Labs apps and services have their own product-specific eligibility terms.'
					]
				},
				{
					title: 'Contact',
					body: [`Terms contact: ${site.email}`]
				}
			],
			footerNote:
				'When you contact us about these terms or a purchase, please tell us which app or service you use.'
		},
		support: {
			title: 'Support',
			description: 'Support information for Seori Labs websites, apps, and services.',
			kicker: 'Support',
			lastUpdated: 'May 16, 2026',
			intro:
				'Seori Labs receives support requests by email. This page can be used for app store review, user support, and privacy requests.',
			sections: [
				{
					title: 'Support Contact',
					body: [
						`Email: ${site.email}`,
						'Use this address for general inquiries, project discussions, app support, and privacy requests.'
					]
				},
				{
					title: 'Helpful Information to Include',
					body: [
						'The app or service name',
						'The date and time of the issue',
						'Your device, operating system, browser, or app version',
						'Steps to reproduce the issue and screenshots',
						'For account or billing issues, the minimum information needed to verify the request'
					]
				},
				{
					title: 'Response',
					body: [
						'We will review and respond as soon as reasonably possible.',
						'Incidents, security issues, billing issues, and privacy requests may be prioritized over general inquiries.'
					]
				},
				{
					title: 'Privacy Requests',
					body: [
						'For access, correction, or deletion requests, include Privacy Request in the email subject.',
						'We may ask for minimal information to verify the request before processing it.'
					]
				}
			],
			footerNote:
				'When app-specific support URLs are needed, this can expand to /apps/{app-name}/support/.'
		}
	}
};

export const legalNav: Record<Locale, Array<{ label: string; href: string }>> = {
	ko: [
		{ label: '개인정보 처리방침', href: '/privacy/' },
		{ label: '이용약관', href: '/terms/' },
		{ label: '고객지원', href: '/support/' },
		{ label: '법적 고지', href: '/legal/' }
	],
	en: [
		{ label: 'Privacy', href: '/en/privacy/' },
		{ label: 'Terms', href: '/en/terms/' },
		{ label: 'Support', href: '/en/support/' },
		{ label: 'Legal', href: '/en/legal/' }
	]
};
