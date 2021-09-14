<script setup>
import Title from './components/Title.vue';
import Section from './components/Section.vue';
import GithubLink from './components/GithubLink.vue';
import Card from './components/Card.vue';
import restrainedThumbnail from './assets/games/restrained_logo.png';
import duskbearerThumbnail from './assets/games/duskbearer_logo.png';
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
      <div class="p-8 flex flex-col sm:flex-row justify-center content-start gap-5 bg-light px-14">
        <Card
          heading="Lost Emotions"
          image-src="https://img.itch.zone/aW1hZ2UvNzM5MzUxLzQxMTgzMzcucG5n/347x500/jE4A4b.png"
          href="https://koalasdevs.itch.io/lost-emotions"
        >
          Metroidvania platformer. <br>
          Made for <a href="https://itch.io/jam/pb-game-jam-5">PB Game Jam 5</a>.
        </Card>
        <Card
          heading="Restrained"
          :image-src="restrainedThumbnail"
          href="https://koalasdevs.itch.io/restrained"
        >
          Made for <a href="https://itch.io/jam/gmtk-2020">GMTK Game Jam 2020</a> under the theme "out of control".
        </Card>
        <Card
          heading="Duskbearer"
          :image-src="duskbearerThumbnail"
          href="https://koalasdevs.itch.io/duskbearer"
        >
          Retro action adventure game made for <a href="https://itch.io/jam/godot-wild-jam-22">Godot Wild Jam #22</a>.
        </Card>
      </div>
    </Section>
  </Section>
</div>
</template>
