<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { reascendAccountDeletionContent } from '$lib/reascendAccountDeletionContent';

	const contactHref =
		'mailto:cs@seorilabs.com?subject=Reascend%20account%20deletion%20request';
</script>

<LegalDocPage
	locale="en"
	content={reascendAccountDeletionContent.en}
	docKind="account-deletion"
	productSlug="reascend"
	{contactHref}
/>
