# Rickverse — Frontend

Single-page application built with React that consumes both the public [Rick and Morty API](https://rickandmortyapi.com/) and the Rickverse backend API. Requires the backend to be running or available at the configured URL.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 17 | UI library |
| React Router DOM | 6 | Client-side routing |
| Redux | 4 | Global state management |
| Redux Thunk | 2 | Async action middleware |
| Axios | 1 | HTTP requests |
| React Hot Toast | 2 | Toast notifications |

---

## Project Structure

```
src/
├── App.js                  # Root component — routing, login state, search logic
├── index.js                # Entry point, Redux Provider, BrowserRouter
├── redux/
│   ├── store.js            # Redux store with thunk middleware
│   ├── reducer.js          # Handles favorites, filter, order, species actions
│   └── actions.js          # Thunk actions: addFav, removeFav, filterCards, orderCards, speciesCards
└── components/
    ├── Form/               # Login form with client-side validation
    ├── Navbar/             # Nav bar + SearchBar (search by character ID)
    ├── Cards/              # Home grid of searched characters
    ├── Detail/             # Single character detail view
    ├── Favorites/          # Favorites list with filter/sort controls
    ├── AllCharacters/      # Paginated full character gallery
    └── About/              # About page
```

---

## Installation & Setup

**Prerequisites:** Node.js 16+, the Rickverse backend running (see `/Server`).

```bash
# 1. Install dependencies
cd Client
npm install

# 2. Start development server (port 3000)
npm start
```

The app points to the backend at `https://rickverse-backend.onrender.com` by default. To use a local backend, replace that URL in `src/App.js` and `src/redux/actions.js` with `http://localhost:3001`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Starts the dev server on port 3000 |
| `npm run build` | Creates an optimized production build in `/build` |
| `npm test` | Runs the test suite with Jest |

---

## Features

- **Login** — Authenticates against the backend with email and password. Client-side validation enforces valid email format and a 6–10 character password containing at least one number.
- **Character search** — Search any character by numeric ID from the Rick and Morty API. Prevents duplicate additions with toast feedback.
- **Character detail** — Full detail view for each character, including status, species, origin, location, gender, type, and episode list.
- **All Characters gallery** — Browse the full character catalogue with server-side pagination (previous / next).
- **Favorites** — Add or remove characters from a persisted favorites list (stored in the backend). Supports filtering by gender or species and sorting by ID ascending/descending.
- **Dark mode** — Toggle between light and dark themes across all views.

---

## State Management

Redux manages two pieces of state:

| Key | Description |
|---|---|
| `myFavorites` | Active list (after filters/sort are applied) |
| `allCharactersFav` | Source-of-truth copy used to restore state after filters are cleared |

Actions that mutate favorites (`ADD_FAV`, `REMOVE_FAV`) sync with the backend and replace both keys. Filter and order actions operate only on `myFavorites` without hitting the network.

---

## Credentials (demo)

```
Email:    Thiagozambonini24@gmail.com
Password: Thiago123
```

---

## Links

- [Rick and Morty API](https://rickandmortyapi.com/)
- [LinkedIn — Thiago Zambonini](https://www.linkedin.com/in/thiago-zambonini-2a279a239/)
