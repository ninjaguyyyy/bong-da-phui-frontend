## Kỹ thuật

Login with Google

Tạo 1 Web Application Google Client => nhận được Client_Id 

Front-end:
- use package react-google-login truyền Client_Id vừa rồi
- có thể login bằng Google và nhận thông tin nick google đó (id_token, email, ...)
- gửi id_token xuống cho back-end để nó check
- nhận access token, save lại 

Back-end:
- use package google-auth-library truyền Client_Id
- dùng hàm để xác thực id_token
- check tồn tại để tạo tài khoản mới
- trả về access token

Login with Facebook

Trên Facebook Developer, tạo 1 App => nhận APP_ID

Front-end: tương tự
Back-end: tương tự nhưng verify account bằng api

(https://graph.facebook.com/v2.11/1865789930424482/?access_token=<access-token>&fields=name,id,picture,email)
