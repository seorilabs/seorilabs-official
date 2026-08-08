<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import { cyclePairAccountDeletionContent } from '$lib/cyclePairAccountDeletionContent';

	const contactHref = 'mailto:cs@seorilabs.com?subject=Cycle%20Pair%20Account%20Deletion%20Request';
</script>

<LegalPage
	locale="en"
	page="support"
	contentOverride={cyclePairAccountDeletionContent.en}
	canonicalPath="/en/apps/cycle-pair/account-deletion/"
	{contactHref}
/>
