import { lizardTycoonLanding } from '$lib/products/copy/lizard-tycoon';
import type { AppLandingSet } from '$lib/products/landing';

/** 랜딩 문구를 slug로 찾는다. hasLanding: true인 제품은 여기에 항목이 있어야 한다. */
export const appLandings: Record<string, AppLandingSet> = {
	'lizard-tycoon': lizardTycoonLanding
};
