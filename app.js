const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')
const shelljs = require('shelljs')
const PouchDB = require('pouchdb')
const puppeteer = require('puppeteer')

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
    message: 'Insert hashtag(s) search term(s), separate multiple hashtags with space (Eg.: #example #multiple #hashtag):\n'
  }
  const hashtagString = await inquirer.prompt(question)
  const hashtagList = hashtagString.hashtags.split(' ')
  return hashtagList
}

const askGreetText = async () => {
  const question = {
    name: 'greetText',
    type: 'input',
    message: 'Enter text that will be sent to users who have posts matching the hashtags, to use'
  }
  const textAnswer = await inquirer.prompt(question)
  return textAnswer.greetText
}

const createPage  =  async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36')
  return page
}

const run = async () => {
  greet()
  const instagram = await askInstagramLogin()
  const hashtags = await askHashtags()
  const greetText = await askGreetText()
  const page = await createPage()


  // login
  // search hashtags
  // follow profile
  // send message
  // show success message
};

run()