At the initiation of this project, I took some notes for my approach to make sure each requirement provided was being addressed.

| Requirement | Implementation |
| ----------- | -------------- |
| Web application interface that uses Javascript and HTML that is served on port 3000 | Express will use environment variable for the port provided by docker |
| Use the https://countapi.xyz/ api to manage counting; a. Key: 1ccb732e-b55a-4404-ad3f-0f99c02fe44e | Creating a method for incrementing the counter based off of returned value from API |
| Provide a single button to “hit” the counting api and display the current number of hits | OnClick method for button to send API and update state|
| Runs locally with a single startup command | Docker command will be used |
| Should run correctly in Chrome; don’t worry about cross-browser compatibility | Testing and development will be done in Chrome | 
| Includes a solution.md that provides relevant documentation including how to build and run the solution | solution.md will include how to build and run the application |
| Includes a Dockerfile that will run and serve the web application | Docker file will run the app |
| Any components are reusable (i.e. could have multiple copies on the same page) | Using ReactJS to make re-use of components easier, and will contain the button and counter in a single parent component |
| The port the solution is served on is configurable and documented in the solution.md | Dockerfile will set the port to be used by Node/Express |

