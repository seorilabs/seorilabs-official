<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lizardTycoonPrivacyContent } from '$lib/lizardTycoonPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={lizardTycoonPrivacyContent.en}
	docKind="privacy"
	productSlug="lizard-tycoon"
/>
