import inquirer from "inquirer";
import fs from "node:fs";

console.log("Welcome to CLI GITHUB tool");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What's your GitHub username?",
    },
  ])
  .then((answers) => {
    const username = answers.username;

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found on GitHub!");
        }
        return res.json();
      })
      .then((data) => {
        fs.writeFileSync(`${username}.txt`, "");
        data.forEach((repo, index) => {
          fs.appendFileSync(`${username}.txt`, `${index + 1}- ${repo.name}\n`);
        });

        console.log(`Repo list saved to ${username}.txt`);
        console.log("Program ended!");
      })
      .catch((error) => {
        console.error(error.message);
        process.exit();
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw new Error(`Error: couldn't be rendered in the current environment`);
    } else {
      throw new Error(error);
    }
  });
