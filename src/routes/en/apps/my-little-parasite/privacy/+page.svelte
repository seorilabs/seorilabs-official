<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { parasitePrivacy } from '$lib/parasiteLegalContent';
</script>

<LegalDocPage
	locale="en"
	content={parasitePrivacy.en}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/my-little-parasite/privacy/' },
		{ key: 'en', path: '/en/apps/my-little-parasite/privacy/' }
	]}
	contactHref="mailto:cs@seorilabs.com?subject=My%20Little%20Parasite%20support"
	relatedLinks={[
		{ label: 'Privacy policy', href: '/en/apps/my-little-parasite/privacy/' },
		{ label: 'Account deletion', href: '/en/apps/my-little-parasite/account-deletion/' }
	]}
/>
