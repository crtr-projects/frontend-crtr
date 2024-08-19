<template>
  <div class="galeria-container">
    <div v-for="(imagem, index) in imagens" :key="index" class="image-card">
      <img :src="imagem.resolvedImage" :alt="imagem.title" class="image" />
      <p class="image-title">{{ imagem.title }}</p>
      <p class="image-description">{{ imagem.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  props: {
    imagens: {
      type: Array,
      required: true
    }
  }
};
</script>

<style src="../components/Galeria.css" scoped></style>
