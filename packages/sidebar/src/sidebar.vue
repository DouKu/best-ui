<template>
  <div :class="['bt-sidebar', {'is-hide': !innerExpand}]">
    <div class="bt-sidebar__header">
      <p v-if="title" class="bt-sidebar__header-title">{{title}}</p>
      <slot v-else-if="$slots.header" name="header"></slot>
      <div class="bt-sidebar__header-switch">
        <i class="mbri-menu" @click="innerExpand = !innerExpand"></i>
      </div>
    </div>
    <div class="bt-sidebar__menu">
      <ul class="bt-sidebar__menu-list">
        <li v-for="(menu, index) in menus" :key="index"
          @click="handleMenuClick(menu, index, menus)">
          <i v-if="menu.icon" :class="menu.icon"></i>
          <span>{{menu.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtSidebar',
  props: {
    title: {
      type: String
    },
    menus: {
      type: Array,
      default () {
        return []
      }
    },
    clickHandler: {
      type: Function,
      default () {
        return () => {}
      }
    },
    expand: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  watch: {
    expand: {
      handler (val) {
        this.innerExpand = val
      },
      immediate: true
    }
  },
  data () {
    return {
      innerExpand: true
    }
  },
  methods: {
    handleMenuClick () {
      if (this.clickHandler) {
        this.clickHandler(...arguments)
      }
      this.$emit('menu-click', ...arguments)
    }
  }
}
</script>