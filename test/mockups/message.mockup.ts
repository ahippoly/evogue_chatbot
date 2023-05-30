import { mockedReceiver, mockedSender } from './user.mockup'

export const mockedMessageList: IMessage[] = [
  {
    id: 0,
    content: 'Coucou, ca va',
    sender: mockedSender,
    date: new Date(2023, 5, 30, 10, 10)
  },
  {
    id: 1,
    content: 'ca va',
    sender: mockedSender,
    date: new Date(2023, 5, 30, 10, 11)
  },
  {
    id: 2,
    content: 'toi',
    sender: mockedSender,
    date: new Date(2023, 5, 30, 10, 12)
  },
  {
    id: 3,
    content: 'Oui et toi ?',
    sender: mockedReceiver,
    date: new Date(2023, 5, 30, 10, 15)
  }
]
