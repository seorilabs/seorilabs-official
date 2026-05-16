export const site = {
	name: 'Seori Labs',
	url: 'https://www.seorilabs.com',
	email: 'cs@seorilabs.com',
	image: '/images/hero-lab.png'
};

export type Locale = 'ko' | 'en';

type Capability = {
	title: string;
	body: string;
	icon: 'product' | 'automation' | 'ai';
};

type Step = {
	title: string;
	body: string;
};

type Lab = {
	kicker: string;
	title: string;
	body: string;
};

type HomeContent = {
	locale: Locale;
	lang: string;
	hreflang: string;
	metaTitle: string;
	metaDescription: string;
	nav: {
		vision: string;
		capabilities: string;
		approach: string;
		labs: string;
		contact: string;
		languageLabel: string;
		languageHref: string;
		languageText: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
		primaryCta: string;
		secondaryCta: string;
		keywords: string[];
	};
	vision: {
		kicker: string;
		title: string;
		body: string;
		proofs: Array<{ value: string; label: string }>;
	};
	capabilities: {
		kicker: string;
		title: string;
		body: string;
		items: Capability[];
	};
	approach: {
		kicker: string;
		title: string;
		steps: Step[];
	};
	labs: {
		kicker: string;
		title: string;
		body: string;
		items: Lab[];
	};
	contact: {
		kicker: string;
		title: string;
		body: string;
		cta: string;
	};
	footer: {
		tagline: string;
	};
};

