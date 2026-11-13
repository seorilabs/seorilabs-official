<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { parasiteDeletion } from '$lib/parasiteLegalContent';
</script>

<LegalDocPage
	locale="ko"
	content={parasiteDeletion.ko}
	docKind="account-deletion"
	documentPaths={[
		{ key: 'ko', path: '/apps/my-little-parasite/account-deletion/' },
		{ key: 'en', path: '/en/apps/my-little-parasite/account-deletion/' }
	]}
	contactHref="mailto:cs@seorilabs.com?subject=My%20Little%20Parasite%20account%20deletion%20request"
	relatedLinks={[
		{ label: '개인정보 처리방침', href: '/apps/my-little-parasite/privacy/' },
		{ label: '이용 안내', href: '/apps/my-little-parasite/support/' }
	]}
/>
