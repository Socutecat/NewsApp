const newsService = new NewsService();
const uiService = new NewsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const inputSelect = form['search'];
const submitSelect = form['submit']

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}



function onInputChange(event) {
    const select = inputSelect.value;

    if (select.length <= 3 ) {
        newsService.getTopHeadlinesNews(category, country, (response) => {
            const { totalResults, articles } = response;
    
            // console.time();
            uiService.clearContainer();
            // console.timeEnd();
    
            // console.time();
            articles.forEach((article) => uiService.addArticle(article));
            // console.timeEnd();
        });
    } else {
        newsService.getNewsByPhrase(select, (response) => {
            const {totalResults, articles} = response;
             // console.time();
             uiService.clearContainer();
             // console.timeEnd();
    
             if (!totalResults) {
                 uiService.showEmptyMessage();
             }
             // console.time();
             articles.forEach((article) => uiService.addArticle(article));
             // console.timeEnd();    
        })
    }
};

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (inputSelect.value) {
//         getNewsByPhrase();
//     }
// });


countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
inputSelect.addEventListener('keyup',onInputChange);




