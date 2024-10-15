class NewsController {

  static async listNews(request, response) {
    const { q } = request.query;
    const url = `https://newsapi.org/v2/everything?q=${q}&language=pt&apiKey=${process.env.API_KEY}`;
    const data = await (await fetch(url)).json();

    response.status(200).json(data);
  }
}

export { NewsController };
