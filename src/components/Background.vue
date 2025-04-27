<template>
  <div class="box">
    <img src="../assets/cover.jpg" alt="" class="bkg">
    <!-- <video class="bkg" autoplay muted loop>
      <source src="../assets/city.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video> -->
  </div>
</template>

<script>
export default {
  mounted(){
    document.querySelector('video').play();
  }
}
</script>

<style>
.box{
    width: 1920px;
    /* height: 1080px; */
}
.bkg{
    opacity: 0.5;
    top: 0;
    position: fixed;
    width: 100%; /* or any custom size */
    height: 100%; 
    object-fit: cover;
    z-index: -1;
    filter: drop-shadow(0 0 0.75rem #4444dd);
}
</style>