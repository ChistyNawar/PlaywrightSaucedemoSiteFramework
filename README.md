All tests can be run together using command: npm run sequential
Tests can be run separately using commands: npm run q1, npm run q2, npm run q3

This is the folder structure
test-automation/
├── data/
│   ├── users.json              # User credentials
│   └── testData.json           # Additional test data
├── locators/
│   ├── LoginObject.js          # Login page locators
│   ├── InventoryObject.js      # Inventory page locators
│   ├── CartObject.js           # Cart page locators
│   └── CheckoutObject.js       # Checkout page locators
├── pages/
│   ├── Login.js                # Login page actions
│   ├── Inventory.js            # Inventory page actions
│   ├── Cart.js                 # Cart page actions
│   └── Checkout.js             # Checkout page actions
├── specs/
│   ├── q1-lockedOutUser.spec.js       # locked_out_user test
│   ├── q2-completePurchase.spec.js    # standard_user test
│   └── q3-performanceGlitchUser.spec.js # performance_glitch_user test
├── package.json
├── playwright.config.js
└── README.md
