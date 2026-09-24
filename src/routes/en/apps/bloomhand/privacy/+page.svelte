<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { bloomhandPrivacyContent } from '$lib/bloomhandPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={bloomhandPrivacyContent.en}
	docKind="privacy"
	productSlug="bloomhand"
/>
