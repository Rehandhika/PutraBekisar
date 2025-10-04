export interface CulturalItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  location: string;
  year?: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  gallery: string[];
  videoUrl?: string;
  funFacts: string[];
  culturalSignificance: string;
  relatedLinks: string[];
  [key: string]: any;
}

export const tarianData: CulturalItem[] = [
  {
    id: 'tarian-1',
    title: 'Reog Ponorogo',
    category: 'Tarian',
    thumbnail: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Ponorogo',
    year: 'Abad ke-15',
    shortDesc: 'Tarian megah dengan topeng singa raksasa yang menjadi ikon Jawa Timur',
    fullDesc: 'Reog Ponorogo adalah kesenian tari yang berasal dari Ponorogo, Jawa Timur. Pertunjukan ini menampilkan penari utama yang mengenakan topeng berbentuk kepala singa raksasa (dadak merak) yang beratnya mencapai 50-60 kg. Reog menceritakan kisah Raja Kelana Sewandana dalam pencariannya mencari calon istri Dewi Ragil Kuning.',
    highlights: [
      'Topeng dadak merak dengan berat 50-60 kg',
      'Terdaftar sebagai Warisan Budaya Tak Benda UNESCO',
      'Pertunjukan memadukan tarian, musik, dan mistis',
      'Diiringi kendang, gong, dan terompet'
    ],
    gallery: [
      'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Penari dadak merak harus memiliki kekuatan spiritual khusus',
      'Festival Reog Nasional diadakan setiap tahun di Ponorogo',
      'Topeng dadak merak terbuat dari kayu dengan hiasan bulu merak'
    ],
    culturalSignificance: 'Reog Ponorogo melambangkan keberanian, kekuatan, dan perlawanan terhadap penguasa yang korup. Pertunjukan ini juga menjadi media dakwah dan kritik sosial.',
    relatedLinks: ['Kerajaan Wengker', 'Seni Warok', 'Festival Reog']
  },
  {
    id: 'tarian-2',
    title: 'Tari Gandrung',
    category: 'Tarian',
    thumbnail: 'https://images.pexels.com/photos/8636625/pexels-photo-8636625.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Banyuwangi',
    year: 'Abad ke-18',
    shortDesc: 'Tarian pergaulan yang menawan dengan gerakan gemulai khas Banyuwangi',
    fullDesc: 'Tari Gandrung adalah tarian tradisional dari Banyuwangi yang awalnya berfungsi sebagai tarian pergaulan. Penari gandrung akan menari dengan gerakan gemulai dan ekspresif, kemudian memilih penonton pria untuk diajak menari bersama. Tarian ini diiringi musik khas Using dengan instrumen gamelan, biola, dan kendang.',
    highlights: [
      'Tarian interaktif dengan penonton',
      'Kostum berwarna cerah dengan selendang panjang',
      'Gerakan tangan ekspresif dan mata yang tajam',
      'Diiringi musik etnis Using yang merdu'
    ],
    gallery: [
      'https://images.pexels.com/photos/8636625/pexels-photo-8636625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Penari gandrung harus cantik dan pandai bernyanyi',
      'Dulunya tarian ini dimainkan oleh pria yang menyamar sebagai wanita',
      'Festival Gandrung Sewu menampilkan ribuan penari serentak'
    ],
    culturalSignificance: 'Gandrung menjadi simbol keramahan masyarakat Banyuwangi dan media pelestarian bahasa serta musik Using.',
    relatedLinks: ['Suku Using', 'Festival Gandrung Sewu', 'Musik Using']
  },
  {
    id: 'tarian-3',
    title: 'Tari Remo',
    category: 'Tarian',
    thumbnail: 'https://images.pexels.com/photos/7991598/pexels-photo-7991598.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Surabaya',
    year: 'Abad ke-19',
    shortDesc: 'Tarian maskulin penuh energi yang menjadi pembuka pertunjukan Ludruk',
    fullDesc: 'Tari Remo adalah tarian khas Surabaya yang menggambarkan jiwa prajurit muda yang gagah berani. Tarian ini diciptakan untuk membuka pertunjukan Ludruk dan menampilkan gerakan dinamis, energik, dan maskulin. Penari Remo harus memiliki stamina kuat karena gerakannya yang penuh tenaga.',
    highlights: [
      'Gerakan nganceng yang ikonik dan menantang',
      'Ekspresi wajah tegas dengan tatapan tajam',
      'Variasi: Remo Putri, Remo Sawunggaling, Remo Jombangan',
      'Iringan gamelan Jawa Timuran yang khas'
    ],
    gallery: [
      'https://images.pexels.com/photos/7991598/pexels-photo-7991598.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8181178/pexels-photo-8181178.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8636390/pexels-photo-8636390.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Diciptakan oleh seniman jalanan Surabaya',
      'Gerakan terinspirasi dari silat dan tari istana',
      'Kini ada versi Remo Putri yang dibawakan penari wanita'
    ],
    culturalSignificance: 'Tari Remo melambangkan karakter masyarakat Surabaya yang tegas, dinamis, dan berani.',
    relatedLinks: ['Ludruk Surabaya', 'Arek Suroboyo', 'Gamelan Jawa Timur']
  },
  {
    id: 'tarian-4',
    title: 'Jaranan Pegon',
    category: 'Tarian',
    thumbnail: 'https://images.pexels.com/photos/6207875/pexels-photo-6207875.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Tulungagung',
    year: 'Tradisional',
    shortDesc: 'Tarian kuda kepang dengan unsur mistis dan ritual nadzar',
    fullDesc: 'Jaranan Pegon adalah kesenian jaranan khas Tulungagung yang merupakan perpaduan antara jaranan dengan wayang orang. Penari menggunakan properti kuda-kudaan dari anyaman bambu dan bergerak mengikuti gerakan wayang orang. Pertunjukan ini sering digunakan dalam ritual nadzar.',
    highlights: [
      'Akulturasi jaranan dengan gerakan wayang orang',
      'Ritual ndhudhut kupar luwar untuk pemenuhan nadzar',
      'Atraksi mistis saat penari kesurupan',
      'Menggunakan kuda-kudaan anyaman bambu yang artistik'
    ],
    gallery: [
      'https://images.pexels.com/photos/6207875/pexels-photo-6207875.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5699821/pexels-photo-5699821.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4666766/pexels-photo-4666766.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Ditetapkan sebagai Warisan Budaya Tak Benda Nasional',
      'Setiap penari dilindungi secara spiritual oleh pawang',
      'Pertunjukan bisa berlangsung hingga 8 jam'
    ],
    culturalSignificance: 'Jaranan Pegon menjadi media spiritual masyarakat Tulungagung untuk berkomunikasi dengan alam gaib dan memenuhi nadzar.',
    relatedLinks: ['Wayang Orang', 'Kuda Lumping', 'Tradisi Nadzar']
  }
];

