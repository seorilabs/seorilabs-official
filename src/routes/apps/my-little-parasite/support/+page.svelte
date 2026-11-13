<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { parasiteSupport } from '$lib/parasiteLegalContent';
</script>

<LegalDocPage
	locale="ko"
	content={parasiteSupport.ko}
	docKind="support"
	documentPaths={[
		{ key: 'ko', path: '/apps/my-little-parasite/support/' },
		{ key: 'en', path: '/en/apps/my-little-parasite/support/' }
	]}
	contactHref="mailto:cs@seorilabs.com?subject=My%20Little%20Parasite%20support"
	relatedLinks={[
		{ label: '개인정보 처리방침', href: '/apps/my-little-parasite/privacy/' },
		{ label: '계정 삭제', href: '/apps/my-little-parasite/account-deletion/' }
	]}
/>
