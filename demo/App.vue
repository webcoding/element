<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <v-backtop></v-backtop>
  </div>
</template>

<script>
//不能用已有标签，比如 header
import vHeader from './components/vHeader.vue'
import vBacktop from './components/vBacktop.vue'
export default {
  components: {
    vHeader,
    vBacktop,
  }
}
</script>

<style lang="sass">
@import "../src/_style/theme/default/smacss";

body{
  position: relative;
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  padding-top: 55px;
  color: #34495e;
}

a{
  color: #34495e;
  text-decoration: none;
}

.header{
  background-color: #ff6600;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
  .inner{
    max-width: 800px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;
  }

  a{
    color: rgba(255, 255, 255, .8);
    line-height: 24px;
    transition: color .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: .075em;
    margin-right: 1.8em;
    &:hover{
      color: #fff;
    }
    &.router-link-active{
      color: #fff;
      font-weight: 400;
    }
    &:nth-child(6){
      margin-right: 0;
    }
  }

  .github{
    color: #fff;
    font-size: .9em;
    margin: 0;
    float: right;
  }

}


.logo{
  width: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

.view{
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.fade-enter-active,
.fade-leave-active{
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active{
  opacity: 0;
}

.slide-left-enter,
.slide-right-leave-active{
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter{
  opacity: 0;
  transform: translate(-30px, 0);
}

.item-move,
.item-enter-active,
.item-leave-active{
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.item-enter{
  opacity: 0;
  transform: translate(30px, 0);
}

.item-leave-active{
  position: absolute;
  opacity: 0;
  transform: translate(30px, 0);
}

@media (max-width: 860px){
  .header .inner{
    padding: 15px 30px;
  }

}


@media (max-width: 600px){
  body{
    font-size: 14px;
  }

  .header{
    .inner{
      padding: 15px;
    }

    a{
      margin-right: 1em;
    }

    .github{
      display: none;
    }

  }

}

</style>
