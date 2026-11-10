<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { gatherPuzzlePrivacyContent } from '$lib/gatherPuzzlePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={gatherPuzzlePrivacyContent.ko}
	docKind="privacy"
	productSlug="gather-puzzle"
/>
