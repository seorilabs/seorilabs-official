import type { PrivacyContent } from '$lib/privacyContent';
export const memorizeAllPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: 'Memorize All 개인정보처리방침',
		description: '기기에 저장하는 학습 기록, 배너광고와 개인정보 선택 안내입니다.',
		kicker: 'Memorize All',
		lastUpdated: '2026년 10월 20일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seolee Apps / Seori Labs가 제공하는 Android 앱 Memorize All(com.seorilabs.memorizeall)에 적용됩니다. 이 앱은 만 18세 이상 성인을 대상으로 합니다.',
		sections: [
			{
				title: '기기에 저장하는 학습 기록',
				body: [
					'관심 분야, 언어, 학습 방식, 응답, 진도와 복습 날짜를 기기에 저장합니다. 회원가입을 요구하지 않으며 학습 기록을 운영자 서버로 전송하지 않습니다. Firebase와 원격 이용 통계를 사용하지 않습니다.'
				]
			},
			{
				title: '백업과 삭제',
				body: [
					'백업 파일에는 기기의 학습 상태가 담깁니다. 내보내기는 직접 선택한 파일이나 공유 대상으로 전달하며 가져오기는 선택한 파일을 읽고 확인 후 진도를 교체합니다. 백업을 운영자에게 업로드하지 않습니다. 앱 데이터를 삭제하면 기기 기록이 삭제됩니다. 운영체제, 파일 서비스와 공유 수신자가 보유한 사본은 해당 서비스에서 관리하세요.'
				]
			},
			{
				title: '배너광고와 동의',
				body: [
					'하단 배너광고 제공에 Google AdMob을 사용합니다. 광고 제공, 측정과 부정 이용 방지를 위해 Google과 광고 파트너가 IP 주소와 그로부터 추정한 대략적 위치, 기기와 광고 식별자, 광고 상호작용, 진단과 성능 정보를 처리할 수 있습니다. 정밀 위치 권한은 요청하지 않습니다.',
					'광고 요청 전에 Google UMP 동의 상태를 확인하고 SDK가 허용할 때만 요청합니다. 필요한 지역에는 동의 양식을 표시하며 설정의 광고 개인정보 선택에서 변경할 수 있습니다. 거부와 변경은 학습을 제한하지 않으며 광고가 제한되거나 표시되지 않을 수 있습니다. Android 광고 개인정보 설정에서도 추가 선택을 관리할 수 있습니다.'
				]
			},
			{
				title: '처리 사업자, 보관과 국외 처리',
				body: [
					'광고 통신은 암호화된 연결을 사용합니다. Google과 광고 파트너는 이용자 국가 밖에서 정보를 처리할 수 있으며 각 공개 정책에 따라 보관합니다. Google의 처리 내용은 https://policies.google.com/privacy 와 https://policies.google.com/technologies/partner-sites 에서 확인할 수 있습니다. 기기 학습 기록은 앱 데이터 삭제 전까지, 내보낸 사본은 저장한 곳에 남습니다.'
				]
			},
			{
				title: '문의와 변경',
				body: [
					'열람, 정정, 삭제, 처리 제한과 지원 문의는 cs@seorilabs.com으로 보내 주세요. 답변에 필요한 발신 주소와 문의 내용을 처리하며 해결과 법적 보관 의무에 필요한 동안 보관 후 삭제합니다. 전체 백업이나 비밀정보는 보내지 마세요. 처리 방식이 바뀌면 이 페이지를 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 지원 문의: cs@seorilabs.com'
	},
	en: {
		title: 'Memorize All Privacy Policy',
		description: 'Local learning records, banner advertising and privacy choices.',
		kicker: 'Memorize All',
		lastUpdated: 'October 20, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to the Android app Memorize All (com.seorilabs.memorizeall), provided by Seolee Apps / Seori Labs. It is intended for adults aged 18 and over.',
		sections: [
			{
				title: 'Learning records on your device',
				body: [
					'Interests, language, study mode, answers, progress and review dates are stored locally. The app does not require an account and does not send learning records to our servers. We do not use Firebase or remote product analytics.'
				]
			},
			{
				title: 'Backup and deletion',
				body: [
					'A backup contains your local learning state. Exporting uses your chosen file or sharing destination; importing reads a file you select and replaces local progress after confirmation. The app does not upload backups to us. Removing app data deletes the local record. Copies held by your operating system, file provider or sharing recipient are managed through those services.'
				]
			},
			{
				title: 'Banner ads and consent',
				body: [
					'Google AdMob provides a bottom banner. For advertising, measurement and fraud prevention, Google and its partners may process IP addresses and derived approximate location, device or advertising identifiers, ad interactions, diagnostics and performance information. We do not request precise location access.',
					'Before requesting ads, the app checks Google UMP consent status and only requests ads when the SDK permits it. Where required, a consent form is shown and Ad privacy choices is available in Settings. Declining or changing consent does not restrict learning; ads may be limited or unavailable. Android advertising privacy settings provide additional controls.'
				]
			},
			{
				title: 'Providers, retention and international processing',
				body: [
					'Ad traffic uses encrypted connections. Google and ad partners may process information outside your country and retain it under their published policies. See https://policies.google.com/privacy and https://policies.google.com/technologies/partner-sites for their handling. Local learning data stays until you remove app data; exported copies remain where you save them.'
				]
			},
			{
				title: 'Contact and changes',
				body: [
					'Contact cs@seorilabs.com for access, correction, deletion, processing restrictions or support. We process the sender address and message to answer the request, retain them only as needed for resolution or legal obligations, then delete them. Do not send full backups or secret information. We update this page when data handling changes.'
				]
			}
		],
		footerNote: 'Privacy and support: cs@seorilabs.com'
	}
};
