const express = require("express");
const app = express();
const port = 3000;
const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getdoc", async (req, res) => {
  // Read the document.
  const document = firestore.doc("posts/intro-to-firestore");
  const doc = await document.get();
  console.log("Read the document");
  res.send(doc);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function quickstart() {
  console.log(" =============== inside quickstart =========");
  // Obtain a document reference.
  const document = firestore.doc("posts/intro-to-firestore");

  // Enter new data into the document.
  await document.set({
    title: "Welcome to Firestore",
    body: "Hello World",
  });
  console.log("Entered new data into the document");

  // Update an existing document.
  await document.update({
    body: "My first Firestore app",
  });
  console.log("Updated an existing document");

  // Read the document.
  const doc = await document.get();
  console.log("Read the document");

  // Delete the document.
  //   await document.delete();
  //   console.log("Deleted the document");
}

quickstart();
