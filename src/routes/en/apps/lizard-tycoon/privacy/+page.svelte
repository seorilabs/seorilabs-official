<script lang="ts">
	import PrivacyPage from '$lib/PrivacyPage.svelte';
	import { lizardTycoonPrivacyContent } from '$lib/lizardTycoonPrivacyContent';
</script>

<PrivacyPage
	localeKey="en"
	contentOverride={lizardTycoonPrivacyContent.en}
	productSlug="lizard-tycoon"
/>
