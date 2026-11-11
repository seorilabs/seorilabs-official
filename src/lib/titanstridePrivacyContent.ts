import type { LegalDocContent } from '$lib/legal/types';

export const titanstridePrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: 'Titanstride 개인정보 처리방침',
		description: 'Titanstride 0.1.0 무료 테스트의 기기 저장, SDK 수집 설정과 문의 정보 안내입니다.',
		kicker: 'Titanstride Privacy Policy',
		lastUpdated: '2026년 11월 11일',
		intro:
			'이 방침은 Seori Labs의 Titanstride(com.seorilabs.titanstride) 0.1.0 무료 테스트에 적용됩니다. 게임은 계정 없이 오프라인으로 플레이합니다. 이 테스트의 처리에 관해서는 공통 방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 기록',
				body: [
					'캠페인 진행과 보상, 영웅·장비 강화, 해금한 무기, 무한 방어 진행, 진행 중인 전투와 설정을 기기에 저장합니다. 손상된 저장을 복구하기 위한 로컬 백업도 기기에 보관합니다. 이 테스트 버전은 게임 계정을 만들거나 진행 기록을 당사 서버에 올리지 않으며 기기 간 이전을 제공하지 않습니다.'
				]
			},
			{
				title: '광고·구매·로그인',
				body: [
					'0.1.0 무료 테스트에는 광고, 실제 인앱 구매와 Google·Apple 계정 연결을 제공하지 않습니다. 유료 팩을 판매하지 않고 결제 서버에도 연결하지 않습니다. 게임은 위치, 연락처, 사진, 카메라와 마이크 권한을 요청하지 않습니다.'
				]
			},
			{
				title: '포함된 SDK와 수집 설정',
				body: [
					'이 빌드에는 Google Firebase Core, Analytics, Crashlytics와 마켓 결제·로그인 연결용 라이브러리가 포함됩니다. Firebase의 자동 분석·오류 보고 수집과 광고 관련 동의 신호는 빌드 설정에서 꺼져 있고 게임은 이를 다시 켜지 않습니다. 테스트 버전은 사용 통계나 오류 보고 전송 기능을 제공하지 않습니다.',
					'마켓 결제·계정 연결 라이브러리가 포함됐다는 이유로 무료 플레이 중 계정이나 구매 기록을 만드는 것은 아닙니다. 이 테스트의 서버 주소와 상품 연결은 비어 있습니다. 향후 수집이나 결제·로그인을 제공하면 방침과 스토어 신고를 먼저 갱신합니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'게임 기록은 앱의 저장공간을 지울 때까지 기기에 남습니다. 앱 삭제나 운영체제의 앱 데이터 삭제 시 진행을 잃을 수 있습니다. 당사는 서버에 진행 사본을 보관하지 않아 문의로 복구할 수 없습니다. Android에서는 앱 데이터의 운영체제 백업을 끕니다. iOS 백업은 사용자의 운영체제 설정에 따라 처리될 수 있으며 당사가 제공하는 기기 간 이전 기능이 아닙니다.'
				]
			},
			{
				title: '스토어와 서비스 제공자',
				body: [
					'앱 설치, 업데이트와 테스트 참여 과정은 해당 스토어가 자체 정책에 따라 처리합니다. 당사는 스토어에서 제공하는 개발자용 처리 상태와 테스트 피드백을 볼 수 있습니다. Google과 Apple의 개인정보 처리는 https://policies.google.com/privacy 및 https://www.apple.com/legal/privacy/ 를 참고하세요.'
				]
			},
			{
				title: '문의 정보와 이용자 권리',
				body: [
					'이메일로 문의하면 발신 이메일과 문의 내용, 자발적으로 첨부한 자료를 답변과 요청 처리에 사용합니다. 해결에 필요한 기간만 보관한 뒤 삭제합니다. 비밀번호, 인증 토큰이나 불필요한 개인정보는 보내지 마세요.',
					'문의 자료의 열람·정정·삭제·처리 제한은 cs@seorilabs.com으로 요청할 수 있습니다. 지원팀은 대한민국에서 요청을 처리하며 이메일 서비스는 제공자의 처리 장소와 보관 정책을 따릅니다.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 지역별 스토어 등급도 적용됩니다. 처리 방식이 바뀌면 이 방침의 시행일과 내용을 갱신합니다.'
				]
			},
			{
				title: '연락처',
				body: [
					'개인정보와 게임 지원 문의: Seori Labs, cs@seorilabs.com. 한국어와 영어로 문의할 수 있습니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Titanstride Privacy Policy',
		description:
			'Device storage, SDK collection settings and support information in the Titanstride 0.1.0 free test.',
		kicker: 'Titanstride Privacy Policy',
		lastUpdated: 'November 11, 2026',
		intro:
			'This policy applies to the Titanstride (com.seorilabs.titanstride) 0.1.0 free test by Seori Labs. You can play offline without an account. For this test, this document takes precedence over our general policy.',
		sections: [
			{
				title: 'Game data on your device',
				body: [
					'Campaign progress and rewards, hero and equipment upgrades, unlocked weapons, endless defense progress, unfinished battles and settings are stored on your device. A recovery backup also stays on the device. This test does not create a game account, upload progress to our server or provide progress transfer between devices.'
				]
			},
			{
				title: 'Ads, purchases and sign-in',
				body: [
					'The 0.1.0 free test provides no ads, real in-app purchases or Google/Apple account linking. Paid packs are unavailable and there is no payment server connection. The game does not request location, contacts, photo library, camera or microphone access.'
				]
			},
			{
				title: 'Included SDKs and collection settings',
				body: [
					'This build includes Google Firebase Core, Analytics and Crashlytics, plus libraries for market purchases and sign-in. Automatic Analytics and crash-report collection, and advertising consent signals, are disabled in the build settings. The game does not enable them. This test has no feature for sending usage statistics or crash reports.',
					'Bundled purchase and sign-in libraries do not create a game account or purchase record during free play. This test has no configured server address or registered product mapping. We will update this policy and store disclosures before enabling collection, purchases or account linking.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Game data remains on your device until its app storage is removed. Uninstalling the app or clearing app data can remove progress. We keep no server copy and cannot restore progress through support. Android OS app-data backup is disabled. iOS backups may operate under your OS settings; they are not a progress-transfer service provided by us.'
				]
			},
			{
				title: 'Stores and providers',
				body: [
					'The relevant store processes installation, updates and test participation under its own policy. We can view developer-facing processing status and test feedback provided by the store. See https://policies.google.com/privacy and https://www.apple.com/legal/privacy/ for Google and Apple privacy practices.'
				]
			},
			{
				title: 'Support information and your rights',
				body: [
					'If you email us, we use your sender address, message and voluntarily attached information to answer and handle your request. We retain it only as needed to resolve the request and then delete it. Do not send passwords, authentication tokens or unnecessary personal information.',
					'You can request access, correction, deletion or restriction of your support information at cs@seorilabs.com. Support is handled from the Republic of Korea; email services process information under their own location and retention policies.'
				]
			},
			{
				title: 'Age and changes',
				body: [
					'The game is intended for ages 13 and older, subject to regional store ratings. We update this policy and its effective date when processing changes.'
				]
			},
			{
				title: 'Contact',
				body: [
					'Privacy and game support: Seori Labs, cs@seorilabs.com. We accept messages in English and Korean.'
				]
			}
		],
		footerNote: 'Privacy and game support: cs@seorilabs.com'
	}
};
