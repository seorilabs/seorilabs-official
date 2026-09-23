import { site, type Locale } from '$lib/content';
import type { LegalPageContent } from '$lib/legalContent';

export const reascendAccountDeletionContent: Record<Locale, LegalPageContent> = {
	ko: {
		title: '리어센드 계정 및 데이터 삭제',
		description:
			'서리랩스 리어센드의 계정과 진행 데이터를 삭제하는 방법과, 삭제되는 항목 및 처리 기간을 안내합니다.',
		kicker: 'Reascend Account Deletion',
		lastUpdated: '2026년 9월 23일',
		intro:
			'리어센드는 Seori Labs가 제공합니다. 아래 방법으로 계정과 연결된 진행 데이터를 영구 삭제할 수 있습니다.',
		sections: [
			{
				title: '삭제 요청 방법',
				body: [
					`${site.email}로 이메일을 보내 삭제를 요청할 수 있습니다. 제목에 "리어센드 계정 삭제 요청"이라고 적어 주세요.`,
					'본문에는 앱 설정 화면에 표시되는 기기 이전 코드를 적어 주세요. 이 값이 계정을 특정하는 식별자입니다. 설정 화면을 열 수 없다면 사용 기기와 대략적인 최초 실행 시점, 최고 도달 층과 스테이지를 알려 주세요.',
					'타인의 데이터 삭제를 막기 위해 최소한의 확인 절차를 안내할 수 있으며, 확인이 끝나면 삭제 결과를 회신합니다.',
					'앱에는 이름, 이메일, 전화번호 같은 개인 식별 정보가 저장되어 있지 않습니다. 확인에 필요하지 않은 개인정보는 이메일로 보내지 마세요.'
				]
			},
			{
				title: '삭제되는 데이터',
				body: [
					'Firebase 인증 계정과 Seori Labs Platform 계정 매핑이 삭제됩니다.',
					'서버에 저장된 진행 데이터가 삭제됩니다. 탑 층과 스테이지, 능력치, 장비와 아바타, 재화, 임무와 우편, 시즌패스, 출석 기록, 그리고 설정값이 여기에 포함되며, 손상 복구용으로 함께 보관하던 직전 세대 저장본도 삭제됩니다.',
					'전체 순위표와 시즌 순위표의 해당 계정 항목이 삭제되어 다른 이용자에게 더 이상 표시되지 않습니다.',
					'해당 계정에 연결된 분석 이벤트 기록과 부정 이용 판정 기록이 삭제됩니다.'
				]
			},
			{
				title: '삭제되지 않는 정보',
				body: [
					'결제가 있었던 경우, 관련 법령이 정하는 거래 기록 보존 의무에 따라 결제·환불 내역은 정해진 기간 동안 보존됩니다. 이 기록은 결제 사실 확인 목적으로만 사용합니다.',
					'Google 애널리틱스로 이미 전송된 집계 통계는 개인을 특정할 수 없는 형태이며, 해당 서비스에 설정된 보관 기간에 따라 처리됩니다.',
					'기기에 저장된 진행 데이터는 서버 삭제와 별개입니다. 앱을 삭제하면 함께 제거됩니다.'
				]
			},
			{
				title: '처리 시점',
				body: [
					'요청을 확인한 날로부터 영업일 기준 7일 이내에 삭제하고 결과를 회신합니다.',
					'삭제가 끝나면 같은 기기 이전 코드로는 진행을 복구할 수 없습니다. 삭제 후 앱을 다시 실행하면 새 계정으로 처음부터 시작합니다.',
					'삭제는 되돌릴 수 없습니다. 진행을 남겨 두고 싶다면 요청 전에 다시 확인해 주세요.'
				]
			},
			{
				title: '순위표만 제외하고 싶은 경우',
				body: [
					'계정을 삭제하지 않고 순위표 노출만 멈추고 싶다면, 삭제 요청 대신 그 내용을 적어 보내 주세요. 진행 데이터는 유지한 채 순위표 항목만 제거합니다.'
				]
			}
		],
		footerNote: `이 안내는 리어센드에만 적용됩니다. 다른 Seori Labs 앱의 삭제 방법은 각 앱의 안내를 확인해 주세요. 문의는 ${site.email}로 보내주세요.`
	},
	en: {
		title: 'Reascend Account and Data Deletion',
		description:
			'How to delete your Reascend account and progress data, what is removed, and how long it takes.',
		kicker: 'Reascend Account Deletion',
		lastUpdated: '23 September 2026',
		intro:
			'Reascend is provided by Seori Labs. You can permanently delete the progress data associated with your account using the steps below.',
		sections: [
			{
				title: 'How to request deletion',
				body: [
					`Write to ${site.email} to request deletion. Please put "Reascend account deletion request" in the subject line.`,
					'In the message, include the device transfer code shown on the app’s settings screen. That value is the identifier for your account. If you cannot open the settings screen, tell us the device you used, roughly when you first played, and the highest tower and stage you reached.',
					'To prevent anyone from deleting someone else’s data, we may ask you to complete a minimal verification step, and we will reply once deletion is complete.',
					'The app does not store personally identifying information such as your name, email address, or phone number. Please do not send personal details that are not needed for verification.'
				]
			},
			{
				title: 'Data that is deleted',
				body: [
					'Your Firebase authentication account and its Seori Labs Platform mapping are deleted.',
					'Your server-side progress is deleted. This covers tower and stage, stats, equipment and avatars, currencies, objectives and mail, season pass, attendance, and settings, along with the one previous generation of the save kept for corruption recovery.',
					'Your entries on the all-time and season leaderboards are removed, so they are no longer shown to other people.',
					'Analytics event records and anti-abuse flags associated with the account are deleted.'
				]
			},
			{
				title: 'Information that is retained',
				body: [
					'If you made a purchase, payment and refund records are retained for the period required by applicable transaction-record retention law. These records are used only to confirm that a payment occurred.',
					'Aggregate statistics already sent to Google Analytics cannot identify an individual and are handled according to that service’s configured retention period.',
					'Progress stored on your device is separate from server-side deletion. It is removed when you uninstall the app.'
				]
			},
			{
				title: 'Timing',
				body: [
					'We delete the data and reply within 7 business days of verifying your request.',
					'Once deletion is complete, the same device transfer code can no longer restore your progress. Opening the app afterwards starts a new account from the beginning.',
					'Deletion cannot be undone. If you want to keep your progress, please reconsider before sending the request.'
				]
			},
			{
				title: 'Removing only your leaderboard entry',
				body: [
					'If you want to stop appearing on the leaderboard without deleting your account, say so instead of requesting deletion. We will remove only the leaderboard entry and keep your progress.'
				]
			}
		],
		footerNote: `This page applies to Reascend only. For other Seori Labs apps, see that app’s own deletion guidance. For questions, write to ${site.email}.`
	}
};
