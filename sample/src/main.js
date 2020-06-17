<<<<<<< Updated upstream
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
=======
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

function showSum() {
  var num1 = 1;
  var num2 = 2;
  var sum = num1 + num2;
  alert(sum);
}
>>>>>>> Stashed changes
