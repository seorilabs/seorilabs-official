import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const vernhaldPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '베른할드 연대기 개인정보 처리방침',
		description:
			'베른할드 연대기의 기기 내 저장, 선택형 이용 통계, 보상형 광고, 인앱 구매에 관한 개인정보 처리방침입니다.',
		kicker: 'Vernhald Chronicles Privacy Policy',
		lastUpdated: '2026년 10월 1일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「베른할드 연대기」(패키지명 com.seorilabs.vernhald, 이하 “앱”)에 적용됩니다. 앱은 오프라인으로 혼자 플레이하는 오토체스 게임입니다. 앱의 실제 데이터 처리와 스토어 표시가 공통 방침과 다른 경우 이 제품별 방침이 우선합니다.',
		sections: [
			{
				title: '계정과 식별자',
				body: [
					'앱에는 계정, 회원가입, 로그인이 없습니다. Seori Labs가 운영하는 자체 서버도 없으며 순위표와 채팅 기능도 없습니다.',
					'앱은 이름, 이메일, 전화번호, 생년월일을 묻지 않으며 수집하지 않습니다. Seori Labs가 이용자 식별자를 따로 만들거나 분석 도구에 사용자 ID를 설정하지도 않습니다.',
					'앱은 위치, 연락처, 사진, 카메라, 마이크, 건강 정보에 접근하지 않습니다.'
				]
			},
			{
				title: '기기에만 저장되는 데이터',
				body: [
					'다음 데이터는 이용자의 기기에만 저장되며 Seori Labs로 전송되지 않습니다.',
					'판과 판 사이의 진행 상황(해금한 도전 단계, 최고 라운드, 최근 판 기록), 진행 중인 판, 설정(언어, 소리, 진동, 이용 통계 공유 선택, 받침대 색), 그리고 광고 노출 빈도 제한을 적용하기 위한 날짜별 보상형 광고 노출 횟수입니다.',
					'Android 시스템 백업을 사용하지 않으므로 앱을 삭제하면 이 데이터도 모두 지워집니다. 클라우드 저장이 없어 삭제한 데이터는 복구할 수 없습니다.'
				]
			},
			{
				title: '이용 통계(선택)',
				body: [
					'앱을 처음 실행하면 이용 통계를 공유할지 한 번 묻습니다. 이용자가 답하기 전이나 공유하지 않기로 선택하면 아무것도 수집하지 않습니다. 이 선택은 설정에서 언제든 바꿀 수 있습니다.',
					'공유를 켜면 Google Firebase 애널리틱스로 게임 이벤트가 전송됩니다. 판 시작과 종료(도전 단계, 라운드, 남은 체력), 강화 카드 선택, 보상형 광고의 요청·노출·실패·보상 획득, 후원자 팩 구매 결과가 해당하며, 앱 마켓·플랫폼·앱 버전이 함께 담깁니다. 여기에 Firebase 앱 인스턴스 ID와 Firebase가 자동으로 수집하는 기기·앱 정보가 더해집니다.',
					'앱이 비정상 종료되면 Firebase Crashlytics로 오류 보고서(기기 모델, OS 버전, 오류 발생 지점의 스택 트레이스)가 전송됩니다. 오류 보고서도 이용 통계와 같은 선택을 따릅니다.',
					'애널리틱스의 광고 저장(ad storage), 광고 사용자 데이터(ad user data), 광고 개인 맞춤(ad personalization) 동의는 항상 거부로 설정되어 있습니다. 사용자 ID는 설정하지 않습니다.'
				]
			},
			{
				title: '광고',
				body: [
					'앱에는 이용자가 원할 때만 보는 보상형 광고만 있습니다. 전면 광고, 배너 광고, 앱 시작 광고는 없습니다. 광고는 Google AdMob이 제공합니다.',
					'광고를 불러오기 전에, 법령이 요구하는 지역(예: 유럽경제지역, 영국)에서는 Google 사용자 메시지 플랫폼(UMP)이 동의 양식을 보여 줍니다. 해당 지역에서는 설정에 “광고 개인정보 설정” 항목이 나타나 선택을 다시 바꿀 수 있습니다.',
					'광고를 이용하면 Google과 광고 파트너가 자체 정책에 따라 IP 주소와 그로부터 추정한 대략적 위치, 광고 ID, 광고 상호작용, 진단 정보를 처리할 수 있습니다.',
					'앱이 요청하는 광고 콘텐츠 등급의 상한은 청소년(Teen)입니다.'
				]
			},
			{
				title: '인앱 구매',
				body: [
					'앱에는 선택형 일회성 상품인 “후원자 팩” 하나가 있으며 Google Play 결제로 판매합니다. App Store 결제는 이후 지원할 예정입니다.',
					'카드번호 같은 결제 정보는 마켓이 처리하며 Seori Labs는 받지 않습니다.',
					'앱은 마켓의 구매 확인 정보를 기기에서 후원자 팩을 열기 위해서만 받고, 마켓에 구매 확인(acknowledge)을 보냅니다. 이 정보는 Seori Labs 서버로 전송되지 않습니다.',
					'후원자 팩은 기기에서 마켓의 보유 기록을 조회해 복원합니다.'
				]
			},
			{
				title: '처리 목적',
				body: [
					'기기에 저장하는 데이터는 게임을 실행하고 진행 상황을 이어 가기 위해 처리합니다.',
					'이용 통계와 오류 보고서는 이용자가 동의한 경우에만 앱 안정성 개선과 게임 균형 조정을 위해 처리합니다.',
					'광고와 구매 관련 처리는 보상형 광고와 후원자 팩을 제공하기 위해 이루어집니다.'
				]
			},
			{
				title: '처리 위탁과 국외 이전',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다.',
					'Google이 Firebase 애널리틱스, Firebase Crashlytics, AdMob, Google Play 결제를 위해 데이터를 처리합니다. Google의 처리는 Google 개인정보처리방침과 AdMob 정책을 따릅니다.',
					'Google은 데이터를 대한민국 밖에서 처리할 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기에 저장된 데이터는 앱을 삭제할 때까지 보관되며, 앱을 삭제하면 함께 지워집니다.',
					'분석 데이터는 Google 애널리틱스에 설정된 보관 기간 동안 보관된 뒤 삭제되거나 집계됩니다.',
					`분석 데이터의 삭제를 요청하거나 문의하려면 ${site.email}로 연락해 주세요.`
				]
			},
			{
				title: '이용자의 선택',
				body: [
					'이용 통계와 오류 보고서 공유는 설정에서 언제든 켜거나 끌 수 있습니다.',
					'광고 동의가 필요한 지역에서는 설정의 “광고 개인정보 설정”에서 광고 관련 선택을 바꿀 수 있습니다.',
					'Android에서는 설정 > 개인정보 보호 > 광고에서 광고 ID를 재설정하거나 삭제할 수 있습니다.'
				]
			},
			{
				title: '아동의 개인정보',
				body: [
					'앱은 만 13세 미만(대한민국은 만 14세 미만) 아동을 대상으로 하지 않으며, 아동의 개인정보를 의도적으로 수집하지 않습니다.',
					`아동의 정보가 수집되었다고 생각되면 ${site.email}로 알려 주세요. 확인 후 지체 없이 삭제합니다.`
				]
			},
			{
				title: '방침 변경',
				body: [
					'이 방침이 바뀌면 이 페이지의 시행일을 갱신합니다. 처리 목적이나 항목이 실질적으로 바뀌는 경우에는 앱 안에서도 알립니다.'
				]
			},
			{
				title: '문의',
				body: [`개인정보 처리에 관한 문의는 ${site.email}로 보내주세요.`]
			}
		],
		footerNote:
			'이 방침은 베른할드 연대기에만 적용됩니다. 다른 Seori Labs 앱은 각 앱의 방침 또는 공통 방침을 따릅니다.'
	},
	en: {
		title: 'Vernhald Chronicles Privacy Policy',
		description:
			'How Vernhald Chronicles handles on-device saves, optional usage statistics, rewarded ads, and in-app purchases.',
		kicker: 'Vernhald Chronicles Privacy Policy',
		lastUpdated: '1 October 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Vernhald Chronicles (package com.seorilabs.vernhald, the “app”), provided by Seori Labs. The app is a single-player auto-chess game played offline. Where the app’s actual processing or store disclosure differs from our general policy, this product policy prevails.',
		sections: [
			{
				title: 'Accounts and identifiers',
				body: [
					'The app has no account, sign-up, or login. Seori Labs runs no server of its own for the app, and there is no leaderboard or chat.',
					'The app does not ask for or collect your name, email address, phone number, or date of birth. Seori Labs does not create a user identifier for you or set a user ID in any analytics tool.',
					'The app does not access location, contacts, photos, camera, microphone, or health data.'
				]
			},
			{
				title: 'Data stored only on your device',
				body: [
					'The following data is stored only on your device and is not sent to Seori Labs.',
					'Progress between runs (unlocked challenge levels, best rounds, recent run records), the run in progress, your settings (language, sound, vibration, usage statistics choice, base colour), and a per-day count of rewarded ads shown, used to apply ad frequency limits.',
					'Android system backup is disabled, so uninstalling the app deletes all of this data. There is no cloud save, and deleted data cannot be restored.'
				]
			},
			{
				title: 'Usage statistics (optional)',
				body: [
					'The first time you open the app, it asks once whether you want to share usage statistics. Nothing is collected before you answer or if you choose not to share. You can change this choice at any time in Settings.',
					'When sharing is on, game events are sent to Google Firebase Analytics: run start and end (with challenge level, round, and remaining HP), augment card picks, rewarded ads requested, shown, failed, and earned, and the result of a Supporter pack purchase, together with the app market, platform, and app version. Firebase also receives the Firebase app instance ID and the device and app information it collects automatically.',
					'If the app crashes, Firebase Crashlytics receives a crash report (device model, OS version, and the stack trace of the crash). Crash reports follow the same choice as usage statistics.',
					'Analytics consent for ad storage, ad user data, and ad personalization is always set to denied. No user ID is set.'
				]
			},
			{
				title: 'Advertising',
				body: [
					'The app shows only optional rewarded ads that you choose to watch. There are no interstitial, banner, or app-open ads. Ads are provided by Google AdMob.',
					'Before ads load, Google’s User Messaging Platform shows a consent form where the law requires it (for example, in the EEA or the UK). In those regions an “Ad privacy choices” entry appears in Settings so you can change your choice later.',
					'When ads are used, Google and its advertising partners may process your IP address and approximate location derived from it, the advertising ID, ad interactions, and diagnostic information under their own policies.',
					'The maximum ad content rating the app requests is Teen.'
				]
			},
			{
				title: 'In-app purchase',
				body: [
					'The app offers one optional one-time purchase, the “Supporter pack”, sold through Google Play Billing. App Store purchases will be supported later.',
					'Payment details such as card numbers are handled by the store; Seori Labs never receives them.',
					'The app receives the store’s purchase confirmation only to unlock the pack on your device, and acknowledges the purchase with the store. This confirmation is not sent to any Seori Labs server.',
					'The pack is restored on your device from the store’s ownership records.'
				]
			},
			{
				title: 'Purposes',
				body: [
					'Data stored on your device is processed to run the game and keep your progress.',
					'Usage statistics and crash reports are processed, only with your consent, to improve stability and tune game balance.',
					'Advertising and purchase processing takes place to provide rewarded ads and the Supporter pack.'
				]
			},
			{
				title: 'Processors and international transfers',
				body: [
					'Seori Labs does not sell personal information.',
					'Google processes data for Firebase Analytics, Firebase Crashlytics, AdMob, and Google Play Billing. Google’s handling is governed by the Google Privacy Policy and AdMob policies.',
					'Google may process data outside the Republic of Korea.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Data stored on your device is kept until you uninstall the app, at which point it is deleted.',
					'Analytics data is retained for the period configured in Google Analytics, after which it is deleted or aggregated.',
					`To request deletion of analytics data or to ask a question, write to ${site.email}.`
				]
			},
			{
				title: 'Your choices',
				body: [
					'You can turn sharing of usage statistics and crash reports on or off at any time in Settings.',
					'In regions where ad consent is required, you can change your ad choices under “Ad privacy choices” in Settings.',
					'On Android you can reset or delete your advertising ID under Settings > Privacy > Ads.'
				]
			},
			{
				title: 'Children’s privacy',
				body: [
					'The app is not directed to children under 13 (under 14 in the Republic of Korea), and we do not knowingly collect children’s personal information.',
					`If you believe a child’s information has been collected, write to ${site.email} and we will delete it without undue delay.`
				]
			},
			{
				title: 'Changes to this policy',
				body: [
					'If this policy changes, we update the effective date on this page. Where the purposes or categories of processing change materially, we also notify you inside the app.'
				]
			},
			{
				title: 'Contact',
				body: [`For questions about how we handle data, write to ${site.email}.`]
			}
		],
		footerNote:
			'This policy applies to Vernhald Chronicles only. Other Seori Labs apps follow their own product policy or our general policy.'
	}
};
