<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import {
		mergeLizardPrivacyContent,
		mergeLizardPrivacyPaths
	} from '$lib/mergeLizardPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={mergeLizardPrivacyContent.ko}
	docKind="privacy"
	documentPaths={mergeLizardPrivacyPaths}
	relatedLinks={[
		{ label: '계정과 데이터 삭제', href: '/apps/merge-lizard/account-deletion/' },
		{ label: '수수께끼 알 확률 정보', href: '/apps/merge-lizard/odds/' }
	]}
/>
