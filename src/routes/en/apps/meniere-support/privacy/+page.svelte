<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { menierePrivacyContent } from '$lib/menierePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={menierePrivacyContent.en}
	docKind="privacy"
	productSlug="meniere-support"
/>
