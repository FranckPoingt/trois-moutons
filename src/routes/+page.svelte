<script lang="ts">
	import Countdown from '@/components/countdown.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';

	const cards = [
		{
			title: 'Infos',
			content: 'Infos',
			image: '/1m.svg'
		},
		{
			title: 'Line-up',
			content: 'Infos',
			image: '/2m.svg'
		},
		{
			title: 'Tickets',
			content: 'Infos',
			image: '/4m.svg'
		},
		{
			title: 'Timetable',
			content: 'Infos',
			image: '/5m.svg'
		}
	];
</script>

<div class="mt-4 flex flex-col items-center justify-center gap-8 sm:mt-8">
	<Countdown />
	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 3000,
				stopOnInteraction: true
			})
		]}
	>
		<Carousel.Content class="-ml-2 md:-ml-4">
			{#each cards as card}
				<Carousel.Item class="pl-2 md:pl-4">
					<Card.Root class=" bg-opacity-95">
						<Card.Header>
							<Card.Title tag="h2" class="text-xl font-bold">{card.title}</Card.Title>
						</Card.Header>
						<Card.Content class="flex flex-col items-center justify-center">
							<img src={card.image} alt={card.title} class="max-w-40 sm:max-w-52" />
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<!-- <Carousel.Previous class="hidden sm:flex" />
		<Carousel.Next class="hidden sm:flex" /> -->
	</Carousel.Root>
</div>
