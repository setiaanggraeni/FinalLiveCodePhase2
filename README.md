# FinalLiveCodePhase2
by Setia Anggraeni

live-code-phase-2

Hacktivpress - Simple Blogging Platform

Pada ujian akhir phase kali ini kita akan menguji dan melihat hasil dari pembelajaran yang kita lakukan selama phase 2 ini.

Kamu akan diminta untuk membuat blogging system sederhana dengan menggunakan framework Express JS, dan juga work database MongoDB dalam waktu 4 jam, serta menggunakan struktur MVC. Tim instruktur akan melakukan penilaian berdasarkan kualitas dan kerapian struktur code, serta workflow selama kamu mengerjakan tugas ini dilihat dari history commit pada repository kalian masing-masing.

Adapun collection yang perlu kalian buat yaitu collection users yang minimal memiliki field username,dan password.

Serta collection articles yang minimal memiliki field title, content, category, dan author. Field author merujuk ke data yang ada di field user.

Dalam blogging sistem ini setiap orang bisa melihat daftar keseluruhan artikel atau daftar artikel berdasar kategori. Namun hanya user yang ter-autentifikasi yang bisa membuat, mengedit, dan menghapus artikel.

Jangan lupa berdoa sebelum mengerjakan dan good luck!

SET UP THE REPOSITORY

Untuk mengerjakan tugas kali ini buatlah sebuah repository dengan nama hacktivpress di akun github kalian masing-masing, kemudian clone pada penyimpanan local di komputer yang kalian gunakan.

RELEASE 0

Sebelum memulai coding buatlah sebuah dokumentasi pada file README.md yang menjelaskan berbagai informasi minimal mengenai :

Deskripsi dari program yang kita buat,
Langkah-langkah yang perlu dijalankan untuk menjalankan program tersebut,
Serta daftar API Endpoint yang bisa diakses untuk mengambil data.
RELEASE 1 API Auth

Setelah membuat dokumentasi, sekarang waktunya untuk memulai coding. Buatlah model, controller, dan routing untuk operasi user authentication meliputi register dan juga login. Authentikasi bebas menggunakan teknologi apa saja. Facebook login juga boleh 😆

RELEASE 2 API Articles

Buatlah model, controller, dan routing untuk operasi CRUD meliputi get all data, get one data, create data, update data, get by author,get by category, dan juga remove data untuk collection articles.

RELEASE 3 Client Side App

Buatlah aplikasi client side untuk API yang sudah kita buat sebelumnya, disini kamu bebas menggunakan teknologi apapun seperti jQuery atau VueJS. Pastikan kamu membuat tamplan yang pantas untuk ditampilkan.

RELEASE 4 Validations

Jika kamu sudah selesai mengerjakan sampai RELEASE 3, silakan tambahkan validations baik pada server side maupun client-side. validations yang diperlukan antara lain format data yang dimasukkan untuk masing-masing field haruslah sesuai. Dan user hanya bisa edit, dan delete article miliknya sendiri.

RELEASE 5 Upload Image

Terlalu mudah? Silakan tambahkan fitur untuk upload featured image pada setiap artikel. File hasil upload boleh kalian simpan baik itu di server ataupun menggunakan penyimpanan cloud seperti Google Cloud Storage dan/atau Amazon S3.

RELEASE 6 Refactor
