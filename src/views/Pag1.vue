<template>
  <div class="contenedor">
    <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
      <div class="col-lg-6 px-0">
        <h1 class="display-4 fst-italic">
          Ahora puedes ver <br />
          series y péliculas
        </h1>
        <img
          class="logo"
          src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/touchpoint_trailer/logo-mercado-play-v3.png"
          alt="Ahora puedes ver series y películas"
        />
        <p class="lead mb-0">
          <a href="#" class="text-body-emphasis fw-bold">Ver mas ...</a>
        </p>
      </div>
    </div>

    <header>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-body-emphasis">
          Beneficios de Mercado Puntos
        </h1>
        <p class="fs-5 text-body-secondary">
          Suscríbete y disfruta los mejores beneficios a un precio increíble .
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col" v-for="item in platform" :key="item.name">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">{{ item.name }}</h4>
            </div>
            <div class="card-body">
              <img :src="item.image" alt="" />
              <h1 class="card-title pricing-card-title">
                ${{ item.prise }}
                <small class="text-body-secondary fw-light">/mo</small>
              </h1>
              <p>{{ item.describe }}</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="movie-card col-md-4 col-sm-6 col-xs-12" v-for="movie in listMovies" :key="movie.id">
                <figure class="movieFigure">
                    <div class="image">
                        <img :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="{{ movie.title }}">
                        <i lass="ion-ios-basketball-outline"></i>
                    </div>
                    <figcaption>
                        <h3>{{ movie.title }}</h3>
                        <p>{{ movie.description }}</p>
                        <div class="votes">
                            <p>Votos</p>
                            {{ movie.vote_count }}
                        </div>
                        <a href="#" class="add-to-cart">Ver mas.</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Pag1",
  data() {
    return {
      listMovies: [],
      platform: [
        {
          name: "Netflix",
          image: "https://www.freepnglogos.com/uploads/netflix-logo-0.png",
          describe:
            "Netflix, Inc. is an American technology and media services provider and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.",
          prise: "9.99",
        },
        {
          name: "Amazon Prime",
          image:
            "https://www.freepnglogos.com/uploads/picture-logo-png/picture-amazon-logo-15.png",
          describe:
            "Amazon Prime Video, or simply Prime Video, is an American subscription video on-demand over-the-top streaming and rental service of Amazon.com, Inc., offered as a standalone service or as part of Amazon's Prime subscription.",
          prise: "7.99",
        },
        // {
        //   name: 'HBO',
        //   image: 'https://www.freepnglogos.com/uploads/hbo-logo-0.png',
        //   describe: 'Home Box Office is an American pay television network owned by WarnerMedia Studios & Networks and the flagship property of parent subsidiary Home Box Office, Inc.',
        //   prise: '14.99'
        // },
        {
          name: "Disney+",
          image: "https://logowik.com/content/uploads/images/disney5456.jpg",
          describe:
            "Disney+ is an American subscription video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of The Walt Disney Company.",
          prise: "6.99",
        },
      ],
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      fetch("https://api.themoviedb.org/3/movie/popular", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2I4Y2RjOWE1YzJjMDVhOWQ1MDEwY2IwNDliZGJjMyIsInN1YiI6IjY1Yjk2Yzk4OTBmY2EzMDE2MjA2NzI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19XQpsHln1L_nz9EnGZsbWot4oYBWydeBo3FJH3D6Fk",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.listMovies = data.results;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded {
  background-image: url("https://http2.mlstatic.com/D_NQ_803027-MLU74643615266_022024-OO.webp");

  h1,
  p {
    color: white;
  }

  img {
    max-width: 150px;
    margin: 1em 0;
  }
}
header {
  .card {
    img {
      max-width: 100px;
      margin: 1em 0;
    }
  }
}

figure.movieFigure {
  font-family: "Raleway", Arial, sans-serif;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  background: #1a1a1a;
  color: #ffffff;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

figure.movieFigure * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}

figure.movieFigure .image {
  position: relative;
}

figure.movieFigure img {
  max-width: 100%;
  vertical-align: top;
}

figure.movieFigure img:hover {
  transform: scale(1.3);
}

figure.movieFigure i {
  position: absolute;
  top: 7px;
  left: 12px;
  font-size: 32px;
  opacity: 0;
  z-index: 2;
  -webkit-transition-delay: 0;
  transition-delay: 0;
}

figure.movieFigure h3 {
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
  min-height: 4em;
}

figure.movieFigure:before,
figure.movieFigure:after {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  z-index: 1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

figure.movieFigure:before {
  background-color: #ffe600;
  -webkit-transform: skew(-45deg) translateX(-150%);
  transform: skew(-45deg) translateX(-150%);
  border-right: 1px solid #ffe600;
}

figure.movieFigure:after {
  background-color: #962d22;
  -webkit-transform: skew(-45deg) translateX(-175%);
  transform: skew(-45deg) translateX(-175%);
  border-right: 1px solid #962d22;
}

figure.movieFigure figcaption {
  padding: 25px 80px 25px 25px;
  background-color: #ffffff;
  color: #000000;
  position: relative;
  font-size: 0.9em;
}

figure.movieFigure figcaption p {
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

figure.movieFigure figcaption:before {
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  z-index: 1;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  background-color: #ffe600;
  -webkit-transform: skew(-45deg) translateX(50%);
  transform: skew(-45deg) translateX(50%);
  border-right: 1px solid #ffe600;
}

figure.movieFigure .add-to-cart {
  display: inline-block;
  width: auto;
  border: 2px solid #ffe600;
  padding: 0.4em 0.6em;
  color: #ffe600;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9em;
  text-transform: uppercase;
}

figure.movieFigure .add-to-cart:hover {
  background-color: #ffe600;
  color: #ffffff;
}

figure.movieFigure .votes {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ffffff;
  z-index: 2;
  text-transform: uppercase;
  padding: 20px;
  font-weight: 800;
  font-size: 1.2em;
  text-align: center;
}

figure.movieFigure .votes p {
  margin: 0;
  font-size: 0.8em;
}

figure.movieFigure:hover i,
figure.movieFigure.hover i {
  opacity: 0.7;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

figure.movieFigure:hover h3,
figure.movieFigure.hover h3 {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

figure.movieFigure:hover:before,
figure.movieFigure.hover:before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transform: skew(-45deg) translateX(-50%);
  transform: skew(-45deg) translateX(-50%);
}

figure.movieFigure:hover:after,
figure.movieFigure.hover:after {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  -webkit-transform: skew(-45deg) translateX(-75%);
  transform: skew(-45deg) translateX(-75%);
}
</style>