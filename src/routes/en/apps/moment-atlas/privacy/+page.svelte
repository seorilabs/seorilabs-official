<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { momentAtlasPrivacyContent } from '$lib/momentAtlasPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={momentAtlasPrivacyContent.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/moment-atlas/privacy/' },
		{ key: 'en', path: '/en/apps/moment-atlas/privacy/' }
	]}
/>
