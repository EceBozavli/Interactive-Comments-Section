const userComments = {

  "currentUser": {

    "image": { 

      "png": "./assets/img/Julius.png",

      "webp": "./images/avatars/image-juliusomo.webp"

    },

    "username": "juliusomo"

  },

  "comments": [

    {

      "id": 1,

      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",

      "createdAt": "1 month ago",

      "score": 12,

      "user": {

        "image": { 

          "png": "./assets/img/Amy.png",

          "webp": "./images/avatars/image-amyrobson.webp"

        },

        "username": "amyrobson"

      },

      "replies": []

    },

    {

      "id": 2,

      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",

      "createdAt": "2 weeks ago",

      "score": 5,

      "user": {

        "image": { 

          "png": "./assets/img/Max.png",

          "webp": "./images/avatars/image-maxblagun.webp"

        },

        "username": "maxblagun"

      },

      "replies": [

        {

          "id": 3,

          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",

          "createdAt": "1 week ago",

          "score": 4,

          "replyingTo": "maxblagun",

          "user": {

            "image": { 

              "png": "./assets/img/Ramses.png",

              "webp": "./images/avatars/image-ramsesmiron.webp"

            },

            "username": "ramsesmiron"

          }

        },

        {

          "id": 4,

          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",

          "createdAt": "2 days ago",

          "score": 2,

          "replyingTo": "ramsesmiron",

          "user": {

            "image": { 

              "png": "./assets/img/Julius.png",

              "webp": "./images/avatars/image-juliusomo.webp"

            },

            "username": "juliusomo"

          }

        }

      ]

    }

  ]

}

const commentsText = document.querySelector('.commentsText');

function renderComments() {
  const comments = userComments.comments;
  commentsText.innerHTML = comments.map(comment => {
    const replies = comment.replies.map(reply => `
      <div class="reply">
        <div class="replyInner">
          <div class="userDatas">
            <img src="${reply.user.image.png}" alt="${reply.user.username}" class="avatar" />
            <span class="username">${reply.user.username}</span>
            <span class="createdAt">${reply.createdAt}</span>
          </div>
          <div class="replyPart">
            <img src="assets/img/Reply.png" class="replyImg">
            <a href="#" class="replyBtn">Reply</a>
          </div>
        </div>
        <div class="content">
          <p>${reply.content}</p>
        </div>
      </div>
    `).join(''); 

    return `
      <div class="comment">
        <div class="commentInner">
          <div class="commentDatas">
            <img src="${comment.user.image.png}" alt="${comment.user.username}" class="avatar" />
            <span class="username">${comment.user.username}</span>
            <span class="createdAt">${comment.createdAt}</span>
          </div>
          <div class="replyPart">
            <img src="assets/img/Reply.png" class="replyImg">
            <a href="#" class="replyBtn">Reply</a>
          </div>
        </div>
        <div class="content">
          <p>${comment.content}</p>
        </div>
      </div>
      ${replies ? `<div class="replies-container">${replies}</div>` : ''}  
    `;
  }).join('');
}
renderComments();

const addCommentText = document.querySelector('.addCommentText'); 
const sendBtn = document.querySelector('.sendBtn'); 

sendBtn.addEventListener('click', function() {
  const newCommentContent = addCommentText.value.trim();
  if (newCommentContent) {
    const newComment = {
      id: userComments.comments.length + 1,
      content: newCommentContent,
      createdAt: "Just now", 
      score: 0,
      user: userComments.currentUser,
      replies: [] 
    };

    userComments.comments.push(newComment);

    addCommentText.value = '';

    renderComments();
  }
});

renderComments();