<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { mergeLizardOddsContent, mergeLizardOddsPaths } from '$lib/mergeLizardOddsContent';
</script>

<LegalDocPage
	locale="ko"
	content={mergeLizardOddsContent.ko}
	docKind="odds"
	documentPaths={mergeLizardOddsPaths}
/>
