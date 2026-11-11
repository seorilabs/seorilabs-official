<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { slotDefensePrivacyContent } from '$lib/slotDefensePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={slotDefensePrivacyContent.en}
	docKind="privacy"
	productSlug="slot-defense"
/>
