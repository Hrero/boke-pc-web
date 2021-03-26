const httpAgent = async ({
    url, method, params
}) => {
    
    console.log(process.env.requestUrl + '/api/agent');
    const res = await fetch(process.env.requestUrl + '/api/agent', {
        headers: {
          'content-type': 'application/json',
          'api-url': url,
          'api-method': method
        },
        method: 'POST',
        body: JSON.stringify(params),
    });
    return await res.json();
}

export default httpAgent


