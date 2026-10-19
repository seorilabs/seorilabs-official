import type { PrivacyContent } from '$lib/privacyContent';
export const memorizeAllSupportContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: 'Memorize All 도움과 문의',
		description: '학습, 진도와 백업 사용 안내입니다.',
		kicker: 'Memorize All',
		lastUpdated: '2026년 10월 20일',
		lastUpdatedLabel: '최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'Memorize All은 성인을 위한 무료 학습 앱입니다. 지리, 원소, 달, 커피, 와인의 지식 100개를 한국어와 영어로 배웁니다.',
		sections: [
			{
				title: '진도와 백업',
				body: [
					'학습 기록은 기기에 저장됩니다. 앱 제거와 기기 변경 전 설정에서 백업을 내보내세요. 백업 파일을 가져온 뒤 확인하면 진도를 복원할 수 있습니다. 백업 파일은 안전한 곳에 보관하세요.'
				]
			},
			{
				title: '광고와 오프라인 학습',
				body: [
					'설치 후에는 가입과 네트워크 연결 없이 학습할 수 있습니다. 광고를 제공할 수 있을 때 하단 배너가 표시되며 광고 오류가 학습을 막지 않습니다. 해당 지역에서 필요한 경우 설정의 광고 개인정보 선택으로 동의를 변경할 수 있습니다.'
				]
			},
			{
				title: '오류와 콘텐츠 문의',
				body: [
					'cs@seorilabs.com으로 앱 버전, 언어, 지식 제목과 재현 순서를 알려 주세요. 비밀번호, 광고 식별자나 전체 백업은 보내지 마세요. 운영자는 학습 기록의 서버 사본을 갖고 있지 않습니다.'
				]
			}
		],
		footerNote: '지원 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Memorize All Support',
		description: 'Help with learning, progress and backups.',
		kicker: 'Memorize All',
		lastUpdated: 'October 20, 2026',
		lastUpdatedLabel: 'Last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'Memorize All is a free learning app for adults. Learn 100 facts across geography, elements, the Moon, coffee and wine in Korean or English.',
		sections: [
			{
				title: 'Progress and backups',
				body: [
					'Your progress stays on this device. Before removing the app or changing devices, export a backup in Settings. Import the file and confirm to restore it. Keep backup files private.'
				]
			},
			{
				title: 'Advertising and offline learning',
				body: [
					'Learning works without an account or a network connection after installation. A bottom banner may be shown when ads are available. Ad errors do not block learning. Where required, change consent through Ad privacy choices in Settings.'
				]
			},
			{
				title: 'Report a problem or content error',
				body: [
					'Email cs@seorilabs.com with the app version, language, fact title and steps. Do not send passwords, advertising identifiers or your full backup. We do not have a server copy of your learning history.'
				]
			}
		],
		footerNote: 'Support: cs@seorilabs.com'
	}
};
