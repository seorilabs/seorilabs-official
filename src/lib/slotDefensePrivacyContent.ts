import type { LegalDocContent } from '$lib/legal/types';

export const slotDefensePrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: 'Slot Defense 개인정보 처리방침',
		description:
			'Slot Defense 0.1.0 테스트의 로컬 저장, Firebase 통계·오류 보고와 개인정보 안내입니다.',
		kicker: 'Slot Defense Privacy Policy',
		lastUpdated: '2026년 11월 11일',
		intro:
			'이 방침은 Seori Labs의 Slot Defense(com.seorilabs.slotdefense) 0.1.0 테스트에 적용되며 이 게임의 처리에는 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '기기에 저장하는 게임 기록',
				body: [
					'캠페인 진행, 영웅과 강화, 전투 복구 기록, 일일 도전과 엔드리스 기록 및 설정은 기기에 저장합니다. 0.1.0 테스트에는 게임 계정과 클라우드 진행 저장을 활성화하지 않았습니다. 인터넷 없이 플레이할 수 있으며 앱 삭제나 데이터 초기화 시 진행이 사라질 수 있습니다.'
				]
			},
			{
				title: '이용 통계와 오류 보고',
				body: [
					'네이티브 빌드는 Google Firebase Analytics와 Crashlytics를 사용합니다. 설정의 데이터 분석 허용은 기본으로 켜져 있습니다. 게임의 화면 이동, 튜토리얼, 전투·보상·강화 같은 행동 이벤트와 앱 버전·언어·실행 환경을 보냅니다. Firebase는 앱 인스턴스·설치 식별자, 기기 모델과 운영체제, 세션 및 국가 수준 위치 정보 등을 처리할 수 있습니다. 광고 식별자 수집과 광고 개인화 동의 신호는 끄며 게임은 사용자 ID를 보내지 않습니다.',
					'Crashlytics는 충돌 스택, 설치 식별자, 기기·앱 상태와 진단 기록을 처리합니다. 게임은 출시 버전, 시장, 실행 환경, 단계와 화면 이름을 연결합니다. 오류 메시지 본문이나 게임 저장 파일을 보내지 않습니다.',
					'설정에서 데이터 분석 허용을 끄면 새 게임 이벤트와 진단 기록 전송을 멈추고 미전송 이벤트를 버립니다. Crashlytics 수집 중단은 다음 실행부터 적용되며, SDK에 남은 충돌 보고는 다시 수집을 켰을 때 전송될 수 있습니다. 이미 전송된 자료의 삭제 문의는 cs@seorilabs.com으로 할 수 있습니다.'
				]
			},
			{
				title: '광고·구매·계정 연결',
				body: [
					'현재 테스트에는 실제 유료 상품, 수익 광고와 Google·Apple 계정 연결을 활성화하지 않았습니다. 관련 마켓 SDK는 빌드에 포함되지만 활성 광고 단위와 판매 상품을 구성하지 않았습니다. 광고·판매·계정 또는 클라우드 기능을 활성화하기 전에 이 방침과 스토어 신고를 갱신합니다.',
					'게임은 위치 권한, 연락처, 사진, 카메라와 마이크 권한을 요청하지 않습니다.'
				]
			},
			{
				title: '처리 사업자와 보안',
				body: [
					'Google Firebase와 Google Analytics는 통계와 오류 보고를 처리합니다. 앱과 서비스 사이 통신은 HTTPS/TLS로 암호화합니다. Google의 글로벌 인프라에서 대한민국 외 지역의 처리가 이뤄질 수 있습니다. Google의 데이터 처리는 https://firebase.google.com/support/privacy 와 https://policies.google.com/privacy 를 참고하세요.',
					'설치, 업데이트와 테스트 참여는 해당 스토어가 자체 정책에 따라 처리합니다. 당사는 스토어의 개발자용 처리 상태와 테스트 피드백을 볼 수 있습니다. Apple의 정책은 https://www.apple.com/legal/privacy/ 에서 확인할 수 있습니다.'
				]
			},
			{
				title: '보관·삭제와 문의',
				body: [
					'로컬 진행은 기기의 앱 저장공간이 삭제될 때까지 남습니다. 당사는 서버에 진행 사본을 보관하지 않아 문의로 복원할 수 없습니다. Firebase 통계와 진단은 각 서비스의 보관 설정 및 삭제 절차에 따라 처리합니다. 계정 없는 설치 식별자 기반 자료라 삭제 대상 확인에 필요한 최소 정보를 요청할 수 있습니다.',
					'이메일로 문의하면 발신 이메일, 문의 내용과 자발적으로 첨부한 자료를 요청 해결에 필요한 동안 처리한 뒤 삭제합니다. 개인정보의 열람·정정·삭제·처리 제한은 cs@seorilabs.com으로 문의하세요. 비밀번호와 인증 토큰을 보내지 마세요.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 지역별 스토어 등급을 함께 적용합니다. 처리 방식이 바뀌면 이 페이지의 내용과 시행일을 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Slot Defense Privacy Policy',
		description:
			'Local storage, Firebase analytics, crash reports and privacy in the Slot Defense 0.1.0 test.',
		kicker: 'Slot Defense Privacy Policy',
		lastUpdated: 'November 11, 2026',
		intro:
			'This policy applies to the Slot Defense (com.seorilabs.slotdefense) 0.1.0 test by Seori Labs and takes precedence over our general policy for this game.',
		sections: [
			{
				title: 'Game records on your device',
				body: [
					'Campaign progress, heroes and upgrades, battle recovery data, daily and endless records, and settings stay on your device. Game accounts and cloud progress saves are not enabled in the 0.1.0 test. You can play offline. Uninstalling the app or clearing app data may remove progress.'
				]
			},
			{
				title: 'Usage analytics and crash reports',
				body: [
					'Native builds use Google Firebase Analytics and Crashlytics. The data analytics setting is on by default. We send game events such as screen changes, tutorial steps, battles, rewards and upgrades, with app version, language and runtime. Firebase may process app-instance and installation identifiers, device model and operating system, sessions and country-level location information. Advertising identifier collection and ad-personalization consent signals are disabled. The game does not set a user ID.',
					'Crashlytics processes crash stacks, installation identifiers, device and app state, and diagnostic records. The game adds release version, market, runtime, stage and screen names. It does not send error-message bodies or game save files.',
					'Turning off data analytics in Settings stops new game events and diagnostic logging and discards queued events. Crashlytics collection changes take effect on the next launch; crash reports retained by its SDK may be sent if collection is enabled again. Contact cs@seorilabs.com about deleting data already sent.'
				]
			},
			{
				title: 'Ads, purchases and account linking',
				body: [
					'Real paid products, revenue-generating ads and Google/Apple account linking are not enabled in this test. Related market SDKs are included, but active ad units and sale products are not configured. We will update this policy and store disclosures before enabling ads, sales, accounts or cloud features.',
					'The game does not request location, contacts, photo library, camera or microphone permission.'
				]
			},
			{
				title: 'Providers and security',
				body: [
					'Google Firebase and Google Analytics process analytics and crash reports. App-service communication uses HTTPS/TLS encryption. Google’s global infrastructure may process data outside the Republic of Korea. See https://firebase.google.com/support/privacy and https://policies.google.com/privacy for Google’s practices.',
					'The relevant store handles installation, updates and test participation under its own policy. We can view developer-facing processing states and test feedback. Apple’s policy is at https://www.apple.com/legal/privacy/.'
				]
			},
			{
				title: 'Retention, deletion and support',
				body: [
					'Local progress stays until the device’s app storage is removed. We keep no server copy of progress and cannot restore it through support. Firebase analytics and diagnostics follow the services’ retention settings and deletion procedures. As these records use installation identifiers without a game account, we may need minimal information to identify data for deletion.',
					'If you email us, we process your sender address, message and voluntarily attached information as needed to resolve your request, then delete it. Contact cs@seorilabs.com for access, correction, deletion or restriction requests. Do not send passwords or authentication tokens.'
				]
			},
			{
				title: 'Age and changes',
				body: [
					'The game is intended for ages 13 and older, subject to regional store ratings. We update this page and its effective date when processing changes.'
				]
			}
		],
		footerNote: 'Privacy and game support: cs@seorilabs.com'
	}
};
