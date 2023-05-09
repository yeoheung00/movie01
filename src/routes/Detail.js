import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [])
  return (
    loading ? <h1>Loading</h1> : null
  );
}

export default Detail;