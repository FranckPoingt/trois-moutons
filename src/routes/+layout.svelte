<script>
	import '../app.pcss';
</script>

<main
	class="relative flex min-h-svh flex-col items-center justify-start overflow-hidden pt-4 text-center"
>
	<img src="/3m.svg" alt="3 Moutons Festival" class="w-1/3 sm:w-1/6" />
	<span class="mt-2">Festival des</span>
	<h1 class="text-4xl font-bold md:text-6xl">Trois Moutons</h1>
	<h2 class="text-2xl font-bold text-primary md:text-4xl">#3</h2>
	<slot />
	<div id="bg-noise" />
</main>

<style>
	#bg-noise {
		background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ2dncmFpbi1ncmFkaWVudCIgcj0iMC4yIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iaHNsKDIxLCA5MCUsIDQ4JSkiPjwvc3RvcD4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9ImhzbCgyNiwgNzYlLCAxOCUpIj48L3N0b3A+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iaHNsYSgyMCwgMTQlLCA0JSwgMS4wMCkiPjwvc3RvcD4KICAgIDwvcmFkaWFsR3JhZGllbnQ+PGZpbHRlciBpZD0iZ2dncmFpbi1maWx0ZXIiIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgcHJpbWl0aXZlVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjI1IiBudW1PY3RhdmVzPSIyIiBzZWVkPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJjb2xvcm1hdHJpeCI+PC9mZUNvbG9yTWF0cml4PgogIDxmZUNvbXBvbmVudFRyYW5zZmVyIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49ImNvbG9ybWF0cml4IiByZXN1bHQ9ImNvbXBvbmVudFRyYW5zZmVyIj4KICAgIDxmZUZ1bmNSIHR5cGU9ImxpbmVhciIgc2xvcGU9IjMiPjwvZmVGdW5jUj4KICAgIDxmZUZ1bmNHIHR5cGU9ImxpbmVhciIgc2xvcGU9IjMiPjwvZmVGdW5jRz4KICAgIDxmZUZ1bmNCIHR5cGU9ImxpbmVhciIgc2xvcGU9IjMiPjwvZmVGdW5jQj4KICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgPGZlQ29sb3JNYXRyaXggeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0iY29tcG9uZW50VHJhbnNmZXIiIHJlc3VsdD0iY29sb3JtYXRyaXgyIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMSAwIDAgMCAwCiAgICAgICAgICAwIDEgMCAwIDAKICAgICAgICAgIDAgMCAxIDAgMAogICAgICAgICAgMCAwIDAgMTggLTEwIj48L2ZlQ29sb3JNYXRyaXg+CiAgPC9maWx0ZXI+PC9kZWZzPjxnPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ2dncmFpbi1ncmFkaWVudCkiPjwvcmVjdD48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI2dnZ3JhaW4tZmlsdGVyKSIgb3BhY2l0eT0iMC43OSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0Ij48L3JlY3Q+PC9nPjwvc3ZnPg==')
			no-repeat center center;
		background-size: cover;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		overflow: hidden;
		height: 100svh;
		width: 100%;
		max-width: 100%;
		animation: float 6s ease-out infinite;
	}

	#bg-noise::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle at center, transparent, #0c0a09 99%);
		opacity: 0.4;
	}

	@keyframes float {
		0% {
			transform: translate3d(0, 0, 0);
		}
		25% {
			transform: translate3d(-2px, 2px, 0);
		}
		50% {
			transform: translate3d(0, 0px, 0);
		}
		75% {
			transform: translate3d(-1px, 2px, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}
</style>
