<template>
    <div class="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <!-- Header -->
        <div class="mb-14">
            <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3 animate-fade-up">
                About
            </p>
            <h1 class="font-display text-display-lg font-bold text-ink animate-fade-up" style="animation-delay: 80ms">
                The Contemplator
            </h1>
            <div class="editorial-rule mt-5 animate-fade-up" style="animation-delay: 160ms" />
        </div>

        <div class="flex flex-col lg:flex-row gap-12">
            <!-- Main content -->
            <div class="flex-1 space-y-12 animate-fade-up" style="animation-delay: 240ms">
                <!-- Intro -->
                <div class="space-y-4">
                    <p class="text-lg font-body font-light text-ink-light leading-relaxed">
                        Hey there! I'm <strong class="font-semibold text-ink">Roosevelt Segura</strong> —
                        a web developer, dancer, father, and lifelong thinker. Welcome to my little
                        corner of the internet.
                    </p>
                    <p class="text-base font-body text-ink-muted leading-relaxed">
                        This is where I share my thoughts on web development, parenting, dance,
                        and whatever else crosses my contemplating mind. Think of it as a digital
                        journal of lessons learned, ideas explored, and stories worth telling.
                    </p>
                </div>

                <!-- Sections -->
                <div class="space-y-10">
                    <!-- Web Development -->
                    <div class="group">
                        <h2 class="font-display text-xl font-semibold text-ink flex items-center gap-3 mb-3">
                            <span class="text-2xl">💻</span> Web Development
                        </h2>
                        <p class="text-base font-body text-ink-muted leading-relaxed pl-10">
                            By day, I build things for the web. I'm passionate about modern JavaScript
                            frameworks, clean code, and creating experiences that feel effortless.
                            You'll find posts here about Vue, Nuxt, TypeScript, and the ever-evolving
                            landscape of frontend development.
                        </p>
                    </div>

                    <!-- Dance -->
                    <div class="group">
                        <h2 class="font-display text-xl font-semibold text-ink flex items-center gap-3 mb-3">
                            <span class="text-2xl">💃</span> Dance
                        </h2>
                        <p class="text-base font-body text-ink-muted leading-relaxed pl-10">
                            When I step away from the keyboard, you'll often find me on the dance
                            floor. Salsa, bachata, and social dancing are a big part of my life —
                            they teach me about connection, rhythm, and being present in the moment.
                        </p>
                    </div>

                    <!-- Fatherhood -->
                    <div class="group">
                        <h2 class="font-display text-xl font-semibold text-ink flex items-center gap-3 mb-3">
                            <span class="text-2xl">👨‍👧</span> Fatherhood
                        </h2>
                        <p class="text-base font-body text-ink-muted leading-relaxed pl-10">
                            Being a dad is the most rewarding (and humbling) journey of my life.
                            It shapes everything I do and gives me a perspective that code and
                            dancing can't quite capture. Sometimes those lessons spill over into
                            what I write here.
                        </p>
                    </div>

                    <!-- Contemplation -->
                    <div class="group">
                        <h2 class="font-display text-xl font-semibold text-ink flex items-center gap-3 mb-3">
                            <span class="text-2xl">🤔</span> Contemplation
                        </h2>
                        <p class="text-base font-body text-ink-muted leading-relaxed pl-10">
                            "Contemplador" means "contemplator" — someone who pauses to think deeply.
                            That's the thread that ties all of this together. Whether it's a technical
                            challenge, a parenting moment, or a thought on the dance floor, I believe
                            the best insights come when we slow down and really look.
                        </p>
                    </div>
                </div>

                <!-- About this blog -->
                <div class="pt-8 border-t border-parchment-300/60">
                    <h2 class="font-display text-xl font-semibold text-ink mb-3">About this blog</h2>
                    <p class="text-base font-body text-ink-muted leading-relaxed mb-4">
                        This site is built with <strong class="font-medium text-ink">Nuxt 3</strong>
                        and <strong class="font-medium text-ink">Vue</strong>, styled with
                        <strong class="font-medium text-ink">Tailwind CSS</strong>, and deployed on
                        <strong class="font-medium text-ink">AWS Amplify</strong>. Content is written
                        in Markdown and managed with Nuxt Content.
                    </p>
                    <NuxtLink to="/articles"
                        class="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-accent hover:text-accent-hover transition-colors">
                        Start reading &rarr;
                    </NuxtLink>
                </div>

                <!-- Quote -->
                <div class="pt-6">
                    <p class="font-display text-lg italic text-ink-muted">
                        &ldquo;To contemplate is to look thoughtfully for a long time.&rdquo;
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
const { data: posts } = await useAsyncData('about-tags', () =>
    queryCollection('articles').order('pubDate', 'DESC').all()
)

const allTags = computed(() => {
    if (!posts.value) return []
    const tags = new Set<string>()
    posts.value.forEach(p => p.tags?.forEach((t: string) => tags.add(t)))
    return [...tags].sort()
})
</script>
