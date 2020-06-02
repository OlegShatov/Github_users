<template>
  <div>
    <h3>Selected users</h3>
    <table>
      <tr>
        <th></th>
        <th>ID</th>
        <th>Login</th>
        <th>URL</th>
      </tr>
      <tr v-for="user of selectedusers" v-bind:key="user.id">
        <td>
          <input type="checkbox" v-bind:value="user" checked=true
          v-on:change="deleteUser(user)"/>
        </td>
        <td>{{user.id}}</td>
        <td>{{user.login}}</td>
        <td>{{user.html_url}}</td>
      </tr>
    </table>

    <button v-on:click="deleteAllSelected">Delete users list</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedusers: []
    }
  },

  mounted() {
    console.log('SelectedUsers mounted!');
    if (localStorage.getItem('selectedusers')) {
      this.selectedusers = JSON.parse(localStorage.getItem('selectedusers'));
      console.log("selectedusers", this.selectedusers);
    }
  },

  methods: {
    deleteAllSelected() {
      localStorage.removeItem('selectedusers');
      this.selectedusers.splice(0, this.selectedusers.length);
    },
    deleteUser(user) {
      var index = this.selectedusers.indexOf(user);
      if (index > -1) {
        this.selectedusers.splice(index, 1);
        localStorage.setItem('selectedusers', JSON.stringify(this.selectedusers));
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
table {
  width: 90%;
}
</style>
