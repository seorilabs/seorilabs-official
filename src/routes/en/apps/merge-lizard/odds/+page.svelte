<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { mergeLizardOddsContent, mergeLizardOddsPaths } from '$lib/mergeLizardOddsContent';
</script>

<LegalDocPage
	locale="en"
	content={mergeLizardOddsContent.en}
	docKind="odds"
	documentPaths={mergeLizardOddsPaths}
/>
