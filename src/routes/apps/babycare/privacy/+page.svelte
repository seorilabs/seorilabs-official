<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { babycarePrivacyContent } from '$lib/babycarePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={babycarePrivacyContent.ko}
	docKind="privacy"
	productSlug="babycare"
/>
