const data = {
  id: 1,
  name: "Главная",
  url: "/",
  children: [
    {
      id: 2,
      name: "Категория 1",
      url: "/category-1",
      children: [
        {
          id: 3,
          name: "Подкатегория 1",
          url: "/category-1/subcategory-1",
          children: [
            {
              id: 6,
              name: "Подкатегория Подкатегория 1",
              url: "/category-1/subcategory-1/subcategory-subcategory-1",
              children: [],
            },
          ],
        },
        {
          id: 4,
          name: "Подкатегория 2",
          url: "/category-1/subcategory-2",
          children: [],
        },
      ],
    },
    {
      id: 5,
      name: "Категория 2",
      url: "/category-2",
      children: [
        {
          id: 13,
          name: "Подкатегория 1",
          url: "/category-1/subcategory-1",
          children: [
            {
              id: 16,
              name: "Подкатегория Подкатегория 1",
              url: "/category-1/subcategory-1/subcategory-subcategory-1",
              children: [],
            },
          ],
        },
        {
          id: 14,
          name: "Подкатегория 2",
          url: "/category-1/subcategory-2",
          children: [],
        },
      ],
    },
  ],
};

module.exports = data;
