<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { hansuJanggiAitPrivacyContent } from '$lib/hansuJanggiAitPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={hansuJanggiAitPrivacyContent.ko}
	docKind="privacy"
	documentPaths={[
		{ key: 'ko', path: '/apps/jangi/apps-in-toss/privacy/' },
		{ key: 'en', path: '/en/apps/jangi/apps-in-toss/privacy/' }
	]}
	relatedLinks={[
		{ label: 'wellknowngeek@gmail.com', href: 'mailto:wellknowngeek@gmail.com' },
		{ label: 'Toss Privacy Policy', href: 'https://toss.im/privacy-policy' },
		{ label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
		{ label: 'Google Play version', href: '/apps/jangi/privacy/' }
	]}
/>