export const kulinerData: CulturalItem[] = [
  {
    id: 'kuliner-1',
    title: 'Rujak Cingur',
    category: 'Kuliner',
    thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Surabaya',
    origin: 'Tradisional',
    shortDesc: 'Rujak khas dengan campuran cingur (hidung sapi) dan bumbu petis yang legendaris',
    fullDesc: 'Rujak Cingur adalah makanan khas Surabaya yang unik dengan bahan utama cingur (hidung sapi) yang direbus empuk, dicampur dengan berbagai sayuran segar, buah-buahan, lontong, tempe, dan tahu. Keunikan rujak ini terletak pada bumbu petis udangnya yang kental, gurih, dan sedikit manis.',
    highlights: [
      'Cingur (hidung sapi) dengan tekstur kenyal khas',
      'Bumbu petis udang yang gurih dan aromatik',
      'Campuran sayuran: kangkung, kacang panjang, tauge, timun',
      'Dilengkapi kerupuk dan sambal'
    ],
    gallery: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1528018/pexels-photo-1528018.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Nama "cingur" berasal dari bahasa Jawa yang berarti hidung',
      'Konon diciptakan oleh pedagang Arab yang berinovasi',
      'Harus dicampur dengan tangan agar bumbu merata sempurna'
    ],
    culturalSignificance: 'Rujak Cingur mencerminkan toleransi budaya Surabaya yang memadukan berbagai elemen menjadi satu kesatuan harmonis.',
    relatedLinks: ['Petis Surabaya', 'Pasar Atom', 'Kuliner Arek']
  },
  {
    id: 'kuliner-2',
    title: 'Rawon',
    category: 'Kuliner',
    thumbnail: 'https://images.pexels.com/photos/5175553/pexels-photo-5175553.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Surabaya & Jawa Timur',
    origin: 'Abad ke-13',
    shortDesc: 'Sup daging hitam pekat dengan kluwak yang kaya rempah dan menggugah selera',
    fullDesc: 'Rawon adalah sup daging sapi berwarna hitam pekat khas Jawa Timur yang menggunakan bumbu kluwak (keluak) sebagai kunci kelezatannya. Warna hitam yang khas berasal dari buah kluwak yang ditumbuk halus. Kuah rawon yang kental, gurih, dan aromatik disajikan dengan daging sapi empuk, tauge, telur asin, dan sambal.',
    highlights: [
      'Warna hitam khas dari buah kluwak',
      'Kuah kental dengan rempah kompleks',
      'Daging sapi empuk yang meresap bumbu',
      'Aroma harum yang menggugah selera'
    ],
    gallery: [
      'https://images.pexels.com/photos/5175553/pexels-photo-5175553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8629167/pexels-photo-8629167.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'CNN International memasukkan Rawon dalam 50 makanan terenak di dunia',
      'Kluwak harus difermentasi dulu agar tidak beracun',
      'Rawon Setan di Surabaya buka 24 jam sejak 1950-an'
    ],
    culturalSignificance: 'Rawon adalah hidangan kebanggaan Jawa Timur yang sering disajikan dalam acara adat dan hajatan.',
    relatedLinks: ['Kluwak', 'Kuliner Suroboyo', 'Rempah Nusantara']
  },
  {
    id: 'kuliner-3',
    title: 'Sate Madura',
    category: 'Kuliner',
    thumbnail: 'https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Madura',
    origin: 'Tradisional',
    shortDesc: 'Sate daging dengan bumbu kacang khas Madura yang legendaris di seluruh Indonesia',
    fullDesc: 'Sate Madura adalah salah satu kuliner paling terkenal dari Jawa Timur yang telah menyebar ke seluruh Indonesia. Potongan daging kambing atau ayam yang ditusuk dengan bambu dipanggang di atas bara arang sambil diolesi bumbu kecap manis. Yang membuatnya istimewa adalah bumbu kacang yang kental, gurih, dengan sedikit rasa manis dan pedas.',
    highlights: [
      'Daging dipanggang dengan bara arang khas',
      'Bumbu kacang yang kental dan gurih',
      'Pilihan daging: kambing, ayam, atau sapi',
      'Aroma panggang yang menggoda'
    ],
    gallery: [
      'https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5175542/pexels-photo-5175542.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8753663/pexels-photo-8753663.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Pedagang sate Madura tersebar di seluruh Indonesia',
      'Teknik memanggang dengan kipas dari bambu menciptakan bara sempurna',
      'Setiap keluarga di Madura punya resep rahasia bumbu kacang'
    ],
    culturalSignificance: 'Sate Madura menjadi simbol kegigihan pedagang Madura yang sukses menyebarkan budaya kuliner mereka.',
    relatedLinks: ['Kuliner Madura', 'Kambing Madura', 'Bumbu Nusantara']
  },
  {
    id: 'kuliner-4',
    title: 'Brem Madiun',
    category: 'Kuliner',
    thumbnail: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Madiun',
    origin: 'Abad ke-19',
    shortDesc: 'Kue tradisional manis dari fermentasi tape ketan yang lembut dan lumer di mulut',
    fullDesc: 'Brem Madiun adalah makanan tradisional khas Madiun yang terbuat dari tape ketan putih yang difermentasi kemudian dikeringkan menjadi lembaran tipis. Teksturnya yang lembut dan mudah meleleh di mulut dengan rasa manis khas tape menjadikannya camilan unik. Brem memiliki kadar alkohol yang sangat rendah hasil fermentasi alami.',
    highlights: [
      'Terbuat dari tape ketan putih fermentasi',
      'Tekstur lembut yang meleleh di mulut',
      'Rasa manis alami dengan aroma khas tape',
      'Warisan Budaya Tak Benda Nasional'
    ],
    gallery: [
      'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Produksi Brem Madiun sudah ada sejak zaman Belanda',
      'Proses pembuatan membutuhkan waktu hingga 2 minggu',
      'Brem tidak bisa dibuat di sembarang tempat karena butuh iklim khusus'
    ],
    culturalSignificance: 'Brem Madiun menjadi oleh-oleh wajib dan identitas kuliner khas Kota Madiun yang dilestarikan turun-temurun.',
    relatedLinks: ['Tape Ketan', 'Kuliner Fermentasi', 'Oleh-oleh Madiun']
  }
];

