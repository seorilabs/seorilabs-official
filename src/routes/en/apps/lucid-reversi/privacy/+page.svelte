<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lucidReversiPrivacyContent } from '$lib/lucidReversiPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={lucidReversiPrivacyContent.en}
	docKind="privacy"
	productSlug="lucid-reversi"
/>
