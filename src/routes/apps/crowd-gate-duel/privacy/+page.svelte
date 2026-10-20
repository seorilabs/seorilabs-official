<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { crowdGateDuelPrivacyContent } from '$lib/crowdGateDuelPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={crowdGateDuelPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/crowd-gate-duel/privacy/' },
		{ key: 'en', path: '/en/apps/crowd-gate-duel/privacy/' }
	]}
/>
