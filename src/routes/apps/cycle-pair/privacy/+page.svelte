<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { cyclePairPrivacyContent } from '$lib/cyclePairPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={cyclePairPrivacyContent.ko}
	docKind="privacy"
	productSlug="cycle-pair"
/>
