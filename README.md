# Bong Da Phui Social Network
> Một hệ thống phần mềm (mobile and website) tạo nên mạng xã hội cho các cầu thủ và đội bóng phủi có thể kết nối với nhau.
> 
> Live demo _đang cập nhật_.

## Table of Contents
* [📺 General Info](#📺-general-information)
* [🤳 Công nghệ & Kỹ thuật áp dụng](#technologies-used)
* [👏 Danh sách các chức năng](#features)
* [🌔 Screenshots](#screenshots)
* [🔧 Setup](#setup)
* [⏳ Project Status](#project-status)
* [🚀 Room for Improvement](#room-for-improvement)
* [👑 Acknowledgements](#acknowledgements)
* [💌 Contact](#contact)
<!-- * [License](#license) -->


## 📺 General Information
- Đây là phiên bản website thuộc hệ thống Bong Da Phui.
- Project hỗ trợ cho phần front-end của hệ thống.


## 🤳 Công nghệ & Kỹ thuật áp dụng
- React, React Router
- React-Bootstrap
- Redux, Redux Toolkit
- React Hook Form, Yup
- Login with Facebook and Google
- Realtime with Socket.IO


## 👏 Danh sách các chức năng

    - Đăng ký, đăng nhập tài khoản.
    - Chat realtime.


## 🌔 Screenshots
_Đang cập nhật_

## 🔧 Setup
Chạy các lệnh sau ở terminal:
- `npm install`
- `npm start`



## ⏳ Project Status
Project is: _in-progress_ 

## 🚀 Room for Improvement
_đang triển khai_


## 👑 Acknowledgements
Đạt được từ hệ thống:
- Thực hành được các kiến thức lý thuyết mới được học: Realtime with Socket.IO, Yup


## 💌 Contact
Created by [@nguyenhuuchi3006](https://www.facebook.com/chi.barca.5/) - feel free to contact me!




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

Login xong -> Redirect tới page trước đó (vô /profile/NguyenVanA -> add friend -> cần login -> login xong về lại page /profile đó)
(ngày xưa login xong -> về /home)
