<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import {
		matchPicturePrivacyContent,
		matchPicturePrivacyPaths
	} from '$lib/matchPicturePrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={matchPicturePrivacyContent.ko}
	docKind="privacy"
	productSlug="match-picture"
	documentPaths={matchPicturePrivacyPaths}
/>
