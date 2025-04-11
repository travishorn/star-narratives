<!-- TagFilter.svelte -->
<script lang="ts">
	import TagChip from './TagChip.svelte';

	let {
		allTags = [],
		selectedTags = [],
		onTagsChange
	} = $props<{
		allTags: string[];
		selectedTags: string[];
		onTagsChange: (tags: string[]) => void;
	}>();

	function toggleTag(tag: string) {
		const index = selectedTags.indexOf(tag);
		const newTags =
			index === -1 ? [...selectedTags, tag] : selectedTags.filter((t: string) => t !== tag);
		onTagsChange(newTags);
	}

	function clearAll() {
		selectedTags = [];
		onTagsChange([]);
	}
</script>

<div class="mb-6 space-y-4">
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-semibold">Filter by Tags</h2>
		{#if selectedTags.length > 0}
			<button onclick={clearAll} class="text-sm text-blue-600 hover:text-blue-800">
				Clear All
			</button>
		{/if}
	</div>

	<div class="flex flex-wrap gap-2">
		{#each allTags as tag (tag)}
			<button
				onclick={() => toggleTag(tag)}
				class:opacity-40={selectedTags.length > 0 && !selectedTags.includes(tag)}
			>
				<TagChip {tag} />
			</button>
		{/each}
	</div>
</div>
