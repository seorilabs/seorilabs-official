<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { bakehandPrivacyContent } from '$lib/bakehandPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={bakehandPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/bakehand/privacy/' },
		{ key: 'en', path: '/en/apps/bakehand/privacy/' }
	]}
/>
