<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { sharedTermsContent } from '$lib/legal/sharedTermsContent';
</script>

<LegalDocPage locale="ko" content={sharedTermsContent('ko')} docKind="terms" />
