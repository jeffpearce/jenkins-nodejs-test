pipeline {
  agent any
  stages {
    stage('Static analysic') {
      steps {
        sh 'npm test'
      }
    stage('Test') {
      steps {
        sh 'npm run lint'        
      }
    }
  }
}
