import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const lizardTycoonPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '내 도마뱀 키우기 개인정보 처리방침',
		description:
			'내 도마뱀 키우기: 픽셀 테라리움 육성의 게임 데이터, 분석 및 인앱결제 처리에 관한 개인정보 처리방침입니다.',
		kicker: 'Lizard Terrarium Privacy Policy',
		lastUpdated: '2026년 8월 13일',
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
					'Google Play와 Apple App Store에서는 기존 구매 권한 확인과 복원을 위해 Firebase 익명 설치 사용자 ID를 사용합니다. AppsInToss에서는 토스 로그인으로 받은 앱 범위 사용자 키를 서버에서 즉시 SHA-256 처리한 Platform 사용자 식별자를 사용합니다. 원본 사용자 키는 저장하거나 앱에 반환하지 않습니다.',
					'AppsInToss 토스 로그인 동의 과정에서 토스가 이름을 제공할 수 있지만 Seori Labs는 이름을 기능에 사용하거나 서버에 저장하지 않습니다. 인앱결제를 선택한 경우 마켓·상품 ID, 구매 또는 주문의 거래 참조값과 토큰, 권한·환불 상태 및 처리 시각을 구매 검증과 복원 원장에 저장합니다. 결제 카드번호와 은행계좌 정보는 Seori Labs가 수집하지 않습니다.',
					'앱은 위치, 연락처, 사진, 동영상, 마이크, 건강 정보 또는 광고 식별자를 수집하지 않습니다.'
				]
			},
			{
				title: '처리 목적과 법적 근거',
				body: [
					'분석 데이터는 앱 안정성 확인, 사용 흐름 및 기능 개선을 위해 처리합니다.',
					'마켓별 가명 사용자 식별자와 구매 데이터는 유료 권한 확인·복원, 구매 검증, 환불 반영, 중복 및 부정 거래 방지, 법적 의무 준수를 위해 처리합니다.',
					'선택적 인앱결제 데이터는 이용자가 구매 기능을 사용할 때만 처리됩니다. 분석 수집은 출시 빌드에서 앱 운영에 필요한 형태로 동작합니다.'
				]
			},
			{
				title: '처리 위탁과 전송',
				body: [
					'Seori Labs는 개인정보를 판매하거나 광고 목적으로 공유하지 않습니다.',
					'Google Firebase, Google Analytics 및 Google Cloud는 분석, 익명 인증, 구매 검증 원장과 서버 운영을 위해 Seori Labs의 서비스 제공자로서 데이터를 처리합니다. Google Play, Apple App Store 및 AppsInToss·토스는 선택한 마켓의 로그인·결제·환불을 처리합니다.',
					'서버로 전송되는 데이터는 HTTPS/TLS로 암호화됩니다. 서비스 제공자의 서버 위치에 따라 데이터가 국외에서 처리될 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기 내 게임 데이터는 앱을 삭제하면 제거됩니다. 분석 데이터는 Google Analytics에 설정된 보관 기간 동안 보관된 뒤 삭제되거나 집계·비식별화됩니다.',
					'구매 원장은 유료 권한 제공, 복원, 환불, 회계·감사, 부정 이용 방지 및 법적 의무에 필요한 기간 동안 보관한 뒤 삭제하거나 비식별화합니다.',
					`데이터 열람 또는 삭제 요청은 ${site.email}로 보내주세요. 요청 확인을 위해 앱과 거래를 식별하는 최소 정보를 요청할 수 있습니다. 법령, 회계, 분쟁 또는 부정 이용 방지에 필요한 기록은 해당 목적이 끝날 때까지 제한적으로 보관될 수 있습니다.`
				]
			},
			{
				title: '아동과 결제',
				body: [
					'이 앱은 만 13세 미만 아동을 대상으로 제작되지 않았으며, 아동임을 알고 개인정보를 수집하지 않습니다.',
					'미성년자는 보호자의 동의와 기기·스토어의 결제 보호 설정에 따라 인앱결제를 이용해야 합니다.'
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
		lastUpdated: 'August 13, 2026',
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
					'On Google Play and the Apple App Store, the App uses a Firebase anonymous installation user ID to check and restore existing purchase entitlements. On AppsInToss, we immediately transform the app-scoped user key received through Toss Login with SHA-256 and use the result as a Platform user identifier. We do not store the original user key or return it to the App.',
					'Toss may provide a name during the AppsInToss login consent flow, but Seori Labs does not use it for App features or store it on our servers. If you choose an in-app purchase, we store market and product IDs, transaction references or tokens, entitlement and refund status, and processing timestamps in our purchase-validation and restoration ledger. Seori Labs does not collect payment card or bank details.',
					'The App does not collect location, contacts, photos, videos, microphone recordings, health data, or advertising identifiers.'
				]
			},
			{
				title: 'Purposes and Basis of Processing',
				body: [
					'Analytics data is processed to monitor reliability and improve App flows and features.',
					'Market-specific pseudonymous user identifiers and purchase data are processed to check and restore paid entitlements, validate purchases, apply refunds, prevent duplicate or fraudulent transactions, and meet legal obligations.',
					'Optional in-app purchase data is processed only when you use a purchase feature. Analytics collection operates as part of the released App service.'
				]
			},
			{
				title: 'Processors and Transfers',
				body: [
					'Seori Labs does not sell personal data or share it for advertising.',
					'Google Firebase, Google Analytics, and Google Cloud process data as service providers for analytics, anonymous authentication, the purchase ledger, and server operations. Google Play, the Apple App Store, and AppsInToss or Toss process login, payment, and refund data for the market you choose.',
					'Data sent to servers is encrypted in transit with HTTPS/TLS. It may be processed outside your country depending on service-provider infrastructure.'
				]
			},
			{
				title: 'Retention and Deletion',
				body: [
					'Local game data is removed when you delete the App. Analytics data is retained for the period configured in Google Analytics, then deleted or retained only in aggregated or de-identified form.',
					'Purchase-ledger records are retained as needed to provide and restore paid entitlements, process refunds, support accounting and audits, prevent abuse, and meet legal obligations, then deleted or de-identified.',
					`Send access or deletion requests to ${site.email}. We may request the minimum information needed to identify the App installation or transaction. Records required by law or for accounting, disputes, or fraud prevention may be retained on a restricted basis until that purpose ends.`
				]
			},
			{
				title: 'Children and Purchases',
				body: [
					'The App is not directed to children under 13, and we do not knowingly collect personal data from children.',
					'Minors should use in-app purchases only with a guardian’s consent and the payment protections configured on the device and store account.'
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
