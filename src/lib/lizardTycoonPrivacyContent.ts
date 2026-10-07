import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const lizardTycoonPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '내 도마뱀 키우기 개인정보 처리방침',
		description:
			'내 도마뱀 키우기: 픽셀 테라리움 육성의 게임 데이터, 분석 및 인앱결제 처리에 관한 개인정보 처리방침입니다.',
		kicker: 'Lizard Terrarium Privacy Policy',
		lastUpdated: '2026년 10월 7일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「내 도마뱀 키우기: 픽셀 테라리움 육성」(패키지명 com.seorilabs.lizardtycoon, 이하 “앱”)에 적용됩니다. 앱의 실제 데이터 처리와 스토어 표시가 공통 방침과 다른 경우 이 제품별 방침이 우선합니다.',
		sections: [
			{
				title: '앱이 처리하는 데이터',
				body: [
					'게임 진행 상황과 설정은 이용자의 기기에만 저장되며 Seori Labs 서버로 전송되지 않습니다. 앱을 삭제하면 기기에 저장된 진행 상황도 삭제됩니다.',
					'서비스 품질을 확인하기 위해 Google Analytics for Firebase로 화면 조회, 탭, 튜토리얼 진행, 도마뱀 돌보기와 같은 앱·게임 내 상호작용 및 앱 인스턴스에 연결된 분석 식별자를 수집합니다. 이름, 이메일, 전화번호 또는 광고 ID와 연결하지 않으며 광고나 교차 앱 추적에 사용하지 않습니다.',
					'서비스 안정성을 확인하기 위해 릴리스 빌드에서 발생한 GDScript 오류의 앱 내부 파일 경로(res://), 코드 라인, 오류 유형과 허용 목록 오류 분류, 최대 2개의 파일·함수·라인 프레임을 진단 데이터로 처리합니다. 같은 파일·라인은 실행 세션당 1회, 실행 세션당 전체 20건으로 제한합니다. 오류 원문, 로컬·멤버 변수, 게임 저장 내용, 기기의 절대 사용자 경로는 수집하지 않습니다.',
					'iOS 버전은 Firebase Crashlytics로 네이티브 비정상 종료의 호출 경로, 앱 버전과 실행 단계, 기기·OS 정보, Crashlytics 설치 UUID와 Firebase installation ID, 비정상 종료 직전의 기존 가명 분석 이벤트를 처리합니다. 제한된 GDScript 오류도 안정성 확인에 사용합니다. 계정 ID, 도마뱀 이름, 저장 내용과 인증 토큰을 진단에 첨부하지 않으며 광고·교차 앱 추적에 사용하지 않습니다. Crashlytics는 iOS 버전에만 적용됩니다.',
					'Google Play와 Apple App Store에서는 기존 구매 권한 확인과 복원을 위해 Firebase 익명 설치 사용자 ID를 사용합니다. AppsInToss에서는 토스 로그인으로 받은 앱 범위 사용자 키를 서버에서 즉시 SHA-256 처리한 Platform 사용자 식별자를 사용합니다. 원본 사용자 키는 저장하거나 앱에 반환하지 않습니다.',
					'AppsInToss 토스 로그인 동의 과정에서 토스가 이름을 제공할 수 있지만 Seori Labs는 이름을 기능에 사용하거나 서버에 저장하지 않습니다. 인앱결제를 선택한 경우 마켓·상품 ID, 구매 또는 주문의 거래 참조값과 토큰, 권한·환불 상태 및 처리 시각을 구매 검증과 복원 원장에 저장합니다. 결제 카드번호와 은행계좌 정보는 Seori Labs가 수집하지 않습니다.',
					'크리스털(유료 재화)을 사용하는 경우 유상·무상 크리스털 잔액, 연구 조각과 증표, 모프 상자 열기 요청과 결과, 보장 횟수, 연구·탐사 상태, 지급·차감 시각과 관련 주문 참조를 서버 원장에 저장합니다. 결과는 서버가 정하며 요청별 기록은 같은 요청의 중복 처리 방지와 환불 차감에 사용합니다.',
					'유상 크리스털을 쓰기 위해 Google 또는 Apple 계정을 연결하면, Seori Labs 서버는 해당 공급자가 발급한 로그인 토큰의 서명·발급자·대상값을 검증한 뒤 공급자 이름과 계정 식별자의 해시만 저장합니다. 계정 식별자 원문, 이메일, 이름, 프로필 사진은 저장하지 않습니다. 이 해시는 같은 계정을 다시 연결했을 때 같은 지갑을 찾는 데만 사용합니다.',
					'게임 기능은 위치, 연락처, 사진, 동영상, 마이크, 건강 정보를 수집하지 않습니다. Google Play·App Store 버전은 광고 SDK와 광고 식별자를 사용하지 않습니다. AppsInToss 버전의 전면 광고는 토스 통합 광고 SDK를 사용하며, 토스와 Google AdMob은 해당 정책과 기기 동의 설정에 따라 광고 식별자, 기기·네트워크 정보, 광고 노출·클릭 데이터를 처리할 수 있습니다. Seori Labs는 이 광고 식별자를 구매 계정이나 게임 분석 식별자와 연결하지 않습니다.'
				]
			},
			{
				title: '처리 목적과 법적 근거',
				body: [
					'분석·진단 데이터는 앱 안정성 확인, 사용 흐름 및 기능 개선을 위해 처리합니다.',
					'마켓별 가명 사용자 식별자와 구매 데이터는 유료 권한 확인·복원, 구매 검증, 환불 반영, 중복 및 부정 거래 방지, 법적 의무 준수를 위해 처리합니다.',
					'선택적 인앱결제 데이터는 이용자가 구매 기능을 사용할 때만 처리됩니다. 분석 수집은 출시 빌드에서 앱 운영에 필요한 형태로 동작합니다.'
				]
			},
			{
				title: 'AppsInToss 광고',
				body: [
					'광고 횟수, 마지막 광고 종료 시각, 세션 활동 시각과 완료 식별자는 게임 저장과 별도로 기기에 저장해 빈도 제한과 중복 방지에 사용합니다. 광고 기회·생략 사유·로드·요청·표시·노출·클릭·닫힘·오류 및 표시 시간은 마켓, OS, 번들과 정책 버전별로 분석합니다. 광고 시청에는 토스 로그인이 필요하지 않습니다.'
				]
			},
			{
				title: '처리 위탁과 전송',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다. AppsInToss 광고 제공과 관련하여 토스 및 Google의 광고 SDK가 데이터를 처리할 수 있으며, 토스 개인정보 처리방침과 Google 개인정보처리방침이 함께 적용됩니다.',
					'Google Firebase, Google Analytics 및 Google Cloud는 분석·진단, 익명 인증, 구매 검증 원장, 크리스털 지갑 원장과 서버 운영을 위해 Seori Labs의 서비스 제공자로서 데이터를 처리합니다. Google Play, Apple App Store 및 AppsInToss·토스는 선택한 마켓의 로그인·결제·환불을 처리합니다. 계정 연결은 이용자가 선택한 Google 또는 Apple의 로그인 시스템을 이용하며, 각 공급자는 자체 개인정보처리방침에 따라 로그인 정보를 처리합니다.',
					'서버로 전송되는 데이터는 HTTPS/TLS로 암호화됩니다. 서비스 제공자의 서버 위치에 따라 데이터가 국외에서 처리될 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기 내 게임 데이터는 앱을 삭제하면 제거됩니다. 분석 데이터는 Google Analytics에 설정된 보관 기간 동안 보관된 뒤 삭제되거나 집계·비식별화됩니다.',
					'구매 원장과 크리스털 지갑 원장은 유료 권한 제공, 복원, 환불 차감, 회계·감사, 부정 이용 방지 및 법적 의무에 필요한 기간 동안 보관한 뒤 삭제하거나 비식별화합니다. 계정 연결 해시는 이용자가 계정 삭제를 요청하면 함께 삭제합니다.',
					'Google 또는 Apple 계정을 연결한 이용자는 앱 삭제·재설치나 기기 변경 뒤 같은 계정을 다시 연결해 크리스털 지갑과 구매 기록을 복구할 수 있습니다.',
					`데이터 열람 또는 삭제 요청은 ${site.email}로 보내주세요. 요청 확인을 위해 앱과 거래를 식별하는 최소 정보를 요청할 수 있습니다. 법령, 회계, 분쟁 또는 부정 이용 방지에 필요한 기록은 해당 목적이 끝날 때까지 제한적으로 보관될 수 있습니다.`
				]
			},
			{
				title: '아동과 결제',
				body: [
					'이 앱은 만 13세 미만 아동을 대상으로 제작되지 않았으며, 아동임을 알고 개인정보를 수집하지 않습니다.',
					'미성년자는 보호자의 동의와 기기·스토어의 결제 보호 설정에 따라 인앱결제와 크리스털 충전을 이용해야 합니다.'
				]
			},
			{
				title: '변경 및 문의',
				body: [
					'데이터 처리 방식이 변경되면 이 페이지의 수정일과 스토어 데이터 안전 표시를 함께 갱신합니다.',
					`개인정보 및 앱 지원 문의: ${site.email}`
				]
			}
		],
		footerNote:
			'이 제품별 방침은 Google Play, Apple App Store 및 AppsInToss의 앱 개인정보 표시에 연결됩니다.'
	},
	en: {
		title: 'Lizard Terrarium Privacy Policy',
		description:
			'Privacy Policy for game data, analytics, and in-app purchase processing in Lizard Terrarium.',
		kicker: 'Lizard Terrarium Privacy Policy',
		lastUpdated: 'October 7, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to “Lizard Terrarium” (package com.seorilabs.lizardtycoon, the “App”), provided by Seori Labs. When the App’s actual data handling or store disclosures differ from our general policy, this product-specific policy controls.',
		sections: [
			{
				title: 'Data the App Processes',
				body: [
					'Game progress and settings are stored only on your device and are not sent to Seori Labs servers. Removing the App also removes this local progress.',
					'To understand service quality, Google Analytics for Firebase collects screen views, taps, tutorial progress, lizard-care actions, other in-app or gameplay interactions, and an analytics identifier associated with the app instance. We do not link this data to a name, email address, phone number, or advertising ID, and do not use it for advertising or cross-app tracking.',
					'To monitor reliability, release builds process diagnostic data from GDScript errors: the app-relative file path (res://), code line, error type and allowlisted classification, and up to two stack frames containing file, function, and line information. We limit reports from the same file and line to once per session and cap each session at 20 reports. We do not collect the raw error message, local or member variables, saved game data, or absolute user paths from the device.',
					'The iOS version uses Firebase Crashlytics to process native crash stack traces, app version and startup phase, device and OS information, Crashlytics installation UUIDs and Firebase installation IDs, and existing pseudonymous analytics events immediately before a crash. Limited GDScript diagnostics also help monitor reliability. We do not attach account IDs, lizard names, saved game contents, or authentication tokens to diagnostics, or use them for advertising or cross-app tracking. Crashlytics applies only to the iOS version.',
					'On Google Play and the Apple App Store, the App uses a Firebase anonymous installation user ID to check and restore existing purchase entitlements. On AppsInToss, we immediately transform the app-scoped user key received through Toss Login with SHA-256 and use the result as a Platform user identifier. We do not store the original user key or return it to the App.',
					'Toss may provide a name during the AppsInToss login consent flow, but Seori Labs does not use it for App features or store it on our servers. If you choose an in-app purchase, we store market and product IDs, transaction references or tokens, entitlement and refund status, and processing timestamps in our purchase-validation and restoration ledger. Seori Labs does not collect payment card or bank details.',
					'If you use Crystals (a paid currency), we store your paid and free Crystal balances, research shards and tokens, Morph Box open requests and results, guarantee counters, research and expedition state, grant and deduction timestamps, and related order references in our server ledger. Results are determined by the server, and per-request records are used to prevent duplicate processing and to apply refund deductions.',
					'If you link a Google or Apple account to spend paid Crystals, the Seori Labs server verifies the signature, issuer, and audience of the provider’s sign-in token and stores only the provider name and a hash of the account identifier. We do not store the raw account identifier, email address, name, or profile picture. The hash is used only to find the same wallet when you link the same account again.',
					'Game features do not collect location, contacts, photos, videos, microphone recordings, or health data. The Google Play and App Store versions do not use an ad SDK or advertising identifiers. AppsInToss interstitials use the Toss integrated ad SDK. Toss and Google AdMob may process advertising identifiers, device and network information, and ad impression and click data according to their policies and your device consent settings. Seori Labs does not link these advertising identifiers to purchase accounts or game analytics identifiers.'
				]
			},
			{
				title: 'Purposes and Basis of Processing',
				body: [
					'Analytics and diagnostic data are processed to monitor reliability and improve App flows and features.',
					'Market-specific pseudonymous user identifiers and purchase data are processed to check and restore paid entitlements, validate purchases, apply refunds, prevent duplicate or fraudulent transactions, and meet legal obligations.',
					'Optional in-app purchase data is processed only when you use a purchase feature. Analytics collection operates as part of the released App service.'
				]
			},
			{
				title: 'AppsInToss Ads',
				body: [
					'Ad counts, the last ad close time, session activity times, and completion identifiers are stored on your device separately from game saves to enforce frequency limits and prevent duplicates. We analyze ad opportunities, skip reasons, loads, requests, shows, impressions, closes, errors, and display duration by market, OS, bundle, and policy version. Toss Login is not required to view ads.'
				]
			},
			{
				title: 'Processors and Transfers',
				body: [
					'Seori Labs does not sell personal data. Toss and Google ad SDKs may process data to provide AppsInToss ads. The Toss privacy policy (toss.im/privacy-policy) and Google privacy policy (policies.google.com/privacy) also apply.',
					'Google Firebase, Google Analytics, and Google Cloud process data as service providers for analytics and diagnostics, anonymous authentication, the purchase ledger, the Crystal wallet ledger, and server operations. Google Play, the Apple App Store, and AppsInToss or Toss process login, payment, and refund data for the market you choose. Account linking uses the Google or Apple sign-in system you choose, and each provider handles sign-in data under its own privacy policy.',
					'Data sent to servers is encrypted in transit with HTTPS/TLS. It may be processed outside your country depending on service-provider infrastructure.'
				]
			},
			{
				title: 'Retention and Deletion',
				body: [
					'Local game data is removed when you delete the App. Analytics data is retained for the period configured in Google Analytics, then deleted or retained only in aggregated or de-identified form.',
					'Purchase-ledger and Crystal-wallet records are retained as needed to provide and restore paid entitlements, apply refund deductions, support accounting and audits, prevent abuse, and meet legal obligations, then deleted or de-identified. The account-link hash is deleted together with your data when you request account deletion.',
					'If you linked a Google or Apple account, you can restore your Crystal wallet and purchase records after reinstalling the App or changing devices by linking the same account again.',
					`Send access or deletion requests to ${site.email}. We may request the minimum information needed to identify the App installation or transaction. Records required by law or for accounting, disputes, or fraud prevention may be retained on a restricted basis until that purpose ends.`
				]
			},
			{
				title: 'Children and Purchases',
				body: [
					'The App is not directed to children under 13, and we do not knowingly collect personal data from children.',
					'Minors should use in-app purchases and Crystal top-ups only with a guardian’s consent and the payment protections configured on the device and store account.'
				]
			},
			{
				title: 'Changes and Contact',
				body: [
					'If data handling changes, we will update this page and the App’s store privacy disclosures together.',
					`Privacy and App support: ${site.email}`
				]
			}
		],
		footerNote:
			'This product-specific policy is linked from the App privacy disclosures on Google Play, the Apple App Store, and AppsInToss.'
	}
};
