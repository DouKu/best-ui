<template>
  <div class="bt-tab">
    <div class="hidden-tabs">
      <slot></slot>
    </div>
    <ul class="bt-tab__header">
      <li v-for="(tab, index) in tabs" :key="index">{{tab.label}}</li>
    </ul>
    <tab-content></tab-content>
  </div>
</template>

<script>
import TabContent from './content'

export default {
  name: 'BtTab',

  components: {
    TabContent
  },

  props: {
    value: {
      required: true
    }
  },

  data () {
    return {
      tabs: []
    }
  },

  mounted () {
    this.setTabs()
  },

  methods: {
    setTabs () {
      if (!this.$slots.default) {
        return
      }
      const defaultSlot = this.$slots.default
      this.tabs = defaultSlot.filter(({ componentInstance }) => componentInstance).map(({ componentInstance }) => {
        return componentInstance
      })
    }
  }
}
</script>
