import Head from "next/head";
import Header from "../.next/components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";

function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title> Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* se arch results */}
    </div>
  );
}

export default Search;

// export async function getServerSideProps(context) {
//   const useDummyData = false;

//   const data = await fetch(
//     `https://www.gooogleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
//   ).then((response) => response.json());

//   //  After the SERVER has rendered --> pass results to client
//   return {
//     props: {
//       results: data,
//     },
//   };
// }
