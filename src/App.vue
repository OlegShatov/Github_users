<template>
  <div id="app">
    <h1>Github Users</h1>
    <hr />
    <div class="wrapper">
      <div class="header">
        <!-- <p>
          Search:
          <input type="text" v-model="login" placeholder="login" />
        </p> -->
      </div>
      <div class="sidebar">
        <ul class="sidebar-menu">
          <li>
            <router-link to="/">Users</router-link>
          </li>
          <li>
            <router-link to="/selected">Selected Users</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view v-bind:users="users" />
      </div>
      <div class="footer">Footer</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      users: [],
      selectedusers: []
    }
  },
  mounted() {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
.sidebar-menu {
  list-style: none;
}
.sidebar-menu a {
  text-decoration: none;
  outline: none;
  display: block;
  padding: 6px 0;
  letter-spacing: 1px;
  font-weight: 300;
  color: #444;
  transition: 0.3s linear;
}
.sidebar-menu a:hover {
  color: #b99d61;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

a:hover {
  cursor: pointer;
}
</style>
