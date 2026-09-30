<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lizardTycoonTermsContent } from '$lib/lizardTycoonTermsContent';
</script>

<LegalDocPage
	locale="ko"
	content={lizardTycoonTermsContent.ko}
	docKind="terms"
	productSlug="lizard-tycoon"
/>
