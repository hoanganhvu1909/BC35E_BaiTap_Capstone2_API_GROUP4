
// Lấy thông tin sản phẩm
function layThongTinProductApi () {
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product', 
        method:'GET' 
    });

    // Thành công 
    promise.then(function(result) {
        console.log(result.data.content);
        //Hiển thị dữ liệu ra table
        renderTableProduct(result.data.content);
    });
    // Thất bại
    promise.catch(function(err){
        console.log(err);
    });
};
 function renderTableProduct(arrProduct){
    
    var contentHTML = ``;
    for(var i = 0; i < arrProduct.length; i++ ){
        var product = arrProduct[i];
        contentHTML += `
        <div class="product-card col-4">
          <div class="card-body">
            <img src="${product.image}" alt="" />
            <div class="titles">
              <h3 class="product-title">${product.name}</h3>
              <p class="product-description">${product.shortDescription}</p>
            </div>
          </div>
          <div class="card-actions">
            <a class="btn-buy" href="./detail.html">Buy Now</a> </a>
            <p class="price-text">Price</p>
          </div>
        </div>
        `;
    }
    //Đưa dữ liệu lên giao diện
    document.querySelector('#data-product').innerHTML = contentHTML;
 }


layThongTinProductApi ()

