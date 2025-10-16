<template>
  <div id="projects" class="w-full text-white mb-20 flex flex-col items-stretch space-y-6">
    <PageHeader title="My Projects" />
    <p class="my-10 text-xl text-center">Here are some of the works I've done so far</p>
    <div id="project-cards">
      <ProjectCard v-for="project in projects" :key="project.id" :github="project.github" :siteUrl="project.siteUrl"
        :siteName="project.siteName">
        <div class="flex flex-col justify-between h-full gap-4">
          <div class="image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <span class="text-lg font-semibold">{{ project.title }}</span>
          <p class="description text-gray-300">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <Tag v-for="(tag, i) in project.tags" :key="i" :name="tag.name" :class="tag.class" />
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
import PageHeader from "@/components/PageHeader.vue"
import ProjectCard from "@/components/cards/ProjectCard.vue";
import Tag from "@/components/Tag.vue";
import projects from '@/data/projects.js'
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