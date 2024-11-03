# Kasirku
 Frontend ERP 

 npm install --save-dev @svgr/webpack


API Routing

----------------------------------------------------------------------

https://localhost:8080/api/workers/new_owner --create
https://localhost:8080/api/workers/new_cashier --create
https://localhost:8080/api/workers/new_staff --create
https://localhost:8080/api/workers/set_auth/name

https://localhost:8080/api/companies/new_company -- create
https://localhost:8080/api/companies/edit_name -- update
https://localhost:8080/api/companies/id  -- read by id
https://localhost:8080/api/companies/ -- read

https://localhost:8080/api/categories/new_category --create
https://localhost:8080/api/categories/category --read
https://localhost:8080/api/categories/edit_name --update
https://localhost:8080/api/categories/category/id --delete

https://localhost:8080/api/items/new_product --create
https://localhost:8080/api/items/edit_name --update name
https://localhost:8080/api/items/edit_price --update price
https://localhost:8080/api/items/edit_category --update category
https://localhost:8080/api/items/edit_sales --update sales
https://localhost:8080/api/items/product/edit_stock --edit stock
https://localhost:8080/api/items/product/id --delete
https://localhost:8080/api/items/products/id

https://localhost:8080/api/trasactions/new_transaction --create
https://localhost:8080/api/trasactions/new_detail --create
https://localhost:8080/api/trasactions/id --read by id
https://localhost:8080/api/trasactions/edit_proof --update proof

----------------------------------------------------------------------


{{Setup 1}}

POST https://localhost:8080/api/workers/new_owner --create
{
    "name":"Marco Davincent Dermawan",
    "is_authorized":"true",
    "email":"marcodave03@gmail.com",
    "password":"12345"
}
POST https://localhost:8080/api/workers/new_cashier --create
{
    "name":"",
    "email":"",
    "password":"",
}
POST https://localhost:8080/api/workers/new_staff --create
{
    "name":"",
    "email":"",
    "password":"",
}
POST https://localhost:8080/api/workers/set_auth/name
{
    "name":"",
}

{{Setup 2}}

POST https://localhost:8080/api/companies/new_company -- create
{
    "name":"",
    "duepayment":"",
    "ownerId":"",
}
PATCH https://localhost:8080/api/companies/edit_name -- update
{
    "companyId":"",
}

GET https://localhost:8080/api/companies/{id}  -- read by id

GET https://localhost:8080/api/companies/ -- read




POST https://localhost:8080/api/categories/new_category --create
{   
    "name":"",
    "company_id":""
}

GET https://localhost:8080/api/categories/category --read

PATCH https://localhost:8080/api/categories/edit_name --update

DELETE https://localhost:8080/api/categories/category/id --delete

{{Setup 3}}

https://localhost:8080/api/categories/new_category --create
{
    "name":"",
}
https://localhost:8080/api/categories/category --read

https://localhost:8080/api/categories/edit_name --update
{
    "id":"",
    "name":"",
}

https://localhost:8080/api/categories/category/id --delete

{{Setup 4}}
POST https://localhost:8080/api/items/new_product --create
{
    "name":"",
    "price":"",
    "categoryId":"",
    "totalsales":"",
}

GET https://localhost:8080/api/items/products/id 

PATCH https://localhost:8080/api/items/edit_name --update name
{
    "ItemId":"",
    "name":"",
    "price";"",
    "categoryId":"",
    "sales":"",
    "stock":"",
}

DELETE https://localhost:8080/api/items/product/id --delete

{{Setup 5}}
POST https://localhost:8080/api/trasactions/new_transaction --create
{
    "companyId":"",
    "worker":"",  //get name
    "customer":"", //get name
    "date":"",
    "phone":"",
    "paymentproof":"",
    "invoice":"",
    "total_price":"",
}

POST https://localhost:8080/api/trasactions/new_detail --create   product detail/list
{
    "name":"",
    "price":"",
    "quantity":"",
    "transactionId":"",
    "productname":"",
    "stock":"",
    "total_sales":"",
}

GET https://localhost:8080/api/trasactions/id --read by id

PATCH https://localhost:8080/api/trasactions/edit_proof --update proof
{
    "transactionId":"",
    "proof":"",
}





