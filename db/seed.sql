create table users (
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
);

create table posts(
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references users (id)
);


insert into users (username, password, profile_pic)
values ('vali', 'juju', 'https://okdiario.com/img/2018/03/19/las-claves-del-exito-de-ladybug-655x368.jpg');
insert into users (username, password, profile_pic)
values('olivia', 'lalala', 'https://d1xsnballpvus5.cloudfront.net/housemethod/wp-content/uploads/2018/03/zinnia.jpg/dynamic:1-aspect:1.5/zinnia--360.webp?signature=d12755bfb9c64019a5c8fdd6ce2b19bffd31d8550666f1a8b9119d17df5a5f51');


insert into posts (title, img, content, author_id)
values ('Harry Potter', 'https://target.scene7.com/is/image/Target/GUEST_673690d3-dc72-40ec-85d9-7dbffd2f24d9?wid=488&hei=488&fmt=pjpeg', 'Do not let the muggles get you DOWN!', 1);
insert into posts (title, img, content, author_id)
values ('Alicia', 'https://i.ebayimg.com/images/g/-KIAAOSwEXBa26D2/s-l300.jpg', 'My fav: Why, sometimes I have believed as many as six impossible things before breakfast.', 2);