<template>
  <div class="relative">
    <header class="py-6">
      <div class="container flex items-center">
        <a class="inline-block" href="/">
          <span class="sr-only">Connective Consciousness</span>
          <img class="h-12 w-auto" src="/images/cc-logotype.png" alt="Connective Consciousness" />
        </a>

        <nav class="hidden md:ml-auto md:block md:space-x-4" aria-label="Header Menu">
          <a class="text-sm font-semibold uppercase" href="/">Home</a>
          <a class="text-sm font-semibold uppercase" href="#">About</a>
          <a class="text-sm font-semibold uppercase" href="#">Blog</a>
          <a class="text-sm font-semibold uppercase" href="#">Contact</a>
          <a class="text-sm font-semibold uppercase" href="#">Shop</a>
          <a class="text-sm font-semibold uppercase" href="#">Book Online</a>
        </nav>

        <div class="hidden md:ml-4 md:flex md:items-center md:space-x-2">
          <button>
            <span class="sr-only">Search</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="currentColor" d="m17.766 16.69-5.073-5.073a5.807 5.807 0 0 0 1.213-3.57 5.824 5.824 0 0 0-1.716-4.143 5.816 5.816 0 0 0-4.143-1.716 5.824 5.824 0 0 0-4.143 1.716 5.813 5.813 0 0 0-1.716 4.143c0 1.564.61 3.037 1.716 4.143a5.813 5.813 0 0 0 4.143 1.716c1.308 0 2.55-.426 3.568-1.21l5.072 5.07a.16.16 0 0 0 .227 0l.852-.85a.16.16 0 0 0 0-.227Zm-6.625-5.55a4.351 4.351 0 0 1-3.094 1.282 4.351 4.351 0 0 1-3.094-1.281 4.351 4.351 0 0 1-1.281-3.094c0-1.168.455-2.268 1.281-3.094a4.351 4.351 0 0 1 3.094-1.281 4.34 4.34 0 0 1 3.094 1.281 4.351 4.351 0 0 1 1.28 3.094 4.348 4.348 0 0 1-1.28 3.094Z" />
            </svg>
          </button>

          <a href="#">
            <span class="sr-only">Profile</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="currentColor" d="M16.768 14.914a7.304 7.304 0 0 0-1.575-2.334 7.335 7.335 0 0 0-2.334-1.574l-.023-.01A4.843 4.843 0 0 0 10 2.226a4.843 4.843 0 0 0-2.836 8.772l-.023.01a7.269 7.269 0 0 0-2.334 1.574 7.337 7.337 0 0 0-2.15 5.031.156.156 0 0 0 .155.16h1.172a.156.156 0 0 0 .157-.152 5.823 5.823 0 0 1 1.714-3.99A5.82 5.82 0 0 1 10 11.914a5.82 5.82 0 0 1 4.145 1.717 5.823 5.823 0 0 1 1.714 3.99c.002.086.07.152.157.152h1.172a.156.156 0 0 0 .156-.16 7.279 7.279 0 0 0-.576-2.699ZM10 10.43c-.896 0-1.74-.35-2.375-.985a3.338 3.338 0 0 1-.984-2.375c0-.896.35-1.74.984-2.375A3.338 3.338 0 0 1 10 3.711c.896 0 1.74.35 2.375.984.635.635.984 1.479.984 2.375 0 .897-.35 1.74-.984 2.375A3.338 3.338 0 0 1 10 10.43Z" />
            </svg>
          </a>

          <a href="#">
            <span class="sr-only">Shopping Cart</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="currentColor" d="M18.025 13.709H6.395l.584-1.19 9.703-.017a.679.679 0 0 0 .668-.559l1.343-7.521a.679.679 0 0 0-.666-.799L5.684 3.582l-.106-.496a.694.694 0 0 0-.676-.547H1.885a.69.69 0 1 0 0 1.379h2.459l.46 2.191 1.135 5.495-1.46 2.384a.683.683 0 0 0-.06.719.687.687 0 0 0 .616.379h1.227a2.005 2.005 0 0 0 1.602 3.209 2.005 2.005 0 0 0 1.6-3.21h3.147a2.005 2.005 0 0 0 1.602 3.209 2.005 2.005 0 0 0 1.602-3.208h2.212a.69.69 0 0 0 .69-.69.692.692 0 0 0-.692-.687ZM5.971 4.941l11.246.038-1.102 6.167-8.834.016-1.31-6.22Zm1.892 11.967a.618.618 0 0 1-.617-.617c0-.34.277-.617.617-.617a.619.619 0 0 1 .437 1.053.617.617 0 0 1-.437.181Zm6.35 0a.618.618 0 0 1 0-1.234.619.619 0 0 1 .436 1.053.617.617 0 0 1-.436.181Z" />
            </svg>
          </a>
        </div>

        <div class="ml-auto md:hidden" id="menu-button">
          <button class="block">
            <svg class="h-6 w-6 stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <div class="fixed inset-2 top-2 z-10 hidden h-fit rounded-xl bg-white py-6 shadow-lg" id="mobile-menu">
      <div class="flex items-center justify-between px-6">
        <a href="/">
          <span class="sr-only">Connective Consciousness</span>
          <img class="w-12" src="/images/cc-mobile-logomark.png" alt="Connective Consciousness" />
        </a>

        <button id="close-menu-button">
          <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 6 12 12M6 18 18 6 6 18Z" />
          </svg>
        </button>
      </div>

      <nav class="mt-6 space-y-1 px-3" aria-label="Mobile menu">
        <a class="block rounded-lg px-3 py-2 hover:bg-slate-100" href="/">Home</a>
        <a class="block rounded-lg px-3 py-2 hover:bg-slate-100" href="#">About</a>
        <a class="block rounded-lg px-3 py-2 hover:bg-slate-100" href="#">Blog</a>
        <a class="block rounded-lg px-3 py-2 hover:bg-slate-100" href="#">Contact</a>
        <a class="block rounded-lg px-3 py-2 hover:bg-slate-100" href="#">Shop</a>
        <a class="block rounded-lg px-3 py-2 hover:bg-slate-100" href="#">Book Online</a>
      </nav>
    </div>

    <div class="fixed inset-0 hidden h-full w-full bg-gray-900/50" id="mobile-menu-overlay" aria-hidden="true" aria-label="Mobile menu overlay"></div>
  </div>
</template>

<script>
const openMobileMenu = () => {
  const menuButton = document.getElementById('menu-button')
  const mobileMenu = document.getElementById('mobile-menu')
  const closeMenuButton = document.getElementById('close-menu-button')
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay')

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
    mobileMenuOverlay.classList.remove('hidden')
  })

  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    mobileMenuOverlay.classList.add('hidden')
  })
}

export default {
  mounted: () => {
    openMobileMenu()
  },
}
</script>
