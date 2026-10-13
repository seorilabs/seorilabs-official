import type { LegalDocContent } from '$lib/legal/types';

export const matchPicturePrivacyContent: Record<'ko' | 'en', LegalDocContent> = {
	ko: {
		title: '같은 그림 찾아보기 / Match Symbols 개인정보 처리방침',
		description:
			'iOS 같은 그림 찾아보기 1.1.7의 광고 동의, 추적 허용, 기록과 동의 데이터 처리 안내입니다.',
		kicker: 'Match Symbols Privacy Policy',
		lastUpdated: '2026년 10월 13일',
		lastUpdatedLabel: '작성일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 문서는 Seori Labs의 iOS 앱 Match Symbols(앱 식별자 com.github.magicsih.MatchSymbol) 1.1.7 버전의 데이터 처리를 설명합니다. 해당 버전이 공개되기 전에는 예정된 변경에 대한 안내이며, 이전 버전에는 같은 동작이 적용된다고 보장하지 않습니다. 이 앱의 데이터 처리에는 회사 공통 방침보다 앱별 고지가 우선합니다.',
		sections: [
			{
				title: '게임 기록과 Game Center',
				body: [
					'최고 기록·완료 횟수·언어·소리 설정은 기기에 저장됩니다. 앱은 별도의 회원 가입·이메일 입력·연락처 접근을 요구하지 않습니다. Apple Game Center를 사용하는 경우 클리어 기록을 Apple의 순위표에 제출하고 시스템 순위 화면을 엽니다. Game Center 계정과 공개 프로필은 Apple이 관리합니다.'
				]
			},
			{
				title: '광고 개인정보 선택과 Apple 추적 허용',
				body: [
					'광고는 기존 Retry 흐름에서 준비된 전면광고만 표시합니다. 필요한 지역에서는 먼저 Google의 개인정보 동의 화면을 표시합니다. 이후 Apple 추적 허용 상태가 미결정이면 앱이 활성 상태이고 다른 시스템 화면이 닫힌 뒤 Apple의 허용창을 요청합니다. Google의 동의와 Apple 추적 허용은 별개입니다.',
					'광고 SDK를 초기화하거나 광고를 요청하려면 Apple의 추적 허용과 Google SDK의 광고 요청 가능 조건을 모두 충족해야 합니다. 추적을 거부·제한했거나 확인되지 않았거나 동의 처리에 오류가 있으면 광고 없이 게임을 계속합니다. 허용한 경우에도 앱은 비개인화 광고를 요청합니다. 비개인화 광고도 광고 표시·효과 측정·부정 방지를 위해 허용된 기기/광고 식별자와 데이터를 사용할 수 있습니다.',
					'Google AdMob은 IP 주소와 그로부터 추정한 대략적 위치, 기기/광고 식별자, 광고 표시와 상호작용, 앱 상호작용, 충돌·성능·기타 진단 정보를 처리할 수 있습니다. Google 동의 화면은 관련 광고 사업자와 목적을 설명합니다. 필요할 때 설정의 광고 개인정보 옵션에서 Google 선택을 바꿀 수 있고, Apple 추적 권한은 iOS 설정에서 바꿀 수 있습니다. 변경 뒤 앱으로 돌아오면 현재 권한을 다시 확인하고 이전 권한으로 준비한 광고를 폐기합니다. 허용 여부는 게임 규칙·기록·순위표 접근을 제한하지 않습니다.'
				]
			},
			{
				title: '동의 처리를 위한 데이터',
				body: [
					'광고가 없어도 Google UMP는 필요한 동의 정보를 확인하기 위해 대략적 위치·제품 상호작용·성능 정보를 앱 기능 목적으로 처리할 수 있습니다. 이 iOS 1.1.7 빌드는 별도의 앱 이용 통계를 전송하지 않습니다. 광고·동의 SDK가 처리할 수 있는 데이터는 위의 광고 및 동의 처리 안내를 따릅니다.'
				]
			},
			{
				title: '처리 사업자·보관·문의',
				body: [
					'광고와 동의 처리에는 Google AdMob·UMP, 순위표에는 Apple Game Center를 사용합니다. 네트워크 요청에는 HTTPS를 사용합니다. Google과 Apple은 해당 서비스의 정책에 따라 사용자 국가 밖에서 정보를 처리할 수 있습니다. 전송한 정보의 보관·국제 이전·권리 처리에는 각 제공자의 정책도 적용됩니다. 개인정보 열람·정정·삭제·처리 제한 또는 앱 문의는 cs@seorilabs.com으로 보내 주세요. 요청 처리에 필요한 최소한의 정보를 알려 주시고 비밀번호·인증 토큰은 보내지 마세요.'
				]
			}
		],
		footerNote:
			'이 고지는 iOS 1.1.7 버전의 예정된 동작을 설명합니다. 해당 버전 공개 전에는 이전 버전의 추적 허용이나 광고 동작을 보장하지 않습니다.'
	},
	en: {
		title: 'Match Symbols Privacy Policy',
		description:
			'Advertising consent, tracking permission, records and consent data in Match Symbols for iOS 1.1.7.',
		kicker: 'Match Symbols Privacy Policy',
		lastUpdated: 'October 13, 2026',
		lastUpdatedLabel: 'Prepared on',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			"This notice describes data handling in Seori Labs' iOS app Match Symbols (app identifier com.github.magicsih.MatchSymbol), version 1.1.7. Before that version becomes public, it describes planned changes and does not promise the same behavior in earlier versions. This app-specific notice takes precedence over the company's general policy for this app.",
		sections: [
			{
				title: 'Game records and Game Center',
				body: [
					"Best times, completed game counts, language and sound settings are stored on your device. The app does not require a separate account, email entry or access to contacts. When you use Apple Game Center, clear times are submitted to Apple's leaderboard and displayed through the system leaderboard interface. Apple manages your Game Center account and public profile."
				]
			},
			{
				title: "Ad privacy choices and Apple's tracking permission",
				body: [
					"The app shows a prepared interstitial ad only at the existing Retry opportunity. Where required, it first shows Google's privacy consent form. If Apple's tracking status is then undetermined, the app requests Apple's permission while active and after other system screens close. Google's consent choice and Apple's tracking permission are separate.",
					"The app initializes the advertising SDK or requests ads only when Apple's tracking permission is authorized and Google's SDK permits ad requests. If permission is denied, restricted or unresolved, or consent processing fails, you can continue playing without ads. Even when permission is authorized, the app requests non-personalized ads. Non-personalized ads may still use permitted device or advertising identifiers and other data for ad delivery, effectiveness measurement and fraud prevention.",
					"Google AdMob may process IP address and approximate location inferred from it, device or advertising identifiers, ad views and interactions, app interactions, and crash, performance and other diagnostic data. Google's consent form identifies relevant advertising providers and purposes. When required, you can change Google's choices through Ad privacy options in the app settings. You can change Apple's tracking permission in iOS Settings. When you return to the app, it checks current permission and discards ads prepared under previous permission. Your choice does not restrict game rules, records or access to the leaderboard."
				]
			},
			{
				title: 'Data for consent processing',
				body: [
					'Even without ads, Google UMP may process approximate location, product interaction and performance data for the functionality of checking required consent. This iOS 1.1.7 build does not send separate app usage analytics. Data that advertising and consent SDKs may process is described above.'
				]
			},
			{
				title: 'Providers, retention and contact',
				body: [
					'The app uses Google AdMob and UMP for advertising and consent, and Apple Game Center for leaderboards. Network requests use HTTPS. Google and Apple may process information outside your country according to their service policies. Their policies also apply to retention, international transfers and rights requests for information sent to those services. For access, correction, deletion, restriction or app support, contact cs@seorilabs.com. Provide only the information needed to handle your request; do not send passwords or authentication tokens.'
				]
			}
		],
		footerNote:
			'This notice describes planned behavior for iOS version 1.1.7. Before that version is public, it does not promise the same tracking permission or advertising behavior in earlier versions.'
	}
};
