<script lang="ts">
	import {
		animalSoundPrivacyContent,
		animalSoundPrivacyPaths
	} from '$lib/animalSoundPrivacyContent';
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
</script>

<LegalDocPage
	locale="ko"
	content={animalSoundPrivacyContent.ko}
	docKind="privacy"
	documentPaths={animalSoundPrivacyPaths}
	relatedLinks={[
		{ label: 'Google 개인정보처리방침', href: 'https://policies.google.com/privacy?hl=ko' }
	]}
/>
