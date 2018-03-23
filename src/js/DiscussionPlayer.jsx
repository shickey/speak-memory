import React from 'react'

const data = [
  {
    id: 1,
    author: "Gustaaf Gunnhildr",
    avatar: "user-0.png"
  },
  {
    id: 2,
    author: "Radha Manisha",
    avatar: "user-7.png"
  },
  {
    id: 3,
    author: "Branda Rajesh",
    avatar: "user-18.png"
  },
  {
    id: 4,
    author: "Vassiliki Aucaman",
    avatar: "user-1.png"
  },
  {
    id: 5,
    author: "Sikke Fflur",
    avatar: "user-22.png"
  },
  {
    id: 6,
    author: "Deepti Jonas",
    avatar: "user-16.png"
  },
  {
    id: 7,
    author: "Omolara Cecilia",
    avatar: "user-11.png"
  },
  {
    id: 8,
    author: "Valentine Eunike",
    avatar: "user-19.png"
  },
  {
    id: 9,
    author: "Sigimund Urban",
    avatar: "user-2.png"
  }
]

const DiscussionPlayer = () => {

  var avatars = []
  data.forEach( d => {
    avatars.push(
      <div className="player-avatar" key={d.id}>
        <img src={'img/' + d.avatar} />
      </div>
    )
  });

  return (
    <div className="player-container">
      <div className="player">
        <video src="video/betterwatchout.mp4" controls></video>
      </div>
      <div className="avatars-container">
        {avatars}
      </div>
    </div>
  )

}

export default DiscussionPlayer
