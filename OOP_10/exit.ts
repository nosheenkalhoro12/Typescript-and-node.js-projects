
import ora from "ora";
import chalk from "chalk";

function Exit(): Promise<true> {
    return new Promise<true>((resolve) => {
      console.log("");
      const spinner = ora(chalk.greenBright.bold.italic("Thank you"));
      spinner.spinner = "triangle";
      spinner.color = "red";
      spinner.start();
      setTimeout(() => {
            spinner.stop(); 
            console.clear(); 
            resolve(true);
        }, 5000);
    });
  };
  //Exit();

  export{Exit}