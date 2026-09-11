<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { legalContent } from '$lib/legalContent';
</script>

<LegalDocPage locale="ko" content={legalContent.ko.terms} docKind="terms" />
