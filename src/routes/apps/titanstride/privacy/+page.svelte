<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { titanstridePrivacyContent } from '$lib/titanstridePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={titanstridePrivacyContent.ko}
	docKind="privacy"
	productSlug="titanstride"
/>
