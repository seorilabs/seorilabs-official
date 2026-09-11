<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lordLedgerPrivacyContent } from '$lib/lordLedgerPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={lordLedgerPrivacyContent.ko}
	docKind="privacy"
	productSlug="lord-ledger"
/>
