export type LegalDocSection = { id?: string; title: string; body: string[] };

/**
 * 개인정보처리방침, 이용약관, 고객지원, 계정 삭제 문서가 공유하는 형태.
 * 라벨 필드는 선택이며, 없으면 로케일 기본값을 쓴다.
 */
export type LegalDocContent = {
	title: string;
	description: string;
	kicker: string;
	intro: string;
	lastUpdated: string;
	sections: LegalDocSection[];
	footerNote: string;
	lastUpdatedLabel?: string;
	backLabel?: string;
	languageLabel?: string;
};
