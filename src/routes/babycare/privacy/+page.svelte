<script lang="ts">
	import { ArrowLeft, Mail } from '@lucide/svelte';
	import { site } from '$lib/content';

	const title = '함께봄 / BabyNest 개인정보 처리방침';
	const description =
		'함께봄(BabyNest)은 여러 양육자가 아기의 수유·기저귀·수면을 함께 기록·공유하는 앱입니다. 이 문서는 함께봄 앱에 우선 적용되는 개인정보 처리방침입니다.';
	const lastUpdated = '2026년 7월 18일';
	const canonical = `${site.url}/babycare/privacy/`;

	const sections = [
		{
			title: '적용 범위와 서비스 성격',
			body: [
				'이 개인정보 처리방침은 서리랩스(Seori Labs, 이하 "회사")가 제공하는 앱 함께봄(BabyNest, 이하 "서비스")에 적용됩니다. 서리랩스의 일반 개인정보 처리방침보다 이 문서가 함께봄에 우선 적용됩니다.',
				'함께봄은 부모·조부모·베이비시터 등 성인 양육자가 아기의 수유·기저귀·수면을 함께 기록하고 확인하는 도구입니다. 의료 진단·처방·치료 판단을 제공하지 않습니다.',
				'함께봄은 아동이 직접 가입·이용하는 서비스가 아닙니다. 서비스에 입력되는 아기 관련 정보는 성인 양육자가 자신이 돌보는 아기에 대해 직접 입력·관리하는 정보입니다.'
			]
		},
		{
			title: '수집하는 정보',
			body: [
				'계정 정보: 회원가입·로그인 시 이메일 주소, 사용자 식별자(UID), 표시 이름을 처리합니다.',
				'돌봄 기록: 이용자가 앱에서 직접 입력하는 아기의 이름·생년월일(선택), 수유·기저귀·수면 기록의 값과 시각, 메모, 기록자 정보, 돌봄 그룹 구성·초대·합류 이력을 처리합니다.',
				'진단 정보: 서비스 안정성과 오류 개선을 위해 비정상 종료·성능 등 진단 데이터를 처리할 수 있습니다. 이때 아기의 이름·생년월일·기록 값·메모 등 민감한 돌봄 데이터는 분석·오류 진단 도구로 전송하지 않으며, 이벤트 유형 등 허용 목록(allowlist) 정보만 전송합니다.',
				'함께봄은 위치정보, 광고 식별자, 결제 정보를 수집하지 않으며, 광고를 표시하지 않고 이용자를 추적(ATT)하지 않습니다.'
			]
		},
		{
			title: '정보의 이용 목적',
			body: [
				'계정 인증 및 이용자 식별.',
				'돌봄 기록의 저장, 실시간 동기화, 초대된 돌봄 그룹 내 공유.',
				'오프라인 기록의 저장 및 재연결 시 동기화.',
				'서비스 안정성 확보와 오류 진단·개선.'
			]
		},
		{
			title: '제3자 제공 및 처리위탁',
			body: [
				'회사는 이용자의 개인정보를 판매하지 않으며, 동의 없이 제3자에게 제공하지 않습니다.',
				'서비스 운영을 위해 Google(Firebase)에 인증, 데이터 저장·동기화, 서버 기능, 오류·성능 진단을 위한 처리를 위탁합니다(Firebase Authentication, Cloud Firestore, Cloud Functions, Crashlytics/Analytics).',
				'돌봄 데이터는 초대된 돌봄 그룹 구성원에게만 표시되며, 공개 다운로드 토큰 URL을 저장하지 않습니다.',
				'법령상 요구가 있거나 권리 보호를 위해 필요한 경우 관련 법령에 따라 정보를 제공할 수 있습니다.'
			]
		},
		{
			title: '보관 및 파기',
			body: [
				'이용자의 계정과 돌봄 기록은 회원 탈퇴(계정 삭제) 시 또는 관련 법령이 정한 기간 경과 시 파기합니다.',
				'이용자는 앱 내에서 본인 기록의 삭제와 계정 삭제를 요청할 수 있으며, 계정 삭제 시 연동된 개인정보와 기기 로컬 캐시를 삭제합니다.'
			]
		},
		{
			title: '이용자의 권리',
			body: [
				'이용자는 언제든지 본인의 개인정보 열람·정정·삭제, 처리 정지, 계정 삭제를 요청할 수 있습니다.',
				'돌봄 그룹에서 제거된 멤버는 이후 그룹 데이터와 사진의 새 요청에 접근할 수 없습니다.'
			]
		},
		{
			title: '안전성 확보 조치',
			body: [
				'전송 구간 암호화(HTTPS/TLS)를 적용합니다.',
				'돌봄 그룹 멤버십 기반 접근 통제(서버 보안 규칙)로 비멤버·제거된 멤버의 접근을 차단합니다.',
				'service account, 비공개 키, 관리자 SDK는 앱에 포함하지 않습니다.',
				'멤버 제거·로그아웃·계정 삭제 시 민감 데이터의 로컬 캐시 삭제 경로를 운영합니다.'
			]
		},
		{
			title: '아동 관련 정보',
			body: [
				'함께봄은 아동이 직접 이용하는 서비스가 아닙니다. 서비스에 입력되는 아기 관련 정보는 성인 양육자가 자신의 책임 하에 입력·관리하는 정보이며, 초대된 돌봄 그룹 내부에서만 공유됩니다.'
			]
		},
		{
			title: '문의',
			body: [
				'개인정보 처리에 관한 문의는 아래 이메일로 접수할 수 있습니다.',
				'본 방침의 내용 추가·삭제·수정이 있을 경우 개정 내용을 앱 또는 이 페이지를 통해 공지합니다.'
			]
		}
	];
