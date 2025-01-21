import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { TarotSpread } from '../types';

@Injectable()
export class OpenrouterService {
  private readonly openrouterClient: OpenAI;

  constructor() {
    this.openrouterClient = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: process.env.OPENROUTER_API_KEY,
      defaultHeaders: {
        // 'HTTP-Referer': process.env.YOUR_SITE_URL, // Optional, for including your app on openrouter.ai rankings.
        // 'X-Title': process.env.YOUR_APP_NAME, // Optional. Shows in rankings on openrouter.ai.
      },
    });
  }

  async generateTarotReading(
    question: string,
    language: string,
    spread: TarotSpread,
    spreadType: string,
  ) {
    const spreadString = Object.entries(spread)
      .map(
        ([key, value]) =>
          `${key}: ${value.cardNumber} ${value.cardName} ${value.cardMeaning}`,
      )
      .join('\n');

    console.log(spreadString);

    const response = await this.openrouterClient.beta.chat.completions.parse({
      model: 'deepseek/deepseek-chat',
      messages: [
        {
          role: 'system',
          content:
            'You are a tarot reader. You will be given a question, a language, a spread, and a spread type. You will then generate a tarot reading for the question.' +
            'The language of the question is: ' +
            language +
            '. All text should be in the language of the question. Also, the spread and the card names, meanings should be in the language of the question. Use a daily talk-humanized tone. "Question" and "Answer" should be in the language of the question. Dont explain the cards one by one, instead explain the spread as a whole as a professional tarot reader. Use occult knowledge and the tarot to answer the question. Dont write card names in answer. Dont use markdown. The spread is: ' +
            spreadString +
            '. The spread type is: ' +
            spreadType +
            '.' +
            'Your maximum length is 1000 characters.' +
            'You will return the tarot reading answer only.',
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    return response.choices[0].message.content;
  }
}
