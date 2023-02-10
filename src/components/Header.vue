<script setup lang="ts">
import Chip from './Chip.vue'
import GlowWrapper from './GlowWrapper.vue'
</script>

<template>
	<header class="pointer-events-none relative z-50 flex flex-col">
		<div class="top-0 z-10 h-16 pt-6 sticky">
			<div class="sm:px-8 w-full fixed">
				<div class="mx-auto max-w-7xl lg:px-8">
					<div class="relative px-4 sm:px-8 lg:px-12">
						<GlowWrapper class="mx-auto max-w-2xl lg:max-w-5xl">
							<div class="relative flex gap-4">
								<div class="flex flex-1" />
								<div class="flex flex-1 justify-end md:justify-center">
									<div class="pointer-events-auto md:hidden">
										<button
											class="
											group flex items-center
											rounded-full
											bg-white/90 backdrop-blur dark:bg-zinc-800/90
											px-4 py-2
											text-sm font-medium text-zinc-800
											shadow-lg shadow-zinc-800/5 dark:text-zinc-200
											ring-1 ring-zinc-900/5 dark:ring-white/10 dark:hover:ring-white/20
											"
										>
											Menu
											<svg viewBox="0 0 8 6" aria-hidden="true" class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
												<path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</button>
									</div>
									<nav class="pointer-events-auto hidden md:block">
										<Chip has-glow :radius="8">
											<ul class="flex">
												<li><a class="relative block px-2 py-1 transition hover:text-primary" href="/about">About</a></li>
												<li><a class="relative block px-2 py-1 transition hover:text-primary" href="/posts">Posts</a></li>
												<li><a class="relative block px-2 py-1 transition hover:text-primary" href="/projects">Projects</a></li>
											</ul>
										</Chip>
									</nav>
								</div>
								<div class="flex justify-end md:flex-1">
									<div class="pointer-events-auto">
										<!-- <Chip
											aria-label="Toggle dark mode"
											has-glow
										>
											<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
												<g fill="none" fill-rule="evenodd">
													<path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
													<path fill="currentColor" d="M12.477 4.546a1.01 1.01 0 0 1 1.097-1.409A9 9 0 0 1 12 21c-4.434 0-8.118-3.206-8.863-7.426a1.01 1.01 0 0 1 1.409-1.097a6 6 0 0 0 7.931-7.931Zm2.404 1.072a8 8 0 0 1-9.263 9.263A7.002 7.002 0 0 0 19 12.001a7.002 7.002 0 0 0-4.12-6.383ZM5.565 7.716l.064.14a3.26 3.26 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.071.071 0 0 1-.13 0l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059A3.26 3.26 0 0 0 5.37 7.855l.064-.14a.071.071 0 0 1 .13 0Zm2.832-4.859c.04-.09.166-.09.206 0l.102.222a5.189 5.189 0 0 0 1.97 2.172l.157.092a.108.108 0 0 1 0 .189l-.158.092a5.189 5.189 0 0 0-2.07 2.394a.113.113 0 0 1-.207 0l-.102-.222a5.189 5.189 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1 0-.189l.158-.092a5.189 5.189 0 0 0 1.97-2.172l.102-.222Z" />
												</g>
											</svg>
										</Chip> -->
									</div>
								</div>
							</div>
						</GlowWrapper>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>

</style>
