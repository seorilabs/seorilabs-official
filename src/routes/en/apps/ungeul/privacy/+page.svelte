<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { ungeulPrivacyContent } from '$lib/ungeulPrivacyContent';
</script>

<PrivacyPage localeKey="en" contentOverride={ungeulPrivacyContent.en} productSlug="ungeul" />
