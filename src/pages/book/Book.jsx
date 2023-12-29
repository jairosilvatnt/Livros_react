import React from "react";
import "./Book.css";
import { useParams } from "react-router-dom";
import { livros } from "./livro";

const Book = () => {
  const { livroSlug } = useParams();

  const livro = livros.find(
    livro => livro.slug === livroSlug
  )
  
  return (
    <main className="main">
      <div className="pag-book">
        <h2>{livro.titulo}</h2>
        <div className="book">
          <img
            src={"/imagens/capas/" + livro.id + ".jpg"}
            alt="Thumbnail da capa do livro ..." />
          <ul>
            <li>ISBN:{livro.isbn}</li>
            <li>Ano:{livro.ano}</li>
            <li>Página:{livro.paginas}</li>
            <li>Preço:R${livro.preco},00</li>
          </ul>
          <hr />
          <h3>Descrição do livro</h3>
          <p>{livro.descricao}</p>
        </div>
      </div>
    </main>
  )
};

export default Book;