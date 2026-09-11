<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { ungeulTermsContent } from '$lib/ungeulTermsContent';
</script>

<LegalDocPage locale="ko" content={ungeulTermsContent.ko} docKind="terms" productSlug="ungeul" />
