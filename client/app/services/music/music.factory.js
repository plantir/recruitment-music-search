
musicFactory.$inject =['$resource']
function musicFactory($resource) {
  return $resource('',{
      
  },{
      search:{
          url:'https://api.spotify.com/v1/search?q=:q&type=:type&limit=:limit&offset=:offset',
      },
      artist:{
          url:'https://api.spotify.com/v1/artists/:id/albums?album_type=:type&limit=:limit&offset=:offset',
      },
      album:{
          url:'https://api.spotify.com/v1/albums/:id/tracks?limit=:limit&offset=:offset',
      }
  })
}

export default musicFactory;
