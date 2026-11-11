<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { titanstridePrivacyContent } from '$lib/titanstridePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={titanstridePrivacyContent.en}
	docKind="privacy"
	productSlug="titanstride"
/>
