<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { babycarePrivacyContent } from '$lib/babycarePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={babycarePrivacyContent.en}
	docKind="privacy"
	productSlug="babycare"
/>
