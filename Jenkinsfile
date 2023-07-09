pipeline {
  agent any
  
  stages {
    stage('Git Trigger') {
      steps {
        
        git 'https://github.com/CrossStack-Q/Youtube_Next.git'
      }
    }
    
    stage('Build App') {
      steps {
        sh 'cd nextapp && npm install' // Install dependencies
        sh 'cd nextapp && npm run build' // Build the Next.js app
      }
    }
    
    stage('Build Docker Image') {
      steps {
        // This stage builds a Docker image of your app
        // Adjust the Dockerfile location and image name accordingly
        sh 'docker build -t youtube:latest .'
      }
    }
    
    stage('Push to DockerHub') {
      steps {
        // This stage pushes the Docker image to DockerHub
        // Adjust the DockerHub repository and credentials
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
          sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
          sh 'docker push litanurag/youtube'
        }
      }
    }
  }
}
