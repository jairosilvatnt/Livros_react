import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ({ livros }) => (
  <main className="main">
    <h2>Últimos lançamentos</h2>
    {livros
      .filter((n, index) => index < 8)
      .map(livro => (
        <div className="card" key={livro.id} >
          <div className="thumb">
            <img
              src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
              alt="Thumbnail da capa do livro..." />
          </div>
          {livros
            .filter(c => c.slug === livro.slug)
            .map(livro => (
              <Link to={`/livro/${livro.slug}`} key={livro.id}>
                {
                  <div className="detalhes">
                    <h3>{ livro.titulo }</h3>
                    <p>{ livro.descricao.slice(0,130) + "..." }</p>
                    <p>Leia mais &dt;</p>
                  </div>
                }
              </Link>
            ))}
        </div>
      ))}
  </main>
);

export default Home;


// import React from "react";
// import './Home.css'

// const Home = () => (
//   <main className="main">
//     <h2>Últimos lançamentos</h2>
//     <div className="card">
//       <p>Conteúdo da Home Page</p>
//     </div>
//   </main>
// );

// export default Home;

// import React from "react";
// import './Home.css';

// const Home = () => {
//   return (
//     <>
//       <h2>Últimos lançamentos</h2>
//       <div className="card">
//         <div className="thumb">
//           <img
//             src="./assets/imagens/capas/9788575228142.jpg"
//             alt="" />
//             <div className="detalhes">
//               <h3>Padrões para kubernetes</h3>
//                 <p>O modo como os...</p>
//                 <a href="#">Leia mais &gt;</a>
//             </div>
//         </div>
//       </div>
//       <div className="card">
//         <div className="thumb">
//           <img
//             src="./assets/imagens/capas/9788575228074.jpg"
//             alt="" />
//             <div className="detalhes">
//               <h3>Introdução ao Pentest</h3>
//                 <p>Introdução ao Pentest...</p>
//                 <a href="#">Leia mais &gt;</a>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
