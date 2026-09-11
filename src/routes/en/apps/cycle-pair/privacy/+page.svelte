<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { cyclePairPrivacyContent } from '$lib/cyclePairPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={cyclePairPrivacyContent.en}
	docKind="privacy"
	productSlug="cycle-pair"
/>
