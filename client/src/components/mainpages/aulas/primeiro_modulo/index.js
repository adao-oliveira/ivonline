import React from 'react';
import '../aulas.css';

function PrimeiroModulo() {
  return (
    <>
      {/* DESKTOP */}
      <div className="d-none d-lg-block">
        <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631161629/iv1_bxss9h.png"
          height="400px"
          width="1350px"
        />
      </div>
      {/* MOBILE */}
      <div className="d-lg-none">
        <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631166922/0001-7505963865_20210909_025456_0000_tqtb0p.png"
          height="400px"
          width="100%"
        />
      </div>

      <div class="container">
        <div class="alert mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <strong style={{ color: '#fff' }}>
            Após assistir as aulas preencha o formulário. Caso contrário a sua presença não será contada
          </strong>
        </div>

        {/* INICIO DAS AULAS */}

        <div class="row text-center text-lg-left">
          <div class="col-lg-4 col-md-12 mb-4">
            {/* <!--Modal 1--> */}
            <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* <!--Conteudo--> */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/cmO16ANmlQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* <!--Fechar video--> */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a class>
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631325449/primeiro-modulo/0001-7642013033_20210910_225659_0000_uiholi.png" alt="video" data-toggle="modal" data-target="#modal1" />
            </a>
            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 1</button></a></p>
            </footer>
          </div>
          {/* <!--Fim modal 1--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 2--> */}
            <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* <!--Conteudo--> */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/bVTJCc_CV0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631325648/primeiro-modulo/0001-7642140343_20210910_230031_0000_xzw6eo.png" alt="video" data-toggle="modal" data-target="#modal2" />
            </a>
            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 2</button></a></p>
            </footer>
          </div>
          {/* <!--Fim modal 2--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 3--> */}
            <div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* <!--Conteudo--> */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/6pI0L3Y7UzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631325811/primeiro-modulo/0001-7642240629_20210910_230302_0000_frz65x.png" alt="video" data-toggle="modal" data-target="#modal3" />
            </a>
            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 3</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 3--> */}

          <div class="col-lg-4 col-md-12 mb-4">
            {/* <!--Modal 4--> */}
            <div class="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* <!--Conteudo--> */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <a>
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631325918/primeiro-modulo/0001-7642301559_20210910_230445_0000_uwulxm.png" alt="video" data-toggle="modal" data-target="#modal4" style={{ opacity: '0.4' }} />
              {/* AULAS BLOQUEADA */}
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color:'#fff' }}>Formulário Aula 4</button></a></p>
            </footer> */}
          </div>
          {/* <!--Fim modal 4--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 5--> */}
            <div class="modal fade" id="modal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* Conteudo */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/D6ha4Bv_gBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              {/* AULAS BLOQUEADA */}
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631325994/primeiro-modulo/0001-7642350150_20210910_230607_0000_b2huhk.png" alt="video" data-toggle="modal" data-target="#modal4" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4> */}

              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631325994/primeiro-modulo/0001-7642350150_20210910_230607_0000_b2huhk.png" alt="video" data-toggle="modal" data-target="#modal5" />

            </a>

            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 5</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 5--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 6--> */}
            <div class="modal fade" id="modal6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* Conteudo */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/brKRoD1cd7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              {/* AULAS BLOQUEADA */}
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631326731/primeiro-modulo/0001-7642463868_20210910_230914_0000_tgghon.png" alt="video" data-toggle="modal" data-target="#modal4" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4> */}

              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631326731/primeiro-modulo/0001-7642463868_20210910_230914_0000_tgghon.png" alt="video" data-toggle="modal" data-target="#modal6" />

            </a>

            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 6</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 6--> */}

          <div class="col-lg-4 col-md-12 mb-4">
            {/* <!--Modal 7--> */}
            <div class="modal fade" id="modal7" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* Conteudo */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/WQEuLRnQhME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              {/* AULAS BLOQUEADA */}
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631326813/primeiro-modulo/0001-7642827915_20210910_231933_0000_b6e65c.png" alt="video" data-toggle="modal" data-target="#modal4" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4> */}

              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631326813/primeiro-modulo/0001-7642827915_20210910_231933_0000_b6e65c.png" alt="video" data-toggle="modal" data-target="#modal7" />

            </a>

            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 7</button></a></p>
            </footer>
          </div>
          {/* <!--Fim modal 7--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 8--> */}
            <div class="modal fade" id="modal8" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* Conteudo */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/bQpn5Y26jTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              {/* AULAS BLOQUEADA */}
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631326935/primeiro-modulo/0001-7642917402_20210910_232149_0000_enixfr.png" alt="video" data-toggle="modal" data-target="#modal4" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4> */}

              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631326935/primeiro-modulo/0001-7642917402_20210910_232149_0000_enixfr.png" alt="video" data-toggle="modal" data-target="#modal8" />

            </a>

            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 8</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 8--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 9--> */}
            <div class="modal fade" id="modal9" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* Conteudo */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/-3wz3c4wTiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              {/* AULAS BLOQUEADA */}
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327009/primeiro-modulo/0001-7642955644_20210910_232250_0000_kpjagg.png" alt="video" data-toggle="modal" data-target="#modal9" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4> */}

              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327009/primeiro-modulo/0001-7642955644_20210910_232250_0000_kpjagg.png" alt="video" data-toggle="modal" data-target="#modal9" />

            </a>

            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 9</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 9--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 10--> */}
            <div class="modal fade" id="modal10" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* Conteudo */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/4bEs4m4h2V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              {/* AULAS BLOQUEADA */}
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327100/primeiro-modulo/0001-7643012366_20210910_232425_0000_pxtsle.png" alt="video" data-toggle="modal" data-target="#modal10" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4> */}

              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327100/primeiro-modulo/0001-7643012366_20210910_232425_0000_pxtsle.png" alt="video" data-toggle="modal" data-target="#modal10" />

            </a>

            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color:'#fff' }}>Formulário Aula 10</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 10--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 11--> */}
            <div class="modal fade" id="modal11" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* <!--Conteudo--> */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/cX0HE2HW7ac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331963/primeiro-modulo/0001-7645913529_20210911_004514_0000_rwewpr.png" alt="video" data-toggle="modal" data-target="#modal11" />
            </a>
            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 11</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 11--> */}

          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal 12--> */}
            <div class="modal fade" id="modal12" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  {/* <!--Conteudo--> */}
                  <div class="modal-body mb-0 p-0">
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/8FiQWYUblUo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  {/* Fechar video */}
                  <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGEM DA AULA */}
            <a>
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327291/primeiro-modulo/0001-7643126492_20210910_232735_0000_dfjvnw.png" alt="video" data-toggle="modal" data-target="#modal12" />
            </a>
            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#013f7f', color: '#fff' }}>Formulário Aula 12</button></a></p>
            </footer>
          </div>
          {/* <!--Fim Modal 12--> */}

        </div>
      </div>

    </>
  )
}

export default PrimeiroModulo;