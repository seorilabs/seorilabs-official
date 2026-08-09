<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { babycarePrivacyContent } from '$lib/babycarePrivacyContent';
</script>

<PrivacyPage localeKey="ko" contentOverride={babycarePrivacyContent.ko} productSlug="babycare" />
