<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { cyclePairAccountDeletionContent } from '$lib/cyclePairAccountDeletionContent';

	const contactHref = 'mailto:cs@seorilabs.com?subject=Cycle%20Pair%20Account%20Deletion%20Request';
</script>

<LegalDocPage
	locale="en"
	content={cyclePairAccountDeletionContent.en}
	docKind="account-deletion"
	productSlug="cycle-pair"
	{contactHref}
/>
