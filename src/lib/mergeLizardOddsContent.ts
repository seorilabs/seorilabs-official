import type { LegalDocContent } from '$lib/legal/types';

/**
 * 앰버 리자드(merge-lizard) 수수께끼 알 확률 정보(확률형 아이템 표시 의무).
 * merge-lizard 저장소 docs/05-markets/mystery-egg-odds-web.md 의 한국어와 영어 본문을 옮겼다.
 * 숫자의 정본은 godot/data/content/catalog_v2.json 의 mystery_egg(확률표 mystery_egg_odds v1)이고,
 * 게임 안 표(OddsDisclosure)와 같은 값이어야 한다. 확률이나 나오는 종을 바꾸면 적용 7일 전에 이 페이지를 먼저 갱신한다.
 *
 * 아직 출시 전이라 제품 원장(registry.ts)에 넣지 않고 경로를 직접 지정한다.
 */
export const mergeLizardOddsPaths = [
	{ key: 'ko' as const, path: '/apps/merge-lizard/odds/' },
	{ key: 'en' as const, path: '/en/apps/merge-lizard/odds/' }
];

export const mergeLizardOddsContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '앰버 리자드 수수께끼 알 확률 정보',
		description:
			'앰버 리자드 수수께끼 알(유료 확률형 아이템)의 등급별 확률, 종별 확률, 천장, 누적 확률, 판매 지역과 변경 공지입니다.',
		kicker: 'Amber Lizards Mystery Egg Odds',
		intro:
			'수수께끼 알은 유료 확률형 아이템입니다. 호박 60개(유료로 사거나 플레이로 얻은 호박, 무료 호박부터 사용) 또는 이용권 1장(7일 출석 7일째 보상)으로 열 수 있고 확률은 같습니다. 한 번 열면 같은 종 알(1단계) 3개를 받습니다. 성체나 전설 단계는 나오지 않습니다. 모든 종은 링 보상으로도 얻을 수 있습니다.',
		lastUpdated: '2026-10-22',
		lastUpdatedLabel: '마지막 수정',
		sections: [
			{
				title: '확률표와 시행일',
				body: ['확률표: mystery_egg_odds v1', '시행일: 2026-10-22']
			},
			{
				title: '등급별 확률',
				body: [
					'흔함: 75%. 나오는 종: 이미 발견한 종(귀함 4종 제외). 종 한 마리 확률: 75% ÷ 발견한 종 수.',
					'드묾: 20%. 나오는 종: 지금 생태군 다음 생태군의 종(귀함 4종 제외). 종 한 마리 확률: 20% ÷ 그 생태군 종 수.',
					'귀함: 5%. 나오는 종: 잎꼬리 게코, 푸른혀 스킨크, 뿔 카멜레온, 목도리 도마뱀. 종 한 마리 확률: 각 1.25%.',
					'귀함 4종은 흔함과 드묾 목록에 들어가지 않습니다. 한 종이 흔함과 드묾 목록에 함께 있으면 그 종이 나올 확률은 두 값을 더한 값입니다. 게임 안 구매 화면은 그때 목록과 종별 확률을 보여 주며, 열 때는 그 목록을 씁니다.'
				]
			},
			{
				title: '드묾: 지금 생태군에 따른 종 목록',
				body: [
					'지금 생태군: 햇돌 들판. 다음 생태군: 이끼 숲. 나오는 종과 확률: 등불 도마뱀붙이 6.6667%, 이슬 카멜레온 6.6667%, 바위 아가마 6.6667%.',
					'지금 생태군: 이끼 숲. 다음 생태군: 노을 사막. 나오는 종과 확률: 노을 이구아나 10%, 호박 도마뱀 10%.',
					'지금 생태군: 노을 사막. 다음 생태군: 햇돌 들판. 나오는 종과 확률: 햇발 게코 6.6667%, 이끼 스킨크 6.6667%, 모래 아놀 6.6667%.'
				]
			},
			{
				title: '흔함: 발견한 종 수에 따른 종 한 마리 확률',
				body: [
					'흔함에서 나올 수 있는 종은 햇발 게코, 이끼 스킨크, 모래 아놀, 등불 도마뱀붙이, 이슬 카멜레온, 바위 아가마, 노을 이구아나, 호박 도마뱀 가운데 이미 발견한 종입니다.',
					'발견한 종 수 1: 종 한 마리 확률 75%',
					'발견한 종 수 2: 종 한 마리 확률 37.5%',
					'발견한 종 수 3: 종 한 마리 확률 25%',
					'발견한 종 수 4: 종 한 마리 확률 18.75%',
					'발견한 종 수 5: 종 한 마리 확률 15%',
					'발견한 종 수 6: 종 한 마리 확률 12.5%',
					'발견한 종 수 7: 종 한 마리 확률 10.714%',
					'발견한 종 수 8: 종 한 마리 확률 9.375%'
				]
			},
			{
				title: '천장',
				body: [
					'귀함 없이 9번 연속으로 열면 10번째는 반드시 귀함입니다.',
					'횟수별 확률: 귀함 없이 연 횟수가 0~8번일 때 다음 개봉은 위 등급별 확률을 따릅니다. 9번일 때 다음 개봉은 흔함 0%, 드묾 0%, 귀함 100%(귀함 종마다 25%)입니다.',
					'이용권으로 연 것도 횟수에 포함합니다. 귀함이 나오면(천장이든 아니든) 0으로 돌아갑니다. 흔함과 드묾 목록이 바뀌어도 횟수는 유지됩니다.',
					'내 천장 진행은 게임 안 구매 화면과 결과 화면에서 확인할 수 있습니다.'
				]
			},
			{
				title: '처음부터 N번 안에 귀함이 한 번 이상 나올 확률',
				body: [
					'개봉 수 1: 5%',
					'개봉 수 2: 9.75%',
					'개봉 수 3: 14.263%',
					'개봉 수 4: 18.549%',
					'개봉 수 5: 22.622%',
					'개봉 수 6: 26.491%',
					'개봉 수 7: 30.166%',
					'개봉 수 8: 33.658%',
					'개봉 수 9: 36.975%',
					'개봉 수 10: 100%'
				]
			},
			{
				title: '판매 지역',
				body: [
					'수수께끼 알은 벨기에에서 판매하지 않습니다. 기기 지역을 알 수 없을 때도 판매 카드를 보여 주지 않습니다.'
				]
			},
			{
				title: '변경 공지',
				body: [
					'확률이나 나오는 종을 바꿀 때는 적용 7일 전에 게임 안과 이 페이지에 변경 내용과 적용 시점을 알립니다.',
					'버전 v1, 시행일 2026-10-22: 최초 게시'
				]
			}
		],
		footerNote: '확률 정보 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Amber Lizards Mystery Egg odds',
		description:
			'Odds by grade and by species, pity, cumulative chance, where it is sold and change notices for the Amber Lizards Mystery Egg (a paid random item).',
		kicker: 'Amber Lizards Mystery Egg Odds',
		intro:
			'The Mystery Egg is a paid random item. You can open it with 60 Amber (bought or earned in play, free Amber is used first) or with 1 ticket (day 7 of the 7-day check-in). The odds are the same either way. Each open gives 3 eggs (stage 1) of one species. It never gives grown or legendary lizards. Every species can also be earned from ring rewards.',
		lastUpdated: '2026-10-22',
		sections: [
			{
				title: 'Odds table and effective date',
				body: ['Odds table: mystery_egg_odds v1', 'Effective: 2026-10-22']
			},
			{
				title: 'Odds by grade',
				body: [
					'Common: 75%. Species: species you have found (except the 4 Rare species). Odds for one species: 75% ÷ number of species found.',
					'Uncommon: 20%. Species: species of the area after your current one (except the 4 Rare species). Odds for one species: 20% ÷ number of species in that area.',
					'Rare: 5%. Species: Leaftail Gecko, Bluetongue Skink, Horned Chameleon, Frilled Lizard. Odds for one species: 1.25% each.',
					'The 4 Rare species never appear in the Common or Uncommon lists. If one species is in both the Common and Uncommon lists, its chance is the sum of both values. The purchase screen in the game shows your current lists and the odds for each species, and each open uses those lists.'
				]
			},
			{
				title: 'Uncommon species by current area',
				body: [
					'Current area: Sunstone Steppe. Next area: Moss Hollow. Species and odds: Lantern Gecko 6.6667%, Dew Chameleon 6.6667%, Rock Agama 6.6667%.',
					'Current area: Moss Hollow. Next area: Dusk Dunes. Species and odds: Dusk Iguana 10%, Amber Lizard 10%.',
					'Current area: Dusk Dunes. Next area: Sunstone Steppe. Species and odds: Sunbeam Gecko 6.6667%, Moss Skink 6.6667%, Sand Anole 6.6667%.'
				]
			},
			{
				title: 'Common odds for one species by number of species found',
				body: [
					'Common species are the ones you have already found among Sunbeam Gecko, Moss Skink, Sand Anole, Lantern Gecko, Dew Chameleon, Rock Agama, Dusk Iguana and Amber Lizard.',
					'Species found 1: odds for one species 75%',
					'Species found 2: odds for one species 37.5%',
					'Species found 3: odds for one species 25%',
					'Species found 4: odds for one species 18.75%',
					'Species found 5: odds for one species 15%',
					'Species found 6: odds for one species 12.5%',
					'Species found 7: odds for one species 10.714%',
					'Species found 8: odds for one species 9.375%'
				]
			},
			{
				title: 'Pity',
				body: [
					'After 9 opens in a row without a Rare, the 10th open is always a Rare.',
					'Odds by open: while the count of opens without a Rare is 0 to 8, the next open uses the odds by grade above. When the count is 9, the next open is Common 0%, Uncommon 0%, Rare 100% (25% for each Rare species).',
					'Ticket opens count. The count goes back to 0 after any Rare. The count stays when the Common and Uncommon lists change.',
					'You can see your own count on the purchase and result screens in the game.'
				]
			},
			{
				title: 'Chance of at least one Rare within N opens, starting from 0',
				body: [
					'Opens 1: 5%',
					'Opens 2: 9.75%',
					'Opens 3: 14.263%',
					'Opens 4: 18.549%',
					'Opens 5: 22.622%',
					'Opens 6: 26.491%',
					'Opens 7: 30.166%',
					'Opens 8: 33.658%',
					'Opens 9: 36.975%',
					'Opens 10: 100%'
				]
			},
			{
				title: 'Where it is sold',
				body: [
					'The Mystery Egg is not sold in Belgium. The sale card is also hidden when the device region is unknown.'
				]
			},
			{
				title: 'Changes',
				body: [
					'Before we change any odds or species, we post the change and its start date in the game and on this page at least 7 days ahead.',
					'Version v1, effective 2026-10-22: First publication'
				]
			}
		],
		footerNote: 'Questions about odds: cs@seorilabs.com'
	}
};
