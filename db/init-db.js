/*
 * Speak Memory
 * init-db.js
 *
 * Resets and populates the firebase database and storage bucket for testing, etc.
 *
 * Sean Hickey
 * MIT Media Lab, Lifelong Kindergarten Group
 * 26 Mar 2018
 *
 */
 
 var firebase = require('firebase');

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCVTIPfhDXc0nYq2fiqPC9cLUUlaGrOsTo',
  authDomain: 'speak-memory.firebaseapp.com',
  databaseURL: 'https://speak-memory.firebaseio.com',
  projectId: 'speak-memory',
  storageBucket: 'gs://speak-memory.appspot.com',
  messagingSenderId: '1032812984363'
};
firebase.initializeApp(firebaseConfig);

// @NOTE: At this point, firebase storage doesn't work in node environments
//        so we just upload the asset files manually to firebase storage.
//
// var storage = firebase.storage().ref();

const data = [
  {
    id: 1,
    author: 'Gustaaf Gunnhildr',
    avatar: 'user-0.png',
    file: 'betterwatchout-1.webm'
  },
  {
    id: 2,
    author: 'Radha Manisha',
    avatar: 'user-7.png',
    file: 'betterwatchout-2.webm'
  },
  {
    id: 3,
    author: 'Branda Rajesh',
    avatar: 'user-18.png',
    file: 'betterwatchout-3.webm'
  },
  {
    id: 4,
    author: 'Vassiliki Aucaman',
    avatar: 'user-1.png',
    file: 'betterwatchout-4.webm'
  },
  {
    id: 5,
    author: 'Sikke Fflur',
    avatar: 'user-22.png',
    file: 'betterwatchout-5.webm'
  },
  {
    id: 6,
    author: 'Deepti Jonas',
    avatar: 'user-16.png',
    file: 'betterwatchout-6.webm'
  },
  {
    id: 7,
    author: 'Omolara Cecilia',
    avatar: 'user-11.png',
    file: 'betterwatchout-7.webm'
  },
  {
    id: 8,
    author: 'Valentine Eunike',
    avatar: 'user-19.png',
    file: 'betterwatchout-8.webm'
  },
  {
    id: 9,
    author: 'Sigimund Urban',
    avatar: 'user-2.png',
    file: 'betterwatchout-9.webm'
  }
];


// // Avatar images from roundicons

// // @TODO: Move author info out of topics and posts?
// //        Maybe make authors an object inside each topic/set of posts?

// // @NOTE: The keys used in the topics and posts objects get
// //        replaced by firebase keys when pushing to the DB.
// //        But they're still useful in this context since they
// //        allow us to define keyed relationships without knowing
// //        the keys beforehand.
// const topics = {
//   1: {
//     title: "Hello world!",
//     root: 3,
//   },
//   2: {
//     title: "Foo bar baz!",
//     root: 1,
//   }
// }

