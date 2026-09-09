<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { lordLedgerPrivacyContent } from '$lib/lordLedgerPrivacyContent';
</script>

<PrivacyPage
	localeKey="en"
	contentOverride={lordLedgerPrivacyContent.en}
	productSlug="lord-ledger"
/>
