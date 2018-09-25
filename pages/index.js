import Head from "next/head";
import PostLink from "../components/PostLink";
import Axios from "axios";

export default class extends React.Component {
  static async getInitialProps() {
    const {
      data: {
        data: { movies }
      }
    } = await Axios.get("https://yts.am/api/v2/list_movies.json");
    return {
      movies
    };
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <Head>
          <title>Home | Nomad Store</title>
        </Head>
        <h1>Movies:</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <PostLink title={movie.title} id={movie.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
