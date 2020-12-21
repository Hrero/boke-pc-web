export default async ({
    url, method, params
}) => {
    const res = await fetch('http://127.0.0.1:7000' + url, {
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
