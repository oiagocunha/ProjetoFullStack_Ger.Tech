
// Importa os estilos CSS do módulo Footer.module.css
import styles from './Footer.module.css'
// Importa a imagem do logo
import img from '../../assets/Images/FooterLogo.png'
// Importa a imagem do logo do Facebook
import logoFace from '../../assets/Images/logo-facebook.png'
// Importa a imagem do logo do Instagram
import logoInsta from '../../assets/Images/logo-instagram.png'
// Importa a imagem do logo do Twitter
import logoTwitt from '../../assets/Images/logo-twitter.png'

function Footer() {
    return (
        // Elemento de rodapé com a classe CSS 'Footer'
        <footer className={styles.Footer}>
            {/* Navegação dentro do rodapé com a classe CSS 'navegacao' */}
            <nav className={styles.navegacao}>
                <div>
                    {/* Imagem do logo da Digital College */}
                    <img src={img} alt="Logo da Digital College" />
                    {/* Parágrafo com texto de descrição */}
                    <div className={styles.p}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.
                        </p>
                    </div>
                    {/* Div para ícones de redes sociais */}
                    <div className={styles.RedesSociais}>
                        {/* Ícone do Facebook */}
                        <img src={logoFace} alt="logo do facebook" /> <a href="#"></a>
                        {/* Ícone do Instagram */}
                        <img src={logoInsta} alt="logo do instagram" /> <a href='#'></a>
                        {/* Ícone do Twitter */}
                        <img src={logoTwitt} alt="logo do twitter" /> <a href='#'></a>
                    </div>
                </div>
                {/* Div para informações adicionais */}
                <div className={styles.Informacao}>
                    <h2 className={styles.titulo}>
                        Informação
                    </h2>
                    {/* Links para várias páginas de informação */}
                    <a href='#'>Sobre Drip Store</a>
                    <a href='#'>Segurança</a>
                    <a href='#'>Wishilist</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Trabalhe conosco</a>
                    <a href='#'>Meus Pedidos</a>
                </div>
                {/* Div para categorias de produtos */}
                <div className={styles.Categorias}>
                    <h2 className={styles.titulo}>
                        Categorias
                    </h2>
                    {/* Links para várias categorias de produtos */}
                    <a href='#'>Camisetas</a>
                    <a href='#'>Calças</a>
                    <a href='#'>Bonés</a>
                    <a href='#'>Headphones</a>
                    <a href='#'>Tênis</a>
                </div>
                {/* Div para informações de contato */}
                <div className={styles.Contato}>
                    <h2 className={styles.titulo}>
                        Contato
                    </h2>
                    {/* Link para o endereço no Google Maps */}
                    <a className={styles.adress} href='https://maps.app.goo.gl/S9MCTiXD1CYifJVQ7'>
                        Av. Santos Dumont, 1510 - 1 <br />
                        andar - Aldeota, Fortaleza - <br />
                        CE, 60150-161
                    </a>
                    {/* Link para o número de telefone */}
                    <a href='#'>(85) 3051-3411</a>
                </div>
                {/* Div para o conteúdo de direitos autorais */}
                <div className={styles.content}>
                    <h5>
                        @ 2022 Digital College
                    </h5>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
