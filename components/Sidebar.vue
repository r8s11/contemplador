<template>
    <aside class="space-y-10">

        <!-- Categories -->
        <div>
            <h3 class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint mb-4">
                Categories
            </h3>
            <div class="flex flex-wrap gap-2">
                <NuxtLink v-for="tag in allTags" :key="tag" :to="`/articles/tag/${tag}`"
                    class="font-mono text-xs font-medium text-accent hover:text-accent-hover transition-colors">
                    #{{ tag }}
                </NuxtLink>
            </div>
        </div>

        <!-- Connect -->
        <div>
            <h3 class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint mb-4">
                Connect
            </h3>
            <div class="flex flex-col gap-2.5">
                <a v-for="link in socialLinks" :key="link.href" :href="link.href" target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-sm font-body text-ink-muted hover:text-accent transition-colors group">
                    <span class="text-base" v-html="link.icon" />
                    <span>{{ link.label }}</span>
                </a>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
const props = defineProps<{
    allTags?: string[]
}>()

const socialLinks = [
    { href: 'mailto:roosevelt@roosevelt.info', label: 'Email', icon: '✉️' },
    { href: 'https://www.linkedin.com/in/rooseveltbsegura', label: 'LinkedIn', icon: '💼' },

]
</script>
