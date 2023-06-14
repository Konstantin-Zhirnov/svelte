<script>
  import { onDestroy, onMount } from 'svelte'

  export let id = ''

  let imageInterval
  onMount(() => {
    function LoadImage()
    {
      let image = document.getElementById(`image-${id}`);
      image.src = "https://karsi.zp.ua/wp-content/uploads/2020/07/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B-500x500-px-4.png";
      image.style.visibility = 'hidden';
    }
    function CheckIsLoaded() {
      let image = document.getElementById(`image-${id}`);
      if (image.complete) {
        image.style.visibility = 'visible';
        clearInterval(imageInterval);
      }
    }

    function onStartLiveBtnClick() {
      LoadImage();
      imageInterval = setInterval(CheckIsLoaded, 0);
    }
    onStartLiveBtnClick()
  });

  onDestroy(() => {
    clearInterval(imageInterval);
  });
</script>

<img id={`image-${id}`} alt="coffee"/>