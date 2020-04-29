import { detect } from 'detect-browser';

import '../styles/style.less';

import pathnamereplace from './lib/pathnamereplace';
import General from './pages/general';
import Careers from './pages/careers';
import Conferences from './pages/conferences';
import Customers from './pages/customers';
import Partners from './pages/partners';
import Meetup from './pages/meetup';
import Training from './pages/training';
//mport Webinars from './pages/webinars';
import Whitepapers from './pages/whitepapers';
import SubscribeForm from './modules/subscribeform';
import Contact from './modules/contact';


General.initAnimations();
General.polyfillFind();
General.newsBar();

SubscribeForm.initEventListener();

if ($('.whitepapers-detail').length > 0) {
  Whitepapers.loadSingleWhitepaper();
}


/*
if ($('.webinars').length > 0) {
  const webinars = new Webinars();
  webinars.init();
}
*/


const contact = new Contact();
if ($('#contact').length > 0) {
  contact.initContactForm();
}
if ($('#trialform').length > 0) {
  contact.initTrialForm();
}
if ($('#partnerForm').length > 0) {
  contact.initPartnerForm();
}
if ($('.training').length > 0) {
  const training = new Training();
  training.loadTrainings();
}
if ($('.partner').length > 0) {
  const partners = new Partners();
  partners.init();
}
if ($('.conferences').length > 0) {
  const conferences = new Conferences();
  conferences.loadConferences();
}
if ($('.customers').length > 0) {
  const customers = new Customers();
  customers.init();
}
if ($('.meetups').length > 0) {
  const meetups = new Meetup();
  meetups.loadMeetups();
}

if ($('.careers').length > 0) {
  const careers = new Careers();
  careers.loadCareers();
}

const browser = detect();
$('body').addClass(browser.name);
