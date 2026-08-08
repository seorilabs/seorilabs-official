import { site, type Locale } from '$lib/content';
import type { LegalPageContent } from '$lib/legalContent';

export const cyclePairAccountDeletionContent: Record<Locale, LegalPageContent> = {
	ko: {
		title: '사이클 페어 계정 및 데이터 삭제',
		description:
			'서리랩스 사이클 페어 앱의 계정과 주기·컨디션 기록을 앱 안에서 삭제하거나 이메일로 삭제 요청하는 방법을 안내합니다.',
		kicker: 'Cycle Pair Account Deletion',
		lastUpdated: '2026년 8월 9일',
		intro:
			'사이클 페어는 Seori Labs가 제공합니다. 아래 방법으로 계정과 연결된 데이터를 영구 삭제할 수 있습니다.',
		sections: [
			{
				title: '앱에서 삭제',
				body: [
					'1. 사이클 페어 앱을 엽니다.',
					'2. 설정에서 개인정보 및 계정 영역을 찾습니다.',
					'3. 계정 삭제를 선택합니다. 보안을 위해 최근 로그인 재인증을 요청할 수 있으며, 안내에 따라 재인증합니다.',
					'4. 삭제를 확인하면 서버가 삭제를 시작하고 완료 상태를 앱에서 확인할 수 있습니다.'
				]
			},
			{
				title: '웹에서 삭제 요청',
				body: [
					`앱에 접근할 수 없으면 ${site.email}로 이메일을 보내 삭제를 요청할 수 있습니다. 제목에 사이클 페어 계정 삭제 요청이라고 적어 주세요.`,
					'본문에는 가입에 사용한 이메일 주소, 사용 기기, 대략적인 계정 생성 시점만 적어 주세요. 생리일, 증상, 메모 같은 건강 기록과 초대코드는 이메일로 보내지 마세요.',
					'타인의 데이터 삭제를 막기 위해 가입 이메일로 확인 메일을 보내 본인 여부를 확인한 뒤 삭제를 처리하고 결과를 회신합니다.'
				]
			},
			{
				title: '삭제되는 데이터',
				body: [
					'생리 시작·종료일, 증상, 기분, 컨디션, 도움 선호, 메모 등 본인이 작성한 원본 기록이 삭제됩니다.',
					'Pair 관계와 파트너에게 제공되던 projection이 삭제되고 파트너의 서버 접근이 즉시 회수됩니다.',
					'초대코드, 알림 토큰, 구독 entitlement 문서 등 계정에 연결된 문서와 인증 계정이 삭제됩니다.',
					'기기에 저장된 민감 기록 캐시와 오프라인 변경분도 함께 지워집니다.'
				]
			},
			{
				title: '처리 시점과 보존 정보',
				body: [
					'삭제를 확인하면 서버가 데이터를 재귀적으로 삭제합니다. 삭제 요청 응답이 유실되어도 15분 주기 finalizer가 완료를 보장하며, 완료가 확인되기 전까지 기기에서는 기존 민감정보 접근이 차단됩니다.',
					'삭제 완료 확인은 기기에만 저장되는 1회성 receipt로 이루어지고 서버에는 receipt의 해시만 남습니다.',
					'계정 삭제 시에는 그 계정이 속했던 Pair의 해제 기록(pairTombstones)도 함께 삭제되므로 삭제 후 서버에 남는 Pair 식별 정보가 없습니다.',
					'백업에 잔존하는 데이터는 삭제 요청일로부터 30일 이내에 파기합니다.',
					'구독 결제 기록은 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령이 정한 기간 동안 보존한 뒤 삭제하거나 비식별화합니다.'
				]
			}
		],
		footerNote:
			'삭제 요청을 보내면 본인 확인과 처리 결과 안내에 필요한 최소한의 정보만 사용합니다.',
		otherLocaleHref: '/en/apps/cycle-pair/account-deletion/',
		otherLocaleLabel: 'View in English'
	},
	en: {
		title: 'Cycle Pair Account and Data Deletion',
		description:
			'How to permanently delete your Cycle Pair account and cycle and condition entries in the app or request deletion by email.',
		kicker: 'Cycle Pair Account Deletion',
		lastUpdated: 'August 9, 2026',
		intro:
			'Cycle Pair is provided by Seori Labs. Use either option below to permanently delete your account and associated data.',
		sections: [
			{
				title: 'Delete in the app',
				body: [
					'1. Open Cycle Pair.',
					'2. In Settings, find the privacy and account section.',
					'3. Select Delete Account. For security we may ask you to re-authenticate your recent sign-in; follow the prompt.',
					'4. Confirm deletion. The server starts deleting immediately and the app shows the completion status.'
				]
			},
			{
				title: 'Request deletion online',
				body: [
					`If you cannot access the app, email ${site.email} with the subject Cycle Pair Account Deletion Request.`,
					'Include only the email address you signed up with, your device type, and an approximate account creation date. Do not email health entries such as period dates, symptoms, or notes, or an invitation code.',
					'To prevent deletion of another person’s data, we send a confirmation message to the sign-up email address to verify you before processing, then reply with the outcome.'
				]
			},
			{
				title: 'Data that is deleted',
				body: [
					'Your original entries — period start and end dates, symptoms, mood, condition, support preferences, and notes — are deleted.',
					'The pair relationship and any partner projections are deleted, and the partner’s server access is revoked immediately.',
					'Documents linked to your account, including invitation codes, notification tokens, and subscription entitlement documents, are deleted along with the authentication account.',
					'Sensitive local caches and pending offline changes are cleared from the device.'
				]
			},
			{
				title: 'Timing and retained information',
				body: [
					'Once confirmed, the server deletes your data recursively. If the response is lost, a finalizer that runs every 15 minutes guarantees completion, and the device blocks access to previous sensitive data until completion is confirmed.',
					'Completion is confirmed with a single-use receipt stored only on the device; the server keeps only a hash of that receipt.',
					'Account deletion also removes the unlink records for pairs your account belonged to, so no pair-identifying information about you remains on the server afterwards.',
					'Data remaining in backups is destroyed within 30 days of the deletion request.',
					'Subscription transaction records are retained for the period required by applicable consumer-protection and e-commerce law, then deleted or de-identified.'
				]
			}
		],
		footerNote:
			'We use only the minimum information needed to verify a deletion request and communicate the outcome.',
		otherLocaleHref: '/apps/cycle-pair/account-deletion/',
		otherLocaleLabel: '한국어로 보기'
	}
};
