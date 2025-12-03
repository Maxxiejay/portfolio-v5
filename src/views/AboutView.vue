<template>
  <div id="about" class=" h-full flex flex-col gap-10 items-center px-5 pb-20">
    <PageHeader title="About Me" />
    <section class="description flex flex-col gap-2">
      <h2 class="text-2xl text-primary font-semibold">Fullstack Developer</h2>
      <p class="text-lg text-gray-300">
        With over four years of experience in software development, using
        technologies like Vue.js, Laravel and Flutter, I specialize in turning ideas into reality.Whether it's designing
        intuitive user interfaces or building robust backend systems, or
        optimizing performance, I'm committed to delivering high-quality
        solutions that exceed expectations.
      </p>
      <button @click="download('max_resume5.pdf')" class="btn-alt w-fit">Resume</button>
    </section>
    <section id="services">
      <PageHeader subHeading="What I Do" />
      <div class="services_cards mx-auto">
        <ServicesCard title="Front-end development"
          description=" I specialize in crafting engaging and intuitive user interfaces and creating seamless experiences for users by implementing responsive design principles and leveraging modern frameworks of Vue.js."
          icon="fa-light fa-display-code" />
        <ServicesCard title="Back-end Development"
          description=" I excel at architecting robust and scalable server-side solutions to power web and mobile applications. Using Laravel, I design and implement efficient APIs, manage databases, and ensure seamless data flow between the frontend and backend layers."
          icon="fa-light fa-server" />
        <ServicesCard title="Mobile Development"
          description="I leverage Flutter and NativePHP to build cross-platform applications that run smoothly on both iOS and Android devices. From designing pixel-perfect UIs to integrating device-specific features."
          icon="fa-thin fa-mobile-notch" />
        <ServicesCard title="API Integration"
          description=" Whether it's integrating third-party APIs for authentication, payment processing, or data retrieval, I ensure robust connectivity and data integrity to power feature-rich applications."
          icon="fa-thin fa-brackets-curly" />
        <ServicesCard title="Software Maintenance"
          description=" I am committed to ensuring the long-term success and stability of software solutions through proactive maintenance and support. This includes regular updates, bug fixes, performance optimization, and security enhancements to keep applications running smoothly and securely over time."
          icon="fa-thin fa-screwdriver-wrench" />
      </div>
    </section>
    <section id="skills">
      <PageHeader subHeading="Skills & Tech" />
      <div class="cards">
        <PlainCard title="Laravel" icon="fab fa-laravel text-red-500" />
        <PlainCard title="Vue.js" icon="fab fa-vuejs text-green-600" />
        <PlainCard title="Flutter" :iconPath="flutter" />
        <PlainCard title="Node.js" :iconPath="nodejs" />
        <PlainCard title="TailwindCSS" :iconPath="tailwindcss" />
        <PlainCard title="Docker" :iconPath="docker" />
        <PlainCard title="Git" :iconPath="git" />
        <PlainCard title="Github" :iconPath="github" />
      </div>
    </section>

    <section id="education">
      <PageHeader subHeading="education" />
      <ExpCard title="uopeople" org="Computer Science(B.Sc)" date="September 2022 - 2026" />
      <ExpCard title="prospect high school" org="SSCE" date="July 2021" />
    </section>

    <section id="experience">
      <PageHeader subHeading="Work Experience" />
      <div class="exp-cards">

        <ExpCard title="community volunteer" org="Google Developers Group Akure" date="August 2023 - present">
        </ExpCard>
        <ExpCard title="php tutor" org="Litecode hub" date="Jan 2025 - March 2025">
        </ExpCard>
        <ExpCard title="full-stack developer" org="Cowrite" date="Dec 2024 - July 2025">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Developed a clean and minimal frontend using Vue.js and TailwindCSS
            </li>
            <li>
              Built a robust backend service with features like user authentication and authorization post CRUD
              functionalities
            </li>
            <li>
              Deployed and managed the application on hosting providers and also conducted maintenance regularly.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="Full-Stack developer" org="OpTrack" date="June 2025 - present">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Developed a clean and scalable backend using Node.js/Express.
            </li>
            <li>
              Developed a scalable and minimal frontend using Vue.js and TailwindCSS
            </li>
            <li>
              Deployed and managed the application on hosting providers and also conducted maintenance regularly.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="Full-Stack developer" org="Pilot Ai" date="May 2025 - June 2025">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Developed a minimal and intuitive frontend using React.js and TailwindCSS
            </li>
            <li>
              Regularly updated and maintained the application to ensure optimal performance and user experience.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="Full-Stack developer" org="Travella More" date="March 2025 - July 2025">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Developed a clean, robust and scalable backend using Node.js/Express.
            </li>
            <li>
              Developed a clean and intuitive frontend using Vue.js and TailwindCSS
            </li>
            <li>
              Deployed and managed the application on hosting providers and also conducted maintenance regularly.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="backend developer" org="Realestway" date="Feb 2025 - present">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Developed a clean, robust and scalable backend using Laravel.
            </li>
            <li>
              I contributed to the early-stage development and later oversaw the development and running of the app
            </li>
            <li>
              Deployed and managed the application on hosting providers and also conducted maintenance regularly.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="backend developer" org="HealthTok" date="Sept 2024 - Dec 2024">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Developed a clean backend using Laravel.
            </li>
            <li>
              Integrated features like user authentication, user roles payment and wallet system and chat system.
            </li>
            <li>
              Deployed and managed the backend on hosting provider and also conducted maintenance regularly.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="flutter developer" org="HealthTok" date="Nov 2024 - Dec 2024">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Built the video conferencing screens.
            </li>
            <li>
              Integrated the vidoe conferencing feature into the app with audio call functionality.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="backend developer" org="Fuxup Marketplace" date="July 2024 - March 2025">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Continued development of the backend using PHP.
            </li>
            <li>
              Designed and developed dashboard for client and freelancers
            </li>
            <li>
              Managed backend deployment on hosting provider and also conducted maintenance regularly.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="frontend developer" org="DWPCNG" date="Sept 2023 - Dec 2024">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Designed a clean and intuitive user interface that reflects the
              values and identity of the church.
            </li>
            <li>
              Integrated live streaming functionality directly into the website to
              broadcast church services, events, and special programs in
              real-time.
            </li>
            <li>
              Regularly updated website content, including announcements, upcoming
              events, sermon and recordings to keep the site fresh and engaging.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="lead developer" org="Anythingfood.ng" date="Jan 2024 - July 2024">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Designed a visually appealing and intuitive user interface using
              Vue.js.
            </li>
            <li>
              Implemented responsive design techniques to ensure optimal viewing
              experience across desktops, tablets, and mobile devices.
            </li>
            <li>
              Developed interactive features like search functionality, and
              filtering options for easy navigation.
            </li>
            <li>
              Integrated secure payment gateways to facilitate online transactions
              and ensure user data privacy.
            </li>
          </ul>
        </ExpCard>
        <ExpCard title="flutter developer" org="Wypa" date="Feb 2024 - May 2024">
          <ul class="flex flex-col space-y-4 mt-4">
            <li>
              Successfully designed and developed a visually appealing Flutter app
              with a seamless user experience.
            </li>
            <li>
              Integrated external APIs to fetch and display dynamic content such
              as user profiles, product listings, or real-time updates.
            </li>
            <li>
              Optimized app performance and responsiveness through efficient UI
              rendering and data fetching strategies
            </li>
          </ul>
        </ExpCard>
      </div>
    </section>
    <RouterLink :to="{ name: 'projects' }" class="btn-alt text-nowrap text-center space-x-2">
      <span>See Projects</span>
      <i class="fa fa-arrow-right"></i>
    </RouterLink>
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import ServicesCard from "@/components/cards/ServicesCard.vue";
import ExpCard from "@/components/cards/ExpCard.vue";
import PlainCard from "@/components/cards/PlainCard.vue";

