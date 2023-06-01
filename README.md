# MyMondMusic
![image](https://github.com/llSaiMonDll/MiniProject/assets/95870100/46ceb824-5bcc-427e-bde2-0ddc846d8457)

This is my miniproject that can let you Create account and Post the content into website
Even thought you can edit your bio to share your current mood. 

and here is some basic things that you must know to make it works!

## To run the frontend and backend in developing mode
cd to backend and frontend then run.

    npm run dev // Brontend
    node index.js // Backend
## API endpoints
### URL
<!-- Method /endpoint -->
POST /Login

POST /Register

POST /getBio

GET /Register

GET /getBio

GET /getPost

DELETE /deletePost

<!-- change to Request <TYPE> If you use parameters or query -->
### Request Body
###    Parameter    Type    Description
         email     String      eamil
         password  String      password
Example

   {
     "email" : "asdf@asdf.com",
     "password" : "asdf"
   }


<!-- The response if success -->


### Success


Response

<!--Status code (normally 200) -->
Status Code (200)
<!-- STATUS BEHEAVIOR -->
200 login success

### Parameter       Type        Description
     email          String        email
     username       String        username
     user_id        String         id
Example

{
   "password":"asdf",
   "username":"asdf",
   "user_id" : "14"
}
