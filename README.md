# Performing Arts Building Landing Page

A responsive cultural venue website built with React and Vite, designed as a digital platform for a performing arts and cultural venue.

The project presents venue information, upcoming performances, venue rental information, art classes, workshops, and a simulated ticket reservation experience.

| Live Demo: https://teguhrachmadi1206-png.github.io/Venue-Landing-Page/

---

## Overview

This project was created as a frontend portfolio project to explore how a cultural venue can be presented through a modern web interface.

Rather than functioning only as a static landing page, the website simulates several common interactions that visitors may need when using a performing arts venue website:

- Discover upcoming performances
- Explore event details and showtimes
- Select seats for a performance
- Explore available venues and facilities
- Check venue availability
- Discover regular art classes and workshops
- View detailed information about classes and workshops
- Submit a simulated registration request
- Navigate between pages using breadcrumbs and routing

The project currently uses static local data and does not connect to a backend or payment system.

## Features

### Events

Visitors can browse performances and cultural events through an event listing page.

Each event can include:

- Event title
- Poster
- Artist or performing group
- Category
- Date and time
- Multiple showtimes
- Event description
- Synopsis
- Duration
- Lead artists and their roles
- Ticket price

Events can have multiple performance dates and sessions.

### Event Details

Each event has a dedicated detail page containing information about the performance and its schedule.

The ticket flow allows visitors to:

1. Select a performance session
2. View the seating layout
3. Select available seats
4. Review their selection
5. Continue through a simulated ticket reservation flow

Seat states include:

- Available
- Taken
- On hold
- Unavailable

### Venue Information

The venue section provides information about available spaces and facilities.

Venue pages can include:

- Venue description
- Capacity
- Facilities
- Interior images
- Room information
- Rental information
- Availability calendar

The project also explores a calendar-based approach for displaying venue availability without exposing private booking information.

### Art Classes & Workshops

The website connects visitors with arts education opportunities provided by external studios, communities, and organizers.

The section includes two types of programs:

#### Regular Classes

Weekly or recurring programs such as:

- Traditional Sundanese Dance
- Traditional Gamelan Ensemble
- Children's Creative Arts
- Contemporary Dance
- Theater Acting

#### Workshops

One-time cultural and creative workshops such as:

- The Art of Wayang Storytelling
- Stage Lighting for Beginners
- Traditional Costume & Makeup
- Music Arrangement for Traditional Ensemble
- Expressive Movement & Physical Theater
- Introduction to Traditional Bamboo Music
- Creative Stage Photography
- Designing Stage Props from Recycled Materials

Class and workshop details can include:

- Organizer / studio
- Instructors and their roles
- Schedule
- Location
- Level
- Age group
- Learning materials
- Facilities
- Requirements
- Description
- Registration information

The registration interaction is currently simulated through a modal form. After submitting the form, visitors receive a message that the organizer will contact them for the next step.

### About Page

The About page introduces the venue's identity and development through:

- Venue introduction
- Cultural mission
- Historical timeline
- Facility development
- Technology improvements
- Community programs
- Digital transformation

The timeline uses visual imagery to represent different stages in the venue's development.

### Navigation

The application uses client-side routing with React Router.

The current structure includes pages for:

- Home
- Events
- Event Details
- Ticket Reservation
- Venues
- Venue Details
- Art Classes
- Art Class / Workshop Details
- About
- 404 Not Found

Breadcrumb navigation is also used on pages where hierarchical navigation is useful.

---

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript
- HTML
- CSS
- GitHub Pages

The project currently uses local/static data rather than a backend database.

---

## Project Structure

src/ 
├── assets/ 
│ ├── images 
│ └── ... 
│ 
├── components/ 
│ ├── common/ 
│ ├── events/ 
│ ├── venues/ 
│ ├── classes/ 
│ └── ... 
│ 
├── data/ 
│ ├── events 
│ ├── venues 
│ ├── classes 
│ └── ... 
│ 
├── functions/ 
│ └── ... 
│ 
├── pages/ 
│ ├── Home 
│ ├── Events 
│ ├── EventDetail 
│ ├── Ticket 
│ ├── Venues 
│ ├── VenueDetail 
│ ├── Classes 
│ ├── ClassDetail 
│ ├── About 
│ └── ... 
│ 
├── App.jsx 
└── main.jsx


---

## Getting Started

Clone the repository:

git clone https://github.com/teguhrachmadi1206-png/Venue-Landing-Page.git

Navigate to the project:

cd Venue-Landing-Page

Install dependencies:

npm install

Start the development server:

npm run dev

The application will be available through the local development URL provided by Vite.

---

## Build

To create a production build:

npm run build

To check the project with ESLint:

npm run lint

---

## Deployment

The project is deployed using GitHub Pages.

Production deployment can be generated through the project's deployment script:

npm run deploy

---

## Project Scope

This project is currently focused on the frontend experience and interaction design.

The following functionality is simulated using static data:

- Ticket booking
- Seat availability
- Class registration
- Workshop registration
- Venue availability
- Event schedules

There is currently no:

- Backend API
- Database
- User authentication
- Real payment processing
- Real-time seat locking
- Admin dashboard
- Persistent booking system

These could be introduced in a future full-stack implementation.

---

## Purpose

This project is part of my journey in learning modern web development and building practical frontend applications with React.

The goal was not only to reproduce a visual design, but also to explore:

- Component-based architecture
- Client-side routing
- Reusable UI components
- Data-driven rendering
- Interactive interfaces
- Responsive layouts
- Accessibility considerations
- Simulated booking flows
- Information architecture for cultural institutions

---

## Status

MVP — Completed

The current version represents a completed frontend MVP and serves as a foundation for potential future development into a full-stack cultural venue platform.

---

## Author

**Teguh Rachmadi**  
Frontend Developer (Logic & Data-Oriented)

- GitHub: https://github.com/teguhrachmadi1206-png  
- Location: Indonesia  
- Availability: Freelance / Remote  

---

## License

This project is intended for educational and portfolio purposes.
