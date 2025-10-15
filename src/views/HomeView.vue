<template>
  <div class="relative w-full md:flex md:justify-evenly items-center">
    <div
      id="home_intro"
      class="flex justify-center flex-col max-w-xl p-6 text-start md:self-start"
    >
    <div class="contents md:flex-row  relative">

      <!-- <AnimatedBg /> -->
      <div class="intro relative z-20 text-gray-300 leading-6 flex flex-col">
        <span class="text-4xl font-bold mb-4 text-white"
          >Hi 👋<br class="md:hidden" />
          I'm Maxwell</span
        >
        <Typewriter
          :text="['Creative Developer', 'Tech Enthusiast']"
          class="text-2xl font-semibold text-primary mb-4"
        />
        <p>
          I am a passionate developer with a flair for creating innovative
          solutions and bringing ideas to life through code.
        </p>
      </div>
      <div class="flex w-full">
        <div
          class="social relative z-20 flex items-center justify-start gap-4 w-full my-4 md:gap-10"
        >
          <a href="https://github.com/amazingjomax/" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/maxwell-joshua-448a71247"
            target="_blank"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="https://twitter.com/MaxwellJoshua17" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://wa.me/2347038055097" target="_blank"
            ><i class="fab fa-whatsapp"></i
          ></a>
        </div>
        <RouterLink
          :to="{ name: 'contact' }"
          class="btn-alt relative z-20 text-nowrap text-center space-x-2 self-center"
        >
          <span>Hire Me</span>
          <i class="fa fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- <PictureFrame class="hidden md:block" /> -->
    <!-- <div class="home-overlay absolute bg-black top-0 left-0 z-10 opacity-80 h-full w-full"></div> -->

  </div>
</template>

<script setup>
  import Typewriter from "@/components/Typewriter.vue";
  // import PictureFrame from "@/components/PictureFrame.vue";
</script>

<style>
  body {
    background-color: #050816;
  }

  #home_intro {
    height: 100dvh;
    /* background-image: url(../assets/images/profile-pic-bw.png); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    /* max-height: 100lvh; */
    gap: 15px;
    align-items: center;
  }

  @media only screen and (min-width: 700px) {
    #home_intro{
      background: none;
      height: 80vh;
    }
    .home-overlay{
      display: none;
    }
  }

  #home_intro .avatar {
    margin-bottom: 4rem;
    /* border-radius: 75%; */
    /* clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); */
    animation: hover 3s infinite ease-in-out;
    box-shadow: 0 0 10px 5px rgba(145, 94, 255, 0.8);
  }

  #home_intro img {
    align-self: center;
  }

  #home_intro .social i {
    font-size: 1.6rem;
    color: var(--primary);
  }

  #home_intro .intro {
    grid-column: 1/3;
  }

  @keyframes hover {
    0% {
      transform: translateY(10px);
    }

    50% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(10px);
    }
  }
</style>
