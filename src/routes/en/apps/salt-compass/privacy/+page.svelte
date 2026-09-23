<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { saltCompassPrivacyContent } from '$lib/saltCompassPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={saltCompassPrivacyContent.en}
	docKind="privacy"
	productSlug="salt-compass"
/>
