<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { bloomhandOddsContent } from '$lib/bloomhandOddsContent';
</script>

<LegalDocPage
	locale="en"
	content={bloomhandOddsContent.en}
	docKind="odds"
	productSlug="bloomhand"
/>
