<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import {
		mergeLizardPrivacyContent,
		mergeLizardPrivacyPaths
	} from '$lib/mergeLizardPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={mergeLizardPrivacyContent.en}
	docKind="privacy"
	documentPaths={mergeLizardPrivacyPaths}
	relatedLinks={[
		{ label: 'Account and data deletion', href: '/en/apps/merge-lizard/account-deletion/' },
		{ label: 'Mystery Egg odds', href: '/en/apps/merge-lizard/odds/' }
	]}
/>
