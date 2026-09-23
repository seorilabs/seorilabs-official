<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { reascendPrivacyContent } from '$lib/reascendPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={reascendPrivacyContent.ko}
	docKind="privacy"
	productSlug="reascend"
/>
