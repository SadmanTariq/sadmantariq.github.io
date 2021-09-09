<script setup>
import Title from './components/Title.vue';
import Section from './components/Section.vue';
import GithubLink from './components/GithubLink.vue';
</script>

<template>
<GithubLink href="https://github.com/sadmantariq/sadmantariq.github.io/" />
<Title />
<div class="lg:max-w-5xl md:max-w-3xl md:mx-auto">
  <Section title="KoalaSDevs" href="https://koalasdevs.itch.io/">
    <div class="p-3 flex flex-wrap sm:flex-nowrap">
      <img
        src="./assets/KoalaS_512.png" alt="KoalaSDevs logo"
        class="border-8 border-light w-1/2 my-4 mx-auto rounded-xl p-2
               sm:w-24 sm:h-24 sm:m-2"
      >
      <div>
        This is the team that me and my friends formed. We develop games and participate in game jams.
        <br>
        Our core team members:
        <ul class="list-disc list-inside ml-2">
          <li>Me, as the team leader and lead programmer</li>
          <li>Rikth Humayun, game and level designer</li>
          <li><a href="https://github.com/masrur-mmrs/">Masrur Sakib</a>, UI designer</li>
          <li>Tahmid Abrar, artist</li>
          <li>Tashfin Ruaid, composer</li>
        </ul>
      </div>
    </div>
    <Section light-bg title="Our games">
      <div class="p-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eaque ullam reprehenderit deleniti ad cumque est fuga, eos, enim qui optio iste dolorem eum sed totam laudantium? Facilis doloribus necessitatibus ipsa quo. Beatae recusandae, maxime commodi aspernatur, cumque praesentium temporibus, soluta quos ducimus suscipit aliquid tenetur quidem tempore quisquam repudiandae?
      </div>
    </Section>
  </Section>
</div>
</template>
