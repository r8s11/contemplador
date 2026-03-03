<template>
    <div class="grain min-h-screen flex flex-col bg-parchment-100 text-ink font-body">
        <Nav />
        <main class="flex-1">
            <slot />
        </main>
        <Footer />
    </div>
</template>
