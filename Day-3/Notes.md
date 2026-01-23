## Understanding what are APIs?

- a set of rules and definitions that enables software programs to communicate and exchange data with each other.

REST API k sir f2 main rule hai ki rest api mein communication kesa hoga 

1. jo protocol use kiya jayega communication k liye vo protocol aapka rahega HTTP ya HTTPS.

2. ki aap communication kis tareeke ka kar rahe ho uske basis par METHOD decide hogi 
----------------------------------
GET -> retrieves a resource or a list of resources. should not modify data on the server

(server par kuch bhi maangwa rahe ho frontend se server par)

POST -> Creates a new resource. The request body contains the data for the new resource

(jab hum frontend se ek aisi request kar rahe hai server pe jis se server par kuch create ho)

PUT -> jab server par koi resource already hai aur us resource ko pura update aapko karna ho

PATCH -> jab resource already server par ho aur uska ek chota sa part hume update krna ho

DELETE -> jab server par koi resource ho aur usko delete karna ho