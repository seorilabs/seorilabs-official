import { site, type Locale } from '$lib/content';
import type { LegalPageContent } from '$lib/legalContent';

export const babycareAccountDeletionContent: Record<Locale, LegalPageContent> = {
	ko: {
		title: '함께봄 계정 및 데이터 삭제',
		description:
			'서리랩스 함께봄 앱의 계정과 돌봄 데이터를 앱 안에서 즉시 삭제하거나 이메일로 삭제 요청하는 방법을 안내합니다.',
		kicker: 'BabyNest Account Deletion',
		lastUpdated: '2026년 8월 9일',
		intro:
			'함께봄: 수유, 기저귀, 아기돌봄 기록 어플은 Seori Labs가 제공합니다. 아래 방법으로 계정과 연결된 데이터를 영구 삭제할 수 있습니다.',
		sections: [
			{
				title: '앱에서 즉시 삭제',
				body: [
					'1. 함께봄 앱을 열고 현재 돌봄 그룹에 들어갑니다.',
					'2. 하단의 더보기에서 데이터와 개인정보 섹션을 찾습니다.',
					'3. 계정 삭제를 누르고 소유자 또는 구성원에게 표시되는 삭제 범위를 확인합니다.',
					'4. 계정 삭제를 다시 눌러 확인하면 서버 데이터와 인증 계정이 삭제되고 기기의 민감한 캐시도 지워집니다.'
				]
			},
			{
				title: '웹에서 삭제 요청',
				body: [
					`앱에 접근할 수 없으면 ${site.email}로 이메일을 보내 삭제를 요청할 수 있습니다. 제목에 함께봄 계정 삭제 요청이라고 적어 주세요.`,
					'본문에는 함께봄 앱, 사용 기기, 대략적인 계정 생성 시점만 적어 주세요. 아기 이름, 생년월일, 돌봄 기록, 초대 코드는 이메일로 보내지 마세요.',
					'타인의 데이터 삭제를 막기 위해 최소한의 계정 확인 절차를 안내하며, 확인이 끝나면 삭제 결과를 회신합니다.'
				]
			},
			{
				title: '삭제되는 데이터',
				body: [
					'모든 사용자: Firebase 인증 계정, Seori Labs Platform 계정 매핑, 사용자 문서, 초대·감사·요청 제한 식별자, 기기의 공동 돌봄 캐시가 삭제됩니다.',
					'돌봄 그룹 소유자: 그룹, 아기 정보, 모든 구성원 정보, 돌봄 기록, 변경 영수증, 진행 중 수면 상태, 그룹 파일이 함께 삭제됩니다. 다른 구성원도 이 그룹에 더 이상 접근할 수 없습니다.',
					'그룹 구성원: 본인의 멤버십과 본인이 작성한 돌봄 기록 및 관련 변경 식별자가 삭제됩니다. 다른 구성원의 계정과 그들이 작성한 기록은 유지됩니다.'
				]
			},
			{
				title: '처리 시점과 보존 정보',
				body: [
					'앱 안에서 확인한 삭제는 온라인 상태에서 즉시 처리되며 복구할 수 없습니다. 네트워크 응답이 유실되면 앱이 다음 실행에서 삭제를 다시 확인하고 완료할 때까지 기존 캐시를 열지 않습니다.',
					'삭제된 그룹 식별자의 재사용을 막기 위해 무작위 그룹 ID, 삭제 시각, 삭제 사유만 담은 tombstone을 영구 보존합니다. 이 tombstone에는 계정 ID, 아기 정보, 돌봄 기록이 포함되지 않습니다.',
					'함께봄은 선택형 비개인화 보상형 광고를 제공하지만 인앱결제는 사용하지 않습니다. 돌봄 기록 원문을 포함하지 않는 제품 분석·보안 로그와 광고 측정 데이터는 Google과 Seori Labs의 표준 보관 기간과 법적 의무에 따라 삭제되거나 비식별화됩니다. 법령상 별도 보존 의무가 생기는 거래 기록이 없는 현재 서비스에서는 위 tombstone 외의 운영 계정·돌봄 데이터를 삭제 후 보존하지 않습니다.'
				]
			}
		],
		footerNote:
			'삭제 요청을 보내면 본인 확인과 처리 결과 안내에 필요한 최소한의 정보만 사용합니다.',
		otherLocaleHref: '/en/apps/babycare/account-deletion/',
		otherLocaleLabel: 'View in English'
	},
	en: {
		title: 'BabyNest Account and Data Deletion',
		description:
			'How to permanently delete your BabyNest account and care data in the app or request deletion by email.',
		kicker: 'BabyNest Account Deletion',
		lastUpdated: 'August 9, 2026',
		intro:
			'BabyNest: Shared Baby Care Log is provided by Seori Labs. Use either option below to permanently delete your account and associated data.',
		sections: [
			{
				title: 'Delete immediately in the app',
				body: [
					'1. Open BabyNest and enter your current care group.',
					'2. Open More and find the Data and Privacy section.',
					'3. Select Delete Account and review the owner- or member-specific consequences.',
					'4. Confirm Delete Account. Server data and the authentication account are deleted, and sensitive local cache is cleared from the device.'
				]
			},
			{
				title: 'Request deletion online',
				body: [
					`If you cannot access the app, email ${site.email} with the subject BabyNest Account Deletion Request.`,
					'Include only the BabyNest app name, your device type, and an approximate account creation date. Do not email a baby name, birth date, care logs, or an invitation code.',
					'We will provide a minimal account-verification process to prevent deletion of another person’s data and will reply when processing is complete.'
				]
			},
			{
				title: 'Data that is deleted',
				body: [
					'All users: the Firebase authentication account, Seori Labs Platform identity mapping, user documents, invitation, audit and request-limit identifiers, and shared-care cache on the device are deleted.',
					'Care-group owners: the group, baby profile, all memberships, care logs, mutation receipts, active sleep state, and group files are deleted. Other members can no longer access the group.',
					'Group members: your membership, care logs you authored, and related mutation identifiers are deleted. Other members’ accounts and records remain.'
				]
			},
			{
				title: 'Timing and retained information',
				body: [
					'In-app deletion is processed immediately while online and cannot be undone. If the network response is lost, the app verifies and retries deletion on the next launch without reopening the previous cache.',
					'To prevent reuse of a deleted group identifier, we retain a tombstone containing only a random group ID, deletion time, and deletion reason. It is retained permanently and contains no account ID, baby data, or care logs.',
					'BabyNest offers optional non-personalized rewarded advertising but has no in-app purchases. Product analytics, security logs, and advertising measurement data do not contain original care records and are deleted or de-identified under Google and Seori Labs standard retention periods and legal obligations. Under the current service, no operational account or care data other than the non-identifying tombstone is retained after deletion because there are no transaction records subject to a separate legal retention duty.'
				]
			}
		],
		footerNote:
			'We use only the minimum information needed to verify a deletion request and communicate the outcome.',
		otherLocaleHref: '/apps/babycare/account-deletion/',
		otherLocaleLabel: '한국어로 보기'
	}
};
