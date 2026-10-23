<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lucidChessPrivacyContent } from '$lib/lucidChessPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={lucidChessPrivacyContent.ko}
	docKind="privacy"
	productSlug="lucid-chess"
/>
