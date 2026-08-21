<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { ungeulPrivacyContent } from '$lib/ungeulPrivacyContent';
</script>

<PrivacyPage localeKey="ko" contentOverride={ungeulPrivacyContent.ko} productSlug="ungeul" />
