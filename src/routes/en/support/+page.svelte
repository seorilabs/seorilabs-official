<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { legalContent } from '$lib/legalContent';
</script>

<LegalDocPage locale="en" content={legalContent.en.support} docKind="support" />
