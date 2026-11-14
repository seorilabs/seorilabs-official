import type { LegalDocContent } from '$lib/legal/types';

export const parasitePrivacy: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		lastUpdated: '2026년 11월 14일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		footerNote: '문의와 개인정보 권리 요청: cs@seorilabs.com',
		title: 'My Little Parasite 개인정보 처리방침',
		kicker: 'My Little Parasite',
		description: 'Android 기기 저장과 배너 광고, iOS 선택형 계정과 구매, 위젯의 처리 안내입니다.',
		intro:
			'Seori Labs가 제공하는 My Little Parasite에 적용되는 방침입니다. Google Play 개발자 표시명은 Seori Apps이며 앱 식별자는 com.seorilabs.mylittleparasite입니다. 이 게임에는 이 제품별 방침이 공통 방침보다 우선합니다.',
		sections: [
			{
				title: '기기 저장과 위젯',
				body: [
					'My Little Parasite는 로그인 없이 오프라인으로 시작합니다. Android는 계정, 클라우드 복원과 서버 우편함을 제공하지 않으며 게임 기록을 Seori Platform이나 Firebase로 전송하지 않습니다. Android의 기록은 이 기기에만 저장되고 앱 삭제나 기기 변경 후 게임 자체에서 복원할 수 없습니다. 현재 개체, 이름, 도감, 돌봄 이력, 추억, 무료 재화, 꾸미기와 설정을 기기에 저장합니다. 위젯에는 마지막으로 저장된 개체 이미지와 이름, 상태, 갱신 시각과 앱 진입 주소를 같은 기기의 앱 공유 저장소로 전달합니다. 위젯은 게임 기록을 바꾸거나 자체적으로 서버에 접속하지 않습니다.'
				]
			},
			{
				title: 'iOS 선택형 계정과 클라우드 저장',
				body: [
					'iOS에서 Google 또는 Apple로 계속하기를 선택하면 해당 서비스가 발급한 로그인 증명을 검증하고, 앱 전용 가명 계정과 연결합니다. 로그인 제공자의 사용자 식별자는 해시로 연결하며 이름과 이메일을 게임 계정 정보로 저장하지 않습니다. 연결 후에는 기기 간 복원을 위해 개체 이름과 도감, 돌봄과 추억, 재화와 꾸미기 상태를 Google Firebase에 저장합니다. 같은 계정의 기록이 충돌하면 두 사본을 기기에 보관하고 사용할 기록을 직접 선택하게 합니다.'
				]
			},
			{
				title: '구매와 복원',
				body: [
					'Android 버전에는 유료 꾸미기 상품 판매가 없습니다. iOS 꾸미기 상품 결제는 Apple App Store가 처리합니다. Seori Labs는 카드번호나 계좌 정보를 받지 않습니다. 상품과 거래 식별자, 영수증 또는 구매 토큰, 가명 계정 참조를 사용해 서버에서 구매를 검증하고 구매 권리를 복원하거나 환불에 따른 권리 종료를 반영합니다. 미완료 구매 증명은 처리가 끝날 때까지 기기에 보관합니다. 구매 원장은 중복 지급 방지와 구매 복원, 환불 및 분쟁 대응을 위해 보관하며 계정 삭제 후에도 구매 처리 기록은 남습니다.'
				]
			},
			{
				title: '선택형 플레이 통계',
				body: [
					'Android에는 플레이 통계 보내기 기능이 없으며 Seori Platform으로 플레이 통계를 전송하지 않습니다. iOS의 플레이 통계 보내기는 기본적으로 꺼져 있습니다. 설정에서 켜면 첫 교감, 성장, 작별, 두 번째 개체 시작, 재회, 위젯 진입과 구매 복원 결과, 광고 요청·노출·실패 상태를 수집합니다. 무작위 설치 식별자, 이벤트 시각, 앱 버전, 언어와 실행 플랫폼을 Seori Platform과 Google Analytics에서 처리합니다. 개체 이름, 개별 추억 내용, 로그인 증명과 구매 토큰은 통계에 넣지 않습니다. 끄면 이후 수집과 전송을 멈추고 아직 보내지 않은 SDK 이벤트를 비웁니다. 전송된 자료의 삭제는 아래 연락처로 요청할 수 있습니다.'
				]
			},
			{
				title: '처리 목적과 서비스 제공자',
				body: [
					'iOS의 계정 복원, 클라우드 저장, 구매 확인과 서비스 운영에 Google Firebase, Google Cloud와 Seori Platform을 사용합니다. iOS의 Firebase App Check와 Apple App Attest는 앱의 진위와 부정 요청을 확인하기 위해 앱 및 기기 무결성 정보와 보안 토큰을 처리합니다. 온라인 통신에는 IP 주소 등의 통신 정보가 수반될 수 있습니다. 클라우드 게임 기록은 서울 리전에 저장하며, Google과 Apple은 관련 자료를 이용자 국가 밖에서도 처리할 수 있습니다. 통신은 HTTPS/TLS를 사용합니다. Android 버전에는 Google AdMob 하단 배너 광고 1개가 있습니다. iOS 버전에는 광고가 없습니다. Android 광고 SDK는 광고 제공과 부정 사용 방지, 진단을 위해 IP 주소, 기기 및 앱 정보, 식별자와 광고 상호작용 정보를 처리할 수 있습니다. 문맥형 광고를 요청하고 보수적인 동의 연령 설정과 G 등급 광고 제한을 적용합니다. 광고 관련 동의 상태를 확인한 후 광고를 요청하며, 필요한 개인정보 선택은 게임 설정의 광고 개인정보 선택에서 다시 열 수 있습니다. 선택형 플레이 통계 설정과 광고 SDK의 정보 처리는 별도입니다. 광고 제공자 정보는 https://policies.google.com/technologies/ads 에서 확인할 수 있습니다.'
				]
			},
			{
				title: '계정과 데이터 삭제',
				body: [
					'Android는 계정을 만들지 않습니다. Android 기기 기록은 운영체제의 앱 데이터 삭제 기능으로 지울 수 있습니다. iOS에서는 게임의 설정 → 계정과 저장 → 계정 삭제에서 계정과 클라우드 기록 삭제를 요청할 수 있습니다. 삭제 접수증을 기기에 저장하고 서버 처리 상태를 확인할 수 있습니다. 연결된 Apple 계정은 재인증 후 승인 철회를 진행합니다. 계정 삭제와 로그아웃은 현재 기기의 둥지와 도감을 지우지 않습니다. 기기 기록은 운영체제의 앱 데이터 삭제 기능으로 지울 수 있습니다. 앱을 지우는 것만으로 클라우드 계정이 삭제되지는 않습니다. 앱에 접근할 수 없어도 cs@seorilabs.com으로 삭제를 요청할 수 있으며, 별도의 삭제 안내 페이지도 제공합니다.'
				],
				id: 'account-deletion'
			},
			{
				title: '보관 기간과 문의',
				body: [
					'클라우드 게임 기록과 계정 연결 정보는 사용자가 삭제할 때까지 보관합니다. 원시 플레이 이벤트는 최대 400일 보관합니다. 구매 원장은 앞서 설명한 목적을 위해 계속 보관합니다. 문의 시 답변과 요청 처리에 필요한 이메일, 문의 내용과 첨부 자료를 처리하고 목적을 마치면 삭제합니다. 열람, 정정, 삭제와 처리 제한 요청은 cs@seorilabs.com으로 보내 주세요. 비밀번호나 인증 토큰을 보내지 마세요.'
				]
			},
			{
				title: '이용 연령과 변경',
				body: [
					'이 게임은 13세 이상을 대상으로 하며 어린이 대상 서비스가 아닙니다. 13세 미만 아동의 정보가 제공됐다고 생각하면 연락해 주세요. 현지 법률에서 더 높은 동의 연령을 요구하면 해당 기준을 따릅니다. 처리 방식이 바뀌면 이 페이지의 시행일과 내용을 갱신하고 필요한 동의를 다시 받습니다.'
				]
			}
		]
	},
	en: {
		lastUpdated: 'November 14, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		footerNote: 'Support and privacy requests: cs@seorilabs.com',
		title: 'My Little Parasite Privacy Policy',
		kicker: 'My Little Parasite',
		description:
			'How Android device saves and banner ads, iOS optional accounts and purchases, and widgets are handled.',
		intro:
			'This policy applies to My Little Parasite, provided by Seori Labs. The Google Play developer display name is Seori Apps and the app identifier is com.seorilabs.mylittleparasite. This product policy takes precedence over our general policy for this game.',
		sections: [
			{
				title: 'Device saves and widgets',
				body: [
					'My Little Parasite starts offline without an account. Android has no app accounts, cloud restoration or server inbox and does not send game records to Seori Platform or Firebase. Android records stay on this device and the game cannot restore them after uninstalling or changing devices. The current creature, its name, album, care history, memories, free currency, decorations and settings are saved on your device. Widgets use an image, name, status, update time and app link from the last saved creature, shared locally with the widget. Widgets do not change game progress or contact a server.'
				]
			},
			{
				title: 'Optional iOS accounts and cloud saves',
				body: [
					'On iOS, when you choose Continue with Google or Apple, we verify the provider’s sign-in proof and link it to a pseudonymous account for this app. Provider user identifiers are linked using hashes; we do not save your provider name or email as game account information. After linking, creature names, album records, care and memories, currency and decoration state are stored in Google Firebase for recovery across devices. Conflicting saves are kept as two local copies so you can choose which home to continue.'
				]
			},
			{
				title: 'Purchases and restoration',
				body: [
					'The Android version does not sell cosmetic packs. The Apple App Store processes iOS cosmetic purchases. Seori Labs does not receive card numbers or bank account details. Product and transaction identifiers, receipts or purchase tokens, and pseudonymous account references are used to verify purchases on our server, restore access and apply confirmed revocations. Unfinished purchase proofs stay on the device until processing completes. Purchase ledger records are retained to prevent duplicate fulfillment and support restoration, refunds and disputes; purchase processing records remain after account deletion.'
				]
			},
			{
				title: 'Optional play statistics',
				body: [
					'Android does not offer Share play statistics or send play statistics to Seori Platform. On iOS, Share play statistics is off by default. If enabled in Settings, we collect first interaction, growth, farewell, second-creature start, reunion, widget entry, purchase restoration outcomes and ad request, impression or failure states. Seori Platform and Google Analytics process a random installation identifier, event time, app version, language and platform. Creature names, individual memory contents, sign-in proofs and purchase tokens are excluded from analytics. Turning the setting off stops future collection and transmission and clears unsent SDK events. You can request deletion of previously sent information through the contact below.'
				]
			},
			{
				title: 'Purposes and service providers',
				body: [
					'On iOS, we use Google Firebase, Google Cloud and Seori Platform for account recovery, cloud storage, purchase verification and operation. Firebase App Check and Apple App Attest on iOS process app and device integrity information and security tokens to verify the app and prevent abuse. Online connections may involve network information such as IP addresses. Cloud game records are stored in the Seoul region; Google and Apple may process related information outside your country. Connections use HTTPS/TLS. Android includes one Google AdMob banner at the bottom of the screen; iOS has no ads. The Android advertising SDK may process IP addresses, device and app information, identifiers and ad interactions to deliver ads, prevent fraud and diagnose problems. We request contextual ads with conservative consent-age treatment and a G-rated ad-content limit. Ads are requested after checking consent status. Required privacy options can be reopened through Ad privacy choices in Settings. Advertising SDK processing is separate from the optional play-statistics setting. See https://policies.google.com/technologies/ads for provider information.'
				]
			},
			{
				title: 'Account and data deletion',
				body: [
					'Android does not create app accounts. Remove Android device records using your operating system’s app-data controls. On iOS, use Settings → Account and save → Delete account to request deletion of your account and cloud records. A deletion receipt is stored on the device and lets you check server processing. A linked Apple account may require reauthentication to revoke its authorization. Account deletion and sign-out keep the current device’s home and album. Local records can be removed using your operating system’s app-data controls. Uninstalling the app alone does not delete the cloud account. If you cannot access the app, request deletion at cs@seorilabs.com; a separate deletion guide is also available.'
				],
				id: 'account-deletion'
			},
			{
				title: 'Retention and requests',
				body: [
					'Cloud game records and account links are kept until you request deletion. Raw play events are retained for up to 400 days. Purchase ledger records remain for the purposes described above. For support, we process the email address, message and attachments needed to resolve the request and remove them when no longer needed for that purpose. Send access, correction, deletion or restriction requests to cs@seorilabs.com. Do not send passwords or authentication tokens.'
				]
			},
			{
				title: 'Age and changes',
				body: [
					'The game is intended for people aged 13 and older and is not directed to children. Contact us if you believe a child under 13 has provided information. Where local law requires a higher age for consent, that requirement applies. Changes to processing will be reflected in this page and its effective date, with renewed consent where required.'
				]
			}
		]
	}
};

