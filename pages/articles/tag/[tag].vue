<template>
    <div class="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <!-- Header -->
        <div class="mb-14">
            <NuxtLink to="/articles"
                class="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-widest text-ink-faint hover:text-accent transition-colors mb-6">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                All articles
            </NuxtLink>
            <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3 animate-fade-up">
                Filtered by tag
            </p>
            <h1 class="font-display text-display-lg font-bold text-ink animate-fade-up" style="animation-delay: 80ms">
                #{{ tag }}
            </h1>
            <div class="editorial-rule mt-5 animate-fade-up" style="animation-delay: 160ms" />
        </div>

        <div class="flex flex-col lg:flex-row gap-12">
            <!-- Main column -->
            <div class="flex-1">
                <div v-if="filtered?.length" class="grid gap-8 sm:grid-cols-2 stagger-children">
                    <ArticleCard v-for="post in filtered" :key="post.id" :post="post" />
                </div>
                <div v-else class="text-center py-20">
                    <p class="font-display text-xl text-ink-faint italic">
                        No articles tagged "{{ tag }}" yet.
                    </p>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:w-72 shrink-0">
                <Sidebar :all-tags="allTags" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const tag = computed(() => (route.params.tag as string) || '')

const { data: allPosts } = await useAsyncData('tag-posts', () =>
    queryCollection('articles').order('pubDate', 'DESC').all()
)

const filtered = computed(() =>
    allPosts.value?.filter(p => p.tags?.includes(tag.value)) ?? []
)

const allTags = computed(() => {
    if (!allPosts.value) return []
    const tags = new Set<string>()
    allPosts.value.forEach(p => p.tags?.forEach((t: string) => tags.add(t)))
    return [...tags].sort()
})

useHead({
    title: `#${tag.value} — El Contemplador`,
})
</script>
