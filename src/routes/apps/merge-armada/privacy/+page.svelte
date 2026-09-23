<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { mergeArmadaPrivacyContent } from '$lib/mergeArmadaPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={mergeArmadaPrivacyContent.ko}
	docKind="privacy"
	productSlug="merge-armada"
/>