export const gunungData: CulturalItem[] = [
  {
    id: 'gunung-1',
    title: 'Gunung Semeru',
    category: 'Gunung',
    thumbnail: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Kabupaten Malang & Lumajang',
    elevation: '3.676 mdpl',
    status: 'Aktif',
    shortDesc: 'Puncak tertinggi di Pulau Jawa yang megah dengan kawah Jonggring Saloko',
    fullDesc: 'Gunung Semeru atau Mahameru adalah gunung tertinggi di Pulau Jawa dengan ketinggian 3.676 meter di atas permukaan laut. Gunung berapi yang masih aktif ini terletak di perbatasan Kabupaten Malang dan Lumajang. Semeru memiliki kawah puncak bernama Jonggring Saloko yang secara periodik mengeluarkan asap dan abu vulkanik.',
    highlights: [
      'Puncak tertinggi Pulau Jawa (3.676 mdpl)',
      'Kawah Jonggring Saloko dengan erupsi periodik',
      'Ranu Kumbolo - danau alami yang indah',
      'Padang Sabana Oro-oro Ombo yang luas'
    ],
    gallery: [
      'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Nama Semeru diambil dari Gunung Mahameru dalam mitologi Hindu',
      'Erupsi kecil terjadi setiap 20-30 menit sekali',
      'Menjadi lokasi syuting film "5 cm" yang fenomenal',
      'Ranu Kumbolo disebut sebagai surga tersembunyi para pendaki'
    ],
    culturalSignificance: 'Dalam kepercayaan Hindu-Buddha, Semeru dianggap sebagai gunung suci tempat bersemayamnya para dewa.',
    relatedLinks: ['Taman Nasional Bromo Tengger Semeru', 'Ranu Kumbolo', 'Suku Tengger']
  },
  {
    id: 'gunung-2',
    title: 'Gunung Bromo',
    category: 'Gunung',
    thumbnail: 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Probolinggo, Pasuruan, Lumajang, Malang',
    elevation: '2.329 mdpl',
    status: 'Aktif',
    shortDesc: 'Ikon wisata Jawa Timur dengan lautan pasir dan sunrise spektakuler',
    fullDesc: 'Gunung Bromo adalah salah satu gunung berapi paling terkenal di Indonesia dengan pemandangan yang sangat ikonik. Terletak di tengah kaldera Tengger yang luas, Bromo dikelilingi oleh lautan pasir seluas 10 kilometer persegi. Kawah aktif Bromo terus mengeluarkan asap putih yang kontras dengan langit biru.',
    highlights: [
      'Lautan pasir (Segara Wedi) yang luas dan unik',
      'Sunrise spot terbaik: Penanjakan dan Kingkong Hill',
      'Kawah aktif dengan asap putih berkelanjutan',
      'Upacara Yadnya Kasada Suku Tengger'
    ],
    gallery: [
      'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Nama "Bromo" berasal dari Brahma, dewa pencipta dalam agama Hindu',
      'Lautan pasir terbentuk dari erupsi besar ribuan tahun lalu',
      'Spot foto paling instagramable di Indonesia',
      'Suhu bisa mencapai -5°C saat dini hari'
    ],
    culturalSignificance: 'Menurut legenda Tengger, Bromo terkait dengan kisah Roro Anteng dan Joko Seger yang mengorbankan anak mereka.',
    relatedLinks: ['Suku Tengger', 'Yadnya Kasada', 'Taman Nasional Bromo Tengger Semeru']
  },
  {
    id: 'gunung-3',
    title: 'Gunung Ijen',
    category: 'Gunung',
    thumbnail: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Banyuwangi & Bondowoso',
    elevation: '2.799 mdpl',
    status: 'Aktif',
    shortDesc: 'Fenomena blue fire dan danau kawah asam terbesar di dunia yang memukau',
    fullDesc: 'Gunung Ijen terkenal dengan fenomena api biru (blue fire) yang langka, hanya ada dua di dunia. Api biru ini muncul dari pembakaran gas belerang yang keluar dari celah-celah kawah. Ijen juga memiliki danau kawah dengan air berwarna hijau tosca yang sangat asam (pH 0,5) dan merupakan danau kawah asam terbesar di dunia.',
    highlights: [
      'Blue Fire - fenomena api biru yang langka',
      'Danau kawah asam terbesar dunia',
      'Air kawah berwarna hijau tosca yang menawan',
      'Aktivitas penambangan belerang tradisional'
    ],
    gallery: [
      'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Blue fire hanya bisa dilihat antara pukul 02:00 - 04:00 dini hari',
      'Penambang belerang membawa beban 80-100 kg naik turun kawah',
      'Danau kawah Ijen mengandung 200 juta ton air asam',
      'Masker gas wajib karena gas belerang sangat berbahaya'
    ],
    culturalSignificance: 'Dipercaya sebagai tempat berkumpulnya roh-roh halus menurut kepercayaan lokal.',
    relatedLinks: ['Blue Fire Ijen', 'Penambang Belerang', 'Kawah Ijen']
  },
  {
    id: 'gunung-4',
    title: 'Gunung Arjuno-Welirang',
    category: 'Gunung',
    thumbnail: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Malang, Pasuruan, Mojokerto',
    elevation: '3.339 mdpl (Arjuno)',
    status: 'Aktif (Welirang)',
    shortDesc: 'Gunung kembar dengan jalur pendakian menantang dan pemandangan memesona',
    fullDesc: 'Gunung Arjuno (3.339 mdpl) dan Gunung Welirang (3.156 mdpl) adalah dua gunung yang saling berdampingan membentuk kompleks pegunungan yang indah. Arjuno menawarkan berbagai jalur pendakian yang menantang dengan pemandangan hutan tropis, savana, dan puncak yang megah.',
    highlights: [
      'Twin mountains dengan karakter berbeda',
      'Jalur pendakian beragam dengan tingkat kesulitan variatif',
      'Sumber mata air panas di Welirang',
      'Pemandangan sunrise spektakuler'
    ],
    gallery: [
      'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3109816/pexels-photo-3109816.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Nama Arjuno diambil dari tokoh Arjuna dalam Mahabharata',
      'Terdapat 7 jalur pendakian dengan karakter berbeda',
      'Sumber air untuk PDAM kota Malang, Batu, dan Pasuruan',
      'Vegetasi berubah dari hutan tropis ke alpine'
    ],
    culturalSignificance: 'Dipercaya sebagai tempat pertapaan Arjuna dalam pewayangan Jawa.',
    relatedLinks: ['Taman Hutan Raya R. Soerjo', 'Sumber Mata Air', 'Jalur Pendakian']
  }
];

