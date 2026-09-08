<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { matgoPrivacyContent } from '$lib/matgoPrivacyContent';
</script>

<PrivacyPage localeKey="en" contentOverride={matgoPrivacyContent.en} productSlug="matgo" />
