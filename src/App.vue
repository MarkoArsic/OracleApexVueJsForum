<template>
  <div id="app">
    <div class="main-container">
      <div class="header">
        <!-- <input type="search" name="" id="search" placeholder="Претрага"> -->
      </div>
      <div class="threads-nav">
        <button>Нова тема</button>

        <div class="scroll">
          <h2>Теме</h2>
          <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asdas</li>
            <li>asdas</li>
            <li>asd</li>
            <li>asd</li>
            <li>asdas</li>
            <li>asdas</li>
            <li>asd</li>
            <li>asd</li>
            <li>asdas</li>
            <li>asdas</li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="messages">
          <messages v-for="(message, index) in data" :key="index" :message="message"></messages>
        </div>
          <hr class="solid">
        <div class="new-message">
          <newMessage></newMessage>
        </div>
      </div>
      <div class="footer"></div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import data from "@/mixins/data.js"
import HelloWorld from "./components/HelloWorld.vue";
import newMessage from "./components/newMessage.vue";
import messages from "./components/messageBox.vue";
export default {
    mixins: [data],
  name: "App",
  components: {
    HelloWorld,
    newMessage,
    messages
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", sans-serif;
}
html,
body {
  height: 100%;
  width: 100vw;
  padding: 1rem;
  background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);
}
li {
  list-style-type: none;
}
hr.solid {
  border-top: 3px solid #bbb;
  margin: 10px 0;
}
.main-container {
  height: calc(100% - 50px);
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto; /* auto */
  grid-template-areas:
    "header header "
    "threads-nav content "
    "threads-nav content "
    "footer footer ";
  grid-column-gap: 3rem;
  grid-row-gap: 1rem;
  justify-content: stretch;
  justify-items: stretch;
}
.header {
  height: 50px;
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d3d3d3;
  border-radius: 0.25rem;
  padding: 3rem 1rem;

  /* justify-self: center; */
}
.threads-nav {
  background: lightcyan;
  grid-area: threads-nav;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  padding: 1rem 3rem;
  border: 1px solid #d3d3d3;
  border-radius: 0.25rem;
  /* justify-self: end; */
  &.scroll {
    overflow-y: auto;
  }
}
.content {
  // background: ;
  border: 1px solid black;
  padding: 1.5rem;
  border-radius: .25rem;
  grid-area: content;
  /* align-self: end; */
  &.messages {
    overflow:auto;
    top: 0;
  }
  &.new-message {
    position: fixed;
    bottom: 0;
  }
}
.side-bar {
  background: chocolate;
  grid-area: right-bar;
  /* align-self: end; */
}
.footer {
  background: #d3d3d3;
  height: 5rem;
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}
button {
  border: 1.5px solid #808080;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.8rem;
  cursor: pointer;
  letter-spacing: 0.25px;
  background: none;
  color: #808080;
  &:hover {
    border-color: #42a7ff;
    color: #42a7ff;
  }
  &:active {
    border: 3px solid #42a7ff;
    color: #42a7ff;
  }
}
#search {
  border: 1.5px solid #808080;
  border-radius: 0.25rem;
  text-align: left;
  font-size: 1rem;
  font-weight: 200;
  padding: 0.8rem;
  color: #b1b0b0;
}
</style>
