const newfeeds = [
  {
    type: 'top-headlines',
    query: 'sources=bbc-news',
  },
  {
    type: 'everything',
    query: 'domains=techcrunch.com&language=en',
  },
  {
    type: 'everything',
    query: 'domains=comicbookmovie.com&language=en',
  },
];

for (let feed of newfeeds) {
  console.log(feed.type);
}
