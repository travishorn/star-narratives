<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>STAR Narratives</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<header class="bg-white shadow-sm">
		<div class="mx-auto px-4 py-4 sm:px-6 lg:px-8">
			<h1 class="text-2xl font-bold text-gray-900">
				<a href="/">STAR Narratives</a>
			</h1>
		</div>
	</header>

	<main class="mx-auto px-4 py-8 sm:px-6 lg:px-8">
		{@render children?.()}
	</main>
</div>
