

<template>
  <div>
    <center>
      <h3>Multimedia Display</h3>
    </center>

    <!-- Three images side by side -->
    <div class="image-container">
      <img :src="imageUrls[0]" alt="Image 1" class="multimedia-image" />
      <img :src="imageUrls[1]" alt="Image 2" class="multimedia-image"  />
      <img :src="imageUrls[2]" alt="Image 3" class="multimedia-image" />
    </div>

    <!-- First video on the left, paragraph on the right -->
    <div class="video-paragraph-container">
      <div class="video">
        <iframe width="100%" height="200" :src="videoUrls[0]" title="Video 1" @error="handleVideoError(0)"></iframe>
        <p v-if="videoLoadError[0]">Video failed to load.</p>
      </div>
      <div class="paragraph">
        <p>This is some text related to the first video.</p>
      </div>
    </div>

    <!-- Second video on the right, paragraph on the left -->
    <div class="video-paragraph-container">
      <div class="paragraph">
        <p>This is some text related to the second video.</p>
      </div>
      <div class="video">
        <iframe width="100%" height="200" :src="videoUrls[1]" title="Video 2" @error="handleVideoError(1)"></iframe>
        <p v-if="videoLoadError[1]">Video failed to load.</p>
      </div>
    </div>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848031.9623371948!2d35.84741004999999!3d33.8735578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17028422aaad%3A0xcc7d34096c00f970!2sLebanon!5e0!3m2!1sen!2slb!4v1697291983812!5m2!1sen!2slb" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</template>

<script>
export default {
  data() {
    return {
      imageUrls: [
        'https://imgs.search.brave.com/ubEgpQeGtaMXab92Ju16fqToaH7uTJcKaweirUiRskY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA',
        'https://imgs.search.brave.com/d4lNzcVO6rsDvFANcfm_ncKZhiLdxvnGskDPIuhL9qI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDQ3MDM2ODY5ODEt/YTNhYmJjNGQ0ZmUz/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4T0h4/OGNHbGpkSFZ5Wlh4/bGJud3dmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA',
        'https://imgs.search.brave.com/xAdr9kr4JQzT9QWVEjaKPE9fAh-wfwIY_mZfk0iYGlc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTA2/Nzg3MzIvcGV4ZWxz/LXBob3RvLTEwNjc4/NzMyLmpwZWc_YXV0/bz1jb21wcmVzcyZj/cz10aW55c3JnYiZk/cHI9MSZ3PTUwMA',
      ],
      videoUrls: [
        'https://www.youtube.com/embed/rNVpFXuAXIA',
        'https://www.youtube.com/embed/Wmdkhmuh-zU',
      ],
      videoLoadError: [false, false],
    };
  },
  methods: {
    handleVideoError(index) {
      this.videoLoadError[index] = true;
    },
  },
};
</script>

<style>
.image-container {
  display: flex;
}

.multimedia-image {
  max-width: 33.3%; /* Each image takes one-third of the container */
  height: 3%;
  margin-bottom: 1rem;
}
img{
  max-width: 10%;
}

.video-paragraph-container {
  display: flex;
  margin-bottom: 1rem;
}

.video {
  flex: 1; /* Each video takes half of the container */
  margin-right: 20px; /* Add some margin between video and paragraph */
}

.paragraph {
  flex: 1; /* Each paragraph takes half of the container */
}

</style>
