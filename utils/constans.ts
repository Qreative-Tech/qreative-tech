export const NOMORWA = "6282343613521";

import DashboardEventImg from "@/assets/portofolio/dashboard-mockup.jpg";
import essImg from "@/assets/portofolio/ess-mockup.jpg";
import idekeenImg from "@/assets/portofolio/idekeen-mockup.jpg";
import booksImg from "@/assets/portofolio/ngebook-mockup.jpg";
import quizzImg from "@/assets/portofolio/quiz-mockup.jpg";

// Assets Portofolio

// logo
import DashboardLogo from "@/assets/logo/dashboard.png";
import ESSLogo from "@/assets/logo/ess.png";
import IdekeenLogo from "@/assets/logo/idekeen.jpg";
import QuizzLogo from "@/assets/logo/quiz.png";

// Asset Idekeen
import cardIdekeenImg from "@/assets/portofolio/idekeen/card.png";
import designIdekeenImg from "@/assets/portofolio/idekeen/design.png";
import mobileLandscapeIdekeenImg from "@/assets/portofolio/idekeen/mobileLandscape.jpg";
import responsiveIdekeenImg from "@/assets/portofolio/idekeen/responsive.png";
import sliderIdekeenImg from "@/assets/portofolio/idekeen/slider.png";
import tabsIdekeenImg from "@/assets/portofolio/idekeen/tabs.png";
import youtubeEmbedIdekeenImg from "@/assets/portofolio/idekeen/youtubeEmded.png";

// Asset Dashboard
import Dashboard1 from "@/assets/portofolio/dashboard/design.png";
import Dashboard2 from "@/assets/portofolio/dashboard/diagram.png";
import Dashboard3 from "@/assets/portofolio/dashboard/filter.png";
import Dashboard4 from "@/assets/portofolio/dashboard/form.png";
import Dashboard5 from "@/assets/portofolio/dashboard/login.png";

import Quiz1 from "@/assets/portofolio/quizz/login.png";
import Quiz2 from "@/assets/portofolio/quizz/progress.png";
import Quiz3 from "@/assets/portofolio/quizz/responsive.png";
import Quiz4 from "@/assets/portofolio/quizz/timer.png";

import Books2 from "@/assets/portofolio/books/dark-theme.png";
import Books1 from "@/assets/portofolio/books/design.png";
import Books3 from "@/assets/portofolio/books/filter.png";
import Books4 from "@/assets/portofolio/books/login.png";
import Books5 from "@/assets/portofolio/books/responsive.png";

import ESS1 from "@/assets/portofolio/ess-telkom/design.png";
import ESS2 from "@/assets/portofolio/ess-telkom/download-file.png";
import ESS3 from "@/assets/portofolio/ess-telkom/multipage.png";
import ESS4 from "@/assets/portofolio/ess-telkom/responsive.png";
import ESS5 from "@/assets/portofolio/ess-telkom/slider.png";
import ESS6 from "@/assets/portofolio/ess-telkom/tabs.png";

