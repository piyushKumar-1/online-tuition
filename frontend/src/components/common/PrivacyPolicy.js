import React from 'react';
import '../../styles/about.css'
import { Link, Redirect } from 'react-router-dom';
class PrivacyPolicy extends React.Component {

	componentDidMount() {
		 window.scrollTo(0, 0)
	 	document.title = "Privacy Policy | LearnerZ Corner";
	 
	}



	render() {
		return (

			<>
			<br/><br/>
				<div className="container">
					<div className="row">
					<div className="col-sm-4 m-auto">
							<div className="">
							<div className="text-center bor shadow m-auto">
								<h3><b>Privacy Policy</b></h3>
							</div>
							</div>
						</div>
						<div className="col-sm-8">
							<div className="about-lernerz">
								<p><i style={{fontWeight:'600'}}>Company</i> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to LearnerZ Corner.
We use your Data to provide better Service. By using the Service, you agree to use the information in accordance with this policy.</p>
								<p>The platform provides a way to earn anybody who aspire to teach to student community from different parts of the world.</p>
							</div>
						</div>
						
					</div>
					<br/><br/>
					<br/>
					<div>
						<div className="vission">
							<h3 className="f-600">Collecting and Using Your Personal Data</h3><br/>
							<div className="">
								<div className="vission">
									<h4 className="f-600">Types of Data Collected</h4><br/>
								</div>
								<div className="vission">
									<h5 style={{fontWeight:'600'}} className="">Personal Data</h5>
								</div>
								<div className="statement">
									<p>While using our Service, We may ask you to provide Us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
									<ul style={{listStyle:'initial'}}>
										<li>Email address</li>
									    <li>First name and last name</li>
									    <li>Phone number</li>
									    <li>Address, State, Province, ZIP/Postal code, City</li>
									    <li>Usage Data</li>
									</ul>
								</div>	<br/>	<br/>
								<div className="vission">
									<h5 style={{fontWeight:'600'}} className="">Usage Data</h5>
								</div>
								<div className="statement">
									<p>Usage Data is collected automatically when using the Service.</p>
									<p>Usage Data may include information such as your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
									<p>When you access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
									<p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device.</p>
								</div>	
							</div>
						</div>
					</div>

					<br/>
					<br/>
					<div className="values">
						<h3 style={{fontWeight:'600'}}>Tracking Technologies and Cookies</h3><br/>
						<p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
						<p>You can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if you do not accept Cookies, You may not be able to use some parts of Our Service.</p>
						<p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.</p>
						<div className="">
							<h4 className="f-600">Use of Personal Data</h4><br/>
							<p>The Company may use Personal Data for the following purposes:</p>
							<ul style={{listStyle:'initial'}}>
								<li><span style={{fontWeight:'600'}}>To provide and maintain our Service</span>, including to monitor the usage of Our Service.</li>
							    <li><span style={{fontWeight:'600'}}>To manage your Account:</span> to manage your registration as a user of the Service. The Personal Data you provide can give you access to different functionalities of the Service that are available to you as a registered user.</li>
							    <li><span style={{fontWeight:'600'}}>To contact you</span></li>
							    <li><span style={{fontWeight:'600'}}>To provide you with news</span>, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.</li>
							    <li><span style={{fontWeight:'600'}}>To manage Your requests:</span> To attend and manage your requests to Us.</li>
							</ul>
						</div>
					</div>
					<br/>
					<div className="">
						<h3 style={{fontWeight:'600'}}>Disclosure of Personal Data</h3><br/>
						<div className="">
							<h4 className="f-600">Legal requirements</h4><br/>
							<p>The Company may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
							<ul style={{listStyle:'initial'}}>
								<li>Comply with a legal obligation</li>
							    <li>Protect and defend the rights or property of the Company</li>
							    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
							    <li>Protect the personal safety of users of the Service or the public</li>
							    <li>Protect against legal liability</li>
							    <li style={{listStyle:'none'}}>Security of Personal Data</li>
							    <li>The security of your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect your Personal Data, We cannot guarantee its absolute security.</li>
								
							</ul>
						</div>
						<h5 style={{fontWeight:'600'}}>Service Providers</h5>
						<p>We may employ third party companies and individuals to facilitate Our
							Service, on Our behalf to perform Service related services to assist Us in
							analyzing how Our Service is used. These third parties have access to your
							Personal Data only to perform these tasks on Our behalf and are obligated
							not to disclose or use it for any other purpose.
						</p>
					</div>
					<br/>
					<div className="">
						<h5 style={{fontWeight:'600'}}>Links to Other Websites</h5>
						<p>Our Service may contain links to other websites that are not operated by Us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
						<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
					</div>
					<br/>
					<div className="">
						<h5 style={{fontWeight:'600'}}>Children’s Policy</h5>
						<p>We believe that privacy of children is of utmost importance and therefore, the Company does not take any personally identifiable information from children below 13 years of age unless and until such information is shared with parental guidance/consent. On coming to know that any child below the age of 13 has shared personally identifiable information on Our site without parental guidance/consent, we reserve the right to delete such information.</p>
					</div>
					<br/>
					<div className="">
						<h5 style={{fontWeight:'600'}}>Changes to this Privacy Policy</h5>
						<p>We may update Our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
						<p>We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
						<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
					</div>
					<br/>
					<div className="">
						<h5 style={{fontWeight:'600'}}>Contact Us</h5>
						<p>If you have any questions about this Privacy Policy, you can contact us:</p>
						<ul style={{listStyle:'initial'}}>
							<li>By email: support@learnerzcorner.com</li>
						</ul>
					</div>

				</div>		
				<br/><br/>	
				<br/><br/>	
			</>
		);
	}
}


export default PrivacyPolicy;