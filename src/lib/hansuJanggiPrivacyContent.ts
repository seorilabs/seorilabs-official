import type { LegalDocContent } from '$lib/legal/types';

export const hansuJanggiPrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '한 수 장기 개인정보처리방침',
		description: '한 수 장기의 오프라인 대국, 기기 저장, 백업과 문의 정보 처리 안내입니다.',
		kicker: 'Janggi: One Move Privacy Policy',
		lastUpdated: '2026년 11월 14일',
		intro:
			'이 방침은 Seori Apps(기존 Seolee Apps)가 Google Play에 배포하고 Seori Labs가 운영하는 한 수 장기 / Janggi: One Move(com.seoleeapps.jangi)에 적용됩니다. 이 게임의 처리에 관해서는 공통 방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '오프라인 대국과 기기에 저장하는 정보',
				body: [
					'AI 대국의 계산은 기기에서 이루어집니다. 진행 중인 대국의 기물 배치와 착수 기록, 기보, 전적, 언어·효과음·연출·글자 크기 설정을 앱 저장공간에 보관합니다. 저장 손상에 대비해 직전 저장의 백업과 복구에 필요한 사본을 같은 저장공간에 둘 수 있습니다.',
					'기존 버전의 전적과 설정을 새 저장 형식으로 옮길 수 있습니다. 예전 저장에 착수 기록이 없으면 과거의 수를 새로 만들지 않으며, 남아 있는 위치부터 대국을 이어갑니다.'
				]
			},
			{
				title: '계정, 광고와 서버 전송',
				body: [
					'이 Google Play 버전에는 회원가입, 온라인 대국, 광고, 인앱결제, 분석 또는 충돌 보고 SDK가 없습니다. 게임 기록을 당사 서버에 전송하거나 제3자에게 판매·공유하지 않습니다. 개인정보처리방침이나 이메일 문의를 열면 외부 브라우저 또는 메일 앱이 실행되며, 해당 서비스의 처리는 그 서비스의 방침을 따릅니다.'
				]
			},
			{
				title: '보관, 백업과 삭제',
				body: [
					'게임 정보와 앱이 만든 복구 사본은 앱의 저장공간을 지울 때까지 기기에 보관합니다. Android 앱에서는 운영체제의 앱 데이터 백업을 사용하지 않도록 설정합니다. 앱 삭제나 저장공간 삭제 시 기보·전적·진행 대국이 사라질 수 있습니다. 당사는 서버 사본을 보관하지 않아 문의로 기록을 복구할 수 없습니다.'
				]
			},
			{
				title: '이메일 문의',
				body: [
					'이메일로 문의하면 발신 이메일 주소, 문의 내용과 자발적으로 첨부한 정보를 답변과 요청 처리에 사용합니다. 문의 해결에 필요한 동안 보관한 뒤 삭제합니다. 비밀번호, 결제정보 또는 불필요한 개인정보는 보내지 마세요. 개인정보 열람·정정·삭제·처리 제한 요청과 게임 지원 문의는 wellknowngeek@gmail.com으로 보내 주세요.'
				]
			},
			{
				title: '이용 연령과 방침 변경',
				body: [
					'앱은 나이나 생년월일을 입력받지 않습니다. 지역별 스토어 콘텐츠 등급과 이용 요건이 적용됩니다. 게임의 데이터 처리 방식이 바뀌면 이 방침과 시행일을 갱신합니다.'
				]
			}
		],
		footerNote: '개인정보 및 게임 지원: wellknowngeek@gmail.com'
	},
	en: {
		title: 'Janggi: One Move Privacy Policy',
		description: 'Offline play, local records, backups, and support inquiries in Janggi: One Move.',
		kicker: 'Janggi: One Move Privacy Policy',
		lastUpdated: 'November 14, 2026',
		intro:
			'This policy applies to Janggi: One Move / 한 수 장기 (com.seoleeapps.jangi), published on Google Play by Seori Apps (formerly Seolee Apps) and operated by Seori Labs. For this game, it takes precedence over our general policy.',
		sections: [
			{
				title: 'Offline play and local information',
				body: [
					'Computer moves are calculated on your device. The current board and moves, game records, win/loss totals, language, sound, motion, and text-size settings are kept in app storage. The app may also keep the previous valid save and recovery copies in that storage to recover from corruption.',
					'Records and settings from an earlier app version may be migrated to the new format. When an older save has no move history, earlier moves are not invented. Play resumes from the position that was actually saved.'
				]
			},
			{
				title: 'Accounts, advertising, and transmission',
				body: [
					'This Google Play version has no account registration, online play, advertising, in-app purchases, analytics SDK, or crash-reporting SDK. We do not send your game records to our servers, sell them, or share them with third parties. Opening the privacy policy or contacting support launches an external browser or email app; those services handle information under their own policies.'
				]
			},
			{
				title: 'Retention, backup, and deletion',
				body: [
					'Game information and recovery copies remain in app storage until you clear that storage. The Android app is configured not to use operating-system app-data backup. Uninstalling the app or clearing its storage may remove records, statistics, and unfinished games. We keep no server copy and cannot restore those records through a support request.'
				]
			},
			{
				title: 'Support inquiries',
				body: [
					'When you contact us by email, we use your email address, message, and information you choose to attach to answer and resolve your request. We keep it for as long as needed to resolve the inquiry and then delete it. Do not send passwords, payment details, or unnecessary personal information. Contact wellknowngeek@gmail.com for game support or requests to access, correct, delete, or restrict personal information.'
				]
			},
			{
				title: 'Age and policy changes',
				body: [
					'The app does not ask for your age or date of birth. Regional store content ratings and requirements apply. We update this policy and its effective date when the game’s data practices change.'
				]
			}
		],
		footerNote: 'Privacy and game support: wellknowngeek@gmail.com'
	}
};
