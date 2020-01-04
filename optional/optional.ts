type AlbumAPIResponse = {
  title: string
  artist?: {
    name: string
    bio?: string
    previousAlbums?: string[]
  }
};

const album: AlbumAPIResponse = {
  title: "123"
}
console.log(album?.artist?.bio);