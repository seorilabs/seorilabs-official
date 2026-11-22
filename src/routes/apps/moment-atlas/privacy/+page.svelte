<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { momentAtlasPrivacyContent } from '$lib/momentAtlasPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={momentAtlasPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/moment-atlas/privacy/' },
		{ key: 'en', path: '/en/apps/moment-atlas/privacy/' }
	]}
/>
