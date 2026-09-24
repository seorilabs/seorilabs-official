<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { bloomhandPrivacyContent } from '$lib/bloomhandPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={bloomhandPrivacyContent.ko}
	docKind="privacy"
	productSlug="bloomhand"
/>
