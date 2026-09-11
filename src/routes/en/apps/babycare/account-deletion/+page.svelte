<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { babycareAccountDeletionContent } from '$lib/babycareAccountDeletionContent';

	const contactHref = 'mailto:cs@seorilabs.com?subject=BabyNest%20Account%20Deletion%20Request';
</script>

<LegalDocPage
	locale="en"
	content={babycareAccountDeletionContent.en}
	docKind="account-deletion"
	productSlug="babycare"
	{contactHref}
/>
