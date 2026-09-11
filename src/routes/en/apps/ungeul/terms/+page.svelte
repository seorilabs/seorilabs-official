<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { ungeulTermsContent } from '$lib/ungeulTermsContent';
</script>

<LegalDocPage locale="en" content={ungeulTermsContent.en} docKind="terms" productSlug="ungeul" />
