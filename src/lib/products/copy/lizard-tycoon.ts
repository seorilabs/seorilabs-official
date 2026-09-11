import type { AppLandingSet, LandingMedia } from '$lib/products/landing';

const shot = (file: string, alt: string, en = false): LandingMedia => ({
	src: `/products/lizard-tycoon/shots/${en ? 'en/' : ''}${file}.webp`,
	alt,
	width: 540,
	height: 960
});

/**
 * 문구 기준
 *
 * - 종 수는 "기본 6종으로 시작해 프리미엄까지 모두 12종"으로 쓴다. 코드의
 *   LIZARD_SPECIES는 12종(프리미엄 6 포함)이고 Play 등록 문구는 기본 6종만 센 값이다.
 *   둘 중 하나만 쓰면 다른 쪽과 어긋난다.
 * - 확률형 아이템 문구는 줄이지 않는다. 확정 지급·특성 무작위·사전 확률 표시
 *   세 요소를 함께 적는 것이 게임산업법 확률 공시와 스토어 정책이 요구하는 형태다.
 * - 저장 방식은 개인정보 처리방침과 일치시킨다. 진행 상황은 기기 저장이며
 *   클라우드 동기화가 아니다.
 * - 이 게임의 대상 연령 신고는 general-audience-not-children이다.
 *   "아이와 함께" 같은 아동 타깃 표현을 쓰지 않는다.
 */
