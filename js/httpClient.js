class HttpClient {
    /**
     * 
     * @param {String} url 
     * @param {Function} callback
     */
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('X-Api-Key', ENV.apiKey);
        xhr.send();
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
    }

     /**
     * 
     * @param {String} url 
     * @param {any} data
     * @param {Function} callback
     */
}