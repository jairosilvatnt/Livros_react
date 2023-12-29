import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Design from "./pages/Design/Design";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import FrontEnd from "./pages/FrontEnd/FrontEnd";
import Footer from "./components/footer/Footer";
import "./index.css";
import axios from "axios";
import Book from "./pages/book/Book";

// class App extends Component {
// state = {
//   livros: []
// };
const App = () => {
  const [livros, setLivros] = useState(
    [
      {
        "id": "9788575227268",
        "isbn": "978-85-7522-726-8",
        "titulo": "Dominando o Android com Kotlin",
        "slug": "dominando-o-android-com-kotlin",
        "autor": "Nelson Glauber",
        "categoria": "programacao",
        "ano": "2019",
        "paginas": "1064",
        "preco": "159",
        "descricao": "O Android é a plataforma do Google para dispositivos móveis que se tornou líder absoluta no mercado mundial, e a quantidade de recursos disponibilizada para os desenvolvedores permite criar uma envolvente e estimulante interação do usuário com o dispositivo. Dominando o Android com Kotlin apresenta por meio de exemplos práticos, desde conceitos mais básicos até as mais avançadas técnicas de desenvolvimento de aplicativos para a plataforma mobile do Google."
      },
      {
        "id": "9788575227145",
        "isbn": "978-85-7522-714-5",
        "titulo": "Introdução à linguagem Python",
        "slug": "introdução-a-linguagem-python",
        "autor": "José Augusto N. G. Manzano",
        "categoria": "programacao",
        "ano": "2018",
        "paginas": "352",
        "preco": "73",
        "descricao": "Este livro apresenta a linguagem Python 3 de forma básica e introdutória para leitores e estudantes de programação que não possuem conhecimentos prévios da linguagem. Neste texto encontra-se a apresentação de detalhes e informações sobre as características básicas da linguagem, tipos de dados built-in; variáveis; constantes internas; operadores aritméticos; expressões aritméticas; operações de entrada e saída; condições; decisões; operadores relacionais e lógicos; desvios condicionais; ações de divisibilidade; expressões condicionais; laços; sub-rotinas como funções e procedimentos; passagem de parâmetro; funções lambda; programação com módulos; tratamento de dados; estruturas de dados; orientação a objetos; manipulação de arquivos externos; constantes para localização geográfica; conversões entre bases numéricas; simulação para definição de constantes; uso do modo terminal ANSI; plataforma cruzada e aplicação com geometria de tartaruga (turtle graphics)."
      },
      {
        "id": "9788575226919",
        "isbn": "978-85-7522-691-9",
        "titulo": "PHP Programando com Orientação a Objetos",
        "slug": "php-programando-com-orientacao-a-objetos",
        "autor": "Pablo Dall’Oglio",
        "categoria": "programacao",
        "ano": "2018",
        "paginas": "568",
        "preco": "99",
        "descricao": "O PHP é uma das linguagens mais utilizadas no mundo. Sua popularidade se deve à flexibilidade da linguagem e a um conjunto abrangente de classes e funções que permitem desde a criação de simples portais até complexas aplicações de negócios corporativas. O PHP é usado por experientes programadores, que utilizam o que há de mais poderoso em termos de orientação a objetos, padrões de projeto e frameworks, mas também por iniciantes, que ainda usufruem de conceitos de programação estruturada e querem aprender mais.  Um dos principais objetivos deste livro é permitir que o desenvolvedor aprenda a criar uma aplicação totalmente orientada a objetos, mas que também compreenda os padrões de projeto envolvidos nos principais frameworks na atualidade. Com este livro, você aprenderá não somente os fundamentos da orientação a objetos, mas também a criar componentes que formarão um framework que será usado na construção de uma aplicação de negócios."
      },
      {
        "id": "9788575225509",
        "isbn": "978-85-7522-550-9",
        "titulo": "Laravel para ninjas",
        "slug": "laravel-para-ninjas",
        "autor": "Ademir C. Gabardo",
        "categoria": "programacao",
        "ano": "2017",
        "paginas": "184",
        "preco": "52",
        "descricao": "As aplicações web modernas têm evoluído rapidamente. A demanda por ferramentas capazes de entregar conteúdo dinâmico como APIs REST e de frameworks para consumo de dados como Angular.JS e similares é crescente. Nesse contexto, frameworks modernos como o Laravel são ferramentas indispensáveis para a produção de sistemas web em tempo hábil, com qualidade e de fácil manutenção. Os exemplos são construídos de maneira incremental, de modo que ao longo do desenvolvimento o leitor se familiarize com os recursos e o método de trabalho do framework de forma prática e intuitiva. Os arquivos de código-fonte dos exemplos estão disponíveis no GitHub em duas versões compatíveis com a versão mais atual do framework."
      },
      {
        "id": "9788575228142",
        "isbn": "978-85-7522-814-2",
        "titulo": "Padrões para Kubernetes",
        "slug": "padroes-para-kubernetes",
        "autor": "Bilgin Ibryam / Roland Huß",
        "categoria": "programacao",
        "ano": "2019",
        "paginas": "272",
        "preco": "75",
        "descricao": "O modo como os desenvolvedores projetam, desenvolvem e executam software mudou significativamente com a evolução dos microsserviços e dos containers. Essas arquiteturas modernas oferecem novas primitivas distribuídas que exigem um conjunto diferente de práticas, distinto daquele com o qual muitos desenvolvedores, líderes técnicos e arquitetos estão acostumados. Este guia apresenta padrões comuns e reutilizáveis, além de princípios para o design e a implementação de aplicações nativas de nuvem no Kubernetes. Cada padrão inclui uma descrição do problema e uma solução específica no Kubernetes. Todos os padrões acompanham e são demonstrados por exemplos concretos de código. Este livro é ideal para desenvolvedores e arquitetos que já tenham familiaridade com os conceitos básicos do Kubernetes, e que queiram aprender a solucionar desafios comuns no ambiente nativo de nuvem, usando padrões de projeto de uso comprovado."
      },
      {
        "id": "9788575228098",
        "isbn": "978-85-7522-809-8",
        "titulo": "Construindo Chatbots com Python",
        "slug": "construindo-chatbots-com-python",
        "autor": "Sumit Raj",
        "categoria": "programacao",
        "ano": "2019",
        "paginas": "192",
        "preco": "65",
        "descricao": "Construa seu próprio chatbot usando Python e ferramentas open source. Este livro começa com uma introdução aos chatbots na qual você obterá informações vitais sobre sua arquitetura. Em seguida, começará imediatamente a usar o Natural Language Processing (NLP) com a ajuda do Natural Language Toolkit (NLTK) para construir uma plataforma de processamento de linguagem personalizada para seu chatbot. Com essa base inicial, examinará diferentes técnicas de Natural Language Processing para selecionar a que lhe for mais adequada.  O próximo estágio é aprender a construir um chatbot usando a plataforma API.ai e definir suas intenções e entidades. No decorrer desse exemplo, você aprenderá a ativar a comunicação com o bot e também examinará os importantes tópicos de sua integração e implantação."
      },
      {
        "id": "9788575228050",
        "isbn": "978-85-7522-805-0",
        "titulo": "Problemas Clássicos de Ciência da Computação com Python",
        "slug": "problemas-classicos-de-ciencia-da-computacao-com-python",
        "autor": "David Kopec",
        "categoria": "programacao",
        "ano": "2019",
        "paginas": "272",
        "preco": "75",
        "descricao": "Problemas de ciência da computação aparentemente novos ou ímpares muitas vezes têm raízes em algoritmos clássicos, nas técnicas de programação e em princípios de engenharia. E as abordagens clássicas ainda são a melhor forma de solucioná-los! Compreender essas técnicas em Python faz com que o seu potencial para o sucesso se expanda nas áreas de desenvolvimento web, manipulação de dados, aprendizado de máquina e em outras áreas. Problemas Clássicos de Ciência da Computação com Python permite aprimorar suas habilidades na resolução de problemas de ciência da computação usando Python, com cenários, exercícios e algoritmos consagrados pelo tempo. Você enfrentará dezenas de desafios de programação, os quais variam de tarefas simples como algoritmos de busca binária a clustering de dados usando k-means. Em particular, você apreciará a sensação de satisfação ao resolver problemas que conectam a ciência da computação com questões reais associadas a aplicativos, dados e desempenho, e até mesmo com o sucesso em sua próxima entrevista de emprego!"
      },
      {
        "id": "9788575227800",
        "isbn": "978-85-7522-780-0",
        "titulo": "Internet das Coisas para Desenvolvedores",
        "slug": "internet-das-coisas-para-desenvolvedores",
        "autor": "Ricardo da Silva Ogliari",
        "categoria": "programacao",
        "ano": "2019",
        "paginas": "264",
        "preco": "65",
        "descricao": "A internet das coisas é um dos mais promissores e revolucionários conceitos presentes na ciência da computação. Porém, o conhecimento necessário para trabalhar com plataformas de hardware e microcontroladores nem sempre é de domínio de profissionais com carreira mais direcionada ao mundo do software. Sendo assim, existe uma lacuna que impede que esses desenvolvedores usufruam completamente essa nova onda da internet das coisas. Este livro busca diminuir tal distância. O grande objetivo é mostrar ao leitor como podemos compartilhar as informações oriundas de sensores e interagir com atuadores, usando linguagens e plataformas com forte presença no mundo contemporâneo, como Java, JavaScript, Firebase e linguagem C. O livro é de interesse, principalmente, para desenvolvedores de sistema que querem aplicar seus conhecimentos a fim de entrar de cabeça no mundo da Internet das Coisas. Porém, também tem forte apelo a profissionais com bastante conhecimento em plataformas como o Arduino, NodeMCU e Raspberry Pi, os quais desejam fazer o caminho inverso. Ou seja, saber mais sobre como integrar seu conhecimento e expandir o poder de suas placas microcontroladas."
      },
      {
        "id": "9788575226773",
        "isbn": "978-85-7522-677-3",
        "titulo": "Node Essencial",
        "slug": "node-essencial",
        "autor": "Ricardo R. Lecheta",
        "categoria": "programacao",
        "ano": "2018",
        "paginas": "216",
        "preco": "54",
        "descricao": "Node.js é uma das plataformas de desenvolvimento mais conhecidas do mercado, que utiliza JavaScript como linguagem de programação e torna o desenvolvimento de web services RESTful muito produtivo. Neste livro, estudaremos JavaScript e Node.js desde o básico, utilizando uma metodologia passo a passo por meio da qual desenvolveremos um projeto que será continuado em cada capítulo. O objetivo do livro é ensinar a criar uma API completa de web services RESTful de forma simples e prática, integrada aos bancos de dados MySQL e MongoDB, utilizando as boas práticas de desenvolvimento e organização do projeto. No final do livro, você saberá o básico sobre como criar web services em Node.js e, com certeza, ficará entusiasmado para aprender mais sobre essa plataforma."
      },
      {
        "id": "9788575228074",
        "isbn": "978-85-7522-807-4",
        "titulo": "Introdução ao Pentest",
        "slug": "introducao-ao-pentest",
        "autor": "Daniel Moreno",
        "categoria": "programacao",
        "ano": "2019",
        "paginas": "384",
        "preco": "89",
        "descricao": "Introdução ao Pentest irá capacitar o leitor a entender e a realizar o pentest – uma auditoria minuciosa sobre falhas e vulnerabilidades em computadores e redes – e, assim, buscar a melhor forma de solucionar os problemas encontrados. Tendo como base a metodologia Kali Linux para o ensino do pentest, a qual é extremamente didática e..."
      },
      {
        "id": "9788575226322",
        "isbn": "978-85-7522-632-2",
        "titulo": "CSS Grid Layout",
        "slug": "css-grid-layout",
        "autor": "Maurício Samy Silva",
        "categoria": "frontend",
        "ano": "2017",
        "paginas": "176",
        "preco": "45",
        "descricao": "A criação de Layout CSS sempre foi uma tarefa trabalhosa, mas agora os profissionais têm uma ferramenta poderosa ao seu alcance, o CSS Grid Layout, uma nova especificação do W3C, que veio para resolver praticamente todos os problemas de posicionamento na tela. Utilizando um novo método de layout CSS, bidimensional, com linhas e colunas, mais..."
      },
      {
        "id": "9788575224038",
        "isbn": "978-85-7522-403-8",
        "titulo": "HTML5 - 2ª Edição",
        "slug": "html5-2a-edicao",
        "autor": "Maurício Samy Silva",
        "categoria": "frontend",
        "ano": "2014",
        "paginas": "336",
        "preco": "75",
        "descricao": "HTML5 é a linguagem de marcação que amplia de forma surpreendente as funcionalidades da HTML, alterando de maneira significativa como você desenvolve para a web. Trata-se da mais extensa especificação para a HTML focada em criar funcionalidades para desenvolvimento não só de sites, mas também de aplicações de internet rica (RIA). Maujor..."
      },
      {
        "id": "9788575223925",
        "isbn": "978-85-7522-392-5",
        "titulo": "Web Design Responsivo",
        "slug": "web-design-responsivo",
        "autor": "Maurício Samy Silva",
        "categoria": "frontend",
        "ano": "2014",
        "paginas": "336",
        "preco": "73",
        "descricao": "Este livro foi escrito para pessoas envolvidas na criação de sites tanto na área de design quanto na de desenvolvimento e programação, que desejam criar interfaces usáveis e acessíveis em qualquer dispositivo independentemente de suas características, isto é, que se adaptem às mais variadas resoluções de tela. O objetivo do livro é fornecer..."
      },
      {
        "id": "9788575222898",
        "isbn": "978-85-7522-289-8",
        "titulo": "CSS3",
        "slug": "css3",
        "autor": "Maurício Samy Silva",
        "categoria": "frontend",
        "ano": "2011",
        "paginas": "496",
        "preco": "89",
        "descricao": "CSS3 ultrapassou o status de proposta de uma tecnologia que prometia revolucionar a forma como estilizamos documentos para a web e deve obrigatoriamente fazer parte do dia a dia dos designers e desenvolvedores web. Muitas das funcionalidades das CSS3 estão desenvolvidas o bastante para ser empregadas em fase de produção, quer com suporte nativo,..."
      },
      {
        "id": "9788575221662",
        "isbn": "978-85-7522-166-2",
        "titulo": "Criando Sites com HTML",
        "slug": "criando-sites-com-html",
        "autor": "Maurício Samy Silva",
        "categoria": "frontend",
        "ano": "2008",
        "paginas": "432",
        "preco": "75",
        "descricao": "Construir sites em conformidade com os Padrões Web do W3C, mais do que uma opção de desenvolvimento, é uma exigência do mercado. Resgatar a finalidade original da linguagem de marcação HTML, tal como idealizada pelo seu inventor, Tim Berners-Lee é a palavra-chave que norteia o moderno conceito de escrever HTML. Este livro descreve de forma..."
      },
      {
        "id": "9788575221396",
        "isbn": "978-85-7522-139-6",
        "titulo": "Construindo Sites com CSS e (X)HTML",
        "slug": "construindo-sites-com-css-e-(x)html",
        "autor": "Maurício Samy Silva",
        "categoria": "frontend",
        "ano": "2007",
        "paginas": "448",
        "preco": "75",
        "descricao": "Seja você um desenvolvedor experiente, um acadêmico, um estudante da área relacionada à construção de sites para web ou um iniciante, Construindo sites com CSS e (X)HTML ampliará seus conhecimentos e será uma fonte de consulta valiosa no seu dia-a-dia de trabalho. Este livro aborda a técnica de construção de sites baseada nas Web Standards..."
      },
      {
        "id": "9788575227305",
        "isbn": "978-85-7522-730-5",
        "titulo": "Web Scraping com Python - 2ª edição",
        "slug": "web-scraping-com-python-2a-edicao",
        "autor": "Ryan Mitchell",
        "categoria": "programacao",
        "ano": "2019",
        "paginas": "328",
        "preco": "93",
        "descricao": "Se a programação é mágica, o web scraping certamente é uma forma de magia. Ao escrever um programa automatizado simples, é possível consultar servidores web, requisitar dados e interpretá-los a fim de extrair as informações desejadas. A edição ampliada deste livro prático não só apresenta uma introdução ao web scraping, como também..."
      },
      {
        "id": "9788575226834",
        "isbn": "978-85-7522-683-4",
        "titulo": "Primeiros Passos com a Linguagem Rust",
        "slug": "primeiros-passos-com-a-linguagem-rust",
        "autor": "José Augusto N. G. Manzano",
        "categoria": "programacao",
        "ano": "2018",
        "paginas": "312",
        "preco": "69",
        "descricao": "Este livro apresenta a linguagem Rust de forma básica e introdutória para leitores e estudantes de programação que não têm conhecimentos prévios da linguagem. Assuntos abordados neste livro - tipos de dados; variáveis mutáveis e imutáveis; constantes; operadores aritméticos; expressões aritméticas; operações..."
      },
      {
        "id": "9788575224441",
        "isbn": "978-85-7522-444-1",
        "titulo": "Java Guia do Programador - 3ª Edição",
        "slug": "java-guia-do-programador-3a-edicao",
        "autor": "Peter Jandl Junior",
        "categoria": "programacao",
        "ano": "2015",
        "paginas": "704",
        "preco": "119",
        "descricao": "Desenvolva aplicações usando o Java 8!Explore todas as vantagens da programação orientada a objetos por meio da elegante sintaxe Java. Aprenda a usar sobrecarga, herança, classes abstratas, polimorfismo, interfaces, genéricos e expressões lambda.Construa aplicações gráficas utilizando componentes Swing, tornando-as multitarefa com as threads..."
      },
      {
        "id": "9788575228128",
        "isbn": "978-85-7522-812-8",
        "titulo": "Redação Estratégica para UX",
        "slug": "redacao-estrategica-para-ux",
        "autor": "Torrey Podmajersky",
        "categoria": "design",
        "ano": "2019",
        "paginas": "184",
        "preco": "63",
        "descricao": "Quando uma organização depende de seres humanos comportando-se de maneira específica – comprando ingressos, jogando ou usando o transporte público –, as palavras bem colocadas são mais eficientes. Como escolher as melhores palavras? E como saber se vão funcionar? Com este livro prático, você vai aprender como redigir de forma estratégica..."
      },
      {
        "id": "9788575227763",
        "isbn": "978-85-7522-776-3",
        "titulo": "UX Design",
        "slug": "ux-design",
        "autor": "Will Grant",
        "categoria": "design",
        "ano": "2019",
        "paginas": "208",
        "preco": "63",
        "descricao": "Queremos que nossa UX seja genial. Queremos criar ótimas experiências de usuário. Queremos que a UX conduza o sucesso de nosso negócio com produtos de software proveitosos e usáveis. Este livro é baseado no conhecimento e treinamento de Jakob Nielsen e Don Norman para nos ajudar a construir corretamente nossa UX – de 101 formas! UX Design..."
      },
      {
        "id": "9788575223666",
        "isbn": "978-85-7522-366-6",
        "titulo": "Design centrado no usuário",
        "slug": "design-centrado-no-usuario",
        "autor": "Travis Lowdermilk",
        "categoria": "design",
        "ano": "2013",
        "paginas": "184",
        "preco": "53",
        "descricao": "Design centrado no usuário apresenta uma visão única sobre a forma como pesquisas junto aos usuários são combinadas com os conceitos de design, focando na lógica fundamental e no conhecimento por trás do assunto. O livro é presença obrigatória na biblioteca de qualquer pessoa que esteja criando produtos para seus usuários, ajudando a compreender..."
      },
      {
        "id": "9788575225127",
        "isbn": "978-85-7522-512-7",
        "titulo": "Aprendendo Material Design",
        "slug": "aprendendo-material-design",
        "autor": "Kyle Mew",
        "categoria": "design",
        "ano": "2016",
        "paginas": "200",
        "preco": "69",
        "descricao": "A linguagem Material Design, do Google, impressionou tanto o mundo de desenvolvimento quanto o de design. Agora disponível em muito mais plataformas além do Android, o Material Design utiliza cor, luz e movimento não apenas para gerar interfaces bonitas, mas também para proporcionar uma navegação intuitiva para o usuário. O livro Aprendendo"
      },
      {
        "id": "9788575224533",
        "isbn": "978-85-7522-453-3",
        "titulo": "Design Thinking & Thinking Design",
        "slug": "design-thinking-e-hinking-design",
        "autor": "Adriana Melo / Ricardo Abelheira",
        "categoria": "design",
        "ano": "2015",
        "paginas": "208",
        "preco": "55",
        "descricao": "Você concorda que o atual mundo dos negócios está exigindo inovação, mais convívio e familiaridade com os clientes e menos submissão aos números? Então, este livro é para você.“Design Thinking é uma metodologia que aplica ferramentas do design para solucionar problemas complexos. Propõe o equilíbrio entre o raciocínio associativo, que..."
      },
      {
        "id": "9788575224380",
        "isbn": "978-85-7522-438-0",
        "titulo": "Fundamentos de HTML5 e CSS3",
        "slug": "fundamentos-de-html5-e-css3",
        "autor": "Maurício Samy Silva",
        "categoria": "frontend",
        "ano": "2015",
        "paginas": "304",
        "preco": "69",
        "descricao": "O livro Fundamentos de HTML5 e CSS3 tem o objetivo de fornecer aos iniciantes e estudantes da área de desenvolvimento web conceitos básicos e fundamentos da marcação HTML e estilização CSS, para a criação de sites, interfaces gráficas e aplicações para a web.Maujor aborda as funcionalidades da HTML5 e das CSS3 de forma clara, em linguagem"
      },
      {
        "id": "9788575224106",
        "isbn": "978-85-7522-410-6",
        "titulo": "Crie seu próprio site",
        "slug": "crie-seu-proprio-site",
        "autor": "Nate Cooper",
        "categoria": "frontend",
        "ano": "2015",
        "paginas": "264",
        "preco": "65",
        "descricao": "Crie seu próprio site é uma introdução ilustrada e divertida ao básico sobre a criação de um site. Junte-se a Kim e a sua cachorrinha Tofu enquanto ela aprende HTML – a linguagem das páginas web – e CSS – a linguagem usada para estilizá-las – com o Guru da Web e com Glinda, a Boa Bruxa do CSS.Depois de aprender o básico, Kim viaja..."
      },
      {
        "id": "9788575223406",
        "isbn": "978-85-7522-340-6",
        "titulo": "Análise e Design Orientados a Objetos",
        "slug": "analise-e-design-orientados-a-objetos",
        "autor": "Hélio Engholm Jr.",
        "categoria": "design",
        "ano": "2013",
        "paginas": "376",
        "preco": "69",
        "descricao": "Este livro mostra como utilizar as melhores práticas na análise, no design e no desenvolvimento de aplicações orientadas a objetos, utilizando-se da linguagem unificada de modelagem UML. Será mostrado, passo a passo, como analisar, modelar e desenvolver aplicações orientadas a objetos, com exemplos de todas as etapas do processo de desenvolvimento..."
      },
      {
        "id": "9788575223192",
        "isbn": "978-85-7522-319-2",
        "titulo": "Padrões de Design para Aplicativos Móveis",
        "slug": "padroes-de-design-para-aplicativos-moveis",
        "autor": "Theresa Neil",
        "categoria": "design",
        "ano": "2012",
        "paginas": "208",
        "preco": "59",
        "descricao": "Quando você está sob pressão para produzir um aplicativo móvel com um bom design e fácil de navegar, não há tempo para reinventar a roda. Este livro conciso proporciona uma referência útil para 70 padrões de design de aplicativos móveis, ilustrada por mais de 400 screenshots de aplicativos atuais para iOS, Android, BlackBerry, WebOS, Windows..."
      },
      {
        "id": "9788575223581",
        "isbn": "978-85-7522-358-1",
        "titulo": "Padrões de Projeto para o Android",
        "slug": "padroes-de-projeto-para-o-android",
        "autor": "Greg Nudelman",
        "categoria": "design",
        "ano": "2013",
        "paginas": "456",
        "preco": "93",
        "descricao": "O ecossistema Android, neste exato momento, vive um perfeito turbilhão que mistura os fatores necessários para o crescimento explosivo em curto prazo e o domínio do mercado no longo prazo. Chegou o momento de começar a projetar e desenvolver aplicativos Android 4 e este livro é sobre aquilo que funciona - padrões. Aqui estão 58 padrões essenciais..."
      }
    ]
  );

  // async componentDidMount() {
  //   try {
  //     const { data: livros } = await axios.get("/api/todosOsLivros.json");
  //     this.setState({ livros });
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({ erro: "Mensagem de erro" });
  //   }
  // }

  // async componentDidMount() {
  //   try {
  //     const { data: livros } = await axios.get("/api/todosOsLivros.json");
  //     this.setState({ livros });
  //   } catch (error) {
  //     console.log(error);
  //     document
  //       .querySelectorAll('.main')[0]
  //       .insertAdjacentHTML(
  //         "beforeend",
  //         "<p className='erro'>Mensagem de erro </p>"
  //       );
  //   }
  // }


  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/" element={<Home livros={livros} />} />
        <Route
          path="/frontend" element={<FrontEnd livros={livros} />} />
        <Route path="/programacao" element={<Schedule livros={livros} />} />
        <Route path="/design" element={<Design livros={livros} />} />
        <Route
          path="/catalogo"
          element={<Catalog livros={livros} />}
        />
        <Route path="/livro/:livroSlug"
          element={<Book />}
          // element={props => {
          //   const livro = livros.find(
          //     livro => livro.slug === props.match.params.livroSlug
          //   );
          //   if (livro) return <Book livro={livro} />;
          //   else return <NotFound />;
          // }}
        />
        <Route Component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;