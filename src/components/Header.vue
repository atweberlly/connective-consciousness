<template>
  <header class="py-6">
    <div class="container flex items-center justify-between">
      <div>
        <span class="sr-only">Connective Consciousness</span>
        <a class="inline-block" href="/">
          <img class="h-12 w-auto" src="/images/cc-logotype.png" alt="Connective Consciousness" />
        </a>
      </div>

      <nav class="hidden md:block md:space-x-4" aria-label="Header Menu">
        <a class="md:text-sm md:uppercase" href="/">Home</a>
        <a class="md:text-sm md:uppercase" href="#">About</a>
        <a class="md:text-sm md:uppercase" href="#">Blog</a>
        <a class="md:text-sm md:uppercase" href="#">Contact</a>
        <a class="md:text-sm md:uppercase" href="#">Shop</a>
        <a class="md:text-sm md:uppercase" href="#">Book Online</a>
      </nav>

      <div class="md:hidden">
        <button class="block">
          <svg class="h-6 w-6 stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
