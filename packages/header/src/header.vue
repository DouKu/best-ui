<template>
  <div class="bt-header">
    <div class="bt-header__right">
      <slot name="right"></slot>
    </div>
    <div class="bt-header__left">
      <slot name="left"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtHeader'
}
</script>
