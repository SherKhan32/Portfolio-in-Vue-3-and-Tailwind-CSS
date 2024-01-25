<script setup>
import {ref} from 'vue';
const experiences = ref([
  {
    id:1,
    jobTitle: 'Front End Web Developer',
    position: 'Frontend web developer',
    companyName: 'Skyive',
    fromDate: "2022",
    toDate: "present",
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Javascript', 'Tailwind Css', 'Font-awesome-icon', 'Vue3 Toastify', 'MomentJs'],
    usefulLinks : [
        { name:'Vue 3', link:'https://vuejs.org/guide/introduction.html' },
        { name:'Nuxt 3', link:'https://nuxt.com/' },
        { name:'Moment Js', link:'https://https://momentjs.com/' },
    ],
    description : "As a Frontend Web Developer at Axlic, I create websites, portals, and landing pages using Vue.js and Nuxt.js. I utilize Tailwind CSS, Bootstrap, and regular CSS for styling, incorporating Vuetify components based on project requirements. I also focus on design updates and bug fixes to maintain optimal website functionality and appearance."
  },
  {
    id:2,
    jobTitle: 'SEO Specialist',
    position: 'Frontend web developer',
    companyName: 'Skyive',
    fromDate: "2022",
    toDate: "present",
    siteLink : 'https://skyive.com',
    technologies : ['Vue 3', 'Nuxt 3', 'Javascript', 'Tailwind Css'],
    usefulLinks : [
        { name:'Nuxt SEO', link:'https://nuxt.com/modules/seo' },
    ],
    description : "As a dedicated SEO Specialist, I strategically optimize websites and landing pages to achieve high Google rankings. I implement comprehensive SEO techniques, including keyword targeting, graphic optimization for enhanced loading speed, and the integration of plugins when necessary. My role involves meticulous keyword research, ensuring our content aligns with specific key terms to maximize online visibility and drive organic traffic."
  },
]);

</script>
<template>
    <div
          id="experience"
          class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work experience"
        >
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:pt-10">
            <h2
              class="text-sm font-bold uppercase tracking-widest text-slate-200 "
            >
              Experience
            </h2>
          </div>

          <div>
            <ol class="group/list">

              <!-- My Experiences -->
              <li 
                v-for="experience in experiences"
                :key="experience.id"
                class="mb-12"
              >
                <div
                  class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                  <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                  >
                  </div>
                  <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{{experience.fromDate}} — {{experience.toDate}}</header>
                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200">
                      
                      <div>
                        <router-link
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          to="/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span
                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                          >
                          </span>
                            <span>{{experience.jobTitle}} .
                              <span class="inline-block">{{experience.companyName}}
                                <!-- <svg-icon 
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                                  type="mdi" 
                                  :path="mdiArrowTopRight "
                                ></svg-icon> -->
                              </span>
                            </span
                        ></router-link>
                      </div>
                      <div>
                        <div class="text-slate-500">
                          {{experience.position}}
                        </div>
                      </div>
                    </h3>
                    <p class="mt-2 text-sm leading-normal">
                      {{experience.description}}
                    </p>
                    <ul class="mt-2 flex flex-wrap" aria-label="Related links">
                      <li
                        v-for="(usefulLink , index) in experience.usefulLinks"
                        :key="index" 
                        class="mr-4"
                      >
                        <router-link
                          class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                          :to="usefulLink.link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <!-- <svg-icon class="mr-1 h-3 w-3" type="mdi" :path="mdiLinkVariant "></svg-icon> -->
                          <span>{{ usefulLink.name}}</span>
                        </router-link>
                      </li>
                    </ul>
                    <ul
                      class="mt-2 flex flex-wrap"
                    >
                      <li 
                        v-for="(technology, index) in experience.technologies"
                        :key="index"
                        class="mr-1.5 mt-2"
                      >
                        <div
                          class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                        >
                          {{technology}}
                        </div>
                      </li>
                    </ul>


                  </div>
                </div>
              </li>
            </ol>

            <!-- Resume show link -->
            <div class="mt-12">
              <router-link
                class="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                to="/web_developer_frontend_sher_khan.pdf"
                target="_blank"
              >
                <span>
                  <span
                    class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
                  >
                    View Full
                  </span>
                  <span class="whitespace-nowrap">
                    <span
                      class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
                    >
                      Resume
                    </span>
                    <!-- <svg-icon 
                      class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                      type="mdi" 
                      :path="mdiArrowRight"
                    ></svg-icon> -->
                  </span>
                </span>
              </router-link>
            </div>
          </div>
        </div>
</template>