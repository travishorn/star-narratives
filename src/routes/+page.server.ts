import { glob } from 'glob';
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
	short_summary_situation: string;
	short_summary_task: string;
	short_summary_action: string;
	short_summary_result: string;
	published: boolean;
	date: string;
	slug: string;
}

export const load: PageServerLoad = async () => {
	try {
		const files = await glob('src/lib/narratives/*.md');
		const narratives = await Promise.all(
			files.map(async (file: string) => {
				const content = await readFile(file, 'utf-8');
				const frontmatter = content.split('---')[1];
				const data = parse(frontmatter) as Narrative;

				// Extract slug from filename without the path
				const slug = file.split(/[/\\]/).pop()?.replace('.md', '') ?? '';

				return {
					...data,
					slug
				} as Narrative;
			})
		);

		// Get unique tags
		const allTags = Array.from(
			new Set(narratives.flatMap((n: Narrative & { slug: string }) => n.tags))
		).sort();

		return {
			narratives,
			allTags
		};
	} catch (e) {
		console.error('Failed to load narratives', e);
		error(500, 'Failed to load narratives');
	}
};
