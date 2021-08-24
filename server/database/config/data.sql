BEGIN;
DROP TABLE IF EXISTS users, tasks CASCADE;
CREATE TABLE users (
     id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    due_time DATE NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
-- Users Fake Data
insert into users (name, email, password) values ('jmelody0', 'emckilroe0@flavors.me', 'eGjcrrw4ip');
insert into users (name, email, password) values ('akerswill1', 'gkingsnode1@booking.com', 'bAisYN');
insert into users (name, email, password) values ('pradeliffe2', 'maustins2@privacy.gov.au', 'Ok7865m4U');
insert into users (name, email, password) values ('amchirrie3', 'tpassingham3@edublogs.org', 'HpWgyz');
insert into users (name, email, password) values ('kkynaston4', 'cgrabbam4@vk.com', '3pPhIL');
insert into users (name, email, password) values ('lgrigoliis5', 'fboller5@wikipedia.org', 'BqimGulvT1gS');
insert into users (name, email, password) values ('dwyleman6', 'dwoodrup6@de.vu', 'weN5og2WezVC');
insert into users (name, email, password) values ('bloyndon7', 'sjedrzej7@bandcamp.com', 'ijB0uXcepxj');
insert into users (name, email, password) values ('lhibling8', 'awynne8@pagesperso-orange.fr', 'Seg4T8odrdXU');
insert into users (name, email, password) values ('ideville9', 'agueinn9@simplemachines.org', 'UjbuMSkth4fO');
insert into users (name, email, password) values ('nhawkera', 'alemmona@hubpages.com', 'oSgEZ0qPMas');
insert into users (name, email, password) values ('lplewsb', 'pcolacob@ebay.co.uk', 'CS118TY');
insert into users (name, email, password) values ('akestertonc', 'tpitcaithleyc@mapy.cz', 'wQqtEnq9R');
insert into users (name, email, password) values ('ggomerd', 'bsayred@telegraph.co.uk', 'YBio0WP');
insert into users (name, email, password) values ('mcordene', 'gtrembleye@usnews.com', 'yW1OwM');
insert into users (name, email, password) values ('mfolif', 'elittlepagef@twitter.com', 'iimIx4');
insert into users (name, email, password) values ('rcovingtong', 'ljakuboviczg@home.pl', '9uy4ZYX');
insert into users (name, email, password) values ('cjerochh', 'rmaccaugheyh@slideshare.net', 'xmR2lDQvm');
insert into users (name, email, password) values ('pisacoffi', 'lpattinsoni@cnbc.com', 'uD94tXFaWUAk');
insert into users (name, email, password) values ('mnicej', 'glafuentej@google.pl', 'SB2h3iXaWI');
-- Tasks Fake Data
insert into tasks (user_id, title, due_time, completed) values (13, 'at turpis donec posuere metus vitae ipsum', '2021-04-28 01:27:36', false);
insert into tasks (user_id, title, due_time, completed) values (5, 'ut nulla sed accumsan felis ut', '2021-01-03 18:17:22', false);
insert into tasks (user_id, title, due_time, completed) values (4, 'in hac habitasse platea dictumst morbi vestibulum', '2021-06-04 14:59:47', true);
insert into tasks (user_id, title, due_time, completed) values (2, 'risus auctor sed tristique in', '2021-01-16 09:00:08', false);
insert into tasks (user_id, title, due_time, completed) values (12, 'aliquet maecenas leo odio condimentum id luctus', '2020-12-09 07:53:32', true);
insert into tasks (user_id, title, due_time, completed) values (11, 'purus phasellus in felis donec semper sapien', '2021-05-02 20:58:27', true);
insert into tasks (user_id, title, due_time, completed) values (15, 'morbi a ipsum integer a nibh', '2021-09-03 06:02:55', false);
insert into tasks (user_id, title, due_time, completed) values (17, 'eget eros elementum pellentesque quisque', '2020-11-06 10:20:42', true);
insert into tasks (user_id, title, due_time, completed) values (6, 'sapien cum sociis natoque penatibus et', '2021-03-22 21:48:55', false);
insert into tasks (user_id, title, due_time, completed) values (8, 'a suscipit nulla elit ac nulla', '2021-02-16 10:48:10', true);
insert into tasks (user_id, title, due_time, completed) values (5, 'orci vehicula condimentum curabitur in libero ut', '2020-10-02 17:11:28', true);
insert into tasks (user_id, title, due_time, completed) values (12, 'maecenas leo odio condimentum id luctus', '2021-04-08 15:59:50', false);
insert into tasks (user_id, title, due_time, completed) values (10, 'pulvinar sed nisl nunc rhoncus dui', '2020-09-23 00:25:00', true);
insert into tasks (user_id, title, due_time, completed) values (9, 'lorem integer tincidunt ante vel ipsum praesent', '2021-07-28 10:34:06', false);
insert into tasks (user_id, title, due_time, completed) values (11, 'luctus nec molestie sed justo pellentesque', '2021-01-20 13:26:28', false);
insert into tasks (user_id, title, due_time, completed) values (20, 'aenean sit amet justo morbi', '2020-09-26 17:56:00', true);
insert into tasks (user_id, title, due_time, completed) values (13, 'ipsum ac tellus semper interdum', '2021-03-25 18:56:51', true);
insert into tasks (user_id, title, due_time, completed) values (13, 'aliquet ultrices erat tortor sollicitudin mi', '2020-08-26 08:34:45', false);
insert into tasks (user_id, title, due_time, completed) values (17, 'ridiculus mus vivamus vestibulum sagittis', '2020-12-03 01:26:18', true);
insert into tasks (user_id, title, due_time, completed) values (9, 'tellus in sagittis dui vel', '2020-12-23 01:34:09', false);
insert into tasks (user_id, title, due_time, completed) values (8, 'enim leo rhoncus sed vestibulum', '2020-10-16 17:50:53', true);
insert into tasks (user_id, title, due_time, completed) values (20, 'sapien a libero nam dui proin', '2021-02-10 15:44:12', false);
insert into tasks (user_id, title, due_time, completed) values (2, 'quam a odio in hac habitasse platea', '2021-07-08 14:05:33', true);
insert into tasks (user_id, title, due_time, completed) values (17, 'vitae ipsum aliquam non mauris morbi non', '2020-08-28 19:24:03', false);
insert into tasks (user_id, title, due_time, completed) values (15, 'elit proin risus praesent lectus', '2021-01-02 18:15:11', true);
insert into tasks (user_id, title, due_time, completed) values (10, 'maecenas rhoncus aliquam lacus morbi', '2021-07-09 08:29:57', false);
insert into tasks (user_id, title, due_time, completed) values (7, 'pede justo eu massa donec', '2021-09-16 09:11:37', false);
insert into tasks (user_id, title, due_time, completed) values (1, 'vel augue vestibulum ante ipsum primis in', '2021-07-07 16:05:19', true);
insert into tasks (user_id, title, due_time, completed) values (3, 'sagittis dui vel nisl duis', '2021-06-22 05:04:00', true);
insert into tasks (user_id, title, due_time, completed) values (16, 'id mauris vulputate elementum nullam varius', '2021-02-06 08:55:25', true);
COMMIT;