import type { PrivacyContent } from '$lib/privacyContent';

export const jomulPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '조물조물 개인정보처리방침',
		description: '조물조물 만물 합치기의 아동 대상 개인정보 처리 안내',
		kicker: 'Jomul Privacy Policy',
		lastUpdated: '2026-09-06',
		lastUpdatedLabel: '최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro: 'Seori Labs의 조물조물 만물 합치기(com.seorilabs.jomul) Android·iOS에 적용합니다.',
		sections: [
			{
				title: '아동을 위한 게임과 수집하지 않는 정보',
				body: [
					'조물조물은 아동이 이용하는 퍼즐 게임입니다. 일반 서비스 방침의 만 13세 미만 대상 제외 문구는 이 게임에 적용되지 않습니다. 이 앱별 방침이 우선합니다.',
					'앱은 아동의 이름, 생년월일, 이메일, 전화번호, 사진, 연락처 및 정확한 위치를 입력받거나 수집하지 않습니다. 계정 가입 화면과 채팅, 사용자 게시물, 인앱결제가 없습니다.',
					'이름을 입력받지 않는다고 모든 데이터가 미수집인 것은 아닙니다. 온라인 기능은 아래의 무작위 식별자와 기술 정보를 처리합니다.'
				]
			},
			{
				title: '인증, 진행 백업과 게임 이벤트',
				body: [
					'Android와 iOS는 온라인 기능을 위해 무작위 Platform 사용자 식별자, Firebase UID와 지원 코드를 사용합니다. 이름이나 연락처를 입력하는 회원 가입이나 로그인을 요구하지 않습니다.',
					'발견한 원소와 조합, 챕터 진행, 힌트 잔량과 일일 보상 기록을 기기에 저장하며, 온라인 기능이 연결되면 Firebase Firestore에 백업합니다. 기본 게임 콘텐츠는 기기에 포함되어 있어 인터넷 없이 플레이할 수 있습니다.',
					'게임 시작, 조합 시도·발견, 챕터 진행, 힌트 사용, 화면 이용 등 허용된 게임 이벤트를 Platform에 전송합니다. 게임 기능과 사용 흐름을 확인하기 위한 데이터이며 자유 입력 텍스트를 전송하지 않습니다. 무작위 사용자 식별자와 연결될 수 있으므로 개인을 입력받지 않는다는 이유로 완전한 익명 데이터라고 취급하지 않습니다.'
				]
			},
			{
				title: '선택적 리워드 광고',
				body: [
					'힌트 화면에서 이용자가 선택하는 리워드 광고만 사용합니다. 전면광고, 배너와 앱 시작 광고는 없습니다. 개인화 광고를 요청하지 않으며, 아동 대상 처리와 최대 광고 콘텐츠 등급 G를 SDK 초기화 전에 적용합니다.',
					'광고 기능은 Google AdMob을 사용합니다. Google Mobile Ads SDK는 IP 주소와 그로부터 추정되는 대략적 위치, 앱·기기 범위 식별자, 광고 시청 및 상호작용, 성능·진단 정보를 광고 제공, 측정 및 부정 이용 방지를 위해 처리하고 공유할 수 있습니다. iOS SDK는 충돌 정보도 처리할 수 있습니다.',
					'앱은 Android 광고 ID 권한과 iOS IDFA·ATT를 사용하지 않습니다. 이것이 IP 주소나 다른 앱·기기 식별자의 처리가 없다는 뜻은 아닙니다. 광고 보상 검증에는 무작위 사용자 ID, 보상 요청 식별자 및 광고 검증 결과가 사용됩니다.'
				]
			},
			{
				title: '서비스 제공자와 전송',
				body: [
					'Seori Labs의 Platform과 Google Firebase·Google Cloud는 인증, 백업, 이벤트 처리와 서비스 운영을 담당합니다. Google AdMob은 선택적 광고를 제공합니다. 네트워크 요청은 HTTPS/TLS를 사용하며 서비스 제공자 위치에 따라 국외에서 처리될 수 있습니다.',
					'Google의 데이터 처리 안내: https://policies.google.com/privacy 및 https://developers.google.com/admob/ios/privacy/data-disclosure 및 https://developers.google.com/admob/android/privacy/play-data-disclosure',
					'개인정보를 판매하지 않습니다. 앱별 수집 항목은 각 마켓의 Data safety 및 App Privacy에도 표시합니다.'
				]
			},
			{
				id: 'delete-data',
				title: '계정·데이터 삭제 요청과 보관 안내',
				body: [
					'진행 백업과 온라인 식별자는 게임 기능을 제공하는 동안 보관하며 아래 삭제 기능이나 보호자 요청으로 삭제할 수 있습니다. 문의 기록은 답변과 후속 연락에 필요한 기간, 기술 로그는 보안·장애 대응·운영 안정성에 필요한 기간 동안 보관한 뒤 삭제하거나 비식별화합니다. 법령상 보관 의무가 있는 정보는 해당 법령의 기간을 적용합니다.',
					'기기의 진행·설정은 앱 내 진행 삭제 또는 앱 제거 시 삭제됩니다. 앱 제거만으로 서버 데이터가 삭제되지는 않습니다. 설정의 진행 지우기는 부모 게이트 뒤에서 백업, Platform 사용자 매핑과 Firebase 사용자 삭제를 요청합니다. 연결 실패 시 온라인 삭제가 완료되지 않았음을 표시하며 다시 시도할 수 있습니다.',
					'보호자는 cs@seorilabs.com으로 데이터 열람·정정·삭제 및 처리 중단을 요청할 수 있습니다. 확인에 필요한 경우 앱에 표시되는 지원 코드를 요청할 수 있으며 비밀번호나 인증 토큰을 보내지 마세요. 광고 제공자가 처리하는 데이터는 해당 제공자의 보관·삭제 정책도 적용됩니다.',
					'진행 삭제가 이미 전송된 모든 분석·광고·보안 기록을 즉시 삭제한다는 뜻은 아닙니다. 해당 기록에 대한 요청은 위 연락처로 접수합니다.'
				]
			},
			{
				title: '보호자 안내와 문의',
				body: [
					'앱의 개인정보 안내와 외부 방침 링크, 진행 삭제는 보호자 확인 뒤에 사용할 수 있습니다. 이 확인은 실수로 외부 페이지를 열거나 진행을 삭제하지 않도록 하는 장치이며, 데이터 처리에 대한 법정대리인 동의를 대신하지 않습니다.',
					'개인정보 및 앱 지원 문의: Seori Labs, cs@seorilabs.com. 보호자 문의 과정에서 제공하는 이메일과 문의 내용은 답변과 요청 처리에 사용됩니다.',
					'데이터 처리 방식이 바뀌면 이 페이지와 스토어의 개인정보 표시를 갱신합니다.'
				]
			}
		],
		footerNote: '보호자 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Jomul Privacy Policy',
		description: 'Data practices for the child-directed Jomul puzzle game.',
		kicker: 'Jomul Privacy Policy',
		lastUpdated: '2026-09-06',
		lastUpdatedLabel: 'Last updated',
		backLabel: 'Back home',
		languageLabel: 'Language',
		intro: 'This notice covers Seori Labs Jomul (com.seorilabs.jomul) on Android and iOS.',
		sections: [
			{
				title: 'A game for children and information we do not collect',
				body: [
					'Jomul is a puzzle game used by children. The general service policy excluding children under 13 does not apply to this game. This app-specific notice takes precedence.',
					'The app does not request or collect a child’s name, date of birth, email, phone number, photos, contacts or precise location. It has no registration form, chat, user posts or in-app purchases.',
					'Online features do process the random identifiers and technical information described below. Not requesting a name does not mean that no data is collected.'
				]
			},
			{
				title: 'Authentication, progress backup and game events',
				body: [
					'Android and iOS use random Platform identifiers, Firebase UIDs and support codes for online features without a registration or sign-in form.',
					'Discovered elements and recipes, chapter progress, hint balances and daily reward records are stored on the device and backed up to Firebase Firestore when online features are connected. All core game content is bundled for offline play.',
					'Allowlisted events about sessions, combinations, discoveries, chapter progress, hints and screen interactions are sent to Platform to understand game operation and usage. No free-form text is sent. These records may be linked to a random user identifier and are not treated as fully anonymous.'
				]
			},
			{
				title: 'Optional rewarded advertising',
				body: [
					'Only user-initiated rewarded ads in the hints screen are offered. There are no interstitial, banner or app-open ads. Requests are non-personalized, with child-directed treatment and a maximum G content rating applied before SDK initialization.',
					'Google AdMob provides ads. Its SDK may process and share IP addresses and inferred approximate location, app- or device-scoped identifiers, ad views and interactions, performance and diagnostic information for advertising, measurement and fraud prevention. The iOS SDK may also process crash information.',
					'The app does not use the Android advertising ID permission, iOS IDFA or ATT. Other identifiers and IP processing can still occur. Reward verification uses random user IDs, claim identifiers and ad verification results.'
				]
			},
			{
				title: 'Providers and transmission',
				body: [
					'Seori Labs Platform and Google Firebase/Google Cloud support authentication, backups, event processing and operations. Google AdMob provides optional ads. Requests use HTTPS/TLS. Data may be processed outside your country depending on provider server locations.',
					'Google disclosures: https://policies.google.com/privacy, https://developers.google.com/admob/ios/privacy/data-disclosure and https://developers.google.com/admob/android/privacy/play-data-disclosure',
					'We do not sell personal information. App data types are also disclosed in store Data safety and App Privacy labels.'
				]
			},
			{
				id: 'delete-data',
				title: 'Request account and data deletion; retention information',
				body: [
					'Progress backups and online identifiers are retained while providing game functionality and can be deleted using the reset function or a parental request. Contact records are kept as needed for responses and follow-up. Technical logs are kept as needed for security, troubleshooting and operational reliability, then deleted or de-identified. Legally required records are retained for the period required by law.',
					'Local progress and settings are removed by resetting progress or uninstalling the app. Uninstalling alone does not delete server data. Reset progress, behind the parental gate, requests deletion of the backup, Platform identity mapping and Firebase user. Online deletion failures are shown and can be retried.',
					'Parents can request access, correction, deletion or cessation of processing at cs@seorilabs.com. We may request the app support code to locate records. Do not send passwords or authentication tokens. Ad provider data is also subject to its retention and deletion policies.',
					'Resetting progress does not imply immediate deletion of all previously sent analytics, advertising or security records. Contact us for requests concerning those records.'
				]
			},
			{
				title: 'Parental notice and contact',
				body: [
					'The privacy notice, external policy link and reset action require a parental gate. This prevents accidental navigation or deletion; it does not replace legally required parental consent.',
					'Privacy and support contact: Seori Labs, cs@seorilabs.com. Parent-provided email addresses and support messages are used to respond and process requests.',
					'We update this page and store disclosures when data practices change.'
				]
			}
		],
		footerNote: 'Parents: contact cs@seorilabs.com'
	}
};
