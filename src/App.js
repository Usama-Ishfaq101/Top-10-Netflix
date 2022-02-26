import "./App.css";
import { useState, useEffect } from "react";

// API used https://rapidapi.com/mhtdy/api/netflix-weekly-top-10/
function App() {
  const [category, setCategory] = useState("othermovie");
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    fetchdata("https://netflix-weekly-top-10.p.rapidapi.com/api/movie");
  }, []);

  function fetchdata(myurl) {
    fetch(myurl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "netflix-weekly-top-10.p.rapidapi.com",
        "x-rapidapi-key": "403b511f1bmsh62e163413a86ce9p1ef911jsnfce5431bdaa5",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setmovie(data))
      .catch((err) => {
        console.error(err);
      });
  }


  return (
    <div className="App">
      <div>
      <h1>Below are the most watched movies on Netflix in last week</h1>
        <input
          type="radio"
          value="pizza"
          name="catergory"
          onChange={(e) => fetchdata("https://netflix-weekly-top-10.p.rapidapi.com/api/movie")}
        />{" "}
        Movie
        <input
          type="radio"
          value="burger"
          name="catergory"
          onChange={(e) => fetchdata("https://netflix-weekly-top-10.p.rapidapi.com/api/tv")}
        />{" "}
        TV
        <input
          type="radio"
          value="beverage"
          name="catergory"
          onChange={(e) => fetchdata("https://netflix-weekly-top-10.p.rapidapi.com/api/othermovie")}
        />{" "}
        Non-english movie
        <input
          type="radio"
          value="all"
          name="catergory"
          onChange={(e) => fetchdata("https://netflix-weekly-top-10.p.rapidapi.com/api/othertv")}
        />{" "}
        Non-english TV
      </div>
      <div className="heroSec">
        <div className="cardsSec">
          {movie &&
            movie.map((item, index) => {
              return (
                <div key={index}>
                  <div className="mainCard" key={index}>
                    <div className="imageCard"></div>
                    <div className="bottomCard">
                      <div className="cardLeft">
                      <div className="textDiv"> Movie name</div>
                        <p> {item.name}</p>
                      </div>
                      <div className="cardLeft">
                       <div className="textDiv"> Hours Viewed</div>
                        <p> {item.hoursviewed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
