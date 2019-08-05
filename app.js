const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')
const shelljs = require('shelljs')
const PouchDB = require('pouchdb')

const greet = () => {
  console.log(
    chalk.green(
      figlet.textSync("IG-Greeter")
    )
  )
  console.log(
    chalk.yellow("Tool to start conversations on instagram with people that posted under specified hashtags")
  )
}

const askInstagramLogin = () => {
  console.log(chalk.blue("Provide your instagram login credentials"))
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Username or email:'
    },
    {
      name: 'password',
      type: 'password',
      message: 'Password:'
    }
  ]
  return inquirer.prompt(questions)
}

const askHashtags = async () => {
  const question = {
    name: 'hashtags',
    type: 'input',
    message: 'Insert search hashtag(s) search term(s), separate multiple hashtags with space (Eg.: #example #multiple #hashtag):\n'
  }
  const hashtagString = await inquirer.prompt(question)
  const hashtagList = hashtagString.hashtags.split(' ')
  return hashtagList
}

const run = async () => {
  greet()
  const instagram = await askInstagramLogin()
  const hashtags = await askHashtags()
  console.log(hashtags)
  // login
  // search hashtags
  // follow profile
  // send message
  // show success message
};

run()