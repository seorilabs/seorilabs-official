import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const reascendPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '리어센드 개인정보 처리방침',
		description:
			'리어센드의 계정 식별자, 클라우드 저장, 순위표, 분석 및 광고 처리에 관한 개인정보 처리방침입니다.',
		kicker: 'Reascend Privacy Policy',
		lastUpdated: '2026년 9월 23일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 제공하는 「리어센드」(패키지명 com.seorilabs.reascend, 이하 “앱”)에 적용됩니다. 앱의 실제 데이터 처리와 스토어 표시가 공통 방침과 다른 경우 이 제품별 방침이 우선합니다.',
		sections: [
			{
				title: '계정과 식별자',
				body: [
					'앱은 이름, 이메일, 전화번호, 생년월일 같은 개인 식별 정보를 입력받지 않으며 수집하지도 않습니다. 회원가입 화면도 없습니다.',
					'대신 앱을 처음 실행하면 Seori Labs Platform을 통해 Firebase 인증 계정이 자동으로 만들어지고, 그 계정의 식별자(uid)가 플레이어 식별자가 됩니다. 이 식별자는 무작위 문자열이며 이용자의 실명이나 연락처와 연결되지 않습니다.',
					'플레이어 식별자는 기기 이전 코드로도 쓰입니다. 새 기기에서 이 값을 입력하면 클라우드 저장본을 가져올 수 있으며, 서버는 요청자의 인증 계정과 식별자가 일치할 때만 저장본을 내어 줍니다.'
				]
			},
			{
				title: '앱이 처리하는 데이터',
				body: [
					'진행 상황(탑 층과 스테이지, 능력치, 장비와 아바타, 재화, 임무와 우편, 시즌패스, 출석), 그리고 소리·진동·글자 크기·표시 언어 같은 설정이 저장 대상입니다. 이 값들은 기기에 저장되고, 클라우드 저장을 사용할 수 있는 상태에서는 플레이어 식별자로 구분되는 서버 문서에도 저장됩니다.',
					'서비스 품질을 확인하기 위해 게임 내 이벤트(게임 시작, 회귀, 재화 획득과 소비, 첫 승급 등)를 수집합니다. 각 이벤트에는 무작위 세션 식별자와 화면을 보고 있던 시간이 함께 담깁니다.',
					'분석 데이터를 Google 애널리틱스 4로 보낼 때는 플레이어 식별자를 그대로 보내지 않고 단방향 해시로 바꾼 값을 사용합니다. 애널리틱스에는 원본 식별자를 두지 않으며 GA4의 사용자 ID 항목도 사용하지 않습니다.',
					'앱은 위치, 연락처, 사진, 동영상, 마이크, 건강 정보, 주소록에 접근하지 않습니다.'
				]
			},
			{
				title: '순위표에 공개되는 정보',
				body: [
					'앱에는 전체 순위표와 시즌 순위표가 있습니다. 순위표에는 플레이어 식별자와 최고 도달 층·스테이지가 실리며, 이 정보는 앱을 사용하는 다른 이용자에게 표시됩니다.',
					'현재 앱에는 별명 입력 기능이 없어 순위표에는 플레이어 식별자가 그대로 표시됩니다. 이 식별자는 실명이나 연락처와 연결되지 않지만, 순위에 오르는 것을 원하지 않으면 아래 “이용자의 선택”을 참고해 주세요.',
					'비정상적인 점수 상승이 감지되면 해당 계정의 순위표 노출을 중단할 수 있습니다. 이때도 진행 상황 자체는 보관되며 삭제되지 않습니다.'
				]
			},
			{
				title: '광고와 인앱 구매',
				body: [
					'앱은 이용자가 선택하는 보상형 광고를 위해 Google AdMob을 사용할 수 있습니다. 광고 기능이 켜진 상태에서는 Google과 광고 파트너가 광고 제공·측정·부정 이용 방지를 위해 IP 주소와 그로부터 추정한 대략적 위치, 허용된 기기·광고 식별자, 광고 상호작용, 진단 정보를 자체 정책에 따라 처리할 수 있습니다.',
					'Android에서는 광고 표시와 부정 클릭 방지를 위해 Google 광고 ID(AAID)가 사용됩니다. 이용자는 기기 설정에서 광고 ID를 재설정하거나 삭제할 수 있습니다.',
					'인앱 구매를 이용하면 마켓(Google Play 또는 App Store)이 발급한 영수증을 서버로 보내 유효성을 검증하고, 지급 결과를 재화 원장에 기록합니다. 카드번호 같은 결제 수단 정보는 마켓이 처리하며 Seori Labs는 받지도 보관하지도 않습니다.',
					'광고와 인앱 구매는 원격 설정으로 켜고 끌 수 있습니다. 꺼져 있는 동안에는 해당 처리도 일어나지 않습니다.'
				]
			},
			{
				title: '처리 목적과 법적 근거',
				body: [
					'진행 상황과 설정은 이용자가 게임을 이어서 할 수 있도록, 그리고 기기를 바꿔도 진행을 잃지 않도록 처리합니다.',
					'분석 데이터는 앱 안정성 확인과 난이도·경제 균형 조정을 위해 처리합니다.',
					'순위표 데이터는 이용자가 선택해 참여하는 경쟁 기능을 제공하기 위해 처리합니다.',
					'영수증 검증과 재화 원장은 결제 이행과 중복 지급 방지를 위해 처리하며, 관련 법령이 정하는 거래 기록 보존 의무를 따릅니다.'
				]
			},
			{
				title: '처리 위탁과 전송',
				body: [
					'Seori Labs는 개인정보를 판매하지 않습니다.',
					'Google은 Firebase 인증과 데이터 저장(Firestore), Cloud Functions 실행, 애널리틱스 분석, AdMob 광고 제공을 위해 데이터를 처리합니다. Google의 데이터 처리에 관한 내용은 Google 개인정보처리방침과 AdMob 정책을 따릅니다.',
					'앱과 서버 사이의 통신은 HTTPS/TLS로 암호화됩니다. 서버는 아시아 리전에 두고 있으나, 서비스 제공자의 구성에 따라 데이터가 국외에서 처리될 수 있습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'기기에 저장된 진행 상황은 앱을 삭제하면 함께 제거됩니다. 다만 클라우드 저장본은 서버에 남아 있어, 같은 식별자로 다시 접속하면 복구됩니다.',
					'서버의 진행 상황은 이용자가 삭제를 요청하거나 계정을 삭제할 때까지 보관합니다. 저장본은 손상 복구를 위해 직전 세대 한 벌을 함께 보관합니다.',
					'분석 데이터는 Google 애널리틱스에 설정된 보관 기간 동안 보관된 뒤 삭제되거나 집계·비식별화됩니다.',
					`계정과 데이터 삭제 방법은 별도 안내 페이지에 정리되어 있습니다. 문의는 ${site.email}로 보내주세요.`
				]
			},
			{
				title: '이용자의 선택',
				body: [
					'클라우드 저장을 사용하지 않으려면 기기를 네트워크에 연결하지 않은 상태로 플레이할 수 있습니다. 이때 진행 상황은 기기에만 남으며, 기기를 잃어버리면 복구할 수 없습니다.',
					'순위표에 표시되는 것을 원하지 않으면 삭제 요청 시 순위표 항목만 제거해 달라고 알려 주세요.',
					'Android에서는 설정 > 개인정보 보호 > 광고에서 광고 ID를 재설정하거나 삭제할 수 있습니다. iOS에서는 설정 > 개인정보 보호 및 보안 > 추적에서 앱의 추적 요청을 관리할 수 있습니다.'
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
			'이 방침은 리어센드에만 적용됩니다. 다른 Seori Labs 앱은 각 앱의 방침 또는 공통 방침을 따릅니다.'
	},
	en: {
		title: 'Reascend Privacy Policy',
		description:
			'How Reascend handles account identifiers, cloud saves, leaderboards, analytics, and advertising.',
		kicker: 'Reascend Privacy Policy',
		lastUpdated: '23 September 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Reascend (package com.seorilabs.reascend, the “app”), provided by Seori Labs. Where the app’s actual processing or store disclosure differs from our general policy, this product policy prevails.',
		sections: [
			{
				title: 'Accounts and identifiers',
				body: [
					'The app does not ask for or collect personally identifying information such as your name, email address, phone number, or date of birth. There is no sign-up screen.',
					'Instead, the first time you open the app, a Firebase authentication account is created automatically through Seori Labs Platform, and that account’s identifier (uid) becomes your player identifier. It is a random string and is not linked to your real name or contact details.',
					'The player identifier also serves as your device transfer code. Entering it on a new device restores your cloud save, and the server releases a save only when the requester’s authenticated account matches that identifier.'
				]
			},
			{
				title: 'What the app processes',
				body: [
					'Saved data covers your progress (tower and stage, stats, equipment and avatars, currencies, objectives and mail, season pass, attendance) and your settings (sound, vibration, text size, display language). These are stored on your device and, when cloud save is available, in a server document keyed by your player identifier.',
					'To monitor service quality we collect in-game events such as game start, regression, currency earned and spent, and first prestige. Each event carries a random session identifier and the time the screen was in view.',
					'When analytics are sent to Google Analytics 4, the player identifier is replaced with a one-way hash rather than sent as-is. Analytics does not hold the original identifier, and we do not populate the GA4 user-ID field.',
					'The app does not access location, contacts, photos, video, microphone, health data, or your address book.'
				]
			},
			{
				title: 'What appears on leaderboards',
				body: [
					'The app has an all-time leaderboard and a season leaderboard. Entries carry the player identifier and the highest tower and stage reached, and are shown to other people using the app.',
					'The app currently has no nickname field, so the player identifier itself is displayed on the leaderboard. It is not linked to your real name or contact details, but if you prefer not to appear there, see “Your choices” below.',
					'If an implausible score increase is detected, we may stop showing that account on the leaderboard. Progress itself is still retained and is not deleted.'
				]
			},
			{
				title: 'Advertising and in-app purchases',
				body: [
					'The app may use Google AdMob for optional rewarded ads. While ads are enabled, Google and advertising partners may process IP addresses and approximate location derived from them, permitted device or advertising identifiers, ad interactions, and diagnostic information for ad delivery, measurement, and fraud prevention, under their own policies.',
					'On Android, the Google Advertising ID (AAID) is used for ad delivery and click-fraud prevention. You can reset or delete it in your device settings.',
					'If you make an in-app purchase, the receipt issued by the store (Google Play or the App Store) is sent to our server for validation, and the result is recorded in a currency ledger. Payment instrument details such as card numbers are handled by the store; Seori Labs neither receives nor stores them.',
					'Advertising and in-app purchases can be switched on and off by remote configuration. While they are off, the related processing does not occur.'
				]
			},
			{
				title: 'Purposes and legal bases',
				body: [
					'Progress and settings are processed so that you can resume play and keep your progress when you change devices.',
					'Analytics data is processed to monitor stability and to tune difficulty and in-game economy balance.',
					'Leaderboard data is processed to provide the competitive feature you choose to take part in.',
					'Receipt validation and the currency ledger are processed to fulfil purchases and prevent duplicate grants, and to meet transaction-record retention duties where applicable law requires them.'
				]
			},
			{
				title: 'Processors and transfers',
				body: [
					'Seori Labs does not sell personal information.',
					'Google processes data for Firebase authentication and storage (Firestore), Cloud Functions execution, Analytics, and AdMob ad delivery. Google’s handling is governed by the Google Privacy Policy and AdMob policies.',
					'Traffic between the app and our servers is encrypted with HTTPS/TLS. Our servers are hosted in an Asian region, though data may be processed outside your country depending on the provider’s configuration.'
				]
			},
			{
				title: 'Retention and deletion',
				body: [
					'Progress stored on your device is removed when you uninstall the app. The cloud save remains on the server, so signing in again with the same identifier restores it.',
					'Server-side progress is retained until you request deletion or delete your account. One previous generation of the save is retained alongside the current one so that a corrupted save can be recovered.',
					'Analytics data is retained for the period configured in Google Analytics, after which it is deleted or aggregated and de-identified.',
					`A separate page explains how to delete your account and data. For questions, write to ${site.email}.`
				]
			},
			{
				title: 'Your choices',
				body: [
					'If you prefer not to use cloud save, you can play with the device offline. Progress then stays only on the device and cannot be recovered if the device is lost.',
					'If you do not want to appear on the leaderboard, say so in your deletion request and we will remove only the leaderboard entry.',
					'On Android you can reset or delete your advertising ID under Settings > Privacy > Ads. On iOS you can manage app tracking requests under Settings > Privacy & Security > Tracking.'
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
			'This policy applies to Reascend only. Other Seori Labs apps follow their own product policy or our general policy.'
	}
};
