

# SimplyCue

SimpleCue is a React.js application for managing personal challenges. It allows users to create, update, and track challenges, displaying progress and filtering challenges based on their status. The application uses TypeScript and persists data in `localStorage` for a seamless user experience.

## Basic Functionality

- **Create Challenges:** Add new challenges with a title, description, start date, and end date.
- **Define Frequency:** Set the challenge frequency (e.g., daily, weekly).
- **Track Progress:** Mark each day/week as completed or missed.
- **Progress Display:** View progress based on the challenge's start and end dates.

## Advanced Features

- **Update Challenges:** Modify existing challenges as needed.
- **Data Persistence:** Challenges and progress are saved in `localStorage`, ensuring data is retained after page refreshes.
- **Filter Challenges:** View active challenges first and filter by status (Active, Completed, Missed).

## Technical Requirements

- **React.js:** Build the user interface using React.js.
- **TypeScript:** Utilize TypeScript for type safety and better development experience.
- **State Management:** Manage the application's state effectively.
- **LocalStorage:** Persist data using `localStorage` for persistence across sessions.
- **Responsiveness:** Ensure the application is responsive and functions well on various screen sizes.

## Installation

To set up SimpleCue on your local machine, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sahil99811/SimpleCue.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd SimpleCue
   ```

3. **Install Dependencies:**
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary dependencies:
   - Using npm:
     ```bash
     npm install
     ```
   - Using Yarn:
     ```bash
     yarn install
     ```

4. **Run the Development Server:**
   Start the development server to see the application in action:
   - Using npm:
     ```bash
     npm start
     ```
   - Using Yarn:
     ```bash
     yarn start
     ```

   Open your browser and go to `http://localhost:3000` (or another port if specified).

5. **Build for Production:**
   To create a production build:
   - Using npm:
     ```bash
     npm run build
     ```
   - Using Yarn:
     ```bash
     yarn build
     ```

   The build files will be located in the `build` directory.

## Usage

1. **Creating a Challenge:** Navigate to the challenge creation form and provide the necessary details (title, description, start date, end date, frequency).
2. **Updating a Challenge:** Use the update option to modify existing challenges.
3. **Marking Progress:** Update the status of each day/week as completed or missed.
4. **Filtering and Viewing:** Use the filter options to view challenges based on their status and see active challenges first.
