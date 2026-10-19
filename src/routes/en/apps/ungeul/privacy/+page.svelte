<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { ungeulPrivacyContent } from '$lib/ungeulPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={ungeulPrivacyContent.en}
	docKind="privacy"
	productSlug="ungeul"
	relatedLinks={[
		{
			label: 'How Google uses data from partner apps',
			href: 'https://policies.google.com/technologies/partner-sites?hl=en'
		},
		{ label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy?hl=en' }
	]}
/>
