import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const fourAlikePrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '끼리끼리 개인정보처리방침',
		description:
			'끼리끼리(Four Alike)의 기기 저장, 광고, 익명 사용 통계와 이용자 선택에 관한 개인정보처리방침입니다.',
		kicker: 'Four Alike Privacy Policy',
		lastUpdated: '2026년 11월 21일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 서리랩스(Seori Labs)가 운영하고 Google Play에 개발자 이름 Seolee Apps로 배포하는 Android 카드 퍼즐 게임 끼리끼리(Four Alike, 패키지 com.seoleeapps.fouralike)에 적용됩니다. 끼리끼리는 숨은 범주가 같은 카드 네 장을 찾아 묶는 게임입니다. 이 게임의 데이터 처리에 관해서는 서리랩스 공통 개인정보 처리방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '수집하지 않는 정보',
				body: [
					'끼리끼리에는 계정, 로그인, 회원가입이 없습니다. 앱은 이름, 이메일 주소, 전화번호, 연락처, 사진, 정밀 위치를 입력받거나 수집하지 않습니다.',
					'결제 기능이 없으므로 결제 정보도 처리하지 않습니다.'
				]
			},
			{
				title: '기기에 저장하는 정보',
				body: [
					'스테이지 진행, 코인, 설정 같은 게임 진행 정보는 이용자의 기기 안에만 저장하며 서버로 보내지 않습니다.',
					'앱을 삭제하거나 앱 데이터를 지우면 이 정보는 사라집니다.'
				]
			},
			{
				title: '광고와 Google AdMob',
				body: [
					'끼리끼리는 Google AdMob으로 보상형 광고와 전면 광고를 보여 줍니다. Google과 그 광고 파트너는 광고 제공, 측정, 사기 방지를 위해 IP 주소와 그로부터 추정한 대략적 위치, 광고 ID 같은 기기 식별자, 앱 안에서의 광고 상호작용, 진단 정보를 처리할 수 있습니다.',
					'유럽경제지역, 영국, 스위스에서는 Google User Messaging Platform(UMP) 동의 화면으로 동의를 받습니다. 동의하지 않으면 비개인화 광고나 제한 광고가 나오거나 광고가 나오지 않을 수 있습니다. 이 선택은 앱 설정의 개인정보 선택 항목에서 언제든지 바꾸거나 철회할 수 있습니다.',
					'Android 설정에서 광고 ID를 재설정하거나 삭제할 수 있습니다.'
				]
			},
			{
				title: '익명 사용 통계와 Google Analytics 4',
				body: [
					'게임을 개선하기 위해 Google Analytics 4로 익명 사용 통계를 보냅니다. 보내는 내용은 앱이 기기에서 임의로 만든 익명 식별자, 판 시작과 종료, 실수 수, 부스터 사용, 광고 시청 여부 같은 게임 이벤트, 앱 버전과 플랫폼입니다.',
					'이 통계는 계정이나 연락처와 연결하지 않으며 광고 개인화에 쓰지 않습니다. 앱 설정에서 분석을 끄면 통계를 보내지 않습니다.',
					'통계는 암호화된 연결(HTTPS)로 보내며 Google Analytics에 최대 14개월 동안 보관한 뒤 삭제됩니다.'
				]
			},
			{
				title: '설정 파일 내려받기',
				body: [
					'앱은 광고 빈도 같은 운영 설정 값을 받으려고 실행할 때 공개된 설정 파일을 내려받습니다. 이 파일은 GitHub Pages에 있으며, 내려받는 과정에서 호스팅 사업자인 GitHub가 IP 주소 같은 접속 기록을 처리할 수 있습니다. 이 요청에는 식별자나 게임 진행 정보를 싣지 않습니다.'
				]
			},
			{
				title: '제3자 제공, 판매와 국외 처리',
				body: [
					'서리랩스는 개인정보를 판매하지 않습니다.',
					'이 게임에서 정보를 처리하는 외부 서비스는 위에서 설명한 Google AdMob, Google Analytics 4, 그리고 설정 파일을 제공하는 GitHub Pages입니다.',
					'이 서비스들은 이용자의 국가 밖에서 정보를 처리할 수 있습니다. 광고와 관련한 처리 장소, 보관 기간, 국외 이전 보호조치는 Google과 해당 광고 파트너가 공개한 정책을 따릅니다. Google 개인정보처리방침: https://policies.google.com/privacy , 광고 기술 안내: https://policies.google.com/technologies/ads'
				]
			},
			{
				title: '이용자의 권리와 삭제',
				body: [
					'기기 안에 저장된 게임 정보는 앱을 삭제하면 지워집니다.',
					`익명 사용 통계에 관한 문의와 삭제 요청은 ${site.email}으로 보내 주세요. 통계는 익명 식별자로만 구분되므로, 요청하신 기기의 데이터를 찾기 위해 앱 설정에 표시되는 지원코드를 요청할 수 있습니다.`,
					`이메일로 문의하실 때 보내 주시는 이메일 주소와 문의 내용은 답변과 요청 처리에 사용하며, 그 처리는 서리랩스 공통 개인정보 처리방침(${site.url}/privacy/)을 따릅니다.`
				]
			},
			{
				title: '아동의 개인정보',
				body: ['끼리끼리는 만 13세 미만 아동을 대상으로 하지 않습니다.']
			},
			{
				title: '문의와 방침 변경',
				body: [
					`끼리끼리의 운영 주체는 서리랩스(Seori Labs)입니다. 개인정보와 게임 지원 문의는 ${site.email}으로 보내 주세요.`,
					'데이터 처리 방식이 바뀌면 이 페이지의 내용과 시행일을 갱신합니다.'
				]
			}
		],
		footerNote: `끼리끼리(Four Alike)의 개인정보와 게임 지원 문의: ${site.email}`
	},
	en: {
		title: 'Four Alike Privacy Policy',
		description:
			'Privacy policy for Four Alike, covering on-device saves, advertising, anonymous usage statistics, and your choices.',
		kicker: 'Four Alike Privacy Policy',
		lastUpdated: 'November 21, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Four Alike (끼리끼리, package com.seoleeapps.fouralike), an Android card puzzle game operated by Seori Labs and distributed on Google Play under the developer name Seolee Apps. In Four Alike, you find and group four cards that share a hidden category. For this game’s data handling, this policy takes precedence over the general Seori Labs Privacy Policy.',
		sections: [
			{
				title: 'Information we do not collect',
				body: [
					'Four Alike has no accounts, sign-in or registration. The app does not ask for or collect your name, email address, phone number, contacts, photos or precise location.',
					'The game has no payment features, so it does not handle payment information.'
				]
			},
			{
				title: 'Information stored on your device',
				body: [
					'Game progress, such as stages, coins and settings, is stored only on your device and is not sent to a server.',
					'This information is removed when you uninstall the app or clear its app data.'
				]
			},
			{
				title: 'Advertising and Google AdMob',
				body: [
					'Four Alike uses Google AdMob to show rewarded ads and interstitial ads. For ad delivery, measurement and fraud prevention, Google and its advertising partners may process your IP address and the approximate location derived from it, device identifiers such as the advertising ID, your interactions with ads in the app, and diagnostic information.',
					'In the European Economic Area, the United Kingdom and Switzerland, we ask for your consent through the Google User Messaging Platform (UMP) consent form. If you do not consent, you may see non-personalized or limited ads, or no ads at all. You can change or withdraw this choice at any time through the privacy choices item in the app settings.',
					'You can reset or delete your advertising ID in Android settings.'
				]
			},
			{
				title: 'Anonymous usage statistics and Google Analytics 4',
				body: [
					'To improve the game, we send anonymous usage statistics to Google Analytics 4. They consist of an anonymous identifier that the app generates at random on your device, game events such as round starts and ends, the number of mistakes, booster use and whether an ad was watched, and the app version and platform.',
					'These statistics are not linked to an account or contact details and are not used to personalize ads. If you turn off analytics in the app settings, they are no longer sent.',
					'The statistics are sent over an encrypted connection (HTTPS) and are kept in Google Analytics for up to 14 months before they are deleted.'
				]
			},
			{
				title: 'Downloading the settings file',
				body: [
					'When it starts, the app downloads a public settings file to get operating values such as ad frequency. The file is hosted on GitHub Pages, and GitHub, as the hosting provider, may process connection records such as your IP address when the file is downloaded. The request carries no identifier and no game progress.'
				]
			},
			{
				title: 'Sharing, sale and processing outside your country',
				body: [
					'Seori Labs does not sell personal information.',
					'The external services that process information in this game are Google AdMob, Google Analytics 4 and GitHub Pages, which serves the settings file, as described above.',
					'These services may process information outside your country. For advertising, processing locations, retention periods and international-transfer safeguards are governed by the published policies of Google and the relevant advertising partners. Google Privacy Policy: https://policies.google.com/privacy , advertising technologies: https://policies.google.com/technologies/ads'
				]
			},
			{
				title: 'Your rights and deletion',
				body: [
					'Game information stored on your device is erased when you uninstall the app.',
					`For questions about the anonymous usage statistics, or to request their deletion, email ${site.email}. Because the statistics are tied only to an anonymous identifier, we may ask for the support code shown in the app settings to find the data from your device.`,
					`When you email us, we use your email address and message to reply and to handle your request, as described in the general Seori Labs Privacy Policy (${site.url}/en/privacy/).`
				]
			},
			{
				title: 'Children',
				body: ['Four Alike is not directed at children under 13.']
			},
			{
				title: 'Contact and changes to this policy',
				body: [
					`Four Alike is operated by Seori Labs. Send privacy and game support inquiries to ${site.email}.`,
					'If our data practices change, we will update this page and its effective date.'
				]
			}
		],
		footerNote: `Privacy and game support for Four Alike: ${site.email}`
	}
};
