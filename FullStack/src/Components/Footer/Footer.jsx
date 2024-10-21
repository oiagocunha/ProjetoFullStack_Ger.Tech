import styles from '../Footer/Footer.module.css'
// import img from "../images/logo.png"
// import imgFace from "../images/logoFacebook.png"

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterEnd}>

                <nav className='navegacao'>
                    
                    {/* <img src={img} alt="Logo da Digital College" /> */}

                    <div className='p'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                            elit, sed do eiusmod tempor<br/> 
                            incididunt ut labore et dolore.
                        </p>
                    </div>

                    <div className='RedesSociais'>
                        <a href="#">Facebook</a><br/>
                        <a href='#'>Instagram</a><br/>
                        <a href='#'>Twitter</a><br/>
                    </div>
                
                    <div className='Informacao'>
                       <h2>
                          Informação
                        </h2>

                        <a href='#'>Sobre Drip Store</a><br/>
                        <a href='#'>Segurança</a><br/>
                        <a href='#'>Wishilist</a><br/>
                        <a href='#'>Blog</a><br/>
                        <a href='#'>Trabalhe conoscos</a><br/>
                        <a href='#'>Meus Pedidos</a><br/>
                    </div>

                    <div className='Categorias'>
                        <h2>
                            Categorias
                        </h2>

                        <a href='#'>Camisetas</a><br/>
                        <a href='#'>Calças</a><br/>
                        <a href='#'>Bonés</a><br/>
                        <a href='#'>Headphones</a><br/>
                        <a href='#'>Tênis</a><br/>
                    </div>

                    <div className='Contato'>
                        <h2>
                            Contato
                        </h2>
                        <a href='https://maps.app.goo.gl/S9MCTiXD1CYifJVQ7'>
                            Av. Santos Dumont, 1510 - 1<br/> 
                            andar - Aldeota, Fortaleza -<br/>
                            CE, 60150-161
                        </a>
                        <a href='#'>(85) 3051-3411</a>
                    </div>

                    <div className='content'>
                        <h5>
                            @ 2022 Digital College
                        </h5>
                    </div>

                </nav>
            </div>
       </footer>
    )
}

export default Footer