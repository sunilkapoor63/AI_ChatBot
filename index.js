const { dockStart } = require("@nlpjs/basic");
// const { containerBootstrap } = require('@nlpjs/basic');


(async() => {
  const dock = await dockStart();
  const nlp = dock.get('nlp');
  await nlp.train();
  // const response = await nlp.process('en', 'report card dede bodsk');
  // console.log(response); 
})();    