<script>
	import ViewTransition from '$lib/components/navigation.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { CalendarRange, Disc3, Info, MenuIcon, Ticket } from 'lucide-svelte';

	import '../app.pcss';

	injectSpeedInsights();
	const links = [
		{
			name: 'Infos',
			href: '/infos',
			icon: Info
		},
		{
			name: 'Line-up',
			href: '/line-up',
			icon: Disc3
		},
		{
			name: 'Programme',
			href: '/programme',
			icon: CalendarRange
		},
		{
			name: 'Billetterie',
			href: 'https://audreynwr.wixsite.com/festivaldes3moutons/billetterie',
			icon: Ticket
		}
	];
</script>

<svelte:head>
	<title>3 Moutons Festival</title>
</svelte:head>

<ViewTransition />
<header
	class="relative flex flex-col items-center justify-start overflow-hidden pt-4 text-center"
	id="header"
>
	<Sheet.Root>
		<Sheet.Trigger>
			<MenuIcon class="absolute left-4 h-6 w-6 text-primary" />
		</Sheet.Trigger>
		<Sheet.Content side="left" class="flex flex-col items-start justify-between">
			<ul class="mt-8 flex flex-col items-start justify-center gap-4">
				{#each links as link}
					<li>
						<Sheet.Close>
							<a
								href={link.href}
								class="flex items-center justify-center gap-2 text-2xl font-bold uppercase"
							>
								<svelte:component this={link.icon} class="h-6 w-6" />
								{link.name}
							</a>
						</Sheet.Close>
					</li>
				{/each}
			</ul>
			<script
				src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
			></script><lottie-player
				src="https://lottie.host/d65bd6c5-70a7-4050-b223-466f259e869a/MZD68jx1eF.json"
				background="##FFFFFF"
				speed="1"
				class="w-[200px] sm:w-[300px]"
				loop
				autoplay
				direction="1"
				mode="normal"
			></lottie-player>
			<Sheet.Footer>
				<div class="flex flex-col gap-2 text-sm">
					<span>Personnes à contacter en cas de besoin:</span>
					<div class="flex flex-col gap-0 text-xs">
						<span>Thomas Veyradier - 06.98.00.32.02</span>
						<span>Quentin Gasbarre - 06.74.18.52.65</span>
					</div>
					<span
						>Ou via la <a
							href="https://www.facebook.com/events/342156698619624"
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-500">page Facebook</a
						> de l'événement.</span
					>
				</div>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
	<img src="/3m.svg" alt="3 Moutons Festival" class="w-1/3 sm:w-1/12" />

	<a href="/">
		<span class="mt-2">Festival des</span>
		<h1 class="text-4xl font-bold md:text-6xl">Trois Moutons</h1>
		<h2 class="text-2xl font-bold text-primary md:text-4xl">#3</h2>
	</a>
</header>
<main class="relative flex flex-col items-center justify-start overflow-hidden pt-4 text-center">
	<slot />
</main>

<style>
	#header {
		view-transition-name: header;
	}
</style>
