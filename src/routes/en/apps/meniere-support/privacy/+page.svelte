<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { menierePrivacyContent, menierePrivacyPaths } from '$lib/menierePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={menierePrivacyContent.en}
	docKind="privacy"
	documentPaths={menierePrivacyPaths}
/>
