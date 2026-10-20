<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { keeumPrivacyContent } from '$lib/keeumPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={keeumPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/keeum/privacy/' },
		{ key: 'en', path: '/en/apps/keeum/privacy/' }
	]}
/>
