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
