<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { gatherPuzzlePrivacyContent } from '$lib/gatherPuzzlePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={gatherPuzzlePrivacyContent.en}
	docKind="privacy"
	productSlug="gather-puzzle"
/>
