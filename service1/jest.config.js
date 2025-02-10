module.exports = {
    clearMocks: true,
    testEnvironment: "node",
    reporters: [
        "default",
        [
            "./markdownReporter.js",
            { output: "test_results_service1.md" }
        ]
    ]
}