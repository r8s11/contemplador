<template>
    <div class="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <!-- Header -->
        <div class="mb-14">
            <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3 animate-fade-up">
                All writings
            </p>
            <h1 class="font-display text-display-lg font-bold text-ink animate-fade-up" style="animation-delay: 80ms">
                Articles
            </h1>
            <div class="editorial-rule mt-5 animate-fade-up" style="animation-delay: 160ms" />
        </div>

        <div class="flex flex-col lg:flex-row gap-12">
            <!-- Main column -->
            <div class="flex-1">
                <div v-if="posts?.length" class="grid gap-8 sm:grid-cols-2 stagger-children">
                    <ArticleCard v-for="post in posts" :key="post.id" :post="post" />
                </div>
                <div v-else class="text-center py-20">
                    <p class="font-display text-xl text-ink-faint italic">No posts yet — stay tuned.</p>
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
const { data: posts } = await useAsyncData('articles-posts', () =>
    queryCollection('articles').order('pubDate', 'DESC').all()
)

const allTags = computed(() => {
    if (!posts.value) return []
    const tags = new Set<string>()
    posts.value.forEach(p => p.tags?.forEach((t: string) => tags.add(t)))
    return [...tags].sort()
})
</script>
