import './Sobre.css'
import Header from '../../components/Header/Header'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub, FaInstagram } from 'react-icons/fa';




function Sobre() {
    return (
        <>
            <Header />
            <div className='conteudo'>
                <h1 className='aboutTitle'>Sobre</h1>
                <h1 className='about'>Site desenvolvido pelos amigos Andrey e Breno.</h1>
                <h2 className='subtitle'>Quer um site assim? Entre em contato!</h2>
                
            </div>
            <div className="socialmedia">
                <a href="https://github.com/AndreyMouraGouvea" class="link" target="_new">
                    <i class="fa-brands fa-linkedin github">
                    <FaGithub color='#FFF' className='icon'/>
                    </i>
                </a>
                <a href="https://www.instagram.com/andrey_moura_gouvea/" class="link" target="_new">
                    <i class="instagram">
                    <FaInstagram color='#FFF' className='icon'/>
                    </i>
                </a>
                <a href="https://github.com/Brenoajz" class="link" target="_new">
                    <i class="github">
                    <FaGithub color='#FFF' className='icon'/>
                    </i>
                </a>
                <a href="https://www.instagram.com/breno.pn/" class="link" target="_new">
                    <i class="instagram">
                    <FaInstagram color='#FFF' className='icon'/>
                    </i>
                </a>
            </div>
        </>
    )
}

export default Sobre
