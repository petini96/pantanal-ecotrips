<template>
    <q-card class="intro-card" flat bordered>
        <q-card-section>
            <div class="row items-center no-wrap q-mb-sm">
                <q-icon :name="about_icon" color="primary" size="2rem" class="q-mr-md" />
                <div class="text-h5 card-title">{{ tour_details_about_title }}</div>
            </div>
            
            <p class="text-body1 card-desc">
                {{ tour_desc }}
            </p>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
interface AboutTourSectionProps {
    tour_details_about_title: string;
    tour_desc: string;
    about_icon?: string;
}

withDefaults(defineProps<AboutTourSectionProps>(), {
    about_icon: 'mdi-information-outline'
})
</script>

<style scoped lang="scss">
.intro-card {
    border-radius: 16px;
    border: 1px solid #e0e0e0;
    box-shadow: none;
    background-color: #ffffff;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    }
}

.card-title {
    font-weight: 600;
    color: #1D1D1D;
}

.card-desc {
    color: #555;
    line-height: 1.7;
    margin-top: 16px;
}
</style>