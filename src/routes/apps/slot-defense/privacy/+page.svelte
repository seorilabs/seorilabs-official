<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { slotDefensePrivacyContent } from '$lib/slotDefensePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={slotDefensePrivacyContent.ko}
	docKind="privacy"
	productSlug="slot-defense"
/>
