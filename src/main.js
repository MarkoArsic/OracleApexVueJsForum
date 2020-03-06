import Vue from 'vue'
import App from './App.vue'
import VueQuillEditor from 'vue-quill-editor'
import axios from 'axios';
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
Vue.prototype.$http = axios

Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
