// projects data used to render project cards dynamically
const projects = [
  {
    id: 1,
    title: 'Optrack',
    description:
      'Optrack is a platform where users can both find opportunities(grants, jobs, internships...) and also contribute to the platform by simply pasting the a link to an opportunity and the platrofm handles the hurdles of extracting the data and storing it in the database',
    image: new URL('../assets/images/optrack.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'Node.js/Express', class: 'border-yellow-600 text-yellow-600' },
      { name: 'Gemini Ai', class: 'border-purple-600 text-purple-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://optrack.pilotai.online',
    siteName: 'Optrack',
  },
  {
    id: 2,
    title: 'Pilot Ai',
    description:
      "Pilot Ai is a Ai assistant that aims to closely interract with the user and understand gain context of by\n            reading the user's screen to provide better answers and solutions particular to that user",
    image: new URL('../assets/images/pilot_ai.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'Gemini Ai', class: 'border-purple-600 text-purple-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://pilotai.online',
    siteName: 'Pilot Ai',
  },
  {
    id: 3,
    title: 'LiveTrack',
    description:
      'LiveTrack is an app that aims to improve order tracking experience between users and dispatch riders by providing live location feedback',
    image: new URL('../assets/images/livetrack.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'Node.js/Express', class: 'border-yellow-600 text-yellow-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://live-tracking-virid.vercel.app',
    siteName: 'LiveTrack',
  },
  {
    id: 4,
    title: 'Travella More',
    description: 'An extension of travella for businesses',
    image: new URL('../assets/images/travella_more.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'Node.js/Express', class: 'border-yellow-600 text-yellow-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://travella.io/more',
    siteName: 'Travella More',
  },
  {
    id: 5,
    title: 'Travella',
    description:
      'Travella is a decentralized logistics platform that aims to reduce the cost on interstate logistics',
    image: new URL('../assets/images/travella.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://travella.io',
    siteName: 'Travella',
  },
  {
    id: 6,
    title: 'Cowrite',
    description:
      'A blog fullstack blog website like medium that lets users not only create posts and make comments on posts, but also lets users make contributions to posts',
    image: new URL('../assets/images/cowrite-demo.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'Laravel', class: 'border-red-600 text-red-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://cowrite.africa',
    siteName: 'Cowrite',
  },
  {
    id: 7,
    title: 'UEye',
    description:
      'A browser extension that analyses UIs and gives suggestions for improvement. It also conducts SEO audits on pages and can double for taking screenshots',
    image: new URL('../assets/images/ueye.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'Gemini Ai', class: 'border-purple-600 text-purple-600' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://ueye-download.netlify.app',
    siteName: 'UEye',
  },
  {
    id: 8,
    title: 'Anythingfood',
    description: 'A site where you can call your favourite restaurant in town and order food',
    image: new URL('../assets/images/anythingfood.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://anythingfood.netlify.app',
    siteName: 'Anythingfood',
  },
  {
    id: 9,
    title: 'StudyCraft Ai',
    description:
      'A mobile application built with flutter and gemini ai that generates study materials from given topics',
    image: new URL('../assets/images/studycraft.png', import.meta.url).href,
    tags: [
      { name: 'Flutter', class: 'border-blue-600 text-blue-600' },
      { name: 'Gemini Ai', class: 'border-purple-600 text-purple-600' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: '#',
    siteName: 'StudyCraft Ai',
  },
  {
    id: 10,
    title: 'Dominion Word And Prayer Chapel',
    description:
      'A church site that helps bring content closer to its users no matter the location',
    image: new URL('../assets/images/dwpcng.png', import.meta.url).href,
    tags: [
      { name: 'Vue.js', class: 'border-green-600 text-green-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
      { name: 'Firebase', class: 'border-yellow-600 text-yellow-600' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: 'https://dwpcng.netlify.app',
    siteName: 'DWPCNG',
  },
  {
    id: 11,
    title: 'Laracast Blog',
    description: 'Fullstack blog built on laravel and TailwindCSS',
    image: new URL('../assets/images/laracast_mobile.png', import.meta.url).href,
    tags: [
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
      { name: 'Laravel', class: 'border-red-600 text-red-600' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: '#',
    siteName: 'Laracast',
  },
  {
    id: 12,
    title: 'Wypa',
    description:
      'An app where its users can either request for cleaning service from cleaners around or apply to be a cleaner and earn extra income',
    image: new URL('../assets/images/wypa.png', import.meta.url).href,
    tags: [
      { name: 'Flutter', class: 'border-blue-600 text-blue-600' },
      { name: 'Laravel', class: 'border-red-600 text-red-600' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: '#',
    siteName: 'Wypa',
  },
  {
    id: 13,
    title: 'Trapezium',
    description: 'A full stack and fully functional job listing',
    image: new URL('../assets/images/trapezium_mobile.png', import.meta.url).href,
    tags: [
      { name: 'Laravel', class: 'border-red-600 text-red-600' },
      { name: 'TailwindCSS', class: 'border-blue-400 text-blue-400' },
    ],
    github: 'https://github.com/AmazingJoMax',
    siteUrl: '#',
    siteName: 'Trapezium',
  }
]

export default projects
