import type { LegalDocContent } from '$lib/legal/types';

export const hansuJanggiAitPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '한 수 장기 앱인토스 개인정보처리방침',
		description: '앱인토스 한 수 장기의 익명 식별키, 기기 내 저장과 배너 광고 안내입니다.',
		kicker: 'Hansu Janggi · AppsInToss',
		lastUpdated: '2026년 11월 15일',
		intro:
			'이 방침은 Seori Labs가 토스 앱 안에서 제공하는 한 수 장기(hansu-janggi)에 적용됩니다. Google Play의 com.seoleeapps.jangi 버전은 광고가 없는 별도 버전이며 기존 Android 방침을 따릅니다. 이 미니앱의 처리에는 공통 방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: 'AI 대국과 기기 내 저장',
				body: [
					'장기 AI는 이용자의 기기에서 계산합니다. 진행 중인 대국의 배치와 착수, 기보, 전적, 언어·효과음·연출·글자 크기 설정을 토스 앱의 이 미니앱 전용 저장소에 보관합니다. 손상 복구를 위해 직전 저장과 복구 사본을 같은 공간에 보관할 수 있습니다.',
					'앱인토스 SDK가 제공하는 익명 사용자 식별키를 기기에서 읽어 같은 기기의 이용자별 저장 공간을 구분합니다. 미니앱은 이름, 생년월일, 전화번호나 금융정보를 요청하지 않으며 익명키와 대국 기록을 당사 서버에 전송하지 않습니다. 별도 회원가입, 온라인 대전, 결제, 분석 또는 충돌 보고 SDK는 없습니다.'
				]
			},
			{
				title: '배너 광고와 SDK 제공자',
				body: [
					'홈과 대국 화면 하단에 앱인토스 TossAds SDK의 배너 광고 한 개를 표시합니다. 전면형·보상형 광고와 결제는 없습니다. 개발·검수 빌드는 공식 테스트 광고를 사용하고 공개 서비스는 이 미니앱의 운영 광고 그룹을 사용합니다. 광고를 보거나 클릭해야 대국·힌트·무르기·저장을 이용할 수 있는 구조가 아닙니다.',
					'광고 제공과 노출 측정, 부정행위 방지는 토스 및 연결된 광고 제공자가 해당 SDK와 각자의 방침에 따라 처리합니다. 광고 SDK는 광고 노출·클릭 등 상호작용과 기기·광고 식별자, 성능·진단 정보, IP 주소로 추정한 대략적인 위치 등을 처리할 수 있습니다. 당사는 광고 성과를 위해 대국 기록이나 이메일 문의 내용을 SDK에 전달하지 않습니다. SDK의 처리·보관과 이용자 선택은 아래 토스 및 Google의 방침을 확인해 주세요.'
				]
			},
			{
				title: '보관과 삭제, 이용자 선택',
				body: [
					'기기 내 대국 정보와 복구 사본은 해당 미니앱의 저장 공간이 유지되는 동안 보관합니다. 다른 기기로 동기화하지 않으며 토스 앱 삭제, 데이터 삭제 또는 기기 변경으로 사라질 수 있습니다. 당사는 서버 사본이 없어 잃어버린 대국을 복구할 수 없습니다.',
					'토스 앱과 기기의 개인정보·광고 설정에서 광고 관련 선택을 확인할 수 있습니다. 광고 제공자에게 남는 정보의 보관·삭제는 해당 제공자의 방침과 요청 절차를 따릅니다. 당사는 게임 기록을 판매하지 않습니다. 개인정보 열람·정정·삭제·처리 제한 요청은 아래 이메일로 문의해 주세요. 익명키와 이름·이메일을 연결해 보관하지 않으므로 요청 확인에 필요한 최소 정보가 필요할 수 있습니다.'
				]
			},
			{
				title: '문의와 방침 변경',
				body: [
					'이메일 문의를 보내면 회신 주소, 문의 내용과 자발적으로 첨부한 정보를 답변과 요청 처리에 사용합니다. 해결에 필요한 동안 보관한 뒤 삭제합니다. 문의하지 않아도 대국할 수 있으며 비밀번호나 금융정보를 보내지 마세요.',
					'서비스의 처리 방식이 바뀌면 이 페이지의 시행일과 내용을 갱신합니다. 개인정보 및 게임 지원 담당: Seori Labs, wellknowngeek@gmail.com.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: wellknowngeek@gmail.com'
	},
	en: {
		title: 'Janggi One Move — AppsInToss Privacy Policy',
		description:
			'Anonymous identifiers, local saves, and banner advertising in Janggi One Move for AppsInToss.',
		kicker: 'Hansu Janggi · AppsInToss',
		lastUpdated: 'November 15, 2026',
		intro:
			'This policy applies to Hansu Janggi (hansu-janggi), provided by Seori Labs inside Toss. The Google Play app com.seoleeapps.jangi is a separate, ad-free version covered by its existing Android policy. For this mini app, this policy takes precedence over our general policy.',
		sections: [
			{
				title: 'On-device play and saves',
				body: [
					'The AI calculates moves on your device. Your board, moves, records, results, language, sound, motion and text-size settings are kept in this mini app’s local Toss storage. A previous save and recovery copies may be retained there to recover from corruption.',
					'The mini app reads an anonymous user key supplied by the AppsInToss SDK to separate local saves for users on the same device. It does not request your name, date of birth, phone number or financial information, or send the key or game records to our servers. It has no separate registration, online matches, payments, analytics SDK or crash-reporting SDK.'
				]
			},
			{
				title: 'Banner advertising and SDK providers',
				body: [
					'The mini app displays one AppsInToss TossAds banner at the bottom of the home and game screens. There are no interstitial or rewarded ads or payments. Development and test builds use official test ads; the public service uses this mini app’s live ad group. Playing, hints, undo and saving do not require watching or clicking an ad.',
					'Toss and connected advertising providers process advertising, impression measurement and fraud prevention through their SDKs under their own policies. Advertising SDKs may process ad impressions and clicks, device and advertising identifiers, performance and diagnostic information, and approximate location inferred from IP addresses. We do not pass game records or support messages to the SDK for advertising. See Toss and Google policies below for their processing, retention and privacy choices.'
				]
			},
			{
				title: 'Retention, deletion and choices',
				body: [
					'Game information and recovery copies remain while the mini app’s local storage is retained. Saves do not sync across devices and may be lost when Toss or its data is deleted or you change devices. We keep no server copy and cannot recover lost games.',
					'Review advertising choices in Toss and your device’s privacy settings. Information held by advertising providers is retained and deleted under their policies and request procedures. We do not sell game records. Contact the email below for access, correction, deletion or restriction requests. Because anonymous keys are not stored with names or email addresses, minimal additional information may be needed to identify a request.'
				]
			},
			{
				title: 'Support and policy changes',
				body: [
					'If you email support, we use your reply address, message and voluntary attachments to answer and resolve the request, retain them as needed for that purpose, then delete them. Contacting support is optional. Do not send passwords or financial information.',
					'We update this page and its effective date when data practices change. Privacy and game support: Seori Labs, wellknowngeek@gmail.com.'
				]
			}
		],
		footerNote: 'Privacy and game support: wellknowngeek@gmail.com'
	}
};
