<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { bloomhandOddsContent } from '$lib/bloomhandOddsContent';
</script>

<LegalDocPage
	locale="ko"
	content={bloomhandOddsContent.ko}
	docKind="odds"
	productSlug="bloomhand"
/>
