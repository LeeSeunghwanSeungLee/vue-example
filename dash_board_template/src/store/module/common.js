// =======  index.vue ========

// <template><!-- ... --></template>
// <script src='index.js'></script>
// <style scoped>/* ... */</style>




// ======= index.js ======== .vue에서 src로 연결해 놓았음

export default {
  data() {
    return {
      //...
    };
  }
};

// ======== something.js ========= 

import stuff from '../stuff/index.js';

export default {
  data() {
    return ...stuff.data();
  }
};


//https://joshua1988.github.io/vue-camp/advanced/navigation-guard.html#%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98-%EC%A0%84%EC%97%AD-%EA%B0%80%EB%93%9C
