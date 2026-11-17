<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { malangPrivacyContent } from '$lib/malangPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={malangPrivacyContent.ko}
	docKind="privacy"
	productSlug="malang"
/>
