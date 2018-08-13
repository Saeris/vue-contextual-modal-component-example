import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import { Modal } from './modal'
import { VideoModal } from './videoModal'
import './styles/index.scss'

Vue.config.productionTip = false

const App = () => (
  <main>
    <header>
      <h1>Contextual Modal Component Example</h1>
    </header>
    <section class="controls">
      <Modal>
        {({ isOpen, onOpen, onDialogClick, onClose }) => (
          <div id="example">
            <button type="button" onClick={onOpen} class="openBtn">
              Open Modal
            </button>

            <aside onClick={onClose} class={`modal ${isOpen ? `open` : ``}`}>
              {isOpen ? (
                <section onClick={onDialogClick} class="dialog">
                  <div class="header">
                    <h1>Example Modal</h1>
                    <button type="button" onClick={onClose}>
                      <FontAwesomeIcon icon={faTimes} size="1x" />
                    </button>
                  </div>
                  <div class="content">
                    <p>
                      This is an example of a Contextual Modal Component. It
                      uses the Function as Child Component pattern to hold the
                      internal state of a Modal (opened/closed), provide a
                      number of methods common to opening and closing a Modal,
                      and a number of pre-wired components to make things even
                      easier.
                    </p>
                    <p>
                      This approach has the advantage of that it encapsulates
                      all of the common functionality of a Modal without forcing
                      opinions on you about how that Modal should be structured
                      or styled. The pre-wired components that it provides you
                      are designed to be minimal and easily customizeable, so
                      that full-control is always in your hands.
                    </p>
                    <p>
                      You can use this component to create even simpler
                      abstractions, such as the Video Modal component shown
                      here. That component can contain all of the styling and
                      markup to display a YouTube video in a modal window, with
                      all of the properties set to a minimal set of attributes.
                      Then it can be dropped in anywhere in your application.
                    </p>
                    <p>
                      Best of all, it does not rely on any sort of top-level
                      application state! Components like this can be built
                      without extra dependencies like Redux!
                    </p>
                  </div>
                </section>
              ) : null}
            </aside>
          </div>
        )}
      </Modal>

      <VideoModal
        videoId="dZOaI_Fn5o4"
        name="BLADE RUNNER 2049 – Trailer 2"
        buttonText="Play Trailer"
      />
    </section>
  </main>
)

new Vue({
  el: '#app',
  render: h => h(App)
})
