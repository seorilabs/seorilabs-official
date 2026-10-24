<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lucidChessPrivacyContent } from '$lib/lucidChessPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={lucidChessPrivacyContent.ko}
	docKind="privacy"
	productSlug="lucid-chess"
	relatedLinks={[
		{ label: '회사 공통 개인정보 처리방침', href: '/privacy/' },
		{ label: 'Google 개인정보처리방침', href: 'https://policies.google.com/privacy' },
		{ label: 'Firebase의 데이터 보관 안내', href: 'https://firebase.google.com/support/privacy' },
		{ label: '토스 개인정보처리방침', href: 'https://toss.im/privacy-policy' }
	]}
/>
