export const site = {
	name: 'Seori Labs',
	url: 'https://www.seorilabs.com',
	email: 'cs@seorilabs.com',
	image: '/og/home-1200x630.png'
};

export type Locale = 'ko' | 'en';

// 개인정보 처리방침(privacy)만 다국어를 지원한다. terms/support/home은 ko/en 유지.
export type PrivacyLocaleKey = 'ko' | 'en' | 'ja' | 'zh' | 'zh-tw' | 'de' | 'fr' | 'es';

export type PrivacyLocaleMeta = {
	key: PrivacyLocaleKey;
	// URL 경로 세그먼트(짧은 코드). ko는 접두어 없이 루트(/privacy/).
	urlPrefix: string;
	// hreflang / sitemap alternate 용 정식 언어 코드.
	hreflang: string;
	// <html lang> 및 <main lang> 속성 값.
	htmlLang: string;
	// 언어 전환 chip에 표시할 자국어 라벨.
	nativeLabel: string;
};

export const privacyLocales: PrivacyLocaleMeta[] = [
	{ key: 'ko', urlPrefix: '', hreflang: 'ko-KR', htmlLang: 'ko', nativeLabel: '한국어' },
	{ key: 'en', urlPrefix: 'en', hreflang: 'en', htmlLang: 'en', nativeLabel: 'English' },
	{ key: 'ja', urlPrefix: 'ja', hreflang: 'ja', htmlLang: 'ja', nativeLabel: '日本語' },
	{ key: 'zh', urlPrefix: 'zh', hreflang: 'zh-Hans', htmlLang: 'zh-Hans', nativeLabel: '简体中文' },
	{
		key: 'zh-tw',
		urlPrefix: 'zh-tw',
		hreflang: 'zh-Hant',
		htmlLang: 'zh-Hant',
		nativeLabel: '繁體中文'
	},
	{ key: 'de', urlPrefix: 'de', hreflang: 'de-DE', htmlLang: 'de', nativeLabel: 'Deutsch' },
	{ key: 'fr', urlPrefix: 'fr', hreflang: 'fr-FR', htmlLang: 'fr', nativeLabel: 'Français' },
	{ key: 'es', urlPrefix: 'es', hreflang: 'es-ES', htmlLang: 'es', nativeLabel: 'Español' }
];

// privacy 로케일의 /privacy/ 절대 경로. ko는 /privacy/, 그 외는 /{urlPrefix}/privacy/.
export function privacyPath(prefix: string): string {
	return prefix ? `/${prefix}/privacy/` : '/privacy/';
}

type HowItem = {
	title: string;
	body: string;
};

type HomeContent = {
	hreflang: string;
	metaTitle: string;
	metaDescription: string;
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
		primaryCta: string;
		secondaryCta: string;
		keywords: string[];
	};
	products: {
		kicker: string;
		title: string;
		body: string;
		cta: string;
	};
	how: {
		kicker: string;
		title: string;
		items: HowItem[];
	};
	studio: {
		kicker: string;
		title: string;
		body: string;
		/** 값은 제품 원장에서 계산한다. 여기에는 라벨만 둔다. */
		proofLabels: {
			products: string;
			games: string;
			channels: string;
		};
	};
	support: {
		kicker: string;
		title: string;
		body: string;
		cta: string;
		links: Array<{ label: string; href: string }>;
	};
	footer: {
		tagline: string;
	};
};

