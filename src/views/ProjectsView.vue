<template>
  <div id="projects" class="w-full text-white mb-20 flex flex-col space-y-6">
    <!-- <PageBlocker content="Desktop view is temporarily unavailable. Please switch to mobile" /> -->
    <PageHeader title="My Projects" />
    <p class="my-10 text-xl text-center">Here are some of the works I've done so far</p>
    <div id="project-cards">
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://optrack.pilotai.online" siteName="Optrack">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/optrack.png" alt="">
          </div>
          <span class="text-lg font-semibold">Optrack</span>
          <p class="description text-gray-300">
            Optrack is a platform where users can both find opportunities(grants, jobs, internships...) and also contribute to the platform by simply pasting the a link to an opportunity and the platrofm handles the hurdles of extracting the data and storing it in the database
          </p>
          <div class="flex flex-wrap gap-2">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="Node.js/Express" class="border-yellow-600 text-yellow-600" />
            <Tag name="Gemini Ai" class="border-purple-600 text-purple-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://pilotai.online" siteName="Pilot Ai">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/pilot_ai.png" alt="">
          </div>
          <span class="text-lg font-semibold">Pilot Ai</span>
          <p class="description text-gray-300">
            Pilot Ai is a Ai assistant that aims to closely interract with the user and understand gain context of by
            reading the user's screen to provide better answers and solutions particular to that user
          </p>
          <div class="flex flex-wrap gap-2">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="Gemini Ai" class="border-purple-600 text-purple-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://live-tracking-virid.vercel.app"
        siteName="LiveTrack">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/livetrack.png" alt="">
          </div>
          <span class="text-lg font-semibold">LiveTrack</span>
          <p class="description text-gray-300">
            LiveTrack is an app that aims to improve order tracking experience between users and dispatch riders by
            providing live location feedback
          </p>
          <div class="flex">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="Node.js/Express" class="border-yellow-600 text-yellow-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://travella.io/more" siteName="Travella More">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/travella_more.png" alt="">
          </div>
          <span class="text-lg font-semibold">Travella More</span>
          <p class="description text-gray-300">
            An extension of travella for businesses
          </p>
          <div class="flex">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="Node.js/Express" class="border-yellow-600 text-yellow-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://travella.io" siteName="Travella">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/travella.png" alt="">
          </div>
          <span class="text-lg font-semibold">Travella</span>
          <p class="description text-gray-300">
            Travella is a decentralized logistics platform that aims to reduce the cost on interstate logistics
          </p>
          <div class="flex">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://cowrite.africa" siteName="Cowrite">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/cowrite-demo.png" alt="">
          </div>
          <span class="text-lg font-semibold">Cowrite</span>
          <p class="description text-gray-300">
            A blog fullstack blog website like medium that lets users not only create posts and make comments on posts,
            but also lets users make contributions to posts
          </p>
          <div class="flex">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="Laravel" class="border-red-600 text-red-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://ueye-download.netlify.app" siteName="UEye">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/ueye.png" alt="">
          </div>
          <span class="text-lg font-semibold">UEye</span>
          <p class="description text-gray-300">
            A browser extension that analyses UIs and gives suggestions for improvement.
            It also conducts SEO audits on pages and can double for taking screenshots
          </p>
          <div class="flex">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="Gemini Ai" class="border-purple-600 text-purple-600" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://anythingfood.netlify.app"
        siteName="Anythingfood">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/anythingfood.png" alt="">
          </div>
          <span class="text-lg font-semibold">Anythingfood</span>
          <p class="description text-gray-300">
            A site where you can call your favourite restaurant in town and order food
          </p>
          <div class="flex">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="#" siteName="">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/studycraft.png" alt="">
          </div>
          <span class="text-lg font-semibold">StudyCraft Ai</span>
          <p class="description text-gray-300">
            A mobile application built with flutter and gemini ai that generates study materials from given topics
          </p>
          <div class="flex">
            <Tag name="Flutter" class="border-blue-600 text-blue-600" />
            <Tag name="Gemini Ai" class="border-purple-600 text-purple-600" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://dwpcng.netlify.app" siteName="DWPCNG">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/dwpcng.png" alt="">
          </div>
          <span class="text-lg font-semibold">Dominion Word And Prayer Chapel</span>
          <p class="description text-gray-300">
            A church site that helps bring content closer to its users no matter the location
          </p>
          <div class="flex">
            <Tag name="Vue.js" class="border-green-600 text-green-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
            <Tag name="Firebase" class="border-yellow-600 text-yellow-600" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="#" siteName="Laracast">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/laracast_mobile.png" alt="">
          </div>
          <span class="text-lg font-semibold">Laracast Blog</span>
          <p class="description text-gray-300">
            Fullstack blog built on laravel and TailwindCSS
          </p>
          <div class="flex">
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
            <Tag name="Laravel" class="border-red-600 text-red-600" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="#" siteName="wypa">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/wypa.png" alt="">
          </div>
          <span class="text-lg font-semibold">Wypa</span>
          <p class="description text-gray-300">
            An app where its users can either request for cleaning service from cleaners around or apply to be a cleaner
            and earn extra income
          </p>
          <div class="flex">
            <Tag name="Flutter" class="border-blue-600 text-blue-600" />
            <Tag name="Laravel" class="border-red-600 text-red-600" />
          </div>
        </div>
      </ProjectCard>
      <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="#" siteName="Laracast">
        <div class="flex flex-col gap-4">
          <div class="image">
            <img src="../assets/images/trapezium_mobile.png" alt="">
          </div>
          <span class="text-lg font-semibold">Trapezium</span>
          <p class="description text-gray-300">
            A full stack and fully functional job listing
          </p>
          <div class="flex">
            <Tag name="Laravel" class="border-red-600 text-red-600" />
            <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
          </div>
        </div>
      </ProjectCard>

    </div>
    <RouterLink :to="{ name: 'contact' }" class="btn text-nowrap text-center self-center">
      <span>Get Your Own</span>
    </RouterLink>
  </div>
</template>

<script setup>
import PageBlocker from "@/components/PageBlocker.vue"
import PageHeader from "@/components/PageHeader.vue"
import ProjectCard from "@/components/cards/ProjectCard.vue";
import Tag from "@/components/Tag.vue";
</script>

<style>
#projects {
  padding: 0 20px;
}

#project-cards {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.image {
  max-height: 270px;
  overflow: hidden;
  border-radius: 10px;
}

.image img {
  width: 100%;
}
</style>