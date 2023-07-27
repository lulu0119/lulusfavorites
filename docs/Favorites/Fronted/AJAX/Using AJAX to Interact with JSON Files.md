# Using AJAX to Interact with JSON Files

AJAX is a powerful tool for interactive communication with JSON files. In this guide, we'll show you how to use AJAX to read data from a JSON file and how to send data to a server using a POST request.

## Reading Data from a JSON File
The following example demonstrates how to use AJAX to read data from a JSON file and display it on a web page:
```html
<!-- HTML Page-->
<p>Click the button to load the XML document:</p>
<button id="myButton">Load Document</button>
<div id="demo"></div>

<!-- JavaScript Code -->
<script>
// Define a function that returns a Promise object
function loadXMLDoc() {
    return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define a callback function to handle the response from the server
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
              // If the request is successful, parse the response as JSON and resolve the Promise with the resulting object
              const myObj = JSON.parse(this.responseText);
              resolve(myObj);
          } else {
              // If the request fails, reject the Promise with an error message
              reject(new Error("Request failed"));
          }
        }
    };

    // Open a GET request to the specified URL
    xhr.open("GET", "ajax_info.json", true);

    // Send the request
    xhr.send();
    });
}

// Add a click event listener to the button
document.getElementById("myButton").addEventListener("click", function() {
    // Call the loadXMLDoc function and handle the response with a Promise chain
    loadXMLDoc()
    .then((response) => {
        // If the Promise is resolved, update the HTML content of the demo element with the name property of the response object
        document.getElementById("demo").innerHTML = response.name;
    })
    .catch((error) => {
        // If the Promise is rejected, log the error to the console
        console.error(error);
    });
});
</script>
```
In this example, we define a function loadXMLDoc() that returns a Promise object. The function creates a new XMLHttpRequest object and defines a callback function to handle the response from the server. When the button with the ID myButton is clicked, the function is called and the response is handled with a Promise chain. If the request is successful, the response is parsed as JSON and the Promise is resolved with the resulting object. If the request fails, the Promise is rejected with an error message.


## Sending Data with a POST Request
The following example demonstrates how to use AJAX to send data to a server using a POST request:
```html
<!-- HTML Form -->
<form id="myForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <button type="submit" id="submitBtn">Submit</button>
</form>

<!-- JavaScript Code -->
<script>
  // Define a function to submit the form data using XMLHttpRequest and Promise
  function submitXMLDoc(formData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://example.com/api/submit", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } else {
            reject(new Error("There was a problem with the request."));
          }
        }
      };
      xhr.send(formData);
    });
  }

  // Get the form element and submit button element
  const form = document.getElementById("myForm");
  const submitBtn = document.getElementById("submitBtn");

  // Add a click event listener to the submit button
  submitBtn.addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new FormData object and append form data
    const formData = new FormData(form);
    
    // Call the submitXMLDoc function and handle the response with a Promise chain
    submitXMLDoc(formData)
      .then((response) => {
        console.log(response);
        // Handle the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  });

</script>
```
In this example, we define a form with two input fields and a submit button. When the submit button is clicked, we prevent the default form submission behavior and create a new FormData object to store the form data. We then call the submitXMLDoc() function, which returns a Promise object. The function creates a new XMLHttpRequest object and sends a POST request to the specified URL with the form data. When the request is complete, the response is handled with a Promise chain. If the request is successful, the response is parsed as JSON and the Promise is resolved with the resulting object. If the request fails, the Promise is rejected with an error message.

By using AJAX to interact with JSON files, you can create dynamic and interactive web applications that provide a seamless user experience.