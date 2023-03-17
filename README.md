<h2>Project structure</h2>

<h3>React/Typescript</h3>
Handles the front-end of the application. This is the only part of the project
the developer will have to run.

<h3>NodeJS/Express</h3>
Handles the wrapping of the Pexel API and client key. This part of the project
will not need to be run as it is already deployed on a lambda function.

lambda url: https://9srf816mj9.execute-api.us-west-2.amazonaws.com/latest/api?query=apple&page=2

For additional information on how the lambda instance is running see:
https://medium.com/free-code-camp/express-js-and-aws-lambda-a-serverless-love-story-7c77ba0eaa35

<h2>Install and run</h2>

cd rokt-react-app

npm install

npm start

navigate to localhost:3000/

<h2>File Struture</h2>
index.tsx loads Main.tsx. Main.tsx contains the Gallery and Search Component
Gallery and Search are located in src/layouts.

<h2>Additonal requirements met</h2>

1. Implement a server that wraps the Pexels API, and maintains your application API key on the server, avoid exposing it to the client.
2. Placeholder content for images before they're loaded.
3. Sleek material UI look and feel
4. Tooltip to show the photographer's url, and navigation to the url when info icon is selected
