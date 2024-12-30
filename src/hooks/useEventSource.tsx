export const setEventSource = () => {
  try {
    const token = localStorage.getItem('token')
    const source = new EventSource(`/events?token=${token}`)
    source.onmessage = function (event) {
      return { 'Got:': event.data }
    }
    source.addEventListener('NewChat', function (event) {
      return { 'NewChat:': event.data }
    })

    source.addEventListener('AddToChat', function (event) {
      return { 'AddToChat:': event.data }
    })

    source.addEventListener('RemoveFromChat', function (event) {
      return { 'RemoveFromChat:': event.data }
    })

    source.addEventListener('NewMessage', function (event) {
      return { 'NewMessage:': event.data }
    })
  } catch (error) {
    return error
  }
}
