<template>
    <div>
        <!-- Hero section -->
        <section class="relative overflow-hidden">
            <div
                class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-faint/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div
                class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-accent-light/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div class="relative max-w-6xl mx-auto px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
                <div class="max-w-2xl">
                    <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4 animate-fade-up">
                        Thoughts, stories &amp; reflections
                    </p>
                    <h1 class="font-display text-display-xl font-bold text-ink animate-fade-up"
                        style="animation-delay: 80ms">
                        El<br />Contemplador
                    </h1>
                    <div class="editorial-rule mt-6 mb-5 animate-fade-up" style="animation-delay: 160ms" />
                    <p class="text-base sm:text-lg font-body font-light text-ink-muted leading-relaxed max-w-lg animate-fade-up"
                        style="animation-delay: 240ms">
                        A personal space for exploring web development, life lessons, and everything
                        in&nbsp;between. Pull up a&nbsp;chair.
                    </p>
                    <p class="mt-3 text-sm font-body text-ink-faint animate-fade-up" style="animation-delay: 320ms">
                        By <span class="font-medium text-ink-muted">Roosevelt Segura</span>
                    </p>
                </div>
            </div>
        </section>

        <!-- Featured latest post -->
        <section v-if="latestPost" class="max-w-6xl mx-auto px-6 pb-12">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">Latest</h2>
                <div class="flex-1 h-px bg-parchment-300" />
            </div>
            <NuxtLink :to="latestPost.path"
                class="group block bg-parchment-50 border border-parchment-300/50 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                <div class="flex flex-col md:flex-row">
                    <div v-if="latestPost.image" class="md:w-2/5 overflow-hidden">
                        <img :src="latestPost.image" :alt="latestPost.title"
                            class="w-full h-52 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span v-for="tag in latestPost.tags" :key="tag"
                                class="font-mono text-[10px] font-medium uppercase tracking-widest text-gold bg-gold-faint px-2 py-0.5 rounded-sm">
                                {{ tag }}
                            </span>
                        </div>
                        <h3
                            class="font-display text-display-md font-bold text-ink leading-tight group-hover:text-accent transition-colors">
                            {{ latestPost.title }}
                        </h3>
                        <p class="mt-2 text-sm text-ink-faint font-body">
                            {{ latestPost.author }} · {{ formatDate(latestPost.pubDate) }}
                        </p>
                        <p
                            class="mt-4 text-sm font-mono font-medium text-accent group-hover:translate-x-1 transition-transform">
                            Read this contemplation &rarr;
                        </p>
                    </div>
                </div>
            </NuxtLink>
        </section>

        <!-- More articles + Sidebar -->
        <section class="max-w-6xl mx-auto px-6 pb-20">
            <div class="flex flex-col lg:flex-row gap-12">
                <!-- Main column -->
                <div class="flex-1">
                    <div class="flex items-center gap-4 mb-10">
                        <h2 class="font-display text-display-md font-semibold text-ink">More Articles</h2>
                        <div class="flex-1 h-px bg-parchment-300" />
                        <NuxtLink to="/articles"
                            class="text-xs font-mono font-medium uppercase tracking-widest text-ink-faint hover:text-accent transition-colors">
                            View all &rarr;
                        </NuxtLink>
                    </div>

                    <div v-if="olderPosts?.length" class="grid gap-8 sm:grid-cols-2 stagger-children">
                        <ArticleCard v-for="post in olderPosts" :key="post.id" :post="post" />
                    </div>
                    <div v-else class="text-center py-16">
                        <p class="font-display text-xl text-ink-faint italic">Nothing here yet — check back soon.</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="lg:w-72 shrink-0">
                    <Sidebar :all-tags="allTags" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('home-posts', () =>
    queryCollection('articles').order('pubDate', 'DESC').limit(7).all()
)

const latestPost = computed(() => posts.value?.[0] ?? null)
const olderPosts = computed(() => posts.value?.slice(1) ?? [])

const allTags = computed(() => {
    if (!posts.value) return []
    const tags = new Set<string>()
    posts.value.forEach(p => p.tags?.forEach((t: string) => tags.add(t)))
    return [...tags].sort()
})

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>
