export const postData = async (url: string, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return await res.text()
}

export const getResource = async (url: string) => {
    const res = await fetch(url)

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.text()
}
