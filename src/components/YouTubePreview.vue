<template>
    <div class="video-preview">
      <div class="video-header">
        <h3>Assista agora e fique por dentro das melhores emoções!</h3>
      </div>
      <iframe 
        width="100%" 
        height="auto" 
        src="https://www.youtube.com/embed/BgfDHQw79kQ" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YouTubePreview',
    computed: {
      videoUrl() {
        return `https://www.youtube.com/watch?v=BgfDHQw79kQ`;
      },
    },
  };
  </script>
  
  <style src="./YouTubePreview.css"></style>
  