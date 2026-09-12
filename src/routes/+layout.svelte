<script lang="ts">
	import '../app.css';
	import AnalyticsConsent from '$lib/ui/AnalyticsConsent.svelte';

	let { children } = $props();
</script>

{@render children()}
<AnalyticsConsent />
