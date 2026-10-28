<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { monsterPartyPrivacyContent } from '$lib/monsterPartyPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={monsterPartyPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/monster-party/privacy/' },
		{ key: 'en', path: '/en/apps/monster-party/privacy/' }
	]}
/>
