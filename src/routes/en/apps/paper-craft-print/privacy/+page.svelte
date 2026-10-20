<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { paperCraftPrintPrivacyContent } from '$lib/paperCraftPrintPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={paperCraftPrintPrivacyContent.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/paper-craft-print/privacy/' },
		{ key: 'en', path: '/en/apps/paper-craft-print/privacy/' }
	]}
/>