export const parasiteDeletion: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		lastUpdated: '2026년 11월 14일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		footerNote: '문의와 개인정보 권리 요청: cs@seorilabs.com',
		title: 'My Little Parasite 계정과 데이터 삭제',
		description: 'Android 기기 기록 삭제와 iOS 계정 삭제 요청 안내입니다.',
		kicker: 'My Little Parasite',
		intro:
			'Seori Labs의 My Little Parasite(com.seorilabs.mylittleparasite, Google Play 개발자 Seori Apps) iOS 계정과 클라우드 기록 삭제를 요청할 수 있습니다. Android는 계정과 클라우드 저장을 제공하지 않습니다.',
		sections: [
			{
				title: '기기 기록과 iOS 계정 삭제',
				body: [
					'Android는 계정을 만들지 않습니다. Android 기기 기록은 운영체제의 앱 데이터 삭제 기능으로 지울 수 있습니다. iOS에서는 게임의 설정 → 계정과 저장 → 계정 삭제에서 계정과 클라우드 기록 삭제를 요청할 수 있습니다. 삭제 접수증을 기기에 저장하고 서버 처리 상태를 확인할 수 있습니다. 연결된 Apple 계정은 재인증 후 승인 철회를 진행합니다. 계정 삭제와 로그아웃은 현재 기기의 둥지와 도감을 지우지 않습니다. 기기 기록은 운영체제의 앱 데이터 삭제 기능으로 지울 수 있습니다. 앱을 지우는 것만으로 클라우드 계정이 삭제되지는 않습니다. 앱에 접근할 수 없어도 cs@seorilabs.com으로 삭제를 요청할 수 있으며, 별도의 삭제 안내 페이지도 제공합니다.'
				]
			},
			{
				title: '앱에 접근할 수 없을 때',
				body: [
					'아래 이메일 버튼으로 cs@seorilabs.com에 “My Little Parasite 계정 삭제 요청”을 보내 주세요. 가능하면 앱의 지원코드와 삭제할 자료의 범위를 적어 주세요. 비밀번호나 로그인 토큰은 필요하지 않습니다. 요청 대상을 확인하기 위해 최소한의 추가 정보가 필요할 수 있습니다.'
				]
			},
			{
				title: '삭제 범위와 남는 기록',
				body: [
					'iOS 계정을 삭제하면 가명 계정과 Google·Apple 계정 연결, 서버의 현재 개체와 도감, 돌봄·추억, 무료 재화·꾸미기 진행 기록을 삭제합니다. 삭제 요청은 접수 후 서버에서 처리하며 앱에서 진행 상태를 확인할 수 있습니다. 복원을 막기 위한 삭제 표시와 구매·환불·중복 지급 방지 원장은 남습니다. 기기에 남은 기록이나 이미 전송된 선택형 통계 삭제도 별도로 요청할 수 있습니다.'
				]
			}
		]
	},
	en: {
		lastUpdated: 'November 14, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		footerNote: 'Support and privacy requests: cs@seorilabs.com',
		title: 'My Little Parasite Account and Data Deletion',
		description: 'Remove Android device records or request iOS account deletion.',
		kicker: 'My Little Parasite',
		intro:
			'Request deletion of your iOS My Little Parasite account and cloud records. Android has no app accounts or cloud saves. The app is provided by Seori Labs, listed on Google Play under Seori Apps, with identifier com.seorilabs.mylittleparasite.',
		sections: [
			{
				title: 'Device records and iOS account deletion',
				body: [
					'Android does not create app accounts. Remove Android device records using your operating system’s app-data controls. On iOS, use Settings → Account and save → Delete account to request deletion of your account and cloud records. A deletion receipt is stored on the device and lets you check server processing. A linked Apple account may require reauthentication to revoke its authorization. Account deletion and sign-out keep the current device’s home and album. Local records can be removed using your operating system’s app-data controls. Uninstalling the app alone does not delete the cloud account. If you cannot access the app, request deletion at cs@seorilabs.com; a separate deletion guide is also available.'
				]
			},
			{
				title: 'If you cannot access the app',
				body: [
					'Use the email button below to send a “My Little Parasite account deletion request” to cs@seorilabs.com. Include the in-app support code and the data you want removed if available. Passwords and sign-in tokens are not needed. We may request the minimum additional information needed to verify the target account.'
				]
			},
			{
				title: 'What is deleted and retained',
				body: [
					'For iOS account deletion, we delete the pseudonymous account, Google/Apple account links and server records for the current creature, album, care, memories, free currency and decoration progress. Server processing follows acceptance, and its status is available in the app. A deletion marker and purchase, refund and duplicate-fulfillment ledgers remain. Local device records and previously transmitted optional statistics have separate removal paths described in the privacy policy.'
				]
			}
		]
	}
};

