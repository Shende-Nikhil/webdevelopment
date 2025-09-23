import { languages } from "../data/Languages.js";

const getDetails = (req, res) => {
    res.status(200).json({
        message: "Welcome to Languages API! You can search/query for a language based on scope, duration & difficulties and also search for a particular language based on id (1 to 50).",
        routes: [
            {
                method: "GET",
                address: "http://localhost:5005/languages/api/filter?scope=value&duration=value&difficulties=value",
                expectedResult: "Array/Null",
                queryOptions: ["scope", "duration[in weeks]", "difficulties"],
                possibleScopes: [
                    "Web development", "Full-stack", "Mobile apps", "AI", "ML", "Data science", "Scripting",
                    "Enterprise apps", "Android", "Backend systems", "System programming", "Embedded systems", "OS",
                    "Game dev", "High-performance apps", "System software", "Desktop apps", "CMS (WordPress, Drupal)",
                    "Cloud", "Distributed systems", "Web assembly", "Blockchain", "Modern JVM apps", "iOS",
                    "macOS apps", "Scalable web apps", "Angular", "React apps", "Databases", "Queries", "Data analysis",
                    "Statistics", "Visualization", "Big data", "Functional programming", "Text processing", "Legacy iOS apps",
                    "Engineering", "Simulation", "Scientific computing", "Research", "Compilers", "Automation",
                    "Linux administration", "Windows automation", "DevOps", "Real-time systems", "Telecom",
                    "Simulations", "Banking", "Finance", "JVM ecosystem", ".NET ecosystem", "Low-level programming",
                    "Smart contracts (Ethereum)", "Hardware design", "FPGA programming", "Digital circuits",
                    "Logic programming", "Military", "Avionics", "OOP", "Cross-platform development", "Fast scripting",
                    "Facebook’s HHVM ecosystem", "SAP systems", "Quantum computing", "Math-heavy programming",
                    "Legacy systems", "Educational programming", "Basics", "Beginner education", "Kids programming"
                ]
            }
        ]
    });
};

const getFilterData = (req, res) => {
    try {
        let { scope, duration, difficulties } = req.query;

        if (!scope && !duration && !difficulties) throw new Error("Filter is invalid!");

        let resultArray = languages;
        let queryType = [];

        // Scope filter
        if (scope) {
            let userScope = scope.toLowerCase().trim();
            resultArray = resultArray.filter(language =>
                language.scope.some(element => element.toLowerCase() === userScope)
            );
            queryType.push("scope");
        }

        // Duration filter
        if (duration) {
            let maxDuration = Number(duration);
            resultArray = resultArray.filter(language =>
                Number(language.duration) <= maxDuration
            );
            queryType.push("duration");
        }

        // Difficulties filter
        if (difficulties) {
            let userDifficulty = difficulties.toLowerCase().trim();
            resultArray = resultArray.filter(language =>
                language.difficulties.toLowerCase() === userDifficulty
            );
            queryType.push("difficulties");
        }

        if (resultArray.length === 0) throw new Error(`Unable to find languages based on ${queryType}`);

        res.status(200).json({
            message: `Got result based on ${queryType.join(", ")}`,
            resultCount: resultArray.length,
            results: resultArray
        });

    } catch (err) {
        console.error(err);
        res.status(400).json({
            message: "Unable to get data based on filter!",
            error: err.message,
            possibleFilters: ["?scope", "?duration", "?difficulties"]
        });
    }
};

export { getDetails, getFilterData };
