<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { malangPrivacyContent } from '$lib/malangPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={malangPrivacyContent.en}
	docKind="privacy"
	productSlug="malang"
/>
