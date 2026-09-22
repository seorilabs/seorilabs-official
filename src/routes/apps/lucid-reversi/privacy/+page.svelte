<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lucidReversiPrivacyContent } from '$lib/lucidReversiPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={lucidReversiPrivacyContent.ko}
	docKind="privacy"
	productSlug="lucid-reversi"
/>
