import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Style from './NavBar.module.css';
import { FaUser } from 'react-icons/fa';
import Suporte from  '../dashboard/Suporte'
import MinhaConta from '../register/MinhaConta'

const NavBar = ({ Nome}) => {
  const navigate = useNavigate();

  const handleNavigateMinhaConta = () => {
    navigate('/minha-conta');
  };

const handlenavigateSuporte = () => {
  navigate('/suporte')
}

  return (
    <>
      <nav className={Style.navbar}>
        <ul className={Style.list}>
          {/* Logo à esquerda */}
          <li className={`${Style.item} ${Style.logoItem}`}>
            <Link to='/'>
              <img className={Style.logo} src='./rockcultura.png' alt='Logo' />
            </Link>
          </li>

          {/* Links centrais */}
          <li className={Style.item}>
            <Link to='/'>INÍCIO</Link>
          </li>
          <li className={Style.item} onClick={handlenavigateSuporte}>
            <Link to='/suporte'>FALE CONOSCO</Link>
          </li>
          <li className={Style.item}>
            <Link to='/meu-carrinho'>MEU CARRINHO</Link>
          </li>

          {/* Ícone de Minha Conta */}
          <li className={`${Style.item} ${ Style.account}`}>
            <Link to='/minha-conta'>
            <FaUser className={Style.userIcon} oncClick={handleNavigateMinhaConta}/>
              <p>{Nome}</p> {/* Exibe o nome do usuário */}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
