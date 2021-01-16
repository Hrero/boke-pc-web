
export default async ({ url, method, params }) => {
    const res = await fetch(process.env.requestUrl + url, {
        headers: {
            "content-type": "application/json",
            "api-url": url,
            "api-method": method,
        },
        method: "POST",
        body: JSON.stringify(params),
    });
    return await res.json();
};

