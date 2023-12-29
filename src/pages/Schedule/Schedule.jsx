import React from "react";
import "./Schedule.css";
import { Link } from "react-router-dom";

const Schedule = ({ livros }) => (
  <main className="main">
    <h2>Categoria programação</h2>
    {livros
      .filter(cat => cat.categoria === "programacao")
      .map(livro => (
        <div key={livro.id} className="card">
          <div className="thumb">
            <img 
            src={"/imagens/capas/" + livro.id + ".jpg"} 
            alt="Thumbnail da capa do livro ..." 
            />
          </div>
          {livros
            .filter(c => c.slug === livro.slug)
            .map(livro => (
              <span key={livro.slug}>
                <Link to={`/livro/${livro.slug}`}>
                {
                  <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0,130) + "..."}</p>
                    <p>Leia mais &gt;</p>
                  </div>
                }
                </Link>
              </span>
            ))
          }
        </div>
      ))
    }
  </main>
);

export default Schedule;