export const parasiteSupport: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		lastUpdated: '2026년 11월 14일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		footerNote: '문의와 개인정보 권리 요청: cs@seorilabs.com',
		title: 'My Little Parasite 이용 안내',
		description: '작은 생명과 일주일을 함께 보내는 픽셀 교감 게임의 이용 안내입니다.',
		kicker: 'My Little Parasite',
		intro:
			'화면 틈에서 만난 작은 생명과 교감하고, 작별 뒤에도 도감에서 다시 초대하세요. Google Play와 App Store 출시를 준비하고 있습니다.',
		sections: [
			{
				title: '기록 복원',
				body: [
					'Android 기록은 이 기기에만 저장돼 앱 삭제나 기기 변경 후에는 복원할 수 없습니다. iOS에서는 설정의 계정과 저장에서 처음 연결했던 Google 또는 Apple 계정으로 계속하세요. 서로 다른 둥지가 있으면 기록을 비교하고 하나를 고를 수 있습니다. 로그아웃은 이 기기의 도감을 지우지 않습니다.'
				]
			},
			{
				title: '구매 복원',
				body: [
					'Android에는 유료 판매나 구매 복원이 없습니다. iOS에서는 상점의 구매 복원을 이용하세요. 꾸미기 상품은 서버에서 검증된 후 사용할 수 있습니다. 마켓 승인 대기 중에는 지급되지 않으며, 통신이 끊겼다면 다시 연결한 뒤 복원을 시도하세요.'
				]
			},
			{
				title: '문의하기',
				body: [
					'cs@seorilabs.com으로 앱 버전과 발생한 일을 보내 주세요. iOS에서는 가능하면 지원코드도 적어 주세요. 비밀번호와 영수증 원문, 인증 토큰은 보내지 마세요.'
				]
			}
		]
	},
	en: {
		lastUpdated: 'November 14, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		footerNote: 'Support and privacy requests: cs@seorilabs.com',
		title: 'My Little Parasite Support',
		description: 'Help for a pixel companion game about sharing a week with a little life.',
		kicker: 'My Little Parasite',
		intro:
			'Meet a little life in the seams of your screen, care for it, and invite it back from your album after saying goodbye. Google Play and App Store releases are in preparation.',
		sections: [
			{
				title: 'Recover your home',
				body: [
					'Android records stay on this device and cannot be restored after uninstalling or changing devices. On iOS, continue with the Google or Apple account you originally linked under Account and save in Settings. If two homes exist, compare them and choose one. Signing out keeps the album on this device.'
				]
			},
			{
				title: 'Restore purchases',
				body: [
					'Android has no paid sales or purchase restoration. On iOS, use Restore purchases in the shop. Cosmetic packs become available after server verification. Pending store approval does not grant a pack; reconnect and retry restoration if the connection failed.'
				]
			},
			{
				title: 'Contact us',
				body: [
					'Email cs@seorilabs.com with the app version and what happened. On iOS, include your support code if available. Do not send passwords, raw receipts or authentication tokens.'
				]
			}
		]
	}
};
