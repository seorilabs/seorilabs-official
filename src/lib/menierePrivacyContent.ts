import type { PrivacyContent } from '$lib/privacyContent';

export const menierePrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '메니에르 기록 개인정보 처리방침',
		description: '기기 내 건강 기록, 암호화 백업, 파일 공유와 비개인화 배너 광고 안내입니다.',
		kicker: 'Meniere Journal Privacy Policy',
		lastUpdated: '2026년 10월 3일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seolee Apps가 배포하고 Seori Labs가 지원하는 메니에르 기록 / Meniere Journal(com.seoleeapps.menieresupport)에 적용됩니다. 이 앱에는 아래 앱별 방침이 공통 방침보다 우선합니다. 성인의 증상 기록과 진료 준비 도구이며 진단이나 치료를 제공하지 않습니다.',
		sections: [
			{
				title: '기기에 보관하는 정보',
				body: [
					'본인이 입력한 발작 시각·시간의 정확도·증상·귀 좌우·일상 영향·회복 시점·증상 및 치료 메모, 하루 상태, 생활 항목과 확인 기록, 진료일·질문·의료진 설명 메모를 기기의 암호화 데이터베이스에 보관합니다. 직접 입력한 도움 연락처와 현지 응급 번호, 언어·테마·알림 설정도 기기에 보관합니다.',
					'계정이나 자동 동기화를 제공하지 않으며 Firebase, 원격 이용 통계, 원격 오류 보고 및 AI 서비스로 기록을 보내지 않습니다. 위치, 주소록 전체, 마이크, 사진 권한을 요구하지 않습니다. 건강 기록·연락처·자유 메모·문서 내용은 광고 요청에 넣지 않습니다.'
				]
			},
			{
				title: '백업과 파일 공유',
				body: [
					'건강 원본은 운영체제 자동 백업에서 제외합니다. 앱의 수동 백업은 본인이 정한 비밀번호로 암호화하며 앱은 이 비밀번호를 보관하지 않습니다. 기기 분실이나 앱 삭제 후 수동 백업이 없으면 복구할 수 없습니다. 비밀번호를 잊으면 백업을 복구할 수 없습니다.',
					'PDF와 CSV는 공유용이며 암호화하지 않습니다. 본인이 공유·저장을 실행하고 시스템 화면에서 대상을 선택합니다. 선택한 저장 제공자나 수신자에게 파일이 전달될 수 있으며 해당 제공자의 방침이 적용됩니다. 앱은 파일을 자체 서버에 올리거나 의료진에게 자동 전송하지 않습니다.',
					'앱 안의 임시 공유 파일은 공유 종료 후 지웁니다. 강제 종료로 남은 파일은 다음 실행 때 정리합니다. 외부에 저장하거나 공유한 파일은 앱의 삭제 기능으로 회수할 수 없습니다.'
				]
			},
			{
				title: 'Google AdMob 배너 광고',
				body: [
					'Google AdMob의 배너만 표시하며 비개인화 광고를 요청합니다. 건강 기록으로 광고를 개인화하거나 대상자를 분류하지 않습니다. 기록 입력·진행 중 발작·도움·진료 요약·백업 및 복원 중에는 광고를 표시하지 않습니다.',
					'비개인화 광고도 광고 제공·측정·부정 이용 방지를 위해 IP 주소와 그로부터 추정한 대략적 위치, 허용된 기기·광고 식별자, 앱·SDK 정보, 광고 상호작용과 진단 정보를 Google 및 광고 파트너가 처리할 수 있습니다. 비개인화는 외부 전송이 없다는 뜻이 아닙니다.',
					'필요한 지역에서는 Google User Messaging Platform(UMP)의 동의 화면을 제공하며, 광고 요청이 허용되지 않으면 광고를 표시하지 않습니다. 설정의 “광고 개인정보 선택”에서 필요한 경우 선택을 변경할 수 있습니다. 광고 동의 여부는 기록·요약·백업 등 기본 기능 이용에 영향을 주지 않습니다. iOS에서 ATT 추적 허용을 요청하지 않습니다.',
					'광고 관련 처리는 Google 및 화면에 표시되는 광고 파트너의 목적·보관 기간·국외 이전 정책에 따라 이뤄질 수 있습니다. https://policies.google.com/privacy 및 https://policies.google.com/technologies/partner-sites 를 확인할 수 있습니다.'
				]
			},
			{
				title: '알림과 연락',
				body: [
					'알림은 사용자가 선택하는 기기 알림입니다. 서버 푸시를 사용하지 않으며 잠금 화면 메시지에 증상이나 질환 이름을 표시하지 않습니다. 기기 설정에서 권한을 끄거나 앱에서 알림을 중지할 수 있습니다.',
					'연락 버튼은 본인이 입력한 번호로 전화·문자 앱을 엽니다. 실제 연락 실행은 사용자가 결정하며 앱은 문자 내용이나 통화 기록을 받지 않습니다. 응급 요청 접수나 연락 상대의 응답을 보장하지 않습니다.'
				]
			},
			{
				id: 'account-deletion',
				title: '보관·정정·삭제',
				body: [
					'건강 기록은 사용자가 삭제할 때까지 기기에 보관합니다. 앱에서 개별 기록을 수정·삭제할 수 있으며 설정 → 전체 기록·설정 삭제는 이 기기의 기록·연락처·설정·알림·암호화 키·임시 파일을 지웁니다. 이미 공유한 파일과 광고 제공자가 처리한 정보는 이 동작으로 삭제되지 않습니다. 앱 계정은 없으므로 계정 삭제 절차도 없습니다.',
					'Google의 광고 관련 정보에 대한 권리 행사는 Google의 개인정보 및 계정 제어 경로에서 할 수 있습니다. 문의 이메일을 보내면 발신 이메일·문의 내용·첨부 자료를 답변과 요청 처리에 필요한 동안 처리합니다. 지원 요청에 건강 기록이나 비밀번호를 보내지 않아도 됩니다.'
				]
			},
			{
				title: '문의와 변경',
				body: [
					'이 앱은 성인을 대상으로 하며 아동용 서비스가 아닙니다. 데이터 처리 방식이 중요하게 바뀌면 이 페이지와 앱의 안내를 갱신합니다. 열람·정정·삭제·처리 제한 요청과 지원 문의는 cs@seorilabs.com으로 할 수 있습니다.'
				]
			}
		],
		footerNote: '개인정보 요청 및 앱 지원: cs@seorilabs.com'
	},
	en: {
		title: 'Meniere Journal Privacy Policy',
		description:
			'On-device health records, encrypted backups, file sharing and non-personalized banner ads.',
		kicker: 'Meniere Journal Privacy Policy',
		lastUpdated: 'October 3, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Meniere Journal / 메니에르 기록 (com.seoleeapps.menieresupport), distributed by Seolee Apps and supported by Seori Labs. This app-specific policy takes precedence over our general policy. The app is a symptom journal and visit preparation tool for adults, and does not provide diagnosis or treatment.',
		sections: [
			{
				title: 'Information stored on your device',
				body: [
					'Your episode times and their accuracy, symptoms, affected ear, impact on daily activities, recovery times, symptom and treatment notes, daily status, habits and check-ins, visit dates, questions and clinician notes are stored in an encrypted database on your device. Manually entered help contacts and local emergency numbers, language, appearance and reminder settings are also kept on the device.',
					'There is no account or automatic sync. Records are not sent to Firebase, remote usage analytics, remote crash reporting or AI services. The app does not request location, full address book, microphone or photo access. Health records, contacts, free-text notes and document content are not included in ad requests.'
				]
			},
			{
				title: 'Backups and file sharing',
				body: [
					'Health records are excluded from automatic operating-system backups. Manual backups are encrypted using a password you choose. The app does not store this password. Without a manual backup, records cannot be recovered after device loss or uninstall. A forgotten backup password cannot be recovered.',
					'PDF and CSV files are for sharing and are not encrypted. You start sharing or saving and choose a destination in the system screen. Files may be sent to your chosen storage provider or recipient, whose policies apply. The app does not upload files to its own server or automatically send them to clinicians.',
					'Temporary files inside the app are deleted after sharing finishes. Files left by an interrupted process are removed at the next launch. Files saved or shared outside the app cannot be recalled by the app’s deletion feature.'
				]
			},
			{
				title: 'Google AdMob banner ads',
				body: [
					'Only Google AdMob banners are shown, and non-personalized ads are requested. Health records are not used to personalize ads or create audiences. Ads are hidden during record entry, ongoing episodes, help, visit summaries, backups and restoration.',
					'Even non-personalized ads may involve Google and its advertising partners processing IP addresses and approximate location inferred from them, permitted device or advertising identifiers, app and SDK information, ad interactions and diagnostics for ad delivery, measurement and fraud prevention. Non-personalized does not mean no data leaves the device.',
					'Google User Messaging Platform (UMP) consent forms are provided where required. Ads are not shown unless ad requests are permitted. Advertising privacy choices in settings let you change choices where required. Consent does not affect access to records, summaries, backups or other core functions. The app does not request ATT tracking permission on iOS.',
					'Google and the advertising partners shown in the consent form may process data outside your country under their purposes, retention periods and transfer policies. See https://policies.google.com/privacy and https://policies.google.com/technologies/partner-sites .'
				]
			},
			{
				title: 'Reminders and contacts',
				body: [
					'Reminders are optional local device notifications. There is no server push, and lock-screen messages do not show symptoms or the condition name. You can stop reminders in the app or turn off notification permission in device settings.',
					'Contact buttons open phone or messaging apps using numbers you entered. You decide whether to contact someone. This app does not receive message content or call history and does not guarantee emergency dispatch or a response.'
				]
			},
			{
				id: 'account-deletion',
				title: 'Retention, correction and deletion',
				body: [
					'Health records remain on your device until you delete them. Individual records can be edited or deleted. Delete all records & settings removes this device’s records, contacts, preferences, reminders, encryption key and temporary files. It does not delete files already shared or information processed by the ad provider. There is no app account to delete.',
					'Rights concerning Google’s advertising data can be exercised through Google’s privacy and account controls. Support emails involve processing the sender address, message and attachments for the time needed to answer or handle the request. You do not need to send health records or passwords to obtain support.'
				]
			},
			{
				title: 'Contact and changes',
				body: [
					'The app is intended for adults and is not a service for children. Material changes to data practices will be reflected on this page and in the app. Contact cs@seorilabs.com for access, correction, deletion, restriction requests or support.'
				]
			}
		],
		footerNote: 'Privacy requests and app support: cs@seorilabs.com'
	}
};
