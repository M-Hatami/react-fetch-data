// You don't need to look at this, but you can if you want!

/* 
When building user interfaces, it can be helpful to 
mock out simplified versions of the data that our code
will eventually fetch from backend servers 
*/

export default {
  "/categories": ["پیراهن", "شلوار", "کفش", "لوازم"],
  "/items?category=پیراهن": ["بالاپوش", "راحت", "رسمی"],
  "/items?category=شلوار": [
    "شلوار کار",
    "شلوار ورزشی",
    "شلوار رسمی",
    "شلوار راحت",
  ],
  "/items?category=کفش": ["ورزشی", "کفش کار", "طبی-راحت", "پیاده‌روی"],
  "/items?category=لوازم": ["کلاه", "کیف‌پول", "کمربند"],
};