// const posts = {
//   1: { // Topic ID
//     1: { // Post IDs
//       content: "Praesent ut rhoncus nibh. Vestibulum vitae consectetur diam. Morbi nec porttitor tellus",
//       author: "Gustaaf Gunnhildr",
//       avatar: "user-0.png",
//       parent: 3,
//       children: {
//         5: true,
//         6: true
//       }
//     },
//     2: {
//       content: "Aliquam tincidunt, metus sed semper accumsan, est dolor maximus dui, ut ullamcorper diam turpis et mi.",
//       author: "Radha Manisha",
//       avatar: "user-7.png",
//       parent: 3,
//       children: {}
//     },
//     3: {
//       content: "Sed est urna, pretium ac semper quis, dictum elementum ipsum. Integer malesuada condimentum ex vehicula congue. Nunc laoreet tortor lectus, at convallis neque fermentum non. Proin fringilla congue felis, a pulvinar dui luctus ut. Nam sagittis tempus metus, id consectetur dui commodo in. Vestibulum sit amet tortor turpis. Donec lobortis condimentum elit, eu euismod ante. Mauris porttitor in massa at imperdiet. Nam pretium elementum tortor in sagittis.",
//       author: "Branda Rajesh",
//       avatar: "user-18.png",
//       parent: null,
//       children: {
//         1 : true,
//         2 : true,
//         4 : true,
//         7 : true,
//         9 : true
//       }
//     },
//     4: {
//       content: "Sed vitae auctor ligula, et laoreet nisi.",
//       author: "Vassiliki Aucaman",
//       avatar: "user-1.png",
//       parent: 3,
//       children: {
//         8: true
//       }
//     },
//     5: {
//       content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus massa metus, molestie eget porta eu, vehicula in libero.",
//       author: "Sikke Fflur",
//       avatar: "user-22.png",
//       parent: 1,
//       children: {}
//     },
//     6: {
//       content: "Vestibulum fermentum mattis erat. Sed at diam in ex cursus condimentum. Suspendisse potenti. Nullam fringilla lectus tempus libero posuere, quis semper orci semper.",
//       author: "Deepti Jonas",
//       avatar: "user-16.png",
//       parent: 1,
//       children: {}
//     },
//     7: {
//       content: "Nam bibendum sodales viverra.",
//       author: "Omolara Cecilia",
//       avatar: "user-11.png",
//       parent: 3,
//       children: {}
//     },
//     8: {
//       content: "Nunc sapien ipsum, cursus sit amet cursus quis, auctor vitae erat. Vivamus fermentum ut lectus iaculis vehicula.",
//       author: "Valentine Eunike",
//       avatar: "user-19.png",
//       parent: 4,
//       children: {}
//     },
//     9: {
//       content: "Phasellus tellus augue, malesuada eu erat quis, iaculis interdum nibh. Curabitur eros nunc, rutrum quis dolor vel, sodales rhoncus magna."
//       ,
//       author: "Sigimund Urban",
//       avatar: "user-2.png",
//       parent: 3,
//       children: {}
//     }
//   },
//   2: { // Topic ID
//     1: { // Post IDs
//       content: "Nam varius, purus et malesuada dapibus, arcu ipsum sollicitudin lectus, vitae tempor enim dui eget quam. Sed nisi nisl, fermentum id lobortis vitae, consectetur sed orci. Pellentesque congue ligula nibh, id hendrerit orci iaculis non. Vivamus commodo mattis iaculis.",
//       author: "Eldon Hildigardis",
//       avatar: "user-22.png",
//       parent: null,
//       children: {
//         2: true
//       }
//     },
//     2: {
//       content: "Fusce maximus venenatis magna vitae tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
//       author: "Rosa Chan",
//       avatar: "user-3.png",
//       parent: 1,
//       children: {
//         3: true
//       }
//     },
//     3: {
//       content: "Sed ullamcorper quis augue nec euismod. Integer consectetur dolor elit, varius commodo est cursus vitae. Phasellus rutrum dignissim sem, et euismod est ornare nec. Sed nec arcu sem. Nunc tristique elementum sapien, ac commodo ex vestibulum sed. Mauris eu massa non lorem rutrum sagittis.",
//       author: "Ben Rhoda",
//       avatar: "user-9.png",
//       parent: 2,
//       children: {
//         4: true
//       }
//     },
//     4: {
//       content: "Mauris ut aliquet leo. Quisque vitae tincidunt lorem, id tincidunt sapien.",
//       author: "Teuta Bityah",
//       avatar: "user-11.png",
//       parent: 3,
//       children: {}
//     },
//   }
// }


// var db = firebase.database();

// // Reset db
// db.ref('/').set({
//   topics: {},
//   posts: {}
// }).then(() => {

//   // Reinitialize topics and replies
//   var topicsRef = db.ref('topics');
//   var postsRef = db.ref('posts');

//   var topicsUpdates = {};
//   var postsUpdates = {};

//   Object.keys(topics).forEach( (topicId, idx) => {
//     var topicKey = topicsRef.push().key;
    

//     var topicPosts = posts[topicId];
//     var idMapping = {}; // Key is the id for the post in the structure
//                         // written at the top of this file, value is the
//                         // firebase key it will live at when pushed

//     var rootPost = null;
//     Object.keys(topicPosts).forEach( (postId, idx) => {
//       idMapping[postId] = postsRef.push().key;
//     })

//     Object.keys(topicPosts).forEach( (postId, idx) => {
//       var post = Object.assign({}, topicPosts[postId]); // Create a copy, just for good measure
//       if (post.parent) {
//         post.parent = idMapping[post.parent];
//       }
//       else {
//         rootPost = post;
//       }
//       if (post.children) {
//         var newChildren = {};
//         for (childId in post.children) {
//           newChildren[idMapping[childId]] = true;
//         }
//         post.children = newChildren;
//       }
//       postsUpdates[topicKey + '/' + idMapping[postId]] = post;
//     })

//     var newTopic = Object.assign({}, topics[topicId]);
//     newTopic.root = idMapping[newTopic.root];
//     newTopic.content = rootPost.content;
//     newTopic.author = rootPost.author;
//     newTopic.avatar = rootPost.avatar;
//     topicsUpdates[topicKey] = newTopic;

//   })

//   topicsRef.update(topicsUpdates).then(() => {
//     postsRef.update(postsUpdates).then(() => {
//       process.exit();
//     });
//   });

// });




 