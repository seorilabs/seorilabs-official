<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { happyFarmPrivacyContent } from '$lib/happyFarmPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={happyFarmPrivacyContent.en}
	docKind="privacy"
	productSlug="happy-farm"
	relatedLinks={[
		{ label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
		{
			label: 'Privacy and Security in Firebase',
			href: 'https://firebase.google.com/support/privacy'
		}
	]}
/>