export const tradisiData: CulturalItem[] = [
  {
    id: 'tradisi-1',
    title: 'Yadnya Kasada',
    category: 'Tradisi',
    thumbnail: 'https://images.pexels.com/photos/6207960/pexels-photo-6207960.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Gunung Bromo, Tengger',
    schedule: 'Bulan Kasada (kalender Jawa)',
    shortDesc: 'Upacara lempar sesaji ke kawah Bromo sebagai wujud syukur Suku Tengger',
    fullDesc: 'Yadnya Kasada adalah upacara adat terbesar Suku Tengger yang dilaksanakan setiap tahun di Kawah Gunung Bromo. Ritual ini merupakan bentuk persembahan dan rasa syukur kepada Sang Hyang Widhi (Tuhan) atas berkah yang diberikan. Masyarakat Tengger melemparkan hasil bumi, ternak, dan sesaji ke dalam kawah Bromo sebagai korban suci.',
    highlights: [
      'Prosesi larung sesaji ke kawah Bromo',
      'Ribuan umat berkumpul di puncak kawah',
      'Ritual dipimpin oleh Dukun Pandita',
      'Perebutan sesaji oleh masyarakat sekitar'
    ],
    gallery: [
      'https://images.pexels.com/photos/6207960/pexels-photo-6207960.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Dipercaya bahwa sesaji yang kembali keluar kawah membawa berkah',
      'Tradisi ini sudah berlangsung lebih dari 500 tahun',
      'Nama "Kasada" berasal dari kata "Kasa" (bulan ke-10) dan "Dasa" (sepuluh)',
      'Menjadi daya tarik wisata spiritual tingkat internasional'
    ],
    culturalSignificance: 'Yadnya Kasada menjadi simbol keharmonisan manusia dengan alam dan pencipta-Nya, serta pelestarian kepercayaan Hindu di tengah mayoritas Islam.',
    relatedLinks: ['Suku Tengger', 'Gunung Bromo', 'Legenda Roro Anteng']
  },
  {
    id: 'tradisi-2',
    title: 'Karapan Sapi',
    category: 'Tradisi',
    thumbnail: 'https://images.pexels.com/photos/3651600/pexels-photo-3651600.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Madura',
    schedule: 'Agustus - Oktober',
    shortDesc: 'Balap sapi tradisional Madura yang mendebarkan dan penuh adrenalin',
    fullDesc: 'Karapan Sapi adalah tradisi balap sapi khas Madura yang telah berlangsung berabad-abad. Dua ekor sapi jantan yang telah dilatih khusus akan menarik kereta kayu (kaleles) yang dikemudikan oleh joki. Mereka akan dipacu sekencang mungkin di lintasan sepanjang 100-120 meter. Sapi-sapi karapan ini dirawat sangat istimewa dengan makanan khusus, pijat, dan bahkan diberi jamu.',
    highlights: [
      'Sapi berlari dengan kecepatan hingga 50-60 km/jam',
      'Joki berdiri tegak di atas kereta kayu sambil memecut',
      'Sapi-sapi juara dihargai hingga ratusan juta rupiah',
      'Hiburan musik patrol dan saronen mengiringi'
    ],
    gallery: [
      'https://images.pexels.com/photos/3651600/pexels-photo-3651600.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2252245/pexels-photo-2252245.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Konon tradisi ini berawal dari petani membajak sawah',
      'Sapi juara bisa dihargai hingga Rp 300-500 juta',
      'Joki harus memiliki keberanian dan skill khusus',
      'Menarik perhatian wisatawan mancanegara'
    ],
    culturalSignificance: 'Karapan Sapi mencerminkan jiwa kompetitif, keberanian, dan kebanggaan masyarakat Madura terhadap ternaknya.',
    relatedLinks: ['Sapi Madura', 'Budaya Madura', 'Festival Karapan']
  },
  {
    id: 'tradisi-3',
    title: 'Larung Sembonyo',
    category: 'Tradisi',
    thumbnail: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Pantai Prigi, Trenggalek',
    schedule: 'Bulan Suro (Muharram)',
    shortDesc: 'Upacara larung sesaji ke laut sebagai ungkapan syukur nelayan',
    fullDesc: 'Larung Sembonyo adalah ritual adat nelayan di Pantai Prigi, Trenggalek sebagai bentuk rasa syukur kepada Tuhan atas hasil tangkapan dan keselamatan saat melaut. "Sembonyo" berarti persembahan atau sesaji. Prosesi dimulai dengan ziarah ke makam leluhur, kemudian pembuatan perahu mini berisi sesaji yang dihanyutkan ke laut diiringi doa dan gamelan.',
    highlights: [
      'Perahu mini berisi sesaji dihanyutkan ke laut',
      'Prosesi kirab budaya dengan kostum tradisional',
      'Pembacaan doa oleh tokoh adat dan ulama',
      'Pertunjukan seni dan kesenian tradisional'
    ],
    gallery: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592710/pexels-photo-1592710.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Tradisi ini sudah berlangsung ratusan tahun',
      'Dipercaya jika sesaji diterima laut, hasil tangkapan akan melimpah',
      'Pantai Prigi adalah pelabuhan perikanan terbesar di Jawa Timur selatan',
      'Festival ini menarik hingga 50.000 pengunjung'
    ],
    culturalSignificance: 'Larung Sembonyo merefleksikan harmoni antara manusia dengan laut, serta rasa syukur atas rezeki dari alam.',
    relatedLinks: ['Pantai Prigi', 'Nelayan Trenggalek', 'Tradisi Pesisir']
  },
  {
    id: 'tradisi-4',
    title: 'Kebo-keboan',
    category: 'Tradisi',
    thumbnail: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Banyuwangi (Alasmalang)',
    schedule: 'Setelah panen raya',
    shortDesc: 'Ritual unik warga berperan sebagai kerbau dengan tubuh berlumpur',
    fullDesc: 'Kebo-keboan adalah tradisi unik dari Banyuwangi di mana warga laki-laki menirukan perilaku kerbau dengan tubuh dilumuri lumpur hitam. Ritual ini merupakan ungkapan syukur atas hasil panen yang melimpah dan permohonan agar terhindar dari hama. Para peserta akan berlarian seperti kerbau, berguling-guling di lumpur, bahkan makan rumput seperti kerbau sungguhan.',
    highlights: [
      'Peserta berlumur lumpur hitam dari kepala hingga kaki',
      'Menirukan tingkah laku kerbau secara total',
      'Berguling-guling di sawah dan jalan desa',
      'Diiringi musik patrol dan tawa riuh warga'
    ],
    gallery: [
      'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3651600/pexels-photo-3651600.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Hanya pria dewasa yang boleh ikut ritual',
      'Peserta tidak boleh mandi 7 hari sebelum acara',
      'Lumpur yang digunakan berasal dari sawah yang sudah dipanen',
      'Ditetapkan sebagai Warisan Budaya Tak Benda'
    ],
    culturalSignificance: 'Kebo-keboan mengajarkan nilai kesederhanaan, rasa syukur, dan harmoni antara manusia dengan hewan ternak.',
    relatedLinks: ['Suku Using', 'Pertanian Banyuwangi', 'Ritual Agraris']
  }
];

export const kerajaanData: CulturalItem[] = [
  {
    id: 'kerajaan-1',
    title: 'Kerajaan Majapahit',
    category: 'Kerajaan',
    thumbnail: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Trowulan, Mojokerto',
    period: '1293 - 1527 M',
    rulers: 'Raden Wijaya hingga Prabu Brawijaya V',
    shortDesc: 'Kerajaan Hindu-Buddha terbesar di Nusantara dengan wilayah kekuasaan luas',
    fullDesc: 'Kerajaan Majapahit adalah kerajaan Hindu-Buddha terbesar dalam sejarah Indonesia yang berdiri dari 1293 hingga sekitar 1527 Masehi. Didirikan oleh Raden Wijaya dan mencapai puncak kejayaan di bawah pemerintahan Hayam Wuruk dengan Mahapatih Gajah Mada. Wilayah kekuasaan Majapahit membentang dari Sumatera, Jawa, Bali, hingga sebagian Kalimantan dan Sulawesi.',
    highlights: [
      'Wilayah kekuasaan terluas di Nusantara',
      'Sumpah Palapa Gajah Mada yang legendaris',
      'Peninggalan situs arkeologi di Trowulan',
      'Sistem pemerintahan terorganisir dengan baik'
    ],
    gallery: [
      'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Slogan "Bhinneka Tunggal Ika" berasal dari Kakawin Sutasoma era Majapahit',
      'Ibu kota Majapahit di Trowulan lebih luas dari Paris pada masanya',
      'Sistem irigasi Majapahit sangat canggih dengan kolam dan terusan',
      'Garuda sebagai lambang negara terinspirasi dari Majapahit'
    ],
    culturalSignificance: 'Majapahit menjadi simbol kejayaan peradaban Nusantara dan sumber inspirasi semangat persatuan Indonesia dengan filosofi Bhinneka Tunggal Ika.',
    relatedLinks: ['Museum Trowulan', 'Gajah Mada', 'Candi Majapahit', 'Situs Trowulan']
  },
  {
    id: 'kerajaan-2',
    title: 'Kerajaan Singhasari',
    category: 'Kerajaan',
    thumbnail: 'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Malang',
    period: '1222 - 1292 M',
    rulers: 'Ken Arok hingga Kertanegara',
    shortDesc: 'Kerajaan Hindu-Buddha dengan warisan arsitektur candi yang megah',
    fullDesc: 'Kerajaan Singhasari adalah kerajaan Hindu-Buddha yang berkuasa di Jawa Timur dari tahun 1222 hingga 1292 Masehi. Didirikan oleh Ken Arok yang mengalahkan Kerajaan Kediri. Kerajaan ini mencapai puncak kejayaan di bawah pemerintahan Raja Kertanegara yang ekspansionis. Singhasari meninggalkan warisan arsitektur candi yang spektakuler seperti Candi Singosari, Candi Kidal, dan Candi Jago.',
    highlights: [
      'Arsitektur candi dengan relief berkualitas tinggi',
      'Raja Kertanegara yang pemberani dan visioner',
      'Hubungan diplomasi dengan Dinasti Yuan (Tiongkok)',
      'Seni patung dan relief yang halus dan detail'
    ],
    gallery: [
      'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3109816/pexels-photo-3109816.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Ken Arok naik tahta dengan membunuh Tunggul Ametung menggunakan keris Empu Gandring',
      'Patung Prajnaparamita dianggap salah satu karya seni terbaik Indonesia',
      'Kertanegara menolak tunduk pada Kublai Khan dari Dinasti Yuan',
      'Singhasari adalah cikal bakal Majapahit'
    ],
    culturalSignificance: 'Singhasari menjadi fondasi bagi kejayaan Majapahit dan meninggalkan warisan arsitektur candi yang menjadi masterpiece seni Indonesia.',
    relatedLinks: ['Ken Arok', 'Candi Singosari', 'Kertanegara', 'Majapahit']
  },
  {
    id: 'kerajaan-3',
    title: 'Kerajaan Kediri',
    category: 'Kerajaan',
    thumbnail: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Kediri',
    period: '1042 - 1222 M',
    rulers: 'Sri Jayawarsa hingga Kertajaya',
    shortDesc: 'Kerajaan Hindu dengan puncak kesusastraan Jawa klasik',
    fullDesc: 'Kerajaan Kediri (atau Panjalu) adalah kerajaan Hindu yang berkuasa di Jawa Timur dari 1042 hingga 1222 Masehi, setelah terpecahnya Kerajaan Kahuripan. Masa Kediri dikenal sebagai era keemasan kesusastraan Jawa Kuno dengan lahirnya karya-karya sastra seperti Bharatayuddha, Gatotkacasraya, dan Smaradahana. Kerajaan ini juga memiliki hubungan dagang yang luas dengan Tiongkok dan negara-negara Asia Tenggara.',
    highlights: [
      'Pusat kesusastraan Jawa Kuno',
      'Hubungan perdagangan internasional yang kuat',
      'Karya sastra klasik yang monumental',
      'Sistem pemerintahan yang terorganisir'
    ],
    gallery: [
      'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Ramalan Jayabaya dipercaya meramalkan masa depan Indonesia',
      'Kediri menjadi pusat perdagangan rempah-rempah',
      'Sastra Kakawin berkembang pesat di era ini',
      'Sistem subak (irigasi) Bali berakar dari masa Kediri'
    ],
    culturalSignificance: 'Kediri menjadi pusat pengembangan sastra Jawa Kuno yang menjadi fondasi kesusastraan Nusantara dan warisan budaya tak ternilai.',
    relatedLinks: ['Ramalan Jayabaya', 'Sastra Jawa Kuno', 'Candi Kediri']
  },
  {
    id: 'kerajaan-4',
    title: 'Kerajaan Blambangan',
    category: 'Kerajaan',
    thumbnail: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Banyuwangi',
    period: '1294 - 1772 M',
    rulers: 'Dinasti Menak Sembuyu',
    shortDesc: 'Kerajaan Hindu terakhir di Jawa dengan budaya Using yang khas',
    fullDesc: 'Kerajaan Blambangan adalah kerajaan Hindu terakhir di Pulau Jawa yang bertahan hingga abad ke-18. Kerajaan ini berpusat di wilayah Banyuwangi dengan budaya yang dipengaruhi kuat oleh Bali dan Jawa. Blambangan terkenal dengan kebudayaan Using-nya yang unik, seni tari Gandrung, dan ketahanan dalam mempertahankan Hindu di tengah ekspansi Islam.',
    highlights: [
      'Kerajaan Hindu terakhir di Jawa',
      'Budaya Using yang khas dan masih lestari',
      'Ketahanan melawan ekspansi Islam dan kolonial',
      'Hubungan erat dengan Kerajaan Bali'
    ],
    gallery: [
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8636625/pexels-photo-8636625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Nama "Banyuwangi" berarti air berbau harum',
      'Budaya Using adalah perpaduan Jawa, Bali, dan Osing',
      'Kerajaan ini bertahan 478 tahun',
      'Legenda Siti Sundari yang tragis terkenal di Banyuwangi'
    ],
    culturalSignificance: 'Blambangan menjadi saksi ketahanan budaya Hindu di Jawa dan mewariskan tradisi Using yang unik sebagai identitas Banyuwangi.',
    relatedLinks: ['Suku Using', 'Banyuwangi', 'Tari Gandrung', 'Budaya Using']
  }
];

