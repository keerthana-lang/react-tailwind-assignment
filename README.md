# React Tailwind Assignment 🚀

This is a React project styled with Tailwind CSS that demonstrates the use of multiple components and props. The application includes a simple login screen, responsive navbar, and a list of users passed via props.

## 🔧 Technologies Used

- ⚛️ React (Vite)
- 💨 Tailwind CSS
- 🧠 Props (React data passing concept)
- 🎨 Responsive UI with Flexbox and Grid

## ✨ Features

- 🔐 Login screen (user enters name)
- 📱 Responsive Navbar
- 🙋 Welcome message (shows entered name via props)
- 📊 Stats card (shows total users via props)
- 👤 User list (dynamic user data passed via props)
- 🦶 Clean footer with year and credits

## 🧩 Components Used

| Component        | Purpose                          |
|------------------|----------------------------------|
| `Navbar`         | Responsive top navigation bar    |
| `Login`          | Login input screen (controlled)  |
| `WelcomeMessage` | Displays greeting (via props)    |
| `StatsCard`      | Shows user count (via props)     |
| `UserList`       | Loops through users (via props)  |
| `UserCard`       | Displays individual user         |
| `Footer`         | Footer text at bottom            |

## 💡 Props Used

- `WelcomeMessage` receives: `name`
- `StatsCard` receives: `count`
- `UserList` receives: `users` array
- `UserCard` receives: `name`, `age`

## 📁 Folder Structure

my-project/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Login.jsx
│ │ ├── WelcomeMessage.jsx
│ │ ├── StatsCard.jsx
│ │ ├── UserList.jsx
│ │ └── UserCard.jsx
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md

