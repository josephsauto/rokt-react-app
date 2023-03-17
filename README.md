Project structure:

React/Typescript:

Handles the front-end of the application. This is the only part of the project
the developer will have to run.

NodeJS/Express

Handles the wrapping of the Pexel API and client key. This part of the project
will not need to be run as it is already deployed on a lambda function.

lambda url: https://9srf816mj9.execute-api.us-west-2.amazonaws.com/latest/api?query=apple&page=2

For additional information on how the lambda instance is running see:
https://medium.com/free-code-camp/express-js-and-aws-lambda-a-serverless-love-story-7c77ba0eaa35

Install and run:

cd rokt-react-app
npm install
npm start

navigate to localhost:3000/

File Struture:
index.tsx loads Main.tsx. Main.tsx contains the Gallery and Search Component
Gallery and Search are located in src/layouts.

Additonal requirements met:

1. Implement a server that wraps the Pexels API, and maintains your application API key on the server, avoid exposing it to the client.
2. Placeholder content for images before they're loaded.
3. Sleek material UI look and feel
4. Tooltip to show the photographer's url, and navigation to the url when info icon is selected
