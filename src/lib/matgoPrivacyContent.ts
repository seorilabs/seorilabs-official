import { site } from '$lib/content';
import type { PrivacyContent } from '$lib/privacyContent';

export const matgoPrivacyContent: Record<'ko' | 'en', PrivacyContent> = {
	ko: {
		title: '달빛 맞고 개인정보 처리방침',
		description:
			'달빛 맞고의 데이터 미수집, 기기 내 저장과 삭제, 고객 지원에 관한 개인정보 처리방침입니다.',
		kicker: 'Moonlight Matgo Privacy Policy',
		lastUpdated: '2026년 9월 9일',
		lastUpdatedLabel: '시행일 및 최종 수정일',
		backLabel: '서리랩스 홈으로',
		languageLabel: '언어',
		intro:
			'이 방침은 Seori Labs가 Google Play와 Apple App Store를 통해 제공하는 「달빛 맞고」(Moonlight Matgo, 앱 식별자 com.seorilabs.matgo)에 적용됩니다. 달빛 맞고는 계정과 인터넷 연결 없이 AI 상대와 즐기는 오프라인 맞고 게임입니다. 이 앱의 데이터 처리에 대해서는 공통 개인정보 처리방침보다 이 문서가 우선합니다.',
		sections: [
			{
				title: '앱에서 수집하거나 전송하는 정보',
				body: [
					'현재 앱은 이용자의 개인정보와 게임 데이터를 서리랩스나 제3자의 서버로 수집·전송하지 않습니다. 회원가입, 로그인, 온라인 대전과 서버 동기화 기능이 없습니다.',
					'앱에서 Firebase·Google Analytics 등 이용 분석, 원격 오류 보고, 광고, 광고 식별자 수집과 이용자 추적 기능을 사용하지 않습니다. 인앱 구매와 결제 기능도 없습니다.',
					'연령 확인은 19세 이상이라는 확인 여부만 기기에 저장하며, 생년월일이나 신분증을 수집하지 않습니다. 위치, 연락처, 사진, 카메라, 마이크의 개인 정보에 접근하지 않습니다.'
				]
			},
			{
				title: '기기에 저장되는 정보',
				body: [
					'진행 중인 대국, 대국 결과와 진행 기록, 게임 내 냥·매듭, 라이벌 진행 상태, 화면·소리 설정과 연령 확인 여부를 앱의 기기 내 저장 공간에 보관합니다. 이 정보는 이어하기와 설정 유지 등 게임 기능에 사용됩니다.',
					'냥과 매듭은 현금화, 실물 교환, 다른 이용자에게 이전할 수 없는 게임 내 표시입니다. 금융 계좌나 결제 정보와 연결되지 않습니다.',
					'서리랩스는 이 로컬 저장 정보에 원격으로 접근하거나 서버 사본을 보관하지 않습니다.'
				]
			},
			{
				title: '보관과 삭제',
				body: [
					'게임 데이터는 이용자가 초기화하거나 삭제할 때까지 기기에 남습니다. 앱 설정의 “전체 데이터 초기화” 기능으로 게임 진행과 설정을 지울 수 있습니다. 운영체제의 앱 데이터 삭제 또는 앱 삭제 기능으로도 기기의 앱 저장 공간을 제거할 수 있습니다.',
					'운영체제의 백업 기능을 켠 경우 백업 사본은 해당 운영체제·백업 서비스의 설정과 정책에 따라 관리됩니다. 백업 사본을 삭제하려면 해당 서비스의 백업 관리 기능을 이용해 주세요.',
					'서리랩스에는 게임 데이터의 서버 사본이 없으므로 삭제한 대국이나 진행 기록을 복구해 드릴 수 없습니다.'
				]
			},
			{
				title: '이메일 문의와 개인정보 요청',
				body: [
					`이용자가 ${site.email}로 직접 문의하면 답변을 위해 발신 이메일 주소와 이용자가 보내는 문의 내용·첨부 자료를 처리합니다. 앱이 이 정보를 자동으로 전송하지는 않습니다. 문의에 불필요한 민감한 정보는 보내지 마세요.`,
					'문의 정보는 고객 지원과 요청 처리에 사용하며, 응답과 후속 처리에 필요한 기간 동안 보관한 뒤 삭제합니다. 법령에 따라 보관해야 하는 경우에는 해당 의무에 필요한 범위에서 보관합니다.',
					'문의 과정에서 제공한 본인의 정보에 대한 열람·정정·삭제·처리 제한 요청은 같은 이메일 주소로 보내실 수 있습니다. 요청자를 확인하는 데 필요한 최소한의 정보만 확인합니다.'
				]
			},
			{
				title: '외부 서비스와 이 웹페이지',
				body: [
					'서리랩스는 이 앱의 개인정보를 판매하거나 광고 목적으로 제공하지 않습니다. 이메일 문의는 고객 지원에 사용하는 이메일 서비스 제공자를 통해 처리됩니다. 법령상 요구가 있는 경우에는 필요한 범위에서 정보를 제공할 수 있습니다.',
					'Google Play, Apple App Store와 운영체제가 앱 배포·기기 백업 등을 위해 자체적으로 처리하는 정보에는 각 제공자의 정책이 적용됩니다.',
					'이 개인정보 안내 웹페이지 방문 시 호스팅 서비스가 접속 IP 주소 등 기술 정보를 처리할 수 있습니다. 이는 오프라인 게임의 데이터 수집과 별개이며, 웹사이트 이용에 관한 일반 사항은 서리랩스 공통 개인정보 처리방침에서 확인할 수 있습니다.'
				]
			},
			{
				title: '이용 연령',
				body: [
					'달빛 맞고는 대한민국에서 19세 이상 이용자를 대상으로 하며 아동을 대상으로 제공하지 않습니다. 그 밖의 지역에서는 해당 스토어에 표시된 연령 등급과 지역 요건을 따라야 합니다.'
				]
			},
			{
				title: '변경 및 연락처',
				body: [
					'앱의 데이터 처리 방식이 변경되면 이 페이지의 시행일·수정일과 스토어 개인정보 표시를 함께 갱신합니다. 필요한 고지와 동의 절차를 거친 뒤 변경된 기능을 제공합니다.',
					`개인정보 처리 및 앱 지원 담당: Seorilabs Support / ${site.email}`
				]
			}
		],
		footerNote:
			'현재 달빛 맞고 앱은 오프라인으로 동작하며 게임 데이터를 기기 밖으로 전송하지 않습니다.'
	},
	en: {
		title: 'Moonlight Matgo Privacy Policy',
		description:
			'Privacy Policy covering no data collection, local storage and deletion, and customer support for Moonlight Matgo.',
		kicker: 'Moonlight Matgo Privacy Policy',
		lastUpdated: 'September 9, 2026',
		lastUpdatedLabel: 'Effective and last updated',
		backLabel: 'Back to Seori Labs',
		languageLabel: 'Language',
		intro:
			'This policy applies to Moonlight Matgo (달빛 맞고, app identifier com.seorilabs.matgo), provided by Seori Labs through Google Play and the Apple App Store. Moonlight Matgo is an offline card game played against AI without an account or internet connection. This policy takes precedence over our general privacy policy for this app’s data handling.',
		sections: [
			{
				title: 'Data Collection and Transmission',
				body: [
					'The current app does not collect or transmit personal information or gameplay data to Seori Labs or third-party servers. There is no registration, sign-in, online multiplayer, or server synchronization.',
					'The app does not use Firebase, Google Analytics, or other usage analytics, remote crash reporting, advertising, advertising identifiers, or user tracking. It has no in-app purchases or payment features.',
					'Age confirmation stores only your confirmation that you are 19 or older on your device. It does not collect your date of birth or identity documents. The app does not access personal information from location, contacts, photos, the camera, or the microphone.'
				]
			},
			{
				title: 'Data Stored on Your Device',
				body: [
					'An ongoing match, match results and progress, in-game Nyang and Knots, rival progress, display and sound settings, and age confirmation are stored in the app’s local storage. This data is used to resume play and retain settings.',
					'Nyang and Knots are in-game values that cannot be cashed out, exchanged for goods, or transferred to another user. They are not linked to financial accounts or payment information.',
					'Seori Labs cannot remotely access this local data and does not keep a server copy.'
				]
			},
			{
				title: 'Retention and Deletion',
				body: [
					'Game data remains on your device until you reset or delete it. You can clear game progress and settings using the data reset feature in the app’s settings. Your operating system’s app-data deletion or app deletion feature can also remove the app’s local storage.',
					'If operating-system backup is enabled, backup copies are managed under that operating system’s or backup provider’s settings and policies. Use that service’s backup controls to delete backup copies.',
					'We cannot restore deleted matches or progress because Seori Labs does not hold a server copy of your game data.'
				]
			},
			{
				title: 'Email Support and Privacy Requests',
				body: [
					`If you choose to email ${site.email}, we process your sender email address and the message and attachments you provide to respond. The app does not send this information automatically. Please do not include sensitive information that is unnecessary for your request.`,
					'We use support information to answer inquiries and handle requests. We retain it for as long as needed for the response and follow-up, then delete it, unless a legal retention obligation requires us to keep it.',
					'You may use the same email address to request access, correction, deletion, or restriction of information you provided through support. We request only the minimum information needed to verify the requester.'
				]
			},
			{
				title: 'External Services and This Webpage',
				body: [
					'Seori Labs does not sell personal data from this app or share it for advertising. Email inquiries are processed through the email service used for customer support. Information may be disclosed to the extent required by law.',
					'Information processed independently by Google Play, the Apple App Store, or your operating system for distribution, device backups, and related services is governed by their respective policies.',
					'When you visit this privacy webpage, its hosting provider may process technical information such as your IP address. This is separate from data collection by the offline game. General website practices are described in the Seori Labs general privacy policy.'
				]
			},
			{
				title: 'Age Requirements',
				body: [
					'Moonlight Matgo is intended for users aged 19 and over in South Korea and is not directed to children. In other regions, follow the age rating shown by the relevant store and applicable local requirements.'
				]
			},
			{
				title: 'Changes and Contact',
				body: [
					'If the app’s data practices change, we will update the effective date, this policy, and the store privacy disclosures. We will provide any required notice and obtain any required consent before providing the changed functionality.',
					`Privacy and app support contact: Seorilabs Support / ${site.email}`
				]
			}
		],
		footerNote:
			'The current Moonlight Matgo app works offline and does not transmit gameplay data off your device.'
	}
};
