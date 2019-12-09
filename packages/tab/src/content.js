export default {
  name: 'BtTabContent',
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },

  render (h) {
    return (
      <div class="bt-tab__content">
      </div>
    )
  }
}
