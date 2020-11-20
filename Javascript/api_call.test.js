const apiCall = require('./api_call')

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({

            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }

        }),
    })
);

it('should return api result', async () => {
    const data = await apiCall()
    expect(data.name).toEqual("Leanne Graham")
    expect(fetch).toHaveBeenCalledTimes(1)
})
 
it("returns null when exception", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
  
    const data = await apiCall();
  
    expect(data).toEqual("error");
    expect(fetch).toHaveBeenCalledWith(
      "http://jsonplaceholder.typicode.com/users/1"
    );
  });
  