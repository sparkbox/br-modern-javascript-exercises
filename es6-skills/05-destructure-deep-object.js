/* Use object destructuring to capture the twitter link of the profile object
 * */
let profile = {
  fname: 'Ryan',
  lname: 'Cromwell',
  social: {
    twitter: "https://twitter.com/hearsparkbox",
    instagram: "https://www.facebook.com/seesparkbox"
  }
}

var twitter = profile.social.twitter;

console.log(twitter); // https://twitter.com/hearsparkbox
