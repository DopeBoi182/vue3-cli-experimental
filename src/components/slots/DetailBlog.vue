<template>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="judul">
          <h2 class="modal-title">Perkenalan Diri</h2>
        </slot>
      </div>
      <div class="modal-body">
        <slot name="gambar">
          <img src="https://dummyimage.com/600x400/000/fff" style="width: 60%; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75)"/>
        </slot>
        <slot name="isi">
          <p style="margin-top:60px;">
            Lorem Ipsum Dolor Sit Amet
          </p>
        </slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "DetailBlog",
    props: {},
    data() {},
    methods: {},
    mounted() {}
  }
</script>