<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { bakehandPrivacyContent } from '$lib/bakehandPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={bakehandPrivacyContent.en}
	docKind="privacy"
	productSlug="bakehand"
/>
