// This functions would ideally need to do more but leaving it as it is for now...
const HttpResponseHandler = (response: Response) => {
  const { status } = response
  return status === 200
}

export default HttpResponseHandler