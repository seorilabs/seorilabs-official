import { site, type PrivacyLocaleKey } from '$lib/content';

type PrivacySection = {
	title: string;
	body: string[];
};

export type PrivacyContent = {
	title: string;
	description: string;
	kicker: string;
	lastUpdated: string;
	lastUpdatedLabel: string;
	backLabel: string;
	languageLabel: string;
	intro: string;
	sections: PrivacySection[];
	footerNote: string;
};

export const privacyContent: Record<PrivacyLocaleKey, PrivacyContent> = {
	ko: {
		title: '개인정보 처리방침',
		description:
			'서리랩스 웹사이트, 앱, 서비스에 적용되는 개인정보 처리방침입니다. 앱별 데이터 처리가 다른 경우 별도 앱 정책이 우선 적용됩니다.',
		kicker: 'Privacy Policy',
		lastUpdated: '2026년 7월 19일',
		lastUpdatedLabel: '최종 수정일',
		backLabel: '홈으로',
		languageLabel: '언어',
		intro:
			'이 개인정보 처리방침은 서리랩스가 운영하는 웹사이트, 앱, 서비스 중 이 문서로 연결되는 서비스에 적용됩니다. 특정 앱이나 서비스에서 별도 개인정보 처리방침을 제공하는 경우 해당 별도 문서가 우선합니다.',
		sections: [
			{
				title: '수집하는 정보',
				body: [
					'문의 과정에서 사용자가 직접 제공하는 이름, 이메일 주소, 문의 내용 등의 정보를 수집할 수 있습니다.',
					'서비스 안정성, 보안, 장애 분석을 위해 IP 주소, 사용자 에이전트, 요청 시간, 접속 경로 등 기본적인 기술 로그가 처리될 수 있습니다.',
					'서리랩스 앱·게임은 서비스 개선을 위해 익명 사용 데이터(앱/게임 내 이벤트·상호작용)와 익명 분석 식별자를 Google Firebase/Google Analytics 등 분석 도구로 수집할 수 있습니다. 이 데이터는 특정 개인을 식별하지 않으며 계정·연락처와 연결되지 않고, 광고·추적(ATT) 목적으로 사용되지 않습니다.',
					'일부 앱은 계정, 결제(인앱결제), 위치, 카메라, 사진, 연락처, 광고 및 광고 식별자 등 추가 데이터를 사용할 수 있으며, 그 경우 해당 앱 스토어의 데이터 안전/App Privacy 표시와 앱 내 고지를 따릅니다.'
				]
			},
			{
				title: '정보의 이용 목적',
				body: [
					'문의 응답, 프로젝트 상담, 고객 지원, 서비스 운영, 보안 유지, 장애 대응, 법적 의무 준수를 위해 개인정보를 이용합니다.',
					'앱별로 수집되는 데이터는 해당 앱의 핵심 기능 제공, 품질 개선, 부정 이용 방지 등 고지된 목적 범위에서만 이용합니다.'
				]
			},
			{
				title: '제3자 제공 및 처리 위탁',
				body: [
					'서리랩스는 개인정보를 판매하지 않습니다.',
					'서비스 운영에 필요한 범위에서 호스팅, 이메일, 저장소, 배포, 오류 모니터링 등 외부 서비스 제공자가 개인정보를 처리할 수 있습니다.',
					'분석을 위해 Google(Firebase/Google Analytics)이 익명 분석 데이터를 처리할 수 있습니다. 이는 개인을 식별하지 않으며 광고·추적 목적으로 사용되지 않습니다.',
					'법령상 요구가 있거나 권리 보호를 위해 필요한 경우 관련 법령에 따라 정보를 제공할 수 있습니다.'
				]
			},
			{
				title: '보관 기간',
				body: [
					'문의 기록은 응답과 후속 커뮤니케이션에 필요한 기간 동안 보관합니다.',
					'기술 로그는 보안, 장애 대응, 운영 안정성을 위해 필요한 기간 동안 보관한 뒤 삭제하거나 비식별화합니다.',
					'법령상 보관 의무가 있는 정보는 해당 법령에서 정한 기간 동안 보관합니다.'
				]
			},
			{
				title: '이용자의 권리',
				body: [
					'이용자는 본인의 개인정보에 대한 열람, 정정, 삭제, 처리 제한을 요청할 수 있습니다.',
					'개인정보 관련 요청은 아래 연락처로 보내주세요. 요청 확인을 위해 필요한 최소한의 정보를 확인할 수 있습니다.'
				]
			},
			{
				title: '아동의 개인정보',
				body: [
					'서리랩스의 일반 서비스는 만 13세 미만 아동을 대상으로 하지 않습니다.',
					'아동을 대상으로 하는 앱이나 서비스가 제공되는 경우 별도 정책과 보호자 동의 절차를 마련합니다.',
					'일부 앱은 성인 이용자가 자신이 돌보는 사람에 대한 정보(예: 아이의 이름·생년월일, 수유·기저귀·수면 등 돌봄 기록)를 입력하고 초대된 비공개 그룹 내에서 공유할 수 있습니다. 이러한 정보는 성인 양육자가 직접 입력하며, 해당 그룹 내부에서만 보이고, 광고·추적 목적으로 사용되지 않습니다. 구체적인 수집 항목은 각 앱의 스토어 데이터 안전/App Privacy 표시에 고지됩니다.'
				]
			},
			{
				title: '변경',
				body: [
					'개인정보 처리방침이 변경되는 경우 이 페이지의 최종 수정일을 갱신합니다.',
					'중요한 변경이 있는 경우 서비스 내 공지, 이메일, 또는 웹사이트 공지를 통해 알릴 수 있습니다.'
				]
			},
			{
				title: '문의',
				body: [`개인정보 관련 문의: ${site.email}`]
			}
		],
		footerNote:
			'앱스토어 제출 전에는 실제 앱의 권한, SDK, 데이터 수집 항목과 이 문서가 일치하는지 반드시 확인해야 합니다.'
	},
	en: {
		title: 'Privacy Policy',
		description:
			'Privacy Policy for Seori Labs websites, apps, and services. Product-specific notices apply first when an app handles data differently.',
		kicker: 'Privacy Policy',
		lastUpdated: 'July 19, 2026',
		lastUpdatedLabel: 'Last updated',
		backLabel: 'Back home',
		languageLabel: 'Language',
		intro:
			'This Privacy Policy applies to Seori Labs websites, apps, and services that link to this document. If a specific app or service provides a separate privacy notice, that product-specific notice applies first.',
		sections: [
			{
				title: 'Information We Collect',
				body: [
					'We may collect information you provide directly, such as your name, email address, and message when you contact us.',
					'We may process basic technical logs, such as IP address, user agent, request time, and referrer, to keep services reliable and secure.',
					'Seori Labs apps and games may collect anonymous usage data (in-app/in-game events and interactions) and an anonymous analytics identifier via analytics tools such as Google Firebase/Google Analytics to improve our services. This data does not identify individuals, is not linked to your account or contacts, and is not used for advertising or tracking (ATT).',
					'Some apps may use additional data such as accounts, payments (in-app purchases), location, camera, photos, contacts, or advertising and advertising identifiers; in those cases the app store Data safety/App Privacy labels and in-app disclosures apply.'
				]
			},
			{
				title: 'How We Use Information',
				body: [
					'We use information to respond to inquiries, provide support, operate services, maintain security, troubleshoot issues, and comply with legal obligations.',
					'Product-specific data is used only for the stated purposes, such as providing core app features, improving quality, and preventing abuse.'
				]
			},
			{
				title: 'Sharing and Service Providers',
				body: [
					'We do not sell personal information.',
					'Service providers may process information for hosting, email, storage, deployment, error monitoring, and other operational needs.',
					'For analytics, Google (Firebase/Google Analytics) may process anonymous analytics data. It does not identify individuals and is not used for advertising or tracking.',
					'We may disclose information when required by law or when necessary to protect rights, safety, or service integrity.'
				]
			},
			{
				title: 'Retention',
				body: [
					'Contact records are kept for as long as needed to respond and maintain follow-up communication.',
					'Technical logs are retained only as needed for security, troubleshooting, and operational reliability, then deleted or de-identified.',
					'Information subject to legal retention requirements is kept for the required period.'
				]
			},
			{
				title: 'Your Rights',
				body: [
					'You may request access, correction, deletion, or restriction of your personal information.',
					'Send privacy requests to the contact address below. We may need minimal information to verify the request.'
				]
			},
			{
				title: 'Children',
				body: [
					'Our general services are not directed to children under 13.',
					'If we provide an app or service directed to children, we will provide an appropriate separate policy and parental consent process.',
					'Some apps let adult users record and share information about a person in their care — for example, a child’s care records such as name, date of birth, and feeding, diaper, or sleep logs — within a private, invite-only group. Such information is entered by the adult caregiver, is visible only within that group, and is not used for advertising or tracking. The specific data collected is disclosed in each app’s store Data safety / App Privacy labels.'
				]
			},
			{
				title: 'Changes',
				body: [
					'When this policy changes, we will update the last updated date on this page.',
					'For material changes, we may provide notice in the service, by email, or on our website.'
				]
			},
			{
				title: 'Contact',
				body: [`Privacy contact: ${site.email}`]
			}
		],
		footerNote:
			'Before submitting an app to an app store, verify that this policy matches the app permissions, SDKs, and actual data handling.'
	},
	ja: {
		title: 'プライバシーポリシー',
		description:
			'Seori Labs のウェブサイト、アプリ、サービスに適用されるプライバシーポリシーです。アプリごとにデータの取り扱いが異なる場合は、個別のアプリポリシーが優先して適用されます。',
		kicker: 'Privacy Policy',
		lastUpdated: '2026年7月19日',
		lastUpdatedLabel: '最終更新日',
		backLabel: 'ホームへ',
		languageLabel: '言語',
		intro:
			'このプライバシーポリシーは、Seori Labs が運営するウェブサイト、アプリ、サービスのうち、本ドキュメントにリンクされているサービスに適用されます。特定のアプリまたはサービスが個別のプライバシー通知を提供する場合は、その個別の通知が優先されます。',
		sections: [
			{
				title: '収集する情報',
				body: [
					'お問い合わせの際にお客様が直接提供される氏名、メールアドレス、お問い合わせ内容などの情報を収集する場合があります。',
					'サービスの安定性、セキュリティ、障害分析のため、IP アドレス、ユーザーエージェント、リクエスト時刻、アクセス経路などの基本的な技術ログを処理する場合があります。',
					'Seori Labs のアプリ・ゲームは、サービス改善のため、匿名の利用データ(アプリ/ゲーム内のイベント・操作)および匿名の分析用識別子を、Google Firebase/Google Analytics などの分析ツールを通じて収集する場合があります。このデータは特定の個人を識別せず、アカウントや連絡先と紐づけられることはなく、広告・トラッキング(ATT)の目的では使用されません。',
					'一部のアプリでは、アカウント、決済(アプリ内課金)、位置情報、カメラ、写真、連絡先、広告および広告識別子などの追加データを使用する場合があり、その場合は各アプリストアのデータセーフティ/App Privacy の表示およびアプリ内の告知に従います。'
				]
			},
			{
				title: '情報の利用目的',
				body: [
					'お問い合わせへの対応、プロジェクトのご相談、カスタマーサポート、サービスの運営、セキュリティの維持、障害対応、法的義務の遵守のために個人情報を利用します。',
					'アプリごとに収集されるデータは、当該アプリの中核機能の提供、品質改善、不正利用の防止など、告知された目的の範囲内でのみ利用します。'
				]
			},
			{
				title: '第三者提供および処理の委託',
				body: [
					'Seori Labs は個人情報を販売しません。',
					'サービス運営に必要な範囲で、ホスティング、メール、ストレージ、デプロイ、エラーモニタリングなどの外部サービス提供者が個人情報を処理する場合があります。',
					'分析のため、Google(Firebase/Google Analytics)が匿名の分析データを処理する場合があります。これは個人を識別せず、広告・トラッキングの目的では使用されません。',
					'法令上の要求がある場合、または権利の保護のために必要な場合、関連法令に従って情報を提供することがあります。'
				]
			},
			{
				title: '保存期間',
				body: [
					'お問い合わせ記録は、対応および以降のやり取りに必要な期間保存します。',
					'技術ログは、セキュリティ、障害対応、運営の安定性のために必要な期間保存した後、削除または非識別化します。',
					'法令上の保存義務がある情報は、当該法令で定められた期間保存します。'
				]
			},
			{
				title: '利用者の権利',
				body: [
					'利用者は、ご自身の個人情報について、開示、訂正、削除、処理の制限を請求することができます。',
					'個人情報に関するご請求は、下記の連絡先までお送りください。ご請求内容の確認のために必要最小限の情報を確認する場合があります。'
				]
			},
			{
				title: '子どものプライバシー',
				body: [
					'Seori Labs の一般的なサービスは、13 歳未満の子どもを対象としていません。',
					'子どもを対象とするアプリまたはサービスを提供する場合は、個別のポリシーおよび保護者の同意手続きを設けます。',
					'一部のアプリでは、成人の利用者が自分の世話をする人に関する情報（例：子どもの名前・生年月日、授乳・おむつ・睡眠などのケア記録）を入力し、招待制の非公開グループ内で共有できます。こうした情報は成人の養育者が自ら入力し、そのグループ内でのみ表示され、広告や追跡の目的には使用されません。収集する具体的な項目は、各アプリのストアのデータ セーフティ／App Privacy 表示で開示されます。'
				]
			},
			{
				title: '変更',
				body: [
					'本プライバシーポリシーを変更する場合は、このページの最終更新日を更新します。',
					'重要な変更がある場合は、サービス内のお知らせ、メール、またはウェブサイトでの告知によりお知らせすることがあります。'
				]
			},
			{
				title: 'お問い合わせ',
				body: [`個人情報に関するお問い合わせ: ${site.email}`]
			}
		],
		footerNote:
			'アプリストアへの提出前に、実際のアプリの権限、SDK、データ収集項目とこのドキュメントが一致しているか必ず確認してください。'
	},
	zh: {
		title: '隐私政策',
		description:
			'本隐私政策适用于 Seori Labs 的网站、应用和服务。当某款应用对数据的处理方式不同时，将优先适用该应用的单独政策。',
		kicker: 'Privacy Policy',
		lastUpdated: '2026年7月19日',
		lastUpdatedLabel: '最后更新',
		backLabel: '返回首页',
		languageLabel: '语言',
		intro:
			'本隐私政策适用于 Seori Labs 运营并链接至本文档的网站、应用和服务。如果某款应用或服务提供了单独的隐私声明，则以该单独声明为准。',
		sections: [
			{
				title: '我们收集的信息',
				body: [
					'当您与我们联系时，我们可能会收集您直接提供的信息，例如姓名、电子邮件地址和咨询内容。',
					'为保障服务的稳定性、安全性并进行故障分析，我们可能会处理 IP 地址、用户代理、请求时间、访问来源等基本技术日志。',
					'Seori Labs 的应用和游戏可能会通过 Google Firebase/Google Analytics 等分析工具，收集匿名使用数据（应用/游戏内的事件与交互）以及匿名分析标识符，以改进我们的服务。这些数据不会识别特定个人，不会与您的账户或联系人关联，也不会用于广告或跟踪（ATT）目的。',
					'部分应用可能会使用账户、支付（应用内购买）、位置、摄像头、照片、通讯录以及广告和广告标识符等额外数据；在这种情况下，将适用相应应用商店的数据安全/App Privacy 标识以及应用内的说明。'
				]
			},
			{
				title: '信息的使用目的',
				body: [
					'我们使用信息来回复咨询、提供支持、运营服务、维护安全、排查故障以及履行法律义务。',
					'各应用所收集的数据仅在已告知的目的范围内使用，例如提供应用的核心功能、改进质量和防止滥用。'
				]
			},
			{
				title: '第三方提供与处理委托',
				body: [
					'Seori Labs 不会出售个人信息。',
					'在服务运营所需的范围内，托管、电子邮件、存储、部署、错误监控等外部服务提供商可能会处理个人信息。',
					'出于分析目的，Google（Firebase/Google Analytics）可能会处理匿名分析数据。这些数据不会识别特定个人，也不会用于广告或跟踪目的。',
					'在法律有要求或为保护权利而有必要时，我们可能会依据相关法律提供信息。'
				]
			},
			{
				title: '保存期限',
				body: [
					'咨询记录将在回复及后续沟通所需的期间内保存。',
					'技术日志仅在安全、故障排查和运营稳定所需的期间内保存，之后予以删除或去标识化。',
					'依法负有保存义务的信息，将在相关法律规定的期间内保存。'
				]
			},
			{
				title: '用户的权利',
				body: [
					'用户可以就本人的个人信息请求查阅、更正、删除或限制处理。',
					'有关个人信息的请求请发送至下方联系方式。为核实请求，我们可能会确认必要的最少信息。'
				]
			},
			{
				title: '儿童隐私',
				body: [
					'Seori Labs 的一般服务并非面向 13 岁以下的儿童。',
					'如果我们提供面向儿童的应用或服务，将制定单独的政策和监护人同意流程。',
					'部分应用允许成年用户记录并在受邀请的私密群组内共享其所照护对象的信息（例如儿童的姓名、出生日期，以及喂养、换尿布、睡眠等照护记录）。这些信息由成年照护者本人输入，仅在该群组内可见，且不用于广告或追踪。具体收集的数据会在各应用商店的数据安全／App Privacy 标签中披露。'
				]
			},
			{
				title: '变更',
				body: [
					'当本政策发生变更时，我们会更新本页面的最后更新日期。',
					'如有重大变更，我们可能会通过服务内通知、电子邮件或网站公告予以告知。'
				]
			},
			{
				title: '联系我们',
				body: [`隐私相关咨询：${site.email}`]
			}
		],
		footerNote: '在向应用商店提交之前，务必确认本文档与应用的实际权限、SDK 和数据收集项目一致。'
	},
	'zh-tw': {
		title: '隱私權政策',
		description:
			'本隱私權政策適用於 Seori Labs 的網站、應用程式與服務。當某款應用程式對資料的處理方式不同時，將優先適用該應用程式的個別政策。',
		kicker: 'Privacy Policy',
		lastUpdated: '2026年7月19日',
		lastUpdatedLabel: '最後更新',
		backLabel: '返回首頁',
		languageLabel: '語言',
		intro:
			'本隱私權政策適用於 Seori Labs 營運並連結至本文件的網站、應用程式與服務。若特定應用程式或服務提供個別的隱私權聲明，則以該個別聲明為準。',
		sections: [
			{
				title: '我們收集的資訊',
				body: [
					'當您與我們聯絡時，我們可能會收集您直接提供的資訊，例如姓名、電子郵件地址與詢問內容。',
					'為維持服務的穩定性、安全性並進行故障分析，我們可能會處理 IP 位址、使用者代理、要求時間、連線來源等基本技術記錄。',
					'Seori Labs 的應用程式與遊戲可能會透過 Google Firebase/Google Analytics 等分析工具，收集匿名使用資料（應用程式/遊戲內的事件與互動）以及匿名分析識別碼，以改善我們的服務。這些資料不會識別特定個人，不會與您的帳戶或聯絡人連結，也不會用於廣告或追蹤（ATT）目的。',
					'部分應用程式可能會使用帳戶、付款（應用程式內購買）、位置、相機、相片、聯絡人以及廣告與廣告識別碼等額外資料；在此情況下，將適用相應應用程式商店的資料安全/App Privacy 標示以及應用程式內的說明。'
				]
			},
			{
				title: '資訊的使用目的',
				body: [
					'我們使用資訊以回覆詢問、提供支援、營運服務、維護安全、排除故障並遵守法律義務。',
					'各應用程式所收集的資料僅在已告知的目的範圍內使用，例如提供應用程式的核心功能、改善品質與防止濫用。'
				]
			},
			{
				title: '第三方提供與處理委託',
				body: [
					'Seori Labs 不會出售個人資訊。',
					'在服務營運所需的範圍內，代管、電子郵件、儲存、部署、錯誤監控等外部服務供應商可能會處理個人資訊。',
					'為分析目的，Google（Firebase/Google Analytics）可能會處理匿名分析資料。這些資料不會識別特定個人，也不會用於廣告或追蹤目的。',
					'在法律有要求或為保護權利而有必要時，我們可能會依相關法律提供資訊。'
				]
			},
			{
				title: '保存期間',
				body: [
					'詢問記錄將在回覆及後續聯繫所需的期間內保存。',
					'技術記錄僅在安全、故障排除與營運穩定所需的期間內保存，之後予以刪除或去識別化。',
					'依法負有保存義務的資訊，將在相關法律規定的期間內保存。'
				]
			},
			{
				title: '使用者的權利',
				body: [
					'使用者可就本人的個人資訊請求查閱、更正、刪除或限制處理。',
					'有關個人資訊的請求請寄送至下方聯絡方式。為核實請求，我們可能會確認必要的最少資訊。'
				]
			},
			{
				title: '兒童隱私',
				body: [
					'Seori Labs 的一般服務並非以未滿 13 歲的兒童為對象。',
					'若我們提供以兒童為對象的應用程式或服務，將另訂個別政策與監護人同意程序。',
					'部分應用程式允許成年使用者記錄並於受邀請的私密群組內分享其所照顧對象的資訊（例如兒童的姓名、出生日期，以及餵食、換尿布、睡眠等照護紀錄）。這些資訊由成年照顧者本人輸入，僅於該群組內可見，且不用於廣告或追蹤。具體收集的資料會在各應用程式商店的資料安全／App Privacy 標示中揭露。'
				]
			},
			{
				title: '變更',
				body: [
					'當本政策變更時，我們會更新本頁面的最後更新日期。',
					'如有重大變更，我們可能會透過服務內通知、電子郵件或網站公告予以告知。'
				]
			},
			{
				title: '聯絡我們',
				body: [`隱私相關詢問：${site.email}`]
			}
		],
		footerNote:
			'在向應用程式商店提交之前，務必確認本文件與應用程式的實際權限、SDK 與資料收集項目一致。'
	},
	de: {
		title: 'Datenschutzerklärung',
		description:
			'Datenschutzerklärung für die Websites, Apps und Dienste von Seori Labs. Produktspezifische Hinweise gelten vorrangig, wenn eine App Daten anders verarbeitet.',
		kicker: 'Privacy Policy',
		lastUpdated: '19. Juli 2026',
		lastUpdatedLabel: 'Zuletzt aktualisiert',
		backLabel: 'Zur Startseite',
		languageLabel: 'Sprache',
		intro:
			'Diese Datenschutzerklärung gilt für die Websites, Apps und Dienste von Seori Labs, die auf dieses Dokument verweisen. Stellt eine bestimmte App oder ein bestimmter Dienst einen eigenen Datenschutzhinweis bereit, so gilt dieser produktspezifische Hinweis vorrangig.',
		sections: [
			{
				title: 'Welche Daten wir erheben',
				body: [
					'Wir können Informationen erheben, die Sie uns direkt bereitstellen, etwa Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht, wenn Sie uns kontaktieren.',
					'Wir können grundlegende technische Protokolle wie IP-Adresse, User-Agent, Anfragezeitpunkt und Referrer verarbeiten, um die Dienste zuverlässig und sicher zu halten sowie Störungen zu analysieren.',
					'Apps und Spiele von Seori Labs können anonyme Nutzungsdaten (Ereignisse und Interaktionen in der App bzw. im Spiel) sowie eine anonyme Analyse-Kennung über Analysewerkzeuge wie Google Firebase/Google Analytics erheben, um unsere Dienste zu verbessern. Diese Daten identifizieren keine Personen, werden nicht mit Ihrem Konto oder Ihren Kontakten verknüpft und nicht für Werbung oder Tracking (ATT) verwendet.',
					'Einige Apps können zusätzliche Daten verwenden, etwa Konten, Zahlungen (In-App-Käufe), Standort, Kamera, Fotos, Kontakte sowie Werbung und Werbekennungen; in diesen Fällen gelten die Angaben zur Datensicherheit/App-Privatsphäre des jeweiligen App-Stores sowie die Hinweise in der App.'
				]
			},
			{
				title: 'Wie wir Daten verwenden',
				body: [
					'Wir verwenden Daten, um Anfragen zu beantworten, Support zu leisten, Dienste zu betreiben, die Sicherheit zu wahren, Störungen zu beheben und gesetzliche Pflichten zu erfüllen.',
					'Produktspezifische Daten werden nur für die angegebenen Zwecke verwendet, etwa zur Bereitstellung der Kernfunktionen der App, zur Qualitätsverbesserung und zur Missbrauchsverhinderung.'
				]
			},
			{
				title: 'Weitergabe und Auftragsverarbeiter',
				body: [
					'Seori Labs verkauft keine personenbezogenen Daten.',
					'Im für den Betrieb erforderlichen Umfang können Dienstleister Daten für Hosting, E-Mail, Speicherung, Bereitstellung, Fehlerüberwachung und andere betriebliche Zwecke verarbeiten.',
					'Zu Analysezwecken kann Google (Firebase/Google Analytics) anonyme Analysedaten verarbeiten. Diese identifizieren keine Personen und werden nicht für Werbung oder Tracking verwendet.',
					'Wir können Daten offenlegen, sofern dies gesetzlich vorgeschrieben oder zum Schutz von Rechten erforderlich ist.'
				]
			},
			{
				title: 'Speicherdauer',
				body: [
					'Kontaktdaten werden so lange gespeichert, wie es für die Beantwortung und die weitere Kommunikation erforderlich ist.',
					'Technische Protokolle werden nur so lange gespeichert, wie es für Sicherheit, Fehlerbehebung und Betriebsstabilität erforderlich ist, und danach gelöscht oder anonymisiert.',
					'Daten, die einer gesetzlichen Aufbewahrungspflicht unterliegen, werden für den vorgeschriebenen Zeitraum gespeichert.'
				]
			},
			{
				title: 'Ihre Rechte',
				body: [
					'Sie können Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.',
					'Senden Sie Datenschutzanfragen an die unten stehende Kontaktadresse. Zur Überprüfung der Anfrage benötigen wir gegebenenfalls ein Minimum an Informationen.'
				]
			},
			{
				title: 'Daten von Kindern',
				body: [
					'Unsere allgemeinen Dienste richten sich nicht an Kinder unter 13 Jahren.',
					'Sofern wir eine App oder einen Dienst für Kinder anbieten, stellen wir eine geeignete separate Richtlinie und ein Verfahren zur Einwilligung der Erziehungsberechtigten bereit.',
					'In einigen Apps können erwachsene Nutzer Informationen über eine von ihnen betreute Person – zum Beispiel Betreuungsdaten eines Kindes wie Name, Geburtsdatum sowie Fütterungs-, Windel- oder Schlafprotokolle – erfassen und innerhalb einer privaten, nur auf Einladung zugänglichen Gruppe teilen. Diese Informationen werden von der erwachsenen Betreuungsperson selbst eingegeben, sind nur innerhalb dieser Gruppe sichtbar und werden nicht für Werbung oder Tracking verwendet. Welche Daten konkret erhoben werden, wird in den Data-Safety-/App-Privacy-Angaben der jeweiligen App im Store offengelegt.'
				]
			},
			{
				title: 'Änderungen',
				body: [
					'Bei Änderungen dieser Erklärung aktualisieren wir das Datum der letzten Aktualisierung auf dieser Seite.',
					'Bei wesentlichen Änderungen können wir im Dienst, per E-Mail oder auf unserer Website informieren.'
				]
			},
			{
				title: 'Kontakt',
				body: [`Datenschutz-Kontakt: ${site.email}`]
			}
		],
		footerNote:
			'Stellen Sie vor der Einreichung einer App in einem App-Store sicher, dass diese Erklärung mit den Berechtigungen, SDKs und der tatsächlichen Datenverarbeitung der App übereinstimmt.'
	},
	fr: {
		title: 'Politique de confidentialité',
		description:
			'Politique de confidentialité des sites web, applications et services de Seori Labs. Des mentions spécifiques à un produit s’appliquent en priorité lorsqu’une application traite les données différemment.',
		kicker: 'Privacy Policy',
		lastUpdated: '19 juillet 2026',
		lastUpdatedLabel: 'Dernière mise à jour',
		backLabel: 'Accueil',
		languageLabel: 'Langue',
		intro:
			'Cette politique de confidentialité s’applique aux sites web, applications et services de Seori Labs qui renvoient à ce document. Si une application ou un service particulier fournit un avis de confidentialité distinct, cet avis spécifique au produit prévaut.',
		sections: [
			{
				title: 'Informations que nous collectons',
				body: [
					'Nous pouvons collecter les informations que vous fournissez directement, telles que votre nom, votre adresse e-mail et votre message lorsque vous nous contactez.',
					'Nous pouvons traiter des journaux techniques de base, tels que l’adresse IP, l’agent utilisateur, l’heure de la requête et le référent, afin de garantir la fiabilité et la sécurité des services et d’analyser les incidents.',
					'Les applications et jeux de Seori Labs peuvent collecter des données d’utilisation anonymes (événements et interactions dans l’application ou le jeu) ainsi qu’un identifiant d’analyse anonyme via des outils d’analyse tels que Google Firebase/Google Analytics afin d’améliorer nos services. Ces données n’identifient pas les personnes, ne sont pas liées à votre compte ni à vos contacts et ne sont pas utilisées à des fins publicitaires ou de suivi (ATT).',
					'Certaines applications peuvent utiliser des données supplémentaires telles que les comptes, les paiements (achats intégrés), la localisation, l’appareil photo, les photos, les contacts, ainsi que la publicité et les identifiants publicitaires ; dans ce cas, les libellés de sécurité des données/confidentialité de l’app de la boutique concernée et les mentions dans l’application s’appliquent.'
				]
			},
			{
				title: 'Utilisation des informations',
				body: [
					'Nous utilisons les informations pour répondre aux demandes, fournir une assistance, exploiter les services, assurer la sécurité, résoudre les incidents et respecter nos obligations légales.',
					'Les données spécifiques à un produit ne sont utilisées qu’aux fins indiquées, telles que la fourniture des fonctionnalités essentielles de l’application, l’amélioration de la qualité et la prévention des abus.'
				]
			},
			{
				title: 'Partage et sous-traitants',
				body: [
					'Seori Labs ne vend pas de données personnelles.',
					'Dans la mesure nécessaire à l’exploitation, des prestataires peuvent traiter des données pour l’hébergement, la messagerie, le stockage, le déploiement, la surveillance des erreurs et d’autres besoins opérationnels.',
					'À des fins d’analyse, Google (Firebase/Google Analytics) peut traiter des données d’analyse anonymes. Elles n’identifient pas les personnes et ne sont pas utilisées à des fins publicitaires ou de suivi.',
					'Nous pouvons divulguer des informations lorsque la loi l’exige ou lorsque cela est nécessaire pour protéger des droits.'
				]
			},
			{
				title: 'Conservation',
				body: [
					'Les enregistrements de contact sont conservés aussi longtemps que nécessaire pour répondre et assurer le suivi de la communication.',
					'Les journaux techniques ne sont conservés que le temps nécessaire à la sécurité, au dépannage et à la stabilité opérationnelle, puis supprimés ou anonymisés.',
					'Les informations soumises à une obligation légale de conservation sont conservées pendant la durée requise.'
				]
			},
			{
				title: 'Vos droits',
				body: [
					'Vous pouvez demander l’accès, la rectification, la suppression ou la limitation du traitement de vos données personnelles.',
					'Envoyez vos demandes relatives à la confidentialité à l’adresse de contact ci-dessous. Nous pouvons avoir besoin d’un minimum d’informations pour vérifier la demande.'
				]
			},
			{
				title: 'Données des enfants',
				body: [
					'Nos services généraux ne s’adressent pas aux enfants de moins de 13 ans.',
					'Si nous proposons une application ou un service destiné aux enfants, nous mettrons en place une politique distincte appropriée et une procédure de consentement parental.',
					'Dans certaines applications, les utilisateurs adultes peuvent enregistrer et partager des informations sur une personne dont ils s’occupent — par exemple, les données de soins d’un enfant telles que le nom, la date de naissance et les journaux d’alimentation, de couches ou de sommeil — au sein d’un groupe privé accessible uniquement sur invitation. Ces informations sont saisies par l’aidant adulte lui-même, ne sont visibles qu’au sein de ce groupe et ne sont pas utilisées à des fins publicitaires ou de suivi. Les données précises collectées sont indiquées dans les étiquettes Data safety / App Privacy de chaque application sur le store.'
				]
			},
			{
				title: 'Modifications',
				body: [
					'En cas de modification de cette politique, nous mettrons à jour la date de dernière mise à jour sur cette page.',
					'En cas de modification importante, nous pouvons vous en informer dans le service, par e-mail ou sur notre site web.'
				]
			},
			{
				title: 'Contact',
				body: [`Contact confidentialité : ${site.email}`]
			}
		],
		footerNote:
			'Avant de soumettre une application à une boutique, vérifiez que cette politique correspond aux autorisations, aux SDK et au traitement réel des données de l’application.'
	},
	es: {
		title: 'Política de privacidad',
		description:
			'Política de privacidad de los sitios web, las aplicaciones y los servicios de Seori Labs. Los avisos específicos de cada producto se aplican con prioridad cuando una aplicación trata los datos de forma diferente.',
		kicker: 'Privacy Policy',
		lastUpdated: '19 de julio de 2026',
		lastUpdatedLabel: 'Última actualización',
		backLabel: 'Inicio',
		languageLabel: 'Idioma',
		intro:
			'Esta Política de privacidad se aplica a los sitios web, las aplicaciones y los servicios de Seori Labs que enlazan con este documento. Si una aplicación o un servicio concreto proporciona un aviso de privacidad independiente, prevalecerá ese aviso específico del producto.',
		sections: [
			{
				title: 'Información que recopilamos',
				body: [
					'Podemos recopilar la información que usted nos facilita directamente, como su nombre, su dirección de correo electrónico y su mensaje cuando se pone en contacto con nosotros.',
					'Podemos tratar registros técnicos básicos, como la dirección IP, el agente de usuario, la hora de la solicitud y el referente, para mantener los servicios fiables y seguros y analizar incidencias.',
					'Las aplicaciones y los juegos de Seori Labs pueden recopilar datos de uso anónimos (eventos e interacciones dentro de la aplicación o el juego) y un identificador de análisis anónimo mediante herramientas de análisis como Google Firebase/Google Analytics para mejorar nuestros servicios. Estos datos no identifican a personas, no se vinculan con su cuenta ni con sus contactos y no se utilizan con fines publicitarios ni de seguimiento (ATT).',
					'Algunas aplicaciones pueden utilizar datos adicionales, como cuentas, pagos (compras dentro de la aplicación), ubicación, cámara, fotos, contactos, así como publicidad e identificadores publicitarios; en esos casos se aplican las etiquetas de seguridad de los datos/privacidad de la app de la tienda correspondiente y los avisos dentro de la aplicación.'
				]
			},
			{
				title: 'Cómo usamos la información',
				body: [
					'Utilizamos la información para responder a las consultas, prestar asistencia, operar los servicios, mantener la seguridad, resolver incidencias y cumplir con las obligaciones legales.',
					'Los datos específicos de cada producto solo se utilizan para los fines indicados, como proporcionar las funciones principales de la aplicación, mejorar la calidad y prevenir el uso indebido.'
				]
			},
			{
				title: 'Divulgación y proveedores de servicios',
				body: [
					'Seori Labs no vende datos personales.',
					'En la medida necesaria para la operación, los proveedores de servicios pueden tratar datos para alojamiento, correo electrónico, almacenamiento, despliegue, supervisión de errores y otras necesidades operativas.',
					'Con fines de análisis, Google (Firebase/Google Analytics) puede tratar datos de análisis anónimos. No identifican a personas y no se utilizan con fines publicitarios ni de seguimiento.',
					'Podemos divulgar información cuando lo exija la ley o cuando sea necesario para proteger derechos.'
				]
			},
			{
				title: 'Conservación',
				body: [
					'Los registros de contacto se conservan durante el tiempo necesario para responder y mantener la comunicación de seguimiento.',
					'Los registros técnicos se conservan solo durante el tiempo necesario para la seguridad, la resolución de incidencias y la estabilidad operativa, y después se eliminan o se anonimizan.',
					'La información sujeta a obligaciones legales de conservación se conserva durante el periodo requerido.'
				]
			},
			{
				title: 'Sus derechos',
				body: [
					'Puede solicitar el acceso, la rectificación, la supresión o la limitación del tratamiento de sus datos personales.',
					'Envíe las solicitudes de privacidad a la dirección de contacto que figura a continuación. Es posible que necesitemos una información mínima para verificar la solicitud.'
				]
			},
			{
				title: 'Privacidad de los menores',
				body: [
					'Nuestros servicios generales no están dirigidos a menores de 13 años.',
					'Si ofrecemos una aplicación o un servicio dirigido a menores, estableceremos una política independiente adecuada y un procedimiento de consentimiento de los padres o tutores.',
					'Algunas aplicaciones permiten que los usuarios adultos registren y compartan información sobre una persona a su cuidado —por ejemplo, los registros de cuidado de un niño, como el nombre, la fecha de nacimiento y los registros de alimentación, pañales o sueño— dentro de un grupo privado al que solo se accede por invitación. Dicha información la introduce la persona cuidadora adulta, solo es visible dentro de ese grupo y no se utiliza con fines publicitarios ni de seguimiento. Los datos concretos que se recopilan se indican en las etiquetas de Data safety / App Privacy de cada aplicación en la tienda.'
				]
			},
			{
				title: 'Cambios',
				body: [
					'Cuando esta política cambie, actualizaremos la fecha de última actualización en esta página.',
					'En caso de cambios importantes, podemos informarle dentro del servicio, por correo electrónico o en nuestro sitio web.'
				]
			},
			{
				title: 'Contacto',
				body: [`Contacto de privacidad: ${site.email}`]
			}
		],
		footerNote:
			'Antes de enviar una aplicación a una tienda, verifique que esta política coincide con los permisos, los SDK y el tratamiento real de los datos de la aplicación.'
	}
};
