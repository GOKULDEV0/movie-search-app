#  OMDb Movie Search App

A responsive web app that allows users to search for movies using the **OMDb API** and view results in a clean, card-based layout.

---

##  Overview

This app uses the [OMDb API](https://www.omdbapi.com/) to fetch and display movie data based on user input.

###  API Endpoints Used

* **Search Endpoint:**

  ```
  https://www.omdbapi.com/?s={SEARCH_TERM}&apikey={YOUR_API_KEY}
  ```

  Used to retrieve a list of movies based on the user's search query.

* **(Optional) Detail Endpoint:**

  ```
  https://www.omdbapi.com/?i={IMDB_ID}&apikey={YOUR_API_KEY}
  ```

  Used to fetch full details of a movie using its IMDb ID. *(Not implemented by default in this version)*

---

##  Features

* Search for movies by title.
* Displays results in responsive cards.
* Includes movie poster, title, and release year.
* Placeholder image shown for missing posters.
* Responsive layout using **CSS Grid**.
* Graceful error handling for:

  * Empty results
  * Network failures
  * Invalid API keys

---

## 🛠️ Project Setup

### 1. Clone the Repository

```
git clone https://github.com/your-username/omdb-movie-search-app.git
cd omdb-movie-search-app
```

### 2. Insert Your API Key

1. Visit: [OMDb API Signup](http://www.omdbapi.com/apikey.aspx)
2. Get your free API key.
3. Open `app.js` and replace `'YOUR_API_KEY_HERE'` with your actual key:

```javascript
const API_KEY = 'your_actual_api_key';
```

### 3. Run the App

Simply open `index.html` in your browser.

---

##  Usage Instructions

1. Enter a movie title in the search box.
2. Click the **Search** button.
3. View movie results including:

   * Poster image
   * Movie title
   * Release year

> If a movie doesn't have a poster, a default placeholder will be shown.

---

##  File Structure

```
.
├── index.html      // HTML structure
├── styles.css      // Styling and layout
├── app.js          // JavaScript functionality and API integration
└── README.md       // Project documentation
```

---

##  Responsive Design

* **Mobile**: 1 column
* **Tablet/Desktop**: 2–3 columns
* Built using **CSS Grid** and **flexible layout units**

---

##  Testing

Tested successfully on:

* ✅ Google Chrome (latest)
* ✅ Mozilla Firefox (latest)

---

##  Challenges & Solutions

| Challenge                            | Solution                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------ |
| Some movies don't have poster images | Used a placeholder image for `"Poster": "N/A"`                           |
| Empty or invalid search terms        | Disabled search for empty inputs; user must enter a valid title          |
| Handling API/network errors          | Wrapped fetch in try/catch and displayed user-friendly messages          |
| Responsive layout across devices     | Used CSS Grid with `auto-fit` and `minmax()` for flexible responsiveness |

---

##  Live Demo (Optional)

If deployed, add your link here:

```
https://your-username.github.io/omdb-movie-search-app/
```

---

##  License

This project is open source and available under the [MIT License](LICENSE) *(add one if needed)*.

---

##  Contributions

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

##  Contact

For questions or feedback, feel free to contact me at:

```
your.email@example.com
```

Or visit my GitHub profile: [https://github.com/your-username](https://github.com/your-username)

---
