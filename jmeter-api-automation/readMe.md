## Pre-requisite

1. Download and install maven https://maven.apache.org/download.cgi or `brew install maven`
2. Visual studio code or any other IDE

## Downloading project dependencies

1. Download repo
2. `cd /<projectfolder>`
3. To download all dependencies
   `mvn compile`
4. Resolve dependencies
   `mvn dependency:resolve-plugins`

## To create a Test cases

1. Launch Terminal --> `jmeter`
2. Save All test cases in `cd /<projectfolder>/src/test/jmeter`

## To edit any test case

1. Launch Terminal --> `jmeter`
2. Edit any test cases in `cd /<projectfolder>/src/test/jmeter/[TestCase].jmx`

## To Edit Excel File for data driven tests

1. `cd /<projectfolder>/src/test/jmeter`
2. Open `.csv` file and edit

## To Run/Verify project based on platform and environment

1. Navigate to folder containing pom.xml --> `cd /<projectfolder>`
2. Use example command to run test based on environment.
   Example: `mvn clean verify -Denv=prod`

Note:

1. Acceptable values:
   -Denv = ["prod", "uat", "stage"]

## To Run/Verify project based on file servers##

1. Navigate to folder containing pom.xml --> `cd /<projectfolder>`
2. Use example command to run test based on environment.
   Example: `mvn clean verify -Denv=prod`

Note:

1. `-DapiPath1` dependent of platform. If unsure refer _properties_ file in _src/test/properties_

## To Run single jmx file

1.  `cd /<projectfolder>`
2.  `mvn clean verify -Denv=<env> -DjmeterScript=<fileName>.jmx`

**Some Examples of valid commands**

`mvn clean verify`
`mvn clean verify -Denv=prod`
`mvn clean verify -Denv=prod -DjmeterScript=audioArchive.jmx`

## To Run LOAD TEST - Out of scope

1.  `cd /<projectfolder>`
2.  `mvn clean verify -Denv=<env_platform> -DjmeterScript=loadTest.jmx -DmaxUsers=<integer> -DrampUpPeriod=<integer>`

Example:

`mvn clean verify -Denv=prod -DjmeterScript=loadTest.jmx -DmaxUsers=50 -DrampUpPeriod=2`

Note:

1. `-DmaxUsers` defaults to 1, if parameter and value is not specified.
2. `-DrampUpPeriod` defaults to 1, if parameter and value is not specified.

## Auto Generated Reports

1. HTML Reports are found in --> `cd /<projectfolder>/target/jmeter/reports/`

2. CSV results are found in --> `cd /<projectfolder>/target/jmeter/results/`

3. Logs are found in --> `cd /<projectfolder>/target/jmeter/logs/`