export const batikData: CulturalItem[] = [
  {
    id: 'batik-1',
    title: 'Batik Madura',
    category: 'Batik',
    thumbnail: 'https://images.pexels.com/photos/6301165/pexels-photo-6301165.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Madura',
    year: 'Tradisional',
    shortDesc: 'Batik dengan warna cerah dan motif bunga yang khas dari Pulau Madura',
    fullDesc: 'Batik Madura terkenal dengan warna-warna cerah dan berani, motif bunga yang besar, serta pewarnaan alami yang khas. Batik ini mencerminkan karakter masyarakat Madura yang terbuka dan ceria. Motif yang populer antara lain pucuk rebung, sekar jagad, dan tanaman pot. Proses pembuatan batik Madura masih menggunakan teknik tulis dan cap tradisional yang diwariskan turun-temurun.',
    highlights: [
      'Warna-warna cerah dan berani',
      'Motif bunga besar dan mencolok',
      'Pewarnaan alami dari tumbuhan lokal',
      'Teknik tulis dan cap tradisional'
    ],
    gallery: [
      'https://images.pexels.com/photos/6301165/pexels-photo-6301165.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6301170/pexels-photo-6301170.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6301176/pexels-photo-6301176.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Setiap daerah di Madura punya ciri khas motif tersendiri',
      'Batik Madura menggunakan warna merah, kuning, dan hijau yang dominan',
      'Proses pewarnaan bisa memakan waktu berminggu-minggu',
      'Batik Madura sering dijadikan busana pesta dan acara resmi'
    ],
    culturalSignificance: 'Batik Madura mencerminkan semangat hidup masyarakat Madura yang penuh warna dan keberanian dalam mengekspresikan identitas budaya mereka.',
    relatedLinks: ['Pewarnaan Alami', 'Motif Madura', 'Sentra Batik Madura']
  },
  {
    id: 'batik-2',
    title: 'Batik Tuban',
    category: 'Batik',
    thumbnail: 'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Tuban',
    year: 'Tradisional',
    shortDesc: 'Batik tertua di Jawa Timur dengan motif geometris dan makna filosofis',
    fullDesc: 'Batik Tuban adalah salah satu batik tertua di Jawa Timur dengan sejarah panjang sejak era Majapahit. Motif batik Tuban didominasi oleh pola geometris, tumbuhan, dan fauna laut. Motif khas seperti Gedog, Alas-alasan, dan Mangrove mencerminkan kehidupan pesisir dan kekayaan alam Tuban. Batik Tuban dikenal dengan warna-warna lembut dan harmonisasi yang indah.',
    highlights: [
      'Batik tertua di Jawa Timur',
      'Motif geometris dan pesisir yang khas',
      'Warna-warna lembut dan harmonis',
      'Makna filosofis dalam setiap motif'
    ],
    gallery: [
      'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6301165/pexels-photo-6301165.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Motif Gedog Tuban telah ada sejak abad ke-14',
      'Batik Tuban sempat hilang dan dihidupkan kembali pada tahun 2000-an',
      'Sentra batik Tuban terletak di Desa Kerek dan Desa Margorejo',
      'Batik Tuban menjadi oleh-oleh khas yang dicari wisatawan'
    ],
    culturalSignificance: 'Batik Tuban menjadi saksi sejarah panjang peradaban pesisir Jawa Timur dan warisan budaya yang terus dilestarikan.',
    relatedLinks: ['Sejarah Batik Tuban', 'Motif Gedog', 'Sentra Batik Kerek']
  },
  {
    id: 'batik-3',
    title: 'Batik Malangan',
    category: 'Batik',
    thumbnail: 'https://images.pexels.com/photos/6301170/pexels-photo-6301170.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Malang',
    year: 'Modern',
    shortDesc: 'Batik kontemporer dengan motif ikon wisata dan budaya Malang',
    fullDesc: 'Batik Malangan adalah batik yang relatif baru dikembangkan dengan menggabungkan motif-motif ikon kota Malang seperti Tugu Malang, bunga, dan pemandangan alam khas Malang. Batik ini memiliki corak yang lebih modern dan fresh, cocok untuk generasi muda. Pewarnaan batik Malangan menggunakan teknik kombinasi pewarnaan alami dan sintetis untuk menghasilkan warna yang cerah namun tetap elegan.',
    highlights: [
      'Motif ikon wisata Malang',
      'Desain kontemporer dan modern',
      'Warna cerah dan elegan',
      'Cocok untuk berbagai kalangan usia'
    ],
    gallery: [
      'https://images.pexels.com/photos/6301170/pexels-photo-6301170.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6301176/pexels-photo-6301176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Motif bunga apel menjadi ciri khas batik Malangan',
      'Batik Malangan dipromosikan sebagai identitas kota Malang',
      'Banyak desainer muda yang mengembangkan batik Malangan',
      'Tersedia dalam berbagai produk fashion modern'
    ],
    culturalSignificance: 'Batik Malangan menjadi simbol inovasi dan adaptasi budaya tradisional dengan konteks modern yang relevan untuk generasi masa kini.',
    relatedLinks: ['Ikon Malang', 'Desainer Batik', 'Fashion Batik Modern']
  },
  {
    id: 'batik-4',
    title: 'Batik Kediri',
    category: 'Batik',
    thumbnail: 'https://images.pexels.com/photos/6301176/pexels-photo-6301176.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Kediri',
    year: 'Tradisional',
    shortDesc: 'Batik dengan motif naga dan legenda Raja Jayabaya yang mistis',
    fullDesc: 'Batik Kediri memiliki karakteristik motif yang terinspirasi dari legenda dan sejarah Kerajaan Kediri, terutama motif naga yang dikaitkan dengan ramalan Raja Jayabaya. Motif lain yang populer adalah bunga teratai, kijing miring, dan pola geometris. Batik Kediri menggunakan warna-warna klasik seperti cokelat soga, indigo, dan merah maroon dengan makna filosofis yang dalam.',
    highlights: [
      'Motif naga dari legenda Jayabaya',
      'Warna klasik dan filosofis',
      'Inspirasi dari sejarah Kerajaan Kediri',
      'Teknik pewarnaan soga tradisional'
    ],
    gallery: [
      'https://images.pexels.com/photos/6301176/pexels-photo-6301176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6301165/pexels-photo-6301165.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Motif naga Kediri dipercaya membawa keberuntungan',
      'Batik Kediri sempat hilang dan dihidupkan kembali',
      'Proses pewarnaan menggunakan kulit pohon tingi',
      'Banyak digunakan dalam upacara adat dan pernikahan'
    ],
    culturalSignificance: 'Batik Kediri menjadi media penyampaian nilai-nilai historis dan spiritual Kerajaan Kediri yang legendaris.',
    relatedLinks: ['Ramalan Jayabaya', 'Kerajaan Kediri', 'Pewarnaan Soga']
  }
];

