pipeline {
  agent any
  environment {
    PATH = '/Users/jxpearce/.nvm/versions/node/v8.3.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/Users/jxpearce/go/bin:/tmp/test-etcd:/Users/jxpearce/miniconda2/bin:/Users/jxpearce/Library/Python/3.6/bin'
  }
  stages {
    stage('npm i') {
      steps {
        sh 'npm i'
      }
    }
    stage('Static analysic') {
      steps {
        sh 'npm test'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run lint'
      }
    }
  }
}
