<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	company: string
	role: string
	startYear: string
	endYear?: string
	companyLogo?: string
}>(), {
	company: 'Test',
	role: 'CEO',
	startYear: '2023',
	endYear: '2023',
	companyLogo: 'https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg',
})

const parsedYear = computed(() => {
	return parseInt(props.endYear) === new Date().getFullYear() ? 'Present' : props.endYear
})
</script>

<template>
	<li class="flex gap-4">
		<div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
			<img alt="" :src="companyLogo" class="h-7 w-7" style="color:transparent">
		</div>
		<dl class="flex flex-auto flex-wrap gap-x-2">
			<dt class="sr-only">
				Company
			</dt>
			<dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
				{{ company }}
			</dd>
			<dt class="sr-only">
				Role
			</dt>
			<dd class="text-xs text-zinc-500 dark:text-zinc-400">
				{{ role }}
			</dd>
			<dt class="sr-only">
				Date
			</dt>
			<dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500" :aria-label="`${startYear} until ${parsedYear}`">
				<time :datetime="startYear">{{ startYear }}</time>
				<span aria-hidden="true"> — </span>
				<time :datetime="endYear">{{ parsedYear }}</time>
			</dd>
		</dl>
	</li>
</template>

<style scoped>

</style>
