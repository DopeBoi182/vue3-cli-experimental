<template >
  <div class="single-blog" style="border: 1px solid #333; margin: 5px; border-radius: 10px">
    <div class="row" style="margin: 2px; min-height: 300px">
      <div class="col-md-12" style="margin-top: 20px">
        <img
          src="https://dummyimage.com/600x400/000/fff"
          style="width: 100%; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75)"
        />
      </div>
      <div class="col-md-12">
        <h4>{{ judul }}</h4>
        <p style="text-align: justify">{{ isi }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
          <a style="margin-bottom: 20px" class="btn btn-default" href="#">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    judul: String,
    isi: String,
  },
};
</script>
