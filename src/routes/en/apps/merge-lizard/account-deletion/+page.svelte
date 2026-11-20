<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import {
		mergeLizardAccountDeletionContent,
		mergeLizardAccountDeletionMail,
		mergeLizardAccountDeletionPaths
	} from '$lib/mergeLizardAccountDeletionContent';
</script>

<LegalDocPage
	locale="en"
	content={mergeLizardAccountDeletionContent.en}
	docKind="account-deletion"
	documentPaths={mergeLizardAccountDeletionPaths}
	contactHref={mergeLizardAccountDeletionMail.en}
	relatedLinks={[{ label: 'Privacy Policy', href: '/en/apps/merge-lizard/privacy/' }]}
/>
