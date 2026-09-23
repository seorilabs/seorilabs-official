<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { saltCompassPrivacyContent } from '$lib/saltCompassPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={saltCompassPrivacyContent.ko}
	docKind="privacy"
	productSlug="salt-compass"
/>
