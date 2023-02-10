<script setup lang="ts">
import { computed, defineProps, toRefs, withDefaults } from 'vue'

interface IChipProps {
	isStyled?: boolean
	hasGlow?: boolean
	radius?: number
}

const props = withDefaults(defineProps<IChipProps>(), {
	isStyled: false,
	hasGlow: false,
	radius: 16,
})

const {
	radius,
} = toRefs(props)

const glowRadius = computed(() => {
	return `${radius.value}rem`
})
</script>

<template>
	<div class="chip" :class="{ styled: isStyled, glow: hasGlow }">
		<div>
			<slot />
		</div>
	</div>
</template>

<style scoped>
.chip {
    @apply
    relative
    flex flex-col justify-center items-center
    rounded-full
    bg-base-200;
    --radius: v-bind(glowRadius);
}

.chip > div {
    @apply
    flex flex-col justify-center items-center
    /* w-[calc(100%-2px)] */
    m-px
    py-0.5 px-2
    text-xs
    bg-base;
    border-radius: inherit;
    z-index: 1000;
}

.styled {
    border: .5px solid rgba(255, 255, 255, 0);
    background: linear-gradient(138.16deg,#313135 -14.83%,#1f2024 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
}
</style>
