<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { memorizeAllPrivacyContent } from '$lib/memorizeAllPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={memorizeAllPrivacyContent.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/memorize-all/privacy/' },
		{ key: 'en', path: '/en/apps/memorize-all/privacy/' }
	]}
/>
