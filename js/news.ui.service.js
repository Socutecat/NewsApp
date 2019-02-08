class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        // console.time();
        const template = NewsUI.generateArticleTemplate(article);
        // console.timeEnd();
        this.newsContainer.insertAdjacentHTML("afterbegin", template);
    }
    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    showEmptyMessage() {
        const simpleTample = NewsUI.emptyArticle();
        this.newsContainer.insertAdjacentHTML("afterbegin", simpleTample)
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${article.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${article.title || ''}</span>

                    <p>${article.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    static emptyArticle() {
        return `
        <div class="col s12"> 
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Not Found</span>
                </div>
            </div>
        </div>`
    }
}
