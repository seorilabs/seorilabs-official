<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import { ungeulTermsContent } from '$lib/ungeulTermsContent';
</script>

<LegalPage
	locale="ko"
	page="terms"
	contentOverride={ungeulTermsContent.ko}
	canonicalPath="/apps/ungeul/terms/"
/>
