// eslint-disable-next-line react/prop-types
const MovieCards = ({movie : {Poster , Year , Type, Title , imdbId}}) => {
  return (

    <div className=" flex " key={imdbId}>
        
      <div className=" shadow-md shadow-purple-900 hover:bg-purple-500 hover:bg-opacity-50 border border-purple-700 p-1 rounded-md cursor-pointer"> 
          <img src={Poster!== "N/A" ? Poster : "https://via.placeholder.com/400"} alt="Poster" className="w-44 h-44 rounded-tr-md rounded-tl-md" />
          <div className="p-2">
              <p className="text-sm">{Year}</p>
              <span className="text-sm">{Type}</span>
              <h3 className="font-semibold text-white w-40 line-clamp-1 ">{Title}</h3>
          </div>
      </div>
        
    </div>
    
  
  )
}

export default MovieCards