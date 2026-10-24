<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lucidChessPrivacyContent } from '$lib/lucidChessPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={lucidChessPrivacyContent.en}
	docKind="privacy"
	productSlug="lucid-chess"
	relatedLinks={[
		{ label: 'General privacy policy', href: '/en/privacy/' },
		{ label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
		{ label: 'Firebase data retention', href: 'https://firebase.google.com/support/privacy' },
		{ label: 'Toss Privacy Policy', href: 'https://toss.im/privacy-policy' }
	]}
/>
