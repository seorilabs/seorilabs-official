import { site, type Locale } from '$lib/content';

export type LegalPageKey = 'privacy' | 'terms' | 'support';

type LegalSection = {
	title: string;
	body: string[];
};

type LegalPageContent = {
	title: string;
	description: string;
	kicker: string;
	lastUpdated: string;
	intro: string;
	sections: LegalSection[];
	footerNote: string;
	otherLocaleHref: string;
	otherLocaleLabel: string;
};

export const legalContent: Record<Locale, Record<LegalPageKey, LegalPageContent>> = {
	ko: {
		privacy: {
			title: '개인정보 처리방침',
			description:
				'서리랩스 웹사이트, 앱, 서비스에 적용되는 개인정보 처리방침입니다. 앱별 데이터 처리가 다른 경우 별도 앱 정책이 우선 적용됩니다.',
			kicker: 'Privacy Policy',
			lastUpdated: '2026년 7월 3일',
			intro:
				'이 개인정보 처리방침은 서리랩스가 운영하는 웹사이트, 앱, 서비스 중 이 문서로 연결되는 서비스에 적용됩니다. 특정 앱이나 서비스에서 별도 개인정보 처리방침을 제공하는 경우 해당 별도 문서가 우선합니다.',
			sections: [
				{
					title: '수집하는 정보',
					body: [
						'문의 과정에서 사용자가 직접 제공하는 이름, 이메일 주소, 문의 내용 등의 정보를 수집할 수 있습니다.',
						'서비스 안정성, 보안, 장애 분석을 위해 IP 주소, 사용자 에이전트, 요청 시간, 접속 경로 등 기본적인 기술 로그가 처리될 수 있습니다.',
						'서리랩스 앱·게임은 서비스 개선을 위해 익명 사용 데이터(앱/게임 내 이벤트·상호작용)와 익명 분석 식별자를 Google Firebase/Google Analytics 등 분석 도구로 수집할 수 있습니다. 이 데이터는 특정 개인을 식별하지 않으며 계정·연락처와 연결되지 않고, 광고·추적(ATT) 목적으로 사용되지 않습니다.',
						'일부 앱은 계정, 결제(인앱결제), 위치, 카메라, 사진, 연락처, 광고 및 광고 식별자 등 추가 데이터를 사용할 수 있으며, 그 경우 해당 앱 스토어의 데이터 안전/App Privacy 표시와 앱 내 고지를 따릅니다.'
					]
				},
				{
					title: '정보의 이용 목적',
					body: [
						'문의 응답, 프로젝트 상담, 고객 지원, 서비스 운영, 보안 유지, 장애 대응, 법적 의무 준수를 위해 개인정보를 이용합니다.',
						'앱별로 수집되는 데이터는 해당 앱의 핵심 기능 제공, 품질 개선, 부정 이용 방지 등 고지된 목적 범위에서만 이용합니다.'
					]
				},
				{
					title: '제3자 제공 및 처리 위탁',
					body: [
						'서리랩스는 개인정보를 판매하지 않습니다.',
						'서비스 운영에 필요한 범위에서 호스팅, 이메일, 저장소, 배포, 오류 모니터링 등 외부 서비스 제공자가 개인정보를 처리할 수 있습니다.',
						'분석을 위해 Google(Firebase/Google Analytics)이 익명 분석 데이터를 처리할 수 있습니다. 이는 개인을 식별하지 않으며 광고·추적 목적으로 사용되지 않습니다.',
						'법령상 요구가 있거나 권리 보호를 위해 필요한 경우 관련 법령에 따라 정보를 제공할 수 있습니다.'
					]
				},
				{
					title: '보관 기간',
					body: [
						'문의 기록은 응답과 후속 커뮤니케이션에 필요한 기간 동안 보관합니다.',
						'기술 로그는 보안, 장애 대응, 운영 안정성을 위해 필요한 기간 동안 보관한 뒤 삭제하거나 비식별화합니다.',
						'법령상 보관 의무가 있는 정보는 해당 법령에서 정한 기간 동안 보관합니다.'
					]
				},
				{
					title: '이용자의 권리',
					body: [
						'이용자는 본인의 개인정보에 대한 열람, 정정, 삭제, 처리 제한을 요청할 수 있습니다.',
						'개인정보 관련 요청은 아래 연락처로 보내주세요. 요청 확인을 위해 필요한 최소한의 정보를 확인할 수 있습니다.'
					]
				},
				{
					title: '아동의 개인정보',
					body: [
						'서리랩스의 일반 서비스는 만 13세 미만 아동을 대상으로 하지 않습니다.',
						'아동을 대상으로 하는 앱이나 서비스가 제공되는 경우 별도 정책과 보호자 동의 절차를 마련합니다.'
					]
				},
				{
					title: '변경',
					body: [
						'개인정보 처리방침이 변경되는 경우 이 페이지의 최종 수정일을 갱신합니다.',
						'중요한 변경이 있는 경우 서비스 내 공지, 이메일, 또는 웹사이트 공지를 통해 알릴 수 있습니다.'
					]
				},
				{
					title: '문의',
					body: [`개인정보 관련 문의: ${site.email}`]
				}
			],
			footerNote:
				'앱스토어 제출 전에는 실제 앱의 권한, SDK, 데이터 수집 항목과 이 문서가 일치하는지 반드시 확인해야 합니다.',
			otherLocaleHref: '/en/privacy/',
			otherLocaleLabel: 'View in English'
		},
		terms: {
			title: '이용약관',
			description:
				'서리랩스 웹사이트, 앱, 서비스 이용에 적용되는 기본 이용약관입니다. 별도 계약 또는 앱별 약관이 있는 경우 해당 조건이 우선합니다.',
			kicker: 'Terms of Use',
			lastUpdated: '2026년 5월 16일',
			intro:
				'이 이용약관은 서리랩스가 운영하는 웹사이트, 앱, 서비스 중 이 문서로 연결되는 서비스 이용에 적용됩니다. 별도 계약, 견적서, 주문서, 앱별 약관이 있는 경우 해당 조건이 우선합니다.',
			sections: [
				{
					title: '서비스 이용',
					body: [
						'이용자는 관련 법령과 본 약관을 준수하여 서비스를 이용해야 합니다.',
						'서비스를 방해하거나, 무단 접근하거나, 보안 취약점을 악용하거나, 타인의 권리를 침해하는 방식으로 서비스를 이용할 수 없습니다.'
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
						'법령상 허용되는 범위에서 서비스 이용으로 발생하는 간접 손해, 특별 손해, 결과 손해에 대해 책임을 제한합니다.'
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
					title: '문의',
					body: [`약관 관련 문의: ${site.email}`]
				}
			],
			footerNote:
				'상용 앱, 유료 서비스, 구독, 환불 정책이 포함되는 경우 앱별 또는 서비스별 약관을 별도로 두는 것이 좋습니다.',
			otherLocaleHref: '/en/terms/',
			otherLocaleLabel: 'View in English'
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
			footerNote:
				'앱별 지원 URL이 필요한 경우 /apps/{app-name}/support/ 형태로 확장할 수 있습니다.',
			otherLocaleHref: '/en/support/',
			otherLocaleLabel: 'View in English'
		}
	},
	en: {
		privacy: {
			title: 'Privacy Policy',
			description:
				'Privacy Policy for Seori Labs websites, apps, and services. Product-specific notices apply first when an app handles data differently.',
			kicker: 'Privacy Policy',
			lastUpdated: 'July 3, 2026',
			intro:
				'This Privacy Policy applies to Seori Labs websites, apps, and services that link to this document. If a specific app or service provides a separate privacy notice, that product-specific notice applies first.',
			sections: [
				{
					title: 'Information We Collect',
					body: [
						'We may collect information you provide directly, such as your name, email address, and message when you contact us.',
						'We may process basic technical logs, such as IP address, user agent, request time, and referrer, to keep services reliable and secure.',
						'Seori Labs apps and games may collect anonymous usage data (in-app/in-game events and interactions) and an anonymous analytics identifier via analytics tools such as Google Firebase/Google Analytics to improve our services. This data does not identify individuals, is not linked to your account or contacts, and is not used for advertising or tracking (ATT).',
						'Some apps may use additional data such as accounts, payments (in-app purchases), location, camera, photos, contacts, or advertising and advertising identifiers; in those cases the app store Data safety/App Privacy labels and in-app disclosures apply.'
					]
				},
				{
					title: 'How We Use Information',
					body: [
						'We use information to respond to inquiries, provide support, operate services, maintain security, troubleshoot issues, and comply with legal obligations.',
						'Product-specific data is used only for the stated purposes, such as providing core app features, improving quality, and preventing abuse.'
					]
				},
				{
					title: 'Sharing and Service Providers',
					body: [
						'We do not sell personal information.',
						'Service providers may process information for hosting, email, storage, deployment, error monitoring, and other operational needs.',
						'For analytics, Google (Firebase/Google Analytics) may process anonymous analytics data. It does not identify individuals and is not used for advertising or tracking.',
						'We may disclose information when required by law or when necessary to protect rights, safety, or service integrity.'
					]
				},
				{
					title: 'Retention',
					body: [
						'Contact records are kept for as long as needed to respond and maintain follow-up communication.',
						'Technical logs are retained only as needed for security, troubleshooting, and operational reliability, then deleted or de-identified.',
						'Information subject to legal retention requirements is kept for the required period.'
					]
				},
				{
					title: 'Your Rights',
					body: [
						'You may request access, correction, deletion, or restriction of your personal information.',
						'Send privacy requests to the contact address below. We may need minimal information to verify the request.'
					]
				},
				{
					title: 'Children',
					body: [
						'Our general services are not directed to children under 13.',
						'If we provide an app or service directed to children, we will provide an appropriate separate policy and parental consent process.'
					]
				},
				{
					title: 'Changes',
					body: [
						'When this policy changes, we will update the last updated date on this page.',
						'For material changes, we may provide notice in the service, by email, or on our website.'
					]
				},
				{
					title: 'Contact',
					body: [`Privacy contact: ${site.email}`]
				}
			],
			footerNote:
				'Before submitting an app to an app store, verify that this policy matches the app permissions, SDKs, and actual data handling.',
			otherLocaleHref: '/privacy/',
			otherLocaleLabel: '한국어로 보기'
		},
		terms: {
			title: 'Terms of Use',
			description:
				'Basic Terms of Use for Seori Labs websites, apps, and services. Separate contracts or product-specific terms apply first when provided.',
			kicker: 'Terms of Use',
			lastUpdated: 'May 16, 2026',
			intro:
				'These Terms of Use apply to Seori Labs websites, apps, and services that link to this document. If a separate contract, quote, order form, or product-specific terms apply, those terms apply first.',
			sections: [
				{
					title: 'Use of Services',
					body: [
						'You must use the services in compliance with applicable laws and these terms.',
						'You may not interfere with the services, attempt unauthorized access, exploit security issues, or infringe the rights of others.'
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
						'To the extent permitted by law, we limit liability for indirect, special, incidental, or consequential damages arising from service use.'
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
					title: 'Contact',
					body: [`Terms contact: ${site.email}`]
				}
			],
			footerNote:
				'For commercial apps, paid services, subscriptions, or refund policies, product-specific terms are recommended.',
			otherLocaleHref: '/terms/',
			otherLocaleLabel: '한국어로 보기'
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
				'When app-specific support URLs are needed, this can expand to /apps/{app-name}/support/.',
			otherLocaleHref: '/support/',
			otherLocaleLabel: '한국어로 보기'
		}
	}
};

export const legalNav: Record<Locale, Array<{ label: string; href: string }>> = {
	ko: [
		{ label: '개인정보 처리방침', href: '/privacy/' },
		{ label: '이용약관', href: '/terms/' },
		{ label: '고객지원', href: '/support/' }
	],
	en: [
		{ label: 'Privacy', href: '/en/privacy/' },
		{ label: 'Terms', href: '/en/terms/' },
		{ label: 'Support', href: '/en/support/' }
	]
};
