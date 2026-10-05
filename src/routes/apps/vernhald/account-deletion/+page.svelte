<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { vernhaldAccountDeletionContent } from '$lib/vernhaldAccountDeletionContent';
	const contactHref =
		'mailto:cs@seorilabs.com?subject=Vernhald%20Chronicles%20League%20Data%20Deletion%20Request';
</script>

<LegalDocPage
	locale="ko"
	content={vernhaldAccountDeletionContent.ko}
	docKind="account-deletion"
	productSlug="vernhald"
	{contactHref}
/>
