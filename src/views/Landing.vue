<script setup lang="ts">
import FeaturesWidget from '@/components/landing/FeaturesWidget.vue';
import FooterWidget from '@/components/landing/FooterWidget.vue';
import HeroWidget from '@/components/landing/HeroWidget.vue';
import HighlightsWidget from '@/components/landing/HighlightsWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
</script>

<template>
    <div class="bg-[#edeae4]">
        <div id="home" class="landing-wrapper">
            <TopbarWidget />
            <HeroWidget />
            <FeaturesWidget />
            <HighlightsWidget />
            <FooterWidget />
        </div>
    </div>
</template>