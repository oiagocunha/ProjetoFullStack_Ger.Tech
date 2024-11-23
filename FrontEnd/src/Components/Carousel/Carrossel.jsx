import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do pacote react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o arquivo CSS do Bootstrap para estilização
import './Carrossel.css'; // Importa o arquivo CSS personalizado para o componente Carrossel
import React from 'react'; // Importa a biblioteca React
import Ornament from '../../assets/Images/Ornament.png'; // Importa a imagem de ornamento

function Carrossel() { // Define o componente funcional Carrossel
  return ( // Renderiza o componente Carousel com os itens do carrossel

    <Carousel> {/* Renderiza o componente Carousel */}
      <Carousel.Item interval={3000}> {/* Define um item do carrossel com intervalo de 3000ms */}
        <div className="carousel-content"> {/* Div para o conteúdo do carrossel */}
          <div className="carousel-image"> {/* Div para a imagem do carrossel */}
            <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Tênis" className='Tênis'/> {/* Imagem do item do carrossel */}
            <img src={Ornament} alt="Tênis" className='Ornament'/> {/* Imagem do item do carrossel */}
          </div>
          <div className="carousel-text"> {/* Div para o texto do carrossel */}
            <h6 style={{ color: '#f6aa1c' }}>Melhores ofertas personalizadas</h6> {/* Título pequeno com estilo inline */}
            <h2 className='text'>Queima de estoque Nike 🔥</h2> {/* Título principal com classe CSS */}
            <p>Consequat culpa exercitation mollit nisi excepteur do do <br /> tempor laboris eiusmod irure consectetur.</p> {/* Parágrafo com descrição */}
            <button className="btn btn-primary">Ver ofertas</button> {/* Botão com classe CSS do Bootstrap */}
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item interval={3000}> {/* Repete o mesmo bloco para os próximos itens do carrossel */}
        <div className="carousel-content">
          <div className="carousel-image">
          <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Tênis" className='Tênis'/> {/* Imagem do item do carrossel */}
          <img src={Ornament} alt="Tênis" className='Ornament'/> {/* Imagem do item do carrossel */}
          </div>
          <div className="carousel-text">
            <h6 style={{ color: '#f6aa1c' }}>Melhores ofertas personalizadas</h6>
            <h2 className='text'>Queima de estoque Nike 🔥</h2>
            <p>Consequat culpa exercitation mollit nisi excepteur do do <br /> tempor laboris eiusmod irure consectetur.</p>
            <button className="btn btn-primary">Ver ofertas</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="carousel-content">
          <div className="carousel-image">
          <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Tênis" className='Tênis'/> {/* Imagem do item do carrossel */}
          <img src={Ornament} alt="Tênis" className='Ornament'/> {/* Imagem do item do carrossel */}
          </div>
          <div className="carousel-text">
            <h6 style={{ color: '#f6aa1c' }}>Melhores ofertas personalizadas</h6>
            <h2 className='text'>Queima de estoque Nike 🔥</h2>
            <p>Consequat culpa exercitation mollit nisi excepteur do do <br /> tempor laboris eiusmod irure consectetur.</p>
            <button className="btn btn-primary">Ver ofertas</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="carousel-content">
          <div className="carousel-image">
          <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Tênis" className='Tênis'/> {/* Imagem do item do carrossel */}
          <img src={Ornament} alt="Tênis" className='Ornament'/> {/* Imagem do item do carrossel */}
          </div>
          <div className="carousel-text">
            <h6 style={{ color: '#f6aa1c' }}>Melhores ofertas personalizadas</h6>
            <h2 className='text'>Queima de estoque Nike 🔥</h2>
            <p>Consequat culpa exercitation mollit nisi excepteur do do <br /> tempor laboris eiusmod irure consectetur.</p>
            <button className="btn btn-primary">Ver ofertas</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel; // Exporta o componente Carrossel como padrão