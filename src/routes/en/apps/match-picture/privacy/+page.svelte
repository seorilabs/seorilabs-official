<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import {
		matchPicturePrivacyContent,
		matchPicturePrivacyPaths
	} from '$lib/matchPicturePrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={matchPicturePrivacyContent.en}
	docKind="privacy"
	productSlug="match-picture"
	documentPaths={matchPicturePrivacyPaths}
/>
