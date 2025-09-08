# Full Stack Application

This project is a full stack web application consisting of a frontend built with HTML, CSS, and JavaScript, and a backend built with TypeScript and Express.

## Project Structure

```
full-stack-app
├── client                # Frontend application
│   ├── public            # Public assets
│   │   └── index.html    # Main HTML file
│   ├── src               # Source files
│   │   ├── main.js       # Main JavaScript file
│   │   └── style.css     # Stylesheet
│   └── package.json      # Frontend dependencies and scripts
├── server                # Backend application
│   ├── src               # Source files
│   │   ├── app.ts       # Entry point for the backend
│   │   └── routes        # API routes
│   │       └── index.ts  # Route definitions
│   ├── package.json      # Backend dependencies and scripts
│   └── tsconfig.json     # TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd full-stack-app
   ```

2. Install dependencies for the client:

   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:

   ```bash
   cd ../server
   npm install
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

2. Start the frontend application:

   ```bash
   cd client
   npm start
   ```

### Usage

- The frontend will be available at `http://localhost:3000`.
- The backend API will be available at `http://localhost:5000/api`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.