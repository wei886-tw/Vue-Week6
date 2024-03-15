<template>
  <div class="modal" tabindex="-1" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">測試的產品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6" :cartItem="cartItem">
              <img :src="cartItem.imageUrl" alt="" style="width: 200px" />
            </div>
            <div class="col-6">
              <p>商品描述：{{ cartItem.description }}</p>
              <p>商品內容：{{ cartItem.content }}</p>
              <del>原價 {{ cartItem.origin_price }} 元</del>
              <p>
                <strong>現在只要 {{ cartItem.price }} 元</strong>
              </p>
              <div class="d-flex align-items-end">
                <div class="input-group">
                  <input type="number" class="form-control w-50" v-model.number="qty" min="1" />
                  <button class="btn btn-primary" @click="add(cartItem.id, qty)">加入購物車</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>