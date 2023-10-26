var listaPeliculas = [
  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://pics.filmaffinity.com/zack_snyder_s_justice_league-554207771-mmed.jpg",
  "https://musicart.xboxlive.com/7/11e15000-0000-0000-0000-000000000002/504/image.jpg",

  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a4e0519f1842bc246db3506a81edadab63bf667856be97525b0659cab33b73dc._RI_TTW_.jpg",

  "https://m.media-amazon.com/images/M/MV5BNjk3MGZhMjEtOTM4NC00NzE2LTk2NzctZDc4YTUwN2E3NDhhXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_.jpg",

  "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  "https://pics.filmaffinity.com/Dark_Serie_de_TV-111203947-large.jpg",
  "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2011/09/fringe_ver25_xlg.jpg",
  "https://www.formulatv.com/images/series/posters/600/657/dest_1.jpg",

  "https://m.media-amazon.com/images/I/71pEtnsA+AL._AC_UF1000,1000_QL80_.jpg",
  "https://assets2.ignimgs.com/2014/03/24/the-100-poster-saison1-22jpg-0a57ac.jpg"
];

//agregue elementos a la lista usando .push

listaPeliculas.push(
  "https://pics.filmaffinity.com/Arcane_League_of_Legends_Serie_de_TV-624235408-large.jpg",
  "https://pics.filmaffinity.com/Obi_Wan_Kenobi_Miniserie_de_TV-316601148-large.jpg",
  "https://images.justwatch.com/poster/304409220/s592/temporada-3.jpg",

  "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",

  "https://es.web.img3.acsta.net/pictures/15/11/20/12/35/130260.jpg",
  "https://pics.filmaffinity.com/Viajeros_Serie_de_TV-635414132-large.jpg"
);

var nombrePeliculas = [
  "Interstellar",
  "Zack Snyder's <br> Justice League",
  "Harry Potter <br> El prisionero de Azkaban",
  "Justice League <br> The Flashpoint Paradox",
  "X-Men <br> Days of Future Past",
  "Inception",
  "DARK",
  "Fringe",
  "Arrow",
  "Smallville",
  "The 100",
  "Arcane",
  "Obi-Wan Kenobi",
  "Superman & Lois",
  "Brooklyn 99",
  "Sherlock",
  "Travelers"
];

var trailers = [
  "https://www.youtube.com/embed/zSWdZVtXT7E?si=w3fTbaLZikhnI41d",
  "https://www.youtube.com/embed/oTXrl8H6luI?si=QrxuT7143bJrEwQ9",
  "https://www.youtube.com/embed/1ZdlAg3j8nI?si=5bkTvoV4lRJAyw6X",
  "https://www.youtube.com/embed/Q3tochTgPVc?si=xA7DhTR1V_lhcnrp",
  "https://www.youtube.com/embed/pK2zYHWDZKo?si=MExo1AJzWrOFfVQd",
  "https://www.youtube.com/embed/YoHD9XEInc0?si=r1Bt4kiR0Qzg1kXV",
  "https://www.youtube.com/embed/IJ_AZCvCacw?si=OlEWkrauBYV57dUV",
  "https://www.youtube.com/embed/29bSzbqZ3xE?si=S7OQTfXEGV84MRAg",
  "https://www.youtube.com/embed/PW2PtiLkIKM?si=5iLF0PDkEPPE-Ln_",
  "https://www.youtube.com/embed/sAqk_9KZnAE?si=-vO88_oXtT7GBU8J",
  "https://www.youtube.com/embed/ia1Fbg96vL0?si=C7vDlyuUZRYvnlHB",
  "https://www.youtube.com/embed/fXmAurh012s?si=7fe701vDIkeEhUqX",
  "https://www.youtube.com/embed/TWTfhyvzTx0?si=K9daYBJdZsQzabgc",
  "https://www.youtube.com/embed/SJPJPUpNvDw?si=FUyxUtJ399CA4QjG",
  "https://www.youtube.com/embed/HlBYdiXdUa8?si=1ezPRWrg1kBhUjGx",
  "https://www.youtube.com/embed/IrBKwzL3K7s?si=oURKE0joTzxBOg30",
  "https://www.youtube.com/embed/99LZwZmSoNo?si=5_5ohLaBcSa1DiaA"
];

document.write('<div class="container_allFilms">');

var i = 0;
while (i < listaPeliculas.length) {
  if (listaPeliculas[i].endsWith("jpg") || listaPeliculas[i].endsWith("jpeg")) {
    document.write('<div class="container_film">');
    document.write("<a href=" + trailers[i] + ">");
    document.write("<img src=" + listaPeliculas[i] + ">");
    document.write("<p>" + nombrePeliculas[i] + "</p>");

    document.write("</div>");
  } else {
    document.write(
      "<p> La imagen " +
        i +
        " no se leyó porque no es un archivo jpeg o jpg </p>"
    );
  }
  i++;
}
document.write("</div>");
