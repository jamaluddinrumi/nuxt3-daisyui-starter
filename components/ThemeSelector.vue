<script setup lang="ts">
import { onMounted } from "vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <div title="Change Theme" class="dropdown-end dropdown">
    <div tabindex="0" class="btn-ghost btn gap-1 normal-case">
      <IconsThemeChooser />
    </div>
    <div
      class="dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl"
    >
      <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
        <div
          class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-base-content"
          data-set-theme="light"
          data-act-class="outline"
        >
          <div
            data-theme="light"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">light</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="dark"
          data-act-class="outline"
        >
          <div
            data-theme="dark"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">dark</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="cupcake"
          data-act-class="outline"
        >
          <div
            data-theme="cupcake"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">cupcake</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="bumblebee"
          data-act-class="outline"
        >
          <div
            data-theme="bumblebee"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">bumblebee</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="emerald"
          data-act-class="outline"
        >
          <div
            data-theme="emerald"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">emerald</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="corporate"
          data-act-class="outline"
        >
          <div
            data-theme="corporate"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">corporate</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="synthwave"
          data-act-class="outline"
        >
          <div
            data-theme="synthwave"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">synthwave</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="retro"
          data-act-class="outline"
        >
          <div
            data-theme="retro"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">retro</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="cyberpunk"
          data-act-class="outline"
        >
          <div
            data-theme="cyberpunk"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">cyberpunk</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="valentine"
          data-act-class="outline"
        >
          <div
            data-theme="valentine"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">valentine</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="halloween"
          data-act-class="outline"
        >
          <div
            data-theme="halloween"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">halloween</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="garden"
          data-act-class="outline"
        >
          <div
            data-theme="garden"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">garden</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="forest"
          data-act-class="outline"
        >
          <div
            data-theme="forest"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">forest</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="aqua"
          data-act-class="outline"
        >
          <div
            data-theme="aqua"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">aqua</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="lofi"
          data-act-class="outline"
        >
          <div
            data-theme="lofi"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">lofi</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="pastel"
          data-act-class="outline"
        >
          <div
            data-theme="pastel"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">pastel</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="fantasy"
          data-act-class="outline"
        >
          <div
            data-theme="fantasy"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">fantasy</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="wireframe"
          data-act-class="outline"
        >
          <div
            data-theme="wireframe"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">wireframe</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="black"
          data-act-class="outline"
        >
          <div
            data-theme="black"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">black</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="luxury"
          data-act-class="outline"
        >
          <div
            data-theme="luxury"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">luxury</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="dracula"
          data-act-class="outline"
        >
          <div
            data-theme="dracula"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">dracula</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="cmyk"
          data-act-class="outline"
        >
          <div
            data-theme="cmyk"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">cmyk</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="autumn"
          data-act-class="outline"
        >
          <div
            data-theme="autumn"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">autumn</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="business"
          data-act-class="outline"
        >
          <div
            data-theme="business"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">business</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="acid"
          data-act-class="outline"
        >
          <div
            data-theme="acid"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">acid</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="lemonade"
          data-act-class="outline"
        >
          <div
            data-theme="lemonade"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">lemonade</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="night"
          data-act-class="outline"
        >
          <div
            data-theme="night"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">night</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="coffee"
          data-act-class="outline"
        >
          <div
            data-theme="coffee"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">coffee</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
          data-set-theme="winter"
          data-act-class="outline"
        >
          <div
            data-theme="winter"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div
                class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
              >
                <div class="flex-grow text-sm font-bold">winter</div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
