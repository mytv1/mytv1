## Tạo project Laravel với Docker

Hiện nay mình thấy đã có nhiều bài viết về tạo project laravel với docker trên kipalog rồi. Mọi người có thể search tại đây : [https://kipalog.com/search?q=laravel+docker]

Mục đích của bài viết này chỉ là chia sẻ và lưu lại kinh nghiệm mình đã thực hiện, hi vọng có thể sẽ có ích với các bạn có ý định làm sau này. :smiley:

Tham khảo tại :
1.  Thiết lập môi trường Laravel + Docker cho môi trường development và production : https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c
2. Tương tự như trên nhưng bằng tiếng nhật :
http://qiita.com/meidaimae/items/1b5902e2e520ece34b9a

### Môi trường cài đặt
* docker : Docker version 17.06.0-ce, build 02c1d87
* docker-compose : docker-compose version 1.15.0, build e12f3b9
* docker-machine : docker-machine version 0.12.1, build c8b17e8
* OS :  Ubuntu  

    ```Distributor ID:	Ubuntu 
    Description:	Ubuntu 16.04.2 LTS
    Release:	16.04
    Codename:	xenial ```
 
 
### Môi trường laravel mục tiêu :
* Webserver : Nginx 1.0
* Database : mysql 5.6
* PHP:7.0.4-FPM
 

###Bước 1 : Tạo project laravel
cd tới nơi ta muốn đặt project rồi download archive của laravel.

```curl -L https://github.com/laravel/laravel/archive/v5.4.30.tar.gz | tar xz```

Ta có thể tạo project bằng composer, nhưng như vậy sẽ yêu cầu máy cài thêm composer nữa. Composer sẽ cần thiết cho project, nhưng với ý nghĩa của việc dùng docker, composer cũng như các library môi trường khác mình nghĩ nên cài đặt trên docker chứ không phải trên máy chủ. Chúng ta sẽ cài đặt composer ở các bước sau.

Download xong, chúng ta sẽ đổi tên thành tên project mà ta muốn, ở đây mình đổi thành sample-laravel `mv laravel-5.4.30 sample-laravel`. Và đặt con trỏ directory hiện tại vào đây `cd sample-laravel`

Đến đây ta đã có project thô của laravel, để chạy được thì tiếp theo ta cần cài đặt các thư viện cho nó ở bước 2.

###Bước 2 : Cài đặt thư viện cho laravel
Thông thường khi không dùng docker, ta sẽ cần cài composer trên máy chủ và chạy `composer install` để tải bộ thư viện cần thiết  vào `vendor`. Với docker ta cũng sẽ làm tương tự như vậy, nhưng composer không cần cài đặt trên máy chủ mà sẽ được đặt vào 1 container trong docker. Container này sẽ chạy `composer install` vào thư mục trên máy ảo mà ta sẽ mount nó với chính project hiện tại.

```docker run --rm -v $(pwd):/app composer/composer install```

* `docker run` : Khởi tạo và chạy 1 container. Tương đương với việc tạo mới (create) và chạy (start) nó ngay lập tức
* `--rm` : Thông thường khi 1 container chạy xong và kết thúc. Hệ thống file cũng như volume tương ứng mà nó tạo ra sẽ còn được lưu lại (Để dễ debug chăng). Với option `--rm`, hệ thống file cũng như volume mà nó tạo ra sẽ được xóa khi container kết thúc (Nhưng image thì không). Với ý định chỉ install các lib cần thiết, mình nghĩ option này là phù hợp.
* `-v $(pwd):/app` : mount thư mục hiện tại vào thư mục /app trong container, là nơi composer mong muốn sẽ tìm thấy composer.json.

Note : Thực tế khi mình chạy lệnh này, mình có thêm `sudo` vì mình thấy có vấn đề về mount, và có lỗi không tìm thấy composer.json nếu không dùng.

Khi lệnh chạy hoàn tất, ta sẽ thấy folder `vendor` xuất hiện trong thư mục hiện tại. Như vậy các thư viện cần thiết cho laravel đã được tải xong. TIếp theo ta sẽ cài đặt môi trường webserver, database ... cho project với docker-compose.

###Bước 3 : Cài đặt môi trường docker với docker-compose
Ta sẽ tạo 4 file cài đặt sau đây : 
1. docker-compose.yml : cài đặt các service chạy trong docker, mỗi service sẽ đảm nhiệm 1 chức năng như service về webserver, service về database...
2. app.dockerfile : đặc tả cài đặt cho service app được định nghĩa trong compose ở trên.
3. web.dockerfile : đặc tả cài đặt cho service web được định nghĩa trong compose ở trên. (ta sẽ đặt tên theo format <tên service>.dockerfile)
4. vhost.conf : file cấu hình cho webservice nginx

####3.1. Cài đặt cho service app -PHP-PFM :
Ta sẽ viết đoạn cài đặt sau vào `docker-compose.yml`:
```
version: '3'
services:

  # The Application
  app:
    build:
      context: ./
      dockerfile: app.dockerfile
    working_dir: /var/www
    volumes:
      - ./:/var/www/
```
**Ý nghĩa** :
* `version 3` : version của docker-compose, ở đây mình chọn là 3
* `context` : thư mục đặt dockerfile
* `dockerfile` : đặc tả cài đặt về service sẽ dùng image nào, trong container trạng thái sẽ có những thư mục nào được cài sẵn...
* `working_dir` : tương tự như đặc tả của `docker run`, thư mục được chọn trong container để chay các file binaries. Mặc định là `root`
* `volumes` : mount thư mục `./` (chứa source code) trên máy host vào `/var/www` trên container. Điều này cho phép chúng ta thay đổi source code khi container đang chạy runtime.

`app.dockerfile`: Ta sẽ viết các lib cần thiết cho việc chạy code php vào đây.
```
FROM php:7.0.4-fpm

RUN apt-get update && apt-get install -y libmcrypt-dev \
    mysql-client libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install mcrypt pdo_mysql
```


####3.2.  Cài đặt cho service web - NGINX
Ta sẽ cần 1 webservice để xử lý các request đến và đưa đến cho laravel xử lý. Ngoài nginx ta có thể chọn apache. Mình cũng không biết nhiều về 2 loại webserver này nhưng mình nghe nói nginx dễ học hơn nên chọn nginx.

##### `docker-compose.yml` : chỉ định cài đặt service web
```
  # The Web Server
  web:
    build:
      context: ./
      dockerfile: web.dockerfile
    working_dir: /var/www
    ports:
      - 8080:80
  ```

* `ports: - 8080:80` : Ánh xạ cổng 8080 trên máy ảo vào cổng 80 trên container. 
Note : trong docker-compose version 2, option `volumes_from` có được sử dụng để trỏ volume giữa các services nhưng đến docker-compose 3 đã bị remove đi. Nên mình dùng option `volume` thay vào đó.

##### `web.dockerfile` : cài đặt cụ thể cho nginx
```
FROM nginx:1.10
ADD vhost.conf /etc/nginx/conf.d/default.conf
```

##### `vhost.conf` : cấu hình cho nginx
```
server {
      listen 80;
      index index.php index.html;
      root /var/www/public;

      location / {
          try_files $uri /index.php?$args;
      }

      location ~ \.php$ {
          fastcgi_split_path_info ^(.+\.php)(/.+)$;
          fastcgi_pass app:9000;
          fastcgi_index index.php;
          include fastcgi_params;
          fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
          fastcgi_param PATH_INFO $fastcgi_path_info;
          sendfile off;
      }
}
```

####3.3.  Cài đặt cho service database - MYSQL 
#####`docker-compose.yml`
```
  # The Database
  database:
    image: mysql:5.6
    volumes:
      - dbdata:/var/lib/mysql
    environment:
      - "MYSQL_DATABASE=homestead"
      - "MYSQL_USER=homestead"
      - "MYSQL_PASSWORD=secret"
      - "MYSQL_ROOT_PASSWORD=secret"
    ports:
        - "33061:3306"

volumes:
  dbdata:
```

**Ý nghĩa** :

* `image: mysql:5.6` So sánh với các service ở trên đều có 1 dockerfile đặc tả cài đặt cho nó thì service database này chỉ cần pull image mysql về là đủ. Các đặc tả cần thiết khác đều có sẵn trong image này nên ta sẽ không cần viết riêng.
* `dbdata:/var/lib/mysql` : dbdata là volume được chọn để lưu data sql (Là 1 volume riêng trong container, không phải mount với folder trong laravel như service app). Với ý nghĩa là volume mà các service khác sẽ cần dùng đến, ta sẽ cần định nghĩa nó riêng ở ngoài ở dòng cuối `volumes: dbdata`.
* `enviroment` : Các biến môi trường. Với định nghĩa như ở trên, mysql sẽ tạo cho chúng ta 1 database và 1 user như vậy. (Nếu không đặc tả thì sẽ chỉ có 1 user root và database mặc định của mysql)


### docker-compose.yml tổng hợp
Như vậy đến đây ta sẽ đặc tả xong các file cần thiết cho docker-compose, ta sẽ có file docker-compose.yml như sau :
```
version: '3'
services:

  # The Application
  app:
    build:
      context: ./
      dockerfile: app.dockerfile
    working_dir: /var/www
    volumes:
      - ./:/var/www/

  # The Web Server
  web:
    build:
      context: ./
      dockerfile: web.dockerfile
    working_dir: /var/www
    ports:
      - 8080:80

  # The Database
  database:
    image: mysql:5.6
    volumes:
      - dbdata:/var/lib/mysql
    environment:
      - "MYSQL_DATABASE=homestead"
      - "MYSQL_USER=homestead"
      - "MYSQL_PASSWORD=secret"
      - "MYSQL_ROOT_PASSWORD=secret"
    ports:
        - "33061:3306"

volumes:
  dbdata:
```

Như vậy việc đặc tả các file cài đặt đã hoàn tất. Tiếp theo trước khi đến khi chạy thử, ta sẽ khởi tạo 1 số dữ liệu cũng như key cho cần thiết cho laravel.

### Chaỵ các service
Ta sẽ chạy các services trên bằng command sau :
```
docker-compose up
```
(Ta có thể chọn option -d (detach) để tiến trình ẩn vào background khi hoàn tất)

Lần đầu chạy, command sẽ cần khoảng vài phút để pull về các image cần thiết. Nhưng lần thứ 2 trở đi nếu các chỉ định images không thay đổi thì thời gian chạy sẽ nhanh hơn nhiều do không phải tải lại các image nữa.

Đến đây ta sẽ cần chuẩn bị 1 số thiết lập cho laravel để project có thể sẵn sàng chạy được.

### Thiết lập cho laravel
#### File enviroment : `.env`
`cp .env-example .env`

#### Generate key và optimze command :
```
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan cache:clear
```
(Nếu bị lỗi không tìm thấy file `.env` thì hãy thử chạy với sudo)

`docker-compose exec <service-name> <câu lệnh>` : với câu lệnh ở trên, ta thấy ý nghĩa sẽ là chạy `<câu lệnh>` bên trong container của service `<service-name>`

*Option* :
`docker-compose exec app php artisan migrate --seed`
Migrate database. Nếu chạy không lỗi với "migrate successful" ta có thể yên tâm rằng kết nối giữa app với database là ok.

(Note : nếu command trả về lỗi không tìm thấy file hoặc khi `docker-compose exec app ls -la` nhận thấy các folder không được mount đúng cách, cấu trúc folder trong container không giống với ở thư mục host, có thể các bạn cần lệnh `sudo` ở `docker-compose run` ở trên)

Đến đây app đã sẵn sàng được sử dụng! với đường dẫn : http://0.0.0.0:8080 


![alt text](https://s3-ap-southeast-1.amazonaws.com/kipalog.com/rs95z8xkoq_Screenshot%20from%202017-08-07%2001-34-37.png)


## Tổng kết
Đến đây mình nghĩ đã hoàn thành setup cho môi trường phát triển. 
GIt repo : https://github.com/mytv1/sample-docker-laravel

Hi vọng ở bài viết tới mình có thể viết về cài đặt cho môi trường production.















TranMy 01-08-2017
