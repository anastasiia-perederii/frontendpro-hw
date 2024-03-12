document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('postId');
    const button = document.querySelector('button');

    button.addEventListener('click', function () {
        const postId = parseInt(input.value);

        if (isNaN(postId) || postId < 1 || postId > 100) {
            alert('Будь ласка, введіть коректний ID поста від 1 до 100.');
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Пост не знайдено');
                }
                return response.json();
            })
            .then(post => {
                const postContainer = document.createElement('div');
                postContainer.innerHTML = `<h2>Пост #${post.id}</h2><p>${post.title}</p><p>${post.body}</p>`;

                const commentsButton = document.createElement('button');
                commentsButton.textContent = 'Отримати коментарі';
                commentsButton.addEventListener('click', function () {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                        .then(response => response.json())
                        .then(comments => {
                            const commentsContainer = document.createElement('div');
                            commentsContainer.id = 'commentsContainer';
                            comments.forEach(comment => {
                                const commentDiv = document.createElement('div');
                                commentDiv.classList.add('comment');
                                commentDiv.innerHTML = `<p>${comment.name}: ${comment.body}</p>`;
                                commentsContainer.appendChild(commentDiv);
                            });
                            postContainer.appendChild(commentsContainer);
                        })
                        .catch(error => {
                            alert('Помилка при отриманні коментарів: ' + error.message);
                        });
                });

                postContainer.appendChild(commentsButton);
                document.body.appendChild(postContainer);
            })
            .catch(error => {
                alert('Помилка при отриманні поста: ' + error.message);
            });
    });
});
