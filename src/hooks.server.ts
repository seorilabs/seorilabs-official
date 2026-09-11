import type { Handle } from '@sveltejs/kit';
import { htmlLangForPath } from '$lib/i18n/locale';

// app.html의 %lang% 자리표시자를 경로별 언어로 치환한다.
// prerender 중에도 handle 훅이 실행되므로 adapter-static 빌드에서도 동작한다.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', htmlLangForPath(event.url.pathname))
	});
