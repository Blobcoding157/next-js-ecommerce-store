import fs from 'node:fs';
import { config } from 'node:process';
import { Config } from 'dotenv-safe';
import postgres from 'postgres';

// config();

// const sql = postgres();

// console.log(
//   sql`
// SELECT * FROM  items`,
// );

export const items = [
  {
    id: 1,
    title: 'Wand',
    type: 'Wand',
    description:
      'The wand is a magic stick used for spells. It allows the user to cast spells with ease and accuracy. The wand can also be used in other magical ways, such as protective rituals. It is made from real wood and silk, and comes with a customized carry bag.',
    imageLink: '/wands/wand.png',
    price: '70g',
  },
  {
    id: 2,
    title: 'Stick',
    type: 'Wand',
    description:
      "The stick is the perfect way to stay connected and on top of your work while you're on the go. With its low weight and revolutionary design, it's easy to take the stick with you wherever you go. The Stick has been designed with a flat base that makes it easy to set up and use, even in rough conditions.",
    imageLink: '/wands/stick.jpg',
    price: '10g',
  },
  {
    id: 3,
    title: 'Big_Stick',
    type: 'Staff',
    description:
      'Discover the impressive Big Stick – an idea addition to any outdoor aesthetic. This giant stick is constructed from premium woody material and stands higher than most. Easily found on the ground, the Big Stick brings an earthy long-lasting beauty to any living space.',
    imageLink: '/wands/BigStick.png',
    price: '15g',
  },
  {
    id: 4,
    title: 'Slightly_Magical_Staff',
    type: 'Staff',
    description:
      'Summon the power of wizards with this slightly magical staff. Whether you’re a budding sorcerer or just looking to have some mystical fun, this staff will make you feel like a true sorcerer with its slight magical properties.',
    imageLink: '/wands/SlightlyMagicalStaff.png',
    price: '20g',
  },
];

// CREATE TABLE items(
// id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
// title varchar(30) NOT NULL,
// type varchar(10) NOT NULL,
// description varchar(200),
// imageLink varchar(50),
// price integer NOT NULL
// );

// INSERT INTO items
// (
//   title, type, description, imageLink, price
// )
// VALUES
// (
//   'Wand', 'Wand', 'The wand is a magic stick used for spells. It allows the user to cast spells with ease and accuracy. The wand can also be used in other magical ways, such as protective rituals. It is made from real wood and silk, and comes with a customized carry bag.','/wand_logo.png', '70g'
// ),
// (
//   'Stick', 'Wand', "The stick is the perfect way to stay connected and on top of your work while you're on the go. With its low weight and revolutionary design, it's easy to take the stick with you wherever you go. The Stick has been designed with a flat base that makes it easy to set up and use, even in rough conditions.",'/wand_logo.png', '10g'
// ),
// (
//   'Big_Stick', "Staff", 'Discover the impressive Big Stick – an idea addition to any outdoor aesthetic. This giant stick is constructed from premium woody material and stands higher than most. Easily found on the ground, the Big Stick brings an earthy long-lasting beauty to any living space.','/wand_logo.png', '15g'
// ),
// (
//   'Slightly_Magical_Staff', 'Staff', 'The wand is a magic stick used for spells. It allows the user to cast spells with ease and accuracy. The wand can also be used in other magical ways, such as protective rituals. It is made from real wood and silk, and comes with a customized carry bag.','/wand_logo.png', '20g'
// )
