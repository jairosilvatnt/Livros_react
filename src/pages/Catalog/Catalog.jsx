import React from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";

const Catalog = ({ livros }) => {
  return (
    <main className="main">
      <h2>Catálogo de livros</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === "frontend")
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
      <h2>Categoria programação</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === "programacao")
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
      <h2>Categoria design</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === "design")
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}                  
      </ol>
    </main>
  );
};

export default Catalog;