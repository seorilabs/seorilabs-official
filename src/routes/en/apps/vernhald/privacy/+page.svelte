<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { vernhaldPrivacyContent } from '$lib/vernhaldPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={vernhaldPrivacyContent.en}
	docKind="privacy"
	productSlug="vernhald"
/>
