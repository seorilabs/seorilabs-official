import type { Locale } from '$lib/content';

export const legalIndexContent: Record<
	Locale,
	{
		metaTitle: string;
		metaDescription: string;
		kicker: string;
		title: string;
		intro: string;
		globalHeading: string;
		productHeading: string;
		productNote: string;
		updatedLabel: string;
		tagline: string;
		backLabel: string;
	}
> = {
	ko: {
		metaTitle: '법적 고지 - Seori Labs',
		metaDescription:
			'서리랩스의 개인정보 처리방침, 이용약관, 고객지원 안내와 제품별 정책 문서를 한곳에 모았습니다.',
		kicker: 'Legal',
		title: '법적 고지',
		intro:
			'회사 공통 문서와 제품별 문서를 함께 둡니다. 제품마다 다루는 데이터와 결제, 광고 조건이 달라 별도 문서를 두는 제품이 있습니다.',
		globalHeading: '회사 공통 문서',
		productHeading: '제품별 문서',
		productNote:
			'아래 문서는 각 스토어의 앱 상세에 연결되어 있습니다. 해당 제품에 적용되는 내용만 담고 있습니다.',
		updatedLabel: '최종 수정일',
		tagline: '모바일 게임과 생활 앱을 직접 만들고 운영합니다.',
		backLabel: '홈으로'
	},
	en: {
		metaTitle: 'Legal - Seori Labs',
		metaDescription:
			'Privacy policy, terms of service, support information, and per-product policy documents from Seori Labs, collected in one place.',
		kicker: 'Legal',
		title: 'Legal',
		intro:
			'Company-wide documents and per-product documents live here. Some products carry their own policy because the data they handle, what costs money, and whether they show ads all differ.',
		globalHeading: 'Company-wide',
		productHeading: 'Per product',
		productNote:
			'These documents are linked from each store listing and cover only the product they name.',
		updatedLabel: 'Last updated',
		tagline: 'We build our own mobile games and everyday apps, and we run them.',
		backLabel: 'Back home'
	}
};
