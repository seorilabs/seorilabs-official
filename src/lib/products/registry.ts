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
		updatedOn: '2026-10-17',
		name: {
			ko: '도마뱀 테라리움',
			en: 'Lizard Terrarium'
		},
		tagline: {
			ko: '도마뱀 식구를 돌보고 교배하며 모프와 무늬를 모으는 픽셀 육성 게임',
			en: 'Care, breed, and collect a growing lizard family in a cozy pixel terrarium.'
		},
		description: {
			ko: '먹이를 주고 온도를 맞추고 교감하며 도마뱀을 키우는 픽셀 육성 게임. 교배와 유전으로 모프와 무늬를 모아 도감을 채웁니다. 광고는 원할 때만 보는 보상형, 오프라인 돌봄 가능, 전체이용가.',
			en: 'Feed, warm, clean, and bond with lizards in your own pixel terrarium. Breed for morphs and patterns and fill out the collection. Optional rewarded ads only, offline care, rated 3+.'
		},
		badges: {
			ko: ['게임', '선택형 보상 광고'],
			en: ['Game', 'Optional rewarded ads']
		},
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.lizardtycoon' },
			{ kind: 'app-store', appId: '6786516830' },
			{ kind: 'apps-in-toss', searchName: '내 도마뱀 키우기' }
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
				updated: '2026-09-30'
			},
			{
				kind: 'terms',
				path: { ko: '/apps/lizard-tycoon/terms/', en: '/en/apps/lizard-tycoon/terms/' },
				updated: '2026-09-30'
			}
		]
	},
	{
		slug: 'babycare',
		order: 2,
		status: 'live',
		category: 'app',
		hasLanding: false,
		updatedOn: '2026-10-17',
		name: {
			ko: '함께봄: 수유, 기저귀, 아기돌봄 기록 어플',
			en: 'BabyNest: Shared Baby Care Log'
		},
		tagline: {
			ko: '수유·수면·체온·복약을 여러 양육자가 실시간으로 함께 기록하는 공동 돌봄 앱',
			en: 'Log feeding, sleep, temperature, and medication together with every caregiver.'
		},
		badges: { ko: ['생활 앱'], en: ['App'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.babycare' },
			{ kind: 'app-store', appId: '6792193162' },
			{ kind: 'apps-in-toss', searchName: '함께봄: 아기돌봄 기록' }
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
		updatedOn: '2026-10-17',
		name: {
			ko: '운글: 사주 몰라도 읽히는 풀이',
			en: 'Ungeul'
		},
		tagline: {
			ko: '생년월일과 태어난 시간을 넣으면 명식·오행·십성·대운을 읽기 쉬운 말로 풀어드립니다',
			en: 'Saju readings explained in plain words. Korean only.'
		},
		badges: { ko: ['생활 앱'], en: ['App'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.ungeul' },
			{ kind: 'apps-in-toss', searchName: '운글' }
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
		updatedOn: '2026-10-17',
		name: { ko: '행복 농장 타이쿤', en: 'Happy Farm Tycoon' },
		tagline: {
			ko: '작물을 심고 수확하며 농장을 확장하는 방치형 농장 게임',
			en: 'Plant, harvest, research, and expand your idle farm.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.happyfarm' },
			{ kind: 'app-store', appId: '6775451733' },
			{ kind: 'apps-in-toss', searchName: '행복한 농장 타이쿤' }
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
		updatedOn: '2026-10-23',
		name: { ko: '가로세로 낱말 퍼즐', en: 'Korean Crossword Puzzle' },
		tagline: {
			ko: '매일 한 판씩 푸는 한글 가로세로 낱말 퍼즐',
			en: 'A daily Korean-language crossword. Korean only.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.crosswordpuzzle' },
			{ kind: 'app-store', appId: '6777292094' },
			{ kind: 'apps-in-toss', searchName: '가로세로 낱말' }
		],
		media: { icon: '/products/crossword-puzzle/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/crossword-puzzle/privacy/', en: '/en/apps/crossword-puzzle/privacy/' },
				updated: '2026-10-23'
			},
			{
				kind: 'account-deletion',
				path: { ko: '/apps/crossword-puzzle/privacy/', en: '/en/apps/crossword-puzzle/privacy/' },
				updated: '2026-10-23',
				legacyAnchor: { path: '/apps/crossword-puzzle/privacy/', id: 'account-deletion' }
			}
		]
	},
	{
		slug: 'jomul',
		order: 7,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-10-17',
		name: { ko: '조물조물 만물 합치기', en: 'Little Wonders: Merge & Make' },
		tagline: {
			ko: '두 개를 겹치면 새로운 게 나와요. 한국의 자연과 사계절을 조물조물 만들어요.',
			en: 'Mix, discover, and collect little wonders from Korean nature and everyday life.'
		},
		badges: { ko: ['게임', '아동 대상'], en: ['Game', 'For kids'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.jomul' },
			{ kind: 'app-store', appId: '6801187599' },
			{ kind: 'apps-in-toss', searchName: '조물조물 만들기' }
		],
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
		updatedOn: '2026-10-17',
		name: { ko: '버블 버블 거품 세차', en: 'Bubble Bubble Foam Party' },
		tagline: {
			ko: '물, 비누, 스펀지와 바람으로 자동차를 씻는 캐주얼 세차 게임',
			en: 'Wash messy cars with water, soap, air, and sponge tools in quick casual levels.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.foamparty' },
			{ kind: 'app-store', appId: '6779624201' },
			{ kind: 'apps-in-toss', searchName: '버블 버블 거품 세차' }
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
		updatedOn: '2026-10-24',
		name: { ko: '루시드 체스', en: 'Lucid Chess' },
		tagline: {
			ko: '루시드 렌즈로 후보 수를 보며 AI와 두는 체스',
			en: 'Play chess against AI with Lucid Lens move hints.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.lucidchess' },
			{ kind: 'app-store', appId: '1041884410' },
			{ kind: 'apps-in-toss', searchName: '루시드 체스' }
		],
		media: { icon: '/products/lucid-chess/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/lucid-chess/privacy/', en: '/en/apps/lucid-chess/privacy/' },
				updated: '2026-10-24'
			}
		]
	},
	{
		slug: 'lucid-reversi',
		order: 10,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-10-17',
		name: { ko: '루시드 리버시', en: 'Lucid Reversi' },
		tagline: {
			ko: '선명한 보드와 큼직한 흑백 돌로 다음 수가 잘 보이는, AI와 한 판 붙는 모바일 리버시',
			en: 'A mobile reversi game for quick matches against AI, with a clear board and instant move feedback.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		// 네이티브 번들 ID는 구 네임스페이스(com.etlegame.reversi)이며 iOS만 제공한다.
		channels: [
			{ kind: 'app-store', appId: '994468960' },
			{ kind: 'apps-in-toss', searchName: '루시드 리버시' }
		],
		media: { icon: '/products/lucid-reversi/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/lucid-reversi/privacy/', en: '/en/apps/lucid-reversi/privacy/' },
				updated: '2026-09-22'
			}
		]
	},
	{
		slug: 'lord-ledger',
		order: 11,
		status: 'live',
		category: 'game',
		hasLanding: false,
		releasedOn: '2026-09-25',
		updatedOn: '2026-09-25',
		name: { ko: '삼국지 풍운록', en: 'Lord Ledger' },
		tagline: {
			ko: '46개 도시와 226명의 장수로 천하를 경영하는 정통 가로형 역사 전략 게임',
			en: 'Rule 46 cities and 226 officers in a landscape Three Kingdoms strategy game.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.lordledger' },
			{ kind: 'app-store', appId: '6804420009' }
		],
		media: { icon: '/products/lord-ledger/icon-256.webp' },
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
		slug: 'lucid-reels',
		order: 12,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-10-17',
		name: { ko: 'Lucid Reels: Open Odds', en: 'Lucid Reels: Open Odds' },
		tagline: {
			ko: '스핀 전 공개 확률을 비교하고 리스크를 고르는 소셜 슬롯',
			en: 'Compare open odds and choose a risk profile before you spin'
		},
		// Google Play 프로덕션은 한국 스토어프런트를 제외하고 배포 중이다.
		// iOS(appId 6795099819)는 공개가 확인되면 채널을 추가한다.
		badges: { ko: ['게임', '한국 미제공'], en: ['Game', 'Not available in Korea'] },
		channels: [{ kind: 'google-play', packageName: 'com.seorilabs.slotmachine', country: 'us' }],
		media: { icon: '/products/lucid-reels/icon-256.webp' },
		legal: []
	},
	{
		slug: 'match-picture',
		order: 13,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-10-17',
		// Google Play 등록명이다. App Store에는 '같은 그림 찾아보기 / Match Symbols'로 등록돼 있다.
		name: { ko: '같은 그림 찾기', en: 'Match Picture' },
		tagline: {
			ko: '두 카드에서 똑같은 그림 하나를 가장 빨리 찾는 스피드 퍼즐!',
			en: 'Spot the one matching picture between two cards — beat the clock!'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		// 네이티브 스토어 식별자는 기존 출시 앱의 네임스페이스를 유지한다.
		channels: [
			{ kind: 'google-play', packageName: 'com.github.magicsih.MatchPictureUnity' },
			{ kind: 'app-store', appId: '1528539634' },
			{ kind: 'apps-in-toss', searchName: '같은 그림 찾기' }
		],
		media: { icon: '/products/match-picture/icon-256.webp' },
		legal: []
	},
	{
		slug: 'baby-feeding-logger',
		order: 14,
		status: 'live',
		category: 'app',
		hasLanding: false,
		updatedOn: '2026-09-25',
		name: { ko: '수유로그', en: 'Baby Feeding Logger' },
		// App Store에 부제와 짧은 설명이 없어 스토어 설명문의 문장을 그대로 옮겼다.
		tagline: {
			ko: '아기 키우는데 필요한 핵심 기능만 담았습니다. 모든 데이터는 폰에만 저장됩니다.',
			en: 'Only essential features. All data is stored only on the phone.'
		},
		badges: { ko: ['생활 앱'], en: ['App'] },
		// 구 네임스페이스(com.github.magicsih.BabyCareApp) 번들이고 App Store에만 있다.
		channels: [{ kind: 'app-store', appId: '1494547124' }],
		media: { icon: '/products/baby-feeding-logger/icon-256.webp' },
		legal: []
	},

	{
		slug: 'merge-armada',
		order: 99,
		status: 'live',
		category: 'game',
		hasLanding: true,
		updatedOn: '2026-10-17',
		name: { ko: '머지 함대: 합치고 싸워라', en: 'Merge Fleet: Build & Battle' },
		tagline: {
			ko: '함선과 포를 합쳐 강화하고, 배치로 자동 해전의 승부를 바꾸세요.',
			en: 'Merge ships and cannons. Plan your formation and win automatic naval battles.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.mergearmada' },
			{ kind: 'app-store', appId: '6812823076' }
		],
		media: { icon: '/products/merge-armada/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/merge-armada/privacy/', en: '/en/apps/merge-armada/privacy/' },
				updated: '2026-09-24'
			}
		]
	},
	{
		slug: 'reascend',
		order: 100,
		status: 'live',
		category: 'game',
		hasLanding: false,
		releasedOn: '2026-10-01',
		updatedOn: '2026-10-17',
		name: { ko: '리어센드', en: 'Reascend' },
		tagline: {
			ko: '방치형 탑 등반 RPG. 회귀할 때마다 한 헌터의 이야기가 한 장씩 쌓인다.',
			en: 'Idle tower RPG. Every regression is a new chapter of one hunter\u2019s climb.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.reascend' },
			{ kind: 'app-store', appId: '6805464556' }
		],
		media: { icon: '/products/reascend/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/reascend/privacy/', en: '/en/apps/reascend/privacy/' },
				updated: '2026-10-16'
			},
			{
				kind: 'account-deletion',
				path: {
					ko: '/apps/reascend/account-deletion/',
					en: '/en/apps/reascend/account-deletion/'
				},
				updated: '2026-09-23'
			}
		]
	},
	{
		slug: 'bloomhand',
		order: 105,
		status: 'live',
		category: 'game',
		hasLanding: false,
		releasedOn: '2026-10-09',
		updatedOn: '2026-10-17',
		name: { ko: '블룸핸드', en: 'Bloomhand' },
		tagline: {
			ko: '씨앗 카드로 포커 족보를 만들어 꽃을 피우는 세로 한 손 로그라이크.',
			en: 'A one-handed, portrait roguelike where seed cards bloom into flowers through poker hands.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [{ kind: 'app-store', appId: '6815652277' }],
		media: { icon: '/products/bloomhand/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/bloomhand/privacy/', en: '/en/apps/bloomhand/privacy/' },
				updated: '2026-10-14'
			},
			{
				kind: 'odds',
				path: { ko: '/apps/bloomhand/odds/', en: '/en/apps/bloomhand/odds/' },
				updated: '2026-10-01'
			},
			{
				kind: 'account-deletion',
				path: { ko: '/apps/bloomhand/privacy/', en: '/en/apps/bloomhand/privacy/' },
				updated: '2026-10-14',
				legacyAnchor: { path: '/apps/bloomhand/privacy/', id: 'account-deletion' }
			}
		]
	},
	{
		slug: 'salt-compass',
		order: 104,
		status: 'upcoming',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-09-25',
		name: { ko: '소금과 나침반', en: 'Salt & Compass' },
		tagline: {
			ko: '바람을 읽고 교역하며 세계 지도를 채우는 세로형 항해 모험',
			en: 'Read the wind, trade across the real world and fill in your chart.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [],
		media: { icon: '/products/salt-compass/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/salt-compass/privacy/', en: '/en/apps/salt-compass/privacy/' },
				updated: '2026-09-25'
			},
			{
				kind: 'account-deletion',
				path: { ko: '/apps/salt-compass/privacy/', en: '/en/apps/salt-compass/privacy/' },
				updated: '2026-09-25',
				legacyAnchor: { path: '/apps/salt-compass/privacy/', id: 'account-deletion' }
			}
		]
	},
	{
		slug: 'matgo',
		order: 102,
		status: 'live',
		category: 'game',
		hasLanding: false,
		releasedOn: '2026-09-28',
		updatedOn: '2026-10-17',
		name: { ko: '달빛 맞고', en: 'Moonlight Matgo' },
		tagline: {
			ko: '현금성 보상 없이 AI와 즐기는 큰 글자 오프라인 2인 맞고',
			en: 'A clear, offline two-player Matgo card game against AI.'
		},
		badges: { ko: ['게임', '한국 미제공'], en: ['Game', 'Not available in Korea'] },
		// 두 마켓 모두 한국에서는 미제공이며 미국 공개 스토어에서 확인했다.
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.matgo', country: 'us' },
			{ kind: 'app-store', appId: '6795536910', country: 'us' }
		],
		media: { icon: '/products/matgo/icon-256.webp' },
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
		updatedOn: '2026-09-25',
		name: { ko: '사이클 페어 : 내 기분, 주기, 컨디션을 알려요', en: 'Cycle Pair' },
		tagline: {
			ko: '생리주기를 함께 이해하고 대비하는 커플 케어 앱',
			en: 'A private cycle and condition sharing app for two.'
		},
		badges: { ko: ['생활 앱'], en: ['App'] },
		channels: [],
		media: { icon: '/products/cycle-pair/icon-256.webp' },
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
	},
	{
		slug: 'alley-market-match',
		order: 106,
		status: 'live',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-10-17',
		name: { ko: '마켓팝: 매치3 퍼즐', en: 'Market Pop: Match-3 Puzzle' },
		tagline: {
			ko: '재료를 맞춰 주문을 완성하고, 콤보로 골목상점을 되살리세요',
			en: 'Match ingredients, fill orders, and bring the market back to life.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		channels: [
			{ kind: 'google-play', packageName: 'com.seorilabs.alleymarketmatch' },
			{ kind: 'app-store', appId: '6815288695' },
			{ kind: 'apps-in-toss', searchName: '골목상점 매치' }
		],
		media: { icon: '/products/alley-market-match/icon-256.webp' },
		legal: []
	},
	{
		slug: 'vernhald',
		order: 107,
		status: 'upcoming',
		category: 'game',
		hasLanding: false,
		updatedOn: '2026-10-06',
		name: { ko: '베른할드 연대기', en: 'Vernhald Chronicles' },
		// 스토어 등록 전이라 현재 게임 구성(스토리 없는 1인용 20라운드 오토체스)을 한 문장으로 썼다.
		// 스토어 등록 시 등록 문구로 바꾼다.
		tagline: {
			ko: '말을 모으고 배치해 20라운드를 버티는 1인용 오토체스',
			en: 'A single-player auto-chess game: gather pieces, place them, and survive 20 rounds.'
		},
		badges: { ko: ['게임'], en: ['Game'] },
		// Google Play(com.seorilabs.vernhald)가 첫 마켓이며 아직 미공개다. App Store와 앱인토스는 그 뒤다.
		// 공개가 확인되면 채널을 추가한다.
		channels: [],
		media: { icon: '/products/vernhald/icon-256.webp' },
		legal: [
			{
				kind: 'privacy',
				path: { ko: '/apps/vernhald/privacy/', en: '/en/apps/vernhald/privacy/' },
				updated: '2026-10-06'
			},
			{
				kind: 'account-deletion',
				path: { ko: '/apps/vernhald/account-deletion/', en: '/en/apps/vernhald/account-deletion/' },
				updated: '2026-10-06'
			}
		]
	}
];
