<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { babycarePrivacyContent } from '$lib/babycarePrivacyContent';
</script>

<PrivacyPage localeKey="en" contentOverride={babycarePrivacyContent.en} productSlug="babycare" />
