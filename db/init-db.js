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
//        Here's the code I used for extracting the persistent URLs out of
//        the storage bucket which I had to run inside the react app:
    /******************************************************
    var avatarUrls = {};
    var total = 0;
    var ref = firebase.storage().ref();
    for (var idx = 0; idx < 24; ++idx) {
      (() => {
        var capturedIdx = idx;
        ref.child(`avatars/user-${capturedIdx}.png`).getDownloadURL().then( (url) => {
          avatarUrls[`user-${capturedIdx}.png`] = url;
          total = total + 1;
          if (total == 24) {
            console.log(JSON.stringify(avatarUrls, null, 2));
          }
        })
      })();
    }
    *******************************************************/



// Avatar images from roundicons

const avatarUrls = {
  "user-0.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e",
  "user-1.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df",
  "user-2.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13",
  "user-3.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-3.png?alt=media&token=7c3dccea-0d07-497f-b675-97ba82e8d8fe",
  "user-4.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-4.png?alt=media&token=7550f71c-0f0e-40a0-b3b3-640c7b0a6643",
  "user-5.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-5.png?alt=media&token=8ddbb64b-2b02-401c-aa42-3e48dc5c4bff",
  "user-6.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-6.png?alt=media&token=1da424a7-a28c-432d-bcff-3059406b0918",
  "user-7.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b",
  "user-8.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-8.png?alt=media&token=081aafa6-5fd6-409e-b841-ceb16c25ca93",
  "user-9.png" : "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-9.png?alt=media&token=73734ab8-bc34-4f13-aab9-0c6e48426f8b",
  "user-10.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-10.png?alt=media&token=f2ac4249-18b3-493f-aaed-b4ab81db9df5",
  "user-11.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d",
  "user-12.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-12.png?alt=media&token=46bfacfe-220c-4bc3-9456-78e847ac73aa",
  "user-13.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-13.png?alt=media&token=462e932d-40b9-41a6-920b-ec4a5ba31c5b",
  "user-14.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-14.png?alt=media&token=5f33172b-5277-4519-b6a3-618f51647883",
  "user-15.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-15.png?alt=media&token=a4a3d002-63fd-4da2-8d13-ff97ac98086c",
  "user-16.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347",
  "user-17.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-17.png?alt=media&token=f8f9b246-abf9-4e77-aba7-a31780e04f33",
  "user-18.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6ad",
  "user-19.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80",
  "user-20.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-20.png?alt=media&token=ba8e148c-da7e-4280-9965-b2b262ca5430",
  "user-21.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-21.png?alt=media&token=cf9c3fb9-1c98-44d2-ba77-4c0ffa149962",
  "user-22.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b",
  "user-23.png": "https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-23.png?alt=media&token=62ae5673-eabf-45a5-9d47-e57ac9708662"
}

const videoUrls = {
  "betterwatchout-1.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc',
  "betterwatchout-2.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6',
  "betterwatchout-3.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2',
  "betterwatchout-4.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d',
  "betterwatchout-5.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751',
  "betterwatchout-6.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c',
  "betterwatchout-7.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47',
  "betterwatchout-8.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8',
  "betterwatchout-9.webm": 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
}

// We insert these records into firebase in order, so that their keys will be timestamped in the order we want
const discussions = {
  1: {
    title: "Hello world!",
    entries: [
      {
        author: 'Gustaaf Gunnhildr',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc'
      },
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      }
    ]
  },
  2: {
    title: "Second!",
    entries: [
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      }
    ]
  },
  3: {
    title: "Another discussion",
    entries: [
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      }
    ]
  },
  4: {
    title: "Same as the first",
    entries: [
      {
        author: 'Gustaaf Gunnhildr',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc'
      },
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      }
    ]
  },
  5: {
    title: "Just one entry",
    entries: [
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      }
    ]
  },
  6: {
    title: "Still more discussions",
    entries: [
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      }
    ]
  },
  7: {
    title: "Looooooong",
    entries: [
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      },
      {
        author: 'Gustaaf Gunnhildr',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc'
      },
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      },
      {
        author: 'Gustaaf Gunnhildr',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc'
      },
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      },
      {
        author: 'Gustaaf Gunnhildr',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc'
      },
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      },
      {
        author: 'Gustaaf Gunnhildr',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc'
      },
      {
        author: 'Radha Manisha',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
      },
      {
        author: 'Branda Rajesh',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
      },
      {
        author: 'Vassiliki Aucaman',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
      },
      {
        author: 'Sikke Fflur',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
      },
      {
        author: 'Deepti Jonas',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
      },
      {
        author: 'Omolara Cecilia',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
      },
      {
        author: 'Valentine Eunike',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
      },
      {
        author: 'Sigimund Urban',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
      }
    ]
  },
};



// Push to firebase

var db = firebase.database();

// Reset db
db.ref('/').set({
  discussions: {},
}).then(() => {

  // Reinitialize discussions
  var discussionsRef = db.ref('discussions');

  var discussionsUpdates = {};

  Object.keys(discussions).forEach( (discussionId, idx) => {
    var discussionKey = discussionsRef.push().key;
    var discussion = discussions[discussionId];

    var entriesRef = db.ref(`discussions/${discussionKey}`)

    var discussionEntries = discussion.entries;
    var discussionEntryUpdates = {};

    discussionEntries.forEach( (entry, idx) => {
      var entryKey = entriesRef.push().key;
      var entryUpdate = discussionEntries[idx];
      entryUpdate.id = entryKey;
      discussionEntryUpdates[entryKey] = entryUpdate;
    })

    discussionsUpdates[discussionKey] = {
      id: discussionKey,
      title: discussion.title,
      entries: discussionEntryUpdates
    };

    console.log(discussionsUpdates);

  });

  discussionsRef.update(discussionsUpdates).then(() => {
    process.exit();
  });

});


