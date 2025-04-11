import { readFile } from 'node:fs/promises';
import { parse } from 'yaml';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface Narrative {
	title: string;
	tags: string[];
	situation: string;
	task: string;
	action: string;
	result: string;
	published: boolean;
	date: string;
}

interface Params {
	slug: string;
}

export const load: PageServerLoad = async ({ params }: { params: Params }) => {
	try {
		const { slug } = params;
		const filePath = `src/lib/narratives/${slug}.md`;

		const content = await readFile(filePath, 'utf-8');
		const frontmatter = content.split('---')[1];
		const narrative = parse(frontmatter) as Narrative;

		if (!narrative.published) {
			error(404, 'Narrative not found');
		}

		return {
			narrative: {
				...narrative,
				slug
			}
		};
	} catch {
		error(404, 'Narrative not found');
	}
};
