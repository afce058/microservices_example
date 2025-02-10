const fs = require("fs");

class MarkdownReporter {
    constructor(globalConfig, options) {
        this.globalConfig = globalConfig;
        this.options = options;
    }

    onRunComplete(_, results) {
        const { output } = this.options;
        const markdown = this.generateMarkdown(results);
        fs.writeFileSync(output || "test_results_service1.md", markdown, "utf-8");
    }

    generateMarkdown(results) {
        let markdown = "# Tests Results\n\n";

        markdown += "## Summary\n";
        markdown += `- **Total tests**: ${ results.numTotalTests }\n`;
        markdown += `- **Passed tests**: ${ results.numPassedTests }\n`;
        markdown += `- **Failed tests**: ${ results.numFailedTests }\n`;
        markdown += `- **Skipped tests**: ${ results.numPendingTests }\n`;

        results.testResults.forEach(suite => {
            markdown += `# ${suite.testPathFile}\n`;

            suite.testResults.forEach(test => {
                const icon = test.status === "passed" ? "✅": "❌";
                markdown += `${icon} ${test.title}\n`;
            });
            markdown += `\n`;
        });

        return markdown;
    }
}

module.exports = MarkdownReporter;