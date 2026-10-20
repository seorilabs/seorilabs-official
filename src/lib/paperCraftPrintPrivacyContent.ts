import type { PrivacyContent } from '$lib/privacyContent';

export const paperCraftPrintPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: 'Paper Craft Print 개인정보처리방침',
		description:
			'기기에 저장하는 사진과 초안, PDF 공유, 배너와 보상형 광고의 개인정보 처리 안내입니다.',
		kicker: 'Paper Craft Print Privacy Policy',
		lastUpdated: '2026년 10월 21일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seolee Apps에서 배포하는 Android 종이 도안 편집 앱 Paper Craft Print(패키지 com.seoleeapps.papercraftprint)에 적용됩니다. 앱은 만 18세 이상 성인 취미 사용자를 대상으로 합니다. 앱의 데이터 처리에는 이 제품별 방침이 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '기기에 보관하는 정보',
				body: [
					'앱은 초안, 문구, 크기와 패턴 설정, 선택한 사진 사본, 생성한 PDF, 언어 설정, 광고로 연 패턴의 사용 권한을 기기에 보관합니다. 로그인, 앱 서버, 클라우드 동기화, Firebase, 별도 이용 분석 또는 결제 기능은 사용하지 않습니다. 선택한 사진과 초안을 앱 운영자의 서버에 업로드하지 않습니다.',
					'사진은 사용자가 시스템 사진 선택기에서 고릅니다. 앱은 사진 전체 목록, 카메라와 마이크 접근 권한을 요청하지 않습니다. 사용자가 선택한 사진은 도안 편집과 PDF 생성에 사용합니다.'
				]
			},
			{
				title: '파일 저장, 공유와 인쇄',
				body: [
					'사용자가 선택하면 PDF를 시스템 폴더 선택기로 고른 위치에 저장하거나 시스템 공유와 인쇄 기능에 전달합니다. 전달 후 파일을 처리하는 앱, 서비스, 프린터에는 해당 제공자의 정책이 적용됩니다. 외부에 저장하거나 전달한 파일은 이 앱에서 삭제되지 않습니다.'
				]
			},
			{
				title: '광고와 개인정보 선택',
				body: [
					'홈과 내 작업에는 Google AdMob 배너 광고가 표시될 수 있습니다. 일부 추가 패턴은 사용자가 선택한 보상형 광고를 완료하면 해당 초안에 열립니다. 동의 확인 뒤 광고 요청이 허용된 상태에서 Google Mobile Ads SDK를 초기화합니다. 광고가 허용되지 않거나 제공되지 않아도 무료 도안과 기본 패턴으로 제작하고 PDF를 만들 수 있습니다.',
					'Google Mobile Ads와 User Messaging Platform은 광고 제공, 측정, 오류 진단과 부정 이용 방지를 위해 IP 주소, 광고 상호작용, 진단 정보와 기기 식별자 등의 정보를 처리할 수 있습니다. IP 주소는 대략적인 위치를 추정하는 데 사용될 수 있습니다. 광고 SDK가 수집하는 사용자 데이터는 전송 중 암호화됩니다. 지역과 동의 상태에 따라 처리 범위가 다를 수 있습니다.',
					'설정의 광고 개인정보 선택에서 이용 가능한 동의 선택을 확인하고 변경할 수 있습니다. 광고 식별자는 Android 설정에서 재설정하거나 삭제할 수 있습니다.'
				]
			},
			{
				title: '광고 제공자와 국외 처리',
				body: [
					'Google과 광고 파트너는 이용자의 국가 밖에서 정보를 처리할 수 있습니다. 광고 제공자의 처리 장소, 보관 기간, 삭제 절차와 국외 이전 보호조치는 해당 제공자의 공개 정책을 따릅니다.',
					'Google의 데이터 처리와 관리 방법은 https://policies.google.com/privacy 와 https://policies.google.com/technologies/ads 에서 확인할 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'초안은 사용자가 삭제하거나 앱 데이터를 지울 때까지 기기에 남습니다. 삭제한 초안에서만 사용하던 사진 사본은 더 이상 다른 초안에서 참조하지 않으면 정리합니다. 앱 내부에 생성한 PDF는 초안 삭제만으로 지워지지 않습니다.',
					'앱 데이터 삭제 또는 앱 삭제 시 앱 내부 데이터가 지워집니다. 외부 폴더나 다른 서비스에 저장한 파일은 해당 위치에서 직접 삭제해야 합니다. Android 자동 백업은 비활성화되어 있습니다.'
				]
			},
			{
				title: '문의와 이용자의 요청',
				body: [
					'개인정보 열람, 정정, 삭제, 처리 제한과 지원 문의는 cs@seorilabs.com으로 보내 주세요. 문의에 답하기 위해 발신 이메일 주소와 문의 내용을 처리하며 해결과 법적 보관 의무에 필요한 동안 보관한 뒤 삭제합니다. 비밀번호나 전체 사진, 초안 파일 같은 불필요한 자료는 보내지 마세요.'
				]
			},
			{
				title: '대상과 변경 안내',
				body: [
					'앱은 성인 취미 사용자를 대상으로 하며 아동을 대상으로 설계하지 않았습니다. 기능이나 데이터 처리 방식이 바뀌면 이 방침을 수정하고 이 페이지의 시행일을 갱신합니다.'
				]
			}
		],
		footerNote:
			'이 방침은 Paper Craft Print Android 앱에 적용됩니다. 개인정보와 지원 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Paper Craft Print Privacy Policy',
		description:
			'Photos and drafts on your device, PDF sharing, banner ads, rewarded ads and privacy choices.',
		kicker: 'Paper Craft Print Privacy Policy',
		lastUpdated: 'October 21, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Paper Craft Print, an Android paper template editor distributed by Seolee Apps (package com.seoleeapps.papercraftprint). It is intended for adult hobbyists aged 18 and over. This product policy takes precedence over our general policy for the app’s data handling.',
		sections: [
			{
				title: 'Information kept on your device',
				body: [
					'The app stores drafts, notes, dimensions, pattern choices, copies of selected photos, generated PDFs, language preferences and rewarded pattern permissions on your device. It has no sign-in, app server, cloud synchronization, Firebase, separate product analytics or payments. Selected photos and drafts are not uploaded to the app operator’s server.',
					'You select photos through the system photo picker. The app does not request access to your entire photo library, camera or microphone. Selected photos are used to edit your craft and create its PDF.'
				]
			},
			{
				title: 'Saving, sharing and printing',
				body: [
					'At your request, the app saves a PDF to a location you choose with the system folder picker or passes it to system sharing and printing features. The receiving app, service or printer handles the file under its own terms. Files saved or sent outside this app are not deleted by this app.'
				]
			},
			{
				title: 'Advertising and privacy choices',
				body: [
					'Google AdMob banners may appear on Home and My drafts. You can choose a rewarded ad to open an additional pattern for a particular draft. The app initializes Google Mobile Ads after checking that ad requests are permitted. You can use all free templates and basic patterns and create PDFs when advertising is unavailable or not permitted.',
					'Google Mobile Ads and User Messaging Platform may process IP addresses, advertising interactions, diagnostics and device identifiers to provide and measure ads, diagnose problems and prevent abuse. An IP address may be used to estimate a general location. User data collected by the advertising SDK is encrypted in transit. Processing may vary with your region and privacy choices.',
					'Use Ad privacy choices in Settings to review or change the choices available to you. You can reset or delete the advertising ID in Android settings.'
				]
			},
			{
				title: 'Advertising providers and international processing',
				body: [
					'Google and advertising partners may process information outside your country. Their published policies govern processing locations, retention, deletion procedures and safeguards for international transfers.',
					'See https://policies.google.com/privacy and https://policies.google.com/technologies/ads for Google’s practices and controls.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Drafts remain on your device until you delete them or clear app data. Copies of photos used only by a deleted draft are cleaned up when no other draft refers to them. Deleting a draft does not delete PDFs already created inside the app.',
					'Clearing app data or uninstalling removes internal app data. Delete files saved to external folders or other services at those locations. Android automatic backup is disabled.'
				]
			},
			{
				title: 'Contact and your requests',
				body: [
					'Contact cs@seorilabs.com for access, correction, deletion, processing restrictions or support. We process the sender address and message to answer the request, retain them only as needed for resolution or legal obligations, then delete them. Do not send passwords or unnecessary materials such as full photos or draft files.'
				]
			},
			{
				title: 'Audience and updates',
				body: [
					'The app is intended for adult hobbyists and is not designed for children. If features or data practices change, this policy will be updated with a new effective date on this page.'
				]
			}
		],
		footerNote:
			'This policy applies to the Paper Craft Print Android app. Privacy and support: cs@seorilabs.com'
	}
};
