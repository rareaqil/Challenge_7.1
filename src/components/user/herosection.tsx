const HeroSection = () => {
    return (
        <section id="hero-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="hero-desc container-md">
                        <div className="hero-desc--text col-md-6 col-sm-12 col-xs-12">
                            <h1>Sewa &amp; Rental Mobil Terbaik di Kawasan Bandung</h1>
                            <p>
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                                kualitas terbaik dengan harga terjangkau. selalu siap melayani
                                kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            <a href="/cars" className="btn btn-success">Mulai Sewa Mobil</a>
                        </div>
                    </div>
                    <div className="hero-ills ol-md-6 col-md-6 col-sm-12 col-xs-12 justify-content-end">
                        <img src="https://i.ibb.co/Krg5rVN/img-car.png" alt="Hero-Image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
  
    );
}
export default HeroSection;