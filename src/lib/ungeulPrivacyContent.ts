import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const ungeulPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '운글 개인정보 처리방침',
		description:
			'운글의 사주 입력, 풀이 요청, 광고와 선택적 사용 분석에 관한 개인정보 처리방침입니다.',
		kicker: 'Ungeul Privacy Policy',
		lastUpdated: '2026년 10월 19일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs의 운글(Ungeul, com.seorilabs.ungeul)에 적용됩니다. 아래 Android v1.4.0의 동작은 해당 버전부터 적용되며, 이전 버전과 다른 마켓의 기능은 다를 수 있습니다. 제품별 처리에 대해서는 이 방침이 회사 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '앱이 처리하는 데이터',
				body: [
					'사주 계산에는 생년월일, 양력 또는 음력, 성별과 선택 입력인 태어난 시각 및 출생지를 사용합니다. 프로필명과 원본 입력은 저장을 선택하면 앱 저장소에 보관합니다. 원본 입력을 Seori Labs의 풀이 서버나 Firebase에 보내지 않습니다. 운영체제의 백업 설정에 따라 앱 데이터 사본이 백업되거나 복원될 수 있습니다.',
					'현재 Android v1.4.0은 이름, 이메일이나 연결 계정을 요구하지 않습니다. 콘텐츠 요청을 위해 Firebase와 Seori Labs Platform이 생성한 가명 사용자 식별자, 인증 토큰과 세션 정보를 처리합니다.',
					'읽기 쉬운 풀이를 제공하기 위해 기기에서 계산한 명식의 파생 사실과 콘텐츠 요청을 Seori Labs Platform으로 전송합니다. 파생 사실에는 오행, 십성, 대운, 세운과 월운에 필요한 분류값이 포함됩니다. 원본 프로필명, 생년월일, 태어난 시각과 출생지는 이 요청에 포함하지 않습니다.',
					'서비스 보호와 장애 확인을 위해 Firebase App Check의 앱·기기 무결성 신호, 요청 시각·응답 상태·가명 사용자 식별자 등 최소한의 요청 메타데이터와 서버 진단 로그를 처리할 수 있습니다.',
					'현재 Android v1.4.0은 풀이 진입 광고와 추가 풀이를 위한 선택적 보상형 광고를 제공하며, 열람권 구매나 계정 연결 화면은 제공하지 않습니다. 과거 결제 기능을 이용한 경우에는 구매 확인, 복원, 부정 이용 방지와 법적 의무를 위해 마켓의 구매 토큰, 주문 식별자, 가명 계정 참조와 열람 권한 기록을 처리할 수 있습니다. 결제수단 정보는 해당 마켓이 처리하며 Seori Labs는 카드번호를 받지 않습니다.',
					'이전 버전의 계정 연결 제공자는 Android의 카카오, iOS의 카카오 또는 Apple, AppsInToss의 토스 로그인입니다. 해당 기능을 이용했다면 인증 코드와 제공자 계정 식별자를 인증 및 구매 권한 확인에 처리할 수 있고, 계정 참조는 가명 처리합니다. 현재 구매 기능이 없다는 이유로 과거 기록이 모두 삭제됐다고 의미하지는 않습니다.',
					'네이티브 앱의 Google AdMob은 광고 요청과 노출 중 IP 주소, 대략적 지역, 허용된 기기 또는 광고 식별자, 광고 상호작용과 진단 정보를 처리할 수 있습니다. 개인 맞춤이 아닌 광고 요청도 광고 SDK의 모든 데이터 처리를 중지하는 것은 아닙니다. 지역과 제공자 요구에 따라 광고 개인정보 동의(UMP) 화면을 표시하며, Android v1.4.0에서는 제공자가 개인정보 선택 메뉴 제공을 요구하는 경우 설정의 광고 개인정보 항목을 제공합니다. AppsInToss 광고는 토스의 광고 기능과 정책을 따릅니다.',
					'사용 분석이 켜져 있으면 Google Analytics for Firebase가 실행, 세션과 풀이 이용 등의 이벤트, 가명 설치 또는 브라우저 식별자, 앱과 기기 정보 및 대략적 지역을 처리합니다. Seori Labs Platform도 앱 사용 이벤트와 가명 식별자를 처리합니다. 네이티브 SDK는 해당 기능이 있는 버전에서 구매 상품, 가격, 통화, 수량 및 광고 측정 이벤트를 수집할 수 있습니다. GA4 이벤트에는 원본 사주 입력, 이름, 파생 명식, 로그인 계정 ID와 피드백 답변을 넣지 않습니다.',
					'Android v1.4.0은 첫 선택 전 사용 분석을 끕니다. 허용 또는 거부를 선택하고 설정에서 이후 수집을 켜거나 끌 수 있습니다. 선택값, 안내 버전, 언어와 선택 시각을 앱에 저장하며, 꺼 둔 기간의 사용 기록을 모아 나중에 보내지 않습니다. 철회는 이후 분석 수집을 중지하며 이전 서버 기록의 삭제와는 다릅니다. 이전 버전과 다른 마켓에는 이 선택 화면이 없고 분석이 기본 활성화될 수 있습니다. GA4의 광고 ID 수집과 광고 개인화는 비활성화하며 광고 개인정보 선택은 별도로 처리합니다.',
					'사주용 출생지는 직접 입력한 장소이며 현재 GPS 위치를 조회하지 않습니다. 앱은 위치 권한, 연락처, 사진과 동영상 보관함, 마이크 또는 건강 정보 접근을 요구하지 않습니다. 공유를 선택하면 생성한 이미지나 글이 이용자가 고른 다른 앱 또는 상대방에게 전달될 수 있습니다.'
				]
			},
			{
				title: '처리 목적',
				body: [
					'가명 식별자와 인증 정보는 이용자별 콘텐츠 요청을 안전하게 처리하고 무단 사용을 방지하기 위해 사용합니다.',
					'파생 명식 사실과 콘텐츠 요청은 이용자가 선택한 명식·오행·십성·대운·세운·월운 풀이를 제공하기 위해 사용합니다.',
					'App Check 신호와 진단 로그는 자동화된 남용 방지, 서비스 안정성 확인과 오류 대응을 위해 사용합니다.'
				]
			},
			{
				title: '처리 위탁과 국외 처리',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다. 광고 제공 과정에서 위에 설명한 데이터가 Google AdMob 및 해당 광고 서비스 제공자에게 전달될 수 있습니다. 광고와 분석 제공자의 데이터 사용 안내는 아래 링크에서 확인할 수 있습니다.',
					'Google Firebase와 Google Cloud는 인증, App Check, 사용 분석, 서버 실행과 로그 처리에 사용합니다. Google AdMob은 네이티브 광고를 처리합니다. Google Play, Apple App Store와 AppsInToss 및 토스는 해당 마켓의 배포, 결제, 보안 또는 광고 기능을 처리합니다. 실제 이용한 버전과 기능에 따라 해당 제공자가 달라집니다.',
					'서버로 전송되는 데이터는 HTTPS/TLS로 암호화됩니다. 서비스 제공자의 서버 위치에 따라 데이터가 국외에서 처리될 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'앱의 프로필 삭제가 저장 및 재읽기까지 성공하면 해당 프로필을 앱 저장소에서 제거합니다. 저장 실패를 알린 경우 일부 정보가 남거나 재시작 후 다시 보일 수 있습니다. 앱 삭제와 프로필 삭제는 운영체제의 백업 사본이나 이미 공유한 이미지를 함께 지우는 절차가 아닙니다. 운영체제 백업은 이용자의 기기 및 계정 설정에서 관리합니다.',
					'가명 인증 정보, 콘텐츠 요청과 보안·진단 로그는 앱 기능 제공, 장애 대응, 부정 이용 방지와 법적 의무에 필요한 기간 동안 보관한 뒤 삭제하거나 비식별화합니다. 각 클라우드 서비스의 설정된 보관 기간도 적용됩니다.',
					'GA4 이벤트와 사용자 데이터에는 속성의 보관 설정이 적용되고, 통계 보고서와 BigQuery 내보내기에는 별도 보관 설정이 적용될 수 있습니다. 분석 데이터의 삭제 요청은 아래 문의처로 접수할 수 있습니다.',
					`가명 서버 데이터의 열람 또는 삭제를 요청하려면 ${site.email}로 문의해 주세요. 다른 이용자의 데이터 보호를 위해 앱 설치와 요청에 관한 최소한의 확인을 요청할 수 있습니다.`
				]
			},
			{
				title: '아동과 이용상 주의',
				body: [
					'앱은 아동 전용 서비스로 설계되지 않았으며, 아동임을 알고 개인정보를 수집하지 않습니다.',
					'운글의 풀이는 전통 명리 체계를 이해하기 쉽게 정리한 참고 콘텐츠입니다. 전문적인 의료·법률·투자 판단이나 진단을 대신하지 않습니다.'
				]
			},
			{
				title: '권리와 문의',
				body: [
					'이용자는 적용되는 법령에 따라 자신의 개인정보에 대한 열람, 정정, 삭제, 처리 제한과 이의를 요청할 수 있습니다.',
					'데이터 처리 방식이 변경되면 이 페이지와 Google Play Data safety, Apple App Privacy 및 AppsInToss 등록 정보를 함께 갱신합니다.',
					`개인정보 및 앱 지원 문의: ${site.email}`
				]
			}
		],
		footerNote:
			'이 제품별 방침은 Google Play, Apple App Store와 AppsInToss의 앱 개인정보 표시에 연결됩니다.'
	},
	en: {
		title: 'Ungeul Privacy Policy',
		description:
			'Privacy Policy for birth inputs, reading requests, advertising and optional usage analytics in Ungeul.',
		kicker: 'Ungeul Privacy Policy',
		lastUpdated: 'October 19, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Ungeul (com.seorilabs.ungeul), provided by Seori Labs. Features identified below as Android v1.4.0 apply from that version; earlier versions and other markets may differ. This product-specific policy takes precedence over the company policy for the processing described here.',
		sections: [
			{
				title: 'Data the App processes',
				body: [
					'Birth-chart calculation uses your date of birth, solar or lunar calendar, gender, and optional birth time and place. If you choose to save a profile, its name and original inputs are kept in App storage. These original inputs are not sent to the Seori Labs reading server or Firebase. Depending on operating-system settings, copies of App data may be backed up or restored.',
					'Android v1.4.0 does not require a name, email address or linked account. For content requests, it processes pseudonymous user identifiers, authentication tokens and session information generated by Firebase and the Seori Labs Platform.',
					'To provide plain-language readings, the App sends derived chart facts calculated on your device and content requests to the Seori Labs Platform. These facts include classifications for the five elements, ten gods, decade, annual and monthly flows. These requests do not include original profile names, dates of birth, birth times or birth places.',
					'To protect the service and diagnose failures, the App may process Firebase App Check app/device-integrity signals and minimal request metadata and server diagnostic logs, such as request time, response status, and a pseudonymous user identifier.',
					'Android v1.4.0 provides ads on entry to readings and optional rewarded ads for additional readings. It does not offer ticket purchases or account-linking screens. If you used purchase features in an earlier version, market-issued purchase tokens, order identifiers, pseudonymous account references and entitlement records may be processed for verification, restoration, fraud prevention and legal obligations. The relevant market processes payment-instrument details; Seori Labs does not receive card numbers.',
					'Account-linking providers in earlier versions include Kakao on Android, Kakao or Apple on iOS, and Toss Login in AppsInToss. If you used these features, authorization codes and provider account identifiers may be processed for authentication and entitlement verification, with account references pseudonymized. The absence of current purchase features does not mean that all earlier records have been deleted.',
					'Google AdMob in native apps may process IP addresses, approximate location, permitted device or advertising identifiers, ad interactions and diagnostic information when requesting and displaying ads. Requesting non-personalized ads does not stop all advertising-SDK data processing. An ad privacy (UMP) screen is shown according to regional and provider requirements. Android v1.4.0 provides an Ad privacy option in Settings when the provider requires that option to be available. AppsInToss ads use Toss advertising functionality and policies.',
					'When usage analytics is enabled, Google Analytics for Firebase processes events such as launches, sessions and reading use, pseudonymous installation or browser identifiers, app and device information, and approximate region. The Seori Labs Platform also processes App usage events and pseudonymous identifiers. Native SDKs may measure purchased products, prices, currencies, quantities and advertising events in versions with those features. GA4 events exclude original birth inputs, names, derived charts, login-account IDs and feedback answers.',
					'Android v1.4.0 keeps usage analytics off before your first choice. You can allow or decline it and turn future collection on or off in Settings. The App stores your choice, notice version, language and choice time. Events from periods when analytics is off are not stored for later transmission. Withdrawal stops future analytics collection; it does not delete earlier server records. Earlier versions and other markets may lack this choice screen and enable analytics by default. GA4 advertising-ID collection and ad personalization are disabled, and ad privacy choices are managed separately.',
					'The birth place is a place you enter, not a reading of your current GPS location. The App does not request access to device location, contacts, photo or video libraries, microphone or health information. If you choose to share, the generated image or text may be sent to the app or recipient you select.'
				]
			},
			{
				title: 'Purposes of processing',
				body: [
					'Pseudonymous identifiers and authentication information are used to process each user’s content requests securely and prevent unauthorized use.',
					'Derived chart facts and content requests are used to provide the chart, five-elements, ten-gods, decade, annual, and monthly readings selected by the user.',
					'App Check signals and diagnostic logs are used to prevent automated abuse, maintain service reliability, and respond to errors.'
				]
			},
			{
				title: 'Service providers and international processing',
				body: [
					'Seori Labs does not sell personal data. Advertising may send the data described above to Google AdMob and the relevant advertising service providers. See the links below for the advertising and analytics providers’ data-use disclosures.',
					'Google Firebase and Google Cloud are used for authentication, App Check, usage analytics, server execution and logging. Google AdMob handles native advertising. Google Play, the Apple App Store, and AppsInToss and Toss process distribution, payments, security or advertising for their respective markets. The providers involved depend on the version and features you use.',
					'Data sent to servers is encrypted with HTTPS/TLS. Data may be processed outside the user’s country depending on service-provider infrastructure.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'A profile is removed from App storage after the App confirms that deletion was saved and read back successfully. If a storage failure is reported, some information may remain or reappear after restart. Deleting a profile or uninstalling the App does not also delete operating-system backups or images you already shared. Manage operating-system backups in your device and account settings.',
					'Pseudonymous authentication information, content requests, and security/diagnostic logs are retained only as needed for App functionality, incident response, abuse prevention, and legal obligations, and are then deleted or de-identified. Configured retention periods of the relevant cloud services also apply.',
					'GA4 event and user data follow property retention settings; aggregate reports and BigQuery exports may follow separate retention settings. Analytics data deletion requests can be sent to the contact below.',
					`To request access to or deletion of pseudonymous server data, contact ${site.email}. We may request minimal information about the App installation and request to protect other users’ data.`
				]
			},
			{
				title: 'Children and important notice',
				body: [
					'The App is not designed as a child-directed service, and Seori Labs does not knowingly collect personal data from children.',
					'Ungeul provides reference content that explains traditional East Asian fortune-reading concepts. It does not replace professional medical, legal, or investment advice or diagnosis.'
				]
			},
			{
				title: 'Your rights and contact',
				body: [
					'Subject to applicable law, users may request access, correction, deletion, restriction, or objection regarding their personal data.',
					'If data handling changes, we will update this page and the Google Play Data safety, Apple App Privacy, and AppsInToss disclosures together.',
					`Privacy and App support: ${site.email}`
				]
			}
		],
		footerNote:
			'This product-specific policy is linked from the App disclosures on Google Play, the Apple App Store, and AppsInToss.'
	}
};
