<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { matgoPrivacyContent } from '$lib/matgoPrivacyContent';
</script>

<LegalDocPage locale="en" content={matgoPrivacyContent.en} docKind="privacy" productSlug="matgo" />
