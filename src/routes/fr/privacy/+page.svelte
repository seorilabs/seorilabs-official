<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { privacyContent } from '$lib/privacyContent';
</script>

<LegalDocPage locale="fr" content={privacyContent['fr']} docKind="privacy" />
