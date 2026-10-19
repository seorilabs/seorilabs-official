<script lang="ts">
	import LegalDocPage from '$lib/legal/LegalDocPage.svelte';
	import { ungeulPrivacyContent } from '$lib/ungeulPrivacyContent';
</script>

<LegalDocPage
	locale="ko"
	content={ungeulPrivacyContent.ko}
	docKind="privacy"
	productSlug="ungeul"
	relatedLinks={[
		{
			label: 'Google의 파트너 앱 데이터 사용 방식',
			href: 'https://policies.google.com/technologies/partner-sites?hl=ko'
		},
		{ label: 'Google 개인정보처리방침', href: 'https://policies.google.com/privacy?hl=ko' }
	]}
/>
