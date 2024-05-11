         function redirectToAnotherPage() {

            var nextPageFileName = "../index.html";


            window.location.href = nextPageFileName;
        }

        let isLiked = false;

        function toggleLike() {
            const likeButton = document.getElementById('likeButton');


            if (isLiked) {
                likeButton.style.color = 'black';

                isLiked = false;
            } else {
                likeButton.style.color = 'red';

                isLiked = true;
            }


        }