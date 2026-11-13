<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { parasiteSupport } from '$lib/parasiteLegalContent';
</script>

<LegalDocPage
	locale="en"
	content={parasiteSupport.en}
	docKind="support"
	documentPaths={[
		{ key: 'ko', path: '/apps/my-little-parasite/support/' },
		{ key: 'en', path: '/en/apps/my-little-parasite/support/' }
	]}
	contactHref="mailto:cs@seorilabs.com?subject=My%20Little%20Parasite%20support"
	relatedLinks={[
		{ label: 'Privacy policy', href: '/en/apps/my-little-parasite/privacy/' },
		{ label: 'Account deletion', href: '/en/apps/my-little-parasite/account-deletion/' }
	]}
/>
