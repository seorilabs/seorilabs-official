<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { reascendAccountDeletionContent } from '$lib/reascendAccountDeletionContent';

	const contactHref =
		'mailto:cs@seorilabs.com?subject=%EB%A6%AC%EC%96%B4%EC%84%BC%EB%93%9C%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD';
</script>

<LegalDocPage
	locale="ko"
	content={reascendAccountDeletionContent.ko}
	docKind="account-deletion"
	productSlug="reascend"
	{contactHref}
/>
