<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { hansuJanggiPrivacyContent } from '$lib/hansuJanggiPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={hansuJanggiPrivacyContent.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/jangi/privacy/' },
		{ key: 'en', path: '/en/apps/jangi/privacy/' }
	]}
	contactHref="mailto:wellknowngeek@gmail.com"
/>
