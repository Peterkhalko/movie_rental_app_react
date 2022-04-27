export const genres = [
  { _id: "5b21ca3eeb7f6f5ccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6ftccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbscd471821", name: "Thriller" },
  { _id: "5b21ca3eeb756fgccd471822", name: "Adventure" },
  { _id: "5b21ca3eeb7frfbccd471826", name: "Drama" },
  { _id: "5b21ca3edb766fbccd471824", name: "Romance" },
  { _id: "5b21ca3eebwf6f9ccd471829", name: "Sci-Fi" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
export function getGenre(genreId) {
  return genres.filter((g) => g._id == genreId);
}
