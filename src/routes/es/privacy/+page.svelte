<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { privacyContent } from '$lib/privacyContent';
</script>

<LegalDocPage locale="es" content={privacyContent['es']} docKind="privacy" />