export const panaiData: CulturalItem[] = [
  {
    id: 'pantai-1',
    title: 'Pantai Papuma',
    category: 'Pantai',
    thumbnail: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Jember',
    year: 'Destinasi Wisata',
    shortDesc: 'Pantai dengan pasir putih dan formasi batu karang yang indah',
    fullDesc: 'Pantai Papuma (Pasir Putih Malikan) adalah salah satu pantai terindah di Jawa Timur dengan pasir putih bersih dan formasi batu karang yang unik. Pantai ini menawarkan pemandangan sunset yang spektakuler dengan latar belakang bukit-bukit hijau. Di pantai ini terdapat beberapa pulau kecil dan batu besar yang bisa dijelajahi saat air laut surut. Ombaknya yang tenang cocok untuk berenang dan aktivitas air lainnya.',
    highlights: [
      'Pasir putih bersih dan lembut',
      'Formasi batu karang yang artistik',
      'Sunset yang memukau',
      'Pulau-pulau kecil yang bisa dikunjungi'
    ],
    gallery: [
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592710/pexels-photo-1592710.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Nama Papuma singkatan dari Pasir Putih Malikan',
      'Terdapat legenda Putri Mandalika yang mengabadikan diri di pantai ini',
      'Spot foto paling populer adalah Batu Gong',
      'Air lautnya jernih dengan gradasi warna biru yang indah'
    ],
    culturalSignificance: 'Pantai Papuma menjadi destinasi wisata andalan Jember dan simbol keindahan alam pesisir selatan Jawa Timur.',
    relatedLinks: ['Wisata Jember', 'Pantai Selatan Jawa Timur', 'Batu Gong']
  },
  {
    id: 'pantai-2',
    title: 'Pantai Pulau Merah',
    category: 'Pantai',
    thumbnail: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Banyuwangi',
    year: 'Destinasi Wisata',
    shortDesc: 'Pantai surfer paradise dengan bukit merah yang ikonik',
    fullDesc: 'Pantai Pulau Merah adalah destinasi surfing terbaik di Jawa Timur dengan ombak yang menantang dan konsisten. Keunikan pantai ini adalah adanya bukit kecil berwarna merah yang berdiri di tepi pantai dan bisa diakses saat air laut surut. Pantai ini sering menjadi lokasi kompetisi surfing internasional. Selain surfing, pengunjung juga bisa menikmati sunset yang indah dan kuliner seafood segar.',
    highlights: [
      'Spot surfing terbaik di Jawa Timur',
      'Bukit merah yang ikonik',
      'Ombak konsisten untuk surfing',
      'Sunset yang memesona'
    ],
    gallery: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592710/pexels-photo-1592710.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Sering menjadi venue kompetisi surfing internasional',
      'Bukit merah terbentuk dari tanah laterit',
      'Tinggi ombak bisa mencapai 4-6 meter',
      'Menjadi spot foto pre-wedding favorit'
    ],
    culturalSignificance: 'Pantai Pulau Merah menjadi ikon wisata Banyuwangi dan pusat pengembangan olahraga surfing di Indonesia Timur.',
    relatedLinks: ['Surfing Banyuwangi', 'Wisata Banyuwangi', 'Kompetisi Surfing']
  },
  {
    id: 'pantai-3',
    title: 'Pantai Balekambang',
    category: 'Pantai',
    thumbnail: 'https://images.pexels.com/photos/1592710/pexels-photo-1592710.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Malang',
    year: 'Destinasi Wisata',
    shortDesc: 'Pantai dengan tiga pulau kecil dan pura yang menyerupai Tanah Lot Bali',
    fullDesc: 'Pantai Balekambang terkenal dengan tiga pulau kecil di tengah laut yang dihubungkan dengan jembatan. Di salah satu pulau terdapat pura yang arsitekturnya menyerupai Tanah Lot di Bali. Pantai ini memiliki pasir putih yang bersih, air laut yang jernih, dan pemandangan yang sangat indah. Pengunjung bisa menyeberang ke pulau-pulau tersebut saat air laut surut untuk menikmati pemandangan dari ketinggian.',
    highlights: [
      'Tiga pulau kecil di tengah laut',
      'Pura dengan arsitektur khas Bali',
      'Jembatan penghubung antar pulau',
      'Pemandangan sunset yang romantis'
    ],
    gallery: [
      'https://images.pexels.com/photos/1592710/pexels-photo-1592710.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Disebut sebagai "Tanah Lot-nya Jawa Timur"',
      'Pura dibangun oleh masyarakat Hindu Bali yang bermigrasi',
      'Ada upacara keagamaan Hindu setiap tahun',
      'Spot foto terbaik saat golden hour'
    ],
    culturalSignificance: 'Pantai Balekambang menjadi simbol toleransi beragama dan akulturasi budaya Jawa-Bali di Malang.',
    relatedLinks: ['Wisata Malang Selatan', 'Pura Balekambang', 'Akulturasi Budaya']
  },
  {
    id: 'pantai-4',
    title: 'Pantai Gili Ketapang',
    category: 'Pantai',
    thumbnail: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Probolinggo',
    year: 'Destinasi Wisata',
    shortDesc: 'Pulau kecil dengan pantai eksotis dan penangkaran penyu',
    fullDesc: 'Gili Ketapang adalah pulau kecil di Selat Madura yang bisa diakses dengan perahu dari Probolinggo. Pulau ini menawarkan pantai yang masih asri dengan air laut yang jernih dan terumbu karang yang indah. Di pulau ini terdapat penangkaran penyu yang menjadi daya tarik utama. Pengunjung juga bisa snorkeling, diving, dan menikmati kelapa muda segar sambil bersantai di tepi pantai.',
    highlights: [
      'Pulau kecil yang masih asri',
      'Penangkaran penyu hijau',
      'Spot snorkeling dan diving',
      'Terumbu karang yang indah'
    ],
    gallery: [
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592710/pexels-photo-1592710.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Bisa melihat tukik (bayi penyu) dilepas ke laut',
      'Perjalanan dengan perahu sekitar 30 menit dari Probolinggo',
      'Pulau ini dihuni sekitar 8.000 penduduk',
      'Terkenal dengan olahan ikan segar yang murah'
    ],
    culturalSignificance: 'Gili Ketapang menjadi destinasi wisata edukatif dan konservasi penyu yang penting di Jawa Timur.',
    relatedLinks: ['Konservasi Penyu', 'Wisata Probolinggo', 'Snorkeling Jawa Timur']
  }
];

