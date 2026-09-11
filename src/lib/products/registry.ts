import type { Product } from '$lib/products/types';

/**
 * 서리랩스 제품 단일 원장.
 *
 * 홈 제품 섹션, /apps/ 목록, /apps/{slug}/ 랜딩, /legal/ 인덱스, sitemap이
 * 모두 이 배열에서 파생된다. 새 앱은 여기에 항목을 추가하면 된다.
 *
 * name과 tagline은 실제 스토어 등록 문구를 따른다. 임의로 고쳐 쓰면 심사 문구와
 * 어긋난다. legal[].path는 스토어 콘솔에 등록된 URL이므로 절대 바꾸지 않는다.
 */
export const products: Product[] = [
	{
		slug: 'lizard-tycoon',
		order: 1,
		status: 'live',
		category: 'game',
		hasLanding: true,
		releasedOn: '2026-08-06',
		updatedOn: '2026-09-11',
		name: {
			ko: '내 도마뱀 키우기 : 픽셀 테라리움 육성',
			en: 'Lizard Terrarium'
		},
		shortName: { ko: '내 도마뱀 키우기', en: 'Lizard Terrarium' },
		tagline: {
			ko: '도마뱀 식구를 돌보고 교배하며 모프와 무늬를 모으는 픽셀 육성 게임',
			en: 'Care, breed, and collect a growing lizard family in a cozy pixel terrarium.'
		},
		description: {
			ko: '먹이를 주고 온도를 맞추고 교감하며 도마뱀을 키우는 픽셀 육성 게임. 교배와 유전으로 모프와 무늬를 모아 도감을 채웁니다. 광고 없음, 오프라인 돌봄 가능, 전체이용가.',
			en: 'Feed, warm, clean, and bond with lizards in your own pixel terrarium. Breed for morphs and patterns and fill out the collection. No ads, offline care, rated 3+.'
		},
		badges: {
			ko: ['게임', '광고 없음'],
			en: ['Game', 'No ads']
		},
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.lizardtycoon' },
			{ kind: 'app-store', appId: '6786516830' },
			{ kind: 'apps-in-toss' }
		],
		media: {
			icon: '/products/lizard-tycoon/icon-256.webp',
			ogImage: {
				ko: '/og/lizard-tycoon-1200x630.png',
				en: '/og/lizard-tycoon-en-1200x630.png'
			}
		},
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/lizard-tycoon/privacy/', en: '/en/apps/lizard-tycoon/privacy/' },
				updated: '2026-08-14'
			}
		]
	},
	{
		slug: 'babycare',
		order: 2,
		status: 'live',
		category: 'app',
		hasLanding: false,
		updatedOn: '2026-08-10',
		name: {
			ko: '함께봄: 수유, 기저귀, 아기돌봄 기록 어플',
			en: 'BabyNest: Shared Baby Care Log'
		},
		shortName: { ko: '함께봄', en: 'BabyNest' },
		tagline: {
			ko: '수유·수면·체온·복약을 여러 양육자가 실시간으로 함께 기록하는 공동 돌봄 앱',
			en: 'Log feeding, sleep, temperature, and medication together with every caregiver.'
		},
		badges: { ko: ['생활 앱'], en: ['App'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.babycare' },
			{ kind: 'app-store', appId: '6792193162' }
		],
		media: { icon: '/products/babycare/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/babycare/privacy/', en: '/en/apps/babycare/privacy/' },
				updated: '2026-08-10'
			},
			{
				kind: 'account-deletion',
				path: {
					ko: '/apps/babycare/account-deletion/',
					en: '/en/apps/babycare/account-deletion/'
				},
				updated: '2026-08-09'
			}
		]
	},
	{
		slug: 'ungeul',
		order: 3,
		status: 'live',
		category: 'app',
		hasLanding: false,
		updatedOn: '2026-09-07',
		name: {
			ko: '운글: 사주 몰라도 읽히는 풀이',
			en: 'Ungeul'
		},
		shortName: { ko: '운글', en: 'Ungeul' },
		tagline: {
			ko: '생년월일과 태어난 시간을 넣으면 명식·오행·십성·대운을 읽기 쉬운 말로 풀어드립니다',
			en: 'Saju readings explained in plain words. Korean only.'
		},
		badges: { ko: ['생활 앱'], en: ['App'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.ungeul' },
			{ kind: 'apps-in-toss' }
		],
		media: { icon: '/products/ungeul/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/ungeul/privacy/', en: '/en/apps/ungeul/privacy/' },
				updated: '2026-09-07'
			},
			{
				kind: 'terms',
				path: { ko: '/apps/ungeul/terms/', en: '/en/apps/ungeul/terms/' },
				updated: '2026-08-28'
			}
		]
	},
	{
		slug: 'happy-farm',
		order: 4,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-08-27',
		name: { ko: '행복 농장 타이쿤', en: 'Happy Farm Tycoon' },
		tagline: {
			ko: '작물을 심고 수확하며 농장을 확장하는 방치형 농장 게임',
			en: 'Plant, harvest, research, and expand your idle farm.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.happyfarm' },
			{ kind: 'app-store', appId: '6775451733' }
		],
		media: { icon: '/products/happy-farm/icon-256.webp' },
		legal: []
	},
	{
		slug: 'spiritgate-defenders',
		order: 5,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-09-11',
		name: { ko: '영혼의 문 디펜스', en: 'Spiritgate Defenders' },
		tagline: {
			ko: '몰려오는 요괴에 맞서 마지막 산문을 지키는 영웅 성장 웨이브 디펜스 RPG',
			en: 'Grow a hero build and defend the last gate through 23 relentless waves.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.spiritgatedefenders' },
			{ kind: 'app-store', appId: '6792205995' }
		],
		media: { icon: '/products/spiritgate-defenders/icon-256.webp' },
		legal: []
	},
	{
		slug: 'crossword-puzzle',
		order: 6,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-08-27',
		name: { ko: '가로세로 낱말 퍼즐', en: 'Korean Crossword Puzzle' },
		tagline: {
			ko: '매일 한 판씩 푸는 한글 가로세로 낱말 퍼즐',
			en: 'A daily Korean-language crossword. Korean only.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.crosswordpuzzle' },
			{ kind: 'app-store', appId: '6777292094' }
		],
		media: { icon: '/products/crossword-puzzle/icon-256.webp' },
		legal: []
	},
	{
		slug: 'jomul',
		order: 7,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-09-10',
		name: { ko: '조물조물 만물 합치기', en: 'Little Wonders: Merge & Make' },
		tagline: {
			ko: '두 개를 겹치면 새로운 게 나와요. 한국의 자연과 사계절을 조물조물 만들어요.',
			en: 'Mix, discover, and collect little wonders from Korean nature and everyday life.'
		},
		badges: { ko: ['게임', '아동 대상'], en: ['Game', 'For kids'] },
		channels: [{ kind: 'app-store', appId: '6801187599' }],
		media: { icon: '/products/jomul/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/jomul/privacy/', en: '/en/apps/jomul/privacy/' },
				updated: '2026-09-06'
			},
			{
				kind: 'account-deletion',
				path: { ko: '/apps/jomul/privacy/', en: '/en/apps/jomul/privacy/' },
				updated: '2026-09-06',
				legacyAnchor: { path: '/apps/jomul/privacy/', id: 'delete-data' }
			}
		]
	},
	{
		slug: 'foam-party',
		order: 8,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-09-11',
		name: { ko: '버블 버블 거품 세차', en: 'Bubble Bubble Foam Party' },
		tagline: {
			ko: '물, 비누, 스펀지와 바람으로 자동차를 씻는 캐주얼 세차 게임',
			en: 'Wash messy cars with water, soap, air, and sponge tools in quick casual levels.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.foamparty' },
			{ kind: 'app-store', appId: '6779624201' }
		],
		media: { icon: '/products/foam-party/icon-256.webp' },
		legal: []
	},
	{
		slug: 'lucid-chess',
		order: 9,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-08-22',
		name: { ko: '루시드 체스', en: 'Lucid Chess' },
		tagline: {
			ko: '루시드 렌즈로 후보 수를 보며 AI와 두는 체스',
			en: 'Play chess against AI with Lucid Lens move hints.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.lucidchess' },
			{ kind: 'app-store', appId: '1041884410' }
		],
		media: { icon: '/products/lucid-chess/icon-256.webp' },
		legal: []
	},

	// 아래는 아직 출시 전이다. 목록에 노출하지 않지만 개인정보처리방침은 이미
	// 스토어 심사에 쓰이고 있으므로 경로와 sitemap 등재를 유지한다.
	{
		slug: 'lord-ledger',
		order: 101,
		status: 'upcoming',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-09-09',
		name: { ko: '삼국지 풍운록', en: 'Lord Ledger' },
		tagline: {
			ko: '46개 도시와 226명의 장수로 천하를 경영하는 정통 가로형 역사 전략 게임',
			en: 'Rule 46 cities and 226 officers in a landscape Three Kingdoms strategy game.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [],
		media: {},
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/lord-ledger/privacy/', en: '/en/apps/lord-ledger/privacy/' },
				updated: '2026-09-09'
			},
			{
				kind: 'account-deletion',
				path: { ko: '/apps/lord-ledger/privacy/', en: '/en/apps/lord-ledger/privacy/' },
				updated: '2026-09-09',
				legacyAnchor: { path: '/apps/lord-ledger/privacy/', id: 'account-deletion' }
			}
		]
	},
	{
		slug: 'matgo',
		order: 102,
		status: 'upcoming',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-09-09',
		name: { ko: '달빛 맞고', en: 'Moonlight Matgo' },
		tagline: {
			ko: '현금성 보상 없이 AI와 즐기는 큰 글자 오프라인 2인 맞고',
			en: 'A clear, offline two-player Matgo card game against AI.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [],
		media: {},
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/matgo/privacy/', en: '/en/apps/matgo/privacy/' },
				updated: '2026-09-09'
			}
		]
	},
	{
		slug: 'cycle-pair',
		order: 103,
		status: 'upcoming',
		category: 'app',
		hasLanding: false,
		updatedOn: '2026-08-09',
		name: { ko: '사이클 페어', en: 'Cycle Pair' },
		tagline: {
			ko: '생리주기를 함께 이해하고 대비하는 커플 케어 앱',
			en: 'A private cycle and condition sharing app for two.'
		},
		badges: { ko: ['생활 앱'], en: ['App'] },
		channels: [],
		media: {},
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/cycle-pair/privacy/', en: '/en/apps/cycle-pair/privacy/' },
				updated: '2026-08-09'
			},
			{
				kind: 'account-deletion',
				path: {
					ko: '/apps/cycle-pair/account-deletion/',
					en: '/en/apps/cycle-pair/account-deletion/'
				},
				updated: '2026-08-09'
			}
		]
	}
];
