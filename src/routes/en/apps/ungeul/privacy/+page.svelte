<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { ungeulPrivacyContent } from '$lib/ungeulPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={ungeulPrivacyContent.en}
	docKind="privacy"
	productSlug="ungeul"
/>
