import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faTimes } from '@fortawesome/fontawesome-free-solid'
import VueYoutube from 'vue-youtube'
import { Modal } from './modal'
import './styles/videoModal.scss'

Vue.use(VueYoutube)

export const VideoModal = ({
  props: { videoId = ``, name = ``, buttonText = `` }
}) => (
  <Modal>
    {({ isOpen, OpenModal, ModalOverlay, ModalContent, CloseModal }) => (
      <div id="videoModal">
        <OpenModal class="openBtn">
          <FontAwesomeIcon icon={faPlay} size="1x" />
          {` ${buttonText}`}
        </OpenModal>
        <ModalOverlay>
          {isOpen ? (
            <ModalContent>
              <div class="header">
                <h1>{name}</h1>
                <CloseModal>
                  <FontAwesomeIcon icon={faTimes} size="1x" />
                </CloseModal>
              </div>
              <youtube videoId={videoId} />
            </ModalContent>
          ) : null}
        </ModalOverlay>
      </div>
    )}
  </Modal>
)
