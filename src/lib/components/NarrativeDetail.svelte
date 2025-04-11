<!-- NarrativeDetail.svelte -->
<script lang="ts">
	import TagChip from './TagChip.svelte';

	interface Narrative {
		title: string;
		tags: string[];
		situation: string;
		task: string;
		action: string;
		result: string;
	}

	let { narrative } = $props<{ narrative: Narrative }>();
	let sortedTags = $derived([...narrative.tags].sort());
</script>

<article class="mx-auto max-w-3xl space-y-8 p-6">
	<div class="mb-8">
		<a href="/" class="mb-4 inline-flex items-center text-blue-600 hover:text-blue-800">
			← Back to List
		</a>

		<h1 class="mb-4 text-3xl font-bold text-gray-900">{narrative.title}</h1>

		<div class="flex flex-wrap gap-2">
			{#each sortedTags as tag (tag)}
				<TagChip {tag} />
			{/each}
		</div>
	</div>

	<div class="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
		<section>
			<h2 class="mb-3 text-xl font-semibold text-gray-900">Situation</h2>
			<p class="text-gray-700">{narrative.situation}</p>
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold text-gray-900">Task</h2>
			<p class="text-gray-700">{narrative.task}</p>
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold text-gray-900">Action</h2>
			<p class="text-gray-700">{narrative.action}</p>
		</section>

		<section>
			<h2 class="mb-3 text-xl font-semibold text-gray-900">Result</h2>
			<p class="text-gray-700">{narrative.result}</p>
		</section>
	</div>
</article>
