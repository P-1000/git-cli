#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import readline from "readline";
import { execSync } from "child_process";

const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter commit message (or press Enter for default): ", (commitMessage) => {
    rl.question("Enter branch name (or press Enter for default): ", (branchName) => {
      rl.close();

      const defaultCommitMessage = "Default commit message";
      const defaultBranchName = "main";

      try {
        console.log(chalk.green(figlet.textSync("wait bro!", { horizontalLayout: "full" })));
        const finalCommitMessage = commitMessage.trim() || defaultCommitMessage;
        const finalBranchName = branchName.trim() || defaultBranchName;

        execSync(`git add . && git commit -m "${finalCommitMessage}" && git push origin ${finalBranchName}`);
        console.log(chalk.bgGreen("Git added, committed, and pushed, bro!"));
      } catch (error) {
        console.error(`Error executing git commands: ${error.message}`);
      }
    });
  });
};

main();

