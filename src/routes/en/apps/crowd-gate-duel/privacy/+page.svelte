<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { crowdGateDuelPrivacyContent } from '$lib/crowdGateDuelPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={crowdGateDuelPrivacyContent.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/crowd-gate-duel/privacy/' },
		{ key: 'en', path: '/en/apps/crowd-gate-duel/privacy/' }
	]}
/>
