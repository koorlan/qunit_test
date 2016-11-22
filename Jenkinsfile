node {
stage('git pull'){
    git credentialsId: 'b3db5dd3-f9d6-4568-86e0-a4071caf5ec2', url: 'https://github.com/koorlan/qunit_test/'
}
    stage('pre-requisites'){
        sh 'npm install'
    }

   stage('compile and test'){
       sh 'grunt'

   }
   stage('Publish'){
      junit '_build/test-reports/TEST-Y.xml'
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '_build/test-reports/', reportFiles: 'TEST-Y.xml', reportName: 'HTML Report'])
   }
}
