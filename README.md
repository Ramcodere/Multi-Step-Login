# Multi-Step Form

## Description
A React-based multi-step form application designed to collect personal information with validation and local storage persistence. This application guides users through several steps to gather essential details and ensures data integrity using validation rules.

## Features
- Multi-step navigation
- Input validation for required fields
- Local storage to persist data across steps
- Responsive design with Material-UI components

## Setup Instructions

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Cloning the Repository
1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/repository-name.git


src/
├── components/          # Reusable React components
│   ├── Header.js
│   ├── Footer.js
│   ├── Step1.js
│   ├── Step2.js
│   ├── Step3.js
├── App.js                # Main application component
├── index.js              # Entry point for React application
├── App.css               # Global styles
├── setupTests.js         # Setup for testing
└── __tests__/            # Test files
    ├── Step1.test.js
    ├── Step2.test.js
    ├── Step3.test.js
