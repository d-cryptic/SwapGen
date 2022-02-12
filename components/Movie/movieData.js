const movieData = [
  {
    ID: "1",
    genre: "Drama",
    title: "Out of Love",
    summary:
      "Out of Love is an Indian series based on Doctor Foster by Mike Bartlett adapted by Hotstar for its label Hotstar Specials. It is directed by Tigmanshu Dhulia and Aijaz Khan starring Rasika Dugal and Purab Kohli in lead roles. It premiered on Hotstar from 22 November 2019. ",
    description:
      "First episode date: 22 November 2019\n\nNo. of episodes: 10 (list of episodes)\n\nNo. of seasons: 2",
    IMDBRating: "7.1 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMzY4MGRjYTYtM2NhNi00MzM5LTkwM2UtY2UzMDc4MTU3MjlkXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
  },
  {
    ID: "2",
    genre: "Drama",

    title: "Gullak",
    summary:
      'Gullak is a web series created by Shreyansh Pandey under the banner of The Viral Fever. The series revolves around the Mishra family, comprising Santosh and Shanti Mishra and their sons Anand "Annu" Mishra and Aman Mishra.',
    description: "No. of episodes: 10 (list of episodes)\n\nNo. of seasons: 2",
    IMDBRating: "9 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMmRjOTBjMGEtMGFmZi00MDc0LTgwNzMtNjMzZTUyM2M4ZTY1XkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_.jpg",
  },
  {
    ID: "3",
    genre: "Drama",

    title: "Kota Factory",
    summary:
      "Like many students from across India, Vaibhav comes to Kota to prepare for JEE and NEET. Along with his friends, he navigates campus life and works hard to get into IIT.",
    description:
      "First episode date: 16 April 2019\n\nNumber of episodes: 10\n\nNumber of seasons: 2",
    IMDBRating: "9.2 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg",
  },
  {
    ID: "4",
    genre: "Romance",
    title: "Indori Ishq",
    summary:
      "Indori Ishq is a comedy-drama web series which is directed by Samit Kakkad and written by Kunal Marathe. The show features Ritvik Sahore, Vedika Bhandari, Aashay Kulkarni. The series is available for streaming on MX Player and the season 1 was aired on 10 June 2021.",
    description:
      "No. of episodes: 9\n\nNo. of seasons: 1\n\nOriginal release: 10 June 2021",
    IMDBRating: "7.3 / 10",
    posterURL:
      "https://gumlet.assettype.com/freepressjournal/2021-06/b597a13d-7736-46fe-b5aa-6d2c5849da9f/FILM.jpeg?format=webp&w=400&dpr=2.6",
  },
  {
    ID: "5",
    genre: "Romance",

    title: "Broken But Beautiful ",
    summary:
      "Broken But Beautiful is a 2018 Hindi romance web series, created by Ekta Kapoor, and available on video on demand platforms and ALTBalaji/MX Player. The series revolves around love, heartbreaks and never ending romance between two individuals.",
    description: "No. of seasons: 3\n\nNo. of episodes: 31 (list of episodes)",
    IMDBRating: "8.7 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNzZjYTc5ZTYtODBjYS00NzhmLWI2NGQtZDE5YWNmZWYzYzk1XkEyXkFqcGdeQXVyODI2MzM0MTM@._V1_.jpg",
  },
  {
    ID: "6",
    genre: "Romance",

    title: "College romance",
    summary:
      "Three best friends look for love, laughs and some lifelong memories while attending college together.",
    description:
      "First episode date: 7 August 2018\n\nNumber of Episodes: 10\n\nNumber of Seasons: 2",
    IMDBRating: "8.8 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMzM3NGIzNDctNWEyOC00ZTY1LWJhNmUtYzZkYmMxNDUwZDA5XkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_.jpg",
  },
  {
    ID: "7",
    genre: "Horror",
    title: "Betaal",
    summary:
      "Hired to displace tribal villagers, highway officials unearth an old curse and an army of British soldier-zombies.",
    description: "Number of episodes: 4\n",
    IMDBRating: "5.4 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMzM3NGIzNDctNWEyOC00ZTY1LWJhNmUtYzZkYmMxNDUwZDA5XkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_.jpg",
  },
  {
    ID: "8",
    genre: "Horror",

    title: "Ghoul",
    summary:
      "When a new prisoner arrives at a military detention center exhibiting eerie behavior, young interrogator Nida Rahim searches for the truth. Her quest becomes a battle for survival when the prisoner, sect leader Ali Saeed, turns the tables on Nida and the other interrogators, exposing their most sham...",
    description: "Number of episodes: 3",
    IMDBRating: "7.1 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    ID: "9",
    genre: "Horror",

    title: "Gahraaiyan",
    summary:
      "A supernatural presence creates problems for Reyna. While her neighbour Sahil understands her issues and comforts her, he does not seem to be the nice person he is pretending to be.",
    description: "Number of episodes: 10",
    IMDBRating: "6.9 / 10",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/d/da/Gehraiyaan.jpg",
  },
  {
    ID: "10",
    genre: "Comedy",
    title: "Comicstaan",
    summary:
      "Seven of India's most talented comedians judge and mentor up-and-coming comics to find India's next big comic sensation.",
    description:
      "First episode date: 13 July 2018\n\nNo. of episodes: 17\n\nNo. of seasons: 2\n",
    IMDBRating: "6.8 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTU3MjEzNjI1MV5BMl5BanBnXkFtZTgwMDA0MTk3NTM@._V1_.jpg",
  },
  {
    ID: "11",
    genre: "Comedy",

    title: "Panchayat",
    summary:
      "An engineering graduate, Abhishek, is unable to find a job of his calibre. So, he ends up working for a panchayat in a remote Indian village and deals with several mundane challenges.",
    description: "First episode date: 3 April 2020\n\nNumber of episodes: 8",
    IMDBRating: "8.8 / 10",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_FMjpg_UX1000_.jpg",
  },
  {
    ID: "12",
    genre: "Comedy",

    title: "Hostel Daze",
    summary:
      "Four classmates develop a lasting bond as they strive to survive their first semester in an Indian hostel as their lives intersect with other hostel clients.",
    description:
      "First episode date: 13 December 2019\n\nNumber of episodes: 9\n\nNumber of Seasons: 2",
    IMDBRating: "8.5 / 10",
    posterURL: "https://wallpapercave.com/wp/wp6761097.jpg",
  },
];

export default movieData;
