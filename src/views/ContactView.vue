<template>
  <div
    id="contact"
    class="w-full flex flex-col space-y-8 items-center justify-center"
  >
    <PageHeader title="Let's Connect" />
    <p class="text-white md:self-start">
      Interested in collaborating on a project or just want to say hello? Feel
      free to reach out below 👇
    </p>
    <div class="contact_cards">
      <div class="contact_card flex space-x-2">
        <span><i class="fa-thin fa-at fa-2x text-white"></i></span>
        <div class="flex flex-col space-y-2">
          <span class="text-gray-300 font-semibold text-xl">Social Profiles</span>
          <div
            class="text-lg text-white flex items-center justify-center gap-6 w-full my-4"
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
        </div>
      </div>
      <div class="contact_card flex space-x-2">
        <span><i class="fa-thin fa-map-marker-alt fa-2x text-white"></i></span>
        <div class="flex flex-col space-y-2">
          <span class="text-gray-300 font-semibold text-xl">Address</span>
          <span class="text-white text-md">Imafon Igbatoro Rd, Akure</span>
        </div>
      </div>
      <div class="contact_card flex space-x-2">
        <span><i class="fa-thin fa-phone fa-2x text-white"></i></span>
        <div class="flex flex-col space-y-2">
          <span class="text-gray-300 font-semibold text-xl">Phone</span>
          <span class="text-white text-md"
            ><a href="tel:+2347038055097">+2347038055097</a></span
          >
        </div>
      </div> 
      <div class="contact_card flex space-x-2">
        <span><i class="fa-thin fa-envelope fa-2x text-white"></i></span>
        <div class="flex flex-col space-y-2">
          <span class="text-gray-300 font-semibold text-xl">Email</span>
          <span class="text-white text-md">
            <a href="mailto:joshuaademax@gmail.com">joshuaademax@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
    <!-- <div
      id="page_header"
      class="relative self-center text-white text-xl py-4 flex items-center justify-center"
    >
      <span class="absolute w-fit text-center text-nowrap bg-dark px-2"
        >Or drop your message here</span
      >
      <span class="line"></span>
    </div> -->
    <div class="contact-form">
      <form class="space-y-4" name="contact" method="POST" data-netlify="true">
        <div class="w-full flex flex-col justify-between space-y-4 md:space-y-0 md:flex-row md:gap-4">
          <div class="form-control flex-1">
            <input type="text" name="name" required />
            <span> Name </span>
          </div>
          <div class="form-control flex-1">
            <input type="email" name="email" required />
            <span> Email </span>
          </div>
        </div>
        <div class="form-control">
          <input type="text" name="subject" required />
          <span> Subject </span>
        </div>
        <div class="form-control">
          <textarea name="message" id="" rows="8" required></textarea>
          <span> Message </span>
        </div>
        <div class="form-control items-center">
          <button class="btn" type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template> 

<script setup>
  import PageHeader from "@/components/PageHeader.vue"
</script>

<style>
  #contact {
    width: 100%;
    padding: 10px 20px;
  }

  .line {
    width: 100%;
    height: 2px;
    background: var(--primary);
    /* box-shadow: 0 0 4px 1px var(--primary); */
  }

  #contact .contact_cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .contact_card {
    padding-bottom: 10px;
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid var(--primary);
    backdrop-filter: blur(5px);
  }

  .contact-form {
    align-self: flex-start;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 80px !important;
  }

  .contact-form button {
    margin: 0;
    width: 200px;
  }

  .form-control {
    display: flex;
    flex-direction: column;
  }

  .form-control input,
  .form-control textarea {
    background: none;
    border: 2px solid rgba(143, 92, 255, 0.4);
    padding: 10px;
    color: #fff;
    outline: none;
  }

  .form-control span {
    position: absolute;
    color: #888;
    pointer-events: none;
    padding: 10px;
    text-transform: uppercase;
    transition: 0.5s;
  }

  .form-control input:valid ~ span,
  .form-control input:focus ~ span,
  .form-control textarea:valid ~ span,
  .form-control textarea:focus ~ span {
    color: #fff;
    background: var(--primary);
    padding: 0 10px;
    font-size: 0.7rem;
    letter-spacing: 2px;
    transform: translateX(10px) translateY(-7px);
  }
</style>
