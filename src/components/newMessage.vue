<template>
  <div class="new-message-container">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
    <div></div>
  </div>
</template>
<script>
//import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
//import 'quill/dist/quill.bubble.css'
import { quillEditor } from "vue-quill-editor";
//import { someModule } from '../yourModulePath/someQuillModule.js'
//Quill.register('modules/someModule', someModule)

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: "",
      editorOption: {
          placeholder: 'Унесите текст поруке...',
          clean: true,
          modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                //[{ 'header': [ 2, 3, 4, 5, 6, false] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'color': [] }, { 'background': [] }], 
                [{ 'font': [] }],
                [{ 'align': [] }]
            ]
  }
        
        /* quill options */
      }
    };
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  }
};
</script>
<style lang="scss" scoped>
.new-message-container{
    background: #ffffff;
}
// .modal-window {
//   position: fixed;
//   background-color: rgba(255, 255, 255, 0.25);
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 999;
//   visibility: hidden;
//   opacity: 0;
//   pointer-events: none;
//   transition: all 0.3s;
//   &:target {
//     visibility: visible;
//     opacity: 1;
//     pointer-events: auto;
//   }
//   & > div {
//     width: 400px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     padding: 2em;
//     background: #ffffff;
//   }
// }

</style>