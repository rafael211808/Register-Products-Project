# Product Registration App 📦

A minimalist and responsive web system for product registration and control, designed with a focus on user experience, real-time validation, and browser data persistence.

## 🚀 Features

- **Complete Registration Form:** Register product codes, brands, types, categories, unit prices, costs, and notes[cite: 1].
- **Smart Validation:** Validates required fields and provides immediate visual feedback (color indicators) for valid or invalid fields[cite: 2, 5].
- **Data Persistence:** Stores records locally using the browser's `localStorage`, ensuring data is retained when refreshing the page[cite: 2].
- **Dynamic Scrollable Table:** Displays all registered products with a dynamic item counter and custom scrollbars for handling large volumes of data[cite: 3, 4].
- **Data Management:** Option to clear local database records featuring a security confirmation screen to prevent accidental deletions[cite: 2].

## 🛠️ Technologies Used

- **HTML5:** Semantic page structure and forms[cite: 1].
- **CSS3:** Custom styling, flexible layouts (`Flexbox`), and responsive design[cite: 4, 5].
- **JavaScript (ES6+ Modules):** DOM manipulation logic, event handling, validations, and data persistence[cite: 1, 2, 3].

## 📂 Project Structure

```text
├── index.html              # Main page (Form and Table)
├── styles/
│   ├── register-products.css  # General styles and form styling
│   └── products-table.css     # Specific styles for the product table
└── scripts/
    ├── register-products.js   # Registration logic, validation, and events
    └── render-table.js        # Table rendering and loading logic
