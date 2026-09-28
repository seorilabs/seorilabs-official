import type { AppLandingSet, LandingMedia } from '$lib/products/landing';

const shot = (file: string, alt: string): LandingMedia => ({
	src: `/products/merge-armada/shots/${file}.jpg`,
	alt,
	width: 1320,
	height: 2868
});

export const mergeArmadaLanding: AppLandingSet = {
	ko: {
		metaTitle: '머지 함대 - 함선을 합치고 진형을 짜는 해전 전략 게임',
		metaDescription:
			'좁은 판에 함선을 배치하고 같은 병기를 합쳐 함대를 만드세요. 물때를 읽고 북을 울리며 네 장, 42개 해역을 항해하는 모바일 해전 전략 게임입니다.',
		kicker: '배치와 합성이 승부를 바꾸는 해전',
		title: '머지 함대: 해전 전략',
		lead: '제한된 칸에 함선을 놓고 같은 병기를 합쳐 함대를 키우세요. 출정 전 진형과 다음 물때를 살피고, 전투에서는 북을 울릴 순간을 고릅니다.',
		quickFacts: ['무료 플레이', '네 장, 42개 해역', '선택형 보상 광고', '기기 안에 진행 저장'],
		installCtaTitle: '스토어에서 만나보세요',
		applicationCategory: 'GameApplication',
		operatingSystem: 'Android, iOS',
		contentRating: '13세 이상',
		tagline: '모바일 게임과 생활 앱을 직접 만들고 운영합니다.',
		backLabel: '앱 목록으로',
		sections: [
			{
				kind: 'prose',
				id: 'play',
				title: '놓고, 합치고, 출정하세요',
				paragraphs: [
					'상점에서 병기를 골라 판에 배치합니다. 같은 병기를 합치면 적은 칸으로 더 강한 화력을 낼 수 있습니다.',
					'출정하면 함대가 자동으로 싸웁니다. 전투 전에 만든 진형과 적의 다음 물때가 승패를 가르고, 북 게이지가 차면 직접 일제사격을 지시할 수 있습니다.'
				],
				media: [
					shot('01-deploy', '함선을 고르고 배치하며 진형을 만드는 화면'),
					shot('02-battle', '함대가 적과 싸우는 전투 화면')
				]
			},
			{
				kind: 'feature-list',
				id: 'voyage',
				title: '항해할수록 선택지가 늘어납니다',
				items: [
					{ title: '여섯 가지 진형', body: '병기를 어디에 놓느냐에 따라 진형 효과가 달라집니다.' },
					{
						title: '네 장의 해역',
						body: '42개 해역에서 적과 보스를 상대하며 함대를 성장시킵니다.'
					},
					{ title: '병법과 장비', body: '전투에서 얻은 공훈으로 병법을 익히고 장비를 갖춥니다.' }
				]
			},
			{
				kind: 'policy',
				id: 'pricing',
				title: '플레이와 광고 안내',
				bullets: [
					'기본 게임은 무료로 플레이할 수 있습니다.',
					'추가 상점 칸이나 결과 보상을 원할 때 보상형 광고를 선택할 수 있습니다. 광고를 보지 않아도 기본 플레이는 가능합니다.',
					'현재 앱 내 결제 기능은 제공하지 않습니다. 진행 상황은 기기 안에 저장됩니다.'
				]
			}
		],
		faq: [
			{
				q: '전투를 직접 조작하나요?',
				a: '함대는 자동으로 공격합니다. 출정 전 병기 배치와 진형을 정하고, 전투 중에는 북 일제사격을 사용할 수 있습니다.'
			},
			{
				q: '광고를 봐야 진행할 수 있나요?',
				a: '아닙니다. 추가 보상을 원할 때만 보상형 광고를 선택할 수 있습니다.'
			},
			{
				q: '기기를 바꾸면 진행 상황이 옮겨지나요?',
				a: '현재 진행 상황은 기기 안에 저장되며 자동으로 다른 기기로 옮겨지지 않습니다.'
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
		metaTitle: 'Merge Fleet - Merge ships and command a naval formation',
		metaDescription:
			'Place and merge ships on a compact grid, plan around the tide, and command a fleet across four chapters and 42 seas in this mobile naval strategy game.',
		kicker: 'A naval battle shaped by your formation',
		title: 'Merge Fleet: Naval Battles',
		lead: 'Place ships on a limited grid and merge matching vessels to strengthen your fleet. Read the next tide before sailing, then choose when to fire the war drum in battle.',
		quickFacts: [
			'Free to play',
			'Four chapters, 42 seas',
			'Optional rewarded ads',
			'Progress saved on device'
		],
		installCtaTitle: 'Find it on the store',
		applicationCategory: 'GameApplication',
		operatingSystem: 'Android, iOS',
		contentRating: 'Ages 13+',
		tagline: 'We build and run our own mobile games and everyday apps.',
		backLabel: 'Back to apps',
		sections: [
			{
				kind: 'prose',
				id: 'play',
				title: 'Place, merge, and set sail',
				paragraphs: [
					'Choose ships from the shop and place them on the grid. Merge matching ships to make more firepower fit into fewer spaces.',
					'Your fleet fights automatically after deployment. The formation you built and the coming tide shape the outcome, and you can trigger a fleet volley when the war drum is ready.',
					'Screenshots show the current Korean game interface.'
				],
				media: [
					shot('01-deploy', 'Placing ships to build a naval formation'),
					shot('02-battle', 'Fleet fighting an enemy wave')
				]
			},
			{
				kind: 'feature-list',
				id: 'voyage',
				title: 'More choices as you sail',
				items: [
					{
						title: 'Six formations',
						body: 'The spaces you fill determine which formation bonuses activate.'
					},
					{
						title: 'Four chapters',
						body: 'Face enemies and bosses across 42 seas as your fleet grows.'
					},
					{
						title: 'Tactics and gear',
						body: 'Earn merit in battle to develop tactics and equip your fleet.'
					}
				]
			},
			{
				kind: 'policy',
				id: 'pricing',
				title: 'Play and ads',
				bullets: [
					'The core game is free to play.',
					'You may choose a rewarded ad for an extra shop slot or result reward. Core play does not require watching ads.',
					'In-app purchases are not currently offered. Progress is stored on your device.'
				]
			}
		],
		faq: [
			{
				q: 'Do I control ships during battle?',
				a: 'Ships attack automatically. You choose their positions and formation before sailing, then can trigger a war drum volley in battle.'
			},
			{
				q: 'Do I need to watch ads to progress?',
				a: 'No. Rewarded ads are optional and offer an extra benefit.'
			},
			{
				q: 'Will my progress move to a new device?',
				a: 'Not automatically. Progress is currently stored on the device.'
			}
		],
		support: {
			title: 'Support and policies',
			privacyLabel: 'Privacy policy',
			supportLabel: 'Support',
			contactLabel: 'Contact us'
		}
	}
};
