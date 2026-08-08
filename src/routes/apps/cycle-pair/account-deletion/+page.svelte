<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import { cyclePairAccountDeletionContent } from '$lib/cyclePairAccountDeletionContent';

	const contactHref =
		'mailto:cs@seorilabs.com?subject=%EC%82%AC%EC%9D%B4%ED%81%B4%20%ED%8E%98%EC%96%B4%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD';
</script>

<LegalPage
	locale="ko"
	page="support"
	contentOverride={cyclePairAccountDeletionContent.ko}
	canonicalPath="/apps/cycle-pair/account-deletion/"
	{contactHref}
/>