export const content: Record<Locale, HomeContent> = {
	ko: {
		hreflang: 'ko-KR',
		metaTitle: '서리랩스 - 모바일 게임과 생활 앱을 직접 만들어 서비스합니다',
		metaDescription:
			'서리랩스는 모바일 게임과 생활 앱을 직접 기획하고 개발해 Google Play, App Store, 앱인토스에서 서비스합니다.',
		hero: {
			eyebrow: '모바일 게임 · 생활 앱 퍼블리셔',
			title: '모바일 게임과 생활 앱을 직접 만들어 서비스합니다',
			lead: '기획, 개발, 스토어 등록, 업데이트, 문의 응대를 한 팀에서 합니다. 외주로 받아 만든 제품은 없습니다.',
			primaryCta: '앱 둘러보기',
			secondaryCta: '문의하기',
			keywords: ['Google Play', 'App Store', '앱인토스']
		},
		products: {
			kicker: 'Products',
			title: '서비스 중인 앱',
			body: '전부 서리랩스가 직접 만들고 운영하는 제품입니다. 각 앱의 설치 경로와 정책 문서를 함께 공개합니다.',
			cta: '앱 전체 보기'
		},
		how: {
			kicker: 'How we build',
			title: '우리가 지키는 세 가지',
			items: [
				{
					title: '끝까지 직접 만듭니다',
					body: '기획, 아트, 개발, 스토어 등록, 업데이트, 문의 응대를 바깥에 맡기지 않습니다. 버그가 생기면 만든 사람이 고칩니다.'
				},
				{
					title: '앱마다 조건을 먼저 밝힙니다',
					body: '광고가 있는지, 무엇이 유료인지, 확률형 아이템이 있는지, 어떤 데이터를 받는지를 앱 상세와 정책 문서에 적어 둡니다.'
				},
				{
					title: '세 마켓에 함께 냅니다',
					body: '같은 제품을 Google Play, App Store, 토스의 앱인토스에 함께 올립니다. 한 마켓의 사정으로 쓰던 제품이 멈추지 않게 하려는 이유입니다.'
				}
			]
		},
		studio: {
			kicker: 'Studio',
			title: '두 사람의 성에서 시작한 이름',
			body: "'서리'는 두 사람의 성 '서'와 '이'를 하나로 합쳐 만든 이름입니다. 작은 팀이라 만드는 사람과 답장하는 사람이 같습니다.",
			proofLabels: {
				products: '서비스 중인 앱',
				games: '게임',
				channels: '출시 마켓'
			}
		},
		support: {
			kicker: 'Support',
			title: '앱을 쓰다 막히면 여기로 연락하세요',
			body: '버그 신고, 결제와 구매 복원 문제, 개인정보 열람·삭제 요청을 같은 주소로 받습니다. 앱 이름과 쓰시는 기기, 문제가 생긴 시각을 적어 주시면 확인이 빠릅니다.',
			cta: 'cs@seorilabs.com으로 문의',
			links: [
				{ label: '고객지원 안내', href: '/support/' },
				{ label: '법적 고지', href: '/legal/' }
			]
		},
		footer: {
			tagline: '모바일 게임과 생활 앱을 직접 만들고 운영합니다.'
		}
	},

	en: {
		hreflang: 'en',
		metaTitle: 'Seori Labs - We build and run our own mobile games and apps',
		metaDescription:
			'Seori Labs designs, builds, and publishes its own mobile games and everyday apps on Google Play, the App Store, and AppsInToss.',
		hero: {
			eyebrow: 'Mobile games and everyday apps',
			title: 'We build our own mobile games and everyday apps',
			lead: 'Design, code, store submission, updates, and support mail stay in one team. None of it is client work.',
			primaryCta: 'See the apps',
			secondaryCta: 'Get in touch',
			keywords: ['Google Play', 'App Store', 'AppsInToss']
		},
		products: {
			kicker: 'Products',
			title: 'Live right now',
			body: 'Every app here was built and is operated by Seori Labs. Each one links to where you can install it and to its own policy documents.',
			cta: 'See all apps'
		},
		how: {
			kicker: 'How we build',
			title: 'Three things we hold to',
			items: [
				{
					title: 'We build all of it',
					body: 'Design, art, code, store submission, updates, and support mail stay in-house. When something breaks, the person who wrote it fixes it.'
				},
				{
					title: 'We write the terms down first',
					body: 'Whether an app shows ads, what costs money, whether it contains randomized items, and what data it receives are written on the app page and in its policy documents.'
				},
				{
					title: 'We ship to three stores together',
					body: 'The same product goes to Google Play, the App Store, and Toss AppsInToss, so that one store’s decision cannot take an app you use away from you.'
				}
			]
		},
		studio: {
			kicker: 'Studio',
			title: 'A name made of two surnames',
			body: 'Seori joins two family names, Seo and Lee, into one word. The team is small enough that the person who builds an app is the one who writes back.',
			proofLabels: {
				products: 'live apps',
				games: 'games',
				channels: 'stores'
			}
		},
		support: {
			kicker: 'Support',
			title: 'If an app gives you trouble, write to us',
			body: 'Bug reports, purchase and restore problems, and privacy access or deletion requests all go to the same address. Tell us the app name, your device, and when it happened, and we can look faster.',
			cta: 'Email cs@seorilabs.com',
			links: [
				{ label: 'Support', href: '/en/support/' },
				{ label: 'Legal', href: '/en/legal/' }
			]
		},
		footer: {
			tagline: 'We build our own mobile games and everyday apps, and we run them.'
		}
	}
};