const download = (filename) => {
  // Assuming your development server or production server serves files from the `public` directory at the root
  const filePath = `${window.location.origin}/assets/${filename}`;

  // Create a temporary link element and trigger the download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = filename.split('/').pop(); // Ensure we get just the file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const nodejs = new URL('@/assets/svgs/nodejs.svg', import.meta.url).href
const github = new URL('@/assets/svgs/github.svg', import.meta.url).href
const git = new URL('@/assets/svgs/git.svg', import.meta.url).href
const docker = new URL('@/assets/svgs/docker.svg', import.meta.url).href
const tailwindcss = new URL('@/assets/svgs/icons8-tailwindcss-48.svg', import.meta.url).href
const flutter = new URL('@/assets/svgs/icons8-flutter-50.svg', import.meta.url).href

</script>

<style>
#experience ul {
  margin-left: -4px;
}

#experience li {
  padding-left: 4px;
}

/*
  .exp-cards{
    display: flex;
    flex-wrap: wrap;
  }
*/
.exp-cards #exp-card {
  max-width: 350px;
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.services_cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

/* .cert-slider-cont{
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: auto;
  }

  .cert-slider{
    display: flex;
    gap: 1rem;
  }

  .certificate{
    width: 200px;
    height: 200px;
    background: var(--dark);
    border-radius: 10px;
    overflow: hidden;
  }
*/

.certificates-display {
  display: flex;
  align-items: center;
  justify-content: center;
}

.certificates-display img {
  width: 100%;
  height: 100%;
  max-width: 400px;
  object-fit: cover;
}
</style>
