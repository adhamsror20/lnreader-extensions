const axios = require("axios");
const cheerio = require("cheerio");

class TruthNovel {
  get name() {
    return "TruthNovel";
  }

  get baseUrl() {
    return "https://truthnovel.top";
  }

  async getChapterDetails(url) {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const title = $("h1").text();

    let content = "";
    $(".entry-content p").each((i, el) => {
      content += `<p>${$(el).text()}</p>`;
    });

    return {
      title,
      content,
    };
  }
}

module.exports = TruthNovel;
