<!-- +page.svelte -->
<script lang="ts">
	import NarrativeDetail from '$lib/components/NarrativeDetail.svelte';

	interface Narrative {
		title: string;
		tags: string[];
		situation: string;
		task: string;
		action: string;
		result: string;
		slug: string;
	}

	let { data } = $props<{
		data: {
			narrative: Narrative;
		};
	}>();
</script>

<NarrativeDetail narrative={data.narrative} />
