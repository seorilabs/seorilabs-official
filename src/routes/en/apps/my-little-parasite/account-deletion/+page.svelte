<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { parasiteDeletion } from '$lib/parasiteLegalContent';
</script>

<LegalDocPage
	locale="en"
	content={parasiteDeletion.en}
	docKind="account-deletion"
	documentPaths={[
		{ key: 'ko', path: '/apps/my-little-parasite/account-deletion/' },
		{ key: 'en', path: '/en/apps/my-little-parasite/account-deletion/' }
	]}
	contactHref="mailto:cs@seorilabs.com?subject=My%20Little%20Parasite%20account%20deletion%20request"
	relatedLinks={[
		{ label: 'Privacy policy', href: '/en/apps/my-little-parasite/privacy/' },
		{ label: 'Support', href: '/en/apps/my-little-parasite/support/' }
	]}
/>
