import type { Locale } from '$lib/content';

export type ProductStatus = 'live' | 'upcoming';
export type ProductCategory = 'game' | 'app';

/**
 * 앱인토스는 공개 웹 URL이 없다(토스 앱 내부에서만 열린다).
 * 링크로 만들 수 없다는 사실을 타입으로 강제한다.
 */
export type StoreChannel =
	| { kind: 'google-play'; packageName: string }
	| { kind: 'app-store'; appId: string; country?: string }
	| { kind: 'apps-in-toss' };

export type LegalDocKind = 'privacy' | 'terms' | 'account-deletion';

export type LegalDocRef = {
	kind: LegalDocKind;
	/** 스토어 콘솔에 등록된 경로. 절대 바꾸지 않는다. 반드시 '/'로 끝난다. */
	path: Record<Locale, string>;
	/** sitemap lastmod 전용 ISO 날짜. 화면 표시용 lastUpdated 문자열과 별개다. */
	updated: string;
	/** 전용 페이지가 없어 개인정보처리방침 내부 앵커로 대신하는 경우. */
	legacyAnchor?: { path: string; id: string };
};

export type Product = {
	slug: string;
	/** 목록 노출 순서. 대표작이 밀리지 않도록 자동 정렬하지 않는다. */
	order: number;
	status: ProductStatus;
	category: ProductCategory;
	/** true인 제품만 /apps/{slug}/ 랜딩 페이지를 생성한다. */
	hasLanding: boolean;
	releasedOn?: string;
	/** 랜딩 페이지 sitemap lastmod. */
	updatedOn: string;
	/** 라이브 스토어 등록명을 그대로 쓴다. */
	name: Record<Locale, string>;
	/** 부제를 뺀 짧은 이름. 앱인토스 검색 안내나 좁은 자리에 쓴다. */
	shortName?: Record<Locale, string>;
	/** 스토어 짧은 설명 원문. 심사를 통과한 문구라 새로 쓰지 않는다. */
	tagline: Record<Locale, string>;
	/** 랜딩 페이지 meta description. 랜딩이 있는 제품만 채운다. */
	description?: Record<Locale, string>;
	/** 제품별 특성 배지. 광고 정책은 앱마다 다르므로 공통 기본값을 두지 않는다. */
	badges: Record<Locale, string[]>;
	channels: StoreChannel[];
	media: { icon?: string; ogImage?: Record<Locale, string> };
	legal: LegalDocRef[];
};
