Vue.component('header-comp', {
    props: ['cartitems', 'addproduct'],
    methods: {
        calculateQuantity() {
            let ttq = 0;
            let cart = this.$parent.cartGoods[1];
            cart.forEach(el => {
                ttq += el.quantity;
            })

            return ttq;
        }
    },
    template: ` <div class="head">
                    <header class="header">
                        <div class="head_content">
                            <div class="container header__wrap">
                                <div class="header_left">
                                <a class="header__logo" href="/">
                                <img src="img/logo.png" alt="">
                            </a>
                                    <search></search>
                                </div>
        
                                <div class="header_right">
                                    <div class="header__item">
                                        <img src="img/Forma3.png" alt="">
                                    </div>
                                    <div class="header__item">
                                        <img src="img/Forma2.png" alt="">
                                    </div>
                                    <div class="header__item">

                                        
                                        <span class="count">{{calculateQuantity()}}</span>
                                        
                                        <cart :cartitems = 'cartitems' :addproduct='addproduct'></cart>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>`
})

Vue.component('search', {
    data() {
        return {
            searchLine: '',
        }
    },
    template: `
    <div class="find_content">
        
        <input class="inptfld" type="text" v-model='searchLine'  @input='$parent.$emit("filtergoods", searchLine)' placeholder='Найти товар...'>
        
        <img src="img/Forma1.png" alt="">
        
    </div>
    `
})

Vue.component('cart', {
    props: ['cartitems', 'addproduct'],
    data() {
        return {
            isVisibleCart: false,
        }
    },
    methods: {
        calculateCart() {
            let cartPrice = 0;
            let cart = this.$parent.$parent.cartGoods[1];
            cart.forEach(el => {
                cartPrice += el.quantity * el.price;
            })

            return cartPrice;
        },
        deleteItem(id) {
            let remove = this.$parent.$parent.remove;
            let cart = this.$parent.$parent.cartGoods[1];
            let find = cart.find(el => el.id_product === id);

            remove(`/api/cart/${id}`, find);
            //    const curElement = this.cartitems.find(el => el.id_product == id);
            //    if (curElement.count == 1) {
            //        this.cartitems.splice(this.cartitems.indexOf(curElement), 1);
            //    } else {
            //         --curElement.count;
            //    }
        }
    },
    template: `
    <div class="cart_content">
        <button class="btn-cart" type="button" @click='isVisibleCart = !isVisibleCart'>
        <img src="img/Forma4.png" alt="">
        </button>
        <div class="header_cart" v-if='isVisibleCart'>
            <p v-if='!cartitems[1].length'>Пусто</p>
            <div class='cart_item' v-for="item of cartitems[1]" :key='item.id_product'>
                
                    <img :src="item.img" alt="Some img" class='cart_img'>
                    <div class='cart_item_info'>
                        <h4 class='prod_name'>{{item.product_name}}</h4>
                        <p type='number' class='cart_item_count' @input='$parent.$emit("addproduct",item)'>Количество: {{ item.quantity }}</p>
                        <span class='card__price cart_item_price'>Стоимость: {{item.quantity * item.price}}</p>
                    </div>    
                
                <button @click='deleteItem(item.id_product)'>X</button>
            </div>
            <p v-if='cartitems[1].length' class='card__price'>Общая цена: {{calculateCart()}}</p>
        </div>
    </div>
    `
})
