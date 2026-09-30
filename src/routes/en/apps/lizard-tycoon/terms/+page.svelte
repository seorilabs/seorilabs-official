<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lizardTycoonTermsContent } from '$lib/lizardTycoonTermsContent';
</script>

<LegalDocPage
	locale="en"
	content={lizardTycoonTermsContent.en}
	docKind="terms"
	productSlug="lizard-tycoon"
/>