export const listProduk = [
  {
    demoLink: "https://www.youtube.com/embed/VRH4sqtHz1o?si=vNJeNp8mNu-cW6oS",
    slug: "indekeen",
    title: "Indekeen",
    link: "https://homepage-idekeen.vercel.app",
    desc: "Landing page bisnis untuk memperkenalkan produk dan layanan Anda",
    img: idekeenImg.src,
    category: "Basic Web",
    rating: 5,
    logo: IdekeenLogo.src,
    detail: `Merupakan sebuah web profile bisnis Idekeen yang responsive untuk semua device,
      memuat beberapa konten seperti gambar, video, dan interface design yang menarik.
      Website profil bertujuan untuk mengenalkan bisnis Anda berupa layanan, produk, alur transaksi
      atau menjadi media untuk melakukan transaksi.

      Landing page menjadi wajah sebuah bisnis anda, bagaimana value bisnis anda tersampaikan melalui
      kesan landing page bisnis yang anda miliki. Buat bisnis anda menjadi lebih profesional dan ekspansi bisnis anda agar semakin dikenal oleh calon customer dimulai dengan buat web profile yang menarik, informatif, persuasif dan profesional.`,
    features: [
      "Tab content",
      "Video YouTube embed",
      "Content slider",
      "Responsive",
      "Cards",
    ],
    images: [
      cardIdekeenImg.src,
      designIdekeenImg.src,
      mobileLandscapeIdekeenImg.src,
      responsiveIdekeenImg.src,
      sliderIdekeenImg.src,
      tabsIdekeenImg.src,
      youtubeEmbedIdekeenImg.src,
    ],
  },
  {
    demoLink: "https://www.youtube.com/embed/FVeofSqu1kI?si=uLUDBoYWvO531uSs",
    slug: "dashboard-event",
    title: "Dashboard Event",
    link: "#",
    desc: "Sistem Manajemen yang memudahkan aktivitas operasional perusahaan Anda",
    img: DashboardEventImg.src,
    category: "Platinum Expert",
    rating: 5,
    logo: DashboardLogo.src,
    detail: `Merupakan web dashboard manajemen event, keuangan dan keanggotaan yang saling terintegrasi. Dashboard menampilkan performa event mulai dari jumlah pengunjung, income, outcome dan peserta event dalam bentuk grafik yang informatif. Dashboard memiliki fitur login, aktivitas manipulasi event (menambahkan, edit, hapus event).

      Sistem informasi manajemen pengolaan data akan sangat diperlukan untuk keberlangsungan kegiatan operasional bisnis anda. Manajemen data yang baik yaitu mudah diakses, terintegrasi dan tersimpan secara sistematis akan memudahkan proses evaluasi bisnis anda. Jadi, jangan ragu untuk buat bisnis anda menjadi lebih terstruktur dengan membuat sistem manajemen bisnis anda sekarang.`,
    features: [
      "Chart",
      "Export file",
      "Form",
      "Login-Resgiter User",
      "Design user friendly",
      "Filter multivalue",
    ],
    images: [
      Dashboard1.src,
      Dashboard2.src,
      Dashboard3.src,
      Dashboard4.src,
      Dashboard5.src,
    ],
  },
  {
    demoLink: "https://www.youtube.com/embed/gZEn__P5hog?si=Er1u1LiCJdzwcwto",
    slug: "quizz-app",
    title: "Quizz App",
    link: "https://quiziz-six.vercel.app",
    desc: "Buat quiz atau survey dengan mudah di custome sesuai kebutuhan Anda",
    img: quizzImg.src,
    category: "Premium Middle",
    rating: 5,
    logo: QuizzLogo.src,
    detail: `Merupakan sebuah web quizz atau bisa digunakan untuk keperluan kuesioner atau survey bisnis anda. Dengan design yang menarik, responsive dan tampilan yang interaktif akan membuat user nyaman menggunakan aplikasi berbasis website tersebut.
      
      Apabila anda ingin membuat website untuk keperluan pendidikan atau ujian, anda bisa memesannya disini. kemudahan membuat website secara custom akan membuat anda lebih mudah membuat fitur ataupun tampilan sesuai keinginan anda.`,
    features: ["Login", "Responsive", "Timer", "Progress Bar"],
    images: [Quiz1.src, Quiz2.src, Quiz3.src, Quiz4.src],
  },
  {
    demoLink: "https://www.youtube.com/embed/uAnzqVQZZug?si=zgPC7dxVA463o-1O",
    slug: "books-app",
    title: "Books App",
    link: "http://book.labrisetess.com",
    desc: "Aplikasi manajemen buku store online sederhana dengan design menarik dan user friendly",
    img: booksImg.src,
    category: "Premium Middle",
    rating: 5,
    logo: QuizzLogo.src,
    detail: `Merupakan sebuah web book apps sejenis sebuah ecommerce sederhana, terdapat aktivitas menambahkan, edit, delete data buku dan menambahkan buku ke keranjang. Selain itu user bisa mengatur light-dark theme sesuai keinginan. Tampilan yang menarik, user friendly dan responsive di semua device.

      Jika anda menginkan bisnis anda memiliki market place, anda bisa memesan website market place di layanan kami. Kelebihan membuat market place sendiri ialah anda bisa memantau, membuat fitur atau custom alur sistem sesuai kebutuhan anda. Hal itu akan jauh lebih mudah dan aman jika anda memilki sistem internal untuk kegiatan operasional bisnis anda.`,
    features: [
      "Login",
      "Design user friendly",
      "Responsive",
      "Dark-light theme",
      "Searching",
      "Sort dan filter multivalue",
    ],
    images: [Books1.src, Books2.src, Books3.src, Books4.src, Books5.src],
  },
  {
    demoLink: "https://www.youtube.com/embed/qcn4aL2scMY?si=1zbgrFdFdus_s-Zl",
    slug: "ess-telkom",
    title: "ESS Telkom",
    link: "https://labrisetess.com",
    desc: "Landing page komunikasi untuk memperkenalkan program dan produk komunitas Anda",
    img: essImg.src,
    category: "Basic Web",
    rating: 5,
    logo: ESSLogo.src,
    detail: `
      Merupakan sebuah web profile komunitas pendidikan yang responsive untuk semua device, memuat beberapa konten seperti gambar, design yang menarik dan dapat melakukan download file. Web profile ini bertujuan untuk mengenalkan project komunitas pendidikan. Fitur web ini dilengkapi dengan dinamic halaman yaitu detail event program.

      Landing page menjadi wajah sebuah komunitas anda, bagaimana value komunitas anda tersampaikan melalui kesan landing page komunitas yang anda miliki. Buat komunitas anda menjadi lebih profesional dan semakin dikenal dimulai dengan buat web profile yang menarik, informatif, persuasif dan profesional.
      `,
    features: [
      "Tab content",
      "Multipage",
      "Design user friendly",
      "Responsive",
      "Download file",
      "Slider Image",
    ],
    images: [ESS1.src, ESS2.src, ESS3.src, ESS4.src, ESS5.src, ESS6.src],
  },
];
