<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { keeumPrivacyContent } from '$lib/keeumPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={keeumPrivacyContent.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/keeum/privacy/' },
		{ key: 'en', path: '/en/apps/keeum/privacy/' }
	]}
/>
