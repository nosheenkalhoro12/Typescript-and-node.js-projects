import showBanner from "node-banner";
// Displays title by using node-banner
async function title() {
    console.clear();
    return await new Promise(async (resolve) => {
        await showBanner(`QUIZ APP' `, '\t    QUIZ APP', 'green', 'yellow');
        console.log("");
        resolve(true);
    });
}
//title();
export { title };
