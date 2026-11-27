import type { Locale } from '$lib/content';
import type { LegalDocContent } from '$lib/legal/types';
import { legalContent } from '$lib/legalContent';
import { liveProducts } from '$lib/products/derive';

export function sharedTermsContent(locale: Locale): LegalDocContent {
	const common = legalContent[locale].terms;
	const items = liveProducts.map((product) => {
		const name = product.name[locale];
		const play = product.channels.find((channel) => channel.kind === 'google-play');
		const terms = product.legal.find((document) => document.kind === 'terms');

		return {
			name,
			detail: play?.packageName,
			link: terms && {
				href: terms.path[locale],
				label: locale === 'ko' ? `${name} 별도 약관` : `Terms for ${name}`
			}
		};
	});

	return {
		...common,
		sections: [
			...common.sections,
			{
				id: 'covered-apps',
				title: locale === 'ko' ? '적용 앱' : 'Covered apps',
				body: [],
				items
			}
		]
	};
}
