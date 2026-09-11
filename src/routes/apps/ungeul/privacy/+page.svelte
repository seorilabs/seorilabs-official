<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { ungeulPrivacyContent } from '$lib/ungeulPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={ungeulPrivacyContent.ko}
	docKind="privacy"
	productSlug="ungeul"
/>
