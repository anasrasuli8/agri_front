<template>
  <div
    class="image-input border border-gray-200 rounded"
    :style="{ 'background-image': `url(${imageData})` }"
    @click="chooseImage"
  >
    <span
      v-if="!imageData"
      class="placeholder"
    >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="#999999"/>
            <path d="M27.9999 32.6667C30.5772 32.6667 32.6666 30.5773 32.6666 28C32.6666 25.4227 30.5772 23.3333 27.9999 23.3333C25.4226 23.3333 23.3333 25.4227 23.3333 28C23.3333 30.5773 25.4226 32.6667 27.9999 32.6667Z" fill="white"/>
            <path d="M23.6251 13.4167L20.9563 16.3333H16.3334C14.7292 16.3333 13.4167 17.6458 13.4167 19.25V36.75C13.4167 38.3542 14.7292 39.6667 16.3334 39.6667H39.6667C41.2709 39.6667 42.5834 38.3542 42.5834 36.75V19.25C42.5834 17.6458 41.2709 16.3333 39.6667 16.3333H35.0438L32.3751 13.4167H23.6251ZM28.0001 35.2917C23.9751 35.2917 20.7084 32.025 20.7084 28C20.7084 23.975 23.9751 20.7083 28.0001 20.7083C32.0251 20.7083 35.2917 23.975 35.2917 28C35.2917 32.025 32.0251 35.2917 28.0001 35.2917Z" fill="white"/>
        </svg>

    </span>
    <input
      class="file-input"
      ref="fileInput"
      type="file"
      @input="onSelectFile"
    >
  </div>
</template>

<script>
export default {
 data () {
    return {
      imageData: null
    }
  },

  methods: {
    chooseImage () {
      this.$refs.fileInput.click()
    },

    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])

        this.$emit('update:modelValue', files[0])
      }
    }
  }
}
</script>

<style>
.image-input{
  display: block;
  width: 100%;
  height: 250px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
}
.placeholder:hover{
  background: #f3f4f6;
}
.file-input{
  display: none
}
</style>