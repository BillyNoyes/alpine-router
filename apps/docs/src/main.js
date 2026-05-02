import Alpine from 'alpinejs'
import AlpineComponents, { registerComponent } from 'alpine-components'
import Accordion from './components/Accordion.js'
import Counter from './components/Counter.js'
import Dropdown from './components/Dropdown.js'
import Modal from './components/Modal.js'

registerComponent('Accordion', Accordion)
registerComponent('Counter', Counter)
registerComponent('Dropdown', Dropdown)
registerComponent('Modal', Modal)

Alpine.plugin(AlpineComponents)
Alpine.start()
