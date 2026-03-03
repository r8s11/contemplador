<template>
    <NuxtLink :to="post.path" class="block group">
        <article
            class="relative bg-parchment-50 border border-parchment-300/50 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_-12px_rgba(26,21,32,0.12)] hover:-translate-y-1">
            <!-- Image with overlay gradient -->
            <div v-if="post.image" class="relative overflow-hidden">
                <img :src="post.image" :alt="post.title"
                    class="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div class="p-5 sm:p-6">
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-3">
                    <span v-for="tag in post.tags" :key="tag"
                        class="font-mono text-[10px] font-medium uppercase tracking-widest text-gold bg-gold-faint px-2 py-0.5 rounded-sm">
                        {{ tag }}
                    </span>
                </div>

                <!-- Title -->
                <h2
                    class="font-display text-xl sm:text-2xl font-semibold leading-snug text-ink group-hover:text-accent transition-colors duration-300">
                    {{ post.title }}
                </h2>

                <!-- Meta -->
                <div class="flex items-center gap-2 mt-3 text-xs font-body text-ink-faint">
                    <span class="font-medium text-ink-muted">{{ post.author }}</span>
                    <span class="w-1 h-1 rounded-full bg-parchment-400" />
                    <time :datetime="post.pubDate">{{ formatDate(post.pubDate) }}</time>
                </div>

                <!-- Read more indicator -->
                <div
                    class="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Read</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    post: {
        path: string
        title: string
        image?: string
        author: string
        pubDate: string
        tags: string[]
    }
}>()

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}
</script>
