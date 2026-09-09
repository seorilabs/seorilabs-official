<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { lordLedgerPrivacyContent } from '$lib/lordLedgerPrivacyContent';
</script>

<PrivacyPage
	localeKey="ko"
	contentOverride={lordLedgerPrivacyContent.ko}
	productSlug="lord-ledger"
/>
