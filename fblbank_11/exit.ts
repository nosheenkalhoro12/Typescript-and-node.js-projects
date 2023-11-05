import showBanner from "node-banner";
import ora from "ora";
import chalk from "chalk";



// Displays title by using node-banner

async function title(): Promise<true> {
    console.clear();
    return await new Promise<true>(async (resolve) => {
      await showBanner(`FBL Bank' `, '\t    FBL Bank', 'green', 'yellow');
      console.log("");
      resolve(true);
    });
  }


 //title();

export{title}






// Exit 

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