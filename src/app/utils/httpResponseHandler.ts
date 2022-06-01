// This functions would ideally need to do more but keeping it simple for now...
const HttpResponseHandler = (response: Response) => {
  const { status } = response
  return status === 200
}

export default HttpResponseHandler