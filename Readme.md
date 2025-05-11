# HandyConnect

## Overview

HandyConnect is a platform designed to seamlessly connect individuals seeking household services with trusted and skilled local providers. Our goal is to simplify the process of finding reliable help for a wide range of tasks, from home repairs and cleaning to plumbing, electrical work, and more. HandyConnect aims to be the go-to solution for convenient and dependable home services.

## Key Features


* **Service Provider Profiles:** Detailed profiles for service providers, including their skills, experience, ratings, reviews, and availability.
* **Service Request Posting:** Users can easily post requests for specific services, outlining their needs, location, and preferred timeframe.
* **Direct Connection:** Facilitates direct communication between users and providers for clear understanding of requirements and quotes.
* **Rating and Review System:** Enables users to rate and review providers based on their service quality, fostering trust and transparency within the community.
* **Secure Communication:** In-app messaging system for secure and organized conversations.
* **Location-Based Services:** Connects users with providers in their local area for efficient and timely service.
* **Additional Planned Features:**

  * In-app notifications
  * Payment gateway integration
  * Real-time availability updates

---

## Day by Day Plan

### Week 1: Foundation and Planning

* **Day 1:** Project initiation, define scope, set up development environment, create repo
* **Day 2:** Requirements gathering (user/provider profiles, listings, search, booking)
* **Day 3:** Design database schema
* **Day 4:** Plan algorithms (location-based matching, ranking)
* **Day 5:** UI/UX design (wireframes)
* **Day 6:** Backend setup (Node.js/Express), user/provider auth APIs
* **Day 7:** Frontend setup (React), create navigation and layout components

### Week 2: User & Provider Profile and Service Listing Development

* **Day 8:** Implement location-based discovery logic
* **Day 9:** Develop data models and populate with sample data
* **Day 10:** CRUD APIs for profiles and listings
* **Day 11:** Integrate backend with frontend (profile + listing UI)
* **Day 12:** Auth for users and providers
* **Day 13:** Favorite feature + manage availability
* **Day 14:** Search and filter services

### Week 3: Booking and Communication Development

* **Day 15:** Data models for booking and communication
* **Day 16:** Booking backend setup, basic comms endpoints
* **Day 17:** Service detail page frontend + booking trigger
* **Day 18:** Booking flow UI + provider booking dashboard
* **Day 19:** Messaging system (WebSockets/polling)
* **Day 20:** Authorization rules for bookings/messages
* **Day 21:** Booking history/management features

### Week 4: Rating, Review, and Refinement

* **Day 22:** Rating/review data models
* **Day 23:** APIs for rating and review submission/view
* **Day 24:** Frontend integration + sorting based on ratings
* **Day 25:** Testing (unit, integration, UAT)
* **Day 26:** Bug fixing + performance optimization
* **Day 27:** Deploy to staging + gather feedback
* **Day 28:** Write user and developer documentation

### Week 5: Finalization and Deployment

* **Day 29:** Address staging feedback
* **Day 30:** Finalize features and codebase
* **Day 31:** Production deployment

---

## Technologies Used

* **Frontend:** React, HTML, CSS, JavaScript
* **Backend:** Node.js (Express)
* **Database:** MongoDB
* **Mapping/Location Services:** Google Maps API (planned)
* **Others:** WebSockets (for real-time chat), Nodemon, Dotenv, Mongoose

---

## Getting Started

### Prerequisites

Ensure the following are installed:

* Node.js and npm
* MongoDB (running locally or cloud DB like MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kalviumcommunity/HandyConnect.git
   ```
2. Navigate to the backend directory:

   ```bash
   cd HandyConnect/backend
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the server:

   ```bash
   npm start
   ```

#### Deployed Backend Server
Render Link : https://s89-suhasramidi-capstone-handyconnect2.onrender.com/ 