<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { memorizeAllPrivacyContent } from '$lib/memorizeAllPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={memorizeAllPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/memorize-all/privacy/' },
		{ key: 'en', path: '/en/apps/memorize-all/privacy/' }
	]}
/>
