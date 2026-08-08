<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { cyclePairPrivacyContent } from '$lib/cyclePairPrivacyContent';
</script>

<PrivacyPage localeKey="en" contentOverride={cyclePairPrivacyContent.en} productSlug="cycle-pair" />
