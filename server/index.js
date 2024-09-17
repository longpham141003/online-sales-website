const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./routes/product/product.routes.js');
const parentCategoryRoute = require('./routes/category/parentCategory.route.js');
const childCategoryRoute = require('./routes/category/childCategory.route.js');
const grandchildCategoryRoute = require('./routes/category/grandchildCategory.route.js');
const userRoute = require('./routes/user/user.routes.js');
const protectedRoute = require('./routes/user/protected.routes.js'); 
const cartRoute = require('./routes/cart/cart.routes.js'); 
const orderRoute = require('./routes/order/order.routes.js'); 
const supplierRoute = require('./routes/supplier/supplier.routes.js');
const customerRoute = require('./routes/customer/customer.route.js'); // Đã thêm route khách hàng
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

app.use('/api/products', productRoute);
app.use('/api/parent-categories', parentCategoryRoute);
app.use('/api/child-categories', childCategoryRoute);
app.use('/api/grandchild-categories', grandchildCategoryRoute);
app.use('/api/users', userRoute);
app.use('/api/protected', protectedRoute);
app.use('/api/cart', cartRoute); 
app.use('/api/orders', orderRoute);
app.use('/api/suppliers', supplierRoute);
app.use('/api/customers', customerRoute); 
app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

mongoose.connect('mongodb+srv://longpham141003:Q.long2003@backenddb.iwowh0o.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB')
  .then(() => {
    console.log('Đã kết nối tới Database');
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((err) => {
    console.error('Không thể kết nối tới Database', err);
  });
