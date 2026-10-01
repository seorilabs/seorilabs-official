<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { vernhaldPrivacyContent } from '$lib/vernhaldPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={vernhaldPrivacyContent.ko}
	docKind="privacy"
	productSlug="vernhald"
/>
