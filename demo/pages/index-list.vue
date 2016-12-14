<template>
  <page>
    <div class="page-header">
      <h3>索引列表 <small>index-list</small></h3>
    </div>
    <div class="group group-index">
      <div class="group" v-for="item in alphabet" :index="item.initial">
        <div class="group-header">{{item.initial}}</div>
        <div class="list">
          <cell v-for="cell in item.cells" :title="cell"></cell>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
  import { CONTACT } from '../data'

  // const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    data() {
      return {
        alphabet: []
      };
    },

    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = CONTACT.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>
