const fs = require('fs');
const FILE_DIR = '../';
const PORTOFOLIO_JSON_FILE = 'conf.json';
const PORTOFOLIO_NEW_JSON_FILE = 'new_conf.json';
const files = fs.readdirSync(FILE_DIR);

const CATEGORIES_LIST = ['Alojamiento', 'Naturaleza', 'Eventos', 'Lugar de Vida', 'Productos'];

fs.readFile(PORTOFOLIO_JSON_FILE, function read(err, data) {
  if (err) {
    createPortfolioJSON({
      images: {},
      categories: CATEGORIES_LIST
    });
    return;
  }
  createPortfolioJSON(JSON.parse(data));
});

function createPortfolioJSON(portfolioJSON) {

  for (i in files) {
    if (!fs.existsSync(FILE_DIR + '/' + files[i]) || fs.lstatSync(FILE_DIR + '/' + files[i]).isDirectory()) {
      continue;
    }

    if (portfolioJSON.images.hasOwnProperty(files[i])) {
      continue;
    }

    portfolioJSON.images[files[i]] = {
      title: '',
      subtitle: '',
      categories: CATEGORIES_LIST,
      size: 1,
      portrait: false,
      showOnIndex: false
    };
  }

  console.log(portfolioJSON);

  fs.writeFile(PORTOFOLIO_NEW_JSON_FILE, JSON.stringify(portfolioJSON, null, 2), function (err) {
    if (err) throw err;
    console.log('Portfolio configuration saved in ' + PORTOFOLIO_NEW_JSON_FILE + '!');
  });

}

