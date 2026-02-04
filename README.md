FitTrack - Personal Trainer App
A complete, mobile-optimized fitness application with personalized workout plans based on BMI.

📁 Project Structure
text
fittrack/
│
├── index.html              # Main application file
├── style.css              # All CSS styles
├── script.js             # Complete JavaScript functionality
├── manifest.json         # PWA manifest
├── sw.js                # Service Worker for offline functionality
│
├── README.md            # This file
├── LICENSE              # MIT License
│
└── screenshots/         # Application screenshots
    ├── home-screen.png
    ├── profile-screen.png
    ├── workout-screen.png
    └── settings-screen.png
🚀 Quick Start
Clone or download the repository

Open index.html in any modern web browser

No installation required - works immediately!

✨ Features
🏋️ Personalized Fitness
BMI-based workout plans (underweight, normal, overweight, obesity levels)

20+ exercises with detailed instructions and tips

Personal profile with age, weight, height, and activity level tracking

Progress monitoring with weight history and charts

🌐 Multilingual Support
5 languages: Portuguese, English, Spanish, French, German

Fully translated interface including all exercises and instructions

Language selector with country flags

💧 Health Tracking
Hydration tracker with visual water cups

Exercise timer with preset intervals (30s, 1min, 3min, 5min, 10min)

BMI calculator with category explanations

Daily streak counter for motivation

🔒 Data Management
Local storage - all data stays on your device

Backup & Restore via JSON export/import

Clear data option with confirmation

No internet required after first load

📱 Mobile Optimized
Responsive design for all screen sizes

PWA ready - install as app on mobile/desktop

Touch-friendly interface

Offline functionality

🛠️ Technical Details
Frontend: Pure HTML5, CSS3, Vanilla JavaScript

Storage: LocalStorage API

Offline: Service Worker caching

Icons: Font Awesome 6.4

Fonts: Google Fonts (Inter)

No frameworks - zero dependencies!

📋 Requirements
Modern web browser (Chrome 80+, Firefox 75+, Safari 13+)

5MB storage space

Optional: Internet connection for initial font/icons load

🎯 Use Cases
Personal fitness tracking without subscriptions

BMI-appropriate exercise recommendations

Daily water intake monitoring

Exercise interval timing

Multilingual fitness support

Offline workout companion

🔧 Development
To modify the app:

Edit index.html for structure changes

Modify style.css for styling

Update script.js for functionality

Test in browser - no build process needed!

Adding New Exercises
Edit the EXERCISES_BY_BMI and EXERCISE_LIBRARY objects in script.js, including translations for all 5 languages.

Adding New Language
Add new translation object to TRANSLATIONS in script.js following existing structure.

🤝 Contributing
Fork the repository

Create a feature branch

Make changes with clear commit messages

Submit a pull request

📄 License
MIT License - see LICENSE file for details.

🙏 Support
If you find this app helpful, consider supporting development:

Buy Me a Coffee

Share with friends

Star the repository

Report issues or suggest features

📞 Contact
Email: support@universussoft.com

Issues: GitHub Issues page

Feature Requests: Open an issue

Built with ❤️ by UniversusSoft - Making fitness accessible to everyone, everywhere.