const http = async ({
    url, method, params
}) => {
    const res = await fetch('http://127.0.0.1:7000/api/agent', {
        headers: {
          'content-type': 'application/json',
          'api-url': url,
          'api-method': method
        },
        method: 'POST',
        body: params,
    });
    return await res.json();
}

export default http


