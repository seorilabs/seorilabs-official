<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { menierePrivacyContent, menierePrivacyPaths } from '$lib/menierePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={menierePrivacyContent.ko}
	docKind="privacy"
	documentPaths={menierePrivacyPaths}
/>
