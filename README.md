# moveinsync-Surya

Database is created in the localhpst of Mongodb named "moveinsync"
Mongodb Integration Client is being used to connect to the local database.

There are three tables in the created database
1. Cutomers
2. PurchaseOrders
3. ShippingDetails

There are foreign keys which define the relationship between the tables.
1. Customers.CustomerID -> PurchaseOrders.CustomerID
2. PurchaseOrder.PurchaseOrderID -> ShippingDetails.PurchaseOrderID

Implemented 6 routes as per the requirement.
1. Insert rows to Customers Table. - 'http://localhost:8000/addcustomerrecord'
2. Insert rows to PurchaseOrders Table. - 'http://localhost:8000/addporecord'
3. Insert rows to ShippingDetails Table. - 'http://localhost:8000/addshippingdetail'
4. Get Customer Details as per given customer name. - 'http://localhost:8000/getcustomer/<name>'
5. Get all Cutomers with corresponding purchase orders. 'http://localhost:8000/getcustomerswithPO'
6. Get all customers with their purchase orders and shipping details. - 'http://localhost:8000/getcustomerswithSD'

These can be accessible by APIs through Postman or any other API applications.
