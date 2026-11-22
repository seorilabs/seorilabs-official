<script lang="ts">
	import {
		animalSoundPrivacyContent,
		animalSoundPrivacyPaths
	} from '$lib/animalSoundPrivacyContent';
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
</script>

<LegalDocPage
	locale="en"
	content={animalSoundPrivacyContent.en}
	docKind="privacy"
	documentPaths={animalSoundPrivacyPaths}
	relatedLinks={[
		{ label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy?hl=en' }
	]}
/>
