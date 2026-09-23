<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { mergeArmadaPrivacyContent } from '$lib/mergeArmadaPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={mergeArmadaPrivacyContent.en}
	docKind="privacy"
	productSlug="merge-armada"
/>
