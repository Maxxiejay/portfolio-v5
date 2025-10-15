<template>
    <div id="project-card" class="relative mx-auto">
        <div class="icons absolute top-2 flex justify-between w-full">
            <a :href="github">
                <i class="fab fa-github"></i>
            </a>
            <a @click.prevent="openLightbox(siteUrl)">
                <i class="fa-light fa-globe"></i>
            </a>
        </div>
        <div v-if="lightboxOpen" class="lightbox">
            <div class="lightbox-content">
                <span class="top-bar" >
                    <div class="name flex items-center">{{ siteName }}</div>
                    <div class="buttons flex gap-4">
                        <i class="fa-thin fa-square" @click="openInNewTab(siteUrl)"></i>
                        <i class="close fa-thin fa-close" @click="closeLightbox"></i>
                    </div>
                </span>
                <iframe :src="lightboxUrl" width="100%" height="100%"></iframe>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    defineProps({
        github: {
            type: String
        },
        siteUrl: {
            type: String
        },
        siteName: {
            type: String
        },
    })

    const lightboxOpen = ref(false);
    const lightboxUrl = ref(null);

    function openLightbox(url) {
        lightboxUrl.value = url;
        lightboxOpen.value = true;
    }

    function closeLightbox() {
        lightboxOpen.value = false;
    }

    function openInNewTab(url) {
        window.open(url, '_blank');
    }
</script>

<style scoped>
    .lightbox {
        position: fixed;
        z-index: 1;
        padding: 20px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.9);
        z-index: 99999999999999;
    }

    .lightbox-content {
        position: relative;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1000px;
        height: 100%;
        border: 1px solid var(--primary);
    }

    .lightbox-content iframe {
        width: 100%;
        height: 100%;
        border: none;
        box-sizing: border-box;
    }

    .top-bar {
        position: relative;
        color: #f1f1f1;
        transition: 0.3s;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 99999;
        border-bottom: 1px solid var(--primary);
        padding: 5px 10px;
    }

    .top-bar i{
        font-size: 1.7rem;
        cursor: pointer;
    }

    .close:hover,
    .close:focus {
        color: #bbb;
        text-decoration: none;
         
    }

    #project-card{
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(143, 92, 255, 0.1);
        color: #fff;
        max-width: 300px;
        width: 100%;
        height: fit-content;
        border: 2px solid var(--primary);
        border-radius: 10px;
    }


    #project-card img{
        width: 100%;
    }

    #project-card .icons{
        padding: 10px 15px;
    }

    #project-card .icons a{
        height: 40px;
        width: 40px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--dark)
    }

    #project-card .icons i{
        font-size: 1.5rem;
    }
</style>