export const musikData: CulturalItem[] = [
  {
    id: 'musik-1',
    title: 'Gamelan Jawa Timur',
    category: 'Musik',
    thumbnail: 'https://images.pexels.com/photos/8181178/pexels-photo-8181178.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Seluruh Jawa Timur',
    year: 'Tradisional',
    shortDesc: 'Ensemble musik tradisional dengan gamelan yang khas dan dinamis',
    fullDesc: 'Gamelan Jawa Timur memiliki karakteristik yang lebih dinamis dan keras dibandingkan gamelan Jawa Tengah. Instrumen yang digunakan meliputi kendang, saron, bonang, gong, dan gender. Gamelan Jawa Timur sering digunakan untuk mengiringi wayang kulit, ludruk, dan berbagai pertunjukan tari tradisional. Tempo dan dinamika permainannya mencerminkan karakter masyarakat Jawa Timur yang tegas dan energik.',
    highlights: [
      'Tempo lebih cepat dan dinamis',
      'Suara yang lebih keras dan tegas',
      'Mengiringi berbagai pertunjukan tradisional',
      'Instrumen lengkap dengan laras pelog dan slendro'
    ],
    gallery: [
      'https://images.pexels.com/photos/8181178/pexels-photo-8181178.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7991598/pexels-photo-7991598.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8636390/pexels-photo-8636390.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Gamelan Jawa Timur lebih keras karena pengaruh budaya pesisir',
      'Setiap kota punya gaya gamelan yang sedikit berbeda',
      'Pemain gamelan harus latihan bertahun-tahun',
      'Gamelan dianggap sakral dan punya nilai spiritual'
    ],
    culturalSignificance: 'Gamelan Jawa Timur menjadi identitas musik tradisional yang merefleksikan semangat dan karakter masyarakat Jawa Timur.',
    relatedLinks: ['Wayang Kulit', 'Ludruk', 'Instrumen Gamelan']
  },
  {
    id: 'musik-2',
    title: 'Musik Using',
    category: 'Musik',
    thumbnail: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Banyuwangi',
    year: 'Tradisional',
    shortDesc: 'Musik etnik khas Banyuwangi dengan biola dan kendang yang merdu',
    fullDesc: 'Musik Using adalah musik tradisional khas Banyuwangi yang unik dengan penggunaan biola sebagai instrumen utama. Musik ini mengiringi pertunjukan Gandrung dan berbagai ritual adat. Perpaduan antara biola, kendang, gong, dan angklung menciptakan harmoni yang khas. Lagu-lagu Using biasanya bertema cinta, kehidupan sehari-hari, dan alam Banyuwangi.',
    highlights: [
      'Biola sebagai instrumen utama',
      'Melodi yang merdu dan menyentuh',
      'Mengiringi Tari Gandrung',
      'Lirik dalam bahasa Using'
    ],
    gallery: [
      'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8636625/pexels-photo-8636625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Biola dibawa oleh pedagang Arab dan Eropa',
      'Pemain biola Using sangat dihormati di masyarakat',
      'Lagu "Genjer-genjer" berasal dari tradisi Using',
      'Musik Using kini mulai dikombinasi dengan musik modern'
    ],
    culturalSignificance: 'Musik Using menjadi identitas budaya Suku Using dan media pelestarian bahasa serta tradisi Banyuwangi.',
    relatedLinks: ['Suku Using', 'Tari Gandrung', 'Bahasa Using']
  },
  {
    id: 'musik-3',
    title: 'Saronen Madura',
    category: 'Musik',
    thumbnail: 'https://images.pexels.com/photos/6207875/pexels-photo-6207875.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Madura',
    year: 'Tradisional',
    shortDesc: 'Musik tiup tradisional dengan saronen yang meriah dan energik',
    fullDesc: 'Saronen adalah musik tradisional Madura yang menggunakan alat musik tiup bernama saronen sebagai instrumen utama. Musik ini biasanya dimainkan dalam acara-acara besar seperti karapan sapi, pernikahan, dan khitanan. Suara saronen yang keras dan nyaring dikombinasikan dengan kendang dan gong menciptakan suasana meriah dan penuh semangat. Irama musik saronen sangat dinamis dan menghentak.',
    highlights: [
      'Instrumen tiup saronen yang khas',
      'Irama yang meriah dan menghentak',
      'Mengiringi acara besar masyarakat',
      'Kombinasi dengan kendang dan gong'
    ],
    gallery: [
      'https://images.pexels.com/photos/6207875/pexels-photo-6207875.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3651600/pexels-photo-3651600.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Saronen mirip dengan terompet tradisional',
      'Pemain saronen harus punya napas kuat',
      'Setiap daerah di Madura punya gaya saronen berbeda',
      'Musik saronen wajib ada di karapan sapi'
    ],
    culturalSignificance: 'Musik Saronen menjadi soundtrack kehidupan masyarakat Madura dan simbol keceriaan dalam setiap perayaan.',
    relatedLinks: ['Karapan Sapi', 'Budaya Madura', 'Instrumen Tiup Tradisional']
  },
  {
    id: 'musik-4',
    title: 'Angklung Paglak',
    category: 'Musik',
    thumbnail: 'https://images.pexels.com/photos/8636390/pexels-photo-8636390.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Banyuwangi',
    year: 'Tradisional',
    shortDesc: 'Musik angklung khas Banyuwangi dengan suara yang khas dan mistis',
    fullDesc: 'Angklung Paglak adalah ansambel musik tradisional Banyuwangi yang menggunakan angklung bambu dengan ukuran besar. Musik ini biasanya dimainkan dalam upacara adat dan ritual keagamaan. Suara angklung yang dipadukan dengan kendang dan kenong menciptakan harmoni yang unik dan mistis. Angklung Paglak juga mengiringi tari-tarian tradisional Banyuwangi.',
    highlights: [
      'Angklung bambu berukuran besar',
      'Suara yang mistis dan sakral',
      'Mengiringi upacara adat',
      'Teknik permainan khas Banyuwangi'
    ],
    gallery: [
      'https://images.pexels.com/photos/8636390/pexels-photo-8636390.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8636625/pexels-photo-8636625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Angklung Paglak berbeda dengan angklung Sunda',
      'Dimainkan dengan cara digoyangkan',
      'Setiap angklung punya nada tertentu',
      'Proses pembuatan angklung butuh bambu pilihan'
    ],
    culturalSignificance: 'Angklung Paglak menjadi musik sakral yang menghubungkan manusia dengan dimensi spiritual dalam kepercayaan masyarakat Banyuwangi.',
    relatedLinks: ['Ritual Banyuwangi', 'Bambu Tradisional', 'Musik Sakral']
  }
];

