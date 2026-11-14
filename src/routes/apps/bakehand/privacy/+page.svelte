<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { bakehandPrivacyContent } from '$lib/bakehandPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={bakehandPrivacyContent.ko}
	docKind="privacy"
	productSlug="bakehand"
/>
