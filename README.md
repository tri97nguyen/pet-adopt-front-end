This is the front end application to pick and adopt a pet.

To run the application, clone the repo to your local machine and type `npm install` to install the dependencies

Then type `npm start` to run the application

Note: the third-party pet api fetched in this project is not stable and can produce unexpected output. It's brought to my attention at a very late stage of the development already, so changing the api means rewriting the application. Therefore, when you select pet and breeds, please stick to the ones that are on the top of the list. They usually work. If the api encounters problem, a fail-safe mechanism will show you an error message and redirect you to the homepage after a couple of seconds.
