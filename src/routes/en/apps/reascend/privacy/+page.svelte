<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { reascendPrivacyContent } from '$lib/reascendPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={reascendPrivacyContent.en}
	docKind="privacy"
	productSlug="reascend"
/>
