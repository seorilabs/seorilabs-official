<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import { babycareAccountDeletionContent } from '$lib/babycareAccountDeletionContent';

	const contactHref =
		'mailto:cs@seorilabs.com?subject=%ED%95%A8%EA%BB%98%EB%B4%84%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD';
</script>

<LegalPage
	locale="ko"
	page="support"
	contentOverride={babycareAccountDeletionContent.ko}
	canonicalPath="/apps/babycare/account-deletion/"
	{contactHref}
/>
