# React + Vite Frontend — Mini Full-Stack Search

This is a React (Vite + SCSS) frontend for Task A — Mini Full-Stack Search.
This application provides a simple UI for searching FAQs based on queries sent to the backend API.

Key features:

- Search bar + button
- Loading state
- Empty state
- Error state
- Displays the top 3 search results
- Body snippet + summary (bonus)
- Styling using SCSS

The backend API runs on Node.js/Express and is available in a separate repository at [this link](https://github.com/NamriHolmes-indo/BackEnd-Search-for-Vue.git).

## Tech Stack
- React + Vite
- SCSS for styling
- Native fetch API
- Backend: Node.js + Express (must be downloaded separately)

## Install Dependencies
After cloning, make sure you are in the backend folder.

```bash
npm install
```

## Running the Frontend
Run the development server:
```bash
npm run dev

```

The application will run on:
```bash
http://localhost:5173
```

## Notes
- The frontend validates empty queries.
- Errors from the backend are displayed to the user.
- All results appear in a responsive SCSS layout.
- No additional libraries are used to maintain simplicity and meet requirements.
