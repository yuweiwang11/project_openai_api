import openaiClient from './api.js'

const generate = async (queryDescription) => {
  const response = await openaiClient.createCompletion({
    model: 'text-davinci-003',
    prompt: `generate sql query for me based on ${queryDescription}.`,
    max_tokens: 100,
    temperature: 0,
  })
  return response.data.choices[0].text
}

export default generate
