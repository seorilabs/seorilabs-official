<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { lordLedgerPrivacyContent } from '$lib/lordLedgerPrivacyContent';
</script>

<LegalDocPage
	locale="en"
	content={lordLedgerPrivacyContent.en}
	docKind="privacy"
	productSlug="lord-ledger"
/>
