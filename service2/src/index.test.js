const request = require("supertest");
const app = require("./index");

describe("GET /service2/api/endpoint1", () => {
    it("should return 200 for endpoint 1", async() => {
        const response = await request(app).get("/service2/api/endpoint1");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("service2 endpoint1");
    });
});

describe("GET /service2/api/endpoint2", () => {
    it("should return 200 for endpoint 2", async() => {
        const response = await request(app).get("/service2/api/endpoint2");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("service2 endpoint2");
    });
});