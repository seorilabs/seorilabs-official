<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { cyclePairPrivacyContent } from '$lib/cyclePairPrivacyContent';
</script>

<PrivacyPage localeKey="ko" contentOverride={cyclePairPrivacyContent.ko} productSlug="cycle-pair" />
