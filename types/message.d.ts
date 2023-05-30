export {}

declare global {
  interface IMessage {
    id: number
    date: Date
    content: string
    sender: IUser
  }
}
