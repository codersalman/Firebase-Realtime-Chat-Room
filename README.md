
## The Project
- Built with JavaScript, HTML, Bootstrap and CSS.
- Used FireBase Log-In Authentication. See documentation [here.](https://firebase.google.com/docs/auth/web/start?authuser=0)
- Deployed with FireBase hosting

## FireBase Hosting
1. `npm install -g firebase-tools`
2. `firebase init`
3. `firebase deploy`

## FireBase Database
1. Set up real-time database on Firebase console
2. Initialize database `const db = firebase.database();`
3. Initialize directory name `const msgRef = db.ref("/");`
4. Object template
   `const msg = {
   id,
   name,
   text: text
   };`
5. Push to database `msgRef.push(msg);`