export const lizardTycoonLanding: AppLandingSet = {
	ko: {
		kicker: '픽셀 테라리움 육성 게임',
		title: '내 도마뱀 키우기 : 픽셀 테라리움 육성',
		lead: '작은 픽셀 테라리움에서 도마뱀 한 마리를 돌보는 것부터 시작합니다. 먹이를 주고, 온도를 맞추고, 청소하고, 교감하고, 관찰하면서 가족을 늘려가는 육성 게임입니다. 광고가 없고, 며칠 못 들어와도 도마뱀이 죽지 않습니다.',
		quickFacts: [
			'광고 없음',
			'돌봄은 오프라인 가능',
			'전체이용가 (GRAC)',
			'한 번에 1~3분',
			'한국어 / English'
		],
		installCtaTitle: '지금 받을 수 있습니다',
		applicationCategory: 'GameApplication',
		operatingSystem: 'Android, iOS',
		contentRating: '전체이용가',
		tagline: '모바일 게임과 생활 앱을 직접 만들고 운영합니다.',
		backLabel: '앱 목록으로',
		sections: [
			{
				kind: 'prose',
				id: 'what',
				title: '한 마리부터 시작하는 픽셀 테라리움',
				paragraphs: [
					'도마뱀 한 마리를 입양하는 것으로 시작합니다. 화면에는 허기, 기분, 청결, 온도, 에너지 다섯 가지 상태가 보이고, 손을 대면 도마뱀이 그 자리에서 반응합니다.',
					'꾸준히 돌보면 신뢰도가 쌓입니다. 신뢰가 오르면 도마뱀이 먼저 다가오고, 성장과 탈피를 거치면서 새로운 무늬가 해금됩니다. 한 번 들어와서 1~3분이면 충분하고, 며칠 쉬어도 영구적인 손상은 남지 않습니다.'
				],
				media: [
					shot(
						'01-terrarium',
						'픽셀 테라리움 화면에서 도마뱀의 허기, 기분, 청결, 온도, 에너지 상태를 확인하는 모습'
					)
				]
			},
			{
				kind: 'feature-list',
				id: 'care',
				title: '돌보는 방법은 다섯 가지입니다',
				items: [
					{
						title: '먹이 주기',
						body: '종마다 먹는 것이 다릅니다. 성격에 따라 좋아하는 먹이가 있어서 같은 먹이를 줘도 반응이 갈립니다.'
					},
					{
						title: '온도 맞추기',
						body: '사막에 사는 종과 정글에 사는 종은 필요한 온도가 다릅니다. 온도를 맞춰주면 활동과 회복이 달라집니다.'
					},
					{
						title: '청소',
						body: '서식지가 더러워지는 속도도 종마다 다릅니다. 습한 숲에 사는 종은 더 자주 치워줘야 합니다.'
					},
					{
						title: '교감',
						body: '쓰다듬고 반응을 살피면 신뢰도가 올라갑니다. 신뢰 단계가 오르면 행동이 눈에 띄게 달라집니다.'
					},
					{
						title: '관찰',
						body: '가만히 지켜보면 그날의 컨디션과 지금 어느 성장 단계인지 확인할 수 있습니다.'
					}
				],
				media: [
					shot('02-feature-care', '먹이 주기, 온도, 청소, 교감, 관찰 다섯 가지 돌봄 메뉴'),
					shot('04-temperature', '종에 맞는 온도를 다이얼로 맞추는 화면')
				]
			},
			{
				kind: 'feature-list',
				id: 'breeding',
				title: '교배하고, 유전을 모으고, 도감을 채웁니다',
				items: [
					{
						title: '교배와 부화',
						body: '성체가 된 도마뱀 두 마리를 교배하면 알이 생기고, 부화한 개체는 부모의 모프를 물려받습니다.'
					},
					{
						title: '슈퍼폼',
						body: '같은 유전자를 두 개 모으면 교배로만 나오는 슈퍼폼이 등장합니다. 야생 개체에서는 나오지 않는 외형이라 도감을 끝까지 채우려면 직접 붙여야 합니다.'
					},
					{
						title: '모프 9가지 · 무늬 12가지',
						body: '노멀, 하이포, 탠저린, 멜라닌, 알비노, 스노우와 슈퍼폼 3종. 무늬는 종과 모프 조합에 따라 해금됩니다.'
					},
					{
						title: '종 12가지',
						body: '기본 6종으로 시작해 프리미엄 종까지 모두 12종입니다. 사막, 정글, 숲 서식 환경으로 나뉘고 필요한 돌봄이 달라집니다.'
					},
					{
						title: '성격 5가지',
						body: '신중함, 호기심, 게으름, 온순함, 대담함이 먹이 취향과 반응을 바꿉니다.'
					}
				],
				media: [
					shot('03-feature-collection', '교배로 얻은 도마뱀의 모프와 무늬를 도감에 기록한 화면'),
					shot('05-collection', '수집한 도마뱀 종과 모프가 정리된 도감 화면')
				]
			},
			{
				kind: 'audience',
				id: 'for-you',
				title: '이런 걸 찾고 있었다면',
				items: [
					{
						title: '광고 없는 키우기 게임',
						body: '배너도, 전면 광고도, 보상형 광고도 넣지 않았습니다.'
					},
					{
						title: '며칠 못 들어와도 괜찮은 게임',
						body: '오래 비워둬도 영구적인 손상이 남지 않습니다. 돌아와서 돌보면 회복됩니다.'
					},
					{
						title: '지하철이나 비행기에서도 되는 게임',
						body: '먹이 주기, 온도 맞추기, 청소, 교감, 관찰은 인터넷 없이 동작합니다.'
					},
					{
						title: '파충류와 모프를 좋아하는 분',
						body: '레오파드 게코, 크레스티드 게코, 데이 게코, 토케이 게코, 스킨크처럼 실제로 키우는 종을 픽셀로 옮겼습니다.'
					},
					{
						title: '기록을 남기는 걸 좋아하는 분',
						body: '사진과 일지로 성장 과정을 남길 수 있습니다.'
					}
				],
				media: [shot('06-journal', '도마뱀의 성장 과정을 사진과 일지로 남긴 기록 화면')]
			},
			{
				kind: 'policy',
				id: 'pricing',
				title: '무엇이 무료이고 무엇이 유료인지',
				bullets: [
					'돌봄, 교배, 도감을 포함한 핵심 플레이는 무료입니다.',
					'광고는 넣지 않았습니다.',
					'프리미엄 종, 사육 랙 확장, 테라리움 테마, 액세서리는 원할 때 한 번만 결제하는 상품입니다. 구독은 없습니다.',
					'확률형 아이템이 포함됩니다. 선택한 프리미엄 종은 확정으로 지급되고, 그 개체의 모프와 무늬 같은 특성은 무작위입니다. 나올 수 있는 결과와 확률은 구매 전에 화면에 표시합니다.',
					'구매한 상품은 같은 스토어 계정에서 구매 복원으로 다시 받을 수 있습니다.'
				]
			},
			{
				kind: 'changelog',
				id: 'changelog',
				title: '최근 업데이트',
				version: '1.4.2',
				bullets: [
					'오로라 스킨크, 문라이트 혼 리자드, 가고일 게코, 유로매스틱스 프리미엄 종을 만나보실 수 있습니다.',
					'사육 랙 확장 팩 I·II로 각각 정원을 두 칸씩 늘릴 수 있습니다. 팩 II는 팩 I을 구매한 뒤 이용할 수 있습니다.',
					'밤하늘 테라리움과 별빛 액세서리 세트로 서식지를 꾸밀 수 있습니다.',
					'프리미엄 상품의 구매 확인과 복원 처리를 개선했습니다.'
				]
			}
		],
		faq: [
			{
				q: '광고가 나오나요?',
				a: '나오지 않습니다. 배너, 전면 광고, 보상형 광고를 모두 넣지 않았습니다.'
			},
			{
				q: '무료인가요?',
				a: '돌봄과 교배, 도감을 포함한 핵심 플레이는 무료입니다. 프리미엄 종과 사육 랙 확장, 테라리움 테마, 액세서리는 원할 때 한 번만 결제하는 상품이고 구독은 없습니다.'
			},
			{
				q: '확률형 아이템이 있나요?',
				a: '있습니다. 선택하신 프리미엄 종은 확정으로 지급됩니다. 다만 그 개체의 모프와 무늬 같은 특성은 무작위이며, 나올 수 있는 결과와 확률을 구매 전에 화면에 표시합니다.'
			},
			{
				q: '인터넷이 없어도 되나요?',
				a: '먹이 주기, 온도 맞추기, 청소, 교감, 관찰 같은 돌봄은 오프라인에서 동작합니다. 새로 구매하거나 구매를 복원할 때만 인터넷 연결이 필요합니다.'
			},
			{
				q: '며칠 못 들어오면 도마뱀이 죽나요?',
				a: '죽지 않습니다. 오래 비워둬도 영구적인 손상이 남지 않도록 만들었고, 돌아와서 돌보면 회복됩니다.'
			},
			{
				q: '몇 살부터 할 수 있나요?',
				a: '국내는 GRAC 전체이용가, 해외는 IARC 3세 이상 등급입니다.'
			},
			{
				q: '어디에서 받을 수 있나요?',
				a: 'Google Play와 App Store에서 내려받을 수 있습니다. 토스 앱 안의 앱인토스에서는 설치 없이 바로 플레이할 수 있습니다.'
			},
			{
				q: '기기를 바꾸면 진행 상황이 옮겨지나요?',
				a: '진행 상황은 기기 안에 저장됩니다. 앱을 지우면 그 기기의 진행 상황도 함께 지워집니다. 구매한 프리미엄 상품은 같은 스토어 계정에서 구매 복원으로 다시 받을 수 있습니다.'
			},
			{
				q: '교배와 유전은 어떻게 작동하나요?',
				a: '성체가 된 두 마리를 교배하면 알이 생기고, 부화한 개체는 부모의 모프를 물려받습니다. 같은 유전자를 두 개 모으면 교배로만 나오는 슈퍼폼이 나옵니다.'
			}
		],
		support: {
			title: '지원과 정책',
			privacyLabel: '개인정보 처리방침',
			supportLabel: '고객지원 안내',
			contactLabel: '문의'
		}
	},

	en: {
		kicker: 'Pixel terrarium care game',
		title: 'Lizard Terrarium',
		lead: 'It starts with one lizard in a tiny pixel terrarium. Feed it, get the temperature right, clean up, bond, observe, and slowly grow a family. There are no ads, and your lizards do not die while you are away.',
		quickFacts: [
			'No ads',
			'Care works offline',
			'Rated 3+',
			'1-3 minutes a session',
			'Korean / English'
		],
		installCtaTitle: 'Available now',
		applicationCategory: 'GameApplication',
		operatingSystem: 'Android, iOS',
		contentRating: 'Rated 3+',
		tagline: 'We build our own mobile games and everyday apps, and we run them.',
		backLabel: 'Back to apps',
		sections: [
			{
				kind: 'prose',
				id: 'what',
				title: 'One lizard, one small terrarium',
				paragraphs: [
					'You begin by adopting a single lizard. Five meters sit on screen - hunger, mood, cleanliness, warmth, energy - and your lizard reacts the moment you touch it.',
					'Care for it consistently and trust builds. As trust rises your lizard comes to you, and growth and shedding unlock new patterns. One to three minutes a visit is enough, and taking a few days off leaves no permanent damage.'
				],
				media: [
					shot(
						'01-terrarium',
						'The pixel terrarium screen showing hunger, mood, cleanliness, warmth, and energy meters',
						true
					)
				]
			},
			{
				kind: 'feature-list',
				id: 'care',
				title: 'Five ways to care',
				items: [
					{
						title: 'Feeding',
						body: 'Different species eat different things, and each personality has a favourite, so the same food gets different reactions.'
					},
					{
						title: 'Temperature',
						body: 'Desert species and jungle species need different warmth. Get it right and activity and recovery change.'
					},
					{
						title: 'Cleaning',
						body: 'Habitats get dirty at different rates. Species from humid forests need cleaning more often.'
					},
					{
						title: 'Bonding',
						body: 'Petting and watching the response builds trust, and behaviour visibly changes as trust levels rise.'
					},
					{
						title: 'Observing',
						body: "Sit and watch to read today's condition and the current growth stage."
					}
				],
				media: [
					shot(
						'02-feature-care',
						'The five care actions: feed, warmth, clean, bond, and observe',
						true
					),
					shot('04-temperature', 'Setting the habitat temperature to suit the species', true)
				]
			},
			{
				kind: 'feature-list',
				id: 'breeding',
				title: 'Breed, inherit, collect',
				items: [
					{
						title: 'Breeding and hatching',
						body: "Breed two mature lizards and you get an egg; the hatchling inherits its parents' morphs."
					},
					{
						title: 'Super forms',
						body: 'Collect two copies of the same allele and a super form appears - one that never shows up in a wild roll, so finishing the collection means breeding for it.'
					},
					{
						title: '9 morphs, 12 patterns',
						body: 'Normal, hypo, tangerine, melanistic, albino, snow, plus three super forms. Patterns unlock by species and morph combination.'
					},
					{
						title: '12 species',
						body: 'Six base species to start with, twelve once premium species are included. They live in desert, jungle, or forest biomes and need different care.'
					},
					{
						title: '5 personalities',
						body: 'Cautious, curious, lazy, gentle, and bold change food preference and reactions.'
					}
				],
				media: [
					shot(
						'03-feature-collection',
						'Recording a bred lizard’s morph and pattern in the collection',
						true
					),
					shot('05-collection', 'The collection screen listing discovered species and morphs', true)
				]
			},
			{
				kind: 'audience',
				id: 'for-you',
				title: 'If this is what you were looking for',
				items: [
					{
						title: 'A care game with no ads',
						body: 'No banners, no interstitials, no rewarded video.'
					},
					{
						title: 'A game that forgives a few days away',
						body: 'Nothing takes permanent damage. Come back and it recovers.'
					},
					{
						title: 'A game that works on a plane or underground',
						body: 'Feeding, warmth, cleaning, bonding, and observing all run offline.'
					},
					{
						title: 'If you like reptiles and morphs',
						body: 'Leopard geckos, crested geckos, day geckos, tokay geckos, and skinks - real species, drawn in pixels.'
					},
					{
						title: 'If you like keeping a record',
						body: 'Photos and a journal keep the whole growth history.'
					}
				],
				media: [shot('06-journal', 'A journal page recording a lizard’s growth with photos', true)]
			},
			{
				kind: 'policy',
				id: 'pricing',
				title: 'What is free and what is not',
				bullets: [
					'Core play - care, breeding, and the collection - is free.',
					'There are no ads.',
					'Premium species, habitat rack expansions, terrarium themes, and accessories are one-time purchases. There is no subscription.',
					'The game contains randomized items. The premium species you choose is guaranteed. The individual traits of that lizard, such as morph and pattern, are randomized, and the possible results and their odds are shown before purchase.',
					'Purchases can be restored from the same store account.'
				]
			},
			{
				kind: 'changelog',
				id: 'changelog',
				title: 'Recent update',
				version: '1.4.2',
				bullets: [
					'Meet four premium species: Aurora Skink, Moonlight Horned Lizard, Gargoyle Gecko, and Uromastyx.',
					'Expand your habitat rack with Packs I and II, adding two spaces each. Pack II requires Pack I.',
					'Decorate with the Night Sky Terrarium and Starlight Accessory Set.',
					'Improved premium purchase verification and restoration.'
				]
			}
		],
		faq: [
			{ q: 'Are there ads?', a: 'No. There are no banners, interstitials, or rewarded video ads.' },
			{
				q: 'Is it free?',
				a: 'Core play, including care, breeding, and the collection, is free. Premium species, habitat rack expansions, terrarium themes, and accessories are one-time purchases, and there is no subscription.'
			},
			{
				q: 'Does it contain randomized items?',
				a: 'Yes. The premium species you choose is guaranteed. The individual traits of that lizard, such as morph and pattern, are randomized, and the possible results and their odds are shown before purchase.'
			},
			{
				q: 'Do I need an internet connection?',
				a: 'Care actions such as feeding, warmth, cleaning, bonding, and observing work offline. Internet is needed only for new purchases and to restore purchases.'
			},
			{
				q: 'Will my lizard die if I am away for a few days?',
				a: 'No. Nothing takes permanent damage while you are away, and care restores it when you come back.'
			},
			{ q: 'What age is it rated for?', a: 'Rated 3+ by IARC, and all ages by GRAC in Korea.' },
			{
				q: 'Where can I get it?',
				a: 'On Google Play and the App Store. Inside the Toss app, AppsInToss lets you play without installing.'
			},
			{
				q: 'Does my progress move to a new device?',
				a: 'Progress is saved on the device. Deleting the app deletes that device’s progress. Premium purchases can be restored from the same store account.'
			},
			{
				q: 'How does breeding and inheritance work?',
				a: "Breed two mature lizards and you get an egg; the hatchling inherits its parents' morphs. Collect two copies of the same allele and a super form appears that only breeding can produce."
			}
		],
		support: {
			title: 'Support and policies',
			privacyLabel: 'Privacy Policy',
			supportLabel: 'Support',
			contactLabel: 'Contact'
		}
	}
};
