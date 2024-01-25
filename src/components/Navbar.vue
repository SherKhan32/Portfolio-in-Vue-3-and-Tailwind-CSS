<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activeLink = ref("about-link");
const navLinks = ref([
  {
    id:1,
    name:"About",
    linkId: "about-link",
    sectionId : 'about'
  },

  {
    id:2,
    name:"Experience",
    linkId: "experience-link",
    sectionId : 'experience'
  },

  {
    id:3,
    name:"Projects",
    linkId: "project-link",
    sectionId : 'projects'
  },
]);

const socialLinks = ref([
  {
    name:"GitHub",
    link : "https://github.com/SherKhan32"
  },
  {
    name:"WhatsApp",
    link : "tel:+971547880773"
  },
  {
    name:"Twitter",
    link : "https://Twitter.com/"
  },
  {
    name:"LinkedIn",
    link : "https://linkedin.com/in/sherkhan32"
  }
]);

function activeTheLink(payload){
  activeLink.value = payload;
}

function isSectionInViewport(sectionId) {
    const targetDiv = document.getElementById(sectionId);
    if (!targetDiv) return false;
      const rect = targetDiv.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Calculate the center of the div
      const divCenter = rect.top + rect.height / 2;

      return divCenter >= 0 && divCenter <= windowHeight;

}

function handleTheScroll(){
    for (let item of navLinks.value) {
        if (isSectionInViewport(item.sectionId)) {
          activeLink.value = item.linkId;
          break;
        }
      }
}

onMounted(() => {
      window.addEventListener('scroll', handleTheScroll);
  });

onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleTheScroll);
  });

</script>

<template>
    <!-- Header and Navbar -->
      <div
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16"
      >
        <div>
          <div class="">
            <div class="h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full border-8 border-slate-200 shadow-xl">
                <img src="/images/profile_image.png" class="p-1 h-full w-full object-cover  rounded-full" alt="author" />
            </div>  
          </div>
          <h1 class="mt-3 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <router-link to="/">
                Sher Khan
            </router-link>
          </h1>
          <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Front End Web Developer
          </h2>
          <p class="mt-4 max-w-xs leading-normal"> 
            Front-end web developer skilled in creating engaging and responsive user interfaces.
          </p>


          <nav class="hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-10 w-max">
              <li>
                <router-link 
                  class="group flex items-center py-3"
                  @click="activeTheLink(navLinks[0].linkId)"
                  :class="{'active' : activeLink === navLinks[0].linkId}"
                  to="#about"
                  :id="navLinks[0].linkId"
                >
                    <span
                        class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                    >
                    </span>

                    <span
                        class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    >  
                      {{ navLinks[0].name }}
                    </span>
                </router-link>
              </li>
              <li>
                <router-link 
                  class="group flex items-center py-3"
                  @click="activeTheLink(navLinks[1].linkId)"
                  :class="{'active' : activeLink === navLinks[1].linkId}"
                  to="#experience"
                  :id="navLinks[1].linkId" 
                >
                    <span
                        class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                    >
                    </span>
                    <span
                        class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    >
                        {{ navLinks[1].name }}
                    </span>
                </router-link>
              </li>
              <li>
                <router-link 
                  class="group flex items-center py-3" 
                  @click="activeTheLink(navLinks[2].linkId)"
                  :class="{'active' : activeLink === navLinks[2].linkId}"
                  to="#projects"
                  :id="navLinks[2].linkId"
                >
                    <span
                        class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                    >
                    </span>
                    <span
                        class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    >
                        {{ navLinks[2].name }}
                    </span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center">
          <li class="mr-5 text-xs">
            <router-link class="block hover:text-slate-200"
              :to="socialLinks[0].link"
              target="_blank"
              rel="noreferrer"
            >
                <span class="sr-only">{{socialLinks[0].name}}</span>
                <!-- <svg-icon type="mdi" :path="mdiGithub" size="2rem"></svg-icon> -->
            </router-link>
          </li>
          <li class="mr-5 text-xs">
            <router-link class="block hover:text-slate-200"
              :to="socialLinks[1].link"
              target="_blank"
              rel="noreferrer"
            >
                <span class="sr-only">WhatsApp</span>
                <!-- <svg-icon type="mdi" :path="mdiWhatsapp" size="2rem"></svg-icon> -->
                <!-- <svg-icon type="mdi" :path="mdiInstagram" size="2rem"></svg-icon> -->

            </router-link>
          </li>
          <li class="mr-5 text-xs">
            <router-link
              class="block hover:text-slate-200"
              :to="socialLinks[2].link"
              target="_blank"
              rel="noreferrer"
            >
                <span class="sr-only">Twitter</span>
                <!-- <svg-icon type="mdi" :path="mdiTwitter" size="2rem"></svg-icon> -->

            </router-link>
          </li>
          <li class="mr-5 text-xs">
            <router-link
              class="block hover:text-slate-200"
              :to="socialLinks[3].link"  
            >
              <span class="sr-only">LinkedIn</span>
            </router-link>
          </li>
        </ul>
      </div>
</template>
<style scoped>
    .active .nav-indicator {
        @apply w-16 bg-slate-200 ;
    }

    .active .nav-text {
        @apply text-slate-200
    }
</style>