
import '../App.css'; 
import { useState } from 'react';
import logo from '../assets/logo.png'; 

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <header> {}
            {}
            <div className="divHeader"> {}
                <img src={logo} alt="Sil Fazendo Arte" className="logo" /> {}

                
                <button className='menu-toogle' onClick={alternarMenu}>
                    ☰
                </button>
                <nav className={menuAberto ? 'menu ativo' : 'menu'}> {}
                    <ul> {}
                        <li>Home</li> {}
                        <li><a href="produtos.html">Produtos</a></li> {}
                        <li><a href="contatos.html">Contato</a></li> {}
                        <li>|</li> {}
                        <li><a href="encomendas.html">Encomendas</a></li> {}
                    </ul> {}
                </nav> {}
            </div> {}
        </header> 
    );
} 