export const content: Record<Locale, HomeContent> = {
	ko: {
		locale: 'ko',
		lang: 'ko',
		hreflang: 'ko-KR',
		metaTitle: 'Seori Labs - 소프트웨어 개발과 새로운 가치 실험',
		metaDescription:
			'서리랩스는 제품 개발, 자동화, AI 시스템을 통해 실용적인 소프트웨어와 새로운 가치창출을 실험하는 개발 스튜디오입니다.',
		nav: {
			vision: '비전',
			capabilities: '역량',
			approach: '방식',
			labs: '실험',
			contact: '문의',
			languageLabel: 'Switch to English',
			languageHref: '/en/',
			languageText: 'EN'
		},
		hero: {
			eyebrow: 'Software studio for useful experiments',
			title: 'Seori Labs',
			lead: '서리랩스는 소프트웨어 개발을 중심으로 제품, 자동화, AI 시스템을 만들고 검증합니다. 작지만 밀도 있는 실험으로 새로운 가치가 실제로 작동하는 지점을 찾습니다.',
			primaryCta: '프로젝트 이야기하기',
			secondaryCta: '작업 방식 보기',
			keywords: ['Product development', 'Automation', 'AI systems']
		},
		vision: {
			kicker: 'Vision',
			title: '좋은 소프트웨어는 아이디어를 실제 가치로 바꾸는 실험 장치입니다.',
			body: '우리는 멋진 기술 자체보다 기술이 만들어내는 변화에 집중합니다. 빠르게 가설을 세우고, 작동하는 형태로 만들고, 사용자와 운영 환경 속에서 검증하며 다음 가능성을 찾습니다.',
			proofs: [
				{ value: 'Build', label: '손에 잡히는 제품 구현' },
				{ value: 'Automate', label: '반복 업무와 운영 흐름 자동화' },
				{ value: 'Explore', label: 'AI와 새로운 인터페이스 실험' }
			]
		},
		capabilities: {
			kicker: 'Capabilities',
			title: '아이디어가 서비스가 되기까지 필요한 핵심을 다룹니다.',
			body: '초기 프로토타입부터 운영 가능한 제품까지, 작게 시작하되 유지 가능한 구조와 사용자 경험을 함께 설계합니다.',
			items: [
				{
					title: '제품 개발',
					body: '웹 서비스, 내부 도구, MVP, 운영 대시보드를 빠르게 설계하고 구현합니다. 기능보다 문제 해결 흐름을 먼저 정리합니다.',
					icon: 'product'
				},
				{
					title: '업무 자동화',
					body: '반복 업무, 데이터 처리, 운영 알림, 배포 흐름을 자동화해 사람이 더 중요한 판단에 집중할 수 있게 만듭니다.',
					icon: 'automation'
				},
				{
					title: 'AI 시스템',
					body: 'AI API, 검색, 문서 처리, 에이전트형 워크플로우를 제품 안에 현실적으로 통합합니다. 데모가 아니라 운영 가능한 형태를 목표로 합니다.',
					icon: 'ai'
				}
			]
		},
		approach: {
			kicker: 'Approach',
			title: '작게 증명하고, 선명하게 확장합니다.',
			steps: [
				{
					title: '문제 정의',
					body: '목표, 사용자, 제약, 성공 기준을 먼저 좁혀 불필요한 구현을 줄입니다.'
				},
				{
					title: '프로토타입',
					body: '핵심 가설을 확인할 수 있는 작은 결과물을 빠르게 만듭니다.'
				},
				{
					title: '제품화',
					body: '운영, 보안, 배포, 유지보수를 고려해 실제 사용 가능한 구조로 정리합니다.'
				},
				{
					title: '반복 개선',
					body: '사용 데이터와 현장의 피드백을 바탕으로 다음 개선 지점을 찾습니다.'
				}
			]
		},
		labs: {
			kicker: 'Labs',
			title: '서리랩스는 계속 실험합니다.',
			body: '새로운 도구, 인터페이스, 자동화 방식, AI 활용법을 직접 만들고 시험합니다. 실패를 빠르게 배우고, 쓸모가 확인된 조각은 제품과 서비스로 확장합니다.',
			items: [
				{
					kicker: 'Experiment 01',
					title: 'AI-assisted workflows',
					body: '문서, 코드, 운영 업무를 연결하는 작고 실용적인 에이전트 흐름을 검증합니다.'
				},
				{
					kicker: 'Experiment 02',
					title: 'Tiny product systems',
					body: '짧은 주기로 출시 가능한 작은 서비스와 내부 도구를 설계합니다.'
				},
				{
					kicker: 'Experiment 03',
					title: 'Automation infrastructure',
					body: '반복 가능한 빌드, 배포, 알림, 데이터 흐름을 더 단순하게 만드는 방식을 연구합니다.'
				}
			]
		},
		contact: {
			kicker: 'Contact',
			title: '새로운 제품, 자동화, AI 실험을 함께 이야기해보세요.',
			body: '아직 정리되지 않은 아이디어라도 괜찮습니다. 목표와 제약을 함께 보고, 가장 작게 검증할 수 있는 시작점을 찾겠습니다.',
			cta: 'cs@seorilabs.com으로 문의'
		},
		footer: {
			tagline: 'Software development, automation, and experiments for new value.'
		}
	},
	en: {
		locale: 'en',
		lang: 'en',
		hreflang: 'en',
		metaTitle: 'Seori Labs - Software development and useful experiments',
		metaDescription:
			'Seori Labs is a software studio building products, automation, and AI systems that turn practical experiments into new value.',
		nav: {
			vision: 'Vision',
			capabilities: 'Capabilities',
			approach: 'Approach',
			labs: 'Labs',
			contact: 'Contact',
			languageLabel: '한국어로 보기',
			languageHref: '/',
			languageText: 'KR'
		},
		hero: {
			eyebrow: 'Software studio for useful experiments',
			title: 'Seori Labs',
			lead: 'Seori Labs builds and validates software products, automation, and AI systems. We use focused experiments to find where new value can actually work.',
			primaryCta: 'Start a conversation',
			secondaryCta: 'See our approach',
			keywords: ['Product development', 'Automation', 'AI systems']
		},
		vision: {
			kicker: 'Vision',
			title: 'Good software turns ideas into working value.',
			body: 'We care less about impressive technology in isolation and more about the change it can create. We frame hypotheses, build working forms, validate them with users and operations, then move toward the next useful possibility.',
			proofs: [
				{ value: 'Build', label: 'Practical product implementation' },
				{ value: 'Automate', label: 'Operational and workflow automation' },
				{ value: 'Explore', label: 'AI and interface experiments' }
			]
		},
		capabilities: {
			kicker: 'Capabilities',
			title: 'We handle the essentials from idea to usable service.',
			body: 'From early prototypes to production-ready products, we start small while designing for maintainable systems and clear user experience.',
			items: [
				{
					title: 'Product development',
					body: 'We design and build web services, internal tools, MVPs, and operational dashboards with a clear focus on the problem flow.',
					icon: 'product'
				},
				{
					title: 'Automation',
					body: 'We automate repetitive work, data processing, notifications, and deployment flows so teams can focus on higher-value decisions.',
					icon: 'automation'
				},
				{
					title: 'AI systems',
					body: 'We integrate AI APIs, search, document processing, and agentic workflows into products with an emphasis on real operation, not just demos.',
					icon: 'ai'
				}
			]
		},
		approach: {
			kicker: 'Approach',
			title: 'Prove small, then expand with clarity.',
			steps: [
				{
					title: 'Define the problem',
					body: 'We clarify goals, users, constraints, and success criteria before writing unnecessary code.'
				},
				{
					title: 'Prototype',
					body: 'We build a compact working result that can validate the core hypothesis.'
				},
				{
					title: 'Productize',
					body: 'We shape the system for actual use, including operations, security, deployment, and maintenance.'
				},
				{
					title: 'Iterate',
					body: 'We use real feedback and usage signals to find the next meaningful improvement.'
				}
			]
		},
		labs: {
			kicker: 'Labs',
			title: 'Seori Labs keeps experimenting.',
			body: 'We build and test new tools, interfaces, automation patterns, and AI use cases. We learn quickly from what fails and expand what proves useful into products and services.',
			items: [
				{
					kicker: 'Experiment 01',
					title: 'AI-assisted workflows',
					body: 'Testing practical agent flows that connect documents, code, and operational work.'
				},
				{
					kicker: 'Experiment 02',
					title: 'Tiny product systems',
					body: 'Designing small services and internal tools that can ship on short cycles.'
				},
				{
					kicker: 'Experiment 03',
					title: 'Automation infrastructure',
					body: 'Studying simpler ways to make build, deployment, alerting, and data flows repeatable.'
				}
			]
		},
		contact: {
			kicker: 'Contact',
			title: 'Let us talk about your next product, automation, or AI experiment.',
			body: 'Your idea does not need to be fully organized yet. We can review the goal and constraints together, then find the smallest useful starting point.',
			cta: 'Contact cs@seorilabs.com'
		},
		footer: {
			tagline: 'Software development, automation, and experiments for new value.'
		}
	}
};
