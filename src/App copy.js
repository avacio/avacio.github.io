import { useState } from "react";
import styles from './styles.css';
import { Footer } from './components/Footer';

function App() {

    return (
        <div className="App">
        {/* <body id="top" cz-shortcut-listen="true"> */}
        <body id="top">
          <div id="body">

            <header>
              <span id="logo" class="scroll"><a href="https://avacio.github.io/#home"><img href="index.html" src="img/shuffle-logo.png" alt="" /></a></span>
            </header>

            <div class="main">

              <div class="biganimation">

                <div class="animation font_color wow fadeInUp" id="first">
                  <img src="img/FinalIteration.gif" alt="" />
                </div>

                <div class="animation" id="loop">
                  <img src="img/Loop.gif" alt="" />
                </div>
              </div>

              <div class="navigation">
                <ul>
                  <li><a class="scroll" href="#work">Portfolio</a></li>
                  <li><a href="https://avacio.github.io/about">About Me</a></li>
                  <li><a href="https://avacio.github.io/music">Music</a></li>
                  <li><a href="alexis_gervacio_resume.pdf">Résumé</a></li>
                  <li><a class="scroll" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>

            <div class="work_container" id="work">
              <div class="teaser_item wow fadeInUp project-cell">
                <a href="https://avacio.github.io/JackieAndTheBeanstalk/" class="fadeOutLink">
                  <div class="text">
                    <p>JACKIE & THE BEANSTALK</p>
                  </div>
                  <img class="hover" src="img/project-icons/jatb.jpg" alt="" />
                </a>
              </div>

              <div class="teaser_item wow fadeInUp project-cell">
                <a href="https://avacio.github.io/bucket_list_304/" class="fadeOutLink">
                  <div class="text">
                    <p>BUCKETLIST</p>
                  </div>
                  <img class="hover" src="img/project-icons/bl.jpg" alt="" />
                </a>
              </div>

              <div class="teaser_item wow fadeInUp project-cell">
                <a href="https://avacio.github.io/VeggieVengeance/" class="fadeOutLink">
                  <div class="text">
                    <p>VEGGIE VENGEANCE</p>
                  </div>
                  <img class="hover" src="img/project-icons/broccoli.jpg" alt="" />
                </a>
              </div>

              <div class="teaser_item wow fadeInUp project-cell">
                <a href="https://avacio.github.io/horrorscopes/" class="fadeOutLink">
                  <div class="text">
                    <p>HORRORSCOPES</p>
                  </div>
                  <img class="hover" src="img/project-icons/horrorscopes.jpg" alt="" />
                </a>
              </div>

              <div class="teaser_item wow fadeInUp project-cell">
              <a href="https://avacio.github.io/MeToo/" class="fadeOutLink">
                <div class="text">
                  <p>ʔiʔ θə ʔe:nθə</p>
                </div>
                <img class="hover" src="img/project-icons/goose.jpg" alt="" />
              </a>
            </div>
              <div class="teaser_item wow fadeInUp project-cell">
              <a href="https://avacio.github.io/HipHopFrogFlop/" class="fadeOutLink">
                <div class="text">
                  <p>HIP HOP FROG FLOP</p>
                </div>
                <img class="hover" src="img/frog.jpg" alt="" />
              </a>
            </div>

            <div class="teaser_item wow fadeInUp project-cell">
              <a href="https://avacio.github.io/Taxidi/" class="fadeOutLink">
                <div class="text">
                  <p>ΤΑΞΙΔΙ</p>
                </div>
                <img class="hover" src="img/project-icons/column.jpg" alt="" />
              </a>
            </div>

              <div class="teaser_item wow fadeInUp project-cell">
              <a href="https://avacio.github.io/EyeCaramba/" class="fadeOutLink">
                <div class="text">
                  <p>¡EYE CARAMBA!</p>
                </div>
                <img class="hover" src="img/eyecaramba.jpg" alt="" />
              </a>
            </div>


              <div class="teaser_item wow fadeInUp project-cell">
              <a href="https://github.com/avacio/avacio.github.io" class="fadeOutLink">
                <div class="text">
                  <p>MY BRANDING</p>
                </div>
                <img class="hover" src="img/branding.jpg" alt="" />
              </a>
            </div>



          </div>


        </div>
         <Footer/>
         </body> 
        </div>
    );
}


{/* <script src="animation/wow.min.js"></script>

<script>
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       70,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();	

</script> */}


export default App;
