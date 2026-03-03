<template>
    <article v-if="post" class="max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <!-- Back link -->
        <NuxtLink to="/articles"
            class="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-widest text-ink-faint hover:text-accent transition-colors mb-10">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            All articles
        </NuxtLink>

        <!-- Article header -->
        <header class="mb-12 animate-fade-up">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in post.tags" :key="tag"
                    class="font-mono text-[10px] font-medium uppercase tracking-widest text-gold bg-gold-faint px-2 py-0.5 rounded-sm">
                    {{ tag }}
                </span>
            </div>

            <!-- Title -->
            <h1 class="font-display text-display-lg font-bold text-ink leading-tight">
                {{ post.title }}
            </h1>

            <!-- Meta -->
            <div class="flex items-center gap-3 mt-5">
                <div
                    class="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                    <span class="text-xs font-display font-bold text-parchment-50">
                        {{ post.author?.charAt(0) || 'R' }}
                    </span>
                </div>
                <div>
                    <p class="text-sm font-medium text-ink">{{ post.author }}</p>
                    <time :datetime="post.pubDate" class="text-xs text-ink-faint">
                        {{ formatDate(post.pubDate) }}
                    </time>
                </div>
            </div>

            <div class="editorial-rule mt-8" />
        </header>

        <!-- Featured image -->
        <figure v-if="post.image" class="mb-12 animate-fade-up" style="animation-delay: 100ms">
            <img :src="post.image" :alt="post.title"
                class="w-full rounded-sm shadow-[0_4px_20px_-6px_rgba(26,21,32,0.1)]" />
        </figure>

        <!-- Article body -->
        <div class="animate-fade-up" style="animation-delay: 200ms">
            <ContentRenderer :value="post" class="prose prose-lg prose-contemplador max-w-none font-body" />
        </div>

        <!-- End mark -->
        <div class="flex items-center gap-4 mt-16 pt-10 border-t border-parchment-300/60">
            <div class="editorial-rule" />
            <p class="font-display text-sm italic text-ink-faint">End of article</p>
        </div>
    </article>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`article-${route.path}`, () =>
    queryCollection('articles').path(route.path).first()
)

if (!post.value) {
    throw createError({ statusCode: 404, message: 'Post not found' })
}

useHead({
    title: post.value?.title ? `${post.value.title} — El Contemplador` : 'El Contemplador',
})

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>
