pipeline {
  agent any
  
  stages {
    stage('Git Trigger') {
      steps {
        // This stage triggers the pipeline whenever a commit is made to the Git repository
        // You can configure the specific trigger based on your Git setup
        // For example, using the 'pollSCM' trigger to check for changes every minute
        // Adjust the Git URL and credentials according to your repository
        git 'https://github.com/yourusername/your-repo.git'
      }
    }
    
    stage('Build App') {
      steps {
        // This stage builds your Next.js app
        // Adjust the commands based on your specific setup
        sh 'npm install' // Install dependencies
        sh 'npm run build' // Build the Next.js app
      }
    }
    
    stage('Build Docker Image') {
      steps {
        // This stage builds a Docker image of your app
        // Adjust the Dockerfile location and image name accordingly
        sh 'docker build -t your-image-name .'
      }
    }
    
    stage('Push to DockerHub') {
      steps {
        // This stage pushes the Docker image to DockerHub
        // Adjust the DockerHub repository and credentials
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
          sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
          sh 'docker push your-dockerhub-repo/your-image-name'
        }
      }
    }
  }
}
