<!-- TagChip.svelte -->
<script lang="ts">
	type Size = 'compact' | 'default';

	let { tag, size = 'default' } = $props<{ tag: string; size?: Size }>();

	const sizeClasses: Record<Size, string> = {
		compact: 'px-2 py-0.5 text-xs',
		default: 'px-3 py-1 text-sm'
	};
</script>

<span class="inline-block rounded-full bg-blue-100 font-medium text-blue-800 {sizeClasses[size]}">
	{tag}
</span>
