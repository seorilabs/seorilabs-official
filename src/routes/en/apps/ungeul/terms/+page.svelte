<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import { ungeulTermsContent } from '$lib/ungeulTermsContent';
</script>

<LegalPage
	locale="en"
	page="terms"
	contentOverride={ungeulTermsContent.en}
	canonicalPath="/en/apps/ungeul/terms/"
/>
