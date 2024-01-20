<script lang="ts">
	import { onMount } from 'svelte';
	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	onMount(() => {
		const countDownDate = new Date('2024-06-22T11:00:00+01:00').getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;

			days = Math.floor(distance / (1000 * 60 * 60 * 24));
			hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				clearInterval(interval);
				days = 0;
				hours = 0;
				minutes = 0;
				seconds = 0;
			}
		}, 1000);
	});
</script>

<div class="flex max-w-fit flex-row items-stretch gap-4 px-4">
	<div class="flex flex-col text-center sm:min-w-32">
		<span class="text-center text-3xl font-bold text-primary sm:text-6xl">{days}</span>
		<span class="mx-auto text-center text-2xl font-bold text-primary">jours</span>
	</div>

	<div class="flex flex-col sm:w-20">
		<span class="text-center text-3xl font-bold text-primary sm:text-6xl">{hours}</span>
		<span class="text-center text-2xl font-bold text-primary">hrs</span>
	</div>
	<div class="flex flex-col sm:w-20">
		<span class="text-center text-3xl font-bold text-primary sm:text-6xl">{minutes}</span>
		<span class="text-center text-2xl font-bold text-primary">min</span>
	</div>
	<div class="flex flex-col sm:w-20">
		<span class="text-center text-3xl font-bold text-primary sm:text-6xl">{seconds}</span>
		<span class="text-center text-2xl font-bold text-primary">sec</span>
	</div>
</div>
