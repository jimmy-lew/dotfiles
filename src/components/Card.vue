<script setup lang="ts">
import { computed, defineProps, toRefs, withDefaults } from 'vue'

interface ICardProps extends defaultProps {
	noGlow?: boolean
	radius?: number
}

const props = withDefaults(defineProps<ICardProps>(), {
	noGlow: false,
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
	<div class="card" :class="noGlow ? '' : 'glow'">
		<div>
			<slot />
		</div>
	</div>
</template>

<style scoped>
.card {
    @apply
    relative
    flex flex-col justify-center items-center
    rounded-xl
    bg-base-200;
    --radius: v-bind(glowRadius);
}

.card > div {
    @apply
    flex flex-col justify-center items-center
    w-[calc(100%-2px)]
    m-px
    py-6 px-8
    text-xs
    bg-base;
    border-radius: inherit;
    z-index: 1000;
}
</style>
