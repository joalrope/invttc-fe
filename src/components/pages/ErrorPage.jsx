import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/errorpage.scss';

export const ErrorPage = () => {

    // let location = useLocation();

    return (
        <section className="page_404">
            <h1 className="text-center">Error 404</h1>
            <div className="four_zero_four_bg">
            </div>
            <div className="contant_box_404">
                <h3 className="lost">Parece que estás perdido</h3>
                <p className="unabled">La página que buscas no está disponible!</p>
                <Link to="/" className="link_404">Ir a Inicio</Link>
            </div>
            
        </section>
    )
}
