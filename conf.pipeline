node {
    stage('pre-requisites'){
        sh 'npm install'
    }
   stage('git pull'){
       git credentialsId: 'b3db5dd3-f9d6-4568-86e0-a4071caf5ec2', url: 'https://github.com/koorlan/qunit_test/'
   }
   stage('compile and test'){
       sh 'grunt'
   }
}
