# Using AJAX to Interact with {JSON} Placeholder
**{JSON} Placeholder** is a free fake API that can be used for testing and prototyping. 

In the following sections, we will explore how to use AJAX to read and send data to {JSON} Placeholder using GET and POST requests. We will provide examples of code that use the XMLHttpRequest object to send requests and handle responses with Promise chains. These examples will demonstrate how to display data on a web page and how to send data to a server using JSON format.


## Reading Data with a GET Request
The first example shows how to use AJAX to read data from a JSON file and display it on a web page. The code uses the XMLHttpRequest object to send a GET request to the specified URL and handle the response with a Promise chain. If the Promise is resolved, the HTML content of the demo element is updated with the name property of the response object.
The loadXMLDoc function returns a Promise that resolves with the response data if the request is successful or rejects with an error if the request fails. The then method of the Promise chain is used to display the posts on the web page by creating HTML elements for each post and appending them to the posts-container element.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Beautiful Posts</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }

        .post {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            padding: 20px;
        }

        .post-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .post-body {
            font-size: 16px;
            line-height: 1.5;
        }
    </style>
</head>

<body>
    <h1>Beautiful Posts</h1>

    <div id="posts-container"></div>

    <script>
        function loadXMLDoc() {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (xhr.status === 200) {
                            const response = JSON.parse(xhr.responseText);
                            resolve(response)
                        } else {
                            reject(new Error("Request failed"));
                        }
                    }
                };
                xhr.send();
            });
        }

        // Call the loadXMLDoc function and handle the response with a Promise chain
        loadXMLDoc()
            // If the Promise is resolved, update the HTML content of the demo element with the name property of the response object
            .then((posts) => {
                // Display posts
                var postsContainer = document.getElementById("posts-container");

                posts.forEach(function (post) {
                    var postElement = document.createElement("div");
                    postElement.classList.add("post");

                    var titleElement = document.createElement("h2");
                    titleElement.classList.add("post-title");
                    titleElement.textContent = post.title;

                    var bodyElement = document.createElement("p");
                    bodyElement.classList.add("post-body");
                    bodyElement.textContent = post.body;

                    postElement.appendChild(titleElement);
                    postElement.appendChild(bodyElement);

                    postsContainer.appendChild(postElement);
                });
            })
            .catch((error) => {
                console.error(error);
            });


    </script>
</body>

</html>
```

## Sending Data with a POST Request
The second example shows how to use AJAX to send data to a server using a POST request. The code uses the XMLHttpRequest object to send a POST request to the specified URL with the data in JSON format and handle the response with a Promise chain. If the Promise is resolved, the response data is logged to the console.
The createResource function returns a Promise that resolves with the response data if the request is successful or rejects with an error if the request fails. The addEventListener method is used to handle the form submission event and create a resource by getting the form data, converting it to JSON format, and calling the createResource function.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Create Post</title>
    <style>
        /* CSS styles for the beautiful interface */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            text-align: center;
        }

        form {
            margin-top: 20px;
        }

        label {
            display: block;
            margin: 10px auto;
            font-weight: bold;
        }

        input[type="text"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            margin: 10px auto;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Create a Resource</h1>
        <form id="resourceForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>

            <label for="body">Body:</label>
            <textarea id="body" name="body" rows="4" required></textarea>

            <label for="userId">User ID:</label>
            <input type="text" id="userId" name="userId" required>

            <button type="submit">Create</button>
        </form>
    </div>

    <script>
        function createResource(data) {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 201) {
                            const response = JSON.parse(xhr.responseText);
                            resolve(response)
                        } else {
                            reject(new Error("Request failed"));
                        }
                    }
                };
                xhr.send(data);

            })
        }

        // JavaScript code to handle form submission and create a resource
        document.getElementById('resourceForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const body = document.getElementById('body').value;
            const userId = document.getElementById('userId').value;

            const data = JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            });

            createResource(data)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.error(error)
                });
        });
    </script>
</body>

</html>
```

By using AJAX to interact with JSON files, you can create dynamic and interactive web applications that provide a seamless user experience.