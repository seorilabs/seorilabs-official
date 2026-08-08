import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const cyclePairPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '사이클 페어 개인정보 처리방침',
		description:
			'사이클 페어의 생리주기·컨디션 기록, 파트너 공유, 알림, 구독 처리에 관한 개인정보 처리방침입니다.',
		kicker: 'Cycle Pair Privacy Policy',
		lastUpdated: '2026년 8월 9일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「사이클 페어」(패키지명 com.seorilabs.cyclepair, 이하 “앱”)에 적용됩니다. 앱은 두 사람이 생리주기와 그날의 컨디션을 사용자가 허용한 범위에서 나누도록 돕는 관계·컨디션 커뮤니케이션 도구이며, 의료 진단·피임·임신 가능성 판단 도구가 아닙니다. 앱의 실제 데이터 처리와 스토어 표시가 공통 방침과 다른 경우 이 제품별 방침이 우선합니다.',
		sections: [
			{
				title: '앱이 처리하는 데이터',
				body: [
					'계정 식별자: 로그인 시 인증 계정 식별자와 이메일을 처리해 인증과 Pair 연결에 사용합니다. 광고 식별자와 결합하지 않습니다.',
					'민감 건강정보: 생리 시작·종료일, 증상, 기분, 컨디션, 도움 선호, 메모는 사용자가 직접 입력합니다. 이 원본 기록은 작성자 본인만 접근할 수 있는 owner-private 문서로 저장되며 Security Rules로 접근을 통제합니다.',
					'파트너 공유 projection: 사용자가 필드별로 켠 항목만 별도 projection으로 생성되어, 연결된 정확히 한 명의 파트너에게만 제공됩니다. 기본값은 전부 비공개이며 원본 기록은 파트너에게 노출되지 않습니다.',
					'초대코드: Pair 연결을 위해 앱이 생성하며 해시 형태로 저장합니다. 1회성이고 24시간 후 만료되며 만료 후 7일간 보존한 뒤 삭제합니다.',
					'알림 토큰: 알림에 동의한 경우 기기 푸시 토큰만 저장합니다. 잠금화면 문구에는 건강정보를 넣지 않고 중립 문구만 사용합니다.',
					'구독 entitlement: 구독을 구매한 경우 서버가 검증한 영수증 결과와 권한·환불 상태만 저장하며, 클라이언트가 직접 쓸 수 없습니다. 결제 카드번호와 은행계좌는 수집하지 않습니다.',
					'진단·사용성 데이터: 앱 안정성과 사용 흐름 확인을 위해 비민감 활동 이벤트와 크래시·성능 진단을 처리합니다. 생리일, 증상, 주기 단계, 자유 텍스트 등 민감값은 포함하지 않습니다.',
					'수집하지 않는 것: 광고 식별자와 행태 추적, 정밀 위치, 연락처·주소록, 사진, 마이크, 가임기·배란·피임 관련 판단값.'
				]
			},
			{
				title: '처리 목적과 법적 근거',
				body: [
					'민감 건강정보는 앱의 핵심 기록 기능을 제공하기 위해 이용자의 명시적 동의에 근거해 처리합니다. 동의를 철회하면 기록과 공유를 중단할 수 있습니다.',
					'파트너 공유는 이용자가 항목별로 켠 범위에서만, 이용자가 요청한 공유를 이행하기 위해 처리합니다. 공유 동의는 언제든 항목 단위로 철회할 수 있습니다.',
					'계정 식별자와 구독 데이터는 인증, 권한 확인·복원, 결제 검증, 환불 반영, 부정 거래 방지, 법적 의무 준수를 위해 처리합니다.',
					'진단·사용성 데이터는 앱 안정성 확인과 기능 개선을 위해 처리합니다.'
				]
			},
			{
				title: '처리 위탁과 국외 이전',
				body: [
					'Seori Labs는 개인정보를 판매하지 않으며 마케팅·광고 목적으로 공유하지 않습니다.',
					'Google Firebase와 Google Cloud(Authentication, Firestore, Cloud Functions, Cloud Messaging, Analytics, Crashlytics, Performance, App Check)는 인증, 저장, 서버 처리, 알림, 진단을 위해 Seori Labs의 수탁자로서 데이터를 처리합니다. Google Play와 Apple App Store는 구독 결제와 영수증 검증을 처리합니다.',
					'Cloud Functions는 대한민국 서울 리전(asia-northeast3)에서, Firestore 기본 데이터베이스는 미국 멀티리전(nam5)에서 처리됩니다. 따라서 저장된 기록은 미국으로 이전되어 처리됩니다. Firebase Authentication 등 전역 서비스의 처리 위치는 Google의 데이터 위치 정책을 따릅니다.',
					'서버로 전송되는 데이터는 HTTPS/TLS로 암호화됩니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'계정을 삭제하면 서버가 본인 기록, Pair 관계와 파트너 projection, 초대코드, 알림 토큰, 구독 entitlement 문서, 인증 계정을 재귀적으로 삭제합니다. 자세한 절차는 계정 삭제 안내 페이지에서 확인할 수 있습니다.',
					'초대코드는 만료 후 7일, 확인 완료된 캐시 tombstone은 30일간 보존한 뒤 자동 삭제합니다. 감사 목적의 비식별 Pair tombstone 로그는 90일간 보존합니다. 이 로그에는 건강 기록과 계정 식별자가 포함되지 않습니다.',
					'백업에 잔존하는 데이터는 삭제 요청일로부터 30일 이내에 파기합니다.',
					'구독 결제 기록은 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령이 정한 기간 동안 보존한 뒤 삭제하거나 비식별화합니다.',
					`앱을 사용할 수 없는 경우 ${site.email}로 열람·삭제를 요청할 수 있습니다. 타인의 데이터 삭제를 막기 위해 최소한의 본인확인 정보를 요청할 수 있습니다.`
				]
			},
			{
				title: '파트너 공유의 성격',
				body: [
					'Pair는 정확히 두 명이며 양쪽이 명시적으로 수락해 연결됩니다. 연결 전에도 본인 기록은 사용할 수 있습니다.',
					'파트너에게는 사용자가 켠 필드만 projection으로 전달되고 원본 기록은 전달되지 않습니다.',
					'공유를 끄거나 Pair를 해제하면 해당 파트너의 서버 접근이 즉시 회수됩니다. 새로 연결한 Pair는 이전 공유 동의를 승계하지 않으며 기본값은 전부 비공개입니다.'
				]
			},
			{
				title: '안전성 확보 조치',
				body: [
					'원본 민감 기록과 오프라인 변경분은 기기에 평문으로 저장하지 않고 OS 보안 저장소(Keychain 등)로 보호합니다.',
					'서버는 요청마다 인증, 대상 식별자, 필요 시 최근 재인증, 공유 설정, 파트너 서명, 1회성 티켓을 검증합니다.',
					'비정상 클라이언트 남용을 막기 위해 App Check(Play Integrity / App Attest)를 적용합니다.',
					'이 앱은 종단간(E2E) 암호화를 제공하지 않습니다. 데이터는 전송·저장 구간의 암호화와 접근통제로 보호됩니다.'
				]
			},
			{
				title: '아동과 최소 연령',
				body: [
					'이 앱은 만 17세 이상을 대상으로 제공합니다. 만 17세 미만 이용자를 대상으로 하지 않으며, 아동임을 알고 개인정보를 수집하지 않습니다.',
					'미성년자는 보호자의 동의와 기기·스토어의 결제 보호 설정에 따라 인앱 구독을 이용해야 합니다.'
				]
			},
			{
				title: '변경 및 문의',
				body: [
					'데이터 처리 방식이 변경되면 이 페이지의 수정일과 스토어 데이터 안전 표시를 함께 갱신합니다. 중요한 변경은 시행일 이전에 안내합니다.',
					`개인정보 및 앱 지원 문의: ${site.email}`
				]
			}
		],
		footerNote: '이 제품별 방침은 Google Play와 Apple App Store의 앱 개인정보 표시에 연결됩니다.'
	},
	en: {
		title: 'Cycle Pair Privacy Policy',
		description:
			'Privacy Policy for cycle and condition entries, partner sharing, notifications, and subscription processing in Cycle Pair.',
		kicker: 'Cycle Pair Privacy Policy',
		lastUpdated: 'August 9, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to “Cycle Pair” (package com.seorilabs.cyclepair, the “App”), provided by Seori Labs. The App helps two people share cycle and daily condition information to the extent the author allows. It is not a medical, diagnostic, contraceptive, or fertility-prediction tool. When the App’s actual data handling or store disclosures differ from our general policy, this product-specific policy controls.',
		sections: [
			{
				title: 'Data the App Processes',
				body: [
					'Account identifiers: at sign-in we process an authentication account identifier and email address for authentication and pair linking. We do not combine them with advertising identifiers.',
					'Sensitive health data: period start and end dates, symptoms, mood, condition, support preferences, and notes are entered by you. These original entries are stored as owner-private documents accessible only to their author and are enforced by Security Rules.',
					'Partner projections: only the fields you switch on are written to a separate projection and delivered to exactly one linked partner. Everything is private by default, and original entries are never exposed to a partner.',
					'Invitation codes: generated by the App for pair linking and stored as a hash. They are single-use, expire after 24 hours, and are deleted 7 days after expiry.',
					'Notification tokens: if you allow notifications, we store only the device push token. Lock-screen text uses neutral wording and never contains health information.',
					'Subscription entitlements: if you subscribe, we store only the server-validated receipt result and entitlement or refund status; clients cannot write it directly. We do not collect payment card or bank account details.',
					'Diagnostics and usage data: we process non-sensitive activity events and crash and performance diagnostics to monitor reliability and flows. They exclude period dates, symptoms, cycle phase, and free text.',
					'The App does not collect advertising identifiers or behavioural tracking, precise location, contacts, photos, microphone recordings, or any fertility, ovulation, or contraception determination.'
				]
			},
			{
				title: 'Purposes and Basis of Processing',
				body: [
					'Sensitive health data is processed on the basis of your explicit consent to provide the App’s core journaling features. You may withdraw consent and stop recording and sharing at any time.',
					'Partner sharing is processed only within the scope you switch on, to carry out the sharing you requested. Sharing consent can be withdrawn per field at any time.',
					'Account identifiers and subscription data are processed to authenticate you, check and restore entitlements, validate purchases, apply refunds, prevent fraudulent transactions, and meet legal obligations.',
					'Diagnostics and usage data are processed to monitor reliability and improve features.'
				]
			},
			{
				title: 'Processors and International Transfers',
				body: [
					'Seori Labs does not sell personal data and does not share it for marketing or advertising.',
					'Google Firebase and Google Cloud (Authentication, Firestore, Cloud Functions, Cloud Messaging, Analytics, Crashlytics, Performance, App Check) process data as our processors for authentication, storage, server processing, notifications, and diagnostics. Google Play and the Apple App Store process subscription payments and receipt validation.',
					'Cloud Functions run in the Seoul region (asia-northeast3) and the default Firestore database runs in the United States multi-region (nam5). Stored entries are therefore transferred to and processed in the United States. Global services such as Firebase Authentication follow Google’s data-location policy.',
					'Data sent to servers is encrypted in transit with HTTPS/TLS.'
				]
			},
			{
				title: 'Retention and Deletion',
				body: [
					'When you delete your account, the server recursively deletes your entries, the pair relationship and partner projections, invitation codes, notification tokens, subscription entitlement documents, and the authentication account. See the account deletion page for the full procedure.',
					'Invitation codes are retained for 7 days after expiry and acknowledged cache tombstones for 30 days, then deleted automatically. Non-identifying pair tombstone audit logs are retained for 90 days and contain no health entries or account identifiers.',
					'Data remaining in backups is destroyed within 30 days of the deletion request.',
					'Subscription transaction records are retained for the period required by applicable consumer-protection and e-commerce law, then deleted or de-identified.',
					`If you cannot use the App, send access or deletion requests to ${site.email}. We may request the minimum information needed to verify your identity and prevent deletion of another person’s data.`
				]
			},
			{
				title: 'How Partner Sharing Works',
				body: [
					'A pair is exactly two people who each explicitly accept the link. You can keep your own entries before linking.',
					'A partner receives only the fields you switch on, as a projection. Original entries are never delivered.',
					'Switching sharing off or unlinking the pair immediately revokes that partner’s server access. A newly linked pair does not inherit previous sharing consent and starts fully private.'
				]
			},
			{
				title: 'Security Measures',
				body: [
					'Original sensitive entries and offline changes are never stored in plaintext on the device; they are protected by OS secure storage such as the Keychain.',
					'For every request the server verifies authentication, the target identifier, and where required recent re-authentication, sharing settings, partner signatures, and single-use tickets.',
					'App Check (Play Integrity / App Attest) is applied to prevent abuse by tampered clients.',
					'The App does not provide end-to-end encryption. Data is protected by encryption in transit and at rest together with access control.'
				]
			},
			{
				title: 'Children and Minimum Age',
				body: [
					'The App is offered to people aged 17 and over. It is not directed to users under 17, and we do not knowingly collect personal data from children.',
					'Minors should use in-app subscriptions only with a guardian’s consent and the payment protections configured on the device and store account.'
				]
			},
			{
				title: 'Changes and Contact',
				body: [
					'If data handling changes, we will update this page and the App’s store privacy disclosures together. We will announce material changes before they take effect.',
					`Privacy and App support: ${site.email}`
				]
			}
		],
		footerNote:
			'This product-specific policy is linked from the App privacy disclosures on Google Play and the Apple App Store.'
	}
};
