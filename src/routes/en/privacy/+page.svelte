<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { privacyContent } from '$lib/privacyContent';
</script>

<LegalDocPage locale="en" content={privacyContent['en']} docKind="privacy" />
