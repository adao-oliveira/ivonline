import React from 'react';
import '../aulas.css';

function TerceiroModulo() {
  return (
    <>
      {/* DESKTOP */}
      <div className="d-none d-lg-block">
        <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631161609/iv3_d2kmw1.png"
          height="400px"
          width="100%"
        />
      </div>
      {/* MOBILE */}
      <div className="d-lg-none">
        <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631165425/Logotipo_Inicial_Cursiva_Elegante_3_op%C3%A7%C3%B5es_xfqtkp.png"
          height="400px"
          width="100%"
        />
      </div>

      <div class="container">
        <div class="alert" style={{ backgroundColor: '#d70000', color: '#fff', marginTop:'-5rem' }}>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/0jr-KAJeISs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645360679_20210911_002952_0000_em0f8i.png" alt="video" data-toggle="modal" data-target="#modal1" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645360679_20210911_002952_0000_em0f8i.png" alt="video" data-toggle="modal" data-target="#modal1" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/ZcvHZCUopTxEitEbA"><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 1</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-IIbTLv2GMk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645391766_20210911_003029_0000_spnpf8.png" alt="video" data-toggle="modal" data-target="#modal2" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645391766_20210911_003029_0000_spnpf8.png" alt="video" data-toggle="modal" data-target="#modal2" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 2</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/6cnB6RP0gW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645423044_20210911_003122_0000_zmoin2.png" alt="video" data-toggle="modal" data-target="#modal3" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645423044_20210911_003122_0000_zmoin2.png" alt="video" data-toggle="modal" data-target="#modal3" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/4fRg2sFHHr6wY7bx7"><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 3</button></a></p>
            </footer> */}
          </div>
          {/* <!--Fim Modal 3--> */}

          <div class="col-lg-4 col-md-12 mb-4">
            {/* <!--Modal 4--> */}
            <a>
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645499084_20210911_003329_0000_yojqro.png" alt="video" data-toggle="modal" data-target="#modal4" />
              {/* AULAS BLOQUEADA */}
              <h4 className="text-center text-white">
                AULA PRESENCIAL
              </h4>
            </a>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/nOk_vCSjxt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645533970_20210911_003428_0000_dyrfti.png" alt="video" data-toggle="modal" data-target="#modal5" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645533970_20210911_003428_0000_dyrfti.png" alt="video" data-toggle="modal" data-target="#modal5" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/XDTzX81tPPGPuspD9"><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 5</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645559528_20210911_003512_0000_sneipl.png" alt="video" data-toggle="modal" data-target="#modal6" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331994/terceiro-modulo/0001-7645559528_20210911_003512_0000_sneipl.png" alt="video" data-toggle="modal" data-target="#modal6" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 6</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645585242_20210911_003557_0000_tyvy2a.png" alt="video" data-toggle="modal" data-target="#modal7" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645585242_20210911_003557_0000_tyvy2a.png" alt="video" data-toggle="modal" data-target="#modal7" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 4</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645610353_20210911_003639_0000_fcdvep.png" alt="video" data-toggle="modal" data-target="#modal8" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645610353_20210911_003639_0000_fcdvep.png" alt="video" data-toggle="modal" data-target="#modal8" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 4</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/xVyOKz7EaFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645637580_20210911_003724_0000_nbnuv7.png" alt="video" data-toggle="modal" data-target="#modal9" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645637580_20210911_003724_0000_nbnuv7.png" alt="video" data-toggle="modal" data-target="#modal9" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 4</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645662823_20210911_003809_0000_wdgp6v.png" alt="video" data-toggle="modal" data-target="#modal10" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645662823_20210911_003809_0000_wdgp6v.png" alt="video" data-toggle="modal" data-target="#modal10" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 4</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645692266_20210911_003857_0000_ry0ztt.png" alt="video" data-toggle="modal" data-target="#modal11" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645692266_20210911_003857_0000_ry0ztt.png" alt="video" data-toggle="modal" data-target="#modal11" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 4</button></a></p>
            </footer> */}
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/noyI_pq7nS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645718700_20210911_003941_0000_grtea8.png" alt="video" data-toggle="modal" data-target="#modal12" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631331995/terceiro-modulo/0001-7645718700_20210911_003941_0000_grtea8.png" alt="video" data-toggle="modal" data-target="#modal12" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/v78c9fs8CpQ6HDeP6"><button type="button" class="btn mt-4" style={{ backgroundColor: '#d70000', color:'#fff' }}>Formulário Aula 12</button></a></p>
            </footer> */}
          </div>
          {/* <!--Fim Modal 12--> */}

        </div>
      </div>

    </>
  )
}

export default TerceiroModulo;