<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { privacyContent } from '$lib/privacyContent';
</script>

<LegalDocPage locale="zh-tw" content={privacyContent['zh-tw']} docKind="privacy" />
