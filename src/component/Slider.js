
const Slider = ()=>{
return(
    <>
    <section id="slider">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#slider-carousel" data-slide-to="1"></li>
                    </ol>
                    
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="col-sm-6">
                                <h1><span>E</span>-MALL</h1>
                                <h2>عرض منتج 1</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <button type="button" className="btn btn-default get">احصل عليها الآن</button>
                            </div>
                            <div className="col-sm-6">
                                <img src="assest/images/slider/11.png" className="girl img-responsive" alt="" />
                                <img src="assest/images/home/pricing.png"  className="pricing" alt="" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-sm-6">
                                <h1><span>E</span>-MALL</h1>
                                <h2>عرض منتج 2</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <button type="button" className="btn btn-default get">احصل عليها الآن</button>
                            </div>
                            <div className="col-sm-6">
                                <img src="assest/images/slider/22.png" className="girl img-responsive" alt="" />
                                <img src="assest/images/home/pricing.png"  className="pricing" alt="" />
                            </div>
                        </div>
                    
                        
                    </div>
                    
                    <a href="/#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                        <i className="fa fa-angle-right"></i>
                    </a>
                    <a href="/#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                        <i className="fa fa-angle-left"></i>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</section>
</>
)
}
export default Slider;