import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const lucidReversiPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '루시드 리버시 개인정보 처리방침',
		description: '루시드 리버시의 게임 데이터, 분석 및 광고 처리에 관한 개인정보 처리방침입니다.',
		kicker: 'Lucid Reversi Privacy Policy',
		lastUpdated: '2026년 11월 15일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「루시드 리버시」(패키지명 및 번들 ID com.etlegame.reversi, 이하 “앱”)에 적용됩니다. 앱의 실제 데이터 처리와 스토어 표시가 공통 방침과 다른 경우 이 제품별 방침이 우선합니다.',
		sections: [
			{
				title: '앱이 처리하는 데이터',
				body: [
					'대국 진행 상황, 난이도, 보드와 돌 테마, 소리·음악·진동, 언어 같은 설정은 이용자의 기기에만 저장되며 Seori Labs 서버로 전송되지 않습니다. 앱을 삭제하면 기기에 저장된 진행 상황도 삭제됩니다.',
					'앱에는 계정, 로그인, 회원가입이 없으며 대국을 위해 이름이나 이메일 주소를 입력할 필요가 없습니다.',
					'설정의 지원 이메일을 누르면 이용자가 선택한 메일 앱이 열립니다. 문의를 직접 보내는 경우 Seori Labs는 메일에 포함된 발신자 표시 이름, 회신용 이메일 주소, 제목과 본문을 받아 문의 처리와 답변에 사용합니다. 문의는 선택 사항이며 문의하지 않아도 게임을 이용할 수 있습니다. 문의 정보는 광고나 분석 식별자와 연결하지 않습니다.',
					'서비스 품질을 확인하기 위해 Google 애널리틱스 4(Measurement Protocol)로 새 대국 시작, 대국 종료, 난이도 변경과 같은 게임 내 이벤트와, 앱 설치본에 연결된 무작위 분석 식별자를 전송합니다. 이 식별자는 이름이나 연락처와 연결되지 않으며 다른 앱을 가로지르는 추적에 사용하지 않습니다.',
					'앱은 Google AdMob 전면 광고를 비맞춤형으로 요청합니다. 광고 제공 과정에서 Google은 IP 주소에서 추정하는 대략적인 위치, 앱 실행·광고 노출·클릭 같은 상호작용, 앱과 광고 SDK의 성능·진단 정보, 기기 및 광고 식별자를 광고 제공·분석·부정행위 방지 목적으로 수집하고 공유할 수 있습니다. 비맞춤형 광고도 이 데이터 처리가 발생할 수 있으며 Google의 정책이 적용됩니다.',
					'Android에서는 광고 표시와 광고 부정 클릭 방지를 위해 Google 광고 ID(AAID)가 사용됩니다. 이용자는 기기 설정에서 광고 ID를 재설정하거나 삭제할 수 있습니다. iOS에서는 앱 추적 투명성(ATT) 권한을 요청하지 않으며 IDFA를 사용하지 않습니다.',
					'앱은 인앱 구매나 결제 기능을 제공하지 않습니다. 기기의 위치 권한, 연락처, 사진, 동영상, 마이크, 건강 정보, 주소록을 요청하거나 읽지 않습니다. 광고 SDK의 IP 주소를 통한 대략적인 위치 추정은 별도로 발생할 수 있습니다.'
				]
			},
			{
				title: '처리 목적과 법적 근거',
				body: [
					'분석 데이터는 앱 안정성 확인과 기능 개선을 위해 처리합니다.',
					'문의 정보는 이용자가 요청한 고객지원과 답변을 위해 처리하며, 문의 정보 제공은 선택 사항입니다.',
					'광고 데이터는 앱을 무료로 제공하기 위한 광고 노출과 부정 클릭 방지를 위해 처리합니다.',
					'기기에 저장되는 게임 데이터는 이용자가 대국을 이어서 진행할 수 있도록 하기 위한 것이며 서버로 전송되지 않습니다.'
				]
			},
			{
				title: '처리 위탁과 전송',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다.',
					'Google은 애널리틱스 분석과 AdMob 광고 제공을 위해 데이터를 처리합니다. Google의 데이터 처리에 관한 내용은 Google 개인정보처리방침과 AdMob 정책을 따릅니다.',
					'앱의 분석·광고 데이터 전송은 HTTPS/TLS로 암호화됩니다. 이용자가 별도 메일 앱으로 보내는 문의의 전송과 보관에는 해당 메일 서비스의 보안 방식도 적용됩니다. 서비스 제공자의 서버 위치에 따라 데이터가 국외에서 처리될 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기 내 게임 데이터는 앱을 삭제하면 제거됩니다.',
					'분석 데이터는 Google 애널리틱스에 설정된 보관 기간 동안 보관된 뒤 삭제되거나 집계·비식별화됩니다.',
					'문의 메일은 고객지원 기록으로 보관될 수 있습니다. 문의 정보의 열람 또는 삭제를 요청하려면 문의에 사용한 이메일 주소로 아래 연락처에 알려주세요.',
					`데이터 열람 또는 삭제 요청은 ${site.email}로 보내주세요. 앱에는 이용자 계정이 없고 무작위 분석 식별자를 이름이나 이메일 주소와 연결하지 않으므로, 분석 데이터 관련 요청을 확인하는 데 필요한 최소한의 정보를 요청할 수 있습니다.`
				]
			},
			{
				title: '광고 설정과 이용자 선택',
				body: [
					'Android에서는 설정 > 개인정보 보호 > 광고에서 광고 ID를 재설정하거나 삭제할 수 있습니다.',
					'iOS에서는 설정 > 개인정보 보호 및 보안 > 추적에서 앱의 추적 요청을 차단할 수 있습니다. 앱은 추적 권한을 요청하지 않습니다.',
					'앱은 광고를 비맞춤형으로 요청하므로 이용자의 관심사 프로필에 기반한 광고는 표시되지 않습니다.'
				]
			},
			{
				title: '아동의 개인정보',
				body: [
					'앱은 아동을 주된 대상으로 하지 않습니다. 아동으로부터 의도적으로 개인정보를 수집하지 않습니다.',
					`아동의 개인정보가 처리되고 있다고 판단되면 ${site.email}로 알려주시기 바랍니다. 확인 후 지체 없이 삭제합니다.`
				]
			},
			{
				title: '방침 변경',
				body: [
					'이 방침이 변경되면 이 페이지에 최종 수정일과 함께 게시합니다. 중요한 변경이 있는 경우 앱 업데이트 노트로도 안내합니다.'
				]
			}
		],
		footerNote: `이 방침에 대한 문의는 ${site.email}로 보내주세요.`
	},
	en: {
		title: 'Lucid Reversi Privacy Policy',
		description: 'Privacy policy covering game data, analytics, and advertising in Lucid Reversi.',
		kicker: 'Lucid Reversi Privacy Policy',
		lastUpdated: 'November 15, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Lucid Reversi (package name and bundle ID com.etlegame.reversi, the “App”), provided by Seori Labs. Where the App’s actual data handling differs from our general policy, this product policy takes precedence.',
		sections: [
			{
				title: 'Data the App handles',
				body: [
					'Your game in progress and your settings — difficulty, board and stone themes, sound, music, vibration, and language — are stored only on your device and are never sent to Seori Labs servers. Deleting the App removes them.',
					'The App has no accounts, sign-in, or registration. You do not need to provide your name or email address to play.',
					'The support email button in Settings opens your chosen email app. If you choose to send a support request, Seori Labs receives the sender display name, reply email address, subject, and message you include, and uses them to handle and answer your request. Contacting support is optional and is not required to play. Support information is not linked to advertising or analytics identifiers.',
					'To understand product quality, the App sends in-game events such as starting a match, finishing a match, and changing difficulty to Google Analytics 4 via the Measurement Protocol, along with a random analytics identifier tied to your installation. That identifier is not linked to your name or contact details and is not used to track you across other apps.',
					'The App requests non-personalized Google AdMob interstitial ads. Google may collect and share approximate location inferred from IP addresses, interactions such as app launches and ad impressions or clicks, app and advertising SDK performance and diagnostic information, and device and advertising identifiers for advertising, analytics, and fraud prevention. This processing can occur with non-personalized ads and is governed by Google’s policies.',
					'On Android, the Google Advertising ID (AAID) is used to serve ads and to prevent click fraud. You can reset or delete it in your device settings. On iOS, the App does not request App Tracking Transparency permission and does not use the IDFA.',
					'The App offers no in-app purchases or payments. It does not request or read device location permissions, contacts, photos, video, microphone, health data, or your address book. The advertising SDK may separately infer approximate location from your IP address.'
				]
			},
			{
				title: 'Purposes and legal basis',
				body: [
					'Analytics data is processed to confirm app stability and to improve features.',
					'Support information is used to provide the customer support and replies you request. Providing support information is optional.',
					'Advertising data is processed to serve the ads that keep the App free and to prevent click fraud.',
					'On-device game data exists so you can resume a match, and is never sent to a server.'
				]
			},
			{
				title: 'Processors and transfers',
				body: [
					'Seori Labs does not sell personal information.',
					'Google processes data to provide Analytics and to serve AdMob ads. Google’s handling of that data is governed by the Google Privacy Policy and AdMob policies.',
					'Analytics and advertising data sent by the App is encrypted with HTTPS/TLS. Support requests sent through a separate email app are also subject to that email provider’s transmission and storage security. Depending on where our providers operate, data may be processed outside your country.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'On-device game data is removed when you delete the App.',
					'Analytics data is retained for the period configured in Google Analytics, then deleted or aggregated and de-identified.',
					'Support emails may be retained as customer support records. To request access to or deletion of support information, contact us from the email address used for your request.',
					`To request access or deletion, write to ${site.email}. The App has no user accounts and does not link random analytics identifiers to your name or email address, so we may ask for the minimum information needed to identify analytics data relevant to your request.`
				]
			},
			{
				title: 'Ad settings and your choices',
				body: [
					'On Android, go to Settings > Privacy > Ads to reset or delete your advertising ID.',
					'On iOS, go to Settings > Privacy & Security > Tracking to block tracking requests. The App does not request tracking permission.',
					'Because the App requests non-personalized ads, you will not be shown ads based on an interest profile.'
				]
			},
			{
				title: 'Children’s privacy',
				body: [
					'The App is not directed primarily at children. We do not knowingly collect personal information from children.',
					`If you believe a child’s personal information has been processed, please contact ${site.email} and we will delete it without delay.`
				]
			},
			{
				title: 'Changes to this policy',
				body: [
					'If this policy changes, we will post the update here with a new last-updated date. For significant changes we will also note it in the App’s release notes.'
				]
			}
		],
		footerNote: `Questions about this policy can be sent to ${site.email}.`
	}
};
