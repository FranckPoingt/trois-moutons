<script lang="ts">
	import Countdown from '@/components/countdown.svelte';
	import { slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<div class="mt-2 flex flex-col items-center justify-center gap-4 sm:mt-8">
	{#if ready}
		<Countdown />
		<div class="relative py-2">
			<h3 class="text-5xl font-black" transition:slide={{ duration: 800, delay: 100 }}>
				ENTREZ DANS LA LEGENDE.
			</h3>
			<h3 class="text-2xl font-black text-primary" transition:fade={{ delay: 1000, duration: 200 }}>
				ENCORE.
			</h3>
			<script
				src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
			></script><lottie-player
				src="https://lottie.host/0aa77379-f967-43d0-b986-09f3a3701df3/T7EQUgakM8.json"
				background="##FFFFFF"
				speed="1"
				class="mx-auto h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]"
				loop
				autoplay
				direction="1"
				mode="normal"
				transition:fade={{ delay: 1200, duration: 200 }}
			></lottie-player>
		</div>
	{/if}
</div>
