<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import { babycareAccountDeletionContent } from '$lib/babycareAccountDeletionContent';

	const contactHref = 'mailto:cs@seorilabs.com?subject=BabyNest%20Account%20Deletion%20Request';
</script>

<LegalPage
	locale="en"
	page="support"
	contentOverride={babycareAccountDeletionContent.en}
	canonicalPath="/en/apps/babycare/account-deletion/"
	{contactHref}
/>
