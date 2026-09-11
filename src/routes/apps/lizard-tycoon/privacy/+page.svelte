<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lizardTycoonPrivacyContent } from '$lib/lizardTycoonPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={lizardTycoonPrivacyContent.ko}
	docKind="privacy"
	productSlug="lizard-tycoon"
/>
