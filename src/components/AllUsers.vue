<template>
  <div>
    <h3>All users</h3>
    <table>
      <tr>
        <th></th>
        <th>ID</th>
        <th>Login</th>
        <th>URL</th>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>
          <input type="checkbox" v-bind:value="user" 
          v-on:change="saveToLocalStorage(user)"/>
        </td>
        <td>{{user.id}}</td>
        <td>{{user.login}}</td>
        <td>{{user.html_url}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["users"],
  data() {
    return {
      selectedusers: []
    }
  },
  mounted() {
    console.log('AllUsers mounted')
  },

  methods: {
    saveToLocalStorage(user) {
      console.log(user);
      this.selectedusers = JSON.parse(localStorage.getItem('selectedusers')) || [];
      this.selectedusers = this.selectedusers.concat(user);
      console.log("this.selectedusers", this.selectedusers);
      localStorage.setItem('selectedusers', JSON.stringify(this.selectedusers));
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