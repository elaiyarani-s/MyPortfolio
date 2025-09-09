# MyPortfolio

Personal portfolio website to showcase professional experience, skills, and projects. Built with modern web technologies to be responsive, interactive, and easy to maintain.

## 🚀 Features

- **Dynamic Experience Section**: Loaded from JSON data with filter by company.

- **Interactive Projects Section:** Projects loaded dynamically with filters by technology and year.

- **Toggleable Project Descriptions**: Click project image to show/hide details.

- **ScrollSpy Navigation**: Highlights current section in the navbar.

- **Dark Mode Support**: Switch between light/dark themes.

- **AOS Animations**: Smooth scroll animations throughout the site.

- **Responsive Layout**: Optimized for mobile, tablet, and desktop.

## 🧩 Tech Stack

- **HTML5, CSS3, Bootstrap 5**

- **Vanilla JavaScript**

- **AOS** for on-scroll animations

- **Local and CDN image hosting**

## 📁 Project Structure

    /index.html             *-- Main HTML with dynamic sections and navigation*
    /experienceData.js      *-- JSON data for experiences*
    /experienceRender.js    *-- Logic to generate and filter experience cards*
    /projects.js            *-- JSON data and render logic for projects*
    /script.js              *-- Theme toggle, ScrollSpy init, project/experience interactivity*
    /style.css              *-- Custom styles*
    /images/                *-- Personal images, logos, icons*

## ⚙️ Setup & Run Locally

1. **Clone the repository**

        git clone https://github.com/elaiyarani-s/MyPortfolio.git
        cd MyPortfolio

2. **Open** `index.html` in your browser (no build step required)


## 🔧 Usage

- **Theme Toggle**: Click the moon/sun icon to switch between light / dark modes.

- **ScrollSpy**: Navbar highlights current section while scrolling.

- **Experience Filter**: Use the dropdown to filter experience cards by company.

- **Project Filters**:

    - Tech & Year dropdowns populate dynamically based on project data.

    - Click on a project image to toggle its description.

## 📚 How It Works

- **Experience & Project Sections** are fully generated from JavaScript using JSON arrays.

- Filters `(<select>)` populate dynamically from data during initialization.

- **Bootstrap 5 ScrollSpy** is enabled via `data-bs-spy="scroll"` and JS init.

- **AOS** is initialized and refreshed after dynamic rendering for proper on-scroll animations.

- All interactive elements are implemented with **vanilla JS** for performance and simplicity.

## 📌 To Customize

- Update `experienceData.js` and `projects.js` to add/remove items.

- Adjust filters and render logic if adding new attributes (e.g., tags, difficulty).

- Modify `style.css` or override Bootstrap variables for custom visuals.

## 📧 Contact

Email: elaiyarani.s@gmail.com

LinkedIn: [elaiyarani-s](https://www.linkedin.com/in/elaiyarani-s)

GitHub: [github - elaiyarani-s](github.com/elaiyarani-s)

