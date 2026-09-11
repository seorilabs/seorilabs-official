import type { Locale } from '$lib/content';

export const appsIndexContent: Record<
	Locale,
	{
		metaTitle: string;
		metaDescription: string;
		kicker: string;
		title: string;
		intro: string;
		upcomingHeading: string;
		upcomingNote: string;
		tagline: string;
		backLabel: string;
	}
> = {
	ko: {
		metaTitle: '앱 - 서리랩스가 만들고 운영하는 게임과 생활 앱',
		metaDescription:
			'내 도마뱀 키우기, 함께봄, 행복 농장 타이쿤, 영혼의 문 디펜스, 가로세로 낱말 퍼즐, 운글 등 서리랩스가 직접 만들어 Google Play와 App Store에서 서비스 중인 앱입니다.',
		kicker: 'Apps',
		title: '서비스 중인 앱',
		intro:
			'전부 서리랩스가 직접 기획하고 개발해 운영하는 제품입니다. 설치 경로와 제품별 정책 문서를 함께 둡니다.',
		upcomingHeading: '준비 중',
		upcomingNote:
			'아직 받으실 수 없습니다. 심사에 필요한 개인정보 처리방침만 미리 공개해 두었습니다.',
		tagline: '모바일 게임과 생활 앱을 직접 만들고 운영합니다.',
		backLabel: '홈으로'
	},
	en: {
		metaTitle: 'Apps - Games and everyday apps built by Seori Labs',
		metaDescription:
			'Lizard Terrarium, BabyNest, Happy Farm Tycoon, Spiritgate Defenders, and more. Every app is designed, built, and operated by Seori Labs and published on Google Play and the App Store.',
		kicker: 'Apps',
		title: 'Live right now',
		intro:
			'Every app here was designed, built, and is operated by Seori Labs. Install links and per-product policy documents sit alongside each one.',
		upcomingHeading: 'In progress',
		upcomingNote:
			'Not available yet. Only the privacy policy each store review needs is published in advance.',
		tagline: 'We build our own mobile games and everyday apps, and we run them.',
		backLabel: 'Back home'
	}
};
