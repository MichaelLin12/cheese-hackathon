With COVID 19, many people lost their jobs and don't have enough money to get Food
so we decided to create a website to advertise local food distributions for those in need



<<<<<<< HEAD

Features of the website consist of:
Table with list of organizations that distribute food
the table consist of the organizations name, address, date and time of food distribution, the kind of food, and the organizations phone number
people can click on the organizations and they can see where the organization is located on a Map
An organization can choose to advertise themselves on the table if not already listed
Then the organization can delist themselves once they are done distributing food

Map that shows locations of food distributions
=======
1. Create an account at [Google Firebase](https://firebase.google.com/)
2. Create a new project: `SitePointBooks`
3. Create a new web app: `goods-distribution-app`
4. Setup a new Firestore Database
5. Clone the project and setup dependencies as follows in a Bash terminal:

   ```bash
   # Clone project
   git clone git@github.com:brandiqa/goods-distribution-app.git

   # Navigate to project directory
   cd goods-distribution-app

   # Install dependencies
   npm install

   # Setup environment variables
   cp env.example .env.local

   ```

6. Go to `Project Overview` > `Project Setting` to access your app config. Copy the relevant config values to `.env.local`
7. Start the dev server with the command `npm run dev`. Open your browser and point it to `localhost:3000`

## LICENSE

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2021 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
>>>>>>> main
