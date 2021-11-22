import React from 'react';
import '../aulas.css';

function SegundoModulo() {
  return (
    <>
      {/* DESKTOP */}
      <div className="d-none d-lg-block">
        <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631161624/iv2_dulvoj.png"
          height="400px"
          width="100%"
        />
      </div>
      {/* MOBILE */}
      <div className="d-lg-none">
        <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631166853/0001-7505917678_20210909_025344_0000_s38ijv.png"
          height="400px"
          width="100%"
        />
      </div>

      <div class="container">
        <div class="alert" style={{ backgroundColor: '#008c00', color: '#fff', marginTop:'-5rem' }}>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/iO57pVuZoSg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330178/segundo-modulo/0001-7644079662_20210910_235352_0000_ivuqg1.png" alt="video" data-toggle="modal" data-target="#modal1" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330178/segundo-modulo/0001-7644079662_20210910_235352_0000_ivuqg1.png" alt="video" data-toggle="modal" data-target="#modal1" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/aiZm3kgao45z4RR69"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 1</button></a></p>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QN3ZEoai688" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330179/segundo-modulo/0001-7644233182_20210910_235823_0000_fvxuhu.png" alt="video" data-toggle="modal" data-target="#modal2" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330179/segundo-modulo/0001-7644233182_20210910_235823_0000_fvxuhu.png" alt="video" data-toggle="modal" data-target="#modal2" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/SAqUbqpBdMmHdVJH6"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 2</button></a></p>
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644409708_20210911_000303_0000_jnjjyf.png" alt="video" data-toggle="modal" data-target="#modal3" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644409708_20210911_000303_0000_jnjjyf.png" alt="video" data-toggle="modal" data-target="#modal3" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/ab1NWYxQtz49ZDGu7"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 3</button></a></p>
            </footer> */}
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
            <a>
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644473951_20210911_000451_0000_jss5py.png" alt="video" data-toggle="modal" data-target="#modal4" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644473951_20210911_000451_0000_jss5py.png" alt="video" data-toggle="modal" data-target="#modal4" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/7npdw1Fnhzx7KGPV9"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 4</button></a></p>
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330181/segundo-modulo/0001-7644498246_20210911_000533_0000_gek3at.png" alt="video" data-toggle="modal" data-target="#modal5" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330181/segundo-modulo/0001-7644498246_20210911_000533_0000_gek3at.png" alt="video" data-toggle="modal" data-target="#modal5" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/oY6SgbKC168m1eFUA"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 5</button></a></p>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/GHgmPJQ3yJ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644550568_20210911_000701_0000_d1nhnh.png" alt="video" data-toggle="modal" data-target="#modal6" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644550568_20210911_000701_0000_d1nhnh.png" alt="video" data-toggle="modal" data-target="#modal6" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/jMrCmtsN21ccszrL7"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 6</button></a></p>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/D0I-AF9HbFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330182/segundo-modulo/0001-7644605697_20210911_000829_0000_d9vegv.png" alt="video" data-toggle="modal" data-target="#modal7" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330182/segundo-modulo/0001-7644605697_20210911_000829_0000_d9vegv.png" alt="video" data-toggle="modal" data-target="#modal7" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/tZ94xmkpKhXEyWJz8"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 7</button></a></p>
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
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/T1WtABrPnjA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330179/segundo-modulo/0001-7644637616_20210911_000922_0000_kczwcu.png" alt="video" data-toggle="modal" data-target="#modal8" />
              {/* AULAS BLOQUEADA */}
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330179/segundo-modulo/0001-7644637616_20210911_000922_0000_kczwcu.png" alt="video" data-toggle="modal" data-target="#modal8" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4> */}
            </a>

            {/* FORMULARIO */}
            <footer>
              <p class="text-center"><a href="https://forms.gle/GnbaYmsR4exVVzBF7"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 8</button></a></p>
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330179/segundo-modulo/0001-7644674999_20210911_001026_0000_yykb1f.png" alt="video" data-toggle="modal" data-target="#modal9" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330179/segundo-modulo/0001-7644674999_20210911_001026_0000_yykb1f.png" alt="video" data-toggle="modal" data-target="#modal9" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 9</button></a></p>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/JenkvlHv3Uw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644704276_20210911_001115_0000_fvagyx.png" alt="video" data-toggle="modal" data-target="#modal10" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644704276_20210911_001115_0000_fvagyx.png" alt="video" data-toggle="modal" data-target="#modal10" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/BY2mqt5n1qxTDkNh7"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 10</button></a></p>
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
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/uCnLc9dCdIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644744644_20210911_001220_0000_v8gtmo.png" alt="video" data-toggle="modal" data-target="#modal11" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330180/segundo-modulo/0001-7644744644_20210911_001220_0000_v8gtmo.png" alt="video" data-toggle="modal" data-target="#modal11" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href="https://forms.gle/44jNLRjVjJzX5Qna6"><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 11</button></a></p>
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
              {/* <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330181/segundo-modulo/0001-7644775791_20210911_001312_0000_ozgxlu.png" alt="video" data-toggle="modal" data-target="#modal12" /> */}
              {/* AULAS BLOQUEADA */}
              <img class="img-fluid z-depth-1" src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631330181/segundo-modulo/0001-7644775791_20210911_001312_0000_ozgxlu.png" alt="video" data-toggle="modal" data-target="#modal12" style={{ opacity: '0.4' }} />
              <h4 className="text-center text-white">
                <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631327452/primeiro-modulo/kisspng-newport-folk-festival-new-york-city-uber-business-padlock-white-5b2c7382f01bc6.9864656915296398109835_ce11nk.png" style={{ height: '22px', color: '#fff', marginTop: '-5px' }} />
                BLOQUEADO
              </h4>
            </a>

            {/* FORMULARIO */}
            {/* <footer>
              <p class="text-center"><a href=""><button type="button" class="btn mt-4" style={{ backgroundColor: '#008c00', color:'#fff' }}>Formulário Aula 12</button></a></p>
            </footer> */}
          </div>
          {/* <!--Fim Modal 12--> */}

        </div>
      </div>

    </>
  )
}

export default SegundoModulo;