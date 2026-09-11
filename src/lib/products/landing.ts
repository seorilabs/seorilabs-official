import type { Locale } from '$lib/content';

export type LandingMedia = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/**
 * 본문 섹션은 앱마다 설명 축이 다르다. 게임은 돌봄·교배·도감이고 생활 앱은
 * 기록·공유·알림이다. 구조를 고정하면 두 번째 앱에서 바로 깨지므로 판별 유니온으로 둔다.
 *
 * policy 섹션을 따로 둔 이유: 광고 유무, 확률형 아이템, 결제 조건은 앱마다 정반대라
 * 공통 기본값을 둘 수 없다. 앱별로 반드시 직접 쓰게 강제한다.
 */
export type LandingSection =
	| { kind: 'prose'; id: string; title: string; paragraphs: string[]; media?: LandingMedia[] }
	| {
			kind: 'feature-list';
			id: string;
			title: string;
			items: Array<{ title: string; body: string }>;
			media?: LandingMedia[];
	  }
	| {
			kind: 'audience';
			id: string;
			title: string;
			items: Array<{ title: string; body: string }>;
			media?: LandingMedia[];
	  }
	| { kind: 'policy'; id: string; title: string; bullets: string[] }
	| { kind: 'changelog'; id: string; title: string; version: string; bullets: string[] };

export type AppLanding = {
	/**
	 * 검색 결과에 노출되는 제목. h1은 스토어 등록명을 그대로 쓰고, 여기에는
	 * 사람이 실제로 치는 질의를 자연스럽게 담는다. 둘을 같게 두면 일반 질의를 놓친다.
	 */
	metaTitle: string;
	metaDescription: string;
	kicker: string;
	title: string;
	lead: string;
	/** 앱별로 반드시 직접 쓴다. 공통 기본값을 두지 않는다. */
	quickFacts: string[];
	sections: LandingSection[];
	installCtaTitle: string;
	faq: Array<{ q: string; a: string }>;
	support: {
		title: string;
		privacyLabel: string;
		supportLabel: string;
		contactLabel: string;
	};
	tagline: string;
	backLabel: string;
	/** schema.org applicationCategory. 게임은 GameApplication을 쓴다. */
	applicationCategory: string;
	operatingSystem: string;
	contentRating: string;
};

export type AppLandingSet = Record<Locale, AppLanding>;
