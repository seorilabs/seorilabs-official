<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { sharedTermsContent } from '$lib/legal/sharedTermsContent';
</script>

<LegalDocPage locale="en" content={sharedTermsContent('en')} docKind="terms" />