export const warisanData: CulturalItem[] = [
  {
    id: 'warisan-1',
    title: 'Wayang Kulit Jawa Timur',
    category: 'Warisan',
    thumbnail: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Seluruh Jawa Timur',
    year: 'UNESCO 2003',
    shortDesc: 'Pertunjukan wayang kulit dengan lakon dan gaya khas Jawa Timur',
    fullDesc: 'Wayang Kulit Jawa Timur memiliki ciri khas dalam gaya penyampaian cerita (pakeliran) yang lebih keras, tegas, dan dinamis dibandingkan wayang Jawa Tengah. Dalang menggunakan bahasa Jawa dialek Surabayan dengan gaya ngoko dan krama yang khas. Lakon yang dimainkan tidak hanya dari Ramayana dan Mahabharata, tetapi juga cerita lokal. Wayang kulit telah ditetapkan UNESCO sebagai Masterpiece of Oral and Intangible Heritage of Humanity.',
    highlights: [
      'Gaya pakeliran yang tegas dan dinamis',
      'Bahasa Jawa dialek Surabayan',
      'Musik gamelan yang lebih keras',
      'UNESCO Intangible Heritage'
    ],
    gallery: [
      'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Pertunjukan wayang bisa berlangsung semalam suntuk',
      'Dalang harus hafal ratusan lakon',
      'Setiap tokoh wayang punya karakter gerakan khas',
      'Wayang kulit terbuat dari kulit kerbau'
    ],
    culturalSignificance: 'Wayang kulit menjadi media pendidikan moral, filosofi kehidupan, dan pelestarian sastra klasik Jawa.',
    relatedLinks: ['Gamelan Jawa Timur', 'Dalang', 'Lakon Wayang']
  },
  {
    id: 'warisan-2',
    title: 'Ludruk',
    category: 'Warisan',
    thumbnail: 'https://images.pexels.com/photos/7991598/pexels-photo-7991598.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Surabaya',
    year: 'Warisan Budaya',
    shortDesc: 'Teater rakyat khas Surabaya dengan humor dan kritik sosial',
    fullDesc: 'Ludruk adalah teater tradisional khas Surabaya yang menampilkan drama komedi dengan dialog menggunakan bahasa Surabaya (Jawa Timuran). Pertunjukan dibuka dengan Tari Remo, dilanjutkan dengan cerita kehidupan sehari-hari masyarakat yang dikemas dengan humor dan kritik sosial. Uniknya, semua peran termasuk peran wanita dimainkan oleh laki-laki. Ludruk menjadi cermin kehidupan dan aspirasi masyarakat urban Surabaya.',
    highlights: [
      'Teater rakyat khas Surabaya',
      'Dialog bahasa Jawa Surabayan',
      'Humor dan kritik sosial',
      'Semua peran dimainkan laki-laki'
    ],
    gallery: [
      'https://images.pexels.com/photos/7991598/pexels-photo-7991598.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8181178/pexels-photo-8181178.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8636390/pexels-photo-8636390.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Ludruk berasal dari kata "luru ndalam" yang berarti mencari ke dalam',
      'Tokoh Cak Durasim adalah legendaris dalam ludruk',
      'Pertunjukan ludruk bisa berlangsung 3-4 jam',
      'Ludruk sempat dilarang di era Orde Baru'
    ],
    culturalSignificance: 'Ludruk menjadi media ekspresi rakyat kecil Surabaya dan sarana kritik sosial yang halus namun tajam.',
    relatedLinks: ['Tari Remo', 'Teater Rakyat', 'Budaya Surabaya']
  },
  {
    id: 'warisan-3',
    title: 'Upacara Kasada',
    category: 'Warisan',
    thumbnail: 'https://images.pexels.com/photos/6207960/pexels-photo-6207960.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Bromo, Tengger',
    year: 'Warisan Budaya',
    shortDesc: 'Ritual adat Suku Tengger yang sakral dan penuh makna',
    fullDesc: 'Upacara Kasada atau Yadnya Kasada adalah ritual adat terbesar Suku Tengger di Gunung Bromo. Upacara ini merupakan wujud syukur dan persembahan kepada Sang Hyang Widhi atas berkah yang diterima. Masyarakat Tengger melempar sesaji ke kawah Bromo sebagai korban suci. Ritual ini terkait dengan legenda Roro Anteng dan Joko Seger. Upacara Kasada menjadi daya tarik wisata spiritual yang unik.',
    highlights: [
      'Ritual adat sakral Suku Tengger',
      'Prosesi lempar sesaji ke kawah Bromo',
      'Terkait legenda Roro Anteng',
      'Daya tarik wisata spiritual'
    ],
    gallery: [
      'https://images.pexels.com/photos/6207960/pexels-photo-6207960.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Upacara berlangsung setiap bulan Kasada (kalender Jawa)',
      'Ribuan orang berkumpul di kawah Bromo',
      'Sesaji yang kembali keluar kawah dipercaya membawa berkah',
      'Tradisi sudah berlangsung ratusan tahun'
    ],
    culturalSignificance: 'Upacara Kasada menjadi simbol kesetiaan Suku Tengger pada leluhur dan harmoni dengan alam.',
    relatedLinks: ['Suku Tengger', 'Gunung Bromo', 'Legenda Roro Anteng']
  },
  {
    id: 'warisan-4',
    title: 'Keris Madura',
    category: 'Warisan',
    thumbnail: 'https://images.pexels.com/photos/3651600/pexels-photo-3651600.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Madura',
    year: 'UNESCO 2005',
    shortDesc: 'Senjata tradisional dengan nilai spiritual dan seni tinggi',
    fullDesc: 'Keris Madura adalah senjata tradisional yang memiliki nilai seni, budaya, dan spiritual yang tinggi. Keris Madura dikenal dengan bentuk bilah yang khas, pamor yang indah, dan ukiran warangka (sarung) yang artistik. Pembuatan keris melibatkan ritual spiritual dan pengetahuan metalurgi tradisional yang kompleks. Keris tidak hanya sebagai senjata, tetapi juga sebagai pusaka yang diyakini memiliki kekuatan mistis.',
    highlights: [
      'Bilah dengan pamor yang indah',
      'Warangka dengan ukiran artistik',
      'Proses pembuatan dengan ritual spiritual',
      'UNESCO Intangible Heritage'
    ],
    gallery: [
      'https://images.pexels.com/photos/3651600/pexels-photo-3651600.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    funFacts: [
      'Keris ditetapkan UNESCO sebagai Masterpiece of Humanity tahun 2005',
      'Setiap keris memiliki "dapur" atau bentuk yang berbeda',
      'Pamor keris dibuat dengan teknik pelapisan logam',
      'Empu (pembuat keris) adalah profesi yang sangat dihormati'
    ],
    culturalSignificance: 'Keris menjadi simbol keberanian, kejayaan, dan identitas budaya Nusantara dengan nilai filosofis yang mendalam.',
    relatedLinks: ['Empu Keris', 'Pamor Keris', 'Budaya Madura']
  }
];

export const allCategories = {
  Tarian: tarianData,
  Kuliner: kulinerData,
  Gunung: gunungData,
  Tradisi: tradisiData,
  Kerajaan: kerajaanData,
  Batik: batikData,
  Pantai: panaiData,
  Musik: musikData,
  Warisan: warisanData
};

export const allData = [
  ...tarianData,
  ...kulinerData,
  ...gunungData,
  ...tradisiData,
  ...kerajaanData,
  ...batikData,
  ...panaiData,
  ...musikData,
  ...warisanData
];
