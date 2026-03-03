<template>
    <footer class="border-t border-parchment-300/60 mt-24">
        <div class="max-w-6xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <!-- Brand -->
                <div>
                    <NuxtLink to="/" class="flex items-center gap-2 mb-2">
                        <span class="text-lg">🤔</span>
                        <span class="font-display text-lg font-semibold text-ink">El Contemplador</span>
                    </NuxtLink>
                    <p class="text-xs text-ink-faint font-body leading-relaxed">
                        Roosevelt Segura's digital sanctuary where web development
                        meets personal reflection.
                    </p>
                    <p class="mt-2 text-xs font-body font-medium text-ink-faint">
                        Father · Developer · Dancer · Thinker
                    </p>
                </div>

                <!-- Links -->
                <div>
                    <h4 class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint mb-4">
                        Navigate</h4>
                    <nav class="flex flex-col gap-2 text-sm font-body text-ink-muted">
                        <NuxtLink to="/" class="hover:text-accent transition-colors">Home</NuxtLink>
                        <NuxtLink to="/articles" class="hover:text-accent transition-colors">Articles</NuxtLink>
                        <NuxtLink to="/about" class="hover:text-accent transition-colors">About</NuxtLink>
                    </nav>
                </div>

                <!-- Connect -->
                <div>
                    <h4 class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint mb-4">Connect
                    </h4>
                    <div class="flex flex-col gap-2 text-sm font-body text-ink-muted">
                        <a href="mailto:roosevelt@contemplador.dev"
                            class="hover:text-accent transition-colors">Email</a>
                        <a href="https://www.linkedin.com/in/rooseveltsegura" target="_blank" rel="noopener"
                            class="hover:text-accent transition-colors">LinkedIn</a>
                        <a href="https://x.com/r8s11" target="_blank" rel="noopener"
                            class="hover:text-accent transition-colors">Twitter / X</a>
                    </div>
                </div>
            </div>

            <!-- Divider + copyright -->
            <div class="editorial-rule mt-10 mb-4" />
            <p class="text-xs text-ink-faint font-body">
                &copy; {{ new Date().getFullYear() }} Roosevelt Segura · Made with ♥ and curiosity
            </p>
        </div>
    </footer>
</template>