</script>

<svelte:head>
	<title>{title} - {site.name}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content="#f6f8f8" />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={`${title} - ${site.name}`} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
</svelte:head>

<main class="legal-page" lang="ko">
	<header class="legal-header">
		<a class="brand" href="/" aria-label={site.name}>
			<span class="brand-mark">S</span>
			<span>{site.name}</span>
		</a>
		<nav aria-label="Legal pages">
			<a href="/babycare/privacy/" aria-current="page">함께봄 개인정보</a>
			<a href="/privacy/">일반 개인정보</a>
			<a href="/support/">지원</a>
		</nav>
	</header>

	<section class="legal-hero">
		<a class="back-link" href="/">
			<ArrowLeft size={17} aria-hidden="true" />
			<span>홈으로</span>
		</a>
		<p class="kicker">Privacy Policy · 함께봄 / BabyNest</p>
		<h1>{title}</h1>
		<p class="intro">{description}</p>
		<div class="meta-row">
			<span>최종 수정일: {lastUpdated}</span>
		</div>
	</section>

	<section class="legal-content" aria-label={title}>
		{#each sections as section}
			<article>
				<h2>{section.title}</h2>
				{#each section.body as paragraph}
					<p>{paragraph}</p>
				{/each}
			</article>
		{/each}
	</section>

	<section class="legal-note">
		<p>함께봄 / BabyNest 개인정보 처리 관련 문의는 아래로 연락해 주세요.</p>
		<a href={`mailto:${site.email}`}>
			<Mail size={18} aria-hidden="true" />
			<span>{site.email}</span>
		</a>
	</section>
</main>

<style>
	.legal-page {
		min-height: 100vh;
		background: linear-gradient(180deg, #f6f8f8 0%, #eef4f3 100%), #f6f8f8;
	}

	.legal-header,
	.legal-hero,
	.legal-content,
	.legal-note {
		width: min(920px, calc(100% - 40px));
		margin: 0 auto;
	}

	.legal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		padding: 24px 0;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-weight: 800;
	}

	.brand-mark {
		display: inline-grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border: 1px solid rgba(19, 32, 39, 0.16);
		background: rgba(255, 255, 255, 0.8);
		color: #0f6f8a;
		font-weight: 900;
		border-radius: 8px;
	}

	.legal-header nav {
		display: inline-flex;
		align-items: center;
		gap: 16px;
		color: rgba(19, 32, 39, 0.68);
		font-size: 0.92rem;
		font-weight: 800;
	}

	.legal-header nav a {
		display: inline-flex;
		align-items: center;
		min-height: 36px;
	}

	.legal-header nav a[aria-current='page'] {
		color: #0f6f8a;
	}

	.legal-hero {
		padding: 74px 0 54px;
	}

	.back-link,
	.meta-row,
	.legal-note a {
		display: inline-flex;
		align-items: center;
	}

	.back-link {
		gap: 8px;
		margin-bottom: 34px;
		color: #0f6f8a;
		font-size: 0.92rem;
		font-weight: 900;
	}

	.kicker {
		margin: 0 0 16px;
		color: #0f6f8a;
		font-size: 0.84rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 22px;
		color: #10191e;
		font-size: 3.2rem;
		line-height: 1.08;
		letter-spacing: 0;
		word-break: keep-all;
	}

	.intro {
		max-width: 780px;
		margin-bottom: 28px;
		color: rgba(19, 32, 39, 0.72);
		font-size: 1.12rem;
		line-height: 1.78;
		word-break: keep-all;
	}

	.meta-row {
		flex-wrap: wrap;
		gap: 12px;
		color: rgba(19, 32, 39, 0.62);
		font-size: 0.92rem;
		font-weight: 800;
	}

	.legal-content {
		display: grid;
		gap: 12px;
		padding-bottom: 30px;
	}

	.legal-content article,
	.legal-note {
		border: 1px solid rgba(18, 33, 40, 0.1);
		background: rgba(255, 255, 255, 0.74);
		border-radius: 8px;
	}

	.legal-content article {
		padding: 28px;
	}

	h2 {
		margin-bottom: 16px;
		color: #132027;
		font-size: 1.35rem;
		line-height: 1.25;
	}

	.legal-content p {
		margin-bottom: 10px;
		color: rgba(19, 32, 39, 0.72);
		font-size: 1rem;
		line-height: 1.78;
		word-break: keep-all;
	}

	.legal-content p:last-child {
		margin-bottom: 0;
	}

	.legal-note {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		margin-bottom: 64px;
		padding: 22px 24px;
	}

	.legal-note p {
		margin-bottom: 0;
		color: rgba(19, 32, 39, 0.72);
		line-height: 1.65;
		word-break: keep-all;
	}

	.legal-note a {
		flex: 0 0 auto;
		gap: 8px;
		color: #0f6f8a;
		font-weight: 900;
	}

	@media (max-width: 720px) {
		.legal-header,
		.legal-hero,
		.legal-content,
		.legal-note {
			width: calc(100% - 28px);
		}

		.legal-header {
			display: grid;
			gap: 18px;
		}

		.legal-header nav {
			justify-content: space-between;
			gap: 10px;
			width: 100%;
			font-size: 0.86rem;
		}

		.legal-hero {
			padding: 48px 0 38px;
		}

		h1 {
			font-size: 2.35rem;
		}

		.intro,
		.legal-content p,
		.legal-note p {
			overflow-wrap: anywhere;
		}

		.legal-note {
			display: grid;
			gap: 14px;
		}
	}
</style>
