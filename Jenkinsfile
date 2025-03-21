pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "docker.io/prabha20/dosa-delight"
        IMAGE_TAG = "latest"
        REGISTRY = "docker.io" // Using Docker Hub
        DOCKER_USER = "prabha20"
        DOCKER_PASS = "Ranjith@1311"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    sh 'echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'docker push ${IMAGE_NAME}:${IMAGE_TAG}'
                }
            }
        }

        stage('Deploy with Docker') {
            steps {
                script {
                    sh 'docker run -d -p 8083:82 ${IMAGE_NAME}:${IMAGE_TAG}'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
        always {
            sh 'docker image prune -f'
        }
    }
}