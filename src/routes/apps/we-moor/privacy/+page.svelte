<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { weMoorPrivacyContent } from '$lib/weMoorPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={weMoorPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/we-moor/privacy/' },
		{ key: 'en', path: '/en/apps/we-moor/privacy/' }
	]}
/>
