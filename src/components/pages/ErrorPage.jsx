import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/errorpage.scss';

export const ErrorPage = () => {

  return (
    <section className="page_404">
      <h1 className="text-centered">Error 404</h1>
      <div className="four_zero_four_bg">
      </div>
      <div className="contant_box_404">
        <h3 className="lost text-center">Parece que estás perdido</h3>
        <p className="unabled text-center">La página que buscas no está disponible!</p>
        <Link to="/login" className="link_404 text-center">Ir a Inicio</Link>
      </div>
    </section>
    )
}
