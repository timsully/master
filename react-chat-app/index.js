// Creating the main component, App. It will handle the data and the connection with the API.
class App extends React.component {

  render() {
    return (
      <div className="app">
      <Title />
      <MessageList />
      <SendMessageForm />
      </div>
    )
  }

}


// Creating dummy data to understand the data flow of the app
const DUMMY_DATA = [
  {
    senderID: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]
