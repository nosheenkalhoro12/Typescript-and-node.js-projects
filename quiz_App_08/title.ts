


import showBanner from "node-banner";

// Displays title by using node-banner

async function title(): Promise<true> {
    console.clear();
    return await new Promise<true>(async (resolve) => {
      await showBanner(`QUIZ APP' `, '\t    QUIZ APP', 'green', 'yellow');
      console.log("");
      resolve(true);
    });
  }


 //title();

export{title}