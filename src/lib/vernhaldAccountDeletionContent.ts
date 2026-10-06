import { site } from '$lib/content';
import type { LegalPageContent } from '$lib/legalContent';

export const vernhaldAccountDeletionContent: Record<'ko' | 'en', LegalPageContent> = {
	ko: {
		title: '베른할드 연대기 리그 데이터 삭제',
		description:
			'베른할드 연대기의 익명 리그 식별자와 서버에 저장된 데이터를 삭제 요청하는 방법입니다.',
		kicker: 'Vernhald Chronicles Data Deletion',
		lastUpdated: '2026년 10월 7일',
		intro:
			'베른할드 연대기는 Seori Labs가 제공하며, 선택형 리그는 익명 인증 식별자로 덱과 경기 기록을 관리합니다.',
		sections: [
			{
				title: '웹에서 삭제 요청',
				body: [
					`${site.email}로 제목에 베른할드 연대기 리그 데이터 삭제 요청이라고 적어 보내 주세요.`,
					'본문에 사용 기기, 최근 리그 참가 시점, 표시된 평점 등 본인 확인에 필요한 최소 정보만 적어 주세요. 비밀번호, 인증 토큰, 구매 토큰이나 결제 영수증은 보내지 마세요.',
					'타인의 데이터 삭제를 막기 위해 최소한의 본인 확인 절차를 안내하고, 확인 후 삭제 결과를 회신합니다.'
				]
			},
			{
				title: '삭제 요청 범위',
				body: [
					'익명 인증 식별자와 연결된 이용자 문서, 준비판·제출 기록, 덱·등록·참가 기록, 구매 권한 연결과 개인 리그 기록을 삭제하도록 요청할 수 있습니다. 부정 이용 방지와 법적 보관 의무에 필요한 최소 거래 원장은 해당 필요 기간 동안 별도로 보관할 수 있습니다. 공동 경기 기록과 재생 자료에 포함된 본인 정보도 삭제하거나 이용자 연결을 제거합니다. 상대 이용자의 기록은 삭제하지 않습니다.',
					'리그 참가 해제와 7일 참가 기간 만료는 새 경기 편성을 중단할 뿐 데이터를 삭제하지 않습니다. 앱 삭제도 서버 데이터 삭제 요청을 대신하지 않습니다.',
					'기기 내 도전·무한모드 진행과 설정은 앱을 삭제하면 지워집니다. Google Play·App Store의 구매 내역과 각 제공자가 별도 처리하는 광고 데이터는 각 제공자의 삭제 절차를 따릅니다.'
				]
			}
		],
		footerNote: '삭제 요청의 본인 확인과 처리 결과 안내에 필요한 최소한의 정보만 사용합니다.'
	},
	en: {
		title: 'Vernhald Chronicles League Data Deletion',
		description:
			'How to request deletion of your anonymous league identifier and server-stored data.',
		kicker: 'Vernhald Chronicles Data Deletion',
		lastUpdated: '7 October 2026',
		intro:
			'Vernhald Chronicles is provided by Seori Labs. Its optional league uses an anonymous authentication identifier to manage decks and match records.',
		sections: [
			{
				title: 'Request deletion online',
				body: [
					`Email ${site.email} with the subject Vernhald Chronicles League Data Deletion Request.`,
					'Include only minimal verification details such as your device, approximate date of recent participation, and displayed rating. Do not send passwords, authentication tokens, purchase tokens or payment receipts.',
					'We will guide you through minimal ownership verification to protect other players and reply after processing your request.'
				]
			},
			{
				title: 'Deletion scope',
				body: [
					'You can request deletion of your anonymous authentication identity and linked user documents, preparation and submission records, decks, registration and participation records, entitlement links and personal league records. Minimal transaction records needed for fraud prevention or legal retention may be retained separately for the required period. Your information in shared match records and replays will be deleted or disconnected from your identity. Other players’ records are not deleted.',
					'Leaving the league or expiry of the seven-day participation period stops new matchmaking but does not delete data. Uninstalling the app does not replace a request to delete server data.',
					'On-device Challenge and Endless saves and settings are deleted when you uninstall. Google Play and App Store purchase history and advertising data processed separately by their providers follow the respective provider’s deletion process.'
				]
			}
		],
		footerNote:
			'We use only the minimum information needed to verify ownership and communicate the result.'
	}
};
