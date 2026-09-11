<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { jomulPrivacyContent } from '$lib/jomulPrivacyContent';
</script>

<LegalDocPage locale="ko" content={jomulPrivacyContent.ko} docKind="privacy" productSlug="jomul" />
