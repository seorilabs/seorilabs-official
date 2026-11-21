<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { fourAlikePrivacyContent } from '$lib/fourAlikePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={fourAlikePrivacyContent.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/four-alike/privacy/' },
		{ key: 'en', path: '/en/apps/four-alike/privacy/' }
	]}
/>
