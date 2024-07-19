Obituary Management Platform
A web application designed to manage and display obituaries. This platform allows users to submit obituaries and view a list of submitted obituaries. The application is styled with a Batman theme, featuring a dark and bold aesthetic.

Features
Submit Obituaries: Users can fill out a form to submit new obituaries.
View Obituaries: Users can view a list of all submitted obituaries.
Themed Design: The application has a Batman-themed design with dark backgrounds and yellow accents.
Technologies Used
Django: Web framework for building the application.
MySQL/MariaDB: Database management system.
HTML/CSS: For front-end design.
JavaScript: For form validation.
Installation
Prerequisites
Make sure you have Python and pip installed on your system. You’ll also need MySQL/MariaDB for the database.

Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/obituary-management-platform.git
cd obituary-management-platform
Set Up the Virtual Environment
bash
Copy code
python -m venv venv
Activate the Virtual Environment
On Windows:

bash
Copy code
.\venv\Scripts\activate
On macOS/Linux:

bash
Copy code
source venv/bin/activate
Install Requirements
bash
Copy code
pip install -r requirements.txt
or pip install django
Configure Database
Update the DATABASES setting in obituary_platform/settings.py with your MySQL/MariaDB database credentials.

Apply Migrations
bash
Copy code
python manage.py migrate
Run the Development Server
bash
Copy code
python manage.py runserver
Open your browser and navigate to http://127.0.0.1:8000/ to see the application in action.

File Structure
obituary_platform/: The main project directory.
static/: Contains static files such as CSS and JavaScript.
templates/: Contains HTML templates.
obituaries/: Contains the app logic for handling obituaries.
migrations/: Database migrations for the obituaries app.
views.py: View functions for handling requests.
models.py: Models defining the database structure.
urls.py: URL routing for the obituaries app.
manage.py: Command-line utility for Django.
requirements.txt: Python package dependencies.
Contributing
If you’d like to contribute to the project, please fork the repository and submit a pull request. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

Use localhost:81 for XAMPP admin
