import Vue from 'vue'
import Component from 'vue-class-component'
import './styles/modal.scss'

@Component({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
})
export class Modal extends Vue {
  open = this.isOpen

  onOpen() {
    console.log(`open!`)
    this.open = !this.open && true
  }

  onClose() {
    this.open = this.open && false
  }

  listenKeyboard(event) {
    if (event.key === `Escape` || event.keyCode === 27) this.onClose()
  }

  mounted() {
    window.addEventListener(`keydown`, this.listenKeyboard.bind(this), true)
  }

  beforeDestroy() {
    window.removeEventListener(`keydown`, this.listenKeyboard.bind(this), true)
  }

  onDialogClick(event) {
    event.stopPropagation()
  }

  render(h) {
    return this.$scopedSlots.default({
      isOpen: this.open,
      onOpen: this.onOpen,
      onClose: this.onClose,
      onDialogClick: this.onDialogClick,
      CloseModal: {
        functional: true,
        render: (h, { props, data, children }) => (
          <button type={`button`} onClick={this.onClose} {...props} {...data}>
            {children}
          </button>
        )
      },
      ModalContent: {
        functional: true,
        render: (h, { props, data, children }) => (
          <section
            onClick={this.onDialogClick}
            {...props}
            {...data}
            class={`${data && data.class ? `${data.class} ` : ``}dialog`}
          >
            {children}
          </section>
        )
      },
      ModalOverlay: {
        functional: true,
        render: (h, { props, data, children }) => (
          <aside
            onClick={this.onClose}
            {...props}
            {...data}
            class={`${data && data.class ? `${data.class} ` : ``}modal ${
              this.open ? `open` : ``
            }`}
          >
            {children}
          </aside>
        )
      },
      OpenModal: {
        functional: true,
        render: (h, { props, data, children, ...rest }) => (
          <button type={`button`} onClick={this.onOpen} {...props} {...data}>
            {children}
          </button>
        )
      }
    })
  }
}
