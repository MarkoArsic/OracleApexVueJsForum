<template>
  <div class="message-box">
    <div class="avatar">
      <div class="avatar-container">MA</div>
    </div>

    <div class="content-data">
      <div class="content-header">
        <div class="title">
          <h3>{{message.title}}</h3><h5>{{message.topic}}</h5>
        </div>
        <div class="name-date-box"><p>{{message.author}}</p><p>{{message.date}}</p></div>
      </div>
      <div class="content-replies">
        <p>Број одговора:</p>
        <p>{{message.replies}}</p>
      </div>
      <div class="content-text">
        <p>{{message.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {

    };
  }
};
</script>
<style lang="scss" scoped>
.message-box {
  background-color: #fff;
  border: thin solid #e0e0e0;
  border-radius: 0.25rem;
  display: flex;
  margin-bottom: 1rem;
  padding: 0.75rem;
  position: relative;
  cursor: pointer;
  &.avatar {
    margin-right: 0.5rem;
    &.avatar-container {
      height: 2.5rem;
      width: 2.5rem;
      font-size: 1.75rem;
      line-height: 2.5rem;
      font-weight: 300;
      text-align: center;
      border-radius: 100%;
      color: #fff;
      background-color: blueviolet;
    }
  }
}
.content-data {
  width: calc(100% - 3rem);
  &.content-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &.title {
      font-weight: 500;
      font-size: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5rem;
      height: 1.5rem;
    }
    &.name-date-box {
      color: #bdbdbd;
      line-height: 1.5rem;
    }
  }
  &.content-replies {
    display: flex;
    justify-content: space-between;
  }
  &.content-text {
    margin-top: 0.5rem;
    word-break: break-all;
  }
}
</style>