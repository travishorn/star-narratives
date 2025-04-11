<!-- +page.svelte -->
<script lang="ts">
	import NarrativeCard from '$lib/components/NarrativeCard.svelte';
	import TagFilter from '$lib/components/TagFilter.svelte';

	interface Narrative {
		title: string;
		tags: string[];
		short_summary_situation: string;
		short_summary_task: string;
		short_summary_action: string;
		short_summary_result: string;
		slug: string;
	}

	let { data } = $props<{
		data: {
			narratives: Narrative[];
			allTags: string[];
		};
	}>();

	let selectedTags = $state<string[]>([]);

	let filteredNarratives = $derived(
		(selectedTags.length === 0
			? data.narratives
			: data.narratives.filter((narrative: Narrative) =>
					narrative.tags.some((tag: string) => selectedTags.includes(tag))
				)
		).sort((a: Narrative, b: Narrative) => a.title.localeCompare(b.title))
	);

	function updateSelectedTags(tags: string[]) {
		selectedTags = tags;
	}
</script>

<div class="grid gap-8 lg:grid-cols-[300px_1fr]">
	<aside>
		<TagFilter allTags={data.allTags} {selectedTags} onTagsChange={updateSelectedTags} />
	</aside>

	<div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#if filteredNarratives.length === 0}
			<p class="text-center text-gray-600 lg:col-span-2">
				No narratives found matching the selected tags.
			</p>
		{:else}
			{#each filteredNarratives as narrative (narrative.slug)}
				<NarrativeCard {narrative} />
			{/each}
		{/if}
	</div>
</div>
