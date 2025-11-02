
import '../App.css'; 


import logo from '../assets/logo.png'; 

export default function Header() {

    return (
        <header> {}
            {}
            <div className="divHeader"> {}
                <img src={logo} alt="Sil Fazendo Arte" className="logo" /> {}
                <nav> {}
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