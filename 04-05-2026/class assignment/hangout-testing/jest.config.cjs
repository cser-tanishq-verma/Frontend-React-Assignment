module.exports={testEnvironment:"jsdom",
    moduleFileExtenstions:["js","jsx"],
    transform:{
        "^.+\\.(js|jsx)$":"babel-jest"
    }
    ,
    setUpFilesAfterEnv:["<rootDir>/jest.setUp.js"]

 }