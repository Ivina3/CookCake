                    const likeButtons = document.querySelectorAll('.like-button');

                    likeButtons.forEach(button => {
                        button.addEventListener('click', () => {

                            const parent = button.parentElement;

                            const likeCount = parent.querySelector('.gallery-item-likes .profile-stat-count');

                            let currentLikes = parseInt(likeCount.textContent);

                            likeCount.textContent = ++currentLikes;
                        });
                    });

                    likeButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            button.classList.toggle('liked');

                        });
                    });