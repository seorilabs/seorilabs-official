<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { jomulPrivacyContent } from '$lib/jomulPrivacyContent';
</script>

<LegalDocPage locale="en" content={jomulPrivacyContent.en} docKind="privacy" productSlug="jomul" />
