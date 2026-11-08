<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { happyFarmPrivacyContent } from '$lib/happyFarmPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={happyFarmPrivacyContent.ko}
	docKind="privacy"
	productSlug="happy-farm"
	relatedLinks={[
		{ label: 'Google 개인정보 처리방침', href: 'https://policies.google.com/privacy' },
		{ label: 'Firebase 개인정보 및 보안', href: 'https://firebase.google.com/support/privacy' }
	]}
/>
