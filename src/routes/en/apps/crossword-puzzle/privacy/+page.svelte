<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { crosswordPrivacyContent } from '$lib/crosswordPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={crosswordPrivacyContent.en}
	docKind="privacy"
	productSlug="crossword-puzzle"
/>
