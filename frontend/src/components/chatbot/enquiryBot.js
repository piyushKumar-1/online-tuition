import React, { Component, Fragment } from 'react';
 import ChatBot from 'react-simple-chatbot';
 import { connect } from 'react-redux';
 import PropTypes from 'prop-types';
 import Enquiry from './Enquiry.js'
 
 
class SimpleForm extends Component {
    static propTypes= {
      auth: PropTypes.object.isRequired,
      user: PropTypes.object,
    };

     render() {
      const enCources = ['cse', 'ece', 'aerospace', 'it', 'civil', 'eee']
      const ch = () => {  
        try{
          const first_name = this.props.auth.user.first_name;
          console.log(this.props.auth.user.first_name)
          return (
              <ChatBot
           steps={[
             {
               id: '1',
              options: [
                { value: 'courseEnquiry', label: 'Course Enquiry', trigger: '2' },
                { value: 'generalEnquiry', label: 'Other Enquiry', trigger: '3' },
              ],

             },
             {
              id:'2',
              message: 'Which Department?',
              trigger:'which',
             },
             {
              id:'which',
              options: [
                { value: 'engineering', label: 'Engineering', trigger: 'engineering' },
                { value: 'programming', label: 'Programming', trigger: '1' },
                { value: 'languages', label: 'Languages', trigger: '1' },
              ],
             },
             {
               id: '3',
              message: 'Enter Your Quiery',
              trigger: '4',
             },
             {
              id: '4',
              message: 'Our coustomer care service will contact you shortly, Have a nice day :).'
             },
             {
              id: 'engineering',
              message: 'Your Course name?',
              trigger: '6',
             },
             {
              id: '6',
              user: true,
              trigger: '7',
              validator: (value) => {

                for(i=0;i<enCources.length;i++){
                  if(enCources[i]==value){
                  return true;
                  } else if(i==enCources.length-1){
                    return "We Don't offer this course yet."
                  }
                }
              },
             },
             {
              id: '7',
              message: 'What do you want to know?',
              trigger: 'mainquestion',
             },
             {
              id: 'mainquestion',
              asMessage: true,
              trigger: '1',
             },
           ]}
         />
            )
        } catch(err) {
          console.log(err);
        }
      }

      const bot = (
        <>
        
        
         </>
        )
       return (
        <>
        { this.props.auth.isAuthenticated ? ch() : ''}
         
        </>
       );
     }
   }


const mapStateToProps= state => ({
  auth :state.auth,
  user: state.auth.user,
})

export default connect(mapStateToProps)(SimpleForm);