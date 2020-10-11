import Vue from 'vue'
import App from './App'
import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"

Vue.config.productionTip = false

App.mpType = 'app'

export default {
    components: {uniSwiperDot,uniDrawer,uniGrid,uniGridItem}
}
const app = new Vue({
	...App
})
app.$mount()
