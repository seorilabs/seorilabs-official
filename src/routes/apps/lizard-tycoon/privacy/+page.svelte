<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { lizardTycoonPrivacyContent } from '$lib/lizardTycoonPrivacyContent';
</script>

<PrivacyPage
	localeKey="ko"
	contentOverride={lizardTycoonPrivacyContent.ko}
	productSlug="lizard-tycoon"
/>
