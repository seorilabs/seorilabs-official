<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { matgoPrivacyContent } from '$lib/matgoPrivacyContent';
</script>

<PrivacyPage localeKey="ko" contentOverride={matgoPrivacyContent.ko} productSlug="matgo" />
