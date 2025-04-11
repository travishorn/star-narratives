<!-- NarrativeCard.svelte -->
<script lang="ts">
	import TagChip from './TagChip.svelte';

	interface Narrative {
		title: string;
		tags: string[];
		short_summary_situation: string;
		short_summary_task: string;
		short_summary_action: string;
		short_summary_result: string;
		slug: string;
	}

	let { narrative } = $props<{ narrative: Narrative }>();
	let sortedTags = $derived([...narrative.tags].sort());
</script>

<a
	href="/narrative/{narrative.slug}"
	class="block rounded-lg border border-gray-200 bg-white p-6 py-3 shadow-sm transition-shadow hover:shadow-md"
>
	<h2 class="mb-2 text-xl font-semibold text-gray-900">{narrative.title}</h2>

	<div class="mb-2 flex flex-wrap gap-1">
		{#each sortedTags as tag (tag)}
			<TagChip {tag} size="compact" />
		{/each}
	</div>

	<div class="space-y-0">
		<div>
			<span class="font-semibold">S</span>
			<span class="text-sm text-gray-600">{narrative.short_summary_situation}</span>
		</div>

		<div>
			<span class="font-semibold">T</span>
			<span class="text-sm text-gray-600">{narrative.short_summary_task}</span>
		</div>

		<div>
			<span class="font-semibold">A</span>
			<span class="text-sm text-gray-600">{narrative.short_summary_action}</span>
		</div>

		<div>
			<span class="font-semibold">R</span>
			<span class="text-sm text-gray-600">{narrative.short_summary_result}</span>
		</div>
	</div>
</a>
