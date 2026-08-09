import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const babycarePrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '함께봄 개인정보 처리방침',
		description:
			'함께봄의 공동 돌봄 기록, 제품 분석, 선택형 보상형 광고 처리에 관한 개인정보 처리방침입니다.',
		kicker: 'BabyNest Privacy Policy',
		lastUpdated: '2026년 8월 9일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「함께봄: 수유, 기저귀, 아기돌봄 기록 어플」(패키지명 com.seorilabs.babycare, 이하 “앱”)에 적용됩니다. 앱은 성인 양육자가 아기의 수유·기저귀·수면 기록을 비공개 초대 그룹에서 함께 관리하도록 돕는 비의료 도구입니다. 아동이 직접 가입하거나 이용하는 서비스가 아니며, 의료 진단·처방·치료 판단을 제공하지 않습니다.',
		sections: [
			{
				title: '앱이 처리하는 데이터',
				body: [
					'계정과 그룹 정보: 앱이 생성한 사용자 식별자, 양육자 표시 이름, 돌봄 그룹과 멤버십, 초대·합류 이력을 인증과 그룹 내 공유에 사용합니다.',
					'아기와 돌봄 기록: 성인 양육자가 입력한 아기 이름·생년월일, 수유·기저귀·수면의 값과 시각, 메모, 기록자 정보를 저장합니다. 이 정보는 초대된 현재 그룹 구성원에게만 표시됩니다.',
					'이용·광고 정보: 화면 조회, 온보딩·기록·초대 흐름, 광고 요청·노출·보상 이벤트를 Google Analytics와 Seori Labs Platform Events로 처리합니다. Google Mobile Ads는 앱 상호작용, SDK 진단·성능 정보, 광고 또는 앱 인스턴스·기기 식별자와 IP 기반 대략적 위치를 처리할 수 있습니다.',
					'수집하지 않는 것: 정밀 위치, 연락처, 사진·마이크, 결제 카드나 은행계좌 정보. 아기 이름·생년월일, 돌봄 메모, 양육자 표시 이름은 분석 또는 광고 이벤트 파라미터로 보내지 않습니다.'
				]
			},
			{
				title: '처리 목적과 선택',
				body: [
					'계정 인증, 돌봄 기록 저장·실시간 동기화·오프라인 복구, 초대된 그룹 구성원 간 공유를 위해 계정·그룹·돌봄 데이터를 처리합니다.',
					'서비스 흐름과 안정성을 파악하고 오류를 진단하기 위해 비민감 이용 이벤트와 진단 데이터를 처리합니다.',
					'통계 상세를 24시간 여는 선택형 보상형 광고를 제공합니다. Android와 iOS 앱은 비개인화 광고만 요청하며, 광고 시청은 핵심 돌봄 기록 기능 이용의 조건이 아닙니다.',
					'적용되는 지역에서는 앱의 더보기 > 데이터와 개인정보 > 광고 개인정보 선택에서 동의·거부 선택을 다시 확인하거나 변경할 수 있습니다.'
				]
			},
			{
				title: '처리 위탁과 국외 처리',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다. Google Firebase와 Google Cloud(Authentication, Firestore, Cloud Functions, Storage, Analytics)는 인증, 저장·동기화, 서버 처리와 제품 분석을 위해 데이터를 처리합니다.',
					'Google Mobile Ads와 User Messaging Platform은 비개인화 보상형 광고, 광고 측정, 동의·거부 선택 제공을 위해 광고 관련 데이터를 처리합니다. Google의 처리는 Google 개인정보처리방침과 해당 지역의 동의 선택을 따릅니다.',
					'Firestore, Cloud Functions, Storage와 Seori Labs Platform Events의 주요 운영 리소스는 대한민국 서울 리전에서 처리됩니다. Google Analytics, 광고 및 인증과 같은 전역 서비스는 Google의 데이터 위치 정책에 따라 대한민국 밖에서 처리될 수 있습니다.',
					'서버로 전송되는 데이터는 HTTPS/TLS로 암호화됩니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'계정과 돌봄 데이터는 서비스를 제공하는 동안 보관하며, 이용자가 앱에서 계정을 삭제하면 계정 역할에 따라 본인 또는 소유 그룹의 데이터와 인증 계정을 삭제합니다.',
					'제품 분석·보안 로그와 광고 측정 데이터는 돌봄 기록 원문을 포함하지 않으며, Google과 Seori Labs의 표준 보관 기간과 법적 의무에 따라 삭제되거나 비식별화됩니다.',
					'삭제된 그룹 식별자의 재사용을 막기 위해 계정·아기 정보·돌봄 기록이 없는 무작위 그룹 ID, 삭제 시각, 삭제 사유만 담은 tombstone을 보존합니다.',
					`앱을 사용할 수 없으면 ${site.email}로 삭제를 요청할 수 있습니다. 자세한 범위와 절차는 계정 삭제 안내 페이지에서 확인할 수 있습니다.`
				]
			},
			{
				title: '이용자의 권리',
				body: [
					'이용자는 본인의 개인정보에 대한 열람, 정정, 삭제, 처리 제한과 동의 철회를 요청할 수 있습니다. 타인의 데이터 삭제를 막기 위해 필요한 최소한의 본인 확인을 요청할 수 있습니다.',
					'그룹에서 제거된 구성원은 이후 그룹 데이터에 접근할 수 없습니다. 광고 개인정보 선택은 앱 안에서 다시 열 수 있습니다.'
				]
			},
			{
				title: '안전성 확보 조치',
				body: [
					'그룹 멤버십 기반 Security Rules, 인증된 Cloud Functions, 비밀값의 Secret Manager 보관, 전송 구간 암호화로 접근을 통제합니다.',
					'서비스 계정·관리자 비공개 키와 Google Analytics API secret은 앱에 포함하지 않습니다. 비정상 요청은 인증, allowlist와 요청 제한으로 차단합니다.'
				]
			},
			{
				title: '아동 관련 정보',
				body: [
					'앱은 성인 양육자를 대상으로 하며 아동이 직접 계정을 만들거나 이용하도록 설계되지 않았습니다.',
					'아기 관련 정보는 성인 양육자가 자신이 돌보는 아기에 대해 입력하고 관리하며, 초대된 비공개 돌봄 그룹 안에서만 공유됩니다. 이 정보는 광고 타기팅에 사용하지 않습니다.'
				]
			},
			{
				title: '변경 및 문의',
				body: [
					'데이터 처리 방식이 변경되면 이 페이지와 스토어 개인정보 표시를 함께 갱신합니다. 중요한 변경은 시행일 전에 안내합니다.',
					`개인정보 및 앱 지원 문의: ${site.email}`
				]
			}
		],
		footerNote: '이 제품별 방침은 Google Play와 Apple App Store의 앱 개인정보 표시에 연결됩니다.'
	},
	en: {
		title: 'BabyNest Privacy Policy',
		description:
			'Privacy Policy for shared care records, product analytics, and optional rewarded advertising in BabyNest.',
		kicker: 'BabyNest Privacy Policy',
		lastUpdated: 'August 9, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to “BabyNest: Shared Baby Care Log” (package com.seorilabs.babycare, the “App”), provided by Seori Labs. The App is a non-medical tool for adult caregivers to manage a baby’s feeding, diaper, and sleep records together in a private invitation-only group. It is not designed for children to register or use directly and does not provide medical diagnosis, prescription, or treatment decisions.',
		sections: [
			{
				title: 'Data the App Processes',
				body: [
					'Account and group data: an App-generated user identifier, caregiver display name, care group, memberships, and invitation or joining history are used for authentication and private group sharing.',
					'Baby and care records: adult caregivers enter a baby name and date of birth, feeding, diaper, and sleep values and times, notes, and author information. This data is visible only to currently invited members of the care group.',
					'Usage and advertising data: screen views, onboarding, logging, invitation, ad request, impression, and reward events are processed through Google Analytics and Seori Labs Platform Events. Google Mobile Ads may process app interactions, SDK diagnostics and performance, advertising, app-instance or device identifiers, and approximate location inferred from IP.',
					'We do not collect precise location, contacts, photos, microphone recordings, payment card, or bank-account data. Baby names and birth dates, care notes, and caregiver display names are never sent as analytics or advertising event parameters.'
				]
			},
			{
				title: 'Purposes and Choices',
				body: [
					'We process account, group, and care data to authenticate users, store and synchronize records, recover offline changes, and share records within the invited care group.',
					'We process non-sensitive usage events and diagnostics to understand service flows, maintain reliability, and troubleshoot errors.',
					'The App offers an optional rewarded ad that unlocks detailed statistics for 24 hours. The Android and iOS apps request non-personalized ads only, and watching an ad is not required for core care-record features.',
					'Where applicable, open More > Data and privacy > Ad privacy choices to review or change consent and opt-out choices.'
				]
			},
			{
				title: 'Processors and International Processing',
				body: [
					'Seori Labs does not sell personal data. Google Firebase and Google Cloud (Authentication, Firestore, Cloud Functions, Storage, and Analytics) process data for authentication, storage and synchronization, server operations, and product analytics.',
					'Google Mobile Ads and the User Messaging Platform process advertising data to deliver and measure non-personalized rewarded ads and provide consent or opt-out choices. Google’s processing is governed by its privacy policy and the choices available in your region.',
					'The main Firestore, Cloud Functions, Storage, and Seori Labs Platform Events resources run in the Seoul region of South Korea. Global services such as Google Analytics, advertising, and authentication may process data outside South Korea under Google’s data-location policies.',
					'Data sent to servers is encrypted in transit with HTTPS/TLS.'
				]
			},
			{
				title: 'Retention and Deletion',
				body: [
					'Account and care data is kept while the service is provided. Deleting an account in the App deletes the user’s data or the owner’s care-group data, depending on the account role, together with the authentication account.',
					'Product analytics, security logs, and advertising measurement data do not contain the original care records and are deleted or de-identified under Google and Seori Labs standard retention periods and legal obligations.',
					'To prevent reuse of a deleted group identifier, we retain a tombstone containing only a random group ID, deletion time, and deletion reason. It contains no account identifier, baby data, or care record.',
					`If you cannot use the App, request deletion at ${site.email}. The account-deletion page explains the exact scope and procedure.`
				]
			},
			{
				title: 'Your Rights',
				body: [
					'You may request access, correction, deletion, restriction, or withdrawal of consent for your personal data. We may request the minimum information needed to verify your identity and prevent deletion of another person’s data.',
					'Removed members lose access to the care group. Ad privacy choices can be reopened from inside the App.'
				]
			},
			{
				title: 'Security Measures',
				body: [
					'We control access with membership-based Security Rules, authenticated Cloud Functions, Secret Manager, and encryption in transit.',
					'Service-account and admin private keys and the Google Analytics API secret are never included in the App. Authentication, allowlists, and request limits reject abusive requests.'
				]
			},
			{
				title: 'Children’s Data',
				body: [
					'The App is for adult caregivers and is not designed for children to create an account or use directly.',
					'Baby-related data is entered and managed by an adult about a baby in their care and shared only within the private invited care group. It is not used for advertising targeting.'
				]
			},
			{
				title: 'Changes and Contact',
				body: [
					'If data handling changes, we will update this page and the App’s store privacy disclosures together. Material changes will be announced before they take effect.',
					`Privacy and App support: ${site.email}`
				]
			}
		],
		footerNote:
			'This product-specific policy is linked from the App privacy disclosures on Google Play and the Apple App Store.'
	}
};
