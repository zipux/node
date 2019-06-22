// Usage:
//  node app.js input -c=ottawa

const yargs = require('yargs');
const generateJsonFile = require('./generateJsonFile');
const searchCapital = require('./searchCapital');

const argv = yargs.command('input', 'Input name of Capital', {
    capital:  {
      description: 'Name of Capital' ,
      demand: true,
      alias: 'c'
    }
  })
  .help()
  .argv;

if(argv._[0] === 'input' && argv.c != '') {

  searchCapital.getCountry(argv.c, result => {

    if(result.success) {

      generateJsonFile.saveFile(`${result.data.name}.json`, result.data);

    } else {
      console.log('Capital Not found.');
    }
  })
} else {
  console.log('Invalid command.');
}
