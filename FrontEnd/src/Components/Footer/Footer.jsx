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
        <footer className={styles.Footer}>
            <nav className={styles.navegacao}>
                <div>
                    <img src={img} alt="Logo da Digital College" />
                    <div className={styles.p}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore.
                        </p>
                    </div>
                    <div className={styles.RedesSociais}>
                       <a href="https://www.facebook.com/digitalcollegebr/"> <img src={logoFace} alt="logo do facebook" /> </a>
                       <a href='https://www.instagram.com/digitalcollegebr/'> <img src={logoInsta} alt="logo do instagram" /> </a>
                       <a href='https://twitter.com/eaicollegers'> <img src={logoTwitt} alt="logo do twitter" /> </a>
                    </div>
                </div>
                <div className={styles.Informacao}>
                    <h2 className={styles.titulo}>
                        Informação
                    </h2>
                    <a href='https://www.amazon.com.br/tenis'>Sobre Drip Store</a>
                    <a href='https://www.amazon.com.br/ajuda'>Segurança</a>
                    <a href='https://www.amazon.com.br/'>Wishilist</a>
                    <a href='https://www.amazon.com.br/'>Blog</a>
                    <a href='https://www.amazon.com.br/gp/browse.html?node=17877554011&ld=ASBRSOA_retail_sell_header_t1&ref_=nav_cs_sell'>Trabalhe conosco</a>
                    <a href='https://www.amazon.com.br/gp/css/order-history?pd_rd_w=hLvPi&content-id=amzn1.sym.5afdc53f-753c-40fa-b3de-7a2604e29f01:amzn1.sym.5afdc53f-753c-40fa-b3de-7a2604e29f01&pf_rd_p=5afdc53f-753c-40fa-b3de-7a2604e29f01&pf_rd_r=7A6Y9RSXMV786FRCPSNR&pd_rd_wg=k5Pep&pd_rd_r=cf58cede-dbd7-413e-8b00-653ff3a3ae99&qid=1731434113&ref_=sxts_snpl_5_0_5afdc53f-753c-40fa-b3de-7a2604e29f01'>Meus Pedidos</a>
                </div>
                <div className={styles.Categorias}>
                    <h2 className={styles.titulo}>
                        Categorias
                    </h2>
                    <a href='https://www.amazon.com.br/s?k=camisas&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=27QS8ON4YDN69&sprefix=camisas%2Caps%2C218&ref=nb_sb_noss_1'>Camisetas</a>
                    <a href='https://www.amazon.com.br/s?k=cal%C3%A7as&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XK7MCPK3TBBD&sprefix=cal%C3%A7as%2Caps%2C180&ref=nb_sb_noss_1'>Calças</a>
                    <a href='https://www.amazon.com.br/s?k=bones&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Y93DBAEQ9CDN&sprefix=bones%2Caps%2C175&ref=nb_sb_noss_1'>Bonés</a>
                    <a href='https://www.amazon.com.br/s?k=Headphones&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3K7ENW5UE6SIO&sprefix=headphones%2Caps%2C332&ref=nb_sb_noss_1'>Headphones</a>
                    <a href='https://www.amazon.com.br/s?k=tenis&crid=OCWQLURWNFZZ&sprefix=tneno%2Caps%2C229&ref=nb_sb_ss_sc_1_4'>Tênis</a>
                </div>
                <div className={styles.Contato}>
                    <h2 className={styles.titulo}>
                        Contato
                    </h2>
                    <a className={styles.adress} href='https://maps.app.goo.gl/S9MCTiXD1CYifJVQ7'>
                        Av. Santos Dumont, 1510 - 1 <br/>
                        andar - Aldeota, Fortaleza - <br/> 
                        CE, 60150-161
                    </a>
                    <a href='#'>(85) 3051-3411</a>
                </div>
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