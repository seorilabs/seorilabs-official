<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import {
		mergeLizardAccountDeletionContent,
		mergeLizardAccountDeletionMail,
		mergeLizardAccountDeletionPaths
	} from '$lib/mergeLizardAccountDeletionContent';
</script>

<LegalDocPage
	locale="ko"
	content={mergeLizardAccountDeletionContent.ko}
	docKind="account-deletion"
	documentPaths={mergeLizardAccountDeletionPaths}
	contactHref={mergeLizardAccountDeletionMail.ko}
	relatedLinks={[{ label: '개인정보 처리방침', href: '/apps/merge-lizard/privacy/' }]}
/>
