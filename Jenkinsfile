pipeline {
    agent any
    tools {
        // Define tools you need, e.g., Node.js
        nodejs 'node24' // Ensure you have a NodeJS tool configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Get the code from your SCM (e.g., Git)
                git branch: 'main', url: 'https://github.com/madhumitamohan/a11y-dummy-project.git' // Replace YOUR_REPOSITORY_URL and branch if needed
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint:report || true'
            }
        }

        stage('Publish Lint Report') {
            steps {
                sh '''
                    REPORT_CONTENT=$(cat eslint-report.json)
                    PROJECT_NAME="a11y-dummy-project"
                    PROJECT_ID="a11y-dummy-project"

                    JSON_PAYLOAD=$(jq -n \
                                    --arg projectName "${PROJECT_NAME}" \
                                    --arg projectId "${PROJECT_ID}" \
                                    --argjson report "${REPORT_CONTENT}" \
                                    '{projectName: $projectName, projectId: $projectId, report: $report}')

                    curl -X POST \
                    -H "Content-Type: application/json" \
                    --data "${JSON_PAYLOAD}" \
                    http://localhost:8081/api/lint-reports
                '''
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            // Clean up workspace after build
            cleanWs()
        }
        success {
            echo 'Pipeline finished successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}