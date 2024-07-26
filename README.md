# GroceryList

GroceryList is a dynamic React project designed to showcase the full range of React features while integrating a mock API using JSON Server. This application allows users to efficiently manage their grocery shopping needs in a user-friendly interface.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete grocery items.
- **Local Storage Persistence:** All data is stored in the browser's local storage, ensuring persistence across sessions.
- **Pagination:** Easily navigate through multiple pages of grocery items.
- **Responsive Design:** The application is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **JSON Server:** A full fake REST API that helps in creating a mock API quickly.
- **Local Storage:** Web storage that allows JavaScript to store and retrieve data on the user's machine.
- **CSS:** For styling and ensuring responsive design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshMN2345/GroceryList.git
   cd GroceryList
npm run dev
npm run json-server
"scripts": {
  "json-server": "json-server --watch db.json --port 5000"
}
