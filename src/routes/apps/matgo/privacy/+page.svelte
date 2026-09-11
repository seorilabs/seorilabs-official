<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { matgoPrivacyContent } from '$lib/matgoPrivacyContent';
</script>

<LegalDocPage locale="ko" content={matgoPrivacyContent.ko} docKind="privacy" productSlug="matgo" />
