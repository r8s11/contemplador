<template>
    <header class="sticky top-0 z-50 bg-parchment-100/90 backdrop-blur-md border-b border-parchment-300/60">
        <div class="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
            <NuxtLink to="/" class="group flex items-center gap-3">
                <span
                    class="text-2xl font-display font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    El Contemplador
                </span>
            </NuxtLink>

            <!-- Desktop nav -->
            <nav class="hidden sm:flex items-center gap-8">
                <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                    class="nav-link text-sm font-body font-medium tracking-wide uppercase text-ink-muted hover:text-ink transition-colors">
                    {{ link.label }}
                </NuxtLink>
            </nav>

            <!-- Mobile menu button -->
            <button class="sm:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu"
                @click="mobileOpen = !mobileOpen">
                <span class="block w-5 h-0.5 bg-ink transition-all duration-300"
                    :class="mobileOpen ? 'rotate-45 translate-y-[4px]' : ''" />
                <span class="block w-5 h-0.5 bg-ink transition-all duration-300"
                    :class="mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''" />
            </button>
        </div>

        <!-- Mobile menu -->
        <Transition name="mobile-menu">
            <div v-if="mobileOpen" class="sm:hidden border-t border-parchment-300/60 bg-parchment-100">
                <nav class="flex flex-col px-6 py-4 gap-3">
                    <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                        class="text-sm font-medium uppercase tracking-wide text-ink-muted hover:text-accent transition-colors py-1"
                        @click="mobileOpen = false">
                        {{ link.label }}
                    </NuxtLink>
                </nav>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/articles', label: 'Articles' },
    { to: '/about', label: 'About' },
]
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    overflow: hidden;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    max-height: 0;
    opacity: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
    max-height: 200px;
    opacity: 1;
}
</style>
