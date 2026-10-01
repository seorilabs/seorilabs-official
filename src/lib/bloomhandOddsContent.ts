import type { LegalDocContent } from '$lib/legal/types';

/**
 * 블룸핸드 친구 상자 확률 정보(확률형 아이템 표시 의무 RR-05~07).
 * bloomhand 저장소의 data/core/rules.json box 와 data/content/critters.json(pool box)에서 생성했다.
 * 게임 안 상자 화면(FriendBox.odds)과 같은 값이어야 하며, 확률을 바꾸면 7일 전에 이 페이지를 먼저 갱신한다.
 */
export const bloomhandOddsContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '블룸핸드 친구 상자 확률 정보',
		description:
			'블룸핸드 친구 상자(확률형 아이템)의 종류별·친구별 확률, 보장 조건, 누적 확률, 강화 규칙입니다.',
		kicker: 'Bloomhand Friend Box Odds',
		intro:
			'블룸핸드의 친구 상자는 확률형 아이템입니다. 상자 1개를 열면 아래 상자 친구 20종 가운데 1마리가 나옵니다. 상자 친구는 끝없는 도전 개량 리그에서만 등장하고, 토종 리그·10일 도전·오늘의 정원에는 영향을 주지 않습니다. 이 페이지의 확률은 게임 안 상자 화면에 표시되는 값과 같습니다.',
		lastUpdated: '2026년 10월 1일',
		sections: [
			{
				title: '판매 상품',
				body: [
					'친구 상자 1개, 친구 상자 5개(상자 1개마다 아래 확률로 1마리). 가격은 각 스토어에 표시됩니다.',
					'벨기에에서는 친구 상자를 판매하지 않습니다.'
				]
			},
			{
				title: '종류별 확률',
				body: [
					'기본: 10종, 합계 60%, 친구마다 6%',
					'특별: 7종, 합계 32%, 친구마다 4.5714%',
					'희귀: 3종, 합계 8%, 친구마다 2.6667%'
				]
			},
			{
				title: '전체 상자 친구와 성능(레벨 1 기준)',
				body: [
					'무지개 정령 (희귀) · 2.6667% · 점수 얻기마다 · 채점된 서로 다른 꽃 종류 1종당 배수 +0.25 (기본 ×1, 최대 ×2)',
					'별빛 사슴 (희귀) · 2.6667% · 왼쪽에 이웃이 있으면 · 배수 ×1.8',
					'이끼 거인 (희귀) · 2.6667% · 점수 얻기마다 · 이번 판에 넘긴 날 1일당 점수 +3',
					'장수풍뎅이 (특별) · 4.5714% · 카드를 5장 이상 내면 · 배수 +8',
					'수달 (특별) · 4.5714% · 물이 4 이상 남았으면 · 배수 ×1.3',
					'물방개 (특별) · 4.5714% · 채점 카드마다 · 짝수 카드(2·4·6·8·10) · 배수 +1.5',
					'할미새 (특별) · 4.5714% · 채점 카드마다 · 홀수 카드(3·5·7·9) · 배수 +1.5',
					'오소리 (특별) · 4.5714% · 점수 얻기마다 · 전체 카드에서 뺀 카드 1장당 점수 +6 (최대 60)',
					'너구리 (특별) · 4.5714% · 점수 얻기마다 · 가진 코인 4개당 점수 +8 (최대 64)',
					'꾀꼬리 (특별) · 4.5714% · 한빛 화단 · 배수 ×1.6',
					'풀잠자리 (기본) · 6% · 쌍꽃 · 배수 +5',
					'소금쟁이 (기본) · 6% · 물이 3 이상 남았으면 · 점수 +30',
					'집게벌레 (기본) · 6% · 카드를 4장 이상 내면 · 점수 +24',
					'나방 (기본) · 6% · 특수 날씨가 있는 날 · 점수 +40',
					'딱따구리 (기본) · 6% · 채점 카드마다 · 에이스 · 점수 +15',
					'물총새 (기본) · 6% · 세잎 · 점수 +40',
					'노린재 (기본) · 6% · 겹쌍꽃 / 온실 · 배수 +5',
					'땅벌 (기본) · 6% · 점수 얻기마다 · 이번 판에 점수를 얻은 횟수 2회당 배수 +1 (최대 8)',
					'쇠똥구리 (기본) · 6% · 점수 얻기마다 · 오늘 버린 카드 1장당 점수 +10 (최대 50)',
					'콩새 (기본) · 6% · 덩굴 · 점수 +40'
				]
			},
			{
				title: '희귀 보장과 누적 확률',
				body: [
					'상자 10개를 열 동안 희귀 친구가 한 번도 나오지 않으면 10번째 상자는 가진 수가 가장 적은 희귀 친구입니다. 희귀 친구가 나오면 횟수는 0부터 다시 셉니다.',
					'상자 n개 안에 희귀 친구가 1마리 이상 나올 확률은 1 − (92%)ⁿ 이며(n ≤ 9), 10개째에는 100%입니다.',
					'상자 1개 안에 희귀 1마리 이상: 8%',
					'상자 2개 안에 희귀 1마리 이상: 15.36%',
					'상자 3개 안에 희귀 1마리 이상: 22.131%',
					'상자 4개 안에 희귀 1마리 이상: 28.361%',
					'상자 5개 안에 희귀 1마리 이상: 34.092%',
					'상자 6개 안에 희귀 1마리 이상: 39.364%',
					'상자 7개 안에 희귀 1마리 이상: 44.215%',
					'상자 8개 안에 희귀 1마리 이상: 48.678%',
					'상자 9개 안에 희귀 1마리 이상: 52.784%',
					'상자 10개 안에 희귀 1마리 이상: 100%'
				]
			},
			{
				title: '중복과 강화',
				body: [
					'이미 가진 친구가 나오면 그 친구가 강화됩니다. 레벨 n에서 n+1로 올리려면 같은 친구가 n장 더 필요하고(누적 1 + n(n−1)/2장이면 레벨 n), 강화는 항상 성공하며 최대 레벨은 없습니다.',
					'강화 1레벨마다 점수·배수 효과가 50%씩 커집니다(곱하기 효과는 1을 넘는 부분이 커집니다). 코인·물·손의 카드 효과는 그대로입니다.'
				]
			},
			{
				title: '확률 기준일과 변경',
				body: [
					'이 확률은 2026-10-01부터 적용됩니다.',
					'확률이나 보장 조건을 바꾸면 적용 7일 전에 이 페이지와 게임 안 상자 화면에 변경 내용과 시점을 알립니다.',
					'확률 표기는 0이 아닌 첫 자리보다 네 자리 아래에서 반올림했습니다.'
				]
			}
		],
		footerNote: '확률 정보 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Bloomhand Friend Box Odds',
		description:
			'Odds by rarity and by friend, the rare guarantee, cumulative chances and power-up rules for Bloomhand Friend Boxes (random items).',
		kicker: 'Bloomhand Friend Box Odds',
		intro:
			"Friend Boxes in Bloomhand contain random items. Opening one box gives one of the 20 box friends below. Box friends appear only in the Endless Hybrid League and do not affect the Heirloom League, the 10-day challenge or Today's Garden. The odds on this page match the ones shown on the in-game box screen.",
		lastUpdated: 'October 1, 2026',
		sections: [
			{
				title: 'Products',
				body: [
					'1 Friend Box and 5 Friend Boxes (each box gives one friend at the odds below). Prices are shown in each store.',
					'Friend Boxes are not sold in Belgium.'
				]
			},
			{
				title: 'Odds by rarity',
				body: [
					'Common: 10 friends, 60% in total, 6% each',
					'Uncommon: 7 friends, 32% in total, 4.5714% each',
					'Rare: 3 friends, 8% in total, 2.6667% each'
				]
			},
			{
				title: 'All box friends and effects (level 1)',
				body: [
					'Rainbow Sprite (Rare) · 2.6667% · Each hand played · +0.25 Multiplier factor per 1 different suit scored (starts at ×1, max ×2)',
					'Starlight Deer (Rare) · 2.6667% · if a garden friend is to the left · Multiplier ×1.8',
					'Moss Giant (Rare) · 2.6667% · Each hand played · +3 Points per 1 day cleared this run',
					'Rhinoceros Beetle (Uncommon) · 4.5714% · if 5 or more cards played · +8 Multiplier',
					'Otter (Uncommon) · 4.5714% · if water is 4 or more · Multiplier ×1.3',
					'Diving Beetle (Uncommon) · 4.5714% · Each scoring card · even rank (2·4·6·8·10) · +1.5 Multiplier',
					'Wagtail (Uncommon) · 4.5714% · Each scoring card · odd rank (3·5·7·9) · +1.5 Multiplier',
					'Badger (Uncommon) · 4.5714% · Each hand played · +6 Points per 1 card removed from your deck (max 60)',
					'Raccoon (Uncommon) · 4.5714% · Each hand played · +8 Points per 4 coins held (max 64)',
					'Oriole (Uncommon) · 4.5714% · Sunlit Bed · Multiplier ×1.6',
					'Lacewing (Common) · 6% · Twin Bloom · +5 Multiplier',
					'Water Strider (Common) · 6% · if water is 3 or more · +30 Points',
					'Earwig (Common) · 6% · if 4 or more cards played · +24 Points',
					'Moth (Common) · 6% · on weather days · +40 Points',
					'Woodpecker (Common) · 6% · Each scoring card · Ace · +15 Points',
					'Kingfisher (Common) · 6% · Trefoil · +40 Points',
					'Shield Bug (Common) · 6% · Double Twin / Greenhouse · +5 Multiplier',
					'Bumblebee (Common) · 6% · Each hand played · +1 Multiplier per 2 hand played this run (max 8)',
					'Dung Beetle (Common) · 6% · Each hand played · +10 Points per 1 compost card today (max 50)',
					'Hawfinch (Common) · 6% · Vine · +40 Points'
				]
			},
			{
				title: 'Rare guarantee and cumulative chance',
				body: [
					'If 10 boxes in a row give no rare friend, box 10 gives the rare friend you own the fewest of. The count restarts from 0 whenever a rare friend appears.',
					'The chance of at least one rare friend within n boxes is 1 − (92%)ⁿ for n ≤ 9, and 100% by box 10.',
					'At least one rare within 1 box: 8%',
					'At least one rare within 2 boxes: 15.36%',
					'At least one rare within 3 boxes: 22.131%',
					'At least one rare within 4 boxes: 28.361%',
					'At least one rare within 5 boxes: 34.092%',
					'At least one rare within 6 boxes: 39.364%',
					'At least one rare within 7 boxes: 44.215%',
					'At least one rare within 8 boxes: 48.678%',
					'At least one rare within 9 boxes: 52.784%',
					'At least one rare within 10 boxes: 100%'
				]
			},
			{
				title: 'Duplicates and power-ups',
				body: [
					'A friend you already own powers up instead. Going from level n to n+1 takes n more copies of the same friend (level n at 1 + n(n−1)/2 copies in total). Power-ups always succeed and there is no maximum level.',
					'Each level adds 50% to point and multiplier effects (for × effects, the part above ×1 grows). Coin, water and hand-size effects stay the same.'
				]
			},
			{
				title: 'Effective date and changes',
				body: [
					'These odds apply from 2026-10-01.',
					'Any change to the odds or the guarantee is announced on this page and on the in-game box screen 7 days before it takes effect.',
					'Percentages are rounded at the fourth digit below the first non-zero digit.'
				]
			}
		],
		footerNote: 'Questions about odds: cs@seorilabs.com'
	}
};
