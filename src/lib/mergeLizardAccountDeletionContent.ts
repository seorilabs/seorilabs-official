import { site } from '$lib/content';
import type { LegalDocContent } from '$lib/legal/types';

/**
 * 앰버 리자드(merge-lizard) 계정과 데이터 삭제 안내. Google Play 데이터 삭제 URL로 쓴다.
 * 근거: merge-lizard 승인 설계 docs/design/2026-11-20-launch-prep/design.md(LP-D3, DEC-037)와
 * platform main e317e81의 계정 삭제 작업자. 작업자는 Firebase 인증 계정과 광고 기록을 먼저 지우고,
 * 신원 삭제 4일 뒤 지표 사본과 계정 연결을 지워 마무리하며, 해시 접수 기록은 완료 30일 뒤 정리한다.
 * IAP 원장(주문, 권리, 이용권 수령, 우편함)은 지우지 않고 계정 연결만 끊긴다(불변식 5).
 *
 * 확률 정보와 같이 출시 전 제품이라 제품 원장(registry.ts)에 넣지 않고 경로를 직접 지정한다.
 */
export const mergeLizardAccountDeletionPaths = [
	{ key: 'ko' as const, path: '/apps/merge-lizard/account-deletion/' },
	{ key: 'en' as const, path: '/en/apps/merge-lizard/account-deletion/' }
];

/** 이 페이지 아래 이메일 링크. 제목을 채워 두어 요청을 바로 구분한다. */
export const mergeLizardAccountDeletionMail: Record<'ko' | 'en', string> = {
	ko: `mailto:${site.email}?subject=${encodeURIComponent('앰버 리자드 계정 삭제 요청')}`,
	en: `mailto:${site.email}?subject=${encodeURIComponent('Amber Lizards account deletion request')}`
};

export const mergeLizardAccountDeletionContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '앰버 리자드 계정과 데이터 삭제',
		description:
			'앰버 리자드(Amber Lizards)의 게스트 계정과 서버 데이터를 앱에서, 또는 앱 없이 이메일로 삭제하는 방법과 지워지는 데이터, 남는 기록, 처리 기간을 안내합니다.',
		kicker: 'Amber Lizards Account Deletion',
		lastUpdated: '2026년 11월 20일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'「앰버 리자드」(Amber Lizards, com.seorilabs.mergelizard)는 Seori Labs가 운영합니다. 앱을 처음 실행하면 이름이나 이메일 없이 게스트 계정이 자동으로 만들어지고, 구매 기록, 광고 보상, 게임 행동 지표가 이 계정에 연결됩니다. 아래 방법으로 이 계정과 서버 데이터의 삭제를 요청할 수 있으며, 앱을 다시 설치하지 않아도 이메일로 요청할 수 있습니다.',
		sections: [
			{
				id: 'in-app',
				title: '앱에서 삭제하기',
				body: [
					'앱의 설정에서 “계정과 서버 데이터 삭제”를 누르고, 지워지는 범위를 확인한 뒤 한 번 더 확인하면 서버에 삭제가 접수됩니다. 접수되면 이 기기의 게임 저장도 초기화되고, 다음부터는 새 게스트 계정으로 처음부터 시작합니다.',
					'네트워크 오류 등으로 접수하지 못하면 기기의 데이터는 지우지 않고 그대로 두며, 다시 시도할 수 있습니다.',
					'이 메뉴는 앱 업데이트로 추가됩니다. 설정에 이 메뉴가 없는 버전을 쓰고 있거나 앱을 이미 지웠다면 아래 이메일로 요청해 주세요.'
				]
			},
			{
				id: 'email',
				title: '앱 없이 이메일로 요청하기',
				body: [
					`${site.email}로 제목에 “앰버 리자드 계정 삭제 요청”이라고 적어 보내 주세요. 이 페이지 아래의 이메일 링크를 누르면 제목이 채워집니다.`,
					'본문에는 사용한 기기 종류(Android 또는 iPhone)를 적어 주세요. 앱 설정에서 지원 코드를 볼 수 있었다면 그 코드를 함께 보내 주시면 계정을 빨리 찾을 수 있습니다. 앱을 지우기 전이라면 지원 코드를 먼저 적어 두세요.',
					'게스트 계정은 이름이나 이메일과 연결되어 있지 않아 지원 코드가 없으면 계정을 찾지 못할 수 있습니다. 이 경우에도 문의하시면 가능한 확인 방법을 안내합니다. 다른 사람의 데이터를 지우지 않도록 대상 계정을 확인한 뒤에만 삭제합니다.',
					'비밀번호, 결제 카드 정보, 확인에 필요하지 않은 개인정보는 보내지 마세요.'
				]
			},
			{
				title: '지워지는 데이터',
				body: [
					'게스트 계정의 Firebase 인증 계정, 가명 사용자 ID와 Firebase 사용자 ID의 연결, 로그인 세션을 지웁니다. 삭제가 끝나면 지원 코드는 더 이상 어떤 계정도 가리키지 않습니다.',
					'광고 보상 요청과 확인, 지급 기록, 하루 광고 이용 횟수 기록을 지웁니다.',
					'게임 행동 지표 이벤트와, 구매와 관련 없는 서버 운영 기록을 지웁니다.',
					'앱에서 삭제한 경우 이 기기의 게임 진행, 재화, 아이템과 설정도 초기화됩니다. 지급된 재화와 진행은 되돌릴 수 없습니다.'
				]
			},
			{
				title: '남는 기록',
				body: [
					'유료 구매의 거래 기록(구매 원장)과 구매로 얻은 권리, 30일 호박 수령 기록, 우편함 기록은 결제 확인, 환불 처리, 회계와 분쟁 대응을 위해 관련 법령이 정한 보관 기간 동안 남깁니다. 삭제 뒤에는 이 기록을 이용자의 게스트 계정과 이어 주던 연결이 지워지며, 이 기록은 결제 확인과 법적 의무 외에는 쓰지 않습니다.',
					'삭제 처리 상태를 확인하고 같은 요청이 중복 처리되지 않게 하는 해시 접수 기록은 삭제 완료 후 30일 동안 보관한 뒤 지웁니다.',
					'이메일로 요청한 경우 기기의 게임 저장은 서버 삭제와 별개입니다. 앱 설정의 “데이터 초기화”나 앱 삭제로 지울 수 있습니다.',
					'Google Play와 Apple이 보관하는 결제 내역, Google이 광고를 위해 따로 처리한 데이터는 각 회사의 정책과 삭제 절차를 따릅니다.'
				]
			},
			{
				title: '처리 기간',
				body: [
					'앱에서 접수하면 서버가 바로 처리를 시작합니다. 인증 계정과 광고 보상 기록을 먼저 지우고, 늦게 도착하는 기록까지 지우기 위해 4일 뒤 행동 지표와 계정 연결을 지워 마무리하므로 보통 4일 남짓 걸립니다. 서비스 오류가 있으면 더 걸릴 수 있으며, 앱을 닫거나 지워도 접수된 처리는 계속됩니다.',
					'이메일 요청은 대상 계정을 확인한 뒤 위 데이터를 지우고, 관련 법령이 정한 기한 안에 처리 결과를 이메일로 알려 드립니다.',
					'삭제는 되돌릴 수 없습니다. 계정은 그대로 두고 지표 전송만 멈추려면 설정의 “게임 행동 지표”를 끄세요.'
				]
			}
		],
		footerNote:
			'이 안내는 앰버 리자드에만 적용됩니다. 계정 삭제 요청과 개인정보 문의는 아래 이메일로 보내 주세요.'
	},
	en: {
		title: 'Amber Lizards Account and Data Deletion',
		description:
			'How to delete your Amber Lizards guest account and server data in the app or by email without the app, what is deleted, what is kept, and how long it takes.',
		kicker: 'Amber Lizards Account Deletion',
		lastUpdated: 'November 20, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'Amber Lizards (앰버 리자드, com.seorilabs.mergelizard) is operated by Seori Labs. The first time you open the app, a guest account is created automatically without a name or email address, and purchase records, ad rewards, and gameplay analytics are linked to it. You can request deletion of this account and its server data as described below, including by email without reinstalling the app.',
		sections: [
			{
				id: 'in-app',
				title: 'Delete in the app',
				body: [
					'Open the app’s Settings, choose the option to delete your account and server data, review what will be deleted, and confirm a second time. Once the server accepts the request, the game save on this device is also reset, and the app starts over with a new guest account.',
					'If the request cannot be sent, for example because of a network error, the data on your device is kept and you can try again.',
					'This option is added in an app update. If your version does not show it in Settings, or you have already uninstalled the app, request deletion by email as described below.'
				]
			},
			{
				id: 'email',
				title: 'Request deletion by email without the app',
				body: [
					`Email ${site.email} with the subject “Amber Lizards account deletion request.” The email link at the bottom of this page fills in the subject for you.`,
					'Tell us which kind of device you used (Android or iPhone). If you could see a support code in the app’s Settings, include it so we can find your account quickly. If you still have the app, write down the support code before uninstalling it.',
					'Guest accounts are not linked to a name or email address, so we may not be able to find your account without a support code. Contact us anyway and we will explain any verification options available. To avoid deleting someone else’s data, we delete only after confirming the target account.',
					'Do not send passwords, payment card details, or personal information that is not needed for verification.'
				]
			},
			{
				title: 'Data that is deleted',
				body: [
					'Your guest account’s Firebase authentication account, the link between your pseudonymous user ID and your Firebase user ID, and your sign-in sessions are deleted. After deletion, your support code no longer points to any account.',
					'Ad reward requests, verification and grant records, and daily ad count records are deleted.',
					'Gameplay analytics events and server operation records that are not related to purchases are deleted.',
					'If you delete in the app, the game progress, currency, items, and settings on this device are also reset. Granted currency and progress cannot be recovered.'
				]
			},
			{
				title: 'Records that are kept',
				body: [
					'Transaction records for paid purchases (the purchase ledger), the entitlements you bought, 30-Day Amber claim records, and inbox records are kept for the retention period required by applicable law, to confirm payments, handle refunds, and support accounting and disputes. After deletion, the link between these records and your guest account is removed, and they are used only for payment confirmation and legal obligations.',
					'A hashed request record, used to check the deletion status and prevent duplicate processing, is kept for 30 days after deletion is complete and then deleted.',
					'If you request deletion by email, the game save on your device is separate from server deletion. You can remove it with “Reset all data” in the app’s Settings or by uninstalling the app.',
					'Payment history kept by Google Play and Apple, and data Google processes separately for advertising, follow each company’s own policies and deletion processes.'
				]
			},
			{
				title: 'Timing',
				body: [
					'When you request deletion in the app, the server starts processing immediately. It deletes the authentication account and ad reward records first, then, to catch records that arrive late, deletes gameplay analytics and the account link four days later, so deletion usually takes a little over four days. It can take longer if a service fails, and an accepted request continues even if you close or uninstall the app.',
					'For email requests, we delete the data above after confirming the target account and email you the result within the period required by applicable law.',
					'Deletion cannot be undone. To keep your account and only stop sending analytics, turn off “Gameplay analytics” in Settings.'
				]
			}
		],
		footerNote:
			'This page applies to Amber Lizards only. Send account deletion requests and privacy questions to the email address below.'
	}
};
