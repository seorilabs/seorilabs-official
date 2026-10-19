<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { memorizeAllSupportContent } from '$lib/memorizeAllSupportContent';
</script>

<LegalDocPage
	locale="ko"
	content={memorizeAllSupportContent.ko}
	docKind="support"
	documentPaths={[
		{ key: 'ko', path: '/apps/memorize-all/support/' },
		{ key: 'en', path: '/en/apps/memorize-all/support/' }
	]}
/>
