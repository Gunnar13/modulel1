Vue.component('products-comp', {
    props: ['showed', 'addproduct'],
    template: ` <div class="card__wrap">

                    <div v-for="product of showed" :key='product.id_product' class="card">
                        <div class="card__img">
                            <img :src="product.img" alt="some img" class='product_img'>
                            <div class="card__cart">
                                <div class="add_too">
                                    <img src="img/cart.png" alt="">
                                    <button class="busket buy-btn" :id="product.id_product" @click='$emit("addproduct",product)'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class='card__text'>
                            <div>
                                <a href="#">
                                    <h4 class='prod_name'>{{product.product_name}}</h4>
                                </a>
                                <p>Known for her sculptural takes on traditional tailoring, Australian
                                    arbiter
                                    of cool Kym Ellery
                                    teams up with Moda Operandi.</p>
                                <span class='card__price product_price'>Стоимость:  {{product.price}} $</span>

                            </div>
                            
                        </div>
                    </div>
                </div>
`
})