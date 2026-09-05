<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { jomulPrivacyContent } from '$lib/jomulPrivacyContent';
</script>

<PrivacyPage localeKey="ko" contentOverride={jomulPrivacyContent.ko} productSlug="jomul" />
