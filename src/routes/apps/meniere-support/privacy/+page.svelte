<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { menierePrivacyContent } from '$lib/menierePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={menierePrivacyContent.ko}
	docKind="privacy"
	productSlug="meniere-support"
/>
