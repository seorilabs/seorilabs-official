<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { starlitApprenticePrivacyContent } from '$lib/starlitApprenticePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={starlitApprenticePrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/starlit-apprentice/privacy/' },
		{ key: 'en', path: '/en/apps/starlit-apprentice/privacy/' }
	]}
/>
